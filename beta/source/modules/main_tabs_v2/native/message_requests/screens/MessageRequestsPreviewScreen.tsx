// Module ID: 17377
// Function ID: 17378
// Name: MessageRequestsPreviewScreen
// Dependencies: [19, 4805, 1078, 21, 558, 568, 12625, 10235, 17378, 10370, 12981, 2]

// Module 17377 (MessageRequestsPreviewScreen)
import MessageManagerDefault from "MessageManager" /* 10235 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4805 */;

const ChatViewDefault = tmp11(10370);
const RestrictedMessageRequestPreviewDefault = tmp11(17378);
const require = fn;
const ME = fn(1078).ME;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  const cResult = channelId(568).c(9);
  channelId = route.route.params.channelId;
  let obj = channelId(568);
  const obj2 = noop;
  const tmp = channelId;
  const ref = noop.useRef(null);
  const isMessageRequestRestrictedViewer = channelId(12625).useIsMessageRequestRestrictedViewer("MessageRequestsPreviewScreen");
  if (cResult[0] !== channelId) {
    const fn = function l() {
      const obj = MessageManagerDefault;
      const messages = obj.fetchMessages({ channelId, messageId: ReadStateStore.lastMessageId(channelId) });
    };
    const items = [channelId];
    cResult[0] = channelId;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp7 = items;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = obj2.useEffect(tmp6, tmp7);
  if (cResult[3] === channelId) {
    if (cResult[4] === isMessageRequestRestrictedViewer) {
      if (cResult[6] === channelId) {
        if (cResult[7] === tmp9) {
          let tmp14 = cResult[8];
        }
        return tmp14;
      }
      const obj4 = { guildId: ME, channelId, children: cResult[5] };
      const tmp17 = jsx(tmp(12981).ChannelContainer, { guildId: ME, channelId, children: cResult[5] });
      cResult[6] = channelId;
      cResult[7] = cResult[5];
      cResult[8] = tmp17;
      tmp14 = tmp17;
    }
  }
  let tmp11 = importDefault;
  if (isMessageRequestRestrictedViewer) {
    tmp11 = RestrictedMessageRequestPreviewDefault;
    const obj5 = { channelId };
    let tmp10Result = tmp10(tmp11, obj5);
  } else {
    const obj6 = { guildId: ME, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp10Result = tmp10(ChatViewDefault, obj6);
  }
  cResult[3] = channelId;
  cResult[4] = isMessageRequestRestrictedViewer;
  cResult[5] = tmp10Result;
}) : ((route) => {
  const channelId = route.route.params.channelId;
  const ref = noop.useRef(null);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = channelId(12625).useIsMessageRequestRestrictedViewer("MessageRequestsPreviewScreen");
  const effect = noop.useEffect(() => {
    const obj = MessageManagerDefault;
    const messages = obj.fetchMessages({ channelId, messageId: ReadStateStore.lastMessageId(channelId) });
  }, items);
  const obj2 = { guildId: ME, channelId, children: null };
  if (isMessageRequestRestrictedViewer) {
    const obj3 = { channelId };
    let tmp5Result = tmp5(tmp7(17378), obj3);
  } else {
    const obj4 = { guildId: tmp6, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp5Result = tmp5(tmp7(10370), obj4);
  }
  obj2.children = tmp5Result;
  return jsx(channelId(12981).ChannelContainer, { guildId: ME, channelId, children: null });
});
