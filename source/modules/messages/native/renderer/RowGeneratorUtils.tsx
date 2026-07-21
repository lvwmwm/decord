// Module ID: 7782
// Function ID: 62097
// Name: nativeStyleProperties
// Dependencies: []

// Module 7782 (nativeStyleProperties)
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
({ DEFAULT_GUILD_OFFICIAL_COLOR: closure_6, GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR: closure_7 } = arg1(dependencyMap[4]));
const SwipeActionsType = arg1(dependencyMap[5]).SwipeActionsType;
const tmp2 = arg1(dependencyMap[4]);
({ MessageFlags: closure_9, MessageTypes: closure_10 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
const result = obj.experimental_createToken(() => arg1(dependencyMap[8]).hexWithOpacity(importDefault(dependencyMap[9]).unsafe_rawColors.BRAND_500, 0.1));
const tmp3 = arg1(dependencyMap[6]);
obj = { ephemeralBackgroundColor: importDefault(dependencyMap[9]).colors.INTERACTIVE_BACKGROUND_ACTIVE, ephemeralGutterColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BRAND, giftIntentEphemeralBackgroundColor: result, mentionedBackgroundColor: importDefault(dependencyMap[9]).colors.MESSAGE_MENTIONED_BACKGROUND_DEFAULT, mentionedGutterColor: importDefault(dependencyMap[9]).unsafe_rawColors.YELLOW_300, automodBlockedBackgroundColor: importDefault(dependencyMap[9]).colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT, automodBlockedGutterColor: importDefault(dependencyMap[9]).unsafe_rawColors.RED_345, editingColor: importDefault(dependencyMap[9]).colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT };
const nativeStyleProperties = arg1(dependencyMap[7]).createNativeStyleProperties(obj);
const MediaManager = arg1(dependencyMap[0]).NativeModules.MediaManager;
const set = new Set(MediaManager.getConstants().supportedExtensions);
obj = {
  getImageSrc(proxy_url, width, height) {
    let flag = arg3;
    let hasItem = !proxy_url.endsWith(".webp");
    if (hasItem) {
      hasItem = !proxy_url.endsWith(".avif");
    }
    if (!hasItem) {
      hasItem = set.has("webp");
    }
    if (!hasItem) {
      flag = true;
    }
    let str3 = null;
    if (flag) {
      str3 = "png";
    }
    return importDefault(dependencyMap[12]).getMobileOptimizedSrc(proxy_url, width, height, str3);
  },
  createBackgroundHighlight(message) {
    let isAutomodBlockedMessage;
    let isEditing;
    message = message.message;
    ({ isEditing, isAutomodBlockedMessage } = message);
    const tmp = nativeStyleProperties(message.theme);
    if (isEditing) {
      let obj = { backgroundColor: tmp.editingColor };
      return obj;
    } else if (isAutomodBlockedMessage) {
      obj = {};
      ({ automodBlockedBackgroundColor: obj8.backgroundColor, automodBlockedGutterColor: obj8.gutterColor } = tmp);
      return obj;
    } else {
      if (message.hasFlag(constants.IS_GUILD_OFFICIAL)) {
        obj = arg1(dependencyMap[10]);
        if (obj.showGuildOfficialMessageGradient(officialMessageStyle.officialMessageStyle)) {
          const channel = channel.getChannel(message.getChannelId());
          let guild_id;
          if (null != channel) {
            guild_id = channel.guild_id;
          }
          const guild = guild.getGuild(guild_id);
          let obj1 = arg1(dependencyMap[10]);
          if (obj1.isGuildOfficialMessagesEnabled(guild, "RowGeneratorUtils")) {
            let officialMessageColor;
            if (null != guild) {
              officialMessageColor = guild.officialMessageColor;
            }
            if (null == officialMessageColor) {
              officialMessageColor = closure_6;
            }
            if (message.mentioned) {
              let ephemeralGutterColor = tmp.mentionedGutterColor;
            } else {
              if (obj6.hasEphemeralAppearance(message)) {
                ephemeralGutterColor = tmp.ephemeralGutterColor;
              }
              const obj6 = arg1(dependencyMap[11]);
            }
            obj1 = { backgroundColor: officialMessageColor | closure_7, gutterColor: ephemeralGutterColor };
            return obj1;
          }
        }
      }
      if (message.mentioned) {
        let obj2 = {};
        ({ mentionedBackgroundColor: obj5.backgroundColor, mentionedGutterColor: obj5.gutterColor } = tmp);
        const tmp16 = obj2;
      } else {
        obj2 = arg1(dependencyMap[11]);
        if (obj2.hasEphemeralAppearance(message)) {
          const obj3 = { backgroundColor: message.type === constants2.GIFTING_PROMPT ? tmp.giftIntentEphemeralBackgroundColor : tmp.ephemeralBackgroundColor, gutterColor: tmp.ephemeralGutterColor };
        }
      }
      return tmp16;
    }
  },
  createSwipeActions(canReply, arg1) {
    if (!canReply) {
      return tmp.NONE;
    }
  }
};
const obj2 = arg1(dependencyMap[7]);
const result1 = arg1(dependencyMap[13]).fileFinishedImporting("modules/messages/native/renderer/RowGeneratorUtils.tsx");

export default obj;
export const InviteEmbedBackground = {};
export const resolveHighlightThemedColors = nativeStyleProperties;
