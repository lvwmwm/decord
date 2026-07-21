// Module ID: 8231
// Function ID: 64993
// Name: _activityFromSetting
// Dependencies: []
// Exports: getActivityFromCustomStatus, useCustomStatusActivity

// Module 8231 (_activityFromSetting)
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
        const obj6 = importDefault(dependencyMap[3]);
        const byName = obj6.getByName(importDefault(dependencyMap[3]).convertSurrogateToName(emojiName.emojiName, false));
        let tmp2 = null;
        if (null != byName) {
          obj = { "Null": "handled", "Null": false, "Null": 16, name: byName.surrogates };
          tmp2 = obj;
        }
        tmp = tmp2;
        const obj7 = importDefault(dependencyMap[3]);
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
const useMemo = require(dependencyMap[0]).useMemo;
let closure_4 = importDefault(dependencyMap[1]);
const ActivityTypes = require(dependencyMap[2]).ActivityTypes;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/custom_status/utils/userSettingToActivity.tsx");

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
  const CustomStatusSetting = require(dependencyMap[4]).CustomStatusSetting;
  const setting = CustomStatusSetting.useSetting();
  const require = setting;
  let emojiId;
  if (null != setting) {
    emojiId = setting.emojiId;
  }
  const importDefault = emojiId;
  const items = [closure_4];
  const items1 = [emojiId];
  const stateFromStores = require(dependencyMap[5]).useStateFromStores(items, () => {
    let usableCustomEmojiById = null;
    if (null != emojiId) {
      usableCustomEmojiById = null;
      if ("0" !== emojiId) {
        usableCustomEmojiById = usableCustomEmojiById.getUsableCustomEmojiById(emojiId);
      }
    }
    return usableCustomEmojiById;
  }, items1);
  const dependencyMap = stateFromStores;
  const items2 = [setting, stateFromStores];
  return useMemo(() => {
    let tmp = null;
    if (null != setting) {
      tmp = callback(setting, stateFromStores);
    }
    return tmp;
  }, items2);
};
