// Module ID: 9192
// Function ID: 9193
// Name: createCommonMessage
// Dependencies: [5155, 5306, 5313, 5303, 575, 5128, 8655, 9193, 9194, 9195, 2]
// Exports: default

// Module 9192 (createCommonMessage)
import nativeDefault from "native" /* 575 */;
import DateUtils from "DateUtils" /* 5128 */;
import shared from "shared" /* 5313 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8655 */;
import AssetRegistryDefault from "AssetRegistry" /* 9193 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9194 */;
import MessageAccessibilityActions from "MessageAccessibilityActions" /* 9195 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let tmp;
const ColorUtils = tmp(5303);
let createStyles = createStyles_mod;
const result = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  let str = "rgba(201,210,240,0.6)";
  const obj = shared;
  if (obj.isThemeDark(theme)) {
    const tmpResult = ColorUtils;
    str = tmpResult.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1);
  }
  return str;
});
createStyles = createStyles_mod;
let obj = { timestampColor: nativeDefault.colors.TEXT_MUTED, highlightColor: result };
let closure_4 = createStyles.createNativeStyleProperties(obj);
const result1 = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/createCommonMessage.tsx");

export default function createCommonMessage(reactions) {
  let channel;
  let message;
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let theme;
  ({ message, theme } = reactions);
  reactions = reactions.reactions;
  const tmp = closure_4(theme);
  const obj = { id: message.id, channelId: message.channel_id, type: message.type, mentioned: message.mentioned, timestamp: obj2.calendarFormat(message.timestamp, true), timestampColor: tmp.timestampColor, dark: obj3.isThemeDark(theme), highlightColor: tmp.highlightColor, reactions, swipeToReplyIconUrl: obj4.getAssetUriForEmbed(AssetRegistryDefault), swipeToEditIconUrl: obj5.getAssetUriForEmbed(AssetRegistryDefault2), accessibilityActions: obj6.createMessageAccessibilityActions(message, channel) };
  channel = ChannelStore.getChannel(message.channel_id);
  obj2 = DateUtils;
  obj3 = shared;
  obj4 = renderer_EmbedUtils;
  obj5 = renderer_EmbedUtils;
  obj6 = MessageAccessibilityActions;
  return obj;
};
