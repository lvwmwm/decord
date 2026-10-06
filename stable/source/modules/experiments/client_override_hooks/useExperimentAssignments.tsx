// Module ID: 11162
// Function ID: 11163
// Name: useExperimentAssignments
// Dependencies: [32, 4752, 1247, 558, 576, 4757, 504, 2]
// Exports: getExperimentServerAssignment

// Module 11162 (useExperimentAssignments)
import ExperimentManager from "ExperimentManager" /* 4757 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 4752 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1247 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((kind, arg1) => {
  let closure_1;
  let first;
  _require = kind;
  dependencyMap = arg1;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ExperimentStore, ];
    items[1] = ApexExperimentStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === kind.kind) {
    if (cResult[2] === kind.name) {
      if (cResult[3] === kind.system) {
        let tmp7;
        if (cResult[4] === arg1) {
          tmp7 = cResult[5];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStores(first, tmp7);
      }
    }
  }
  const fn = function c() {
    let variantId;
    if (kind.system === ExperimentManager.ExperimentSystem.LEGACY) {
      const userExperimentDescriptor = ExperimentStore.getUserExperimentDescriptor(tmp.name);
      let bucket;
      if (userExperimentDescriptor != null) {
        bucket = userExperimentDescriptor.bucket;
      }
      variantId = bucket;
    } else {
      const assignment = ApexExperimentStore.getAssignment(tmp.kind, closure_1, tmp.name);
      if (assignment != null) {
        variantId = assignment.variantId;
      }
    }
    return variantId;
  };
  cResult[1] = kind.kind;
  cResult[2] = kind.name;
  cResult[3] = kind.system;
  cResult[4] = arg1;
  cResult[5] = fn;
  tmp7 = fn;
}) : ((arg0, arg1) => {
  let closure_1;
  let system;
  _require = arg0;
  dependencyMap = arg1;
  const items = [ExperimentStore, ApexExperimentStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let variantId;
    if (system.system === ExperimentManager.ExperimentSystem.LEGACY) {
      const userExperimentDescriptor = ExperimentStore.getUserExperimentDescriptor(tmp.name);
      let bucket;
      if (userExperimentDescriptor != null) {
        bucket = userExperimentDescriptor.bucket;
      }
      variantId = bucket;
    } else {
      const assignment = ApexExperimentStore.getAssignment(tmp.kind, closure_1, tmp.name);
      if (assignment != null) {
        variantId = assignment.variantId;
      }
    }
    return variantId;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_1;
  let first;
  let system;
  _require = arg0;
  dependencyMap = arg1;
  const tmp = _require;
  let tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ExperimentStore, ];
    items[1] = ApexExperimentStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp7;
    if (cResult[2] === arg1) {
      tmp7 = cResult[3];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp7);
  }
  const fn = function c() {
    let obj;
    let obj2;
    const items = [ExperimentStore, ApexExperimentStore];
    [obj, obj2] = items;
    let tmp4 = null;
    _slicedToArray(items, 2);
    const tmp2 = closure_1;
    if (null != system) {
      let loadedUserExperiment;
      if (system.system === ExperimentManager.ExperimentSystem.LEGACY) {
        loadedUserExperiment = obj.getLoadedUserExperiment(tmp.name);
      } else {
        loadedUserExperiment = obj2.getServerAssignment(tmp.kind, tmp2, tmp.name);
      }
      tmp4 = loadedUserExperiment;
    }
    return tmp4;
  };
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  tmp7 = fn;
}) : ((arg0, arg1) => {
  let closure_1;
  let system;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("get initialized");
  let items = [ExperimentStore, ApexExperimentStore];
  return obj.useStateFromStores(items, () => {
    let obj;
    let obj2;
    const items = [ExperimentStore, ApexExperimentStore];
    [obj, obj2] = items;
    let tmp4 = null;
    _slicedToArray(items, 2);
    const tmp2 = closure_1;
    if (null != system) {
      let loadedUserExperiment;
      if (system.system === ExperimentManager.ExperimentSystem.LEGACY) {
        loadedUserExperiment = obj.getLoadedUserExperiment(tmp.name);
      } else {
        loadedUserExperiment = obj2.getServerAssignment(tmp.kind, tmp2, tmp.name);
      }
      tmp4 = loadedUserExperiment;
    }
    return tmp4;
  });
});
function getExperimentServerAssignment(system, id) {
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
const result = size.fileFinishedImporting("modules/experiments/client_override_hooks/useExperimentAssignments.tsx");

export const useExperimentAssignment = tmp2;
export { getExperimentServerAssignment };
export const useExperimentServerAssignment = tmp3;
