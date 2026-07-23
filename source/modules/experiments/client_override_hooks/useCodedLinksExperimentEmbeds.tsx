// Module ID: 10460
// Function ID: 80739
// Name: canSeeExperimentEmbeds
// Dependencies: [57, 31, 1849, 4044, 1188, 566, 10461, 10462, 2]
// Exports: useCodedLinksExperimentEmbeds

// Module 10460 (canSeeExperimentEmbeds)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";

let require = arg1;
function canSeeExperimentEmbeds() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [_isNativeReflectConstruct];
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
  let items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => {
    const items = [outer1_4];
    return outer1_13(items);
  });
}
let closure_7 = {};
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let closure_12 = { legacyExperiments: {}, legacyOverridesInfo: {}, apexExperiments: {}, apexOverridesInfo: {} };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/experiments/client_override_hooks/useCodedLinksExperimentEmbeds.tsx");

export { canSeeExperimentEmbeds };
export { useCanSeeExperimentEmbeds };
export const useCodedLinksExperimentEmbeds = function useCodedLinksExperimentEmbeds() {
  let tmp = useCanSeeExperimentEmbeds();
  const require = tmp;
  const items = [stateFromStores2];
  stateFromStoresObject = require(stateFromStoresObject[5]).useStateFromStoresObject(items, () => {
    if (closure_0) {
      let registeredExperiments = stateFromStores2.getRegisteredExperiments();
    } else {
      registeredExperiments = outer1_7;
    }
    return registeredExperiments;
  });
  let obj = require(stateFromStoresObject[5]);
  const items1 = [stateFromStores2];
  const stateFromStoresObject1 = require(stateFromStoresObject[5]).useStateFromStoresObject(items1, () => {
    if (closure_0) {
      let allExperimentOverrideDescriptors = stateFromStores2.getAllExperimentOverrideDescriptors();
    } else {
      allExperimentOverrideDescriptors = outer1_8;
    }
    return allExperimentOverrideDescriptors;
  });
  let obj2 = require(stateFromStoresObject[5]);
  const items2 = [closure_6];
  const stateFromStores = require(stateFromStoresObject[5]).useStateFromStores(items2, () => {
    if (closure_0) {
      let experimentsMetadata = outer1_6.getExperimentsMetadata();
    } else {
      experimentsMetadata = outer1_9;
    }
    return experimentsMetadata;
  });
  let obj3 = require(stateFromStoresObject[5]);
  const items3 = [closure_6];
  const stateFromStores1 = require(stateFromStoresObject[5]).useStateFromStores(items3, () => {
    if (closure_0) {
      let registeredExperiments = outer1_6.getRegisteredExperiments();
    } else {
      registeredExperiments = outer1_10;
    }
    return registeredExperiments;
  });
  let obj4 = require(stateFromStoresObject[5]);
  const items4 = [closure_6];
  stateFromStores2 = require(stateFromStoresObject[5]).useStateFromStores(items4, () => {
    if (closure_0) {
      let clientOverrides = outer1_6.getClientOverrides();
    } else {
      clientOverrides = outer1_11;
    }
    return clientOverrides;
  });
  const items5 = [tmp, stateFromStoresObject, stateFromStoresObject1, stateFromStores, stateFromStores1, stateFromStores2];
  return stateFromStores.useMemo(() => {
    if (tmp) {
      const obj = { legacyExperiments: tmp(stateFromStoresObject[6]).parseRegisteredExperiments(stateFromStoresObject) };
      const obj2 = tmp(stateFromStoresObject[6]);
      obj.legacyOverridesInfo = tmp(stateFromStoresObject[6]).getLegacyOverridesInfo(stateFromStoresObject1);
      const obj3 = tmp(stateFromStoresObject[6]);
      obj.apexExperiments = tmp(stateFromStoresObject[7]).mergeApexExperiments(stateFromStores, stateFromStores1);
      const obj4 = tmp(stateFromStoresObject[7]);
      obj.apexOverridesInfo = tmp(stateFromStoresObject[7]).getApexExperimentOverridesInfo(stateFromStores2);
      tmp = obj;
      const obj5 = tmp(stateFromStoresObject[7]);
    } else {
      tmp = outer1_12;
    }
    return tmp;
  }, items5);
};
