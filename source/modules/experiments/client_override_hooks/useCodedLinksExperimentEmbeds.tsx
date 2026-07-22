// Module ID: 10450
// Function ID: 80689
// Name: canSeeExperimentEmbeds
// Dependencies: []
// Exports: useCodedLinksExperimentEmbeds

// Module 10450 (canSeeExperimentEmbeds)
function canSeeExperimentEmbeds() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [closure_4];
    tmp = items;
  }
  const first = callback(tmp, 1)[0];
  const currentUser = first.getCurrentUser();
  let isStaffResult;
  if (null != currentUser) {
    isStaffResult = currentUser.isStaff();
  }
  if (!isStaffResult) {
    const currentUser1 = first.getCurrentUser();
    let isStaffPersonalResult;
    if (null != currentUser1) {
      isStaffPersonalResult = currentUser1.isStaffPersonal();
    }
    isStaffResult = isStaffPersonalResult;
  }
  return isStaffResult;
}
function useCanSeeExperimentEmbeds() {
  const items = [closure_4];
  return arg1(dependencyMap[5]).useStateFromStores(items, () => {
    const items = [closure_4];
    return callback(items);
  });
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = {};
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let closure_12 = { legacyExperiments: {}, legacyOverridesInfo: {}, apexExperiments: {}, apexOverridesInfo: {} };
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/experiments/client_override_hooks/useCodedLinksExperimentEmbeds.tsx");

export { canSeeExperimentEmbeds };
export { useCanSeeExperimentEmbeds };
export const useCodedLinksExperimentEmbeds = function useCodedLinksExperimentEmbeds() {
  const tmp = useCanSeeExperimentEmbeds();
  const arg1 = tmp;
  const items = [closure_5];
  const stateFromStoresObject = arg1(dependencyMap[5]).useStateFromStoresObject(items, () => {
    if (tmp) {
      let registeredExperiments = stateFromStores2.getRegisteredExperiments();
    } else {
      registeredExperiments = closure_7;
    }
    return registeredExperiments;
  });
  const dependencyMap = stateFromStoresObject;
  const obj = arg1(dependencyMap[5]);
  const items1 = [closure_5];
  const stateFromStoresObject1 = arg1(dependencyMap[5]).useStateFromStoresObject(items1, () => {
    if (tmp) {
      let allExperimentOverrideDescriptors = stateFromStores2.getAllExperimentOverrideDescriptors();
    } else {
      allExperimentOverrideDescriptors = closure_8;
    }
    return allExperimentOverrideDescriptors;
  });
  let closure_2 = stateFromStoresObject1;
  const obj2 = arg1(dependencyMap[5]);
  const items2 = [closure_6];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items2, () => {
    if (tmp) {
      let experimentsMetadata = store.getExperimentsMetadata();
    } else {
      experimentsMetadata = closure_9;
    }
    return experimentsMetadata;
  });
  const React = stateFromStores;
  const obj3 = arg1(dependencyMap[5]);
  const items3 = [closure_6];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items3, () => {
    if (tmp) {
      let registeredExperiments = store.getRegisteredExperiments();
    } else {
      registeredExperiments = closure_10;
    }
    return registeredExperiments;
  });
  let closure_4 = stateFromStores1;
  const obj4 = arg1(dependencyMap[5]);
  const items4 = [closure_6];
  const stateFromStores2 = arg1(dependencyMap[5]).useStateFromStores(items4, () => {
    if (tmp) {
      let clientOverrides = store.getClientOverrides();
    } else {
      clientOverrides = closure_11;
    }
    return clientOverrides;
  });
  closure_5 = stateFromStores2;
  const items5 = [tmp, stateFromStoresObject, stateFromStoresObject1, stateFromStores, stateFromStores1, stateFromStores2];
  return React.useMemo(() => {
    if (tmp) {
      const obj = { legacyExperiments: tmp(stateFromStoresObject[6]).parseRegisteredExperiments(stateFromStoresObject) };
      const obj2 = tmp(stateFromStoresObject[6]);
      obj.legacyOverridesInfo = tmp(stateFromStoresObject[6]).getLegacyOverridesInfo(stateFromStoresObject1);
      const obj3 = tmp(stateFromStoresObject[6]);
      obj.apexExperiments = tmp(stateFromStoresObject[7]).mergeApexExperiments(stateFromStores, stateFromStores1);
      const obj4 = tmp(stateFromStoresObject[7]);
      obj.apexOverridesInfo = tmp(stateFromStoresObject[7]).getApexExperimentOverridesInfo(stateFromStores2);
      let tmp = obj;
      const obj5 = tmp(stateFromStoresObject[7]);
    } else {
      tmp = closure_12;
    }
    return tmp;
  }, items5);
};
