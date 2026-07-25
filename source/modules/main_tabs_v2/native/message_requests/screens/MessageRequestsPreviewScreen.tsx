// Module ID: 15635
// Function ID: 120551
// Name: MessageRequestsScreen
// Dependencies: [31, 4143, 653, 33, 11469, 9837, 10179, 15636, 10348, 2]
// Exports: default

// Module 15635 (MessageRequestsScreen)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ME } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  let obj = channelId(11469);
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
    let tmp5Result = tmp5(tmp6(15636), obj);
  } else {
    const obj1 = { guildId: ME, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp5Result = tmp5(tmp6(10348), obj1);
  }
  obj.children = tmp5Result;
  return jsx(channelId(10179).ChannelContainer, { guildId: ME, channelId });
};
