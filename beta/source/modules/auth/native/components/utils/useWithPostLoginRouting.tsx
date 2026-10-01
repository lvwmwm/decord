// Module ID: 6374
// Function ID: 6375
// Name: useWithPostLoginRouting
// Dependencies: [5, 32, 19, 502, 1074, 504, 1115, 6375, 6010, 2]
// Exports: default

// Module 6374 (useWithPostLoginRouting)
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6010 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, closure_0, closure_2;

let metroImportAll;
let metroImportDefault;
({ LoginStates: metroImportDefault, AuthStates: metroImportAll } = Constants);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useWithPostLoginRouting.tsx");

export default function useWithPostLoginRouting(arg0, handleLogin) {
  let constants2;
  let loginStatus;
  _require = arg0;
  let tmp = loginStatus(react.useState(), 2);
  const first = tmp[0];
  let closure_3 = tmp[1];
  let obj = require("get initialized");
  const items = [AuthenticationStore];
  loginStatus = obj.useStateFromStoresObject(items, () => {
    const obj = { loginStatus: authStore.getLoginStatus() };
    return obj;
  }).loginStatus;
  const items1 = [arg0, handleLogin, loginStatus, first];
  const effect = react.useEffect(() => {
    let closure_1;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let login;
    let tmp;
    if (closure_2 !== constants.LOGGING_IN) {
      if (tmp !== constants.FORGOT_PASSWORD) {
        const tmp3 = closure_3;
        const tmp5 = closure_3(loginStatus);
      }
    }
    if (constants.MFA_STEP === loginStatus) {
      closure_0.push(constants2.MFA);
    } else {
      if (constants.ACCOUNT_SCHEDULED_FOR_DELETION !== loginStatus) {
        if (constants.ACCOUNT_DISABLED !== loginStatus) {
          if (constants.LOGIN_AGE_GATE === loginStatus) {
            let tmp7 = closure_0;
            closure_0.push(constants2.AGE_GATE_UNDERAGE, { existingUser: true });
          }
        }
      }
      let obj = { handleLogin };
      closure_0.push(constants2.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED, obj);
    }
    if (constants.PASSWORD_RECOVERY_PHONE_VERIFICATION === loginStatus) {
      let obj2 = {
        title: intl.string(closure_0(first[6]).t["+xqy3d"]),
        description: intl2.string(closure_0(first[6]).t.myKyqh),
        phone: login,
        onPhoneTokenReceived(arg0) {
            const obj = { externalURL: handleLogin(first[7])(arg0) };
            const replaced = closure_0.replace(constants2.EXTERNAL_LINK, obj);
          },
        onClose() {
            const obj = handleLogin(closure_2[8]);
            obj.loginReset();
          }
      };
      login = authStore.getCredentials().login;
      const replace = closure_0.replace;
      const VERIFY_PHONE = constants2.VERIFY_PHONE;
      intl = closure_0(first[6]).intl;
      intl2 = closure_0(first[6]).intl;
      let replaced = replace(VERIFY_PHONE, obj2);
    } else if (constants.PHONE_IP_AUTHORIZATION === loginStatus) {
      const credentials = authStore.getCredentials();
      ({ login: closure_0, password: closure_1 } = credentials);
      let obj3 = {
        title: intl3.string(closure_0(first[6]).t.w55Oco),
        description: intl4.string(closure_0(first[6]).t["0/ALaJ"]),
        phone: authStore.getCredentials().login,
        onPhoneTokenReceived: function() {
            return closure_2(...arguments);
          },
        onClose(arg0) {
            const tmp = arg0;
            if (tmp) {
              const tmp7 = null != handleLogin && "" !== tmp5;
              if (tmp7) {
                handleLogin(closure_0, handleLogin);
              }
            } else {
              const obj = AuthenticationActionCreatorsDefault;
              obj.loginReset();
            }
          }
      };
      const push = closure_0.push;
      const VERIFY_PHONE2 = constants2.VERIFY_PHONE;
      intl3 = closure_0(first[6]).intl;
      intl4 = closure_0(first[6]).intl;
      closure_2 = closure_3(function*(arg0, value) {
        let obj2;
        closure_0 = arg0;
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
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
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let c2 = 0;
                let closure_1 = tmp;
                closure_0 = undefined;
                c3 = 1;
                c4 = 1;
                const obj5 = { value: obj2.authorizeIPAddress(closure_0), done: false };
                obj2 = handleLogin(closure_2[8]);
                return obj5;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const routes = closure_0.getState().routes;
              closure_0 = routes.findIndex((name) => name.name === constants.LOGIN);
              if (closure_0 >= 0) {
                closure_0.pop(closure_0);
              } else {
                closure_0.pop();
              }
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp16) {
            c4 = 3;
            throw tmp16;
          }
        }
      });
      push(VERIFY_PHONE2, obj3);
    }
    closure_3(loginStatus);
  }, items1);
};
