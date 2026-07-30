// Module ID: 16252
// Function ID: 16253
// Name: handlePressNext
// Dependencies: [16253, 676, 698, 9222, 4528, 1236, 7938, 7940, 4395, 16254, 1959, 11791, 2]
// Exports: handlePressNext, openAddAvatarModal, showSkipAvatarModal

// Module 16252 (handlePressNext)
import { ADD_AVATAR_MODAL_KEY } from "ADD_AVATAR_MODAL_KEY";
import { AnalyticEvents } from "ME";

let result = require("expandEventProperties").fileFinishedImporting("modules/avatar/native/AddAvatarModalActionCreators.tsx");

export const handlePressNext = function handlePressNext(pendingImage, first, fn) {
  if (null != pendingImage) {
    let obj = { default_avatar_selected: null, is_guild_profile: false, location: null };
    obj[0] = first;
    obj[2] = { page: "Onboarding" };
    importDefault(698).track(AnalyticEvents.USER_AVATAR_UPDATED, obj);
    const obj3 = importDefault(698);
    obj = { avatar: null, avatar_description: null };
    ({ imageUri: obj6[0], description: obj6[1] } = pendingImage);
    const result = require(9222) /* saveProfileAndAccountRequest */.saveProfileAndAccountRequest(obj);
    const obj5 = require(9222) /* saveProfileAndAccountRequest */;
  }
  if (null != fn) {
    fn();
  } else {
    obj = importDefault(4395);
    obj.popWithKey(ADD_AVATAR_MODAL_KEY);
    require(11791) /* _startContactSyncForDiscoverability */.nextOnboardingStep({ skip: false });
    const obj2 = require(11791) /* _startContactSyncForDiscoverability */;
  }
};
export const showSkipAvatarModal = function showSkipAvatarModal(arg0) {
  const _require = arg0;
  let obj = importDefault(698);
  obj.track(AnalyticEvents.NUO_TRANSITION, { flow_type: "Mobile NUX Post Reg", from_step: "Skip avatar modal", skip_attempt: true });
  obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, hideActionSheet: false };
  const intl = _require(1236).intl;
  obj[0] = intl.string(_require(1236).t.DnKHuV);
  const intl2 = _require(1236).intl;
  obj[1] = intl2.string(_require(1236).t["1EPySE"]);
  const intl3 = _require(1236).intl;
  obj[2] = intl3.string(_require(1236).t["7eZ3ji"]);
  const intl4 = _require(1236).intl;
  obj[3] = intl4.string(_require(1236).t.nhJ8OC);
  obj[4] = function onConfirm() {
    callback(outer1_2[6]).setPendingChanges({ avatar: null });
    const obj = callback(outer1_2[6]);
    const tmp = callback;
    const result = callback(outer1_2[7]).announcePendingAvatarChange("remove");
    if (null != callback) {
      tmp5(true);
    } else {
      outer1_1(tmp2[8]).popWithKey(outer1_3);
      const obj3 = outer1_1(tmp2[8]);
      tmp(tmp2[11]).nextOnboardingStep({ skip: true });
      const tmpResult = tmp(tmp2[11]);
    }
  };
  importDefault(4528).show(obj);
};
export const openAddAvatarModal = function openAddAvatarModal() {
  importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(16254, dependencyMap.paths), {}, ADD_AVATAR_MODAL_KEY);
};
