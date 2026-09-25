// Module ID: 12981
// Function ID: 12982
// Name: useCommonTriggerPoint
// Dependencies: [32, 19, 4746, 504, 2]
// Exports: useCommonTriggerPoint

// Module 12981 (useCommonTriggerPoint)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 4746 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/useCommonTriggerPoint.tsx");

export const useCommonTriggerPoint = function useCommonTriggerPoint(OpenNitroTriggerPoint) {
  _require = OpenNitroTriggerPoint;
  let items = [ExperimentStore];
  const obj = require("initialize");
  const items1 = [OpenNitroTriggerPoint, , ];
  [arr2[1], arr2[2]] = require("initialize").useStateFromStoresArray(items, () => {
    const items = [authStore.getAllUserExperimentDescriptors(), authStore.getGuildExperiments()];
    return items;
  });
  const effect = noop.useEffect(() => {
    OpenNitroTriggerPoint.trigger();
  }, items1);
};
