// Module ID: 11892
// Function ID: 92099
// Name: determineEmojiType
// Dependencies: []
// Exports: default

// Module 11892 (determineEmojiType)
function determineEmojiType(emojiInfo) {
  let tmp = null;
  if (null != emojiInfo) {
    let str = "unicode";
    if (null != emojiInfo.id) {
      str = "custom";
    }
    tmp = str;
  }
  return tmp;
}
const ClearAfterValues = require(dependencyMap[0]).ClearAfterValues;
const AnalyticEvents = require(dependencyMap[1]).AnalyticEvents;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/custom_status/setCustomStatus.tsx");

export default function setCustomStatus(arg0) {
  let _prompt;
  let analyticsContext;
  let analyticsLocations;
  let clearAfter;
  let createdAtMs;
  let emojiInfo;
  let text;
  ({ text, emojiInfo, clearAfter, analyticsContext, createdAtMs, prompt: _prompt, analyticsLocations } = arg0);
  const trimmed = text.trim();
  if (trimmed.length <= 0) {
    if (null == emojiInfo) {
      const CustomStatusSetting = require(dependencyMap[2]).CustomStatusSetting;
      return CustomStatusSetting.updateSetting(undefined);
    }
  }
  const CustomStatusSetting2 = require(dependencyMap[2]).CustomStatusSetting;
  let obj = {};
  let str = "";
  if (trimmed.length > 0) {
    str = trimmed;
  }
  obj.text = str;
  let str2 = "0";
  if (null != clearAfter) {
    str2 = "0";
    if (clearAfter !== ClearAfterValues.DONT_CLEAR) {
      const _String = String;
      const obj2 = importDefault(dependencyMap[3])();
      const addResult = importDefault(dependencyMap[3])().add(importDefault(dependencyMap[4])(clearAfter), "ms");
      str2 = String(importDefault(dependencyMap[3])().add(importDefault(dependencyMap[4])(clearAfter), "ms").toDate().getTime());
      const toDateResult = importDefault(dependencyMap[3])().add(importDefault(dependencyMap[4])(clearAfter), "ms").toDate();
    }
  }
  obj.expiresAtMs = str2;
  let str4 = "0";
  if (null != emojiInfo) {
    str4 = "0";
    if (null != emojiInfo.id) {
      str4 = emojiInfo.id;
    }
  }
  obj.emojiId = str4;
  let str5 = "";
  if (null != emojiInfo) {
    str5 = emojiInfo.name;
  }
  obj.emojiName = str5;
  if (null == createdAtMs) {
    const obj5 = importDefault(dependencyMap[3])();
    createdAtMs = importDefault(dependencyMap[3])().toDate().getTime();
    const toDateResult1 = importDefault(dependencyMap[3])().toDate();
  }
  obj.createdAtMs = String(createdAtMs);
  const updateSettingResult = CustomStatusSetting2.updateSetting(obj);
  obj = {};
  let _location = null;
  if (null != analyticsContext) {
    _location = analyticsContext.location;
  }
  obj.location = _location;
  obj.emoji_type = determineEmojiType(emojiInfo);
  obj.text_len = trimmed.length;
  let combined = null;
  if (null != clearAfter) {
    const _HermesInternal = HermesInternal;
    combined = "" + clearAfter;
  }
  obj.clear_after = combined;
  let value;
  if (null != _prompt) {
    value = _prompt.value;
  }
  obj.prompt_type = value;
  obj.location_stack = analyticsLocations;
  importDefault(dependencyMap[5]).track(AnalyticEvents.CUSTOM_STATUS_UPDATED, obj);
  return updateSettingResult;
};
