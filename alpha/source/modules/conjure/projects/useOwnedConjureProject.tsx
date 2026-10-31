// Module ID: 14162
// Function ID: 14163
// Name: useOwnedConjureProject
// Dependencies: [6844, 12214, 504, 2]
// Exports: default

// Module 14162 (useOwnedConjureProject)
import useIsOwnedConjureApplicationDefault from "useIsOwnedConjureApplication" /* 12214 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let result = size.fileFinishedImporting("modules/conjure/projects/useOwnedConjureProject.tsx");

export default function useOwnedConjureProject(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  const tmp = useIsOwnedConjureApplicationDefault(arg0, arg1);
  importDefault = tmp;
  const items = [ConjureProjectStore];
  const items1 = [tmp, arg0];
  const obj = require("get initialized");
  const obj2 = {
    isOwned: tmp,
    project: obj.useStateFromStores(items, () => {
      let result = null;
      if (true === closure_1) {
        result = null;
        if (null != closure_0) {
          result = ConjureProjectStore.findProjectByApplicationId(tmp2);
        }
      }
      return result;
    }, items1)
  };
  return obj2;
};
