// Module ID: 19388
// Function ID: 19389
// Name: MessageRequestsPreviewScreen
// Dependencies: [19, 6930, 1072, 21, 14285, 9953, 11169, 19389, 11386, 2]
// Exports: default

// Module 19388 (MessageRequestsPreviewScreen)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import MessageManagerDefault from "MessageManager" /* 9953 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6930 */;
import size from "module_2" /* 2 */;

const ME = Constants.ME;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  let tmp5Result;
  const channelId = route.route.params.channelId;
  const ref = react.useRef(null);
  let obj = channelId(14285);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = obj.useIsMessageRequestRestrictedViewer();
  const effect = react.useEffect(() => {
    const obj = MessageManagerDefault;
    const obj2 = { channelId, messageId: ReadStateStore.lastMessageId(channelId) };
    const messages = obj.fetchMessages(obj2);
  }, items);
  const ChannelContainer = channelId(11169).ChannelContainer;
  if (isMessageRequestRestrictedViewer) {
    const obj3 = { channelId };
    tmp5Result = tmp5(tmp7(19389), obj3);
  } else {
    const obj4 = { guildId: tmp6, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp5Result = tmp5(tmp7(11386), obj4);
  }
  return <ChannelContainer guildId={ME} channelId={channelId}>{tmp5Result}</ChannelContainer>;
};
