// Module ID: 15714
// Function ID: 15715
// Name: MessageRequestsScreen
// Dependencies: [19, 21, 15712, 2]
// Exports: default

// Module 15714 (MessageRequestsScreen)
import noop from "noop";
import { jsx } from "jsxProd";

const result = require("PendingSpamMessageRequestRow").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx");

export default function MessageRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const items = [navigation];
  const goToMessageRequestPreview = React.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  return jsx(navigation(15712), { goToMessageRequestPreview });
};
