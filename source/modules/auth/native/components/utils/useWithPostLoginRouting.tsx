// Module ID: 9207
// Function ID: 72086
// Name: useWithPostLoginRouting
// Dependencies: [5, 57, 31, 1194, 653, 566, 1212, 9208, 5590, 2]
// Exports: default

// Module 9207 (useWithPostLoginRouting)
import initialize from "initialize";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_7;
let closure_8;
const require = arg1;
({ LoginStates: closure_7, AuthStates: closure_8 } = ME);
const result = require("result").fileFinishedImporting("modules/auth/native/components/utils/useWithPostLoginRouting.tsx");

export default function useWithPostLoginRouting(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const tmp = loginStatus(React.useState(), 2);
  const first = tmp[0];
  let initialize = tmp[1];
  const items = [_isNativeReflectConstruct];
  loginStatus = _require(first[5]).useStateFromStoresObject(items, () => ({ loginStatus: outer1_6.getLoginStatus() })).loginStatus;
  const items1 = [arg0, arg1, loginStatus, first];
  const effect = React.useEffect(() => {
    let closure_0;
    let closure_1;
    if (closure_2 !== outer1_7.LOGGING_IN) {
      if (closure_2 !== outer1_7.FORGOT_PASSWORD) {
        callback(loginStatus);
      }
    }
    if (outer1_7.MFA_STEP === loginStatus) {
      arr = arr.push(outer1_8.MFA);
    } else {
      if (outer1_7.ACCOUNT_SCHEDULED_FOR_DELETION !== tmp6) {
        if (outer1_7.ACCOUNT_DISABLED !== tmp6) {
          if (outer1_7.LOGIN_AGE_GATE === tmp6) {
            let obj = { existingUser: true };
            arr = arr.push(outer1_8.AGE_GATE_UNDERAGE, obj);
          }
        }
      }
      obj = { handleLogin: closure_1 };
      arr.push(outer1_8.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED, obj);
    }
    if (outer1_7.PASSWORD_RECOVERY_PHONE_VERIFICATION === loginStatus) {
      obj = {};
      const intl = arr(first[6]).intl;
      obj.title = intl.string(arr(first[6]).t["+xqy3d"]);
      const intl2 = arr(first[6]).intl;
      obj.description = intl2.string(arr(first[6]).t.myKyqh);
      obj.phone = outer1_6.getCredentials().login;
      obj.onPhoneTokenReceived = function onPhoneTokenReceived(arg0) {
        const replaced = outer1_0.replace(outer2_8.EXTERNAL_LINK, { externalURL: callback(first[7])(arg0) });
      };
      obj.onClose = function onClose() {
        callback(first[8]).loginReset();
      };
      let replaced = arr.replace(outer1_8.VERIFY_PHONE, obj);
    } else if (outer1_7.PHONE_IP_AUTHORIZATION === tmp20) {
      const credentials = outer1_6.getCredentials();
      ({ login: closure_0, password: closure_1 } = credentials);
      const obj1 = {};
      const intl3 = arr(first[6]).intl;
      obj1.title = intl3.string(arr(first[6]).t.w55Oco);
      const intl4 = arr(first[6]).intl;
      obj1.description = intl4.string(arr(first[6]).t["0/ALaJ"]);
      const login = outer1_6.getCredentials().login;
      obj1.phone = login;
      // CreateGeneratorClosureLongIndex (0x67)
      closure_2 = callback(login);
      obj1.onPhoneTokenReceived = function() {
        return callback2(...arguments);
      };
      obj1.onClose = function onClose(arg0) {
        if (arg0) {
          let tmp6 = null != callback;
          if (tmp6) {
            tmp6 = "" !== callback;
          }
          if (tmp6) {
            outer1_1(closure_0, callback);
          }
        } else {
          callback(first[8]).loginReset();
          const obj = callback(first[8]);
        }
      };
      arr.push(outer1_8.VERIFY_PHONE, obj1);
    }
    callback(loginStatus);
  }, items1);
};
