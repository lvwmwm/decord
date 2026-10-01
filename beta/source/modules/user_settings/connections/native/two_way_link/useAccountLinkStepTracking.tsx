// Module ID: 8559
// Function ID: 8560
// Name: useAccountLinkStepTracking
// Dependencies: [19, 1074, 1241, 2]
// Exports: useAccountLinkStepTracking

// Module 8559 (useAccountLinkStepTracking)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let index;

let react = react_mod;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/useAccountLinkStepTracking.tsx");

export const useAccountLinkStepTracking = function useAccountLinkStepTracking(CRUNCHYROLL, locationStack) {
  let ref;
  let closure_0 = CRUNCHYROLL;
  const location_stack = locationStack;
  react = react.useRef(null);
  let items = [locationStack, CRUNCHYROLL];
  const items1 = [locationStack, CRUNCHYROLL];
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
    tmp2 = CRUNCHYROLL;
    if (null != ref.current) {
      tmp4 = items[tmp.current];
    }
    track(ACCOUNT_LINK_STEP, obj);
    ref.current = 0;
  }, items1);
  return callback;
};
