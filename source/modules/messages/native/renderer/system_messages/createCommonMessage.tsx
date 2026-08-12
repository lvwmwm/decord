// Module ID: 8113
// Function ID: 8114
// Name: createCommonMessage
// Dependencies: [1391, 4344, 1363, 4193, 712, 4031, 8096, 8114, 8115, 8116, 2]
// Exports: default

// Module 8113 (createCommonMessage)
import ensureGuildLoaded from "ensureGuildLoaded";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

const require = arg1;
const result = createCacheKey.experimental_createToken((theme) => {
  let str = "rgba(201,210,240,0.6)";
  if (obj.isThemeDark(theme.theme)) {
    str = require(4193) /* hexToRgba */.hexWithOpacity(importDefault(712).unsafe_rawColors.WHITE, 0.1);
    const tmpResult = require(4193) /* hexToRgba */;
  }
  return str;
});
createCacheKey = { timestampColor: require("Themes").colors.TEXT_MUTED, highlightColor: result };
createCacheKey = createCacheKey.createNativeStyleProperties(createCacheKey);
const result1 = require("AccessibilityAnnouncer").fileFinishedImporting("modules/messages/native/renderer/system_messages/createCommonMessage.tsx");

export default function createCommonMessage(reactions) {
  let message;
  let theme;
  ({ message, theme } = reactions);
  const tmp = createCacheKey(theme);
  const obj = { id: message.id, channelId: message.channel_id, type: message.type, mentioned: message.mentioned, timestamp: null, timestampColor: null, dark: null, highlightColor: null, reactions: null, swipeToReplyIconUrl: null, swipeToEditIconUrl: null, accessibilityActions: null };
  channel = channel.getChannel(message.channel_id);
  obj[4] = require(4031) /* resetCache */.calendarFormat(message.timestamp, true);
  obj[5] = tmp.timestampColor;
  const obj2 = require(4031) /* resetCache */;
  obj[6] = require(1363) /* AccessibilityAnnouncer */.isThemeDark(theme);
  obj[7] = tmp.highlightColor;
  obj[8] = reactions.reactions;
  const obj3 = require(1363) /* AccessibilityAnnouncer */;
  obj[9] = require(8096) /* frozen */.getAssetUriForEmbed(importDefault(8114));
  const obj4 = require(8096) /* frozen */;
  obj[10] = require(8096) /* frozen */.getAssetUriForEmbed(importDefault(8115));
  const obj5 = require(8096) /* frozen */;
  obj[11] = require(8116) /* MessageAccessibilityAction */.createMessageAccessibilityActions(message, channel);
  return obj;
};
