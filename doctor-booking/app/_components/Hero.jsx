import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image
          alt=""
          src="/doctors_standing.jpg"
          width={800}
          height={800}
          className="absolute inset-0 h-full w-full rounded-3xl object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Book Your <span className='text-primary'>Doctor's</span> Appointment with <span className='text-primary'>Ease</span></h2>

        <p className="mt-4 text-gray-600">
        Welcome to Seamless Health Care, where your well-being is our priority. Say goodbye to long waits and endless phone calls; with our intuitive web app, scheduling your doctor's appointments is as easy as a few clicks. Whether you need a routine check-up, a specialist consultation, or urgent care, we've got you covered.
        </p>

        <Button className="mt-10">       
          Explore Now
        </Button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
