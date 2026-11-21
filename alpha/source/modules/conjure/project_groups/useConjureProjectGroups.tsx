// Module ID: 13782
// Function ID: 13783
// Name: useConjureProjectGroups
// Dependencies: [19, 6550, 1386, 6621, 13773, 504, 13783, 13784, 2]
// Exports: default

// Module 13782 (useConjureProjectGroups)
import conjureProjectGroups from "conjureProjectGroups" /* 13783 */;
import filterConjureProjectsByName from "filterConjureProjectsByName" /* 13784 */;
import react from "react" /* 19 */;
import SortedGuildStore from "SortedGuildStore" /* 6550 */;
import UserStore from "UserStore" /* 1386 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;
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
