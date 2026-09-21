// Module ID: 12064
// Function ID: 12065
// Name: useExperimentAssignments
// Dependencies: [32, 4671, 1235, 504, 4676, 2]
// Exports: getExperimentServerAssignment, useExperimentAssignment, useExperimentServerAssignment

// Module 12064 (useExperimentAssignments)
import ExperimentManager from "ExperimentManager" /* 4676 */;
import _slicedToArray from "module_32" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 4671 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1235 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/client_override_hooks/useExperimentAssignments.tsx");

export const useExperimentAssignment = function useExperimentAssignment(experiment, maybeExtractIdResult) {
  _require = experiment;
  dependencyMap = maybeExtractIdResult;
  const items = [ExperimentStore, ApexExperimentStore];
  return require("initialize").useStateFromStores(items, () => {
    if (experiment.system === ExperimentManager.ExperimentSystem.LEGACY) {
      const userExperimentDescriptor = ExperimentStore.getUserExperimentDescriptor(tmp.name);
      let bucket;
      if (userExperimentDescriptor != null) {
        bucket = userExperimentDescriptor.bucket;
      }
      let variantId = bucket;
    } else {
      const assignment = ApexExperimentStore.getAssignment(tmp.kind, closure_1, tmp.name);
      if (assignment != null) {
        variantId = assignment.variantId;
      }
    }
    return variantId;
  });
};
export const getExperimentServerAssignment = function getExperimentServerAssignment(name, id) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [ExperimentStore, ApexExperimentStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  if (null == name) {
    return null;
  } else if (name.system === ExperimentManager.ExperimentSystem.LEGACY) {
    name = name.name;
    let loadedUserExperiment = obj.getLoadedUserExperiment(name);
  } else {
    loadedUserExperiment = obj2.getServerAssignment(name.kind, id, name.name);
  }
};
export const useExperimentServerAssignment = function useExperimentServerAssignment(experiment, maybeExtractIdResult) {
  _require = experiment;
  dependencyMap = maybeExtractIdResult;
  let items = [ExperimentStore, ApexExperimentStore];
  return require("initialize").useStateFromStores(items, () => {
    let name = closure_0;
    const items = [ExperimentStore, ApexExperimentStore];
    [obj, obj2] = items;
    if (null == closure_0) {
      return null;
    } else if (name.system === ExperimentManager.ExperimentSystem.LEGACY) {
      name = name.name;
      let loadedUserExperiment = obj.getLoadedUserExperiment(name);
    } else {
      loadedUserExperiment = obj2.getServerAssignment(name.kind, closure_1, name.name);
    }
  });
};
