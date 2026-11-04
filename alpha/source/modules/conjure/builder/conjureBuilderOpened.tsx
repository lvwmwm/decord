// Module ID: 12275
// Function ID: 12276
// Name: conjureBuilderOpened
// Dependencies: [19, 6979, 504, 11051, 2]
// Exports: useTrackConjureBuilderOpened

// Module 12275 (conjureBuilderOpened)
import ConjureAnalytics from "ConjureAnalytics" /* 11051 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6979 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/conjure/builder/conjureBuilderOpened.tsx");

export function useTrackConjureBuilderOpened(projectId, entryPoint) {
  _require = projectId;
  let str = entryPoint;
  if (entryPoint === undefined) {
    str = "unknown";
  }
  let ref;
  let obj = require("get initialized");
  const items = [ref];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp2 = null != projectId && null != ConjureProjectStore.getProject(tmp);
    return tmp2;
  }, items1);
  ref = stateFromStores.useRef(null);
  const items2 = [projectId, str, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    const tmp2 = null != projectId && stateFromStores && ref.current !== tmp;
    if (tmp2) {
      ref.current = projectId;
      const obj = ConjureAnalytics;
      const result = obj.trackConjureBuilderOpened(tmp, str);
    }
  }, items2);
  return stateFromStores.useCallback((arg0) => ref.current === arg0, []);
}
