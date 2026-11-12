// Module ID: 14902
// Function ID: 14903
// Name: useAccountLinkStepTracking
// Dependencies: [19, 1072, 1252, 2]
// Exports: useAccountLinkStepTracking

// Module 14902 (useAccountLinkStepTracking)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/useAccountLinkStepTracking.tsx");

export function useAccountLinkStepTracking(CRUNCHYROLL, locationStack, arg2) {
  let closure_0 = CRUNCHYROLL;
  const location_stack = locationStack;
  let str = arg2;
  if (arg2 === undefined) {
    str = "landing";
  }
  const ref = str.useRef(null);
  let items = [locationStack, CRUNCHYROLL];
  const items1 = [locationStack, CRUNCHYROLL, str];
  const callback = str.useCallback((arg0) => {
    let current;
    if (null != arg0) {
      const name = arg0.routes[arg0.index].name;
      const obj = { location_stack: tmp3, previous_step: current, current_step: name, platform_type: tmp2 };
      current = tmp.current;
      const track = AnalyticsUtilsDefault.track;
      const ACCOUNT_LINK_STEP = AnalyticEvents.ACCOUNT_LINK_STEP;
      AnalyticsUtilsDefault;
      track(ACCOUNT_LINK_STEP, obj);
      ref.current = name;
    }
  }, items);
  const effect = str.useEffect(() => {
    let current;
    let tmp2;
    const items = [];
    const obj = { name: str };
    items[0] = obj;
    const name = items[0].name;
    const obj2 = { location_stack, previous_step: current, current_step: name, platform_type: tmp2 };
    current = ref.current;
    const track = AnalyticsUtilsDefault.track;
    const ACCOUNT_LINK_STEP = AnalyticEvents.ACCOUNT_LINK_STEP;
    AnalyticsUtilsDefault;
    track(ACCOUNT_LINK_STEP, obj2);
    ref.current = name;
    tmp2 = CRUNCHYROLL;
  }, items1);
  return callback;
}
