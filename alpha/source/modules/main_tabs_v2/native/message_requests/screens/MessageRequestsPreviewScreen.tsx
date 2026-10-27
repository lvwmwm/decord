// Module ID: 18392
// Function ID: 18393
// Name: MessageRequestsPreviewScreen
// Dependencies: [19, 6772, 1084, 21, 558, 576, 13365, 9719, 18393, 10895, 13758, 2]

// Module 18392 (MessageRequestsPreviewScreen)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1084 */;
import MessageManagerDefault from "MessageManager" /* 9719 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6772 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ME = Constants.ME;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessageRequestsScreen(route) {
  let channelId;
  let tmp10Result;
  let tmp6;
  let tmp7;
  let obj = channelId(576);
  const cResult = obj.c(9);
  const tmp = channelId;
  channelId = route.route.params.channelId;
  let obj2 = react;
  const ref = react.useRef(null);
  const obj3 = channelId(13365);
  const isMessageRequestRestrictedViewer = obj3.useIsMessageRequestRestrictedViewer();
  if (cResult[0] !== channelId) {
    const fn = function l() {
      const obj = MessageManagerDefault;
      const obj2 = { channelId, messageId: ReadStateStore.lastMessageId(channelId) };
      const messages = obj.fetchMessages(obj2);
    };
    const items = [channelId];
    cResult[0] = channelId;
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = obj2.useEffect(tmp6, tmp7);
  if (cResult[3] === channelId) {
    let tmp9;
    if (cResult[4] === isMessageRequestRestrictedViewer) {
      tmp9 = cResult[5];
    }
    if (cResult[6] === channelId) {
      let tmp14;
      if (cResult[7] === tmp9) {
        tmp14 = cResult[8];
      }
      return tmp14;
    }
    const tmp17 = jsx(tmp(13758).ChannelContainer, { guildId: ME, channelId, children: tmp9 });
    cResult[6] = channelId;
    cResult[7] = tmp9;
    cResult[8] = tmp17;
    tmp14 = tmp17;
  }
  if (isMessageRequestRestrictedViewer) {
    const obj5 = { channelId };
    tmp10Result = tmp10(tmp11(18393), obj5);
  } else {
    const obj6 = { guildId: ME, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp10Result = tmp10(tmp11(10895), obj6);
  }
  cResult[3] = channelId;
  cResult[4] = isMessageRequestRestrictedViewer;
  cResult[5] = tmp10Result;
  tmp9 = tmp10Result;
}) : (function MessageRequestsScreen(route) {
  let tmp5Result;
  const channelId = route.route.params.channelId;
  const ref = react.useRef(null);
  let obj = channelId(13365);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = obj.useIsMessageRequestRestrictedViewer();
  const effect = react.useEffect(() => {
    const obj = MessageManagerDefault;
    const obj2 = { channelId, messageId: ReadStateStore.lastMessageId(channelId) };
    const messages = obj.fetchMessages(obj2);
  }, items);
  const ChannelContainer = channelId(13758).ChannelContainer;
  if (isMessageRequestRestrictedViewer) {
    const obj3 = { channelId };
    tmp5Result = tmp5(tmp7(18393), obj3);
  } else {
    const obj4 = { guildId: tmp6, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp5Result = tmp5(tmp7(10895), obj4);
  }
  return <ChannelContainer guildId={ME} channelId={channelId}>{tmp5Result}</ChannelContainer>;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default tmp2;
