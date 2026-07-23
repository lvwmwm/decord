// Module ID: 7789
// Function ID: 62157
// Name: nativeStyleProperties
// Dependencies: [27, 4122, 1348, 1838, 4123, 7622, 653, 4130, 3974, 689, 5648, 4351, 1449, 2]

// Module 7789 (nativeStyleProperties)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_createForOfIteratorHelperLoose";
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING";
import { SwipeActionsType } from "Changeset";
import ME from "ME";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "_isNativeReflectConstruct";

let closure_10;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
({ DEFAULT_GUILD_OFFICIAL_COLOR: closure_6, GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR: closure_7 } = MESSAGE_GROUP_SPACING);
({ MessageFlags: closure_9, MessageTypes: closure_10 } = ME);
const result = _createForOfIteratorHelperLoose.experimental_createToken(() => require(3974) /* hexToRgb */.hexWithOpacity(importDefault(689).unsafe_rawColors.BRAND_500, 0.1));
_createForOfIteratorHelperLoose = { ephemeralBackgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_ACTIVE, ephemeralGutterColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, giftIntentEphemeralBackgroundColor: result, mentionedBackgroundColor: require("_createForOfIteratorHelperLoose").colors.MESSAGE_MENTIONED_BACKGROUND_DEFAULT, mentionedGutterColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300, automodBlockedBackgroundColor: require("_createForOfIteratorHelperLoose").colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT, automodBlockedGutterColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_345, editingColor: require("_createForOfIteratorHelperLoose").colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createNativeStyleProperties(_createForOfIteratorHelperLoose);
const MediaManager = require("get ActivityIndicator").NativeModules.MediaManager;
let set = new Set(MediaManager.getConstants().supportedExtensions);
_createForOfIteratorHelperLoose = {
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
    return importDefault(1449).getMobileOptimizedSrc(proxy_url, width, height, str3);
  },
  createBackgroundHighlight(message) {
    let isAutomodBlockedMessage;
    let isEditing;
    message = message.message;
    ({ isEditing, isAutomodBlockedMessage } = message);
    const tmp = _createForOfIteratorHelperLoose(message.theme);
    if (isEditing) {
      let obj = { backgroundColor: tmp.editingColor };
      return obj;
    } else if (isAutomodBlockedMessage) {
      obj = {};
      ({ automodBlockedBackgroundColor: obj8.backgroundColor, automodBlockedGutterColor: obj8.gutterColor } = tmp);
      return obj;
    } else {
      if (message.hasFlag(constants.IS_GUILD_OFFICIAL)) {
        obj = require(5648) /* isGuildOfficialMessagesEnabled */;
        if (obj.showGuildOfficialMessageGradient(officialMessageStyle.officialMessageStyle)) {
          channel = channel.getChannel(message.getChannelId());
          let guild_id;
          if (null != channel) {
            guild_id = channel.guild_id;
          }
          guild = guild.getGuild(guild_id);
          let obj1 = require(5648) /* isGuildOfficialMessagesEnabled */;
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
              obj6 = require(4351) /* createMinimalMessageRecord */;
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
        obj2 = require(4351) /* createMinimalMessageRecord */;
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
const result1 = set.fileFinishedImporting("modules/messages/native/renderer/RowGeneratorUtils.tsx");

export default _createForOfIteratorHelperLoose;
export const InviteEmbedBackground = { dark: "#313339", light: "#fafafa" };
export const resolveHighlightThemedColors = _createForOfIteratorHelperLoose;
