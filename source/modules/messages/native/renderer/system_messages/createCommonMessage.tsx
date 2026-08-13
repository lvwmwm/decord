// Module ID: 8117
// Function ID: 8118
// Name: createCommonMessage
// Dependencies: [1391, 4342, 1363, 4191, 712, 4031, 8100, 8118, 8119, 8120, 2]
// Exports: default

// Module 8117 (createCommonMessage)
import ensureGuildLoaded from "ensureGuildLoaded";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

const require = arg1;
const result = createCacheKey.experimental_createToken((theme) => {
  let str = "rgba(201,210,240,0.6)";
  if (obj.isThemeDark(theme.theme)) {
    str = require(4191) /* hexToRgba */.hexWithOpacity(importDefault(712).unsafe_rawColors.WHITE, 0.1);
    const tmpResult = require(4191) /* hexToRgba */;
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
  obj[9] = require(8100) /* frozen */.getAssetUriForEmbed(importDefault(8118));
  const obj4 = require(8100) /* frozen */;
  obj[10] = require(8100) /* frozen */.getAssetUriForEmbed(importDefault(8119));
  const obj5 = require(8100) /* frozen */;
  obj[11] = require(8120) /* MessageAccessibilityAction */.createMessageAccessibilityActions(message, channel);
  return obj;
};
