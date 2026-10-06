// Module ID: 1261
// Function ID: 1262
// Name: discord_common/AnalyticsUtils
// Dependencies: [1262, 1341, 1342, 1343, 38, 2, 1346, 1347, 1348]
// Exports: isThrottled, trackMaker

// Module 1261 (discord_common/AnalyticsUtils)
import _modDef38 from "module_38" /* 38 */;
import AnalyticsTrackingStore from "AnalyticsTrackingStore" /* 1262 */;
import StandardAnalyticsConstants from "StandardAnalyticsConstants" /* 1341 */;
import AnalyticsTrackingActionCreators from "AnalyticsTrackingActionCreators" /* 1342 */;
import _modDef1343 from "module_1343" /* 1343 */;
import encodeProperties from "encodeProperties" /* 1346 */;
import AnalyticsSchema from "AnalyticsSchema" /* 1347 */;
import getSuperProperties from "getSuperProperties" /* 1348 */;
import size from "module_2" /* 2 */;

const analyticsTrackingStoreMaker = AnalyticsTrackingStore.analyticsTrackingStoreMaker;
const AnalyticsActionHandlers = AnalyticsTrackingStore.AnalyticsActionHandlers;
const ImpressionTypes = StandardAnalyticsConstants.ImpressionTypes;
let closure_4 = {};
let closure_5 = {};
const ImpressionGroups = StandardAnalyticsConstants.ImpressionGroups;
const result = size.fileFinishedImporting("../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx");
const encodeProperties_export = encodeProperties.encodeProperties;
const getSuperProperties_export = getSuperProperties.getSuperProperties;

export { encodeProperties_export as encodeProperties };
export { analyticsTrackingStoreMaker };
export { AnalyticsActionHandlers };
export { ImpressionTypes };
export { ImpressionGroups };
export const ImpressionNames = AnalyticsSchema.ImpressionNames;
export const NetworkActionNames = AnalyticsSchema.NetworkActionNames;
export const SpanTtiNames = AnalyticsSchema.SpanTtiNames;
export { getSuperProperties_export as getSuperProperties };
export const getSuperPropertiesBase64 = getSuperProperties.getSuperPropertiesBase64;
export const extendSuperProperties = getSuperProperties.extendSuperProperties;
export const getOS = getSuperProperties.getOS;
export const getDevice = getSuperProperties.getDevice;
export const getCampaignParams = getSuperProperties.getCampaignParams;
export const isThrottled = function isThrottled(CHANNEL_OPENED) {
  let tmp = null != closure_4[CHANNEL_OPENED];
  if (tmp) {
    const _Date = Date;
    tmp = closure_4[CHANNEL_OPENED] > Date.now();
  }
  return tmp;
};
export const trackMaker = (arg0) => {
  let TRACK_ACTION_NAME;
  let dispatcher;
  ({ addBreadcrumb: global, analyticEventConfigs: require } = arg0);
  ({ dispatcher, TRACK_ACTION_NAME } = arg0);
  let obj = AnalyticsTrackingActionCreators;
  let closure_2 = obj.queueTrackingEventMaker(dispatcher, TRACK_ACTION_NAME);
  return function track(arg0, arg1) {
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    if (null != global.isServerRendering) {
      if (true === global.isServerRendering) {
        return Promise.resolve();
      }
    }
    let obj2 = arg1;
    if (arg1 == null) {
      obj2 = {};
    }
    let obj3 = tmp2;
    if (typeof require[arg0] === "function") {
      let tmp2Result = tmp2(obj2);
      if (tmp2Result == null) {
        tmp2Result = null;
      }
      obj3 = tmp2Result;
    }
    if (null != obj3) {
      if ("throttlePeriod" in obj3) {
        const items = [arg0];
        HermesBuiltin.arraySpread(items, obj3.throttleKeys(obj2), 1);
        const joined = items.join("_");
        let tmp14 = null != closure_4[joined];
        if (tmp14) {
          const _Date = Date;
          tmp14 = tmp13[joined] > Date.now();
        }
        if (tmp14) {
          return Promise.resolve();
        } else {
          if (typeof obj3.throttlePercent === "number") {
            const _Math2 = Math;
            if (Math.random() > obj3.throttlePercent) {
              return Promise.resolve();
            }
          }
          if (obj3.deduplicate) {
            const tmp16 = closure_5;
            if (_modDef1343(closure_5[joined], obj2)) {
              return Promise.resolve();
            } else {
              tmp16[joined] = obj2;
            }
          }
          const _Date2 = Date;
          closure_4[joined] = Date.now() + obj3.throttlePeriod;
        }
      } else if ("throttlePercent" in obj3) {
        const _Math = Math;
        if (Math.random() > obj3.throttlePercent) {
          return Promise.resolve();
        }
      } else {
        const _HermesInternal = HermesInternal;
        const tmp6 = _modDef38;
        tmp6(false, "Unsupported analytics event config: " + obj3);
      }
    }
    if (global != null) {
      global(arg0);
    }
    return closure_2(arg0, arg1, obj);
  };
};
