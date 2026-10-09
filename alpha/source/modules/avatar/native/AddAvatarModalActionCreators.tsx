// Module ID: 18050
// Function ID: 18051
// Name: AddAvatarModalActionCreators
// Dependencies: [18051, 1085, 1265, 6669, 5298, 1126, 8272, 8274, 5941, 18052, 2000, 12383, 2]
// Exports: handlePressNext, openAddAvatarModal, showSkipAvatarModal

// Module 18050 (AddAvatarModalActionCreators)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5298 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 6669 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8272 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8274 */;
import NUFActionCreators from "NUFActionCreators" /* 12383 */;
import AddAvatarModalConstants from "AddAvatarModalConstants" /* 18051 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ADD_AVATAR_MODAL_KEY = AddAvatarModalConstants.ADD_AVATAR_MODAL_KEY;
const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/avatar/native/AddAvatarModalActionCreators.tsx");

export const handlePressNext = function handlePressNext(pendingImage, default_avatar_selected, fn) {
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
};
export const showSkipAvatarModal = function showSkipAvatarModal(arg0) {
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
};
export const openAddAvatarModal = function openAddAvatarModal() {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(18052, dependencyMap.paths), {}, ADD_AVATAR_MODAL_KEY);
};
