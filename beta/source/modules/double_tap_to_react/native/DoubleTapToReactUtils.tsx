// Module ID: 8358
// Function ID: 8359
// Name: DoubleTapToReactUtils
// Dependencies: [19, 4847, 6757, 8359, 4852, 1395, 21, 4949, 4831, 8360, 4947, 5244, 8318, 8362, 4953, 8363, 2002, 5942, 5033, 4839, 2]
// Exports: areEmojisEqual, disambiguatedEmojiFromSettingsValue, getFallbackDoubleTapDisambiguatedEmoji, handleAddDefaultDoubleTapReaction, reactionEmojiFromSettingsValue

// Module 8358 (DoubleTapToReactUtils)
import Fragment from "Fragment" /* 21 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 4847 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4852 */;
import ReactionUtils from "ReactionUtils" /* 4947 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4949 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4953 */;
import DoubleTapToRaectConstants from "DoubleTapToRaectConstants" /* 8359 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 6757 */;
import EmojiConstants from "EmojiConstants" /* 1395 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
const isContentShown = DismissibleContentShownStateStore.isContentShown;
const NITRO_UPSELL_ALERT_KEY = DoubleTapToRaectConstants.NITRO_UPSELL_ALERT_KEY;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ EmojiDisabledReasons: metroImportAll, EmojiIntention: c9 } = EmojiConstants);
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx");

export const getFallbackDoubleTapDisambiguatedEmoji = function getFallbackDoubleTapDisambiguatedEmoji() {
  const obj = UnicodeEmojisDefault;
  let byName = obj.getByName("heart");
  if (byName == null) {
    byName = null;
  }
  return byName;
};
export const reactionEmojiFromSettingsValue = function reactionEmojiFromSettingsValue(arg0) {
  let animated;
  let emojiId;
  let emojiName;
  ({ emojiName, emojiId, animated } = arg0);
  let tmp;
  if (null != emojiId) {
    if ("0" !== emojiId) {
      tmp = emojiId;
    }
  }
  let str2;
  if (null != emojiName) {
    if ("" !== emojiName) {
      let result = emojiName;
      if (null == tmp) {
        const obj = UnicodeEmojisDefault;
        result = obj.convertNameToSurrogate(emojiName);
      }
      str2 = result;
    }
  }
  if (str2 == null) {
    str2 = "";
  }
  const obj2 = { name: str2, id: tmp, animated };
  if (animated == null) {
    animated = false;
  }
  return obj2;
};
export const disambiguatedEmojiFromSettingsValue = function disambiguatedEmojiFromSettingsValue(setting) {
  let emojiId;
  let emojiName;
  ({ emojiName, emojiId } = setting);
  let tmp;
  if (null != emojiId) {
    if ("0" !== emojiId) {
      tmp = emojiId;
    }
  }
  let customEmojiById = null;
  if (null != tmp) {
    customEmojiById = EmojiStore.getCustomEmojiById(tmp);
  }
  if (null == customEmojiById) {
    let byName = null;
    if (null != tmp2) {
      const obj = UnicodeEmojisDefault;
      byName = obj.getByName(tmp2);
    }
    customEmojiById = byName;
  }
  return customEmojiById;
};
export const handleAddDefaultDoubleTapReaction = function handleAddDefaultDoubleTapReaction(message, channel) {
  let animated;
  let emojiId;
  let emojiId2;
  let emojiName;
  let emojiName2;
  let obj5;
  let paths;
  let tmp = obj5;
  const DoubleTapReactionEmoji = obj5(4831).DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.getSetting();
  let disableDoubleTap;
  if (setting != null) {
    disableDoubleTap = setting.disableDoubleTap;
  }
  if (true !== disableDoubleTap) {
    const tmpResult = tmp(8360);
    if (tmpResult.canReactToMessage(message, channel)) {
      let flag;
      let tmp8;
      let obj = setting;
      if (setting == null) {
        obj = {};
      }
      ({ emojiName, emojiId, animated } = obj);
      let tmp5;
      if (null != emojiId) {
        if ("0" !== emojiId) {
          tmp5 = emojiId;
        }
      }
      let str2;
      if (null != emojiName) {
        if ("" !== emojiName) {
          let result = emojiName;
          if (null == tmp5) {
            const obj2 = UnicodeEmojisDefault;
            result = obj2.convertNameToSurrogate(emojiName);
          }
          str2 = result;
        }
      }
      if (str2 == null) {
        str2 = "";
      }
      const obj3 = { name: str2, id: tmp5, animated };
      if (animated == null) {
        animated = false;
      }
      obj5 = obj3;
      if (null == setting) {
        const obj4 = UnicodeEmojisDefault;
        const result1 = obj4.convertNameToSurrogate("heart");
        let tmp11 = null;
        if ("" !== result1) {
          obj5 = { name: result1, id: "Reflect", animated: null };
          tmp11 = obj5;
        }
        if (null != tmp11) {
          obj5 = tmp11;
          flag = true;
          tmp8 = tmp11;
        }
      } else {
        flag = false;
        tmp8 = obj3;
        if (null == obj3.id) {
          flag = false;
          tmp8 = obj3;
        }
      }
      const reactions = message.reactions;
      if (reactions.some((emoji) => {
        const obj = ReactionUtils;
        const tmp = obj.emojiEquals(emoji.emoji, obj5) && emoji.me;
        return tmp;
      })) {
        const tmpResult10 = tmp(5244);
        const result2 = tmpResult10.triggerHapticFeedback(tmp(5244).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj6 = { channelId: channel.id, messageId: message.id, emoji: tmp8, location: tmp(8318).ReactionLocations.DOUBLE_TAP };
        const removeReaction = tmp(8318).removeReaction;
        tmp(8318);
        removeReaction(obj6);
      } else {
        let customEmojiById;
        if (flag) {
          const obj8 = UnicodeEmojisDefault;
          let byName = obj8.getByName("heart");
          if (byName == null) {
            byName = null;
          }
          customEmojiById = byName;
        } else {
          let obj9 = setting;
          if (setting == null) {
            obj9 = {};
          }
          ({ emojiName: emojiName2, emojiId: emojiId2 } = obj9);
          let tmp12;
          if (null != emojiId2) {
            if ("0" !== emojiId2) {
              tmp12 = emojiId2;
            }
          }
          customEmojiById = null;
          if (null != tmp12) {
            customEmojiById = EmojiStore.getCustomEmojiById(tmp12);
          }
          if (null == customEmojiById) {
            let byName1 = null;
            if (null != tmp13) {
              const obj7 = UnicodeEmojisDefault;
              byName1 = obj7.getByName(tmp13);
            }
            customEmojiById = byName1;
          }
        }
        if (null != customEmojiById) {
          if (null != customEmojiById) {
            const obj10 = { emoji: customEmojiById, channel, intention: constants2.REACTION };
            const obj11 = EmojiUtilsDefault;
            const emojiUnavailableReason = obj11.getEmojiUnavailableReason(obj10);
            if (emojiUnavailableReason === constants.PREMIUM_LOCKED) {
              react.lazy(() => obj5(paths[16])(paths[15], paths.paths));
              const tmpResult12 = tmp(5942);
              tmpResult12.openAlert(NITRO_UPSELL_ALERT_KEY, <lazyResult emojiName={customEmojiById.name} />);
            } else if (null != emojiUnavailableReason) {
              const obj13 = { emojiName: customEmojiById.name, reason: emojiUnavailableReason };
              const tmpResult13 = tmp(8362);
              const result3 = tmpResult13.showDoubleTapErrorToast(obj13);
            }
          }
          const tmpResult14 = tmp(5244);
          const result4 = tmpResult14.triggerHapticFeedback(tmp(5244).HapticFeedbackTypes.IMPACT_LIGHT);
          const id = channel.id;
          const tmpResult15 = tmp(8318);
          tmpResult15.addReaction(id, message.id, tmp8, tmp(8318).ReactionLocations.DOUBLE_TAP);
          const obj14 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
          const tmpResult16 = tmp(5033);
          const result5 = tmpResult16.UNSAFE_markDismissibleContentAsDismissed(tmp(4839).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj14);
          const tmp32 = ContentDismissActionType;
          if (isContentShown(tmp(4839).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL)) {
            const obj15 = { dismissAction: tmp32.INDIRECT_ACTION, forceTrack: true };
            const tmpResult17 = tmp(5033);
            const result6 = tmpResult17.UNSAFE_markDismissibleContentAsDismissed(tmp(4839).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL, obj15);
          }
        } else if (!flag) {
          let emojiName1;
          const showDoubleTapErrorToast = tmp(8362).showDoubleTapErrorToast;
          tmp(8362);
          if (setting != null) {
            emojiName1 = setting.emojiName;
          }
          const obj16 = { emojiName: emojiName1 };
          const result7 = showDoubleTapErrorToast(obj16);
        }
      }
    }
  }
};
export const areEmojisEqual = function areEmojisEqual(customEmojiById, emoji) {
  if (null == customEmojiById.id) {
    let tmp;
    if (null == emoji.id) {
      tmp = customEmojiById.surrogates === emoji.surrogates;
    }
    return tmp;
  }
  tmp = customEmojiById.id === emoji.id && customEmojiById.name === emoji.name;
};
