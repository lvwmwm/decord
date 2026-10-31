// Module ID: 18975
// Function ID: 18976
// Name: MessageRequestsSpamScreen
// Dependencies: [19, 21, 18973, 2]
// Exports: default

// Module 18975 (MessageRequestsSpamScreen)
import Fragment from "Fragment" /* 21 */;
import SpamMessageListDefault from "SpamMessageList" /* 18973 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx");

export default function MessageRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const items = [navigation];
  const goToMessageRequestPreview = react.useCallback((channelId) => {
    const obj = { channelId };
    return navigation.push("preview", obj);
  }, items);
  return jsx(SpamMessageListDefault, { goToMessageRequestPreview });
};
