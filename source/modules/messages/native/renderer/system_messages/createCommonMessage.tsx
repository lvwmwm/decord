// Module ID: 7687
// Function ID: 61492
// Name: createCommonMessage
// Dependencies: [1348, 4131, 3977, 3975, 689, 3801, 7670, 7688, 7689, 7690, 2]
// Exports: default

// Module 7687 (createCommonMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = _createForOfIteratorHelperLoose.experimental_createToken((theme) => {
  let str = "rgba(201,210,240,0.6)";
  if (obj.isThemeDark(theme.theme)) {
    str = require(3975) /* hexToRgb */.hexWithOpacity(importDefault(689).unsafe_rawColors.WHITE, 0.1);
    const obj2 = require(3975) /* hexToRgb */;
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
  obj.timestamp = require(3801) /* resetCache */.calendarFormat(message.timestamp, true);
  obj.timestampColor = tmp.timestampColor;
  const obj2 = require(3801) /* resetCache */;
  obj.dark = require(3977) /* AccessibilityAnnouncer */.isThemeDark(theme);
  obj.highlightColor = tmp.highlightColor;
  obj.reactions = reactions.reactions;
  const obj3 = require(3977) /* AccessibilityAnnouncer */;
  obj.swipeToReplyIconUrl = require(7670) /* frozen */.getAssetUriForEmbed(importDefault(7688));
  const obj4 = require(7670) /* frozen */;
  obj.swipeToEditIconUrl = require(7670) /* frozen */.getAssetUriForEmbed(importDefault(7689));
  const obj5 = require(7670) /* frozen */;
  obj.accessibilityActions = require(7690) /* getQuickReactionLabel */.createMessageAccessibilityActions(message, channel);
  return obj;
};
