// Module ID: 12003
// Function ID: 92755
// Name: useUserProfileApplicationRoleConnections
// Dependencies: []
// Exports: default

// Module 12003 (useUserProfileApplicationRoleConnections)
const useMemo = require(dependencyMap[0]).useMemo;
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = [];
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/user_profile/hooks/useUserProfileApplicationRoleConnections.tsx");

export default function useUserProfileApplicationRoleConnections(arg0) {
  const require = arg0;
  const items = [closure_3];
  const stateFromStores = require(dependencyMap[2]).useStateFromStores(items, () => userProfile.getUserProfile(arg0));
  const dependencyMap = stateFromStores;
  let prop;
  if (null != stateFromStores) {
    prop = stateFromStores.applicationRoleConnections;
  }
  const items1 = [prop];
  return useMemo(() => {
    let prop;
    if (null != stateFromStores) {
      prop = stateFromStores.applicationRoleConnections;
    }
    if (null == prop) {
      let applicationRoleConnections = closure_4;
    } else {
      applicationRoleConnections = stateFromStores.applicationRoleConnections;
    }
    return applicationRoleConnections;
  }, items1);
};
