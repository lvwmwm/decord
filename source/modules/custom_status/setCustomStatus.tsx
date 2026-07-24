// Module ID: 11931
// Function ID: 92390
// Name: determineEmojiType
// Dependencies: [11928, 653, 3803, 3712, 11932, 675, 2]
// Exports: default

// Module 11931 (determineEmojiType)
import { ClearAfterValues } from "StatusTypes";
import { AnalyticEvents } from "ME";

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
const result = require("explicitContentFromProto").fileFinishedImporting("modules/custom_status/setCustomStatus.tsx");

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
      const CustomStatusSetting = require(3803) /* explicitContentFromProto */.CustomStatusSetting;
      return CustomStatusSetting.updateSetting(undefined);
    }
  }
  const CustomStatusSetting2 = require(3803) /* explicitContentFromProto */.CustomStatusSetting;
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
      const obj2 = importDefault(3712)();
      const addResult = importDefault(3712)().add(importDefault(11932)(clearAfter), "ms");
      str2 = String(importDefault(3712)().add(importDefault(11932)(clearAfter), "ms").toDate().getTime());
      const toDateResult = importDefault(3712)().add(importDefault(11932)(clearAfter), "ms").toDate();
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
    const obj5 = importDefault(3712)();
    createdAtMs = importDefault(3712)().toDate().getTime();
    const toDateResult1 = importDefault(3712)().toDate();
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
  importDefault(675).track(AnalyticEvents.CUSTOM_STATUS_UPDATED, obj);
  return updateSettingResult;
};
