import { Button } from "@/components/ui/button";
import React from "react";
import Loader from "../loader";
import { AutomationDuoToneBlue, AutomationDuoToneWhite } from "@/icons";

type Props = {};
const CreateAutomation = (props: Props) => {
  return (
    <Button className="lg;px-10 oy-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3342CC] font-medium to-[#1C2D70]">
      <Loader state={false}>
        <AutomationDuoToneWhite />
        <p className="lg:inline hidden">Create an Automation</p>
      </Loader>
    </Button>
  );
};

export default CreateAutomation;
