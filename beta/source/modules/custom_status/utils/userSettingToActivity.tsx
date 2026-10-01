// Module ID: 8819
// Function ID: 8820
// Name: userSettingToActivity
// Dependencies: [19, 5771, 1074, 4483, 2021, 504, 2]
// Exports: getActivityFromCustomStatus, useCustomStatusActivity

// Module 8819 (userSettingToActivity)
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4483 */;
import EmojiStore from "EmojiStore" /* 5771 */;
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
  const obj4 = { name: "Custom Status", type: ActivityTypes.CUSTOM_STATUS, state: text, timestamps: tmp6, emoji: tmp, details: value, metadata: { label: value } };
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
const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/custom_status/utils/userSettingToActivity.tsx");

export const getActivityFromCustomStatus = function getActivityFromCustomStatus(setting) {
  const emojiId = setting.emojiId;
  let usableCustomEmojiById = null;
  const tmp = _activityFromSetting;
  if (null != emojiId) {
    usableCustomEmojiById = null;
    if ("0" !== emojiId) {
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(emojiId);
    }
  }
  return tmp(setting, usableCustomEmojiById);
};
export const useCustomStatusActivity = function useCustomStatusActivity() {
  let setting;
  let stateFromStores;
  const tmp = setting;
  let tmp2 = stateFromStores;
  const CustomStatusSetting = setting(stateFromStores[4]).CustomStatusSetting;
  setting = CustomStatusSetting.useSetting();
  let emojiId;
  if (setting != null) {
    emojiId = setting.emojiId;
  }
  const items = [EmojiStore];
  const items1 = [emojiId];
  const tmpResult = tmp(tmp2[5]);
  stateFromStores = tmpResult.useStateFromStores(items, () => {
    let usableCustomEmojiById = null;
    if (null != emojiId) {
      usableCustomEmojiById = null;
      if ("0" !== emojiId) {
        usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp);
      }
    }
    return usableCustomEmojiById;
  }, items1);
  const items2 = [setting, stateFromStores];
  return useMemo(() => {
    let tmp2 = null;
    if (null != setting) {
      tmp2 = _activityFromSetting(tmp, stateFromStores);
    }
    return tmp2;
  }, items2);
};
