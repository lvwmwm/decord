// Module ID: 14072
// Function ID: 14073
// Name: SensitiveContentFiltersTeenNotice
// Dependencies: [19, 7781, 21, 5917, 14002, 1236, 4017, 1993, 7799, 7801, 2]
// Exports: SensitiveContentFiltersAgeVerificationNotice, SensitiveContentFiltersTeenNotice

// Module 14072 (SensitiveContentFiltersTeenNotice)
import "noop";
import { SafetySettingsNoticeType } from "SafetyToastType";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("jsxProd").fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx");

export const SensitiveContentFiltersTeenNotice = function SensitiveContentFiltersTeenNotice() {
  let obj = _require(5917);
  _require = obj.useSensitiveContentFilterHelpArticle();
  obj = { label: null, labelHook: null, noticeType: null };
  obj[0] = _require(1236).t.EUo0yj;
  obj[1] = function labelHook() {
    const obj = outer1_1(outer1_2[6]);
    obj.openURL(outer1_1(outer1_2[7]).getArticleURL(closure_0));
  };
  obj[2] = SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE;
  return jsx(importDefault(14002), { label: null, labelHook: null, noticeType: null });
};
export const SensitiveContentFiltersAgeVerificationNotice = function SensitiveContentFiltersAgeVerificationNotice() {
  let obj = { label: null, labelHook: null, noticeType: null };
  obj[0] = require(1236) /* getSystemLocale */.t.OX4ybh;
  obj[1] = function labelHook() {
    let obj = callback2(7799);
    obj = { entryPoint: callback(7801).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  };
  obj[2] = SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE;
  return jsx(importDefault(14002), { label: null, labelHook: null, noticeType: null });
};
