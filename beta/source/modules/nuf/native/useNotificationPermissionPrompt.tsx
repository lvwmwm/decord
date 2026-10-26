// Module ID: 17969
// Function ID: 17970
// Name: useNotificationPermissionPrompt
// Dependencies: [19, 4816, 6496, 4817, 13310, 558, 576, 504, 4819, 13319, 17970, 17972, 2]

// Module 17969 (useNotificationPermissionPrompt)
import NotificationUtilsDefault from "NotificationUtils" /* 13319 */;
import react from "react" /* 19 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 4816 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6496 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 4817 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13310 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNotificationPermissionPrompt() {
  let connected;
  let stateFromStores;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let tmp = stateFromStores;
  let tmp2 = dependencyMap;
  const obj = stateFromStores(576);
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp6 = GatewayConnectionStore;
    const items = [GatewayConnectionStore];
    const fn = function f() {
      return connected.isConnected();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserRequiredActionStore, LoginRequiredActionStore];
    class S {
      constructor() {
        return stateFromStores1(dependencyMap[8])(LoginRequiredActionStore, UserRequiredActionStore);
      }
    }
    cResult[2] = items1;
    cResult[3] = S;
    tmp9 = S;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult3 = tmp(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === stateFromStores1) {
    let tmp13;
    let tmp14;
    if (cResult[5] === stateFromStores) {
      tmp13 = cResult[6];
      tmp14 = cResult[7];
    }
    const effect = react.useEffect(tmp13, tmp14);
    const tmpResult4 = tmp(17970);
    const guildOpenNudge = tmpResult4.useGuildOpenNudge();
    class S {
      constructor() {
        return stateFromStores1(dependencyMap[8])(LoginRequiredActionStore, UserRequiredActionStore);
      }
    }
    const postCallDisconnectNudge = obj5.usePostCallDisconnectNudge();
  }
  class P {
    constructor() {
      const tmp = stateFromStores;
      if (tmp) {
        const tmp2 = stateFromStores1;
        if (!tmp2) {
          const tmp6 = NotificationUtilsDefault.shouldRequestNotification && !PushNotificationPermissionStore.promptSeen;
          if (tmp6) {
            const tmp4Result = NotificationUtilsDefault;
            const permission = tmp4Result.requestPermission();
            NotificationUtilsDefault.shouldRequestNotification = false;
          }
        }
      }
    }
  }
  const items2 = [stateFromStores, stateFromStores1];
  cResult[4] = stateFromStores1;
  cResult[5] = stateFromStores;
  cResult[6] = P;
  cResult[7] = items2;
  tmp14 = items2;
  tmp13 = P;
}) : (function useNotificationPermissionPrompt() {
  let connected;
  let stateFromStores;
  const items = [GatewayConnectionStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, () => connected.isConnected());
  const items1 = [UserRequiredActionStore, LoginRequiredActionStore];
  const obj2 = stateFromStores(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => stateFromStores1(dependencyMap[8])(LoginRequiredActionStore, UserRequiredActionStore));
  const items2 = [stateFromStores, stateFromStores1];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      const tmp2 = stateFromStores1;
      if (!tmp2) {
        const tmp6 = NotificationUtilsDefault.shouldRequestNotification && !PushNotificationPermissionStore.promptSeen;
        if (tmp6) {
          const tmp4Result = NotificationUtilsDefault;
          const permission = tmp4Result.requestPermission();
          NotificationUtilsDefault.shouldRequestNotification = false;
        }
      }
    }
  }, items2);
  const obj3 = stateFromStores(17970);
  const guildOpenNudge = obj3.useGuildOpenNudge();
  const obj4 = stateFromStores(17972);
  const postCallDisconnectNudge = obj4.usePostCallDisconnectNudge();
});
const result = size.fileFinishedImporting("modules/nuf/native/useNotificationPermissionPrompt.tsx");

export default tmp2;
