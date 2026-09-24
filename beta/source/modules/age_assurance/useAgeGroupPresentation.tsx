// Module ID: 15015
// Function ID: 15016
// Name: useAgeGroupPresentation
// Dependencies: [1078, 558, 5002, 8719, 2112, 8721, 568, 1119, 2]
// Exports: handleOpenAgeGatedContentArticle, handleShowAgeVerification

// Module 15015 (useAgeGroupPresentation)
import c from "c" /* 568 */;
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2112 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5002 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8719 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8721 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const AgeGroupState = { ADULT: "adult", TEEN: "teen", UNVERIFIED: "unverified" };
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = AgeVerificationUtils;
  const isAgeVerified = obj.useIsAgeVerified();
  if (obj2.useIsVerifiedTeen()) {
    let TEEN = tmp2.TEEN;
  } else {
    TEEN = isAgeVerified ? tmp2.ADULT : tmp2.UNVERIFIED;
  }
  return TEEN;
}) : (() => {
  const obj = AgeVerificationUtils;
  const isAgeVerified = obj.useIsAgeVerified();
  if (obj2.useIsVerifiedTeen()) {
    let TEEN = tmp2.TEEN;
  } else {
    TEEN = isAgeVerified ? tmp2.ADULT : tmp2.UNVERIFIED;
  }
  return TEEN;
});
let closure_5 = tmp2;
let ReactCompilerGating = ReactCompilerGating_mod;
let result = size.fileFinishedImporting("modules/age_assurance/useAgeGroupPresentation.tsx");

export { AgeGroupState };
export const useAgeGroupState = tmp2;
export const handleOpenAgeGatedContentArticle = function handleOpenAgeGatedContentArticle() {
  const obj = AgeVerificationActionCreatorsDefault;
  obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
};
export const handleShowAgeVerification = function handleShowAgeVerification() {
  const obj = AgeVerificationActionCreatorsDefault;
  const result = obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP });
};
export const useAgeGroupValueLabel = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = c;
  const cResult = obj.c(3);
  const tmp4 = closure_5();
  if (obj.ADULT === tmp4) {
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1119).intl;
      const stringResult = intl3.string(tmp(1119).t.XxRj7f);
      cResult[0] = stringResult;
      let first = stringResult;
    } else {
      first = cResult[0];
    }
    return first;
  } else if (tmp5.TEEN === tmp4) {
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1119).intl;
      const stringResult1 = intl2.string(tmp(1119).t.sK0dmH);
      cResult[1] = stringResult1;
      let tmp10 = stringResult1;
    } else {
      tmp10 = cResult[1];
    }
    return tmp10;
  } else if (tmp5.UNVERIFIED === tmp4) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1119).intl;
      const stringResult2 = intl.string(tmp(1119).t.lKDPGA);
      cResult[2] = stringResult2;
      let tmp7 = stringResult2;
    } else {
      tmp7 = cResult[2];
    }
    return tmp7;
  }
}) : (() => {
  const tmp = closure_5();
  if (obj.ADULT === tmp) {
    const intl3 = util.intl;
    return intl3.string(util.t.XxRj7f);
  } else if (tmp2.TEEN === tmp) {
    const intl2 = util.intl;
    return intl2.string(util.t.sK0dmH);
  } else if (tmp2.UNVERIFIED === tmp) {
    const intl = util.intl;
    return intl.string(util.t.lKDPGA);
  }
});
