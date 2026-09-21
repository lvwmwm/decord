// Module ID: 17222
// Function ID: 17223
// Name: makeAuthenticated
// Dependencies: [19, 502, 1078, 21, 558, 568, 7909, 17223, 2]
// Exports: makeAuthenticated

// Module 17222 (makeAuthenticated)
import c from "c" /* 568 */;
import AuthenticationUtils from "AuthenticationUtils" /* 7909 */;
import RedirectUnauthenticatedDefault from "RedirectUnauthenticated" /* 17223 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

require = fn;
const LoginStates = fn(1078).LoginStates;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/makeAuthenticated.tsx");

export const makeAuthenticated = function makeAuthenticated(displayName, arg1) {
  _require = displayName;
  closure_1 = arg1;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = { passProps: true };
  }
  let tmp = require("ReactCompilerGating").isReactCompilerEnabled() ? ((arg0) => {
    let tmp = dependencyMap;
    obj = c;
    const cResult = obj.c(4);
    if (!obj2.isAuthenticated()) {
      if (AuthenticationStore.getLoginStatus() !== LoginStates.LOGGING_IN) {
        if (obj3.allowLogoutRedirect()) {
          if (null != closure_1) {
            const _Symbol2 = Symbol;
            if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { renderRedirect: null };
              tmp = jsx(RedirectUnauthenticatedDefault, {});
              obj4.renderRedirect = tmp;
              const tmp15 = <tmp4 renderRedirect={null} />;
              cResult[0] = tmp15;
              let first = tmp15;
            } else {
              first = cResult[0];
            }
          } else {
            const _Symbol = Symbol;
            if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp10 = jsx(RedirectUnauthenticatedDefault, {});
              cResult[1] = tmp10;
              let tmp7 = tmp10;
            } else {
              tmp7 = cResult[1];
            }
            return tmp7;
          }
        }
      }
      obj3 = AuthenticationStore;
    }
    let tmp17 = null;
    if (obj.passProps) {
      tmp17 = arg0;
    }
    if (cResult[2] !== tmp17) {
      const obj5 = {};
      const merged = Object.assign(tmp17);
      const tmp24 = <closure_0 />;
      cResult[2] = tmp17;
      cResult[3] = tmp24;
      let tmp18 = tmp24;
    } else {
      tmp18 = cResult[3];
    }
    return tmp18;
  }) : ((arg0) => {
    obj = AuthenticationUtils;
    if (!obj.isAuthenticated()) {
      if (AuthenticationStore.getLoginStatus() !== LoginStates.LOGGING_IN) {
        if (obj2.allowLogoutRedirect()) {
          if (null != closure_1) {
            const obj3 = { renderRedirect: jsx(RedirectUnauthenticatedDefault, {}) };
            let tmp10Result = <tmp3 renderRedirect={jsx(RedirectUnauthenticatedDefault, {})} />;
          } else {
            tmp10Result = jsx(RedirectUnauthenticatedDefault, {});
          }
        }
        return tmp10Result;
      }
      obj2 = AuthenticationStore;
    }
    let tmp12 = null;
    if (obj.passProps) {
      tmp12 = arg0;
    }
    const merged = Object.assign(tmp12);
    tmp10Result = <closure_0 />;
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
