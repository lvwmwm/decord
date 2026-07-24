// Module ID: 10491
// Function ID: 80954
// Name: makeClientVariant
// Dependencies: [57, 31, 1188, 7875, 4052, 1429, 10492, 566, 2]
// Exports: getApexExperiments, useApexExperiments

// Module 10491 (makeClientVariant)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let closure_3;
let closure_4;
const require = arg1;
function makeClientVariant(id) {
  return { id, label: "Variant " + id, shortLabel: "Variant " + id, type: require(7875) /* _callSuper */.Variation_Type.UNSPECIFIED };
}
function mergeApexExperiments(experimentsMetadata, registeredExperiments) {
  let length;
  let tmp6;
  let tmp7;
  const _require = registeredExperiments;
  let obj = {};
  function _loop() {
    const variants = closure_3.variants;
    const mapped = variants.map((id) => ({ id: id.id, label: "Variant " + id.id + ": " + id.label, shortLabel: "Variant " + id.id, type: id.type }));
    const set = new Set(mapped.map((id) => id.id));
    if (null != set[_slicedToArray]) {
      const _Object = Object;
      const keys = Object.keys(tmp2.variations);
      const mapped1 = keys.map((arg0) => Number(arg0));
      const found = mapped1.filter((arg0) => !set.has(arg0));
      let mapped2 = found.map(outer1_6);
    } else {
      mapped2 = [];
    }
    obj = { system: callback(obj[4]).ExperimentSystem.APEX, kind: callback(obj[5]).UnitTypeToKind[closure_3.unitType], name: closure_3.name, title: closure_3.title };
    const items = [...mapped2];
    obj.variants = items.sort((id, id2) => id.id - id2.id);
    obj[_slicedToArray] = obj;
  }
  const entries = Object.entries(experimentsMetadata);
  let num = 0;
  if (0 < entries.length) {
    do {
      let tmp = callback;
      let tmp2 = callback(entries[num], 2);
      callback = tmp2[0];
      let closure_3 = tmp2[1];
      let _loopResult = _loop();
      num = num + 1;
      length = entries.length;
    } while (num < length);
  }
  const entries1 = Object.entries(registeredExperiments);
  for (let num2 = 0; num2 < entries1.length; num2 = num2 + 1) {
    let tmp4 = callback;
    let tmp5 = callback(entries1[num2], 2);
    [tmp6, tmp7] = tmp5;
    if (null == obj[tmp6]) {
      obj = {};
      let tmp8 = _require;
      let tmp9 = obj;
      obj.system = _require(obj[4]).ExperimentSystem.APEX;
      ({ kind: obj2.kind, name: obj2.name, name: obj2.title } = tmp7);
      let _Object = Object;
      let keys = Object.keys(tmp7.variations);
      obj.variants = keys.map((arg0) => outer1_6(Number(arg0)));
      obj[tmp6] = obj;
    }
  }
  return obj;
}
function getApexExperimentOverridesInfo(clientOverrides) {
  let length;
  let obj = {};
  const entries = Object.entries(clientOverrides);
  let num = 0;
  if (0 < entries.length) {
    do {
      let tmp = callback;
      let tmp2 = callback(entries[num], 2);
      let first = tmp2[0];
      let tmp4 = tmp2[1];
      obj = { experimentId: first, variantId: tmp4.variantId, originalDescriptor: tmp4 };
      obj[first] = obj;
      num = num + 1;
      length = entries.length;
    } while (num < length);
  }
  return obj;
}
({ useEffect: closure_3, useMemo: closure_4 } = result);
result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/experiments/client_override_hooks/useApexExperiments.tsx");

export { mergeApexExperiments };
export { getApexExperimentOverridesInfo };
export const getApexExperiments = function getApexExperiments() {
  const obj = {};
  const experimentsMetadata = store.getExperimentsMetadata();
  obj.experiments = mergeApexExperiments(experimentsMetadata, store.getRegisteredExperiments());
  obj.overridesInfo = getApexExperimentOverridesInfo(store.getClientOverrides());
  return obj;
};
export const useApexExperiments = function useApexExperiments() {
  callback2(() => {
    const apexExperimentsMetadata = stateFromStores(stateFromStores1[6]).fetchApexExperimentsMetadata(stateFromStores(stateFromStores1[3]).Experiment_Surface.APP);
  }, []);
  let obj = stateFromStores(stateFromStores1[7]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_5.getExperimentsMetadata());
  const items1 = [_isNativeReflectConstruct];
  stateFromStores1 = stateFromStores(stateFromStores1[7]).useStateFromStores(items1, () => outer1_5.getRegisteredExperiments());
  const items2 = [stateFromStores, stateFromStores1];
  const obj2 = stateFromStores(stateFromStores1[7]);
  const tmp4 = callback3(() => outer1_7(stateFromStores, stateFromStores1), items2);
  const items3 = [_isNativeReflectConstruct];
  const stateFromStores2 = stateFromStores(stateFromStores1[7]).useStateFromStores(items3, () => outer1_5.getClientOverrides());
  obj = { experiments: tmp4, overridesInfo: callback3(() => outer1_8(stateFromStores2), items4) };
  items4 = [stateFromStores2];
  return obj;
};
