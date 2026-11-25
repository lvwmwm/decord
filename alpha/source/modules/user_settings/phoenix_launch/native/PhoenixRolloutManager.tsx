// Module ID: 19784
// Function ID: 19785
// Name: PhoenixRolloutManager
// Dependencies: [5, 502, 3, 17330, 17332, 17331, 17329, 7444, 2]

// Module 19784 (PhoenixRolloutManager)
import LoggerDefault from "Logger" /* 3 */;
import react_nativeDefault from "react-native" /* 17330 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7444 */;
import size from "module_2" /* 2 */;

let c2, c4, c5, closure_2, id;

let obj = function _applyPhoenixRollout() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let obj4;
    let obj7;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj5 = { value, done: true };
        return obj5;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        let tmp;
        let hasPhoenix;
        let client;
        let forcedClient;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            let closure_1 = tmp4;
            tmp = undefined;
            hasPhoenix = undefined;
            client = undefined;
            forcedClient = undefined;
            if (null != react_nativeDefault) {
              id = id.getId();
              if (null != id) {
                if ("" !== id) {
                  c2 = 1;
                  c3 = 1;
                  const obj8 = { value: obj7.getState(), done: false };
                  obj7 = react_nativeDefault;
                  return obj8;
                }
              }
            }
          }
        } else if (1 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            tmp = value;
            hasPhoenix = tmp.hasPhoenix;
            client = tmp.client;
            const tmp37 = hasPhoenix;
            if (tmp37) {
              const obj2 = closure_129_1(closure_129_2[4]);
              forcedClient = obj2.getConfig({ location: "PhoenixRolloutManager" }).forcedClient;
              let tmp14 = null != forcedClient;
              if (tmp14) {
                const obj3 = closure_129_0(closure_129_2[5]);
                tmp14 = forcedClient !== obj3.toLaunchClient(client);
              }
              if (tmp14) {
                c2 = 2;
                c3 = 1;
                const obj10 = { value: obj4.storeLaunchClient(forcedClient), done: false };
                obj4 = closure_129_0(closure_129_2[6]);
                return obj10;
              }
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else if (!value) {
          closure_129_5.error("The launch switch was not stored");
        }
        c3 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp30) {
        c3 = 3;
        throw tmp30;
      }
    }
  });
  return obj(...arguments);
};
let closure_5 = new LoggerDefault("PhoenixRolloutManager");
const tmp2 = new LoggerDefault("PhoenixRolloutManager");
class PhoenixRolloutManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen };
    return applyArgumentsResult;
  }
  handlePostConnectionOpen() {
    return (async (arg0, value) => {
      function applyPhoenixRollout() {
        return closure_1_6(...arguments);
      }
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        let c3;
        try {
          let closure_0;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp;
              closure_0 = tmp4;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: applyPhoenixRollout(), done: false };
              return obj4;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              closure_0 = closure_2;
              closure_129_5.error("Unable to apply the Phoenix rollout", closure_0);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c3 = 0;
            }
            c5 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp12) {
          closure_2 = tmp12;
          if (0 === c3) {
            c5 = 3;
            throw tmp12;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  }
}
const prototype = PhoenixRolloutManager.prototype;
const phoenixRolloutManager = new PhoenixRolloutManager();
const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/PhoenixRolloutManager.tsx");

export default phoenixRolloutManager;
