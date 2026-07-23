// Module ID: 7120
// Function ID: 57206
// Name: setGPlayAnalytics
// Dependencies: [621, 682, 2]
// Exports: deleteGPlayAnalytics, setGPlayAnalytics

// Module 7120 (setGPlayAnalytics)
import keys from "keys";

let closure_2 = Object.freeze({ analyticsByProductId: {} });
let obj = keys.create(() => closure_2);
const result = require("set").fileFinishedImporting("modules/gplay/native/GPlayAnalyticsStore.tsx");

export const setGPlayAnalytics = function setGPlayAnalytics(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  _require(682).batchUpdates(() => {
    outer1_3.setState((analyticsByProductId) => {
      let obj = {};
      obj = {};
      const merged = Object.assign(analyticsByProductId.analyticsByProductId);
      obj[outer1_0] = outer1_1;
      obj.analyticsByProductId = obj;
      return obj;
    });
  });
};
export const deleteGPlayAnalytics = function deleteGPlayAnalytics(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    outer1_3.setState((analyticsByProductId) => {
      analyticsByProductId = {};
      const merged = Object.assign(analyticsByProductId.analyticsByProductId);
      delete tmp2[tmp];
      return { analyticsByProductId };
    });
  });
};
export const useGPlayAnalyticsStore = obj;
