// Module ID: 7652
// Function ID: 61237
// Name: createCommonMessage
// Dependencies: [1348, 4130, 3976, 3974, 689, 3800, 7635, 7653, 7654, 7655, 2]
// Exports: default

// Module 7652 (createCommonMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = _createForOfIteratorHelperLoose.experimental_createToken((theme) => {
  let str = "rgba(201,210,240,0.6)";
  if (obj.isThemeDark(theme.theme)) {
    str = require(3974) /* hexToRgb */.hexWithOpacity(importDefault(689).unsafe_rawColors.WHITE, 0.1);
    const obj2 = require(3974) /* hexToRgb */;
  }
  return str;
});
_createForOfIteratorHelperLoose = { timestampColor: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, highlightColor: result };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createNativeStyleProperties(_createForOfIteratorHelperLoose);
const result1 = require("AccessibilityAnnouncer").fileFinishedImporting("modules/messages/native/renderer/system_messages/createCommonMessage.tsx");

export default function createCommonMessage(reactions) {
  let message;
  let theme;
  ({ message, theme } = reactions);
  const tmp = _createForOfIteratorHelperLoose(theme);
  const obj = { id: message.id, channelId: message.channel_id, type: message.type, mentioned: message.mentioned };
  channel = channel.getChannel(message.channel_id);
  obj.timestamp = require(3800) /* resetCache */.calendarFormat(message.timestamp, true);
  obj.timestampColor = tmp.timestampColor;
  const obj2 = require(3800) /* resetCache */;
  obj.dark = require(3976) /* AccessibilityAnnouncer */.isThemeDark(theme);
  obj.highlightColor = tmp.highlightColor;
  obj.reactions = reactions.reactions;
  const obj3 = require(3976) /* AccessibilityAnnouncer */;
  obj.swipeToReplyIconUrl = require(7635) /* frozen */.getAssetUriForEmbed(importDefault(7653));
  const obj4 = require(7635) /* frozen */;
  obj.swipeToEditIconUrl = require(7635) /* frozen */.getAssetUriForEmbed(importDefault(7654));
  const obj5 = require(7635) /* frozen */;
  obj.accessibilityActions = require(7655) /* getQuickReactionLabel */.createMessageAccessibilityActions(message, channel);
  return obj;
};
