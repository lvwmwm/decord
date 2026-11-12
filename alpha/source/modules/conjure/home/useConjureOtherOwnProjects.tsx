// Module ID: 13876
// Function ID: 13877
// Name: useConjureOtherOwnProjects
// Dependencies: [6954, 504, 13875, 2]
// Exports: default

// Module 13876 (useConjureOtherOwnProjects)
import ConjureProjectStore from "ConjureProjectStore" /* 6954 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/home/useConjureOtherOwnProjects.tsx");

export default function useConjureOtherOwnProjects(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  return obj.useStateFromStoresArray(items, () => {
    const ownedProjects = ConjureProjectStore.getOwnedProjects();
    return ownedProjects.filter((item) => {
      const obj = closure_0(dependencyMap[2]);
      return !obj.conjureProjectPointsAtGuild(item, closure_1_0);
    });
  }, items1);
};
