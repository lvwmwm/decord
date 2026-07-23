// Module ID: 15577
// Function ID: 120098
// Name: MessageRequestsScreen
// Dependencies: [31, 33, 15575, 2]
// Exports: default

// Module 15577 (MessageRequestsScreen)
import result from "result";
import { jsx } from "jsxProd";

const result = require("PendingSpamMessageRequestRow").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx");

export default function MessageRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const items = [navigation];
  const goToMessageRequestPreview = React.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  return jsx(navigation(15575), { goToMessageRequestPreview });
};
