// Module ID: 12382
// Function ID: 96226
// Name: useCommonTriggerPoint
// Dependencies: [57, 31, 4044, 566, 2]
// Exports: useCommonTriggerPoint

// Module 12382 (useCommonTriggerPoint)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/experiments/trigger_points/useCommonTriggerPoint.tsx");

export const useCommonTriggerPoint = function useCommonTriggerPoint(OpenNitroTriggerPoint) {
  const _require = OpenNitroTriggerPoint;
  let items = [_isNativeReflectConstruct];
  const obj = _require(566);
  const items1 = [OpenNitroTriggerPoint, , ];
  [arr2[1], arr2[2]] = callback(_require(566).useStateFromStoresArray(items, () => {
    const items = [outer1_4.getAllUserExperimentDescriptors(), outer1_4.getGuildExperiments()];
    return items;
  }), 2);
  const effect = React.useEffect(() => {
    OpenNitroTriggerPoint.trigger();
  }, items1);
};
