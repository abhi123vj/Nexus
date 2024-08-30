import { ScrollArea } from "@/components/ui/scroll-area";
import { BsSearch } from "react-icons/bs";
import { LuPhone } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useMemo, useState } from "react";
import ChatTile from "./components/ChatTile";
import ChatSearch from "./components/ChatSearch";

const Chat = () => {
  const users = useMemo(
    () => [
      {
        name: "Alice Smith",
        lastMessage: "Hey, how's it going?",
        avatarUrl: "https://github.com/shadcn.png",
      },
      {
        name: "Bob Johnson",
        lastMessage: "Did you finish the report?",
        avatarUrl: "https://github.com/shadcn.png",
      },
      {
        name: "Charlie Brown",
        lastMessage: "Let's catch up later.",
        avatarUrl: "https://github.com/shadcn.png",
      },
      {
        name: "David Williams",
        lastMessage: "I'll be there in 10 minutes.",
        avatarUrl: "https://github.com/shadcn.png",
      },
      {
        name: "Eva Davis",
        lastMessage: "Happy Birthday!",
        avatarUrl: "https://github.com/shadcn.png",
      },
      {
        name: "Franklin Miller",
        lastMessage: "Can you send me the file?",
        avatarUrl: "https://github.com/shadcn.png",
      },
      {
        name: "Grace Wilson",
        lastMessage: "See you at the meeting.",
        avatarUrl: "https://github.com/shadcn.png",
      },
      {
        name: "Henry Moore",
        lastMessage: "What's the plan for tomorrow?",
        avatarUrl: "https://github.com/shadcn.png",
      },
      {
        name: "Isabella Taylor",
        lastMessage: "Got it, thanks!",
        avatarUrl: "https://github.com/shadcn.png",
      },
      {
        name: "Jack Anderson",
        lastMessage: "I'm on my way.",
        avatarUrl: "https://github.com/shadcn.png",
      },
      {
        name: "Karen Thomas",
        lastMessage: "Let's grab lunch.",
        avatarUrl: "https://github.com/shadcn.png",
      },
      {
        name: "Liam Harris",
        lastMessage: "Can we reschedule?",
        avatarUrl: "https://github.com/shadcn.png",
      },
      {
        name: "Mia Clark",
        lastMessage: "Sounds good to me!",
        avatarUrl: "https://github.com/shadcn.png",
      },
      {
        name: "Noah Lewis",
        lastMessage: "I'll call you later.",
        avatarUrl: "https://github.com/shadcn.png",
      },
      {
        name: "Olivia Robinson",
        lastMessage: "Thanks for the update.",
        avatarUrl: "https://github.com/shadcn.png",
      },
      {
        name: "Jane Doe",
        lastMessage: "See you soon!",
        avatarUrl: "https://github.com/shadcn.png",
      },
    ],
    []
  );
  const [userInput, setUserInput] = useState("");
  const [activeUser, setActiveUser] = useState(users[0]);
  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(userInput.toLowerCase()) ||
        user.lastMessage.toLowerCase().includes(userInput.toLowerCase())
    );
  }, [userInput, users]);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="h-[80%] w-[80%] shadow-2xl rounded-xl ">
          <div className="grid sm:grid-cols-3 h-full">
            <div className=" bg-transparent-700 h-full overflow-hidden ">
             
              <ChatSearch userInput={userInput} onChange={(event) => {
                    setUserInput(event.target.value);
                  }} />
              <ScrollArea className="h-[90%]">
                {filteredUsers.map((item, index) => {
                  return (
                    <ChatTile
                      key={index.toString()}
                      name={item.name}
                      message={item.lastMessage}
                      imageUrl={item.avatarUrl}
                      isActive={activeUser === item}
                      onClicked={() => setActiveUser(item)}
                    />
                  );
                })}
              </ScrollArea>
            </div>
            <div className="col-span-2 bg-transparent h-full overflow-hidden hidden sm:block">
              <div className="h-[10%] bg-transparent flex border-b-2   border-l-2 border-slate-200 ">
                <div className=" w-full grow flex flex-col justify-center items-start ">
                  <div className=" pl-4">
                    <span className="text-base		font-medium	">
                      {activeUser.name}
                    </span>
                    <br />
                    <span className="text-xs		font-light	">Online</span>
                  </div>
                </div>

                <div className=" flex h-full w-10 justify-center items-center ">
                  <BsSearch className="w-full" />
                </div>
                <div className="  flex h-full w-10  justify-center items-center">
                  <LuPhone className="w-full" />
                </div>

                <div className="  flex h-full w-10  justify-center items-center">
                  <BsThreeDotsVertical className="w-full" />
                </div>
              </div>
              <ScrollArea className="h-[90%] ">
                <div className="bg-red-50 w-full h-64 "> Person 1</div>
                <div className="bg-red-100 w-full h-64 ">Person 1</div>
                <div className="bg-red-50 w-full h-64 ">Person 1</div>
                <div className="bg-red-100 w-full h-64 ">Person 1</div>
                <div className="bg-red-50 w-full h-64 ">Person 1</div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
