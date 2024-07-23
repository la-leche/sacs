import { Chat } from "@/components/(Chats)/Chat";
import { CurrentUser } from "@/components/(Chats)/CurrentUser";
import { UserChats } from "@/components/(Chats)/UserChats";

export default function ChatPage() {
  return (
    <div>
      <div>
        <CurrentUser />
        <UserChats />
      </div>
      <Chat />
    </div>
  );
}
