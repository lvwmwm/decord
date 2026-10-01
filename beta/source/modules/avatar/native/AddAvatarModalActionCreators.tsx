// Module ID: 17202
// Function ID: 17203
// Name: AddAvatarModalActionCreators
// Dependencies: [17203, 1074, 1241, 6405, 5203, 1115, 7609, 7611, 5039, 17204, 1981, 12201, 2]
// Exports: handlePressNext, openAddAvatarModal, showSkipAvatarModal

// Module 17202 (AddAvatarModalActionCreators)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 6405 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 7609 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 7611 */;
import NUFActionCreators from "NUFActionCreators" /* 12201 */;
import AddAvatarModalConstants from "AddAvatarModalConstants" /* 17203 */;
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
  obj.pushLazy(asyncRequire(17204, dependencyMap.paths), {}, ADD_AVATAR_MODAL_KEY);
};
