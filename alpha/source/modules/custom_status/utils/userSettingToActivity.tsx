// Module ID: 9463
// Function ID: 9464
// Name: userSettingToActivity
// Dependencies: [19, 6906, 5194, 5189, 6006, 5068, 504, 2]
// Exports: getActivityFromCustomStatus, useCustomStatusActivity

// Module 9463 (userSettingToActivity)
import react from "react" /* 19 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 5189 */;
import ActivityTypes from "ActivityTypes" /* 6006 */;
import EmojiStore from "EmojiStore" /* 6906 */;
import EmojiPackStore from "EmojiPackStore" /* 5194 */;
import size from "module_2" /* 2 */;

function _activityFromSetting(emojiName, stateFromStores) {
  let text;
  let tmp;
  let tmp6;
  if (null != stateFromStores) {
    const obj3 = { id: null, name: null, animated: null };
    ({ id: obj2.id, name: obj2.name, animated: obj2.animated } = stateFromStores);
    tmp = obj3;
  } else {
    tmp = null;
    if (null != emojiName.emojiName) {
      tmp = null;
      if ("" !== emojiName.emojiName) {
        const getByName = UnicodeEmojisDefault.getByName;
        UnicodeEmojisDefault;
        const obj5 = UnicodeEmojisDefault;
        const byName = getByName(obj5.convertSurrogateToName(emojiName.emojiName, false));
        let tmp2 = null;
        if (null != byName) {
          tmp2 = { id: null, name: byName.surrogates, animated: false };
          const obj = { id: null, name: byName.surrogates, animated: false };
        }
        tmp = tmp2;
      }
    }
  }
  const NumberResult = Number(emojiName.expiresAtMs);
  let value;
  if (emojiName.label != null) {
    value = iter.value;
  }
  const obj4 = { name: "Custom Status", type: ActivityTypes.ActivityTypes.CUSTOM_STATUS, state: text, timestamps: tmp6, emoji: tmp, details: value, metadata: { label: value } };
  text = undefined;
  if (emojiName.text.length > 0) {
    text = emojiName.text;
  }
  tmp6 = undefined;
  if (NumberResult > 0) {
    tmp6 = { end: NumberResult };
    const obj8 = { end: NumberResult };
  }
  return obj4;
}
const useMemo = react.useMemo;
const result = size.fileFinishedImporting("modules/custom_status/utils/userSettingToActivity.tsx");

export function getActivityFromCustomStatus(setting) {
  const emojiId = setting.emojiId;
  let tmp2 = null;
  const tmp = _activityFromSetting;
  if (null != emojiId) {
    tmp2 = null;
    if ("0" !== emojiId) {
      const emoji = EmojiPackStore.getEmoji(emojiId);
      let usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(emojiId);
      const obj = EmojiPackStore;
      if (usableCustomEmojiById == null) {
        let tmp6 = null;
        if (null != emoji) {
          tmp6 = null;
          if (obj.isPackEmojiUsable(emoji)) {
            tmp6 = emoji;
          }
        }
        usableCustomEmojiById = tmp6;
      }
      tmp2 = usableCustomEmojiById;
    }
  }
  return tmp(setting, tmp2);
}
export function useCustomStatusActivity() {
  let setting;
  let stateFromStores;
  const tmp = setting;
  let tmp2 = stateFromStores;
  const CustomStatusSetting = setting(stateFromStores[5]).CustomStatusSetting;
  setting = CustomStatusSetting.useSetting();
  let emojiId;
  if (setting != null) {
    emojiId = setting.emojiId;
  }
  const items = [EmojiStore, EmojiPackStore];
  const items1 = [emojiId];
  const tmpResult = tmp(tmp2[6]);
  stateFromStores = tmpResult.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != emojiId) {
      tmp2 = null;
      if ("0" !== emojiId) {
        const emoji = EmojiPackStore.getEmoji(tmp);
        let usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp);
        const obj = EmojiPackStore;
        if (usableCustomEmojiById == null) {
          let tmp6 = null;
          if (null != emoji) {
            tmp6 = null;
            if (obj.isPackEmojiUsable(emoji)) {
              tmp6 = emoji;
            }
          }
          usableCustomEmojiById = tmp6;
        }
        tmp2 = usableCustomEmojiById;
      }
    }
    return tmp2;
  }, items1);
  const items2 = [setting, stateFromStores];
  return useMemo(() => {
    let tmp2 = null;
    if (null != setting) {
      tmp2 = _activityFromSetting(tmp, stateFromStores);
    }
    return tmp2;
  }, items2);
}
