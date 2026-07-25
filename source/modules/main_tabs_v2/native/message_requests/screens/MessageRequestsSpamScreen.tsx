// Module ID: 15634
// Function ID: 120548
// Name: MessageRequestsScreen
// Dependencies: [31, 33, 15632, 2]
// Exports: default

// Module 15634 (MessageRequestsScreen)
import result from "result";
import { jsx } from "jsxProd";

const result = require("PendingSpamMessageRequestRow").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx");

export default function MessageRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const items = [navigation];
  const goToMessageRequestPreview = React.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  return jsx(navigation(15632), { goToMessageRequestPreview });
};
