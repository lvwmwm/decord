// Module ID: 15625
// Function ID: 120423
// Name: MessageRequestsScreen
// Dependencies: [31, 4142, 653, 33, 11503, 9910, 10246, 15626, 10415, 2]
// Exports: default

// Module 15625 (MessageRequestsScreen)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ME } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  let obj = channelId(11503);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = obj.useIsMessageRequestRestrictedViewer("MessageRequestsPreviewScreen");
  const effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[5]);
    obj = { channelId, messageId: outer1_4.lastMessageId(channelId) };
    const messages = obj.fetchMessages(obj);
  }, items);
  obj = { guildId: ME, channelId };
  if (isMessageRequestRestrictedViewer) {
    obj = { channelId };
    let tmp5Result = tmp5(tmp6(15626), obj);
  } else {
    const obj1 = { guildId: ME, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp5Result = tmp5(tmp6(10415), obj1);
  }
  obj.children = tmp5Result;
  return jsx(channelId(10246).ChannelContainer, { guildId: ME, channelId });
};
