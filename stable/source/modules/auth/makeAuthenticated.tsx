// Module ID: 16573
// Function ID: 16574
// Name: makeAuthenticated
// Dependencies: [19, 502, 1086, 21, 558, 576, 7085, 16574, 2]
// Exports: makeAuthenticated

// Module 16573 (makeAuthenticated)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1086 */;
import AuthenticationUtils from "AuthenticationUtils" /* 7085 */;
import RedirectUnauthenticatedDefault from "RedirectUnauthenticated" /* 16574 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const LoginStates = Constants.LoginStates;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/auth/makeAuthenticated.tsx");

export const makeAuthenticated = function makeAuthenticated(displayName, arg1) {
  _require = displayName;
  let closure_1 = arg1;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = { passProps: true };
  }
  let obj2 = require("ReactCompilerGating");
  const tmp = obj2.isReactCompilerEnabled() ? ((arg0) => {
    let tmp17;
    obj = react2;
    const cResult = obj.c(4);
    const obj2 = AuthenticationUtils;
    if (!obj2.isAuthenticated()) {
      const obj3 = AuthenticationStore;
      if (AuthenticationStore.getLoginStatus() !== LoginStates.LOGGING_IN) {
        if (obj3.allowLogoutRedirect()) {
          let tmp7;
          if (null != closure_1) {
            let first;
            const _Symbol2 = Symbol;
            if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp15 = <tmp4 renderRedirect={jsx(RedirectUnauthenticatedDefault, {})} />;
              cResult[0] = tmp15;
              first = tmp15;
            } else {
              first = cResult[0];
            }
            tmp7 = first;
          } else {
            const _Symbol = Symbol;
            if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp10 = jsx(RedirectUnauthenticatedDefault, {});
              cResult[1] = tmp10;
              tmp7 = tmp10;
            } else {
              tmp7 = cResult[1];
            }
          }
          return tmp7;
        }
      }
    }
    let tmp16 = null;
    if (obj.passProps) {
      tmp16 = arg0;
    }
    if (cResult[2] !== tmp16) {
      const merged = Object.assign(tmp16);
      const tmp23 = <displayName />;
      cResult[2] = tmp16;
      cResult[3] = tmp23;
      tmp17 = tmp23;
    } else {
      tmp17 = cResult[3];
    }
    return tmp17;
  }) : ((arg0) => {
    obj = AuthenticationUtils;
    if (!obj.isAuthenticated()) {
      const obj2 = AuthenticationStore;
      if (AuthenticationStore.getLoginStatus() !== LoginStates.LOGGING_IN) {
        let tmp10Result;
        if (obj2.allowLogoutRedirect()) {
          if (null != closure_1) {
            tmp10Result = <tmp3 renderRedirect={jsx(RedirectUnauthenticatedDefault, {})} />;
          } else {
            tmp10Result = jsx(RedirectUnauthenticatedDefault, {});
          }
        }
        return tmp10Result;
      }
    }
    let tmp12 = null;
    const tmp10 = jsx;
    const tmp11 = displayName;
    if (obj.passProps) {
      tmp12 = arg0;
    }
    const obj4 = {};
    const merged = Object.assign(tmp12);
    tmp10Result = tmp10(tmp11, obj4);
  });
  let str = displayName.displayName;
  if (str == null) {
    str = displayName.name;
  }
  if (str == null) {
    str = "<Unknown>";
  }
  tmp.displayName = "Authenticated(" + str + ")";
  return tmp;
};
