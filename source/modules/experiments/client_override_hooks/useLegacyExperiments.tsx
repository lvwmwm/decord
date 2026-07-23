// Module ID: 10461
// Function ID: 80750
// Name: bucketVariantType
// Dependencies: [57, 31, 4044, 4045, 7784, 4052, 7782, 566, 2]
// Exports: getLegacyExperiments, useLegacyExperiments

// Module 10461 (bucketVariantType)
import _slicedToArray from "_slicedToArray";
import { useMemo } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ExperimentBuckets from "ExperimentBuckets";

let closure_6;
let closure_7;
const require = arg1;
function bucketVariantType(arg0) {
  if (arg0 === constants.CONTROL) {
    let TREATMENT = require(7784) /* _callSuper */.Variation_Type.CONTROL;
  } else if (arg0 === constants.NOT_ELIGIBLE) {
    TREATMENT = require(7784) /* _callSuper */.Variation_Type.UNSPECIFIED;
  } else {
    TREATMENT = require(7784) /* _callSuper */.Variation_Type.TREATMENT;
  }
  return TREATMENT;
}
function parseRegisteredExperiments(registeredExperiments) {
  let length;
  let obj = {};
  function _loop(type) {
    let buckets;
    let closure_0 = type;
    obj = { system: obj(outer1_2[5]).ExperimentSystem.LEGACY };
    let str = "guild";
    if (type.type === outer1_7.USER) {
      str = "user";
    }
    obj.kind = str;
    obj.name = closure_1;
    ({ title: obj.title, buckets } = type);
    obj.variants = buckets.map((bucket) => {
      const obj = { id: bucket.valueOf() };
      if ("object" === typeof type.description) {
        let experimentBucketName = type.description[arg1];
      } else {
        experimentBucketName = outer2_1(outer2_2[6]).getExperimentBucketName(bucket);
        const obj2 = outer2_1(outer2_2[6]);
      }
      obj.label = experimentBucketName;
      obj.shortLabel = outer2_1(outer2_2[6]).getExperimentBucketName(bucket);
      obj.type = outer2_8(bucket);
      return obj;
    });
    closure_0[closure_1] = obj;
  }
  const entries = Object.entries(registeredExperiments);
  let num = 0;
  if (0 < entries.length) {
    do {
      let tmp = callback;
      let tmp2 = callback(entries[num], 2);
      let importDefault = tmp2[0];
      let _loopResult = _loop(tmp2[1]);
      num = num + 1;
      length = entries.length;
    } while (num < length);
  }
  return obj;
}
function getLegacyOverridesInfo(allExperimentOverrideDescriptors) {
  let length;
  let obj = {};
  const entries = Object.entries(allExperimentOverrideDescriptors);
  let num = 0;
  if (0 < entries.length) {
    do {
      let tmp = callback;
      let tmp2 = callback(entries[num], 2);
      let first = tmp2[0];
      let tmp4 = tmp2[1];
      obj = { experimentId: first };
      let bucket = tmp4.bucket;
      obj.variantId = bucket.valueOf();
      obj.originalDescriptor = tmp4;
      obj[first] = obj;
      num = num + 1;
      length = entries.length;
    } while (num < length);
  }
  return obj;
}
({ ExperimentBuckets: closure_6, ExperimentTypes: closure_7 } = ExperimentBuckets);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/experiments/client_override_hooks/useLegacyExperiments.tsx");

export { parseRegisteredExperiments };
export { getLegacyOverridesInfo };
export const getLegacyExperiments = function getLegacyExperiments() {
  const registeredExperiments = store.getRegisteredExperiments();
  const obj = {};
  const allExperimentOverrideDescriptors = store.getAllExperimentOverrideDescriptors();
  obj.experiments = parseRegisteredExperiments(registeredExperiments);
  obj.overridesInfo = getLegacyOverridesInfo(allExperimentOverrideDescriptors);
  return obj;
};
export const useLegacyExperiments = function useLegacyExperiments() {
  let obj = stateFromStoresObject(566);
  const items = [_isNativeReflectConstruct];
  stateFromStoresObject = obj.useStateFromStoresObject(items, () => outer1_5.getRegisteredExperiments());
  const items1 = [_isNativeReflectConstruct];
  const stateFromStoresObject1 = stateFromStoresObject(566).useStateFromStoresObject(items1, () => outer1_5.getAllExperimentOverrideDescriptors());
  obj = { experiments: useMemo(() => outer1_9(stateFromStoresObject), items2), overridesInfo: useMemo(() => outer1_10(stateFromStoresObject1), items3) };
  items2 = [stateFromStoresObject];
  items3 = [stateFromStoresObject1];
  return obj;
};
