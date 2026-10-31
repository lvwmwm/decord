// Module ID: 16604
// Function ID: 16605
// Name: TinyBroncoNoticeVisibility
// Dependencies: [1383, 1992, 5693, 6731, 504, 2]
// Exports: shouldShowAgeNotice, useShouldShowAgeNotice, useShouldShowAgeNoticePromo

// Module 16604 (TinyBroncoNoticeVisibility)
import get_initialized from "get initialized" /* 504 */;
import Server from "Server" /* 1992 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5693 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6731 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tiny_bronco/TinyBroncoNoticeVisibility.tsx");

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
