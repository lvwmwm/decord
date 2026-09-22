// Module ID: 13399
// Function ID: 13400
// Name: useUserProfileApplicationRoleConnections
// Dependencies: [19, 7860, 504, 2]
// Exports: default

// Module 13399 (useUserProfileApplicationRoleConnections)
import _mod19 from "module_19" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7860 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useMemo = _mod19.useMemo;
let closure_4 = [];
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileApplicationRoleConnections.tsx");

export default function useUserProfileApplicationRoleConnections(arg0) {
  _require = arg0;
  const items = [UserProfileStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => UserProfileStore.getUserProfile(closure_0));
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
    return null == prop ? closure_4 : stateFromStores.applicationRoleConnections;
  }, items1);
};
