// Module ID: 7723
// Function ID: 61582
// Name: createCommonMessage
// Dependencies: [1348, 4165, 4011, 4009, 689, 3835, 7706, 7724, 7725, 7726, 2]
// Exports: default

// Module 7723 (createCommonMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = _createForOfIteratorHelperLoose.experimental_createToken((theme) => {
  let str = "rgba(201,210,240,0.6)";
  if (obj.isThemeDark(theme.theme)) {
    str = require(4009) /* hexToRgb */.hexWithOpacity(importDefault(689).unsafe_rawColors.WHITE, 0.1);
    const obj2 = require(4009) /* hexToRgb */;
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
  obj.timestamp = require(3835) /* resetCache */.calendarFormat(message.timestamp, true);
  obj.timestampColor = tmp.timestampColor;
  const obj2 = require(3835) /* resetCache */;
  obj.dark = require(4011) /* AccessibilityAnnouncer */.isThemeDark(theme);
  obj.highlightColor = tmp.highlightColor;
  obj.reactions = reactions.reactions;
  const obj3 = require(4011) /* AccessibilityAnnouncer */;
  obj.swipeToReplyIconUrl = require(7706) /* frozen */.getAssetUriForEmbed(importDefault(7724));
  const obj4 = require(7706) /* frozen */;
  obj.swipeToEditIconUrl = require(7706) /* frozen */.getAssetUriForEmbed(importDefault(7725));
  const obj5 = require(7706) /* frozen */;
  obj.accessibilityActions = require(7726) /* getQuickReactionLabel */.createMessageAccessibilityActions(message, channel);
  return obj;
};
