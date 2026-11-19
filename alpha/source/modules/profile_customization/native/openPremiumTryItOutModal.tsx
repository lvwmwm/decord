// Module ID: 15854
// Function ID: 15855
// Name: openPremiumTryItOutModal
// Dependencies: [1388, 7950, 8017, 6308, 15855, 2121, 2]
// Exports: openPremiumTryItOutModal

// Module 15854 (openPremiumTryItOutModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import Constants from "Constants" /* 7950 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8017 */;
import UserStore from "UserStore" /* 1388 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2121);
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
  obj2.pushLazy(asyncRequire(15855, tmp2.paths), obj3, undefined, { presentation: "fullScreenModal", fullScreenGestureEnabled: true });
}
