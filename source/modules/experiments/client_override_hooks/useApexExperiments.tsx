// Module ID: 10451
// Function ID: 80699
// Name: makeClientVariant
// Dependencies: []
// Exports: getApexExperiments, useApexExperiments

// Module 10451 (makeClientVariant)
function makeClientVariant(id) {
  return { id, label: "Variant " + id, shortLabel: "Variant " + id, type: arg1(dependencyMap[3]).Variation_Type.UNSPECIFIED };
}
function mergeApexExperiments(experimentsMetadata, registeredExperiments) {
  let length;
  let tmp6;
  let tmp7;
  let obj = {};
  const dependencyMap = obj;
  function _loop() {
    const variants = closure_3.variants;
    const mapped = variants.map((id) => ({ id: id.id, label: "Variant " + id.id + ": " + id.label, shortLabel: "Variant " + id.id, type: id.type }));
    const arg1 = new Set(mapped.map((id) => id.id));
    if (null != arg1[closure_2]) {
      const _Object = Object;
      const keys = Object.keys(tmp2.variations);
      const mapped1 = keys.map((arg0) => Number(arg0));
      const found = mapped1.filter((arg0) => !set.has(arg0));
      let mapped2 = found.map(closure_6);
    } else {
      mapped2 = [];
    }
    const obj = { system: arg1(obj[4]).ExperimentSystem.APEX, kind: arg1(obj[5]).UnitTypeToKind[closure_3.unitType], name: closure_3.name, title: closure_3.title };
    const items = [...mapped2];
    obj.variants = items.sort((id, id2) => id.id - id2.id);
    obj[closure_2] = obj;
  }
  const entries = Object.entries(experimentsMetadata);
  let num = 0;
  if (0 < entries.length) {
    do {
      let tmp = closure_2;
      let tmp2 = closure_2(entries[num], 2);
      closure_2 = tmp2[0];
      closure_3 = tmp2[1];
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
      let tmp8 = registeredExperiments;
      let tmp9 = dependencyMap;
      obj.system = registeredExperiments(dependencyMap[4]).ExperimentSystem.APEX;
      ({ kind: obj2.kind, name: obj2.name, name: obj2.title } = tmp7);
      let _Object = Object;
      let keys = Object.keys(tmp7.variations);
      obj.variants = keys.map((arg0) => callback(Number(arg0)));
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
      let tmp = closure_2;
      let tmp2 = closure_2(entries[num], 2);
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
let closure_2 = importDefault(dependencyMap[0]);
({ useEffect: closure_3, useMemo: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/experiments/client_override_hooks/useApexExperiments.tsx");

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
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => store.getExperimentsMetadata());
  const arg1 = stateFromStores;
  const items1 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[7]).useStateFromStores(items1, () => store.getRegisteredExperiments());
  const dependencyMap = stateFromStores1;
  const items2 = [stateFromStores, stateFromStores1];
  const obj2 = arg1(dependencyMap[7]);
  const tmp4 = callback3(() => callback(stateFromStores, stateFromStores1), items2);
  const items3 = [closure_5];
  const stateFromStores2 = arg1(dependencyMap[7]).useStateFromStores(items3, () => store.getClientOverrides());
  let closure_2 = stateFromStores2;
  obj = { experiments: tmp4, overridesInfo: callback3(() => callback2(stateFromStores2), items4) };
  const items4 = [stateFromStores2];
  return obj;
};
