"use client";
import React, { useEffect, useState } from "react";
import NormalForm from "./normalForm";
export default function Home() {
  // const [message, setmessage] = useState("Hi Nigga");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8080/");
  //       const data = await response.json();
  //       setmessage(data.message);
  //     } catch (error) {
  //       console.log("error fetching the data", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      {/* {message} */}
      <NormalForm />
    </>
  );
}
