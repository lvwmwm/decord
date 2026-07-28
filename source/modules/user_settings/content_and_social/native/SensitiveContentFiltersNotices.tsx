// Module ID: 13827
// Function ID: 105871
// Name: SensitiveContentFiltersTeenNotice
// Dependencies: [31, 6695, 33, 5865, 13757, 1212, 3862, 1921, 6726, 6728, 2]
// Exports: SensitiveContentFiltersAgeVerificationNotice, SensitiveContentFiltersTeenNotice

// Module 13827 (SensitiveContentFiltersTeenNotice)
import "result";
import { SafetySettingsNoticeType } from "SafetyToastType";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("jsxProd").fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx");

export const SensitiveContentFiltersTeenNotice = function SensitiveContentFiltersTeenNotice() {
  let obj = _require(5865);
  _require = obj.useSensitiveContentFilterHelpArticle();
  obj = {
    label: _require(1212).t.EUo0yj,
    labelHook() {
      const obj = outer1_1(outer1_2[6]);
      obj.openURL(outer1_1(outer1_2[7]).getArticleURL(closure_0));
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
  };
  return jsx(importDefault(13757), {
    label: _require(1212).t.EUo0yj,
    labelHook() {
      const obj = outer1_1(outer1_2[6]);
      obj.openURL(outer1_1(outer1_2[7]).getArticleURL(closure_0));
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
  });
};
export const SensitiveContentFiltersAgeVerificationNotice = function SensitiveContentFiltersAgeVerificationNotice() {
  let obj = {
    label: require(1212) /* getSystemLocale */.t.OX4ybh,
    labelHook() {
      let obj = outer1_1(outer1_2[8]);
      obj = { entryPoint: outer1_0(outer1_2[9]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  };
  return jsx(importDefault(13757), {
    label: require(1212) /* getSystemLocale */.t.OX4ybh,
    labelHook() {
      let obj = outer1_1(outer1_2[8]);
      obj = { entryPoint: outer1_0(outer1_2[9]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  });
};
