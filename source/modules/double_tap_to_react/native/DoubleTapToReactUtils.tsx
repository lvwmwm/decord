// Module ID: 7745
// Function ID: 61532
// Name: getFallbackDoubleTapDisambiguatedEmoji
// Dependencies: [31, 1340, 4991, 7746, 1345, 1852, 33, 3771, 3803, 7747, 3769, 4099, 7004, 7748, 3775, 7750, 1934, 4472, 3946, 1334, 2]
// Exports: areEmojisEqual, handleAddDefaultDoubleTapReaction

// Module 7745 (getFallbackDoubleTapDisambiguatedEmoji)
import result from "result";
import { isContentShown } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { NITRO_UPSELL_ALERT_KEY } from "NITRO_UPSELL_ALERT_KEY";
import { ContentDismissActionType } from "ContentDismissActionType";
import set from "set";
import { jsx } from "jsxProd";
import set from "_isNativeReflectConstruct";

let closure_8;
let closure_9;
let require = arg1;
function getFallbackDoubleTapDisambiguatedEmoji() {
  const byName = importDefault(3771).getByName("heart");
  let tmp2 = null;
  if (null != byName) {
    tmp2 = byName;
  }
  return tmp2;
}
function reactionEmojiFromSettingsValue(arg0) {
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
  let tmp2;
  if (null != emojiName) {
    if ("" !== emojiName) {
      let result = emojiName;
      if (null == tmp) {
        let obj = importDefault(3771);
        result = obj.convertNameToSurrogate(emojiName);
      }
      tmp2 = result;
    }
  }
  obj = {};
  let str3 = "";
  if (null != tmp2) {
    str3 = tmp2;
  }
  obj.name = str3;
  obj.id = tmp;
  obj.animated = null != animated && animated;
  return obj;
}
function disambiguatedEmojiFromSettingsValue(setting) {
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
    customEmojiById = customEmojiById.getCustomEmojiById(tmp);
  }
  if (null == customEmojiById) {
    let byName = null;
    if (null != tmp2) {
      byName = importDefault(3771).getByName(tmp2);
      const obj = importDefault(3771);
    }
    customEmojiById = byName;
  }
  return customEmojiById;
}
({ EmojiDisabledReasons: closure_8, EmojiIntention: closure_9 } = set);
let result = set.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx");

export { getFallbackDoubleTapDisambiguatedEmoji };
export { reactionEmojiFromSettingsValue };
export { disambiguatedEmojiFromSettingsValue };
export const handleAddDefaultDoubleTapReaction = function handleAddDefaultDoubleTapReaction(message, channel) {
  const DoubleTapReactionEmoji = require(3803) /* explicitContentFromProto */.DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.getSetting();
  let disableDoubleTap;
  if (null != setting) {
    disableDoubleTap = setting.disableDoubleTap;
  }
  if (true !== disableDoubleTap) {
    if (obj22.canReactToMessage(message, channel)) {
      let obj = setting;
      if (null == setting) {
        obj = {};
      }
      const tmp3Result = reactionEmojiFromSettingsValue(obj);
      require = tmp3Result;
      if (null == setting) {
        let obj1 = importDefault(3771);
        const result = obj1.convertNameToSurrogate("heart");
        let tmp9 = null;
        if ("" !== result) {
          obj = { name: result, id: undefined, animated: false };
          tmp9 = obj;
        }
        if (null != tmp9) {
          require = tmp9;
          let tmp5 = tmp9;
          let flag = true;
        }
      } else {
        tmp5 = tmp3Result;
        flag = false;
        if (null == tmp3Result.id) {
          tmp5 = tmp3Result;
          flag = false;
        }
      }
      const reactions = message.reactions;
      if (reactions.some((emoji) => {
        const obj = tmp9(outer1_2[10]);
        return tmp9(outer1_2[10]).emojiEquals(emoji.emoji, tmp9) && emoji.me;
      })) {
        const result1 = require(4099) /* getAndroidLightImpactEffect */.triggerHapticFeedback(require(4099) /* getAndroidLightImpactEffect */.HapticFeedbackTypes.IMPACT_LIGHT);
        const obj19 = require(4099) /* getAndroidLightImpactEffect */;
        obj = { channelId: channel.id, messageId: message.id, emoji: tmp5, location: require(7004) /* checkReactionResponse */.ReactionLocations.DOUBLE_TAP };
        require(7004) /* checkReactionResponse */.removeReaction(obj);
      } else {
        if (flag) {
          let tmp10Result = getFallbackDoubleTapDisambiguatedEmoji();
        } else {
          obj1 = setting;
          if (null == setting) {
            obj1 = {};
          }
          tmp10Result = disambiguatedEmojiFromSettingsValue(obj1);
          const tmp10 = disambiguatedEmojiFromSettingsValue;
        }
        if (null != tmp10Result) {
          if (null != tmp10Result) {
            const obj2 = { emoji: tmp10Result, channel, intention: constants2.REACTION };
            let obj7 = importDefault(3775);
            const emojiUnavailableReason = obj7.getEmojiUnavailableReason(obj2);
            if (emojiUnavailableReason === constants.PREMIUM_LOCKED) {
              const lazyResult = React.lazy(() => tmp9(outer1_2[16])(outer1_2[15], outer1_2.paths));
              const obj3 = { emojiName: tmp10Result.name };
              require(4472) /* useAlertStore */.openAlert(NITRO_UPSELL_ALERT_KEY, <lazyResult emojiName={tmp10Result.name} />);
            } else if (null != emojiUnavailableReason) {
              let obj4 = { emojiName: tmp10Result.name, reason: emojiUnavailableReason };
              const result2 = require(7748) /* DoubleTapErrorToastIcon */.showDoubleTapErrorToast(obj4);
            }
          }
          const result3 = require(4099) /* getAndroidLightImpactEffect */.triggerHapticFeedback(require(4099) /* getAndroidLightImpactEffect */.HapticFeedbackTypes.IMPACT_LIGHT);
          const obj10 = require(7004) /* checkReactionResponse */;
          const id = channel.id;
          obj10.addReaction(id, message.id, tmp5, require(7004) /* checkReactionResponse */.ReactionLocations.DOUBLE_TAP);
          const obj9 = require(4099) /* getAndroidLightImpactEffect */;
          const obj5 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
          const result4 = require(3946) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj5);
          if (isContentShown(require(1334) /* DismissibleContent */.DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL)) {
            const obj6 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION, forceTrack: true };
            const result5 = require(3946) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL, obj6);
            const obj13 = require(3946) /* UNSAFE_isDismissibleContentDismissed */;
          }
          const obj11 = require(3946) /* UNSAFE_isDismissibleContentDismissed */;
        } else if (!flag) {
          obj4 = require(7748) /* DoubleTapErrorToastIcon */;
          obj7 = {};
          let emojiName;
          if (null != setting) {
            emojiName = setting.emojiName;
          }
          obj7.emojiName = emojiName;
          const result6 = obj4.showDoubleTapErrorToast(obj7);
        }
      }
      const tmp3 = reactionEmojiFromSettingsValue;
    }
    obj22 = require(7747) /* canReactToMessageInternal */;
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
