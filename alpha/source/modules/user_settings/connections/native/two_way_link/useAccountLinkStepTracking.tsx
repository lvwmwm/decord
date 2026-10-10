// Module ID: 12915
// Function ID: 12916
// Name: useAccountLinkStepTracking
// Dependencies: [19, 1085, 1265, 558, 576, 2]

// Module 12915 (useAccountLinkStepTracking)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountLinkStepTracking(arg0, location_stack) {
  let closure_0;
  let ref;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(7);
  dependencyMap = react.useRef(null);
  const obj2 = react;
  if (cResult[0] === location_stack) {
    let tmp2;
    if (cResult[1] === arg0) {
      tmp2 = cResult[2];
    }
    if (cResult[3] === location_stack) {
      let tmp3;
      let tmp4;
      if (cResult[4] === arg0) {
        tmp3 = cResult[5];
        tmp4 = cResult[6];
      }
      const effect = obj2.useEffect(tmp3, tmp4);
      return tmp2;
    }
    const fn2 = function o() {
      let tmp2;
      let tmp4;
      const items = ["landing"];
      const obj = { location_stack, previous_step: tmp4, current_step: items[0], platform_type: tmp2 };
      tmp4 = undefined;
      const track = AnalyticsUtilsDefault.track;
      const ACCOUNT_LINK_STEP = AnalyticEvents.ACCOUNT_LINK_STEP;
      AnalyticsUtilsDefault;
      tmp2 = closure_0;
      if (null != ref.current) {
        tmp4 = items[tmp.current];
      }
      track(ACCOUNT_LINK_STEP, obj);
      ref.current = 0;
    };
    let items = [location_stack, arg0];
    cResult[3] = location_stack;
    cResult[4] = arg0;
    cResult[5] = fn2;
    cResult[6] = items;
    tmp4 = items;
    tmp3 = fn2;
  }
  const fn = function c(index) {
    let tmp8;
    if (null != index) {
      index = index.index;
      const obj = { location_stack: tmp3, previous_step: tmp8, current_step: index.routeNames[index], platform_type: tmp2 };
      tmp8 = undefined;
      const track = AnalyticsUtilsDefault.track;
      const ACCOUNT_LINK_STEP = AnalyticEvents.ACCOUNT_LINK_STEP;
      AnalyticsUtilsDefault;
      if (null != ref.current) {
        tmp8 = index.routeNames[tmp.current];
      }
      track(ACCOUNT_LINK_STEP, obj);
      ref.current = index;
    }
  };
  cResult[0] = location_stack;
  cResult[1] = arg0;
  cResult[2] = fn;
  tmp2 = fn;
}) : (function useAccountLinkStepTracking(arg0, location_stack) {
  let closure_0 = arg0;
  const ref = react.useRef(null);
  let items = [location_stack, arg0];
  const items1 = [location_stack, arg0];
  const callback = react.useCallback((index) => {
    let tmp8;
    if (null != index) {
      index = index.index;
      const obj = { location_stack: tmp3, previous_step: tmp8, current_step: index.routeNames[index], platform_type: tmp2 };
      tmp8 = undefined;
      const track = AnalyticsUtilsDefault.track;
      const ACCOUNT_LINK_STEP = AnalyticEvents.ACCOUNT_LINK_STEP;
      AnalyticsUtilsDefault;
      if (null != ref.current) {
        tmp8 = index.routeNames[tmp.current];
      }
      track(ACCOUNT_LINK_STEP, obj);
      ref.current = index;
    }
  }, items);
  const effect = react.useEffect(() => {
    let tmp2;
    let tmp4;
    const items = ["landing"];
    const obj = { location_stack, previous_step: tmp4, current_step: items[0], platform_type: tmp2 };
    tmp4 = undefined;
    const track = AnalyticsUtilsDefault.track;
    const ACCOUNT_LINK_STEP = AnalyticEvents.ACCOUNT_LINK_STEP;
    AnalyticsUtilsDefault;
    tmp2 = closure_0;
    if (null != ref.current) {
      tmp4 = items[tmp.current];
    }
    track(ACCOUNT_LINK_STEP, obj);
    ref.current = 0;
  }, items1);
  return callback;
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/useAccountLinkStepTracking.tsx");

export const useAccountLinkStepTracking = tmp2;
