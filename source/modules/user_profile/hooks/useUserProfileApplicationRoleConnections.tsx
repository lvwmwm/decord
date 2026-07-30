// Module ID: 12185
// Function ID: 12186
// Name: useUserProfileApplicationRoleConnections
// Dependencies: [19, 5894, 589, 2]
// Exports: default

// Module 12185 (useUserProfileApplicationRoleConnections)
import { useMemo } from "noop";
import createUserWidgetFromServer from "createUserWidgetFromServer";

let closure_4 = [];
const result = require("initialize").fileFinishedImporting("modules/user_profile/hooks/useUserProfileApplicationRoleConnections.tsx");

export default function useUserProfileApplicationRoleConnections(arg0) {
  const _require = arg0;
  const items = [createUserWidgetFromServer];
  stateFromStores = _require(stateFromStores[2]).useStateFromStores(items, () => outer1_3.getUserProfile(closure_0));
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.applicationRoleConnections;
  }
  const items1 = [prop];
  return useMemo(() => {
    let prop;
    if (stateFromStores != null) {
      prop = tmp.applicationRoleConnections;
    }
    return null == prop ? outer1_4 : stateFromStores.applicationRoleConnections;
  }, items1);
};
