// Module ID: 16202
// Function ID: 16203
// Name: openPremiumTryItOutModal
// Dependencies: [1389, 8709, 8717, 6707, 16203, 1999, 2]
// Exports: openPremiumTryItOutModal

// Module 16202 (openPremiumTryItOutModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import Constants from "Constants" /* 8709 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8717 */;
import UserStore from "UserStore" /* 1389 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(1999);
const constants = Constants.TrackUserProfileEditActions;
let result = size.fileFinishedImporting("modules/profile_customization/native/openPremiumTryItOutModal.tsx");

export const openPremiumTryItOutModal = function openPremiumTryItOutModal(avatar) {
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
  obj2.pushLazy(asyncRequire(16203, tmp2.paths), obj3, undefined, { presentation: "fullScreenModal", fullScreenGestureEnabled: true });
};
