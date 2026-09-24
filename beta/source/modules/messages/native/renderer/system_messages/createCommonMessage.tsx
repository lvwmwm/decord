// Module ID: 8259
// Function ID: 8260
// Name: createCommonMessage
// Dependencies: [2045, 4790, 4642, 4640, 580, 4474, 8241, 8260, 8261, 8262, 2]
// Exports: default

// Module 8259 (createCommonMessage)
import nativeDefault from "native" /* 580 */;
import DateUtils from "DateUtils" /* 4474 */;
import ColorUtils from "ColorUtils" /* 4640 */;
import shared from "shared" /* 4642 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8241 */;
import _modDef8260 from "module_8260" /* 8260 */;
import _modDef8261 from "module_8261" /* 8261 */;
import MessageAccessibilityActions from "MessageAccessibilityActions" /* 8262 */;
import ChannelStore from "ChannelStore" /* 2045 */;

require = fn;
let createStyles = fn(4790);
const result = createStyles.experimental_createToken((theme) => {
  let str = "rgba(201,210,240,0.6)";
  if (obj.isThemeDark(theme.theme)) {
    str = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1);
    const tmpResult = ColorUtils;
  }
  return str;
});
createStyles = fn(4790);
let closure_4 = createStyles.createNativeStyleProperties({ timestampColor: nativeDefault.colors.TEXT_MUTED, highlightColor: result });
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/createCommonMessage.tsx");

export default function createCommonMessage(reactions) {
  ({ message, theme } = reactions);
  const tmp = closure_4(theme);
  const obj = { id: message.id, channelId: message.channel_id, type: message.type, mentioned: message.mentioned, timestamp: null, timestampColor: null, dark: null, highlightColor: null, reactions: null, swipeToReplyIconUrl: null, swipeToEditIconUrl: null, accessibilityActions: null };
  const channel = ChannelStore.getChannel(message.channel_id);
  obj.timestamp = DateUtils.calendarFormat(message.timestamp, true);
  obj.timestampColor = tmp.timestampColor;
  obj.dark = shared.isThemeDark(theme);
  obj.highlightColor = tmp.highlightColor;
  obj.reactions = reactions.reactions;
  obj.swipeToReplyIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8260);
  obj.swipeToEditIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8261);
  obj.accessibilityActions = MessageAccessibilityActions.createMessageAccessibilityActions(message, channel);
  return obj;
};
