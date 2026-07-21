// Module ID: 15306
// Function ID: 116423
// Name: makeAuthenticated
// Dependencies: []
// Exports: makeAuthenticated

// Module 15306 (makeAuthenticated)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const LoginStates = arg1(dependencyMap[2]).LoginStates;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/auth/makeAuthenticated.tsx");

export const makeAuthenticated = function makeAuthenticated(displayName) {
  let tmp = arg2;
  const arg1 = displayName;
  const importDefault = arg1;
  if (arg2 === undefined) {
    const obj = { passProps: true };
    tmp = obj;
  }
  const dependencyMap = tmp;
  class Authenticated {
    constructor(arg0) {
      obj = displayName(arg2[4]);
      if (!obj.isAuthenticated()) {
        tmp = closure_3;
        tmp2 = closure_4;
        if (closure_3.getLoginStatus() !== closure_4.LOGGING_IN) {
          tmp3 = closure_3;
          if (closure_3.allowLogoutRedirect()) {
            tmp4 = arg1;
            tmp5 = null;
            if (null != arg1) {
              tmp10 = closure_5;
              tmp11 = arg1;
              obj = {};
              tmp12 = arg1;
              tmp13 = arg2;
              num2 = 5;
              obj.renderRedirect = closure_5(arg1(arg2[5]), {});
              tmp14Result = closure_5(arg1, obj);
            } else {
              tmp6 = closure_5;
              tmp7 = arg1;
              tmp8 = arg2;
              num = 5;
              tmp14Result = closure_5(arg1(arg2[5]), {});
            }
          }
          return tmp14Result;
        }
      }
      obj1 = {};
      tmp16 = null;
      tmp14 = closure_5;
      tmp15 = displayName;
      if (arg2.passProps) {
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
