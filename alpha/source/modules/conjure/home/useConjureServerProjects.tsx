// Module ID: 18696
// Function ID: 18697
// Name: useConjureServerProjects
// Dependencies: [6500, 13680, 6719, 504, 2]
// Exports: default

// Module 18696 (useConjureServerProjects)
import ConjureProjectStore from "ConjureProjectStore" /* 6500 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/home/useConjureServerProjects.tsx");

export default function useConjureServerProjects(arg0) {
  let closure_0;
  let items;
  let items1;
  let items2;
  let items3;
  let obj2;
  let obj3;
  let obj4;
  _require = arg0;
  let obj = {
    mine: obj2.useConjureProjectsByActivity(() => {
      const ownedProjects = ConjureProjectStore.getOwnedProjects();
      return ownedProjects.filter((item) => {
        const obj = closure_0(dependencyMap[2]);
        return obj.conjureServerProjectGuildId(item) === closure_1_0;
      });
    }, items),
    shared: obj3.useConjureProjectsByActivity(() => {
      const sharedProjects = ConjureProjectStore.getSharedProjects(closure_0);
      return sharedProjects.filter((item) => {
        const obj = closure_0(dependencyMap[2]);
        return obj.conjureServerProjectGuildId(item) === closure_1_0;
      });
    }, items1),
    fetchState: obj4.useStateFromStores(items2, () => ConjureProjectStore.getGuildProjectsFetchState(closure_0), items3)
  };
  items = [arg0];
  items1 = [arg0];
  obj2 = require("useConjureHomeOwnProjects");
  items2 = [ConjureProjectStore];
  items3 = [arg0];
  obj3 = require("useConjureHomeOwnProjects");
  obj4 = require("get initialized");
  return obj;
};
