// Module ID: 15627
// Function ID: 15628
// Name: useCommonTriggerPoint
// Dependencies: [32, 19, 5354, 504, 2]
// Exports: useCommonTriggerPoint

// Module 15627 (useCommonTriggerPoint)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 5354 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/experiments/trigger_points/useCommonTriggerPoint.tsx");

export function useCommonTriggerPoint(OpenNitroTriggerPoint) {
  const f109981 = () => {
    const items = [authStore.getAllUserExperimentDescriptors(), authStore.getGuildExperiments()];
    return items;
  };
  _require = OpenNitroTriggerPoint;
  let items = [ExperimentStore];
  const obj = require("get initialized");
  const items1 = [OpenNitroTriggerPoint, , ];
  [arr2[1], arr2[2]] = obj.useStateFromStoresArray(items, f109981);
  _slicedToArray(obj.useStateFromStoresArray(items, f109981), 2);
  const effect = react.useEffect(() => {
    OpenNitroTriggerPoint.trigger();
  }, items1);
}
