// Module ID: 676
// Function ID: 8367
// Name: withEqualityFn
// Dependencies: []
// Exports: cleanupImpression, getImpressionStack, getLocation, setCurrentImpression, setDebugTrackedData

// Module 676 (withEqualityFn)
let closure_2 = Object.freeze({ debugTrackedData: null, impressions: [] });
const _module = require(dependencyMap[0]);
const withEqualityFn = _module.createWithEqualityFn(() => closure_2);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/app_analytics/ImpressionStore.tsx");

export const setCurrentImpression = function setCurrentImpression(arg0) {
  const require = arg0;
  require(dependencyMap[1]).batchUpdates(() => {
    state.setState((impressions) => {
      const obj = {};
      const items = [...impressions.impressions, closure_0];
      obj.impressions = items;
      return obj;
    });
  });
};
export const cleanupImpression = function cleanupImpression(arg0) {
  const require = arg0;
  require(dependencyMap[1]).batchUpdates(() => {
    state.setState((impressions) => {
      impressions = impressions.impressions;
      return { impressions: impressions.filter((sequenceId) => sequenceId.sequenceId !== sequenceId.sequenceId) };
    });
  });
};
export const setDebugTrackedData = function setDebugTrackedData(arg0, arg1) {
  const require = arg0;
  const dependencyMap = arg1;
  require(dependencyMap[1]).batchUpdates(() => {
    state.setState(() => {
      let obj = {};
      obj = { name: closure_0 };
      const merged = Object.assign(closure_1);
      obj.debugTrackedData = obj;
      return obj;
    });
  });
};
export const useImpressionStore = withEqualityFn;
export const getLocation = function getLocation(searchContext) {
  const obj = {};
  const require = obj;
  const impressions = withEqualityFn.getState().impressions;
  const item = impressions.forEach((type) => {
    if (type.type === obj(closure_1[2]).ImpressionTypes.PAGE) {
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
