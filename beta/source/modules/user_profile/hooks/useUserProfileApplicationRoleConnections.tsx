// Module ID: 12675
// Function ID: 12676
// Name: useUserProfileApplicationRoleConnections
// Dependencies: [19, 7035, 504, 2]
// Exports: default

// Module 12675 (useUserProfileApplicationRoleConnections)
import react from "react" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useMemo = react.useMemo;
let closure_4 = [];
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileApplicationRoleConnections.tsx");

export default function useUserProfileApplicationRoleConnections(arg0) {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  const items = [UserProfileStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => UserProfileStore.getUserProfile(closure_0));
  let prop;
  const tmp2 = useMemo;
  if (stateFromStores != null) {
    prop = stateFromStores.applicationRoleConnections;
  }
  const items1 = [prop];
  return tmp2(() => {
    let prop;
    if (stateFromStores != null) {
      prop = tmp.applicationRoleConnections;
    }
    return null == prop ? closure_4 : stateFromStores.applicationRoleConnections;
  }, items1);
};
