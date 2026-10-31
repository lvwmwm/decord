// Module ID: 16537
// Function ID: 16538
// Name: openPremiumTryItOutModal
// Dependencies: [1383, 8754, 8762, 6744, 16538, 1994, 2]
// Exports: openPremiumTryItOutModal

// Module 16537 (openPremiumTryItOutModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import Constants from "Constants" /* 8754 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8762 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(1994);
const constants = Constants.TrackUserProfileEditActions;
let result = size.fileFinishedImporting("modules/profile_customization/native/openPremiumTryItOutModal.tsx");

export function openPremiumTryItOutModal(avatar) {
  const trackUserProfileEditAction = UserProfileAnalyticsUtils.trackUserProfileEditAction;
  UserProfileAnalyticsUtils;
  const currentUser = UserStore.getCurrentUser();
  let id;
  const tmp2 = dependencyMap;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const obj = { userId: id, action: constants.ENTER_TRY_OUT_PREMIUM_PREVIEW };
  const result = trackUserProfileEditAction(obj);
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { initialTarget: avatar };
  obj2.pushLazy(asyncRequire(16538, tmp2.paths), obj3, undefined, { presentation: "fullScreenModal", fullScreenGestureEnabled: true });
}
