// Module ID: 7641
// Function ID: 61166
// Name: createCommonMessage
// Dependencies: []
// Exports: default

// Module 7641 (createCommonMessage)
const _module = require(dependencyMap[0]);
const result = _module.experimental_createToken((theme) => {
  let str = "rgba(201,210,240,0.6)";
  if (obj.isThemeDark(theme.theme)) {
    str = require(dependencyMap[2]).hexWithOpacity(importDefault(dependencyMap[3]).unsafe_rawColors.WHITE, 0.1);
    const obj2 = require(dependencyMap[2]);
  }
  return str;
});
const _module1 = require(dependencyMap[0]);
let closure_3 = _module1.createNativeStyleProperties({ timestampColor: importDefault(dependencyMap[3]).colors.TEXT_MUTED, highlightColor: result });
const _module2 = require(dependencyMap[8]);
const result1 = _module2.fileFinishedImporting("modules/messages/native/renderer/system_messages/createCommonMessage.tsx");

export default function createCommonMessage(reactions) {
  let message;
  let theme;
  ({ message, theme } = reactions);
  const tmp = callback(theme);
  const obj = { id: message.id, channelId: message.channel_id, type: message.type, mentioned: message.mentioned, timestamp: require(dependencyMap[4]).calendarFormat(message.timestamp, true), timestampColor: tmp.timestampColor };
  const obj2 = require(dependencyMap[4]);
  obj.dark = require(dependencyMap[1]).isThemeDark(theme);
  obj.highlightColor = tmp.highlightColor;
  obj.reactions = reactions.reactions;
  const obj3 = require(dependencyMap[1]);
  obj.swipeToReplyIconUrl = require(dependencyMap[5]).getAssetUriForEmbed(importDefault(dependencyMap[6]));
  const obj4 = require(dependencyMap[5]);
  obj.swipeToEditIconUrl = require(dependencyMap[5]).getAssetUriForEmbed(importDefault(dependencyMap[7]));
  return obj;
};
