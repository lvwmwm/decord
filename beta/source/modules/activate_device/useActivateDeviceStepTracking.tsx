// Module ID: 13420
// Function ID: 13421
// Name: useActivateDeviceStepTracking
// Dependencies: [19, 1074, 7720, 13421, 1241, 2]
// Exports: useActivateDeviceStepTracking

// Module 13420 (useActivateDeviceStepTracking)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import usePreviousDefault from "usePrevious" /* 7720 */;
import ActivateDeviceUtils from "ActivateDeviceUtils" /* 13421 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/activate_device/useActivateDeviceStepTracking.tsx");

export const useActivateDeviceStepTracking = function useActivateDeviceStepTracking(arg0) {
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
};
