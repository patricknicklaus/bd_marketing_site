import React from 'react'

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite text-black">
        <main id="careers_page" className="min-h-screen flex items-center justify-center py-16">
            <div className="max-w-5xl text-center">
                <h2 className="text-5xl md:text-9xl font-bold text-hotPink">Not found...</h2>
                <h4 className="text-sm md:text-3xl text-hotPink mb-10">You've wondered onto a page that doesn't exist... Doh!</h4>
            </div>
        </main>
    </div>
  )
}

export default NotFound
