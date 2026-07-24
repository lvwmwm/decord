// Module ID: 10982
// Function ID: 85345
// Name: getExperimentServerAssignment
// Dependencies: [57, 4044, 1188, 566, 4052, 2]
// Exports: useExperimentAssignment, useExperimentServerAssignment

// Module 10982 (getExperimentServerAssignment)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
function getExperimentServerAssignment(arg0, id) {
  let name = arg0;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [_isNativeReflectConstruct, closure_4];
    tmp = items;
  }
  const tmp4 = callback(tmp, 2);
  const first = tmp4[0];
  if (null == name) {
    return null;
  } else if (name.system === require(4052) /* trackExposureToExperiment */.ExperimentSystem.LEGACY) {
    name = name.name;
    let loadedUserExperiment = first.getLoadedUserExperiment(name);
  } else {
    loadedUserExperiment = obj2.getServerAssignment(name.kind, id, name.name);
  }
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/experiments/client_override_hooks/useExperimentAssignments.tsx");

export const useExperimentAssignment = function useExperimentAssignment(experiment, arg1) {
  const _require = experiment;
  const dependencyMap = arg1;
  const items = [_isNativeReflectConstruct, closure_4];
  return _require(566).useStateFromStores(items, () => {
    if (experiment.system === experiment(table[4]).ExperimentSystem.LEGACY) {
      const userExperimentDescriptor = outer1_3.getUserExperimentDescriptor(experiment.name);
      let bucket;
      if (null != userExperimentDescriptor) {
        bucket = userExperimentDescriptor.bucket;
      }
      let variantId = bucket;
    } else {
      const assignment = outer1_4.getAssignment(experiment.kind, table, experiment.name);
      if (null != assignment) {
        variantId = assignment.variantId;
      }
    }
    return variantId;
  });
};
export { getExperimentServerAssignment };
export const useExperimentServerAssignment = function useExperimentServerAssignment(experiment, arg1) {
  const _require = experiment;
  const dependencyMap = arg1;
  let items = [_isNativeReflectConstruct, closure_4];
  return _require(566).useStateFromStores(items, () => {
    const items = [outer1_3, outer1_4];
    return outer1_5(closure_0, closure_1, items);
  });
};
