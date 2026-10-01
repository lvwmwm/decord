// Module ID: 11016
// Function ID: 11017
// Name: useLegacyExperiments
// Dependencies: [32, 19, 4750, 4751, 7319, 4755, 7317, 504, 2]
// Exports: getLegacyExperiments, useLegacyExperiments

// Module 11016 (useLegacyExperiments)
import react from "react" /* 19 */;
import ExperimentManager from "ExperimentManager" /* 4755 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 4750 */;
import ExperimentConstants from "ExperimentConstants" /* 4751 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
function parseRegisteredExperiments(stateFromStoresObject) {
  let obj = {};
  function _loop(type) {
    let buckets;
    let str;
    let closure_0 = type;
    obj = {
      system: ExperimentManager.ExperimentSystem.LEGACY,
      kind: str,
      name: tmp2,
      title: null,
      variants: buckets.map((item, index) => {
        let TREATMENT;
        let experimentBucketName;
        let obj2;
        obj = { id: item.valueOf(), label: experimentBucketName, shortLabel: obj2.getExperimentBucketName(item), type: TREATMENT };
        if (typeof description.description === "object") {
          experimentBucketName = tmp.description[index];
        } else {
          const obj3 = closure_2_1(closure_2_2[6]);
          experimentBucketName = obj3.getExperimentBucketName(item);
        }
        obj2 = closure_2_1(closure_2_2[6]);
        if (item === constants.CONTROL) {
          TREATMENT = closure_2_0(closure_2_2[4]).Variation_Type.CONTROL;
        } else if (item === tmp4.NOT_ELIGIBLE) {
          TREATMENT = closure_2_0(closure_2_2[4]).Variation_Type.UNSPECIFIED;
        } else {
          TREATMENT = closure_2_0(closure_2_2[4]).Variation_Type.TREATMENT;
        }
        return obj;
      })
    };
    const tmp = obj;
    str = "guild";
    if (type.type === metroImportDefault.USER) {
      str = "user";
    }
    ({ title: obj.title, buckets } = type);
    tmp[closure_1] = obj;
  }
  const entries = Object.entries(stateFromStoresObject);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp4 = _slicedToArray;
    let tmp5 = _slicedToArray(tmp3, 2);
    let closure_1 = tmp5[0];
    let _loopResult = _loop(tmp5[1]);
    continue;
  }
  return obj;
}
function getLegacyOverridesInfo(stateFromStoresObject1) {
  let bucket;
  let tmp6;
  let tmp7;
  const obj = {};
  const entries = Object.entries(stateFromStoresObject1);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let obj2 = { experimentId: tmp6, variantId: bucket.valueOf(), originalDescriptor: tmp7 };
    bucket = tmp7.bucket;
    obj[tmp6] = obj2;
    continue;
  }
  return obj;
}
const useMemo = react.useMemo;
({ ExperimentBuckets: metroRequire, ExperimentTypes: metroImportDefault } = ExperimentConstants);
const result = size.fileFinishedImporting("modules/experiments/client_override_hooks/useLegacyExperiments.tsx");

export { parseRegisteredExperiments };
export { getLegacyOverridesInfo };
export const getLegacyExperiments = function getLegacyExperiments() {
  let allExperimentOverrideDescriptors;
  const registeredExperiments = ExperimentStore.getRegisteredExperiments();
  const obj = { experiments: parseRegisteredExperiments(registeredExperiments), overridesInfo: getLegacyOverridesInfo(allExperimentOverrideDescriptors) };
  allExperimentOverrideDescriptors = ExperimentStore.getAllExperimentOverrideDescriptors();
  return obj;
};
export const useLegacyExperiments = function useLegacyExperiments() {
  let items2;
  let items3;
  let stateFromStoresObject;
  const items = [ExperimentStore];
  const obj = stateFromStoresObject(504);
  stateFromStoresObject = obj.useStateFromStoresObject(items, () => ExperimentStore.getRegisteredExperiments());
  const items1 = [ExperimentStore];
  const obj2 = stateFromStoresObject(504);
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items1, () => ExperimentStore.getAllExperimentOverrideDescriptors());
  const obj3 = { experiments: useMemo(() => parseRegisteredExperiments(stateFromStoresObject), items2), overridesInfo: useMemo(() => getLegacyOverridesInfo(stateFromStoresObject1), items3) };
  items2 = [stateFromStoresObject];
  items3 = [stateFromStoresObject1];
  return obj3;
};
