// Module ID: 13209
// Function ID: 13210
// Name: useConjureAppSlotsLeft
// Dependencies: [19, 6979, 11054, 504, 2]
// Exports: default

// Module 13209 (useConjureAppSlotsLeft)
import get_initialized from "get initialized" /* 504 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11054 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6979 */;
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
