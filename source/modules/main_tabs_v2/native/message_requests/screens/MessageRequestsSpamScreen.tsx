// Module ID: 16437
// Function ID: 16438
// Name: MessageRequestsScreen
// Dependencies: [19, 21, 16435, 2]
// Exports: default

// Module 16437 (MessageRequestsScreen)
import closure_2 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx");

export default function MessageRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const items = [navigation];
  const goToMessageRequestPreview = React.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  return jsx(navigation(16435), { goToMessageRequestPreview });
};
