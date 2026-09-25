// Module ID: 16684
// Function ID: 16685
// Name: MessageRequestsPreviewScreen
// Dependencies: [19, 4844, 1074, 21, 11915, 9387, 9526, 16685, 10869, 2]
// Exports: default

// Module 16684 (MessageRequestsPreviewScreen)
import MessageManagerDefault from "MessageManager" /* 9387 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4844 */;

const require = fn;
const ME = fn(1074).ME;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  const ref = noop.useRef(null);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = channelId(11915).useIsMessageRequestRestrictedViewer("MessageRequestsPreviewScreen");
  const effect = noop.useEffect(() => {
    const obj = MessageManagerDefault;
    const messages = obj.fetchMessages({ channelId, messageId: ReadStateStore.lastMessageId(channelId) });
  }, items);
  const obj2 = { guildId: ME, channelId, children: null };
  if (isMessageRequestRestrictedViewer) {
    const obj3 = { channelId };
    let tmp5Result = tmp5(tmp7(16685), obj3);
  } else {
    const obj4 = { guildId: tmp6, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp5Result = tmp5(tmp7(10869), obj4);
  }
  obj2.children = tmp5Result;
  return jsx(channelId(9526).ChannelContainer, { guildId: ME, channelId, children: null });
};
