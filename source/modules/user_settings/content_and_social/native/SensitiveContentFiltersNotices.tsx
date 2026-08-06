// Module ID: 13978
// Function ID: 13979
// Name: SensitiveContentFiltersTeenNotice
// Dependencies: [19, 7702, 21, 5838, 13908, 1236, 3981, 1974, 7720, 7722, 2]
// Exports: SensitiveContentFiltersAgeVerificationNotice, SensitiveContentFiltersTeenNotice

// Module 13978 (SensitiveContentFiltersTeenNotice)
import "noop";
import { SafetySettingsNoticeType } from "SafetyToastType";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("jsxProd").fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx");

export const SensitiveContentFiltersTeenNotice = function SensitiveContentFiltersTeenNotice() {
  let obj = _require(5838);
  _require = obj.useSensitiveContentFilterHelpArticle();
  obj = { label: null, labelHook: null, noticeType: null };
  obj[0] = _require(1236).t.EUo0yj;
  obj[1] = function labelHook() {
    const obj = outer1_1(outer1_2[6]);
    obj.openURL(outer1_1(outer1_2[7]).getArticleURL(closure_0));
  };
  obj[2] = SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE;
  return jsx(importDefault(13908), { label: null, labelHook: null, noticeType: null });
};
export const SensitiveContentFiltersAgeVerificationNotice = function SensitiveContentFiltersAgeVerificationNotice() {
  let obj = { label: null, labelHook: null, noticeType: null };
  obj[0] = require(1236) /* getSystemLocale */.t.OX4ybh;
  obj[1] = function labelHook() {
    let obj = callback2(7720);
    obj = { entryPoint: callback(7722).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  };
  obj[2] = SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE;
  return jsx(importDefault(13908), { label: null, labelHook: null, noticeType: null });
};
