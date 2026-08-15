// Module ID: 8188
// Function ID: 8189
// Name: createCommonMessage
// Dependencies: [1391, 4661, 1363, 4223, 712, 4063, 8171, 8189, 8190, 8191, 2]
// Exports: default

// Module 8188 (createCommonMessage)
import ensureGuildLoaded from "ensureGuildLoaded";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

const require = arg1;
const result = createCacheKey.experimental_createToken((theme) => {
  let str = "rgba(201,210,240,0.6)";
  if (obj.isThemeDark(theme.theme)) {
    str = require(4223) /* hexToRgba */.hexWithOpacity(importDefault(712).unsafe_rawColors.WHITE, 0.1);
    const tmpResult = require(4223) /* hexToRgba */;
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
  obj[4] = require(4063) /* resetCache */.calendarFormat(message.timestamp, true);
  obj[5] = tmp.timestampColor;
  const obj2 = require(4063) /* resetCache */;
  obj[6] = require(1363) /* AccessibilityAnnouncer */.isThemeDark(theme);
  obj[7] = tmp.highlightColor;
  obj[8] = reactions.reactions;
  const obj3 = require(1363) /* AccessibilityAnnouncer */;
  obj[9] = require(8171) /* frozen */.getAssetUriForEmbed(importDefault(8189));
  const obj4 = require(8171) /* frozen */;
  obj[10] = require(8171) /* frozen */.getAssetUriForEmbed(importDefault(8190));
  const obj5 = require(8171) /* frozen */;
  obj[11] = require(8191) /* MessageAccessibilityAction */.createMessageAccessibilityActions(message, channel);
  return obj;
};
