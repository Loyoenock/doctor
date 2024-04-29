"use client"
import React, { useEffect, useState } from 'react'
import { Input } from '/components/ui/Input'
import { Button } from '/components/ui/Button'
import { Search } from 'lucide-react'
import GlobalApi from '../_utils/GlobalApi'

function CategorySearch() {

  const [categoryList, setCategoryList] = useState([])
  useEffect(() => {
    getCategoryList()  
  }, [])

  const getCategoryList=() => {
    GlobalApi.getCategory().then(res => {
      console.log(res.data.data)
      setCategoryList(res.data.data)
    })
  }

  return (
    <div className='mb-10 items-center flex flex-col gap-2 px-5'>
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
      {/* Display Category List */}
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5'>        
        {categoryList.map((item, index) =>index<6&&    (
          <div key={index} className='flex flex-col text-center gap-2 items-center p-5 bg-blue-50 m-2 rounded-lg hover:scale-110 transition-all ease-in-out cursor-pointer'>
            <img src={item.attributes?.Icon?.data.attributes?.url} alt='Icon'
              width={40} height={40} />
            <label className='text-blue-600 text-sm'>{item.attributes?.Name}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategorySearch
