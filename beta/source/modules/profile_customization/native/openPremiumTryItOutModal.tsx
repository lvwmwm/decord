// Module ID: 15953
// Function ID: 15954
// Name: openPremiumTryItOutModal
// Dependencies: [1386, 8069, 8136, 6429, 15954, 2119, 2]
// Exports: openPremiumTryItOutModal

// Module 15953 (openPremiumTryItOutModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import Constants from "Constants" /* 8069 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8136 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2119);
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
  obj2.pushLazy(asyncRequire(15954, tmp2.paths), obj3, undefined, { presentation: "fullScreenModal", fullScreenGestureEnabled: true });
}
