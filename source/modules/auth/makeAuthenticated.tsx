// Module ID: 15478
// Function ID: 118962
// Name: makeAuthenticated
// Dependencies: [31, 1194, 653, 33, 1328, 15479, 2]
// Exports: makeAuthenticated

// Module 15478 (makeAuthenticated)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { LoginStates } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/auth/makeAuthenticated.tsx");

export const makeAuthenticated = function makeAuthenticated(displayName) {
  let tmp = arg2;
  let closure_0 = displayName;
  let closure_1 = arg1;
  if (arg2 === undefined) {
    let obj = { passProps: true };
    tmp = obj;
  }
  const dependencyMap = tmp;
  class Authenticated {
    constructor(arg0) {
      obj = closure_0(closure_2[4]);
      if (!obj.isAuthenticated()) {
        tmp = outer1_3;
        tmp2 = outer1_4;
        if (outer1_3.getLoginStatus() !== outer1_4.LOGGING_IN) {
          tmp3 = outer1_3;
          if (outer1_3.allowLogoutRedirect()) {
            tmp4 = closure_1;
            tmp5 = null;
            if (null != closure_1) {
              tmp10 = outer1_5;
              tmp11 = closure_1;
              obj = {};
              tmp12 = closure_1;
              tmp13 = closure_2;
              num2 = 5;
              obj.renderRedirect = outer1_5(closure_1(closure_2[5]), {});
              tmp14Result = outer1_5(closure_1, obj);
            } else {
              tmp6 = outer1_5;
              tmp7 = closure_1;
              tmp8 = closure_2;
              num = 5;
              tmp14Result = outer1_5(closure_1(closure_2[5]), {});
            }
          }
          return tmp14Result;
        }
      }
      obj1 = {};
      tmp16 = null;
      tmp14 = outer1_5;
      tmp15 = closure_0;
      if (closure_2.passProps) {
        tmp16 = displayName;
      }
      merged = Object.assign(tmp16);
      tmp14Result = tmp14(tmp15, obj1);
      return;
    }
  }
  let name = displayName.displayName;
  if (null == name) {
    name = displayName.name;
  }
  let str = "<Unknown>";
  if (null != name) {
    str = name;
  }
  Authenticated.displayName = "Authenticated(" + str + ")";
  return Authenticated;
};
