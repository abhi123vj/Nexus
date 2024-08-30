import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
interface ChatTileProps {
  name: string;
  message: string;
  imageUrl: string;
  isActive: boolean;
  onClicked: () => void;
}
const ChatTile = ({
  name,
  message,
  imageUrl,
  isActive,
  onClicked,
}: ChatTileProps) => {
  return (
    <div
      className={`w-full h-20 border-b-2 border-slate-200 hover:bg-slate-100 ${
        isActive ? "bg-gray-200" : "bg-transparent "
      }`}
      onClick={onClicked}
    >
      <div className="w-full h-full flex pr-7">
        <div className="flex-none flex items-center justify-center">
          <Avatar className="w-12 h-12 m-4">
            <AvatarImage src={imageUrl} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className=" grow   flex flex-col justify-center">
          <div className="w-full flex flex-col justify-center items-start">
            <div className="flex justify-between w-full">
              <h1 className="text-sm		font-medium	">{name}</h1>
              <h1 className="text-xs	text-slate-500	">10:00 am</h1>
            </div>
            <span className="text-sm	text-slate-500	font-normal			">{message}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatTile;
