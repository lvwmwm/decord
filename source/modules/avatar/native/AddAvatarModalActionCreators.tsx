// Module ID: 15985
// Function ID: 122682
// Name: closeAddAvatarModal
// Dependencies: []
// Exports: handlePressNext, openAddAvatarModal, showSkipAvatarModal

// Module 15985 (closeAddAvatarModal)
function closeAddAvatarModal(skip) {
  let obj = importDefault(dependencyMap[8]);
  obj.popWithKey(ADD_AVATAR_MODAL_KEY);
  obj = { skip };
  require(dependencyMap[11]).nextOnboardingStep(obj);
}
const ADD_AVATAR_MODAL_KEY = require(dependencyMap[0]).ADD_AVATAR_MODAL_KEY;
const AnalyticEvents = require(dependencyMap[1]).AnalyticEvents;
const _module = require(dependencyMap[12]);
const result = _module.fileFinishedImporting("modules/avatar/native/AddAvatarModalActionCreators.tsx");

export const handlePressNext = function handlePressNext(arg0, first1, arg2) {
  if (null != arg0) {
    let obj = importDefault(dependencyMap[2]);
    obj = { default_avatar_selected: first1, is_guild_profile: false };
    obj = { page: "Onboarding" };
    obj.location = obj;
    obj.track(AnalyticEvents.USER_AVATAR_UPDATED, obj);
    ({ imageUri: obj5.avatar, description: obj5.avatar_description } = arg0);
    const result = require(dependencyMap[3]).saveProfileAndAccountRequest({});
    const obj1 = {};
    const obj4 = require(dependencyMap[3]);
  }
  if (null != arg2) {
    arg2();
  } else {
    closeAddAvatarModal(false);
  }
};
export const showSkipAvatarModal = function showSkipAvatarModal(arg0) {
  const require = arg0;
  let obj = importDefault(dependencyMap[2]);
  obj.track(AnalyticEvents.NUO_TRANSITION, { accessibilityRole: 720, flexDirection: 30, state: true });
  obj = {};
  const intl = require(dependencyMap[5]).intl;
  obj.title = intl.string(require(dependencyMap[5]).t.DnKHuV);
  const intl2 = require(dependencyMap[5]).intl;
  obj.body = intl2.string(require(dependencyMap[5]).t.1EPySE);
  const intl3 = require(dependencyMap[5]).intl;
  obj.cancelText = intl3.string(require(dependencyMap[5]).t.7eZ3ji);
  const intl4 = require(dependencyMap[5]).intl;
  obj.confirmText = intl4.string(require(dependencyMap[5]).t.nhJ8OC);
  obj.onConfirm = function onConfirm() {
    arg0(closure_2[6]).setPendingChanges({ avatar: null });
    const obj = arg0(closure_2[6]);
    const result = arg0(closure_2[7]).announcePendingAvatarChange("remove");
    if (null != arg0) {
      arg0(true);
    } else {
      callback(true);
    }
  };
  obj.hideActionSheet = false;
  importDefault(dependencyMap[4]).show(obj);
};
export const openAddAvatarModal = function openAddAvatarModal() {
  importDefault(dependencyMap[8]).pushLazy(require(dependencyMap[10])(dependencyMap[9], dependencyMap.paths), {}, ADD_AVATAR_MODAL_KEY);
};
