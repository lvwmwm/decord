// Module ID: 17842
// Function ID: 17843
// Name: AddAvatarModalActionCreators
// Dependencies: [17843, 1078, 1245, 7230, 5110, 1119, 8438, 8440, 4961, 17844, 1984, 12851, 2]
// Exports: handlePressNext, openAddAvatarModal, showSkipAvatarModal

// Module 17842 (AddAvatarModalActionCreators)
import Constants from "Constants" /* 1078 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5110 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7230 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8438 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8440 */;
import NUFActionCreators from "NUFActionCreators" /* 12851 */;
import AddAvatarModalConstants from "AddAvatarModalConstants" /* 17843 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const ADD_AVATAR_MODAL_KEY = AddAvatarModalConstants.ADD_AVATAR_MODAL_KEY;
const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/avatar/native/AddAvatarModalActionCreators.tsx");

export const handlePressNext = function handlePressNext(pendingImage, default_avatar_selected, fn) {
  if (null != pendingImage) {
    const obj4 = { default_avatar_selected, is_guild_profile: false, location: { page: "Onboarding" } };
    AnalyticsUtilsDefault.track(AnalyticEvents.USER_AVATAR_UPDATED, obj4);
    ({ imageUri: obj6.avatar, description: obj6.avatar_description } = pendingImage);
    const result = UserSettingsAccountActionCreators.saveProfileAndAccountRequest({ avatar: null, avatar_description: null });
    const obj8 = { avatar: null, avatar_description: null };
  }
  if (null != fn) {
    fn();
  } else {
    ModalActionCreatorsDefault.popWithKey(ADD_AVATAR_MODAL_KEY);
    NUFActionCreators.nextOnboardingStep({ skip: false });
  }
};
export const showSkipAvatarModal = function showSkipAvatarModal(arg0) {
  _require = arg0;
  AnalyticsUtilsDefault.track(AnalyticEvents.NUO_TRANSITION, { flow_type: "Mobile NUX Post Reg", from_step: "Skip avatar modal", skip_attempt: true });
  let obj3 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, hideActionSheet: false };
  const intl = require("util").intl;
  obj3.title = intl.string(require("util").t.DnKHuV);
  const intl2 = require("util").intl;
  obj3.body = intl2.string(require("util").t["1EPySE"]);
  const intl3 = require("util").intl;
  obj3.cancelText = intl3.string(require("util").t["7eZ3ji"]);
  const intl4 = require("util").intl;
  obj3.confirmText = intl4.string(require("util").t.nhJ8OC);
  obj3.onConfirm = function onConfirm() {
    UserProfileSettingsActionCreators.setPendingChanges({ avatar: null });
    const result = ProfileCustomizationUtils.announcePendingAvatarChange("remove");
    if (null != closure_0) {
      tmp5(true);
    } else {
      ModalActionCreatorsDefault.popWithKey(ADD_AVATAR_MODAL_KEY);
      NUFActionCreators.nextOnboardingStep({ skip: true });
      const tmpResult = NUFActionCreators;
    }
  };
  AlertActionCreatorsDefault.show(obj3);
};
export const openAddAvatarModal = function openAddAvatarModal() {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17844, dependencyMap.paths), {}, ADD_AVATAR_MODAL_KEY);
};
