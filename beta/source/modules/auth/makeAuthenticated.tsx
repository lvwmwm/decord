// Module ID: 16571
// Function ID: 16572
// Name: makeAuthenticated
// Dependencies: [19, 502, 1074, 21, 7081, 16572, 2]
// Exports: makeAuthenticated

// Module 16571 (makeAuthenticated)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import AuthenticationUtils from "AuthenticationUtils" /* 7081 */;
import RedirectUnauthenticatedDefault from "RedirectUnauthenticated" /* 16572 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let _require, importDefault, merged, obj1, obj2, obj5, tmp, tmp10, tmp10Result, tmp11, tmp12, tmp2, tmp4, tmp5, tmp6, tmp8, tmp9;

const LoginStates = Constants.LoginStates;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/auth/makeAuthenticated.tsx");

export const makeAuthenticated = function makeAuthenticated(displayName, arg1) {
  let closure_1;
  _require = displayName;
  importDefault = arg1;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = { passProps: true };
  }
  let str = displayName.displayName;
  if (str == null) {
    str = displayName.name;
  }
  if (str == null) {
    str = "<Unknown>";
  }
  class Authenticated {
    constructor(arg0) {
      tmp = closure_2;
      obj = closure_0(closure_2[4]);
      if (!obj.isAuthenticated()) {
        obj2 = closure_3;
        tmp2 = LoginStates;
        if (closure_3.getLoginStatus() !== LoginStates.LOGGING_IN) {
          if (obj2.allowLogoutRedirect()) {
            tmp4 = null;
            if (null != closure_1) {
              tmp8 = jsx;
              obj1 = { renderRedirect: null };
              tmp9 = closure_1;
              obj1.renderRedirect = jsx(closure_1(tmp[5]), {});
              tmp10Result = jsx(tmp3, obj1);
            } else {
              tmp5 = jsx;
              tmp6 = closure_1;
              tmp10Result = jsx(closure_1(tmp[5]), {});
            }
          }
          return tmp10Result;
        }
      }
      tmp12 = null;
      tmp10 = jsx;
      tmp11 = closure_0;
      if (closure_2.passProps) {
        tmp12 = displayName;
      }
      obj5 = {};
      merged = Object.assign(tmp12);
      tmp10Result = tmp10(tmp11, obj5);
      return;
    }
  }
  Authenticated.displayName = "Authenticated(" + str + ")";
  return Authenticated;
};
