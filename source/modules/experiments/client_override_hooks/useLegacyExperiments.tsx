// Module ID: 10450
// Function ID: 80687
// Name: bucketVariantType
// Dependencies: []
// Exports: getLegacyExperiments, useLegacyExperiments

// Module 10450 (bucketVariantType)
function bucketVariantType(arg0) {
  if (arg0 === constants.CONTROL) {
    let TREATMENT = arg1(dependencyMap[4]).Variation_Type.CONTROL;
  } else if (arg0 === constants.NOT_ELIGIBLE) {
    TREATMENT = arg1(dependencyMap[4]).Variation_Type.UNSPECIFIED;
  } else {
    TREATMENT = arg1(dependencyMap[4]).Variation_Type.TREATMENT;
  }
  return TREATMENT;
}
function parseRegisteredExperiments(registeredExperiments) {
  let length;
  const obj = {};
  const arg1 = obj;
  function _loop(type) {
    let buckets;
    let obj = type;
    obj = { system: obj(closure_2[5]).ExperimentSystem.LEGACY };
    let str = "guild";
    if (type.type === constants.USER) {
      str = "user";
    }
    obj.kind = str;
    obj.name = closure_1;
    ({ title: obj.title, buckets } = type);
    obj.variants = buckets.map((bucket) => {
      const obj = { id: bucket.valueOf() };
      if ("object" === typeof bucket.description) {
        let experimentBucketName = bucket.description[arg1];
      } else {
        experimentBucketName = callback(closure_2[6]).getExperimentBucketName(bucket);
        const obj2 = callback(closure_2[6]);
      }
      obj.label = experimentBucketName;
      obj.shortLabel = callback(closure_2[6]).getExperimentBucketName(bucket);
      obj.type = callback2(bucket);
      return obj;
    });
    obj[closure_1] = obj;
  }
  const entries = Object.entries(registeredExperiments);
  let num = 0;
  if (0 < entries.length) {
    do {
      let tmp = closure_3;
      let tmp2 = closure_3(entries[num], 2);
      closure_1 = tmp2[0];
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
      let tmp = closure_3;
      let tmp2 = closure_3(entries[num], 2);
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
let closure_3 = importDefault(dependencyMap[0]);
const useMemo = arg1(dependencyMap[1]).useMemo;
let closure_5 = importDefault(dependencyMap[2]);
({ ExperimentBuckets: closure_6, ExperimentTypes: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/experiments/client_override_hooks/useLegacyExperiments.tsx");

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
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => store.getRegisteredExperiments());
  const arg1 = stateFromStoresObject;
  const items1 = [closure_5];
  const stateFromStoresObject1 = arg1(dependencyMap[7]).useStateFromStoresObject(items1, () => store.getAllExperimentOverrideDescriptors());
  const importDefault = stateFromStoresObject1;
  obj = { experiments: useMemo(() => callback(stateFromStoresObject), items2), overridesInfo: useMemo(() => callback2(stateFromStoresObject1), items3) };
  const items2 = [stateFromStoresObject];
  const items3 = [stateFromStoresObject1];
  return obj;
};
