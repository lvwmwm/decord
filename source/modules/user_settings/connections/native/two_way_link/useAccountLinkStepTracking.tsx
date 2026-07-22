// Module ID: 8980
// Function ID: 70766
// Name: _handleStateChange
// Dependencies: [0, 0, 0, 0]
// Exports: useAccountLinkStepTracking

// Module 8980 (_handleStateChange)
import __exportStarResult1 from "__exportStarResult1";
import { AnalyticEvents } from "__exportStarResult1";

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
const result = require("__exportStarResult1").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/useAccountLinkStepTracking.tsx");

export const useAccountLinkStepTracking = function useAccountLinkStepTracking(CRUNCHYROLL, locationStack) {
  const importDefault = CRUNCHYROLL;
  const dependencyMap = locationStack;
  const React = React.useRef(null);
  const items = [locationStack, CRUNCHYROLL];
  const items1 = [locationStack, CRUNCHYROLL];
  const callback = React.useCallback((arg0) => {
    callback(arg0, __exportStarResult1, arg0, arg1);
  }, items);
  const effect = React.useEffect(() => {
    callback({ index: 0, routeNames: ["jsxs"] }, __exportStarResult1, arg0, arg1);
  }, items1);
  return callback;
};
