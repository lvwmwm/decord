// Module ID: 10580
// Function ID: 10581
// Name: setCustomStatus
// Dependencies: [10577, 1074, 2021, 4421, 10581, 1241, 2]
// Exports: default

// Module 10580 (setCustomStatus)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import UserSettings from "UserSettings" /* 2021 */;
import _modDef4421 from "module_4421" /* 4421 */;
import Constants2 from "Constants" /* 10577 */;
import getClearAfterDurationDefault from "getClearAfterDuration" /* 10581 */;
import size from "module_2" /* 2 */;

const ClearAfterValues = Constants2.ClearAfterValues;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/custom_status/setCustomStatus.tsx");

export default function setCustomStatus(arg0) {
  let _String2;
  let _prompt;
  let analyticsContext;
  let analyticsLocations;
  let clearAfter;
  let combined;
  let createdAtMs;
  let emojiInfo;
  let str2;
  let str4;
  let str5;
  let text;
  let tmp12;
  let value;
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
  const updateSetting = CustomStatusSetting2.updateSetting;
  if (trimmed.length > 0) {
    str = trimmed;
  }
  const obj = { text: str, expiresAtMs: str2, emojiId: str4, emojiName: str5, createdAtMs: _String2(createdAtMs) };
  str2 = "0";
  if (null != clearAfter) {
    str2 = "0";
    if (clearAfter !== ClearAfterValues.DONT_CLEAR) {
      const _String = String;
      const obj2 = _modDef4421();
      const addResult = obj2.add(getClearAfterDurationDefault(clearAfter), "ms");
      const toDateResult = addResult.toDate();
      str2 = String(toDateResult.getTime());
    }
  }
  str4 = "0";
  if (null != emojiInfo) {
    str4 = "0";
    if (null != emojiInfo.id) {
      str4 = emojiInfo.id;
    }
  }
  str5 = "";
  if (null != emojiInfo) {
    str5 = emojiInfo.name;
  }
  _String2 = String;
  if (createdAtMs == null) {
    const obj5 = _modDef4421();
    const toDateResult1 = obj5.toDate();
    createdAtMs = toDateResult1.getTime();
  }
  let _location = null;
  const updateSettingResult = updateSetting(obj);
  const track = AnalyticsUtilsDefault.track;
  const CUSTOM_STATUS_UPDATED = AnalyticEvents.CUSTOM_STATUS_UPDATED;
  AnalyticsUtilsDefault;
  if (null != analyticsContext) {
    _location = analyticsContext.location;
  }
  const obj3 = { location: _location, emoji_type: tmp12, text_len: trimmed.length, clear_after: combined, prompt_type: value, location_stack: analyticsLocations };
  tmp12 = null;
  if (null != emojiInfo) {
    let str6 = "unicode";
    if (null != emojiInfo.id) {
      str6 = "custom";
    }
    tmp12 = str6;
  }
  combined = null;
  if (null != clearAfter) {
    const _HermesInternal = HermesInternal;
    combined = "" + clearAfter;
  }
  value = undefined;
  if (_prompt != null) {
    value = _prompt.value;
  }
  track(CUSTOM_STATUS_UPDATED, obj3);
  return updateSettingResult;
};
