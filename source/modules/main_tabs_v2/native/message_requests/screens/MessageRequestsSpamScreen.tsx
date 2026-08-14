// Module ID: 16059
// Function ID: 16060
// Name: MessageRequestsScreen
// Dependencies: [19, 21, 16057, 2]
// Exports: default

// Module 16059 (MessageRequestsScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const result = require("PendingSpamMessageRequestRow").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx");

export default function MessageRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const items = [navigation];
  const goToMessageRequestPreview = React.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  return jsx(navigation(16057), { goToMessageRequestPreview });
};
