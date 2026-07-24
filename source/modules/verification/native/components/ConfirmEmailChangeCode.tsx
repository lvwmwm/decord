// Module ID: 9229
// Function ID: 72194
// Name: ConfirmEmailChangeCode
// Dependencies: [5, 31, 9219, 33, 1456, 668, 9230, 9227, 1212, 2]
// Exports: default

// Module 9229 (ConfirmEmailChangeCode)
import keys from "keys";
import result from "result";
import { setEmailToken } from "setChangeEmailError";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("setChangeEmailError").fileFinishedImporting("modules/verification/native/components/ConfirmEmailChangeCode.tsx");

export default function ConfirmEmailChangeCode(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  let obj = isChangeEmail(1456);
  const navigation = obj.useNavigation();
  const items = [isChangeEmail, navigation];
  const callback = React.useCallback((arg0) => {
    let tmp2 = null;
    if (null != arg0) {
      tmp2 = arg0;
    }
    outer1_5(tmp2);
    const push = navigation.push;
    const VerificationModalScenes = isChangeEmail(outer1_2[5]).VerificationModalScenes;
    if (isChangeEmail) {
      push(VerificationModalScenes.CHANGE_EMAIL_COLLECT_REASONS);
    } else {
      push(VerificationModalScenes.ENTER_EMAIL);
    }
  }, items);
  obj = {
    onFormSubmit: (() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = outer1_3(tmp);
      return function() {
        return callback(...arguments);
      };
    })(),
    onSuccess: callback
  };
  // CreateGeneratorClosureLongIndex (0x67)
  obj.onResend = callback(tmp);
  const intl = isChangeEmail(1212).intl;
  obj.headerText = intl.string(isChangeEmail(1212).t["2x/2Uo"]);
  const intl2 = isChangeEmail(1212).intl;
  obj.confirmButtonText = intl2.string(isChangeEmail(1212).t.PDTjLN);
  return jsx(navigation(9230), {
    onFormSubmit: (() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = outer1_3(tmp);
      return function() {
        return callback(...arguments);
      };
    })(),
    onSuccess: callback
  });
};
