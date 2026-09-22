// Module ID: 17009
// Function ID: 17010
// Name: MessageRequestsPreviewScreen
// Dependencies: [19, 4651, 1074, 21, 12573, 10071, 10206, 17010, 11477, 2]
// Exports: default

// Module 17009 (MessageRequestsPreviewScreen)
import MessageManagerDefault from "MessageManager" /* 10071 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4651 */;

const require = fn;
const ME = fn(1074).ME;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  const ref = noop.useRef(null);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = channelId(12573).useIsMessageRequestRestrictedViewer("MessageRequestsPreviewScreen");
  const effect = noop.useEffect(() => {
    const obj = MessageManagerDefault;
    const messages = obj.fetchMessages({ channelId, messageId: ReadStateStore.lastMessageId(channelId) });
  }, items);
  const obj2 = { guildId: ME, channelId, children: null };
  if (isMessageRequestRestrictedViewer) {
    const obj3 = { channelId };
    let tmp5Result = tmp5(tmp7(17010), obj3);
  } else {
    const obj4 = { guildId: tmp6, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp5Result = tmp5(tmp7(11477), obj4);
  }
  obj2.children = tmp5Result;
  return jsx(channelId(10206).ChannelContainer, { guildId: ME, channelId, children: null });
};
