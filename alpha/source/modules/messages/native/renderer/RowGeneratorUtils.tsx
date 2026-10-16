// Module ID: 8472
// Function ID: 8473
// Name: RowGeneratorUtils
// Dependencies: [5144, 2068, 2090, 5148, 7968, 1087, 5154, 5026, 587, 7192, 5497, 1447, 1498, 2]

// Module 8472 (RowGeneratorUtils)
import nativeDefault from "native" /* 587 */;
import utils_ImageUtilsDefault from "utils/ImageUtils" /* 1498 */;
import ColorUtils from "ColorUtils" /* 5026 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5497 */;
import GuildOfficialMessageUtils from "GuildOfficialMessageUtils" /* 7192 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7968 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import GuildStore from "GuildStore" /* 2090 */;
import MessageConstants from "MessageConstants" /* 5148 */;
import Constants from "Constants" /* 1087 */;
import createStyles_mod from "createStyles" /* 5154 */;
import react_native from "react-native" /* 1447 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
({ DEFAULT_GUILD_OFFICIAL_COLOR: metroRequire, GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR: metroImportDefault } = MessageConstants);
const SwipeActionsType = RowGeneratorConstants.SwipeActionsType;
({ MessageFlags: c9, MessageTypes: c10 } = Constants);
let createStyles = createStyles_mod;
const result = createStyles.experimental_createToken(() => {
  const obj = ColorUtils;
  return obj.hexWithOpacity(nativeDefault.unsafe_rawColors.BRAND_500, 0.1);
});
createStyles = createStyles_mod;
let obj = { ephemeralBackgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE, ephemeralGutterColor: nativeDefault.colors.BACKGROUND_BRAND, giftIntentEphemeralBackgroundColor: result, mentionedBackgroundColor: nativeDefault.colors.MESSAGE_MENTIONED_BACKGROUND_DEFAULT, mentionedGutterColor: nativeDefault.unsafe_rawColors.YELLOW_300, automodBlockedBackgroundColor: nativeDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT, automodBlockedGutterColor: nativeDefault.unsafe_rawColors.RED_345, editingColor: nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT };
const nativeStyleProperties = createStyles.createNativeStyleProperties(obj);
const set = new Set(react_native.getConstants().supportedExtensions);
const obj2 = {
  getImageSrc(proxy_url, c7, c72, arg3) {
    let hasItem = !proxy_url.endsWith(".webp");
    proxy_url.endsWith(".webp");
    if (hasItem) {
      hasItem = !proxy_url.endsWith(".avif");
    }
    if (!hasItem) {
      hasItem = set.has("webp");
    }
    let flag = arg3;
    if (!hasItem) {
      flag = true;
    }
    let str3 = null;
    const getMobileOptimizedSrc = utils_ImageUtilsDefault.getMobileOptimizedSrc;
    utils_ImageUtilsDefault;
    if (flag) {
      str3 = "png";
    }
    return getMobileOptimizedSrc(proxy_url, c7, c72, str3);
  },
  createBackgroundHighlight(message) {
    let isAutomodBlockedMessage;
    let isEditing;
    message = message.message;
    ({ isEditing, isAutomodBlockedMessage } = message);
    const tmp = nativeStyleProperties(message.theme);
    if (isEditing) {
      return { backgroundColor: tmp.editingColor };
    } else if (isAutomodBlockedMessage) {
      const obj4 = { backgroundColor: null, gutterColor: null };
      ({ automodBlockedBackgroundColor: obj8.backgroundColor, automodBlockedGutterColor: obj8.gutterColor } = tmp);
      return obj4;
    } else {
      let tmp14;
      if (message.hasFlag(constants.IS_GUILD_OFFICIAL)) {
        const obj = GuildOfficialMessageUtils;
        if (obj.showGuildOfficialMessageGradient(AccessibilityStore.officialMessageStyle)) {
          const channel = ChannelStore.getChannel(message.getChannelId());
          let guild_id;
          const getGuild = GuildStore.getGuild;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          const guild = getGuild(guild_id);
          const tmp3Result = GuildOfficialMessageUtils;
          if (tmp3Result.isGuildOfficialMessagesEnabled(guild, "RowGeneratorUtils")) {
            let ephemeralGutterColor;
            let officialMessageColor;
            if (guild != null) {
              officialMessageColor = guild.officialMessageColor;
            }
            if (officialMessageColor == null) {
              officialMessageColor = metroRequire;
            }
            if (message.mentioned) {
              ephemeralGutterColor = tmp.mentionedGutterColor;
            } else {
              const tmp3Result2 = MessageRecordUtils;
              if (tmp3Result2.hasEphemeralAppearance(message)) {
                ephemeralGutterColor = tmp.ephemeralGutterColor;
              }
            }
            return { backgroundColor: officialMessageColor | metroImportDefault, gutterColor: ephemeralGutterColor };
          }
        }
      }
      if (message.mentioned) {
        const obj7 = { backgroundColor: null, gutterColor: null };
        ({ mentionedBackgroundColor: obj5.backgroundColor, mentionedGutterColor: obj5.gutterColor } = tmp);
        tmp14 = obj7;
      } else {
        const obj3 = MessageRecordUtils;
        if (obj3.hasEphemeralAppearance(message)) {
          tmp14 = { backgroundColor: message.type === constants2.GIFTING_PROMPT ? tmp.giftIntentEphemeralBackgroundColor : tmp.ephemeralBackgroundColor, gutterColor: tmp.ephemeralGutterColor };
          const obj9 = { backgroundColor: message.type === constants2.GIFTING_PROMPT ? tmp.giftIntentEphemeralBackgroundColor : tmp.ephemeralBackgroundColor, gutterColor: tmp.ephemeralGutterColor };
        }
      }
      return tmp14;
    }
  },
  createSwipeActions(canReply, arg1) {
    let NONE;
    const tmp2 = canReply;
    if (tmp2) {
      NONE = arg1 ? tmp.REPLY_EDIT : tmp.REPLY;
    } else {
      NONE = tmp.NONE;
    }
    return NONE;
  }
};
const result1 = size.fileFinishedImporting("modules/messages/native/renderer/RowGeneratorUtils.tsx");

export default obj2;
export const InviteEmbedBackground = { dark: "#313339", light: "#fafafa" };
export const resolveHighlightThemedColors = nativeStyleProperties;
