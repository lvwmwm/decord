// Module ID: 12146
// Function ID: 95175
// Name: useUserProfileConnections
// Dependencies: [31, 6855, 6735, 566, 4814, 2]
// Exports: default

// Module 12146 (useUserProfileConnections)
import { useMemo } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let closure_5 = [];
const result = require("usePlatformAllowed").fileFinishedImporting("modules/user_profile/hooks/useUserProfileConnections.tsx");

export default function useUserProfileConnections(arg0) {
  const _require = arg0;
  const platformAllowed = _require(stateFromStores[2]).usePlatformAllowed({ forUserProfile: true });
  const obj = _require(stateFromStores[2]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = _require(stateFromStores[3]).useStateFromStores(items, () => outer1_4.getUserProfile(closure_0));
  let connectedAccounts;
  if (null != stateFromStores) {
    connectedAccounts = stateFromStores.connectedAccounts;
  }
  const items1 = [connectedAccounts, platformAllowed];
  return useMemo(() => {
    let connectedAccounts;
    if (null != stateFromStores) {
      connectedAccounts = stateFromStores.connectedAccounts;
    }
    if (null == connectedAccounts) {
      let found = outer1_5;
    } else {
      const connectedAccounts1 = stateFromStores.connectedAccounts;
      found = connectedAccounts1.filter((type) => {
        type = type.type;
        const value = platformAllowed(stateFromStores[4]).get(type);
        let isSupportedResult = null != value;
        if (isSupportedResult) {
          isSupportedResult = platformAllowed(stateFromStores[4]).isSupported(type);
          const obj2 = platformAllowed(stateFromStores[4]);
        }
        if (isSupportedResult) {
          isSupportedResult = outer1_1(value);
        }
        return isSupportedResult;
      });
    }
    return found;
  }, items1);
};
