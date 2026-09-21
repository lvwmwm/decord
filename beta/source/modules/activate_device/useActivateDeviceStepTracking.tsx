// Module ID: 14144
// Function ID: 14145
// Name: useActivateDeviceStepTracking
// Dependencies: [19, 1074, 8543, 14145, 1241, 2]
// Exports: useActivateDeviceStepTracking

// Module 14144 (useActivateDeviceStepTracking)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import usePreviousDefault from "usePrevious" /* 8543 */;
import ActivateDeviceUtils from "ActivateDeviceUtils" /* 14145 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/activate_device/useActivateDeviceStepTracking.tsx");

export const useActivateDeviceStepTracking = function useActivateDeviceStepTracking(arg0) {
  closure_0 = arg0;
  const tmp = usePreviousDefault(arg0);
  importDefault = tmp;
  const items = [tmp, arg0];
  const effect = noop.useEffect(() => {
    if (closure_0 !== closure_1) {
      let tmp3 = "user-code-input" !== tmp.type;
      if (tmp3) {
        tmp3 = "handoff" !== tmp.type;
      }
      let result = null;
      if (tmp3) {
        result = ActivateDeviceUtils.clientIdToActivateDevicePlatform(tmp.userCodeData.clientId);
      }
      let type;
      if (tmp2 != null) {
        type = tmp2.type;
      }
      const obj3 = { previous_step: type, current_step: tmp.type, platform_type: result };
      AnalyticsUtilsDefault.track(AnalyticEvents.DEVICE_LINK_STEP, obj3);
    }
  }, items);
};
