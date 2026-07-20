// Module ID: 8975
// Function ID: 70730
// Name: _handleStateChange
// Dependencies: [0, 0, 0, 0]
// Exports: useAccountLinkStepTracking

// Module 8975 (_handleStateChange)
import closure_2 from "result";
import { AnalyticEvents } from "result";
import result from "result";

function _handleStateChange(index, current, platform_type, location_stack) {
  if (null != index) {
    index = index.index;
    let tmp;
    let obj = importDefault(dependencyMap[2]);
    obj = { location_stack };
    if (null != current.current) {
      tmp = index.routeNames[current.current];
    }
    obj.previous_step = tmp;
    obj.current_step = index.routeNames[index];
    obj.platform_type = platform_type;
    obj.track(AnalyticEvents.ACCOUNT_LINK_STEP, obj);
    current.current = index;
  }
}
result = result.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/useAccountLinkStepTracking.tsx");

export const useAccountLinkStepTracking = function useAccountLinkStepTracking(CRUNCHYROLL, locationStack) {
  const importDefault = CRUNCHYROLL;
  const dependencyMap = locationStack;
  const React = React.useRef(null);
  const items = [locationStack, CRUNCHYROLL];
  const items1 = [locationStack, CRUNCHYROLL];
  const callback = React.useCallback((arg0) => {
    callback(arg0, closure_2, arg0, arg1);
  }, items);
  const effect = React.useEffect(() => {
    callback({ index: 0, routeNames: [0.000000000000000000000000000000000000000002491037836387495] }, closure_2, arg0, arg1);
  }, items1);
  return callback;
};
