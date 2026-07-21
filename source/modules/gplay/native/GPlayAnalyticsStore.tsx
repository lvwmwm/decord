// Module ID: 7114
// Function ID: 57149
// Name: setGPlayAnalytics
// Dependencies: []
// Exports: deleteGPlayAnalytics, setGPlayAnalytics

// Module 7114 (setGPlayAnalytics)
let closure_2 = Object.freeze({ analyticsByProductId: {} });
const _module = require(dependencyMap[0]);
const obj = _module.create(() => closure_2);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/gplay/native/GPlayAnalyticsStore.tsx");

export const setGPlayAnalytics = function setGPlayAnalytics(arg0, arg1) {
  const require = arg0;
  const dependencyMap = arg1;
  require(dependencyMap[1]).batchUpdates(() => {
    state.setState((analyticsByProductId) => {
      let obj = {};
      obj = {};
      const merged = Object.assign(analyticsByProductId.analyticsByProductId);
      obj[closure_0] = closure_1;
      obj.analyticsByProductId = obj;
      return obj;
    });
  });
};
export const deleteGPlayAnalytics = function deleteGPlayAnalytics(arg0) {
  const require = arg0;
  require(dependencyMap[1]).batchUpdates(() => {
    state.setState((analyticsByProductId) => {
      analyticsByProductId = {};
      const merged = Object.assign(analyticsByProductId.analyticsByProductId);
      delete r1[r0];
      return { analyticsByProductId };
    });
  });
};
export const useGPlayAnalyticsStore = obj;
