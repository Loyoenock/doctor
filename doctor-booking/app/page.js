"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorsList from "./_components/DoctorsList";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {

  const [doctorList, setDoctorList] = useState([])

  useEffect(() => {
    getDoctorList()
  }, [])

  const getDoctorList = () => {
    GlobalApi.getDoctorList().then(res => {
      console.log(res.data.data)
      setDoctorList(res.data.data)
    })
  }
  return (
   <div>
    {/* {Hero Section} */}
    <Hero />

    {/* Search and Category */}
    <CategorySearch />

    {/* Popular Doctor List */}

    <DoctorsList doctorList={doctorList} />
   </div>
  );
}
