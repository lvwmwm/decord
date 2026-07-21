// Module ID: 7646
// Function ID: 61190
// Name: createCommonMessage
// Dependencies: []
// Exports: default

// Module 7646 (createCommonMessage)
let closure_3 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[1]);
const result = obj.experimental_createToken((theme) => {
  let str = "rgba(201,210,240,0.6)";
  if (obj.isThemeDark(theme.theme)) {
    str = arg1(dependencyMap[3]).hexWithOpacity(importDefault(dependencyMap[4]).unsafe_rawColors.WHITE, 0.1);
    const obj2 = arg1(dependencyMap[3]);
  }
  return str;
});
obj = { timestampColor: importDefault(dependencyMap[4]).colors.TEXT_MUTED, highlightColor: result };
let closure_4 = arg1(dependencyMap[1]).createNativeStyleProperties(obj);
const obj2 = arg1(dependencyMap[1]);
const result1 = arg1(dependencyMap[10]).fileFinishedImporting("modules/messages/native/renderer/system_messages/createCommonMessage.tsx");

export default function createCommonMessage(reactions) {
  let message;
  let theme;
  ({ message, theme } = reactions);
  const tmp = callback(theme);
  const obj = { id: message.id, channelId: message.channel_id, type: message.type, mentioned: message.mentioned };
  const channel = channel.getChannel(message.channel_id);
  obj.timestamp = arg1(dependencyMap[5]).calendarFormat(message.timestamp, true);
  obj.timestampColor = tmp.timestampColor;
  const obj2 = arg1(dependencyMap[5]);
  obj.dark = arg1(dependencyMap[2]).isThemeDark(theme);
  obj.highlightColor = tmp.highlightColor;
  obj.reactions = reactions.reactions;
  const obj3 = arg1(dependencyMap[2]);
  obj.swipeToReplyIconUrl = arg1(dependencyMap[6]).getAssetUriForEmbed(importDefault(dependencyMap[7]));
  const obj4 = arg1(dependencyMap[6]);
  obj.swipeToEditIconUrl = arg1(dependencyMap[6]).getAssetUriForEmbed(importDefault(dependencyMap[8]));
  const obj5 = arg1(dependencyMap[6]);
  obj.accessibilityActions = arg1(dependencyMap[9]).createMessageAccessibilityActions(message, channel);
  return obj;
};
