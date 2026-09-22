// Module ID: 9398
// Function ID: 9399
// Name: useAccountLinkStepTracking
// Dependencies: [19, 1074, 1240, 2]
// Exports: useAccountLinkStepTracking

// Module 9398 (useAccountLinkStepTracking)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import noop from "module_19" /* 19 */;

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/useAccountLinkStepTracking.tsx");

export const useAccountLinkStepTracking = function useAccountLinkStepTracking(CRUNCHYROLL, locationStack) {
  const platform_type = CRUNCHYROLL;
  const location_stack = locationStack;
  noop = noop.useRef(null);
  let items = [locationStack, CRUNCHYROLL];
  const items1 = [locationStack, CRUNCHYROLL];
  const callback = noop.useCallback((index) => {
    if (null != index) {
      index = index.index;
      const obj2 = { location_stack: tmp3, previous_step: null, current_step: null, platform_type: null };
      let tmp7;
      if (null != tmp.current) {
        tmp7 = index.routeNames[tmp.current];
      }
      obj2.previous_step = tmp7;
      obj2.current_step = index.routeNames[index];
      obj2.platform_type = tmp2;
      AnalyticsUtilsDefault.track(AnalyticEvents.ACCOUNT_LINK_STEP, obj2);
      tmp.current = index;
    }
  }, items);
  const effect = noop.useEffect(() => {
    const items = ["landing"];
    const obj2 = { location_stack, previous_step: null, current_step: null, platform_type: null };
    let tmp3;
    if (null != ref.current) {
      tmp3 = items[tmp.current];
    }
    obj2.previous_step = tmp3;
    obj2.current_step = items[0];
    obj2.platform_type = platform_type;
    AnalyticsUtilsDefault.track(AnalyticEvents.ACCOUNT_LINK_STEP, obj2);
    ref.current = 0;
  }, items1);
  return callback;
};
