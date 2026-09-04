// Module ID: 14641
// Function ID: 14642
// Name: AgeGroupState
// Dependencies: [673, 4741, 8341, 1994, 8343, 1233, 2]
// Exports: handleOpenAgeGatedContentArticle, handleShowAgeVerification, useAgeGroupState, useAgeGroupValueLabel

// Module 14641 (AgeGroupState)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import combinedDefault from "combined" /* 1994 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4741 */;
import openIncodeAgeVerificationModalDefault from "openIncodeAgeVerificationModal" /* 8341 */;
import AgeVerificationModalEntryPoint from "AgeVerificationModalEntryPoint" /* 8343 */;

const HelpdeskArticles = ME.HelpdeskArticles;
let obj = { ADULT: "adult", TEEN: "teen", UNVERIFIED: "unverified" };
let result = set.fileFinishedImporting("modules/age_assurance/useAgeGroupPresentation.tsx");

export const AgeGroupState = obj;
export const useAgeGroupState = function useAgeGroupState() {
  obj = useAgeVerificationRunner;
  const isAgeVerified = obj.useIsAgeVerified();
  if (obj2.useIsVerifiedTeen()) {
    let TEEN = tmp2.TEEN;
  } else {
    TEEN = isAgeVerified ? tmp2.ADULT : tmp2.UNVERIFIED;
  }
  return TEEN;
};
export const handleOpenAgeGatedContentArticle = function handleOpenAgeGatedContentArticle() {
  obj = openIncodeAgeVerificationModalDefault;
  obj.openUrl(combinedDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
};
export const handleShowAgeVerification = function handleShowAgeVerification() {
  obj = openIncodeAgeVerificationModalDefault;
  obj = { entryPoint: AgeVerificationModalEntryPoint.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
  const result = obj.showAgeVerificationGetStartedModal(obj);
};
export const useAgeGroupValueLabel = function useAgeGroupValueLabel() {
  obj = useAgeVerificationRunner;
  const isAgeVerified = obj.useIsAgeVerified();
  if (obj2.useIsVerifiedTeen()) {
    let UNVERIFIED = tmp4.TEEN;
    let tmp5 = tmp4;
  } else if (isAgeVerified) {
    UNVERIFIED = tmp4.ADULT;
    tmp5 = tmp4;
  } else {
    UNVERIFIED = tmp4.UNVERIFIED;
    tmp5 = tmp4;
  }
  if (tmp5.ADULT === UNVERIFIED) {
    const intl3 = tmp(1233).intl;
    return intl3.string(tmp(1233).t.XxRj7f);
  } else if (tmp5.TEEN === UNVERIFIED) {
    const intl2 = tmp(1233).intl;
    return intl2.string(tmp(1233).t.sK0dmH);
  } else if (tmp5.UNVERIFIED === UNVERIFIED) {
    const intl = tmp(1233).intl;
    return intl.string(tmp(1233).t.lKDPGA);
  }
  obj2 = useAgeVerificationRunner;
};
