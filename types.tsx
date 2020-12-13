export type RootStackParamList = {
  Root: undefined;
  Chat: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabChatsParamList = {
  ChatsScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imageUrl?: String;
}

export type Message = {
  id: String;
  content: String;
  sendAt: String;
  reciveAt?: String;
  readAt?: String;

}

export type ChatRoom = {
  id: String;
  name: String
  users: User[];
  messages?: Message[];
  imageUrl?: String;
}