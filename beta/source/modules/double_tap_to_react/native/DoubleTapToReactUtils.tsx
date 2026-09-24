// Module ID: 8263
// Function ID: 8264
// Name: DoubleTapToReactUtils
// Dependencies: [19, 2037, 5710, 8264, 2042, 1379, 21, 4445, 2023, 8265, 4443, 4758, 8043, 8267, 4449, 8269, 1984, 5144, 4611, 2031, 2]
// Exports: areEmojisEqual, disambiguatedEmojiFromSettingsValue, getFallbackDoubleTapDisambiguatedEmoji, handleAddDefaultDoubleTapReaction, reactionEmojiFromSettingsValue

// Module 8263 (DoubleTapToReactUtils)
import ReactionUtils from "ReactionUtils" /* 4443 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4445 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4449 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5710 */;

require = fn;
const isContentShown = fn(2037).isContentShown;
const NITRO_UPSELL_ALERT_KEY = fn(8264).NITRO_UPSELL_ALERT_KEY;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const EmojiConstants = fn(1379);
({ EmojiDisabledReasons: closure_8, EmojiIntention: closure_9 } = EmojiConstants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx");

export const getFallbackDoubleTapDisambiguatedEmoji = function getFallbackDoubleTapDisambiguatedEmoji() {
  let byName = UnicodeEmojisDefault.getByName("heart");
  if (byName == null) {
    byName = null;
  }
  return byName;
};
export const reactionEmojiFromSettingsValue = function reactionEmojiFromSettingsValue(arg0) {
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
        result = UnicodeEmojisDefault.convertNameToSurrogate(emojiName);
      }
      str2 = result;
    }
  }
  if (str2 == null) {
    str2 = "";
  }
  const obj2 = { name: str2, id: tmp, animated: null };
  if (animated == null) {
    animated = false;
  }
  obj2.animated = animated;
  return obj2;
};
export const disambiguatedEmojiFromSettingsValue = function disambiguatedEmojiFromSettingsValue(setting) {
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
      byName = UnicodeEmojisDefault.getByName(tmp2);
    }
    customEmojiById = byName;
  }
  return customEmojiById;
};
export const handleAddDefaultDoubleTapReaction = function handleAddDefaultDoubleTapReaction(message, channel) {
  const DoubleTapReactionEmoji = obj5(2023).DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.getSetting();
  let disableDoubleTap;
  if (setting != null) {
    disableDoubleTap = setting.disableDoubleTap;
  }
  if (true !== disableDoubleTap) {
    if (tmpResult.canReactToMessage(message, channel)) {
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
            result = UnicodeEmojisDefault.convertNameToSurrogate(emojiName);
          }
          str2 = result;
        }
      }
      if (str2 == null) {
        str2 = "";
      }
      const obj3 = { name: str2, id: tmp5, animated: null };
      if (animated == null) {
        animated = false;
      }
      obj3.animated = animated;
      obj5 = obj3;
      if (null == setting) {
        const result1 = UnicodeEmojisDefault.convertNameToSurrogate("heart");
        let tmp11 = null;
        if ("" !== result1) {
          obj5 = { name: result1, id: "Set", animated: null };
          tmp11 = obj5;
        }
        if (null != tmp11) {
          obj5 = tmp11;
          let flag = true;
          let tmp8 = tmp11;
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
      if (reactions.some((emoji) => ReactionUtils.emojiEquals(emoji.emoji, obj5) && emoji.me)) {
        const result2 = tmp(4758).triggerHapticFeedback(tmp(4758).HapticFeedbackTypes.IMPACT_LIGHT);
        const tmpResult10 = tmp(4758);
        const obj6 = { channelId: channel.id, messageId: message.id, emoji: tmp8, location: tmp(8043).ReactionLocations.DOUBLE_TAP };
        tmp(8043).removeReaction(obj6);
      } else {
        if (flag) {
          let byName = UnicodeEmojisDefault.getByName("heart");
          if (byName == null) {
            byName = null;
          }
          let customEmojiById = byName;
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
              byName1 = UnicodeEmojisDefault.getByName(tmp13);
            }
            customEmojiById = byName1;
          }
        }
        if (null != customEmojiById) {
          if (null != customEmojiById) {
            const obj10 = { emoji: customEmojiById, channel, intention: constants2.REACTION };
            const emojiUnavailableReason = EmojiUtilsDefault.getEmojiUnavailableReason(obj10);
            if (emojiUnavailableReason === constants.PREMIUM_LOCKED) {
              const lazyResult = noop.lazy(() => obj5(paths[16])(paths[15], paths.paths));
              const obj11 = { emojiName: customEmojiById.name };
              tmp(5144).openAlert(NITRO_UPSELL_ALERT_KEY, <lazyResult emojiName={customEmojiById.name} />);
            } else if (null != emojiUnavailableReason) {
              const obj13 = { emojiName: customEmojiById.name, reason: emojiUnavailableReason };
              const result3 = tmp(8267).showDoubleTapErrorToast(obj13);
            }
          }
          const result4 = tmp(4758).triggerHapticFeedback(tmp(4758).HapticFeedbackTypes.IMPACT_LIGHT);
          const tmpResult15 = tmp(8043);
          const id = channel.id;
          tmpResult15.addReaction(id, message.id, tmp8, tmp(8043).ReactionLocations.DOUBLE_TAP);
          const tmpResult14 = tmp(4758);
          const obj14 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
          const result5 = tmp(4611).UNSAFE_markDismissibleContentAsDismissed(tmp(2031).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj14);
          if (isContentShown(tmp(2031).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL)) {
            const obj15 = { dismissAction: tmp31.INDIRECT_ACTION, forceTrack: true };
            const result6 = tmp(4611).UNSAFE_markDismissibleContentAsDismissed(tmp(2031).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL, obj15);
            const tmpResult17 = tmp(4611);
          }
          tmp31 = ContentDismissActionType;
          const tmpResult16 = tmp(4611);
        } else if (!flag) {
          let emojiName1;
          if (setting != null) {
            emojiName1 = setting.emojiName;
          }
          const obj16 = { emojiName: emojiName1 };
          const result7 = tmp(8267).showDoubleTapErrorToast(obj16);
          const tmpResult18 = tmp(8267);
        }
      }
    }
    tmpResult = tmp(8265);
  }
};
export const areEmojisEqual = function areEmojisEqual(customEmojiById, emoji) {
  if (null == customEmojiById.id) {
    if (null == emoji.id) {
      let tmp = customEmojiById.surrogates === emoji.surrogates;
    }
    return tmp;
  }
  tmp = customEmojiById.id === emoji.id && customEmojiById.name === emoji.name;
};
