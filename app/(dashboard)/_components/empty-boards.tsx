import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const EmptyBoards = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" alt="empty" width={110} height={110} />
      <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating aboard for your organisation
      </p>
      <div className="mt-6">
        <Button size="lg">Create board</Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
