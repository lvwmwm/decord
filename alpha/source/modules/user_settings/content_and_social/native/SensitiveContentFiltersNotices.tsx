// Module ID: 15898
// Function ID: 15899
// Name: SensitiveContentFiltersNotices
// Dependencies: [19, 7362, 21, 558, 576, 15890, 7344, 5622, 2068, 15759, 1128, 7827, 6605, 2]

// Module 15898 (SensitiveContentFiltersNotices)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2068 */;
import LinkingDefault from "Linking" /* 5622 */;
import Constants from "Constants" /* 7362 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7827 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 15759 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp;
const intl = tmp(1128);
const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function SensitiveContentFiltersTeenNotice() {
  let sensitiveContentFilterHelpArticle;
  let tmp6;
  let tmp7;
  const tmp = sensitiveContentFilterHelpArticle;
  let obj = sensitiveContentFilterHelpArticle(576);
  const cResult = obj.c(5);
  const obj2 = sensitiveContentFilterHelpArticle(15890);
  const isTinyBroncoSettingsNoticeEnabled = obj2.useIsTinyBroncoSettingsNoticeEnabled();
  const obj3 = sensitiveContentFilterHelpArticle(7344);
  sensitiveContentFilterHelpArticle = obj3.useSensitiveContentFilterHelpArticle();
  if (cResult[0] !== sensitiveContentFilterHelpArticle) {
    function handleOpenHelpCenterArticle() {
      const openURL = LinkingDefault.openURL;
      LinkingDefault;
      const obj = HelpdeskUtilsDefault;
      openURL(obj.getArticleURL(sensitiveContentFilterHelpArticle));
    }
    cResult[0] = sensitiveContentFilterHelpArticle;
    cResult[1] = handleOpenHelpCenterArticle;
    tmp6 = handleOpenHelpCenterArticle;
  } else {
    tmp6 = cResult[1];
  }
  if (isTinyBroncoSettingsNoticeEnabled) {
    let tmp14;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp16 = jsx(tmp(15890).ContentFiltersTeenNotice, {});
      cResult[2] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[2];
    }
    tmp7 = tmp14;
  } else if (cResult[3] !== tmp6) {
    SafetySettingsNoticeDefault;
    const tmp12 = <tmp10 label={tmp(1128).t.EUo0yj} labelHook={tmp6} noticeType={SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE} />;
    cResult[3] = tmp6;
    cResult[4] = tmp12;
    tmp7 = tmp12;
  } else {
    tmp7 = cResult[4];
  }
  return tmp7;
}) : (function SensitiveContentFiltersTeenNotice() {
  let closure_0;
  let tmp4Result;
  const tmp = _require;
  let obj = require("TinyBroncoSettingsNoticesLazy");
  const isTinyBroncoSettingsNoticeEnabled = obj.useIsTinyBroncoSettingsNoticeEnabled();
  const obj2 = require("SensitiveMediaGoreRedactionSettingsUtils");
  _require = obj2.useSensitiveContentFilterHelpArticle();
  if (isTinyBroncoSettingsNoticeEnabled) {
    tmp4Result = tmp4(tmp(15890).ContentFiltersTeenNotice, {});
  } else {
    const obj3 = {
      label: tmp(1128).t.EUo0yj,
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
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function SensitiveContentFiltersAgeVerificationNotice() {
  let first;
  let obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    SafetySettingsNoticeDefault;
    const tmp9 = <tmp7 label={intl.t.OX4ybh} labelHook={function handleOpenAgeVerificationModal() {
      const obj = AgeVerificationActionCreatorsDefault;
      const obj2 = { entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
      const result = obj.showAgeVerificationGetStartedModal(obj2);
    }} noticeType={SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE} />;
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function SensitiveContentFiltersAgeVerificationNotice() {
  SafetySettingsNoticeDefault;
  return <tmp label={intl.t.OX4ybh} labelHook={function handleOpenAgeVerificationModal() {
    const obj = AgeVerificationActionCreatorsDefault;
    const obj2 = { entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
  }} noticeType={SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE} />;
});
let result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx");

export const SensitiveContentFiltersTeenNotice = tmp3;
export const SensitiveContentFiltersAgeVerificationNotice = tmp4;
