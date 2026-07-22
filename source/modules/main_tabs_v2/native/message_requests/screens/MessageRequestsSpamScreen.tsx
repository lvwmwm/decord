// Module ID: 15460
// Function ID: 117924
// Name: MessageRequestsScreen
// Dependencies: []
// Exports: default

// Module 15460 (MessageRequestsScreen)
let closure_2 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx");

export default function MessageRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const importDefault = navigation;
  const items = [navigation];
  const goToMessageRequestPreview = React.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  return jsx(importDefault(dependencyMap[2]), { goToMessageRequestPreview });
};
