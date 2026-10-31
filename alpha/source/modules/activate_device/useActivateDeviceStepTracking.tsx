// Module ID: 15700
// Function ID: 15701
// Name: useActivateDeviceStepTracking
// Dependencies: [19, 1072, 6732, 15701, 1252, 2]
// Exports: useActivateDeviceStepTracking

// Module 15700 (useActivateDeviceStepTracking)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import usePreviousDefault from "usePrevious" /* 6732 */;
import ActivateDeviceUtils from "ActivateDeviceUtils" /* 15701 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/activate_device/useActivateDeviceStepTracking.tsx");

export function useActivateDeviceStepTracking(arg0) {
  let closure_1;
  let type = arg0;
  const tmp = usePreviousDefault(arg0);
  importDefault = tmp;
  const items = [tmp, arg0];
  const effect = react.useEffect(() => {
    if (type !== closure_1) {
      let result = null;
      const tmp3 = "user-code-input" !== tmp.type && "handoff" !== tmp.type;
      if (tmp3) {
        const obj = ActivateDeviceUtils;
        result = obj.clientIdToActivateDevicePlatform(tmp.userCodeData.clientId);
      }
      type = undefined;
      const track = AnalyticsUtilsDefault.track;
      const DEVICE_LINK_STEP = AnalyticEvents.DEVICE_LINK_STEP;
      AnalyticsUtilsDefault;
      if (closure_1 != null) {
        type = tmp2.type;
      }
      const obj2 = { previous_step: type, current_step: type.type, platform_type: result };
      track(DEVICE_LINK_STEP, obj2);
    }
  }, items);
}
