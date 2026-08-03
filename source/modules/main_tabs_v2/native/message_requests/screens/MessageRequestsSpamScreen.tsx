// Module ID: 15807
// Function ID: 15808
// Name: MessageRequestsScreen
// Dependencies: [19, 21, 15805, 2]
// Exports: default

// Module 15807 (MessageRequestsScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const result = require("PendingSpamMessageRequestRow").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx");

export default function MessageRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const items = [navigation];
  const goToMessageRequestPreview = React.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  return jsx(navigation(15805), { goToMessageRequestPreview });
};
