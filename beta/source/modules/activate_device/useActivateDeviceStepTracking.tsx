// Module ID: 14184
// Function ID: 14185
// Name: useActivateDeviceStepTracking
// Dependencies: [19, 1078, 558, 568, 8580, 14185, 1245, 2]

// Module 14184 (useActivateDeviceStepTracking)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import usePreviousDefault from "usePrevious" /* 8580 */;
import ActivateDeviceUtils from "ActivateDeviceUtils" /* 14185 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const AnalyticEvents = fn(1078).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/activate_device/useActivateDeviceStepTracking.tsx");

export const useActivateDeviceStepTracking = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  const tmp2 = usePreviousDefault(arg0);
  importDefault = tmp2;
  if (cResult[0] === tmp2) {
    if (cResult[1] === arg0) {
      let tmp3 = cResult[2];
      let tmp4 = cResult[3];
    }
    const effect = noop.useEffect(tmp3, tmp4);
  }
  const fn = function p() {
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
  };
  const items = [tmp2, arg0];
  cResult[0] = tmp2;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp4 = items;
  tmp3 = fn;
}) : ((arg0) => {
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
});
