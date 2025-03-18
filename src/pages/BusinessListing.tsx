import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { createClient } from '@supabase/supabase-js';

// Define the form data structure
type BusinessHours = {
  open: string;
  close: string;
  isClosed: boolean;
};

interface FormData {
  name: string;
  streetLineOne: string;
  streetLineTwo?: string;
  city: string;
  state: string;
  zipCode: string;
  sunday: BusinessHours;
  monday: BusinessHours;
  tuesday: BusinessHours;
  wednesday: BusinessHours;
  thursday: BusinessHours;
  friday: BusinessHours;
  saturday: BusinessHours;
  tags: string[];
}

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

const BusinessListingForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      streetLineOne: '',
      streetLineTwo: '',
      city: '',
      state: '',
      zipCode: '',
      sunday: { open: '09:00', close: '17:00', isClosed: false },
      monday: { open: '09:00', close: '17:00', isClosed: false },
      tuesday: { open: '09:00', close: '17:00', isClosed: false },
      wednesday: { open: '09:00', close: '17:00', isClosed: false },
      thursday: { open: '09:00', close: '17:00', isClosed: false },
      friday: { open: '09:00', close: '17:00', isClosed: false },
      saturday: { open: '09:00', close: '17:00', isClosed: false },
      tags: [],
    },
  });

  const availableTags = [
    'Coffee',
    'A drink',
    'Tapas',
    'Dinner',
    'Activity based',
    'Walk',
    'Art based',
    'Music',
    'Movie',
    'Lunch',
  ];

  // Generate time options from 6am to midnight
  const generateTimeOptions = () => {
    const options = [];
    for (let i = 6; i <= 24; i++) {
      const hour = i === 24 ? '00' : i.toString().padStart(2, '0');
      options.push(`${hour}:00`);
    }
    return options;
  };

  const timeOptions = generateTimeOptions();

  const onSubmit = async (data: FormData) => {
    try {
      console.log('Form data:', data);
      
      // Format the data for Supabase
      const formattedData = {
        name: data.name,
        address: {
          street_line_one: data.streetLineOne,
          street_line_two: data.streetLineTwo || null,
          city: data.city,
          state: data.state,
          zip_code: data.zipCode,
        },
        business_hours: {
          sunday: data.sunday.isClosed ? { closed: true } : { open: data.sunday.open, close: data.sunday.close },
          monday: data.monday.isClosed ? { closed: true } : { open: data.monday.open, close: data.monday.close },
          tuesday: data.tuesday.isClosed ? { closed: true } : { open: data.tuesday.open, close: data.tuesday.close },
          wednesday: data.wednesday.isClosed ? { closed: true } : { open: data.wednesday.open, close: data.wednesday.close },
          thursday: data.thursday.isClosed ? { closed: true } : { open: data.thursday.open, close: data.thursday.close },
          friday: data.friday.isClosed ? { closed: true } : { open: data.friday.open, close: data.friday.close },
          saturday: data.saturday.isClosed ? { closed: true } : { open: data.saturday.open, close: data.saturday.close },
        },
        tags: data.tags,
      };

      console.log('formattedData -----', formattedData)

      // Insert the data into Supabase
    //   const { data: insertedData, error } = await supabase
    //     .from('business_listings')
    //     .insert(formattedData);

    //   if (error) {
    //     throw new Error(error.message);
    //   }

    //   alert('Business listing saved successfully!');
    } catch (error) {
      console.error('Error saving business listing:', error);
      alert('Error saving business listing. Please try again.');
    }
  };

  // Create a reusable component for the business hours inputs
  const BusinessHoursInput = ({ day, control, errors }: { day: string, control: any, errors: any }) => {
    const dayLowercase = day.toLowerCase() as keyof FormData;
    // Fixed: Use watch() with typecasting to fix the TypeScript error
    const isClosed = watch(`${dayLowercase}.isClosed` as const) as boolean;

    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {day}
        </label>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <div className="flex items-center">
            <Controller
              name={`${dayLowercase}.isClosed` as const}
              control={control}
              render={({ field }) => (
                <input
                  type="checkbox"
                  id={`${dayLowercase}-closed`}
                  className="form-checkbox h-5 w-5 text-blue-600"
                  {...field}
                  checked={field.value}
                />
              )}
            />
            <label htmlFor={`${dayLowercase}-closed`} className="ml-2 text-sm text-gray-700">
              Closed
            </label>
          </div>
          
          {!isClosed && (
            <div className="flex items-center gap-2">
              <div>
                <label className="block text-xs text-gray-500">Open</label>
                <Controller
                  name={`${dayLowercase}.open` as const}
                  control={control}
                  rules={{ required: !isClosed }}
                  render={({ field }) => (
                    <select
                      className="border rounded px-2 py-1 w-24"
                      {...field}
                      disabled={isClosed}
                    >
                      {timeOptions.map((time) => (
                        <option key={`${day}-open-${time}`} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500">Close</label>
                <Controller
                  name={`${dayLowercase}.close` as const}
                  control={control}
                  rules={{ required: !isClosed }}
                  render={({ field }) => (
                    <select
                      className="border rounded px-2 py-1 w-24"
                      {...field}
                      disabled={isClosed}
                    >
                      {timeOptions.map((time) => (
                        <option key={`${day}-close-${time}`} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
            </div>
          )}
        </div>
        {errors[dayLowercase] && (
          <p className="text-red-500 text-xs mt-1">Please set business hours or mark as closed</p>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md text-slate-700">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Add Business Listing</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-gray-50 p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Basic Information</h2>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Business Name*
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              {...register('name', { required: true })}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">Business name is required</p>}
          </div>
          
          {/* Address Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="streetLineOne">
                Street Address*
              </label>
              <input
                id="streetLineOne"
                type="text"
                className={`w-full px-3 py-2 border rounded-md ${errors.streetLineOne ? 'border-red-500' : 'border-gray-300'}`}
                {...register('streetLineOne', { required: true })}
              />
              {errors.streetLineOne && <p className="text-red-500 text-xs mt-1">Street address is required</p>}
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="streetLineTwo">
                Street Address Line 2
              </label>
              <input
                id="streetLineTwo"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                {...register('streetLineTwo')}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                City*
              </label>
              <input
                id="city"
                type="text"
                className={`w-full px-3 py-2 border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                {...register('city', { required: true })}
              />
              {errors.city && <p className="text-red-500 text-xs mt-1">City is required</p>}
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                State*
              </label>
              <input
                id="state"
                type="text"
                className={`w-full px-3 py-2 border rounded-md ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
                {...register('state', { required: true })}
              />
              {errors.state && <p className="text-red-500 text-xs mt-1">State is required</p>}
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zipCode">
                ZIP Code*
              </label>
              <input
                id="zipCode"
                type="text"
                className={`w-full px-3 py-2 border rounded-md ${errors.zipCode ? 'border-red-500' : 'border-gray-300'}`}
                {...register('zipCode', { required: true })}
              />
              {errors.zipCode && <p className="text-red-500 text-xs mt-1">ZIP code is required</p>}
            </div>
          </div>
        </div>
        
        {/* Business Hours */}
        <div className="bg-gray-50 p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Business Hours</h2>
          <p className="text-sm text-gray-600 mb-4">Set your business hours or mark days as closed. Hours are in 24-hour format.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BusinessHoursInput day="Sunday" control={control} errors={errors} />
            <BusinessHoursInput day="Monday" control={control} errors={errors} />
            <BusinessHoursInput day="Tuesday" control={control} errors={errors} />
            <BusinessHoursInput day="Wednesday" control={control} errors={errors} />
            <BusinessHoursInput day="Thursday" control={control} errors={errors} />
            {/* <BusinessHoursInput day="Friday" control={control} errors={errors} />
            <BusinessHoursInput day="Saturday" control={control} errors={errors} /> */}
          </div>
        </div>
        
        {/* Tags */}
        <div className="bg-gray-50 p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Business Tags*</h2>
          <p className="text-sm text-gray-600 mb-4">Select all tags that apply to your business.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {availableTags.map((tag) => (
              <div key={tag} className="flex items-center">
                <input
                  id={`tag-${tag}`}
                  type="checkbox"
                  value={tag}
                  className="form-checkbox h-5 w-5 text-blue-600"
                  {...register('tags', { required: true })}
                />
                <label htmlFor={`tag-${tag}`} className="ml-2 text-sm text-gray-700">
                  {tag}
                </label>
              </div>
            ))}
          </div>
          {errors.tags && <p className="text-red-500 text-xs mt-2">Please select at least one tag</p>}
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
          >
            Submit Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusinessListingForm;