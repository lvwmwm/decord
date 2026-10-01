// Module ID: 11015
// Function ID: 11016
// Name: useCodedLinksExperimentEmbeds
// Dependencies: [32, 19, 1372, 4750, 1235, 504, 11016, 11017, 2]
// Exports: canSeeExperimentEmbeds, useCanSeeExperimentEmbeds, useCodedLinksExperimentEmbeds

// Module 11015 (useCodedLinksExperimentEmbeds)
import get_initialized from "get initialized" /* 504 */;
import useLegacyExperiments from "useLegacyExperiments" /* 11016 */;
import useApexExperiments from "useApexExperiments" /* 11017 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import ExperimentStore from "ExperimentStore" /* 4750 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1235 */;
import size from "module_2" /* 2 */;

let closure_7 = {};
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let closure_12 = { legacyExperiments: {}, legacyOverridesInfo: {}, apexExperiments: {}, apexOverridesInfo: {} };
const result = size.fileFinishedImporting("modules/experiments/client_override_hooks/useCodedLinksExperimentEmbeds.tsx");

export const canSeeExperimentEmbeds = function canSeeExperimentEmbeds() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [UserStore];
    tmp = items;
  }
  const first = _slicedToArray(tmp, 1)[0];
  const currentUser = first.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (!isStaffResult) {
    const currentUser1 = first.getCurrentUser();
    let isStaffPersonalResult;
    if (currentUser1 != null) {
      isStaffPersonalResult = currentUser1.isStaffPersonal();
    }
    isStaffResult = isStaffPersonalResult;
  }
  return isStaffResult;
};
export const useCanSeeExperimentEmbeds = function useCanSeeExperimentEmbeds() {
  const items = [UserStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    const items = [stateFromStores2];
    const first = stateFromStoresObject1(items, 1)[0];
    const currentUser = first.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    if (!isStaffResult) {
      const currentUser1 = first.getCurrentUser();
      let isStaffPersonalResult;
      if (currentUser1 != null) {
        isStaffPersonalResult = currentUser1.isStaffPersonal();
      }
      isStaffResult = isStaffPersonalResult;
    }
    return isStaffResult;
  });
};
export const useCodedLinksExperimentEmbeds = function useCodedLinksExperimentEmbeds() {
  let stateFromStores;
  let stateFromStores2;
  let stateFromStores3;
  let stateFromStoresObject;
  let obj = stateFromStores(stateFromStoresObject[5]);
  let items = [stateFromStores2];
  stateFromStores = obj.useStateFromStores(items, () => {
    const items = [stateFromStores2];
    const first = stateFromStoresObject1(items, 1)[0];
    const currentUser = first.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    if (!isStaffResult) {
      const currentUser1 = first.getCurrentUser();
      let isStaffPersonalResult;
      if (currentUser1 != null) {
        isStaffPersonalResult = currentUser1.isStaffPersonal();
      }
      isStaffResult = isStaffPersonalResult;
    }
    return isStaffResult;
  });
  let obj2 = stateFromStores(stateFromStoresObject[5]);
  const items1 = [stateFromStores3];
  stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    let registeredExperiments;
    const tmp = stateFromStores;
    if (tmp) {
      registeredExperiments = ExperimentStore.getRegisteredExperiments();
    } else {
      registeredExperiments = closure_7;
    }
    return registeredExperiments;
  });
  let obj3 = stateFromStores(stateFromStoresObject[5]);
  const items2 = [stateFromStores3];
  const stateFromStoresObject1 = obj3.useStateFromStoresObject(items2, () => {
    let allExperimentOverrideDescriptors;
    const tmp = stateFromStores;
    if (tmp) {
      allExperimentOverrideDescriptors = ExperimentStore.getAllExperimentOverrideDescriptors();
    } else {
      allExperimentOverrideDescriptors = closure_8;
    }
    return allExperimentOverrideDescriptors;
  });
  let obj4 = stateFromStores(stateFromStoresObject[5]);
  const items3 = [ApexExperimentStore];
  const stateFromStores1 = obj4.useStateFromStores(items3, () => {
    let experimentsMetadata;
    const tmp = stateFromStores;
    if (tmp) {
      experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
    } else {
      experimentsMetadata = closure_9;
    }
    return experimentsMetadata;
  });
  let obj5 = stateFromStores(stateFromStoresObject[5]);
  const items4 = [ApexExperimentStore];
  stateFromStores2 = obj5.useStateFromStores(items4, () => {
    let registeredExperiments;
    const tmp = stateFromStores;
    if (tmp) {
      registeredExperiments = ApexExperimentStore.getRegisteredExperiments();
    } else {
      registeredExperiments = closure_10;
    }
    return registeredExperiments;
  });
  const items5 = [ApexExperimentStore];
  const obj6 = stateFromStores(stateFromStoresObject[5]);
  stateFromStores3 = obj6.useStateFromStores(items5, () => {
    let clientOverrides;
    const tmp = stateFromStores;
    if (tmp) {
      clientOverrides = ApexExperimentStore.getClientOverrides();
    } else {
      clientOverrides = closure_11;
    }
    return clientOverrides;
  });
  const items6 = [stateFromStores, stateFromStoresObject, stateFromStoresObject1, stateFromStores1, stateFromStores2, stateFromStores3];
  return stateFromStores1.useMemo(() => {
    let obj2;
    let obj3;
    let obj4;
    let obj5;
    let tmp2;
    const tmp = stateFromStores;
    if (tmp) {
      const obj = { legacyExperiments: obj2.parseRegisteredExperiments(stateFromStoresObject), legacyOverridesInfo: obj3.getLegacyOverridesInfo(stateFromStoresObject1), apexExperiments: obj4.mergeApexExperiments(stateFromStores1, stateFromStores2), apexOverridesInfo: obj5.getApexExperimentOverridesInfo(stateFromStores3) };
      obj2 = useLegacyExperiments;
      obj3 = useLegacyExperiments;
      obj4 = useApexExperiments;
      tmp2 = obj;
      obj5 = useApexExperiments;
    } else {
      tmp2 = closure_12;
    }
    return tmp2;
  }, items6);
};
