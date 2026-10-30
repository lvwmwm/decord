// Module ID: 13187
// Function ID: 13188
// Name: useExperimentAssignments
// Dependencies: [32, 5233, 1247, 504, 5238, 2]
// Exports: getExperimentServerAssignment, useExperimentAssignment, useExperimentServerAssignment

// Module 13187 (useExperimentAssignments)
import ExperimentManager from "ExperimentManager" /* 5238 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 5233 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1247 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/experiments/client_override_hooks/useExperimentAssignments.tsx");

export function useExperimentAssignment(experiment, maybeExtractIdResult) {
  _require = experiment;
  dependencyMap = maybeExtractIdResult;
  const items = [ExperimentStore, ApexExperimentStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let variantId;
    if (experiment.system === ExperimentManager.ExperimentSystem.LEGACY) {
      const userExperimentDescriptor = ExperimentStore.getUserExperimentDescriptor(tmp.name);
      let bucket;
      if (userExperimentDescriptor != null) {
        bucket = userExperimentDescriptor.bucket;
      }
      variantId = bucket;
    } else {
      const assignment = ApexExperimentStore.getAssignment(tmp.kind, dependencyMap, tmp.name);
      if (assignment != null) {
        variantId = assignment.variantId;
      }
    }
    return variantId;
  });
}
export function getExperimentServerAssignment(system, id) {
  let obj;
  let obj2;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [ExperimentStore, ApexExperimentStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  let tmp5 = null;
  _slicedToArray(tmp, 2);
  if (null != system) {
    let loadedUserExperiment;
    if (system.system === ExperimentManager.ExperimentSystem.LEGACY) {
      loadedUserExperiment = obj.getLoadedUserExperiment(system.name);
    } else {
      loadedUserExperiment = obj2.getServerAssignment(system.kind, id, system.name);
    }
    tmp5 = loadedUserExperiment;
  }
  return tmp5;
}
export function useExperimentServerAssignment(experiment, maybeExtractIdResult) {
  _require = experiment;
  dependencyMap = maybeExtractIdResult;
  const obj = require("get initialized");
  let items = [ExperimentStore, ApexExperimentStore];
  return obj.useStateFromStores(items, () => {
    let obj;
    let obj2;
    const items = [ExperimentStore, ApexExperimentStore];
    [obj, obj2] = items;
    let tmp4 = null;
    _slicedToArray(items, 2);
    const tmp2 = dependencyMap;
    if (null != experiment) {
      let loadedUserExperiment;
      if (experiment.system === ExperimentManager.ExperimentSystem.LEGACY) {
        loadedUserExperiment = obj.getLoadedUserExperiment(tmp.name);
      } else {
        loadedUserExperiment = obj2.getServerAssignment(tmp.kind, tmp2, tmp.name);
      }
      tmp4 = loadedUserExperiment;
    }
    return tmp4;
  });
}
