// Module ID: 16683
// Function ID: 16684
// Name: MessageRequestsSpamScreen
// Dependencies: [19, 21, 16681, 2]
// Exports: default

// Module 16683 (MessageRequestsSpamScreen)
import SpamMessageListDefault from "SpamMessageList" /* 16681 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx");

export default function MessageRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const items = [navigation];
  const goToMessageRequestPreview = noop.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  return jsx(SpamMessageListDefault, { goToMessageRequestPreview });
};
