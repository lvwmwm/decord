// Module ID: 10533
// Function ID: 10534
// Name: useConjureProjectGroups
// Dependencies: [19, 6956, 1388, 7017, 10522, 504, 10534, 10535, 2]
// Exports: default

// Module 10533 (useConjureProjectGroups)
import conjureProjectGroups from "conjureProjectGroups" /* 10534 */;
import filterConjureProjectsByName from "filterConjureProjectsByName" /* 10535 */;
import react from "react" /* 19 */;
import SortedGuildStore from "SortedGuildStore" /* 6956 */;
import UserStore from "UserStore" /* 1388 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, set;

function getListedConjureProjects() {
  const railProjects = ConjureProjectStore.getRailProjects();
  set = new Set(railProjects.map((id) => id.id));
  const sharedWithMeProjects = ConjureProjectStore.getSharedWithMeProjects();
  for (const item10019 of sharedWithMeProjects) {
    let tmp2 = item10019;
    if (!set.has(item10019.id)) {
      let arr = railProjects.push(tmp2);
    }
    continue;
  }
  return railProjects;
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
