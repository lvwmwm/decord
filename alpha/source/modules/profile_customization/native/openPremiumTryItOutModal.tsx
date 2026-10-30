// Module ID: 16495
// Function ID: 16496
// Name: openPremiumTryItOutModal
// Dependencies: [1384, 8746, 8754, 6738, 16496, 1995, 2]
// Exports: openPremiumTryItOutModal

// Module 16495 (openPremiumTryItOutModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import Constants from "Constants" /* 8746 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8754 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(1995);
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
  obj2.pushLazy(asyncRequire(16496, tmp2.paths), obj3, undefined, { presentation: "fullScreenModal", fullScreenGestureEnabled: true });
}
