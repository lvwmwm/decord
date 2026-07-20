// Module ID: 13590
// Function ID: 103008
// Name: SensitiveContentFiltersTeenNotice
// Dependencies: []
// Exports: SensitiveContentFiltersAgeVerificationNotice, SensitiveContentFiltersTeenNotice

// Module 13590 (SensitiveContentFiltersTeenNotice)
importAll(dependencyMap[0]);
const SafetySettingsNoticeType = arg1(dependencyMap[1]).SafetySettingsNoticeType;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx");

export const SensitiveContentFiltersTeenNotice = function SensitiveContentFiltersTeenNotice() {
  let obj = callback(dependencyMap[3]);
  const callback = obj.useSensitiveContentFilterHelpArticle();
  obj = {
    label: callback(dependencyMap[5]).t.EUo0yj,
    labelHook() {
      const obj = callback(closure_2[6]);
      obj.openURL(callback(closure_2[7]).getArticleURL(closure_0));
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
  };
  return jsx(importDefault(dependencyMap[4]), obj);
};
export const SensitiveContentFiltersAgeVerificationNotice = function SensitiveContentFiltersAgeVerificationNotice() {
  const obj = {
    label: arg1(dependencyMap[5]).t.OX4ybh,
    labelHook() {
      let obj = callback2(closure_2[8]);
      obj = { entryPoint: callback(closure_2[9]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  };
  return jsx(importDefault(dependencyMap[4]), obj);
};
