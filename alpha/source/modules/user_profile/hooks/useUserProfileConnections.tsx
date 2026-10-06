// Module ID: 12955
// Function ID: 12956
// Name: useUserProfileConnections
// Dependencies: [19, 7124, 7025, 504, 5449, 2]
// Exports: default

// Module 12955 (useUserProfileConnections)
import react from "react" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7124 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, type;

const useMemo = react.useMemo;
let closure_5 = [];
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileConnections.tsx");

export default function useUserProfileConnections(arg0) {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  let obj = require("ConnectionsHooks");
  const platformAllowed = obj.usePlatformAllowed({ forUserProfile: true });
  const items = [UserProfileStore];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items, () => UserProfileStore.getUserProfile(closure_0));
  let connectedAccounts;
  const tmp3 = useMemo;
  if (stateFromStores != null) {
    connectedAccounts = stateFromStores.connectedAccounts;
  }
  const items1 = [connectedAccounts, platformAllowed];
  return tmp3(() => {
    let found;
    let tmp = stateFromStores;
    let connectedAccounts;
    if (stateFromStores != null) {
      connectedAccounts = tmp.connectedAccounts;
    }
    if (null == connectedAccounts) {
      found = closure_5;
    } else {
      const connectedAccounts1 = tmp.connectedAccounts;
      found = connectedAccounts1.filter((type) => {
        type = type.type;
        const obj = platformAllowed(stateFromStores[4]);
        const value = obj.get(type);
        let isSupportedResult = null != value;
        const tmp = platformAllowed;
        const tmp2 = stateFromStores;
        if (isSupportedResult) {
          const tmpResult = tmp(tmp2[4]);
          isSupportedResult = tmpResult.isSupported(type);
        }
        if (isSupportedResult) {
          isSupportedResult = closure_1_1(value);
        }
        return isSupportedResult;
      });
    }
    return found;
  }, items1);
};
