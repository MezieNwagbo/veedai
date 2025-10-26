"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { XCircleIcon } from "lucide-react";
import { PlusIcon } from "lucide-react";

import { DEFAULT_PAGE } from "@/constants";
import { NewMeetingDialog } from "./new-meeting-dialog";

const MeetingsListHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <NewMeetingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className="py-4 px-4 md:px-8 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-xl">My Meetings</h5>
          <Button onClick={() => setIsDialogOpen(true)} type="submit">
            <PlusIcon /> New Meeting
          </Button>
        </div>
        <div className="flex items-center gap-x-2 p-1">
          {/* TODO: Add Filters Component */}
        </div>
      </div>
    </>
  );
};

export default MeetingsListHeader;
