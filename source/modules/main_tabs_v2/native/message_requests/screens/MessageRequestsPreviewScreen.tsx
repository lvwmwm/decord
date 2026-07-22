// Module ID: 15461
// Function ID: 117927
// Name: MessageRequestsScreen
// Dependencies: []
// Exports: default

// Module 15461 (MessageRequestsScreen)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const ME = arg1(dependencyMap[2]).ME;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsPreviewScreen.tsx");

export default function MessageRequestsScreen(route) {
  const channelId = route.route.params.channelId;
  const arg1 = channelId;
  let obj = arg1(dependencyMap[4]);
  const items = [channelId];
  const isMessageRequestRestrictedViewer = obj.useIsMessageRequestRestrictedViewer("MessageRequestsPreviewScreen");
  const effect = React.useEffect(() => {
    let obj = callback(closure_2[5]);
    obj = { channelId, messageId: closure_4.lastMessageId(channelId) };
    const messages = obj.fetchMessages(obj);
  }, items);
  obj = { guildId: ME, channelId };
  if (isMessageRequestRestrictedViewer) {
    obj = { channelId };
    let tmp5Result = tmp5(tmp6(tmp7[7]), obj);
  } else {
    const obj1 = { guildId: ME, channelId, chatInputRef: ref, HACK_fixModalInteraction: true, screenIndex: "message-request" };
    tmp5Result = tmp5(tmp6(tmp7[8]), obj1);
  }
  obj.children = tmp5Result;
  return jsx(arg1(dependencyMap[6]).ChannelContainer, obj);
};
