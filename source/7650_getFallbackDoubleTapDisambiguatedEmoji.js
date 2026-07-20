// Module ID: 7650
// Function ID: 61192
// Name: getFallbackDoubleTapDisambiguatedEmoji
// Dependencies: []
// Exports: areEmojisEqual, handleAddDefaultDoubleTapReaction

// Module 7650 (getFallbackDoubleTapDisambiguatedEmoji)
function getFallbackDoubleTapDisambiguatedEmoji() {
  const byName = importDefault(dependencyMap[7]).getByName("heart");
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
        let obj = importDefault(dependencyMap[7]);
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
      byName = importDefault(dependencyMap[7]).getByName(tmp2);
      const obj = importDefault(dependencyMap[7]);
    }
    customEmojiById = byName;
  }
  return customEmojiById;
}
let closure_3 = importAll(dependencyMap[0]);
const isContentShown = arg1(dependencyMap[1]).isContentShown;
let closure_5 = importDefault(dependencyMap[2]);
const NITRO_UPSELL_ALERT_KEY = arg1(dependencyMap[3]).NITRO_UPSELL_ALERT_KEY;
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
({ EmojiDisabledReasons: closure_8, EmojiIntention: closure_9 } = arg1(dependencyMap[5]));
const jsx = arg1(dependencyMap[6]).jsx;
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx");

export { getFallbackDoubleTapDisambiguatedEmoji };
export { reactionEmojiFromSettingsValue };
export { disambiguatedEmojiFromSettingsValue };
export const handleAddDefaultDoubleTapReaction = function handleAddDefaultDoubleTapReaction(message, channel) {
  const DoubleTapReactionEmoji = channel(dependencyMap[8]).DoubleTapReactionEmoji;
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
      channel = tmp3Result;
      if (null == setting) {
        let obj1 = importDefault(dependencyMap[7]);
        const result = obj1.convertNameToSurrogate("heart");
        let tmp9 = null;
        if ("" !== result) {
          obj = { name: result, id: undefined, animated: false };
          tmp9 = obj;
        }
        if (null != tmp9) {
          channel = tmp9;
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
        const obj = tmp9(closure_2[10]);
        return tmp9(closure_2[10]).emojiEquals(emoji.emoji, tmp9) && emoji.me;
      })) {
        const result1 = channel(dependencyMap[11]).triggerHapticFeedback(channel(dependencyMap[11]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj19 = channel(dependencyMap[11]);
        obj = { channelId: channel.id, messageId: message.id, emoji: tmp5, location: channel(dependencyMap[12]).ReactionLocations.DOUBLE_TAP };
        channel(dependencyMap[12]).removeReaction(obj);
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
            let obj7 = importDefault(dependencyMap[14]);
            const emojiUnavailableReason = obj7.getEmojiUnavailableReason(obj2);
            if (emojiUnavailableReason === constants.PREMIUM_LOCKED) {
              const lazyResult = React.lazy(() => tmp9(paths[16])(paths[15], paths.paths));
              const obj3 = { emojiName: tmp10Result.name };
              channel(dependencyMap[17]).openAlert(NITRO_UPSELL_ALERT_KEY, <lazyResult {...obj3} />);
            } else if (null != emojiUnavailableReason) {
              let obj4 = { emojiName: tmp10Result.name, reason: emojiUnavailableReason };
              const result2 = channel(dependencyMap[13]).showDoubleTapErrorToast(obj4);
            }
          }
          const result3 = channel(dependencyMap[11]).triggerHapticFeedback(channel(dependencyMap[11]).HapticFeedbackTypes.IMPACT_LIGHT);
          const obj10 = channel(dependencyMap[12]);
          const id = channel.id;
          obj10.addReaction(id, message.id, tmp5, channel(dependencyMap[12]).ReactionLocations.DOUBLE_TAP);
          const obj9 = channel(dependencyMap[11]);
          const obj5 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
          const result4 = channel(dependencyMap[18]).UNSAFE_markDismissibleContentAsDismissed(channel(dependencyMap[19]).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj5);
          if (isContentShown(channel(dependencyMap[19]).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL)) {
            const obj6 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION, forceTrack: true };
            const result5 = channel(dependencyMap[18]).UNSAFE_markDismissibleContentAsDismissed(channel(dependencyMap[19]).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL, obj6);
            const obj13 = channel(dependencyMap[18]);
          }
          const obj11 = channel(dependencyMap[18]);
        } else if (!flag) {
          obj4 = channel(dependencyMap[13]);
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
    const obj22 = channel(dependencyMap[9]);
  }
};
export const areEmojisEqual = function areEmojisEqual(closure_0, emoji) {
  if (null == closure_0.id) {
    if (null == emoji.id) {
      let tmp = closure_0.surrogates === emoji.surrogates;
    }
    return tmp;
  }
  tmp = closure_0.id === emoji.id && closure_0.name === emoji.name;
};
