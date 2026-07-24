// Module ID: 12147
// Function ID: 95180
// Name: useUserProfileApplicationRoleConnections
// Dependencies: [31, 6855, 566, 2]
// Exports: default

// Module 12147 (useUserProfileApplicationRoleConnections)
import { useMemo } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let closure_4 = [];
const result = require("initialize").fileFinishedImporting("modules/user_profile/hooks/useUserProfileApplicationRoleConnections.tsx");

export default function useUserProfileApplicationRoleConnections(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  stateFromStores = _require(stateFromStores[2]).useStateFromStores(items, () => outer1_3.getUserProfile(closure_0));
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
      let applicationRoleConnections = outer1_4;
    } else {
      applicationRoleConnections = stateFromStores.applicationRoleConnections;
    }
    return applicationRoleConnections;
  }, items1);
};
