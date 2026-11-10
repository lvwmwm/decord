// Module ID: 13235
// Function ID: 13236
// Name: useConjureProjectGroups
// Dependencies: [19, 6830, 1385, 6902, 13214, 504, 13236, 13237, 2]
// Exports: default

// Module 13235 (useConjureProjectGroups)
import conjureProjectGroups from "conjureProjectGroups" /* 13236 */;
import filterConjureProjectsByName from "filterConjureProjectsByName" /* 13237 */;
import react from "react" /* 19 */;
import SortedGuildStore from "SortedGuildStore" /* 6830 */;
import UserStore from "UserStore" /* 1385 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6902 */;
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
