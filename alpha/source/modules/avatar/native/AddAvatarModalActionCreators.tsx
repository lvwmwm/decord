// Module ID: 19538
// Function ID: 19539
// Name: AddAvatarModalActionCreators
// Dependencies: [19539, 1072, 1252, 7152, 5958, 1113, 8735, 8737, 6744, 19540, 1994, 14261, 2]
// Exports: handlePressNext, openAddAvatarModal, showSkipAvatarModal

// Module 19538 (AddAvatarModalActionCreators)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5958 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7152 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8735 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8737 */;
import NUFActionCreators from "NUFActionCreators" /* 14261 */;
import AddAvatarModalConstants from "AddAvatarModalConstants" /* 19539 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ADD_AVATAR_MODAL_KEY = AddAvatarModalConstants.ADD_AVATAR_MODAL_KEY;
const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/avatar/native/AddAvatarModalActionCreators.tsx");

export function handlePressNext(pendingImage, default_avatar_selected, fn) {
  if (null != pendingImage) {
    const obj4 = { default_avatar_selected, is_guild_profile: false, location: { page: "Onboarding" } };
    const obj3 = AnalyticsUtilsDefault;
    obj3.track(AnalyticEvents.USER_AVATAR_UPDATED, obj4);
    const obj8 = { avatar: null, avatar_description: null };
    ({ imageUri: obj6.avatar, description: obj6.avatar_description } = pendingImage);
    const obj5 = UserSettingsAccountActionCreators;
    const result = obj5.saveProfileAndAccountRequest(obj8);
  }
  if (null != fn) {
    fn();
  } else {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(ADD_AVATAR_MODAL_KEY);
    const obj2 = NUFActionCreators;
    obj2.nextOnboardingStep({ skip: false });
  }
}
export function showSkipAvatarModal(arg0) {
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  _require = arg0;
  let obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.NUO_TRANSITION, { flow_type: "Mobile NUX Post Reg", from_step: "Skip avatar modal", skip_attempt: true });
  const tmp2 = AlertActionCreatorsDefault;
  let obj2 = {
    title: intl.string(require("intl").t.DnKHuV),
    body: intl2.string(require("intl").t["1EPySE"]),
    cancelText: intl3.string(require("intl").t["7eZ3ji"]),
    confirmText: intl4.string(require("intl").t.nhJ8OC),
    onConfirm() {
      const obj = UserProfileSettingsActionCreators;
      obj.setPendingChanges({ avatar: null });
      const obj2 = ProfileCustomizationUtils;
      const result = obj2.announcePendingAvatarChange("remove");
      if (null != closure_0) {
        tmp5(true);
      } else {
        const obj3 = ModalActionCreatorsDefault;
        obj3.popWithKey(ADD_AVATAR_MODAL_KEY);
        const tmpResult = NUFActionCreators;
        tmpResult.nextOnboardingStep({ skip: true });
      }
    },
    hideActionSheet: false
  };
  const show = tmp2.show;
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  intl3 = require("intl").intl;
  intl4 = require("intl").intl;
  show(obj2);
}
export function openAddAvatarModal() {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(19540, dependencyMap.paths), {}, ADD_AVATAR_MODAL_KEY);
}
