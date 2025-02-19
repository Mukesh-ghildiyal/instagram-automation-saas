"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const PaymentButton = () => {
  return (
    //get their subscription details
    <Button className="bg-gradient-to-br text-white rounded-full from-[#6d60a3] via-[#9434E6] to-[#CC3BD4] font-bold">
      Upgrade
    </Button>
  );
};

export default PaymentButton;
