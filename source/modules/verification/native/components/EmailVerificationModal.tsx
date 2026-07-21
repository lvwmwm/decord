// Module ID: 9174
// Function ID: 71858
// Name: closeModal
// Dependencies: []
// Exports: default

// Module 9174 (closeModal)
function closeModal() {
  resetChangeEmailStore();
  importDefault(dependencyMap[6]).close();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const resetChangeEmailStore = arg1(dependencyMap[3]).resetChangeEmailStore;
const VerificationModalScenes = arg1(dependencyMap[4]).VerificationModalScenes;
const jsx = arg1(dependencyMap[5]).jsx;
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/verification/native/components/EmailVerificationModal.tsx");

export default function EmailVerificationModal(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  const arg1 = isChangeEmail;
  let importDefault;
  let dependencyMap;
  let callback;
  let obj = arg1(dependencyMap[17]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let verified;
  if (null != stateFromStores) {
    verified = stateFromStores.verified;
  }
  const tmp2Result = importDefault(dependencyMap[18])(null != verified && verified);
  importDefault = tmp2Result;
  const tmp6 = callback(React.useState(), 2);
  const first = tmp6[0];
  dependencyMap = first;
  callback = tmp6[1];
  const items1 = [first, isChangeEmail, tmp2Result];
  if (!isChangeEmail) {
    let email;
    if (null != stateFromStores) {
      email = stateFromStores.email;
    }
    if (null != email) {
      obj = { screens: tmp8, initialRouteName: VerificationModalScenes.RESEND_EMAIL };
      const intl = arg1(dependencyMap[20]).intl;
      obj.headerBackTitle = intl.string(arg1(dependencyMap[20]).t.13/7kX);
      return jsx(arg1(dependencyMap[19]).Navigator, obj);
    }
  }
  if (null == stateFromStores) {
    const ENTER_EMAIL = VerificationModalScenes.ENTER_EMAIL;
  }
  const CONFIRM_EMAIL_CHANGE_START = VerificationModalScenes.CONFIRM_EMAIL_CHANGE_START;
};
