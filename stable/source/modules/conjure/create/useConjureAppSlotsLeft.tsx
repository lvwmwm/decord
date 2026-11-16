// Module ID: 13237
// Function ID: 13238
// Name: useConjureAppSlotsLeft
// Dependencies: [19, 6932, 11028, 504, 2]
// Exports: default

// Module 13237 (useConjureAppSlotsLeft)
import get_initialized from "get initialized" /* 504 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11028 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6932 */;
import size from "module_2" /* 2 */;

let maxProjects;

const result = size.fileFinishedImporting("modules/conjure/create/useConjureAppSlotsLeft.tsx");

export default function useConjureAppSlotsLeft() {
  const effect = react.useEffect(() => {
    const obj = ConjureActionCreators;
    const projectLimit = obj.fetchProjectLimit();
  }, []);
  let obj = get_initialized;
  const items = [ConjureProjectStore];
  return obj.useStateFromStores(items, () => {
    maxProjects = maxProjects.getMaxProjects();
    let bound = null;
    if (null != maxProjects) {
      bound = null;
      if (maxProjects.hasFetchedOwnedProjects()) {
        const _Math = Math;
        bound = Math.max(0, maxProjects - obj.getOwnedProjects().length);
      }
    }
    return bound;
  });
};
