// Module ID: 480
// Function ID: 6188
// Name: isThrottled
// Dependencies: []
// Exports: trackMaker

// Module 480 (isThrottled)
function isThrottled(TEXT_AREA_CTA_CLICKED) {
  let tmp = null != closure_4[TEXT_AREA_CTA_CLICKED];
  if (tmp) {
    const _Date = Date;
    tmp = closure_4[TEXT_AREA_CTA_CLICKED] > Date.now();
  }
  return tmp;
}
let closure_4 = {};
let closure_5 = {};
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx");

export const encodeProperties = require(dependencyMap[6]).encodeProperties;
export const analyticsTrackingStoreMaker = require(dependencyMap[0]).analyticsTrackingStoreMaker;
export const AnalyticsActionHandlers = require(dependencyMap[0]).AnalyticsActionHandlers;
export const ImpressionTypes = require(dependencyMap[1]).ImpressionTypes;
export const ImpressionGroups = require(dependencyMap[1]).ImpressionGroups;
export const ImpressionNames = require(dependencyMap[7]).ImpressionNames;
export const NetworkActionNames = require(dependencyMap[7]).NetworkActionNames;
export const getSuperProperties = require(dependencyMap[8]).getSuperProperties;
export const getSuperPropertiesBase64 = require(dependencyMap[8]).getSuperPropertiesBase64;
export const extendSuperProperties = require(dependencyMap[8]).extendSuperProperties;
export const getOS = require(dependencyMap[8]).getOS;
export const getDevice = require(dependencyMap[8]).getDevice;
export const getCampaignParams = require(dependencyMap[8]).getCampaignParams;
export { isThrottled };
export const trackMaker = (arg0) => {
  let TRACK_ACTION_NAME;
  let dispatcher;
  ({ addBreadcrumb: closure_0, analyticEventConfigs: closure_1 } = arg0);
  ({ dispatcher, TRACK_ACTION_NAME } = arg0);
  let closure_2 = require(dependencyMap[2]).queueTrackingEventMaker(dispatcher, TRACK_ACTION_NAME);
  return function track(arg0, arg1) {
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    if (null != lib.isServerRendering) {
      if (true === lib.isServerRendering) {
        return Promise.resolve();
      }
    }
    obj = arg1;
    if (null == arg1) {
      obj = {};
    }
    let obj3 = tmp2;
    if ("function" === typeof closure_1[arg0]) {
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
        if (callback2(joined)) {
          return Promise.resolve();
        } else {
          if ("number" === typeof obj3.throttlePercent) {
            const _Math2 = Math;
            if (Math.random() > obj3.throttlePercent) {
              return Promise.resolve();
            }
          }
          if (obj3.deduplicate) {
            if (callback(closure_3[3])(closure_5[joined], obj)) {
              return Promise.resolve();
            } else {
              closure_5[joined] = obj;
            }
          }
          const _Date = Date;
          closure_4[joined] = Date.now() + obj3.throttlePeriod;
        }
      } else if ("throttlePercent" in obj3) {
        const _Math = Math;
        if (Math.random() > obj3.throttlePercent) {
          return Promise.resolve();
        }
      } else {
        const _HermesInternal = HermesInternal;
        callback(closure_3[4])(false, "Unsupported analytics event config: " + obj3);
        const tmp7 = callback(closure_3[4]);
      }
    }
    if (null != lib) {
      lib(arg0);
    }
    return callback(arg0, arg1, obj);
  };
};
