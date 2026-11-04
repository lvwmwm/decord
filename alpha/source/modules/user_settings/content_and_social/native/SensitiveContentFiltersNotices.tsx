// Module ID: 16974
// Function ID: 16975
// Name: SensitiveContentFiltersNotices
// Dependencies: [19, 7630, 21, 16966, 7612, 16833, 1113, 5843, 2190, 8095, 6864, 2]
// Exports: SensitiveContentFiltersAgeVerificationNotice, SensitiveContentFiltersTeenNotice

// Module 16974 (SensitiveContentFiltersNotices)
import Fragment from "Fragment" /* 21 */;
import intl from "intl" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2190 */;
import LinkingDefault from "Linking" /* 5843 */;
import Constants from "Constants" /* 7630 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8095 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 16833 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx");

export function SensitiveContentFiltersTeenNotice() {
  let closure_0;
  let tmp4Result;
  const tmp = _require;
  let obj = require("AgeNoticeSettingsNoticesLazy");
  const isTinyBroncoSettingsNoticeEnabled = obj.useIsTinyBroncoSettingsNoticeEnabled();
  const obj2 = require("SensitiveMediaGoreRedactionSettingsUtils");
  _require = obj2.useSensitiveContentFilterHelpArticle();
  if (isTinyBroncoSettingsNoticeEnabled) {
    tmp4Result = tmp4(tmp(16966).ContentFiltersTeenNotice, {});
  } else {
    const obj3 = {
      label: tmp(1113).t.EUo0yj,
      labelHook: function handleOpenHelpCenterArticle() {
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj = HelpdeskUtilsDefault;
          openURL(obj.getArticleURL(closure_0));
        },
      noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
    };
    const tmp6 = SafetySettingsNoticeDefault;
    tmp4Result = tmp4(tmp6, obj3);
  }
  return tmp4Result;
}
export function SensitiveContentFiltersAgeVerificationNotice() {
  SafetySettingsNoticeDefault;
  return <tmp label={intl.t.OX4ybh} labelHook={function handleOpenAgeVerificationModal() {
    const obj = AgeVerificationActionCreatorsDefault;
    const obj2 = { entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
  }} noticeType={SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE} />;
}
