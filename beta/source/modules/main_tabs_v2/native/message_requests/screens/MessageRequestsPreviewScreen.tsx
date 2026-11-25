// Module ID: 19028
// Function ID: 19029
// Name: MessageRequestsPreviewScreen
// Dependencies: [19, 6619, 1071, 21, 13329, 8579, 11103, 19029, 11746, 2]
// Exports: default

// Module 19028 (MessageRequestsPreviewScreen)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import MessageManagerDefault from "MessageManager" /* 8579 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6619 */;
import size from "module_2" /* 2 */;

const ME = Constants.ME;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  let tmp5Result;
  const channelId = route.route.params.channelId;
  const ref = react.useRef(null);
  let obj = channelId(13329);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = obj.useIsMessageRequestRestrictedViewer();
  const effect = react.useEffect(() => {
    const obj = MessageManagerDefault;
    const obj2 = { channelId, messageId: ReadStateStore.lastMessageId(channelId) };
    const messages = obj.fetchMessages(obj2);
  }, items);
  const ChannelContainer = channelId(11103).ChannelContainer;
  if (isMessageRequestRestrictedViewer) {
    const obj3 = { channelId };
    tmp5Result = tmp5(tmp7(19029), obj3);
  } else {
    const obj4 = { guildId: tmp6, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp5Result = tmp5(tmp7(11746), obj4);
  }
  return <ChannelContainer guildId={ME} channelId={channelId}>{tmp5Result}</ChannelContainer>;
};
