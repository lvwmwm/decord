// Module ID: 8227
// Function ID: 8228
// Name: createCommonMessage
// Dependencies: [2045, 4758, 4610, 4608, 580, 4442, 8209, 8228, 8229, 8230, 2]
// Exports: default

// Module 8227 (createCommonMessage)
import nativeDefault from "native" /* 580 */;
import DateUtils from "DateUtils" /* 4442 */;
import ColorUtils from "ColorUtils" /* 4608 */;
import shared from "shared" /* 4610 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8209 */;
import _modDef8228 from "module_8228" /* 8228 */;
import _modDef8229 from "module_8229" /* 8229 */;
import MessageAccessibilityActions from "MessageAccessibilityActions" /* 8230 */;
import ChannelStore from "ChannelStore" /* 2045 */;

require = fn;
let createStyles = fn(4758);
const result = createStyles.experimental_createToken((theme) => {
  let str = "rgba(201,210,240,0.6)";
  if (obj.isThemeDark(theme.theme)) {
    str = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1);
    const tmpResult = ColorUtils;
  }
  return str;
});
createStyles = fn(4758);
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
  obj.swipeToReplyIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8228);
  obj.swipeToEditIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8229);
  obj.accessibilityActions = MessageAccessibilityActions.createMessageAccessibilityActions(message, channel);
  return obj;
};
