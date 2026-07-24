// Module ID: 8283
// Function ID: 65283
// Name: _activityFromSetting
// Dependencies: [31, 4991, 653, 3771, 3803, 566, 2]
// Exports: getActivityFromCustomStatus, useCustomStatusActivity

// Module 8283 (_activityFromSetting)
import { useMemo } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ActivityTypes } from "ME";

function _activityFromSetting(emojiName) {
  if (null != arg1) {
    let obj = {};
    ({ id: obj2.id, name: obj2.name, animated: obj2.animated } = arg1);
    let tmp = obj;
  } else {
    tmp = null;
    if (null != emojiName.emojiName) {
      tmp = null;
      if ("" !== emojiName.emojiName) {
        const obj6 = importDefault(3771);
        const byName = obj6.getByName(importDefault(3771).convertSurrogateToName(emojiName.emojiName, false));
        let tmp2 = null;
        if (null != byName) {
          obj = { id: null, name: byName.surrogates, animated: false };
          tmp2 = obj;
        }
        tmp = tmp2;
        const obj7 = importDefault(3771);
      }
    }
  }
  const NumberResult = Number(emojiName.expiresAtMs);
  let value;
  if (null != emojiName.label) {
    value = iter.value;
  }
  obj = { name: "Custom Status", type: ActivityTypes.CUSTOM_STATUS };
  let text;
  if (emojiName.text.length > 0) {
    text = emojiName.text;
  }
  obj.state = text;
  let tmp6;
  if (NumberResult > 0) {
    const obj1 = { end: NumberResult };
    tmp6 = obj1;
  }
  obj.timestamps = tmp6;
  obj.emoji = tmp;
  obj.details = value;
  const obj2 = { label: value };
  obj.metadata = obj2;
  return obj;
}
const result = require("ME").fileFinishedImporting("modules/custom_status/utils/userSettingToActivity.tsx");

export const getActivityFromCustomStatus = function getActivityFromCustomStatus(setting) {
  const emojiId = setting.emojiId;
  let usableCustomEmojiById = null;
  if (null != emojiId) {
    usableCustomEmojiById = null;
    if ("0" !== emojiId) {
      usableCustomEmojiById = usableCustomEmojiById.getUsableCustomEmojiById(emojiId);
    }
  }
  return _activityFromSetting(setting, usableCustomEmojiById);
};
export const useCustomStatusActivity = function useCustomStatusActivity() {
  const CustomStatusSetting = setting(stateFromStores[4]).CustomStatusSetting;
  setting = CustomStatusSetting.useSetting();
  let emojiId;
  if (null != setting) {
    emojiId = setting.emojiId;
  }
  const items = [_isNativeReflectConstruct];
  const items1 = [emojiId];
  stateFromStores = setting(stateFromStores[5]).useStateFromStores(items, () => {
    let usableCustomEmojiById = null;
    if (null != emojiId) {
      usableCustomEmojiById = null;
      if ("0" !== emojiId) {
        usableCustomEmojiById = outer1_4.getUsableCustomEmojiById(emojiId);
      }
    }
    return usableCustomEmojiById;
  }, items1);
  const items2 = [setting, stateFromStores];
  return useMemo(() => {
    let tmp = null;
    if (null != setting) {
      tmp = outer1_6(setting, stateFromStores);
    }
    return tmp;
  }, items2);
};
