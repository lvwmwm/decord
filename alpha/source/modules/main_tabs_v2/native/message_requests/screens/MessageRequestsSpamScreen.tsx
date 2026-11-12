// Module ID: 19567
// Function ID: 19568
// Name: MessageRequestsSpamScreen
// Dependencies: [19, 21, 19565, 2]
// Exports: default

// Module 19567 (MessageRequestsSpamScreen)
import Fragment from "Fragment" /* 21 */;
import SpamMessageListDefault from "SpamMessageList" /* 19565 */;
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
