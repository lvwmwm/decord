// Module ID: 11017
// Function ID: 11018
// Name: useApexExperiments
// Dependencies: [32, 19, 1235, 7319, 4755, 1438, 11018, 504, 2]
// Exports: getApexExperiments, useApexExperiments

// Module 11017 (useApexExperiments)
import apex_ApexTypes from "apex/ApexTypes" /* 1438 */;
import ExperimentManager from "ExperimentManager" /* 4755 */;
import experiment from "experiment" /* 7319 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1235 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set, variants;

let c3;
let closure_4;
function makeClientVariant(id) {
  const obj = { id, label: "Variant " + id, shortLabel: "Variant " + id, type: experiment.Variation_Type.UNSPECIFIED };
  return obj;
}
function mergeApexExperiments(experimentsMetadata, registeredExperiments) {
  let closure_3;
  let keys;
  let tmp12;
  let tmp14;
  let tmp3;
  _require = registeredExperiments;
  let obj = {};
  function _loop() {
    let items;
    let mapped2;
    variants = variants.variants;
    const mapped = variants.map((id) => {
      obj = { id: id.id, label: "Variant " + id.id + ": " + id.label, shortLabel: "Variant " + id.id, type: id.type };
      return obj;
    });
    set = new Set(mapped.map((id) => id.id));
    const tmp3 = _slicedToArray;
    if (null != registeredExperiments[_slicedToArray]) {
      const _Object = Object;
      const keys = Object.keys(tmp4.variations);
      const mapped1 = keys.map((item) => Number(item));
      const found = mapped1.filter((item) => !set.has(item));
      mapped2 = found.map(makeClientVariant);
    } else {
      mapped2 = [];
    }
    obj = { system: ExperimentManager.ExperimentSystem.APEX, kind: apex_ApexTypes.UnitTypeToKind[tmp.unitType], name: tmp.name, title: tmp.title, variants: items.sort((id, id2) => id.id - id2.id) };
    items = [...mapped2];
    obj[tmp3] = obj;
  }
  const entries = Object.entries(experimentsMetadata);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp4 = _slicedToArray;
    let tmp5 = _slicedToArray(tmp3, 2);
    [_slicedToArray, closure_3] = tmp5;
    let _loopResult = _loop();
    continue;
  }
  const entries1 = Object.entries(registeredExperiments);
  const tmp8 = entries1[Symbol.iterator]();
  while (tmp8 !== undefined) {
    let tmp11 = _slicedToArray(tmp9, 2);
    [tmp12, tmp14] = tmp11;
    if (null == obj[tmp12]) {
      let obj3 = {
        system: require("ExperimentManager").ExperimentSystem.APEX,
        kind: null,
        name: null,
        title: null,
        variants: keys.map((item) => {
              const NumberResult = Number(item);
              obj = { id: NumberResult, label: "Variant " + NumberResult, shortLabel: "Variant " + NumberResult, type: registeredExperiments(obj[3]).Variation_Type.UNSPECIFIED };
              return obj;
            })
      };
      ({ kind: obj2.kind, name: obj2.name, name: obj2.title } = tmp14);
      let _Object = Object;
      keys = Object.keys(tmp14.variations);
      obj[tmp13] = obj3;
    }
    continue;
  }
  return obj;
}
function getApexExperimentOverridesInfo(clientOverrides) {
  let tmp6;
  let tmp7;
  const obj = {};
  const entries = Object.entries(clientOverrides);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let obj2 = { experimentId: tmp6, variantId: tmp7.variantId, originalDescriptor: tmp7 };
    obj[tmp6] = obj2;
    continue;
  }
  return obj;
}
({ useEffect: c3, useMemo: closure_4 } = react);
const result = size.fileFinishedImporting("modules/experiments/client_override_hooks/useApexExperiments.tsx");

export { mergeApexExperiments };
export { getApexExperimentOverridesInfo };
export const getApexExperiments = function getApexExperiments() {
  let experimentsMetadata;
  const obj = { experiments: mergeApexExperiments(experimentsMetadata, ApexExperimentStore.getRegisteredExperiments()), overridesInfo: getApexExperimentOverridesInfo(ApexExperimentStore.getClientOverrides()) };
  experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
  return obj;
};
export const useApexExperiments = function useApexExperiments() {
  let items4;
  let stateFromStores;
  let stateFromStores1;
  closure_3(() => {
    const obj = stateFromStores(stateFromStores1[6]);
    const apexExperimentsMetadata = obj.fetchApexExperimentsMetadata(stateFromStores(stateFromStores1[3]).Experiment_Surface.APP);
  }, []);
  let obj = stateFromStores(stateFromStores1[7]);
  const items = [ApexExperimentStore];
  stateFromStores = obj.useStateFromStores(items, () => ApexExperimentStore.getExperimentsMetadata());
  const items1 = [ApexExperimentStore];
  const obj2 = stateFromStores(stateFromStores1[7]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => ApexExperimentStore.getRegisteredExperiments());
  const items2 = [stateFromStores, stateFromStores1];
  const items3 = [ApexExperimentStore];
  const tmp4 = closure_4(() => mergeApexExperiments(stateFromStores, stateFromStores1), items2);
  const obj3 = stateFromStores(stateFromStores1[7]);
  const stateFromStores2 = obj3.useStateFromStores(items3, () => ApexExperimentStore.getClientOverrides());
  const obj4 = { experiments: tmp4, overridesInfo: closure_4(() => getApexExperimentOverridesInfo(stateFromStores2), items4) };
  items4 = [stateFromStores2];
  return obj4;
};
