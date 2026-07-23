// Module ID: 16114
// Function ID: 124941
// Name: closeAddAvatarModal
// Dependencies: [16115, 653, 675, 9230, 4470, 1212, 7844, 7846, 4337, 16116, 1934, 11733, 2]
// Exports: handlePressNext, openAddAvatarModal, showSkipAvatarModal

// Module 16114 (closeAddAvatarModal)
import { ADD_AVATAR_MODAL_KEY } from "ADD_AVATAR_MODAL_KEY";
import { AnalyticEvents } from "ME";

function closeAddAvatarModal(skip) {
  let obj = importDefault(4337);
  obj.popWithKey(ADD_AVATAR_MODAL_KEY);
  obj = { skip };
  require(11733) /* _startContactSyncForDiscoverability */.nextOnboardingStep(obj);
}
let result = require("expandLocation").fileFinishedImporting("modules/avatar/native/AddAvatarModalActionCreators.tsx");

export const handlePressNext = function handlePressNext(c4, first1, arg2) {
  if (null != c4) {
    let obj = importDefault(675);
    obj = { default_avatar_selected: first1, is_guild_profile: false };
    obj = { page: "Onboarding" };
    obj.location = obj;
    obj.track(AnalyticEvents.USER_AVATAR_UPDATED, obj);
    ({ imageUri: obj5.avatar, description: obj5.avatar_description } = c4);
    const result = require(9230) /* saveProfileAndAccountRequest */.saveProfileAndAccountRequest({});
    const obj1 = {};
    const obj4 = require(9230) /* saveProfileAndAccountRequest */;
  }
  if (null != arg2) {
    arg2();
  } else {
    closeAddAvatarModal(false);
  }
};
export const showSkipAvatarModal = function showSkipAvatarModal(arg0) {
  const _require = arg0;
  let obj = importDefault(675);
  obj.track(AnalyticEvents.NUO_TRANSITION, { flow_type: "Mobile NUX Post Reg", from_step: "Skip avatar modal", skip_attempt: true });
  obj = {};
  const intl = _require(1212).intl;
  obj.title = intl.string(_require(1212).t.DnKHuV);
  const intl2 = _require(1212).intl;
  obj.body = intl2.string(_require(1212).t["1EPySE"]);
  const intl3 = _require(1212).intl;
  obj.cancelText = intl3.string(_require(1212).t["7eZ3ji"]);
  const intl4 = _require(1212).intl;
  obj.confirmText = intl4.string(_require(1212).t.nhJ8OC);
  obj.onConfirm = function onConfirm() {
    callback(outer1_2[6]).setPendingChanges({ avatar: null });
    const obj = callback(outer1_2[6]);
    const result = callback(outer1_2[7]).announcePendingAvatarChange("remove");
    if (null != callback) {
      callback(true);
    } else {
      outer1_5(true);
    }
  };
  obj.hideActionSheet = false;
  importDefault(4470).show(obj);
};
export const openAddAvatarModal = function openAddAvatarModal() {
  importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(16116, dependencyMap.paths), {}, ADD_AVATAR_MODAL_KEY);
};
