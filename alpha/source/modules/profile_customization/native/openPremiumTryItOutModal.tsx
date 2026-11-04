// Module ID: 16795
// Function ID: 16796
// Name: openPremiumTryItOutModal
// Dependencies: [1385, 8895, 8903, 6879, 16796, 2123, 2]
// Exports: openPremiumTryItOutModal

// Module 16795 (openPremiumTryItOutModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import Constants from "Constants" /* 8895 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8903 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2123);
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
  obj2.pushLazy(asyncRequire(16796, tmp2.paths), obj3, undefined, { presentation: "fullScreenModal", fullScreenGestureEnabled: true });
}
