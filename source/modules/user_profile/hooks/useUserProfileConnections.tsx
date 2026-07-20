// Module ID: 11995
// Function ID: 92727
// Name: useUserProfileConnections
// Dependencies: []
// Exports: default

// Module 11995 (useUserProfileConnections)
const useMemo = require(dependencyMap[0]).useMemo;
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = [];
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/user_profile/hooks/useUserProfileConnections.tsx");

export default function useUserProfileConnections(arg0) {
  const require = arg0;
  const platformAllowed = require(dependencyMap[2]).usePlatformAllowed({ forUserProfile: true });
  const importDefault = platformAllowed;
  const obj = require(dependencyMap[2]);
  const items = [closure_4];
  const stateFromStores = require(dependencyMap[3]).useStateFromStores(items, () => userProfile.getUserProfile(arg0));
  const dependencyMap = stateFromStores;
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
      let found = closure_5;
    } else {
      const connectedAccounts1 = stateFromStores.connectedAccounts;
      found = connectedAccounts1.filter((type) => {
        type = type.type;
        const value = callback(closure_2[4]).get(type);
        let isSupportedResult = null != value;
        if (isSupportedResult) {
          isSupportedResult = callback(closure_2[4]).isSupported(type);
          const obj2 = callback(closure_2[4]);
        }
        if (isSupportedResult) {
          isSupportedResult = callback(value);
        }
        return isSupportedResult;
      });
    }
    return found;
  }, items1);
};
