// Module ID: 16439
// Function ID: 16440
// Name: openPremiumTryItOutModal
// Dependencies: [1389, 8712, 8720, 6731, 16440, 2000, 2]
// Exports: openPremiumTryItOutModal

// Module 16439 (openPremiumTryItOutModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import Constants from "Constants" /* 8712 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8720 */;
import UserStore from "UserStore" /* 1389 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2000);
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
  obj2.pushLazy(asyncRequire(16440, tmp2.paths), obj3, undefined, { presentation: "fullScreenModal", fullScreenGestureEnabled: true });
}
