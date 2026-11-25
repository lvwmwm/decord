// Module ID: 18803
// Function ID: 18804
// Name: useConjureOtherOwnProjects
// Dependencies: [6903, 504, 7544, 2]
// Exports: default

// Module 18803 (useConjureOtherOwnProjects)
import ConjureProjectStore from "ConjureProjectStore" /* 6903 */;
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
      return obj.conjureServerProjectGuildId(item) !== closure_1_0;
    });
  }, items1);
};
