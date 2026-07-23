// Module ID: 480
// Function ID: 6188
// Name: isThrottled
// Dependencies: [481, 634, 635, 636, 44, 2, 639, 640, 641]
// Exports: trackMaker

// Module 480 (isThrottled)
function isThrottled(name, result) {
  let tmp = null != dependencyMap[name];
  if (tmp) {
    const _Date = Date;
    tmp = dependencyMap[name] > Date.now();
  }
  return tmp;
}
let closure_4 = {};
let closure_5 = {};
const result = require("queueTrackingEventMaker").fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx");

export const encodeProperties = require("encodeProperties").encodeProperties;
export const analyticsTrackingStoreMaker = require("_isNativeReflectConstruct").analyticsTrackingStoreMaker;
export const AnalyticsActionHandlers = require("_isNativeReflectConstruct").AnalyticsActionHandlers;
export const ImpressionTypes = require("ImpressionGroups").ImpressionTypes;
export const ImpressionGroups = require("ImpressionGroups").ImpressionGroups;
export const ImpressionNames = require("ImpressionNames").ImpressionNames;
export const NetworkActionNames = require("ImpressionNames").NetworkActionNames;
export const getSuperProperties = require("isMetaQuestRuntime").getSuperProperties;
export const getSuperPropertiesBase64 = require("isMetaQuestRuntime").getSuperPropertiesBase64;
export const extendSuperProperties = require("isMetaQuestRuntime").extendSuperProperties;
export const getOS = require("isMetaQuestRuntime").getOS;
export const getDevice = require("isMetaQuestRuntime").getDevice;
export const getCampaignParams = require("isMetaQuestRuntime").getCampaignParams;
export { isThrottled };
export const trackMaker = (arg0) => {
  let TRACK_ACTION_NAME;
  let dispatcher;
  let global;
  let require;
  ({ addBreadcrumb: global, analyticEventConfigs: require } = arg0);
  ({ dispatcher, TRACK_ACTION_NAME } = arg0);
  let closure_2 = require(635) /* queueTrackingEventMaker */.queueTrackingEventMaker(dispatcher, TRACK_ACTION_NAME);
  return function track(arg0, arg1) {
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    if (null != outer1_0.isServerRendering) {
      if (true === outer1_0.isServerRendering) {
        return Promise.resolve();
      }
    }
    obj = arg1;
    if (null == arg1) {
      obj = {};
    }
    let obj3 = tmp2;
    if ("function" === typeof table[arg0]) {
      const tmp2Result = tmp2(obj);
      let tmp4 = null;
      if (null != tmp2Result) {
        tmp4 = tmp2Result;
      }
      obj3 = tmp4;
    }
    if (null != obj3) {
      if ("throttlePeriod" in obj3) {
        const items = [arg0];
        HermesBuiltin.arraySpread(obj3.throttleKeys(obj), 1);
        const joined = items.join("_");
        if (outer1_6(joined)) {
          return Promise.resolve();
        } else {
          if ("number" === typeof obj3.throttlePercent) {
            const _Math2 = Math;
            if (Math.random() > obj3.throttlePercent) {
              return Promise.resolve();
            }
          }
          if (obj3.deduplicate) {
            if (callback2(outer1_3[3])(outer1_5[joined], obj)) {
              return Promise.resolve();
            } else {
              outer1_5[joined] = obj;
            }
          }
          const _Date = Date;
          outer1_4[joined] = Date.now() + obj3.throttlePeriod;
        }
      } else if ("throttlePercent" in obj3) {
        const _Math = Math;
        if (Math.random() > obj3.throttlePercent) {
          return Promise.resolve();
        }
      } else {
        const _HermesInternal = HermesInternal;
        callback2(outer1_3[4])(false, "Unsupported analytics event config: " + obj3);
        const tmp7 = callback2(outer1_3[4]);
      }
    }
    if (null != callback) {
      callback(arg0);
    }
    return callback2(arg0, arg1, obj);
  };
};
