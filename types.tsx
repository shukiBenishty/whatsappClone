export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
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
}