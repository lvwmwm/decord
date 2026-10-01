// Module ID: 6021
// Function ID: 6022
// Name: ConfirmEmailChangeCode
// Dependencies: [5, 19, 5935, 21, 1485, 1094, 6022, 6019, 1115, 2]
// Exports: default

// Module 6021 (ConfirmEmailChangeCode)
import Fragment from "Fragment" /* 21 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import ChangeEmailStore from "ChangeEmailStore" /* 5935 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_0, navigation;

const setEmailToken = ChangeEmailStore.setEmailToken;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/verification/native/components/ConfirmEmailChangeCode.tsx");

export default function ConfirmEmailChangeCode(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  let obj = isChangeEmail(1485);
  navigation = obj.useNavigation();
  const items = [isChangeEmail, navigation];
  const callback = react.useCallback((arg0) => {
    let tmp = arg0;
    const tmp2 = setEmailToken;
    if (arg0 == null) {
      tmp = null;
    }
    tmp2(tmp);
    const push = navigation.push;
    const VerificationModalScenes = ConstantsIOS.VerificationModalScenes;
    if (isChangeEmail) {
      push(VerificationModalScenes.CHANGE_EMAIL_COLLECT_REASONS);
    } else {
      push(VerificationModalScenes.ENTER_EMAIL);
    }
  }, items);
  navigation(6022);
  isChangeEmail = _asyncToGenerator(async (arg0) => {
    let c1;
    closure_0 = arg0;
    const obj3 = closure_0(c2[7]);
    await obj3.confirmEmailChange(closure_0);
    return arg1;
  });
  const intl = isChangeEmail(1115).intl;
  const intl2 = isChangeEmail(1115).intl;
  return <tmp3 onFormSubmit={function() {
    return closure_0(...arguments);
  }} onSuccess={callback} onResend={_asyncToGenerator(async (arg0, value) => {
    let v3;
    if (isChangeEmail === 2) {
      isChangeEmail = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        isChangeEmail = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            isChangeEmail = 3;
            throw value;
          } else if (arg0 === 2) {
            isChangeEmail = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c1 = 1;
            const obj2 = isChangeEmail(dependencyMap[7]);
            isChangeEmail = 1;
            const obj5 = { value: obj2.sendConfirmationCode(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          isChangeEmail = 3;
          throw value;
        } else if (arg0 === 2) {
          isChangeEmail = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          isChangeEmail = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp6) {
        isChangeEmail = 3;
        throw tmp6;
      }
    }
  })} headerText={intl.string(isChangeEmail(1115).t["2x/2Uo"])} confirmButtonText={intl2.string(isChangeEmail(1115).t.PDTjLN)} />;
};
