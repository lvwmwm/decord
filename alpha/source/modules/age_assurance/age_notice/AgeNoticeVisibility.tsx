// Module ID: 16760
// Function ID: 16761
// Name: AgeNoticeVisibility
// Dependencies: [1385, 2121, 5813, 6851, 504, 2]
// Exports: shouldShowAgeNotice, useShouldShowAgeNotice, useShouldShowAgeNoticePromo

// Module 16760 (AgeNoticeVisibility)
import get_initialized from "get initialized" /* 504 */;
import Server from "Server" /* 2121 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5813 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6851 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/AgeNoticeVisibility.tsx");

export function shouldShowAgeNotice() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.NOTICE);
  if (isFeatureAgeGatedResult) {
    const currentUser = UserStore.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    isFeatureAgeGatedResult = null != prop && prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT && prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
    null != prop && prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT && prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
  }
  return isFeatureAgeGatedResult;
}
export function useShouldShowAgeNotice() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGated = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.NOTICE);
  const items = [UserStore];
  const obj2 = get_initialized;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let prop;
      if (currentUser != null) {
        prop = currentUser.ageVerificationStatus;
      }
      const tmp3 = null != prop && prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT && prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
      return tmp3;
    });
  }
  return isFeatureAgeGated;
}
export function useShouldShowAgeNoticePromo() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGated = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.NOTICE);
  const items = [UserStore];
  const obj2 = get_initialized;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let prop;
      if (currentUser != null) {
        prop = currentUser.ageVerificationStatus;
      }
      const tmp3 = null != prop && prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT && prop !== Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN && prop !== Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
      return tmp3;
    });
  }
  return isFeatureAgeGated;
}
