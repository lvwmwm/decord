// Module ID: 18927
// Function ID: 18928
// Name: MessageRequestsPreviewScreen
// Dependencies: [19, 6836, 1072, 21, 13964, 9809, 10988, 18928, 11195, 2]
// Exports: default

// Module 18927 (MessageRequestsPreviewScreen)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import MessageManagerDefault from "MessageManager" /* 9809 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import size from "module_2" /* 2 */;

const ME = Constants.ME;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  let tmp5Result;
  const channelId = route.route.params.channelId;
  const ref = react.useRef(null);
  let obj = channelId(13964);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = obj.useIsMessageRequestRestrictedViewer();
  const effect = react.useEffect(() => {
    const obj = MessageManagerDefault;
    const obj2 = { channelId, messageId: ReadStateStore.lastMessageId(channelId) };
    const messages = obj.fetchMessages(obj2);
  }, items);
  const ChannelContainer = channelId(10988).ChannelContainer;
  if (isMessageRequestRestrictedViewer) {
    const obj3 = { channelId };
    tmp5Result = tmp5(tmp7(18928), obj3);
  } else {
    const obj4 = { guildId: tmp6, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp5Result = tmp5(tmp7(11195), obj4);
  }
  return <ChannelContainer guildId={ME} channelId={channelId}>{tmp5Result}</ChannelContainer>;
};
