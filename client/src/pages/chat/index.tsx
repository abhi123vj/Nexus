import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useRef, useState } from "react";

const Chat = () => {

 

  return (
    <>
      <div className="h-[100vh] bg-slate-600 ">
        <div className="grid grid-cols-12  gap-2 h-[100vh]">
          <div className="  col-span-3 h-full flex flex-col">
            <div className="bg-emerald-200 h-[10%]">Search</div>
            <div  className="bg-emerald-300  flex-1">
              <ScrollArea style={{  }}>
                Jokester began sneaking into the castle in the middle of the
                night and leaving jokes all over the place: under the king's
                pillow, in his soup, even in the royal toilet. The king was
                furious, but he couldn't seem to stop Jokester. And then, one
                day, the people of the kingdom discovered that the jokes left by
                Jokester were so funny that they couldn't help but laugh. And
         
              </ScrollArea>
            </div>
          </div>
          <div className="h-full bg-emerald-400 col-span-6 ">
            <div className="  col-span-3 h-full flex flex-col">
              <div className="bg-emerald-200 h-[10%]">Chat header</div>
              <div className="bg-emerald-300 flex-1 ">Chats</div>
            </div>
          </div>
          <div className="h-full bg-emerald-200 col-span-3 ">pr</div>
        </div>
      </div>
    </>
  );
};

export default Chat;
