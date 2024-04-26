import React from 'react'
import { Input } from '/components/ui/Input'
import { Button } from '/components/ui/Button'
import { Search } from 'lucide-react'

function CategorySearch() {
  return (
    <div className='mb-10 items-center flex flex-col gap-2'>
    <h2 className='font-bold text-4xl tracking-wide'> Doctor <span className='text-primary'>Match</span></h2>
     <h2 className='text-gray-500 text-xl'>Find Your Perfect Appointment Match</h2>

     <div className="mt-3 flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search....." />
      <Button type="submit">
      <Search 
        className='h-4 w-4 mr-2'
      />
      Search</Button>
    </div>
    </div>
  )
}

export default CategorySearch
