// Module ID: 1254
// Function ID: 1255
// Name: ImpressionStore
// Dependencies: [1255, 1260, 1261, 2]
// Exports: cleanupImpression, getImpressionStack, getLocation, setCurrentImpression, setDebugTrackedData

// Module 1254 (ImpressionStore)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1261 */;
import module_1255 from "module_1255" /* 1255 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let closure_2 = Object.freeze({ debugTrackedData: null, impressions: [] });
const withEqualityFn = module_1255.createWithEqualityFn(() => closure_2);
const result = size.fileFinishedImporting("modules/app_analytics/ImpressionStore.tsx");

export const setCurrentImpression = function setCurrentImpression(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    withEqualityFn.setState((impressions) => {
      let items;
      const obj = { impressions: items };
      items = [];
      items[HermesBuiltin.arraySpread(items, impressions.impressions, 0)] = closure_1_0;
      return obj;
    });
  });
};
export const cleanupImpression = function cleanupImpression(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    withEqualityFn.setState((impressions) => {
      let sequenceId;
      const obj = { impressions: impressions.filter((sequenceId) => sequenceId.sequenceId !== sequenceId.sequenceId) };
      impressions = impressions.impressions;
      return obj;
    });
  });
};
export const setDebugTrackedData = function setDebugTrackedData(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    let name;
    withEqualityFn.setState(() => {
      let obj2;
      const obj = { debugTrackedData: obj2 };
      obj2 = { name };
      const merged = Object.assign(closure_1_1);
      return obj;
    });
  });
};
export const useImpressionStore = withEqualityFn;
export const getLocation = function getLocation() {
  const obj = {};
  const impressions = withEqualityFn.getState().impressions;
  const item = impressions.forEach((type) => {
    if (type.type === discord_common_AnalyticsUtils.ImpressionTypes.PAGE) {
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
