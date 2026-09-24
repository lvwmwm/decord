// Module ID: 15100
// Function ID: 15101
// Name: SensitiveContentFiltersNotices
// Dependencies: [19, 8707, 21, 558, 568, 15092, 7577, 4487, 2112, 14986, 1119, 8719, 8721, 2]

// Module 15100 (SensitiveContentFiltersNotices)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2112 */;
import LinkingDefault from "Linking" /* 4487 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8719 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14986 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const SafetySettingsNoticeType = fn(8707).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
fn(558);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let ContentFiltersTeenNotice = sensitiveContentFilterHelpArticle;
  let tmp = dependencyMap;
  const cResult = sensitiveContentFilterHelpArticle(568).c(5);
  let obj = sensitiveContentFilterHelpArticle(568);
  const isTinyBroncoSettingsNoticeEnabled = sensitiveContentFilterHelpArticle(15092).useIsTinyBroncoSettingsNoticeEnabled();
  const obj2 = sensitiveContentFilterHelpArticle(15092);
  sensitiveContentFilterHelpArticle = sensitiveContentFilterHelpArticle(7577).useSensitiveContentFilterHelpArticle();
  if (cResult[0] !== sensitiveContentFilterHelpArticle) {
    const fn = function o() {
      const obj = LinkingDefault;
      obj.openURL(HelpdeskUtilsDefault.getArticleURL(sensitiveContentFilterHelpArticle));
    };
    cResult[0] = sensitiveContentFilterHelpArticle;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (isTinyBroncoSettingsNoticeEnabled) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      ContentFiltersTeenNotice = ContentFiltersTeenNotice(15092).ContentFiltersTeenNotice;
      tmp = <ContentFiltersTeenNotice />;
      cResult[2] = tmp;
    }
  } else {
    if (cResult[3] !== tmp5) {
      const obj4 = { label: ContentFiltersTeenNotice(1119).t.EUo0yj, labelHook: tmp5, noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE };
      const tmp11 = jsx(SafetySettingsNoticeDefault, { label: ContentFiltersTeenNotice(1119).t.EUo0yj, labelHook: tmp5, noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE });
      cResult[3] = tmp5;
      cResult[4] = tmp11;
      let tmp6 = tmp11;
    } else {
      tmp6 = cResult[4];
    }
    return tmp6;
  }
}) : (() => {
  const isTinyBroncoSettingsNoticeEnabled = require("TinyBroncoSettingsNoticesLazy").useIsTinyBroncoSettingsNoticeEnabled();
  let obj = require("TinyBroncoSettingsNoticesLazy");
  _require = require("SensitiveMediaGoreRedactionSettingsUtils").useSensitiveContentFilterHelpArticle();
  if (isTinyBroncoSettingsNoticeEnabled) {
    let tmp4Result = tmp4(tmp(15092).ContentFiltersTeenNotice, {});
  } else {
    const obj3 = {
      label: tmp(1119).t.EUo0yj,
      labelHook() {
          const obj = LinkingDefault;
          obj.openURL(HelpdeskUtilsDefault.getArticleURL(closure_0));
        },
      noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
    };
    tmp4Result = tmp4(SafetySettingsNoticeDefault, obj3);
  }
  return tmp4Result;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx");

export const SensitiveContentFiltersTeenNotice = tmp3;
export const SensitiveContentFiltersAgeVerificationNotice = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {
      label: util.t.OX4ybh,
      labelHook() {
          const obj = AgeVerificationActionCreatorsDefault;
          const result = obj.showAgeVerificationGetStartedModal({ entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE });
        },
      noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
    };
    const tmp9 = jsx(SafetySettingsNoticeDefault, {
      label: util.t.OX4ybh,
      labelHook() {
          const obj = AgeVerificationActionCreatorsDefault;
          const result = obj.showAgeVerificationGetStartedModal({ entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE });
        },
      noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
    });
    cResult[0] = tmp9;
    let first = tmp9;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  let obj = {
    label: util.t.OX4ybh,
    labelHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      const result = obj.showAgeVerificationGetStartedModal({ entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE });
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: util.t.OX4ybh,
    labelHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      const result = obj.showAgeVerificationGetStartedModal({ entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE });
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  });
});
