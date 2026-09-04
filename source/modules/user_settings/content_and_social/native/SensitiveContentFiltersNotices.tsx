// Module ID: 14742
// Function ID: 14743
// Name: SensitiveContentFiltersTeenNotice
// Dependencies: [19, 8329, 21, 7239, 14612, 1233, 4190, 1994, 8341, 8343, 2]
// Exports: SensitiveContentFiltersAgeVerificationNotice, SensitiveContentFiltersTeenNotice

// Module 14742 (SensitiveContentFiltersTeenNotice)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14612 */;
import { SafetySettingsNoticeType } from "SafetyToastType" /* 8329 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx");

export const SensitiveContentFiltersTeenNotice = function SensitiveContentFiltersTeenNotice() {
  let obj = _require(7239);
  _require = obj.useSensitiveContentFilterHelpArticle();
  obj = {
    label: _require(1233).t.EUo0yj,
    labelHook() {
      const obj = closure_1_1(closure_1_2[6]);
      obj.openURL(closure_1_1(closure_1_2[7]).getArticleURL(closure_0));
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: _require(1233).t.EUo0yj,
    labelHook() {
      const obj = closure_1_1(closure_1_2[6]);
      obj.openURL(closure_1_1(closure_1_2[7]).getArticleURL(closure_0));
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
  });
};
export const SensitiveContentFiltersAgeVerificationNotice = function SensitiveContentFiltersAgeVerificationNotice() {
  let obj = {
    label: getSystemLocale.t.OX4ybh,
    labelHook() {
      let obj = callback2(8341);
      obj = { entryPoint: callback(8343).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: getSystemLocale.t.OX4ybh,
    labelHook() {
      let obj = callback2(8341);
      obj = { entryPoint: callback(8343).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  });
};
