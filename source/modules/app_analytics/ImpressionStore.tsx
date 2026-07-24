// Module ID: 676
// Function ID: 8368
// Name: withEqualityFn
// Dependencies: [677, 682, 480, 2]
// Exports: cleanupImpression, getImpressionStack, getLocation, setCurrentImpression, setDebugTrackedData

// Module 676 (withEqualityFn)
import useStoreWithEqualityFn from "useStoreWithEqualityFn";

let closure_2 = Object.freeze({ debugTrackedData: null, impressions: [] });
const withEqualityFn = useStoreWithEqualityFn.createWithEqualityFn(() => closure_2);
const result = require("isThrottled").fileFinishedImporting("modules/app_analytics/ImpressionStore.tsx");

export const setCurrentImpression = function setCurrentImpression(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    outer1_3.setState((impressions) => {
      const obj = {};
      const items = [...impressions.impressions, outer1_0];
      obj.impressions = items;
      return obj;
    });
  });
};
export const cleanupImpression = function cleanupImpression(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    outer1_3.setState((impressions) => {
      impressions = impressions.impressions;
      return { impressions: impressions.filter((sequenceId) => sequenceId.sequenceId !== outer2_0.sequenceId) };
    });
  });
};
export const setDebugTrackedData = function setDebugTrackedData(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  _require(682).batchUpdates(() => {
    outer1_3.setState(() => {
      let obj = {};
      obj = { name: outer1_0 };
      const merged = Object.assign(outer1_1);
      obj.debugTrackedData = obj;
      return obj;
    });
  });
};
export const useImpressionStore = withEqualityFn;
export const getLocation = function getLocation(searchContext) {
  const obj = {};
  const impressions = withEqualityFn.getState().impressions;
  const item = impressions.forEach((type) => {
    if (type.type === obj(outer1_1[2]).ImpressionTypes.PAGE) {
      obj.page = type.name;
    } else {
      obj.section = type.name;
    }
  });
  return obj;
};
export const getImpressionStack = function getImpressionStack() {
  return withEqualityFn.getState().impressions;
};
