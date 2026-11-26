// Module ID: 14280
// Function ID: 14281
// Name: useConjureProjectGroups
// Dependencies: [19, 6164, 1387, 6934, 14271, 504, 14281, 14282, 2]
// Exports: default

// Module 14280 (useConjureProjectGroups)
import conjureProjectGroups from "conjureProjectGroups" /* 14281 */;
import filterConjureProjectsByName from "filterConjureProjectsByName" /* 14282 */;
import react from "react" /* 19 */;
import SortedGuildStore from "SortedGuildStore" /* 6164 */;
import UserStore from "UserStore" /* 1387 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6934 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser;

function getListedConjureProjects() {
  return ConjureProjectStore.getRailProjects();
}
const result = size.fileFinishedImporting("modules/conjure/project_groups/useConjureProjectGroups.tsx");

export default function useConjureProjectGroups(arg0) {
  let closure_0;
  let conjureProjectsByActivity;
  let stateFromStores;
  _require = arg0;
  let obj = require("useConjureHomeOwnProjects");
  conjureProjectsByActivity = obj.useConjureProjectsByActivity(getListedConjureProjects);
  let obj2 = require("get initialized");
  const items = [stateFromStores];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => stateFromStores.getFlattenedGuildIds());
  const items1 = [UserStore];
  const obj3 = require("get initialized");
  stateFromStores = obj3.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items2 = [conjureProjectsByActivity, stateFromStoresArray, stateFromStores, arg0];
  return stateFromStoresArray.useMemo(() => {
    const obj = { hasProjects: conjureProjectsByActivity.length > 0 };
    const groupConjureProjects = conjureProjectGroups.groupConjureProjects;
    conjureProjectGroups;
    const obj2 = filterConjureProjectsByName;
    const merged = Object.assign(groupConjureProjects(obj2.filterConjureProjectsByName(conjureProjectsByActivity, closure_0), stateFromStoresArray, stateFromStores));
    return obj;
  }, items2);
};
export { getListedConjureProjects };
