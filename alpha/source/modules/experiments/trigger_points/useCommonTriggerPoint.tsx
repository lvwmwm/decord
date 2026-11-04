// Module ID: 15575
// Function ID: 15576
// Name: useCommonTriggerPoint
// Dependencies: [32, 19, 5362, 504, 2]
// Exports: useCommonTriggerPoint

// Module 15575 (useCommonTriggerPoint)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 5362 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/experiments/trigger_points/useCommonTriggerPoint.tsx");

export function useCommonTriggerPoint(OpenNitroTriggerPoint) {
  const f109105 = () => {
    const items = [authStore.getAllUserExperimentDescriptors(), authStore.getGuildExperiments()];
    return items;
  };
  _require = OpenNitroTriggerPoint;
  let items = [ExperimentStore];
  const obj = require("get initialized");
  const items1 = [OpenNitroTriggerPoint, , ];
  [arr2[1], arr2[2]] = obj.useStateFromStoresArray(items, f109105);
  _slicedToArray(obj.useStateFromStoresArray(items, f109105), 2);
  const effect = react.useEffect(() => {
    OpenNitroTriggerPoint.trigger();
  }, items1);
}
