// Module ID: 15692
// Function ID: 15693
// Name: openPremiumTryItOutModal
// Dependencies: [1392, 8581, 8589, 6190, 15693, 2002, 2]
// Exports: openPremiumTryItOutModal

// Module 15692 (openPremiumTryItOutModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import Constants from "Constants" /* 8581 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8589 */;
import UserStore from "UserStore" /* 1392 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2002);
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
  obj2.pushLazy(asyncRequire(15693, tmp2.paths), obj3, undefined, { presentation: "fullScreenModal", fullScreenGestureEnabled: true });
};
