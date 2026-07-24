// Module ID: 9026
// Function ID: 71022
// Name: _handleStateChange
// Dependencies: [31, 653, 675, 2]
// Exports: useAccountLinkStepTracking

// Module 9026 (_handleStateChange)
import result from "result";
import { AnalyticEvents } from "ME";

function _handleStateChange(index, current, platform_type, location_stack) {
  if (null != index) {
    index = index.index;
    let tmp;
    let obj = importDefault(675);
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
const result = require("expandLocation").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/useAccountLinkStepTracking.tsx");

export const useAccountLinkStepTracking = function useAccountLinkStepTracking(CRUNCHYROLL, locationStack) {
  let closure_0 = CRUNCHYROLL;
  let closure_1 = locationStack;
  React = React.useRef(null);
  const items = [locationStack, CRUNCHYROLL];
  const items1 = [locationStack, CRUNCHYROLL];
  const callback = React.useCallback((arg0) => {
    outer1_4(arg0, result, closure_0, closure_1);
  }, items);
  const effect = React.useEffect(() => {
    outer1_4({ index: 0, routeNames: ["landing"] }, result, closure_0, closure_1);
  }, items1);
  return callback;
};
