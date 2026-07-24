// Module ID: 15624
// Function ID: 120420
// Name: MessageRequestsScreen
// Dependencies: [31, 33, 15622, 2]
// Exports: default

// Module 15624 (MessageRequestsScreen)
import result from "result";
import { jsx } from "jsxProd";

const result = require("PendingSpamMessageRequestRow").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx");

export default function MessageRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const items = [navigation];
  const goToMessageRequestPreview = React.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  return jsx(navigation(15622), { goToMessageRequestPreview });
};
