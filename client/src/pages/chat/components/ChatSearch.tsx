import { Input } from "@/components/ui/input";
import { BsSearch } from "react-icons/bs";
interface ChatSearchProps {
    userInput?: string | number | readonly string[];
   
    onChange:(event : React.ChangeEvent<HTMLInputElement>)=>void
  }
const ChatSearch = ({userInput,onChange}:ChatSearchProps) => {
  return (
    <div className="h-[10%] bg-transparent flex justify-center items-center p-5 relative ">
      <Input
        type="text"
        className="bg-slate-100 pr-10"
        placeholder="Search..."
        value={userInput}
        onChange={onChange}
      ></Input>
      <div className="absolute h-10 w-10 right-5 flex justify-center items-center">
        <BsSearch className="w-full" />
      </div>
    </div>
  );
};

export default ChatSearch;
