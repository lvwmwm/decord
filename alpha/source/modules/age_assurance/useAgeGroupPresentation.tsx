// Module ID: 12156
// Function ID: 12157
// Name: useAgeGroupPresentation
// Dependencies: [1071, 6825, 7870, 2188, 6828, 1112, 2]
// Exports: handleOpenAgeGatedContentArticle, handleShowAgeVerification, useAgeGroupState, useAgeGroupValueLabel

// Module 12156 (useAgeGroupPresentation)
import Constants from "Constants" /* 1071 */;
import intl4 from "intl" /* 1112 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2188 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6825 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6828 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7870 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const AgeGroupState = { ADULT: "adult", TEEN: "teen", UNVERIFIED: "unverified" };
let result = size.fileFinishedImporting("modules/age_assurance/useAgeGroupPresentation.tsx");

export { AgeGroupState };
export function useAgeGroupState() {
  let TEEN;
  const obj = AgeVerificationUtils;
  const isAgeVerified = obj.useIsAgeVerified();
  const obj2 = AgeVerificationUtils;
  if (obj2.useIsVerifiedTeen()) {
    TEEN = tmp2.TEEN;
  } else {
    TEEN = isAgeVerified ? tmp2.ADULT : tmp2.UNVERIFIED;
  }
  return TEEN;
}
export function handleOpenAgeGatedContentArticle() {
  const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
  AgeVerificationActionCreatorsDefault;
  const obj = HelpdeskUtilsDefault;
  openUrl(obj.getArticleURL(HelpdeskArticles.AGE_VERIFICATION_LEARN_MORE));
}
export function handleShowAgeVerification() {
  const obj = AgeVerificationActionCreatorsDefault;
  const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
  const result = obj.showAgeVerificationGetStartedModal(obj2);
}
export function useAgeGroupValueLabel() {
  let UNVERIFIED;
  let tmp5;
  const obj = AgeVerificationUtils;
  const isAgeVerified = obj.useIsAgeVerified();
  const obj2 = AgeVerificationUtils;
  if (obj2.useIsVerifiedTeen()) {
    UNVERIFIED = tmp4.TEEN;
    tmp5 = tmp4;
  } else if (isAgeVerified) {
    UNVERIFIED = tmp4.ADULT;
    tmp5 = tmp4;
  } else {
    UNVERIFIED = tmp4.UNVERIFIED;
    tmp5 = tmp4;
  }
  if (tmp5.ADULT === UNVERIFIED) {
    const intl3 = tmp(1112).intl;
    return intl3.string(intl4.t.XxRj7f);
  } else if (tmp5.TEEN === UNVERIFIED) {
    const intl2 = tmp(1112).intl;
    return intl2.string(intl4.t.sK0dmH);
  } else if (tmp5.UNVERIFIED === UNVERIFIED) {
    const intl = tmp(1112).intl;
    return intl.string(intl4.t.lKDPGA);
  }
}
