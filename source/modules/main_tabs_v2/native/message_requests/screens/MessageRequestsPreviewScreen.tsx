// Module ID: 16041
// Function ID: 16042
// Name: MessageRequestsScreen
// Dependencies: [19, 4356, 676, 21, 11861, 9791, 9795, 16042, 10362, 2]
// Exports: default

// Module 16041 (MessageRequestsScreen)
import noop from "noop";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import { ME } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  let obj = channelId(11861);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = obj.useIsMessageRequestRestrictedViewer("MessageRequestsPreviewScreen");
  const effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[5]);
    obj = { channelId, messageId: outer1_4.lastMessageId(channelId) };
    const messages = obj.fetchMessages(obj);
  }, items);
  obj = { guildId: ME, channelId, children: null };
  if (isMessageRequestRestrictedViewer) {
    obj = { channelId: null };
    obj[0] = channelId;
    let tmp5Result = tmp5(tmp7(16042), obj);
  } else {
    const obj1 = { guildId: null, channelId: null, chatInputRef: null, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    obj1[0] = tmp6;
    obj1[1] = channelId;
    obj1[2] = ref;
    tmp5Result = tmp5(tmp7(10362), obj1);
  }
  obj[2] = tmp5Result;
  return jsx(channelId(9795).ChannelContainer, { guildId: ME, channelId, children: null });
};
