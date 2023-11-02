"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dispatch, SetStateAction, useState } from "react";
import { format } from "date-fns";
import ChevronDown from "../assets/chevron_down";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

interface IDatePickerDialog {
  offset: string
  name: string;
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
}

export function DatePickerDialog({
  name,
  date,
  setDate,
  offset
}: IDatePickerDialog) {
  // const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "pl-3 w-full h-12 text-left text-pry-dark font-normal bg-[#EFF1F6] border border-[#EFF1F6] hover:border-[3px] hover:border-pry-dark justify-between",
              !date && "text-muted-foreground"
            )}
          >
            {date ? format(date, "PP") : <span className="text-pry-dark">{name}</span>}
            <ChevronDown />
          </Button>
        </PopoverTrigger>
        {<PopoverContent className={`p-0 w-[26rem] ${offset}`}>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(date) => date < new Date("1900-01-01")}
            initialFocus
          />
        </PopoverContent>}
      </Popover>
    </>
  );
}
