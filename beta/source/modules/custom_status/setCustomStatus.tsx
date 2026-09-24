// Module ID: 11433
// Function ID: 11434
// Name: setCustomStatus
// Dependencies: [11430, 1078, 2023, 4384, 11434, 1245, 2]
// Exports: default

// Module 11433 (setCustomStatus)
import Constants from "Constants" /* 1078 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import UserSettings from "UserSettings" /* 2023 */;
import _modDef4384 from "module_4384" /* 4384 */;
import Constants2 from "Constants" /* 11430 */;
import getClearAfterDurationDefault from "getClearAfterDuration" /* 11434 */;
import size from "module_2" /* 2 */;

const ClearAfterValues = Constants2.ClearAfterValues;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/custom_status/setCustomStatus.tsx");

export default function setCustomStatus(arg0) {
  ({ text, emojiInfo, clearAfter, analyticsContext, createdAtMs, prompt: _prompt, analyticsLocations } = arg0);
  const trimmed = text.trim();
  if (trimmed.length <= 0) {
    if (null == emojiInfo) {
      const CustomStatusSetting = UserSettings.CustomStatusSetting;
      return CustomStatusSetting.updateSetting(undefined);
    }
  }
  const CustomStatusSetting2 = UserSettings.CustomStatusSetting;
  let str = "";
  if (trimmed.length > 0) {
    str = trimmed;
  }
  const obj = { text: str, expiresAtMs: null, emojiId: null, emojiName: null, createdAtMs: null };
  let str2 = "0";
  if (null != clearAfter) {
    str2 = "0";
    if (clearAfter !== ClearAfterValues.DONT_CLEAR) {
      const _String = String;
      const obj2 = _modDef4384();
      const addResult = _modDef4384().add(getClearAfterDurationDefault(clearAfter), "ms");
      str2 = String(_modDef4384().add(getClearAfterDurationDefault(clearAfter), "ms").toDate().getTime());
      const toDateResult = _modDef4384().add(getClearAfterDurationDefault(clearAfter), "ms").toDate();
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
  if (createdAtMs == null) {
    const obj5 = _modDef4384();
    createdAtMs = _modDef4384().toDate().getTime();
    const toDateResult1 = _modDef4384().toDate();
  }
  obj.createdAtMs = String(createdAtMs);
  const updateSettingResult = CustomStatusSetting2.updateSetting(obj);
  let _location = null;
  if (null != analyticsContext) {
    _location = analyticsContext.location;
  }
  const obj3 = { location: _location, emoji_type: null, text_len: null, clear_after: null, prompt_type: null, location_stack: null };
  let tmp11 = null;
  if (null != emojiInfo) {
    let str6 = "unicode";
    if (null != emojiInfo.id) {
      str6 = "custom";
    }
    tmp11 = str6;
  }
  obj3.emoji_type = tmp11;
  obj3.text_len = trimmed.length;
  let combined = null;
  if (null != clearAfter) {
    const _HermesInternal = HermesInternal;
    combined = "" + clearAfter;
  }
  obj3.clear_after = combined;
  value = undefined;
  if (_prompt != null) {
    value = _prompt.value;
  }
  obj3.prompt_type = value;
  obj3.location_stack = analyticsLocations;
  AnalyticsUtilsDefault.track(AnalyticEvents.CUSTOM_STATUS_UPDATED, obj3);
  return updateSettingResult;
};
