// Module ID: 15820
// Function ID: 15821
// Name: openPremiumTryItOutModal
// Dependencies: [1392, 8636, 8644, 6651, 15821, 2002, 2]
// Exports: openPremiumTryItOutModal

// Module 15820 (openPremiumTryItOutModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import Constants from "Constants" /* 8636 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8644 */;
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
  obj2.pushLazy(asyncRequire(15821, tmp2.paths), obj3, undefined, { presentation: "fullScreenModal", fullScreenGestureEnabled: true });
};
