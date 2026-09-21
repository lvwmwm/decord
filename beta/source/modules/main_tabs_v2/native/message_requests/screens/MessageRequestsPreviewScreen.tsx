// Module ID: 17363
// Function ID: 17364
// Name: MessageRequestsPreviewScreen
// Dependencies: [19, 4771, 1074, 21, 12694, 10199, 10334, 17364, 11603, 2]
// Exports: default

// Module 17363 (MessageRequestsPreviewScreen)
import MessageManagerDefault from "MessageManager" /* 10199 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4771 */;

const require = fn;
const ME = fn(1074).ME;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  const ref = noop.useRef(null);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = channelId(12694).useIsMessageRequestRestrictedViewer("MessageRequestsPreviewScreen");
  const effect = noop.useEffect(() => {
    const obj = MessageManagerDefault;
    const messages = obj.fetchMessages({ channelId, messageId: ReadStateStore.lastMessageId(channelId) });
  }, items);
  const obj2 = { guildId: ME, channelId, children: null };
  if (isMessageRequestRestrictedViewer) {
    const obj3 = { channelId };
    let tmp5Result = tmp5(tmp7(17364), obj3);
  } else {
    const obj4 = { guildId: tmp6, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp5Result = tmp5(tmp7(11603), obj4);
  }
  obj2.children = tmp5Result;
  return jsx(channelId(10334).ChannelContainer, { guildId: ME, channelId, children: null });
};
