"use client";
import React, { useEffect, useState } from "react";
import { login } from "./login";

export default function Home() {
  const [message, setmessage] = useState("Hi Nigga");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/home");
        const data = await response.json();
        setmessage(data.message);
      } catch (error) {
        console.error("error fetching the data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {message}
      <login />
    </div>
  );
}
