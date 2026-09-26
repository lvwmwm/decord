// Module ID: 16713
// Function ID: 16714
// Name: MessageRequestsPreviewScreen
// Dependencies: [19, 4851, 1074, 21, 11933, 9398, 9537, 16714, 10882, 2]
// Exports: default

// Module 16713 (MessageRequestsPreviewScreen)
import MessageManagerDefault from "MessageManager" /* 9398 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;

const require = fn;
const ME = fn(1074).ME;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  const ref = noop.useRef(null);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = channelId(11933).useIsMessageRequestRestrictedViewer("MessageRequestsPreviewScreen");
  const effect = noop.useEffect(() => {
    const obj = MessageManagerDefault;
    const messages = obj.fetchMessages({ channelId, messageId: ReadStateStore.lastMessageId(channelId) });
  }, items);
  const obj2 = { guildId: ME, channelId, children: null };
  if (isMessageRequestRestrictedViewer) {
    const obj3 = { channelId };
    let tmp5Result = tmp5(tmp7(16714), obj3);
  } else {
    const obj4 = { guildId: tmp6, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp5Result = tmp5(tmp7(10882), obj4);
  }
  obj2.children = tmp5Result;
  return jsx(channelId(9537).ChannelContainer, { guildId: ME, channelId, children: null });
};
