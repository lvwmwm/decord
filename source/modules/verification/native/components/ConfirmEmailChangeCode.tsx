// Module ID: 9181
// Function ID: 71908
// Name: ConfirmEmailChangeCode
// Dependencies: []
// Exports: default

// Module 9181 (ConfirmEmailChangeCode)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const setEmailToken = arg1(dependencyMap[2]).setEmailToken;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/verification/native/components/ConfirmEmailChangeCode.tsx");

export default function ConfirmEmailChangeCode(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  const arg1 = isChangeEmail;
  let obj = arg1(dependencyMap[4]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  const items = [isChangeEmail, navigation];
  const callback = React.useCallback((arg0) => {
    let tmp2 = null;
    if (null != arg0) {
      tmp2 = arg0;
    }
    closure_5(tmp2);
    const push = navigation.push;
    const VerificationModalScenes = isChangeEmail(closure_2[5]).VerificationModalScenes;
    if (isChangeEmail) {
      push(VerificationModalScenes.CHANGE_EMAIL_COLLECT_REASONS);
    } else {
      push(VerificationModalScenes.ENTER_EMAIL);
    }
  }, items);
  obj = {
    onFormSubmit: () => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = callback(tmp);
      return function() {
        return callback(...arguments);
      };
    }(),
    onSuccess: callback
  };
  // CreateGeneratorClosureLongIndex (0x67)
  obj.onResend = callback(tmp);
  const intl = arg1(dependencyMap[8]).intl;
  obj.headerText = intl.string(arg1(dependencyMap[8]).t.2x/2Uo);
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.confirmButtonText = intl2.string(arg1(dependencyMap[8]).t.PDTjLN);
  return jsx(importDefault(dependencyMap[6]), obj);
};
