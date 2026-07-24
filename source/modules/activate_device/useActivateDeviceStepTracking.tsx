// Module ID: 12935
// Function ID: 100368
// Name: useActivateDeviceStepTracking
// Dependencies: [31, 653, 8328, 12936, 675, 2]
// Exports: useActivateDeviceStepTracking

// Module 12935 (useActivateDeviceStepTracking)
import result from "result";
import { AnalyticEvents } from "ME";

const require = arg1;
let result = require("usePrevious").fileFinishedImporting("modules/activate_device/useActivateDeviceStepTracking.tsx");

export const useActivateDeviceStepTracking = function useActivateDeviceStepTracking(first) {
  let closure_0 = first;
  const tmp = importDefault(8328)(first);
  importDefault = tmp;
  const items = [tmp, first];
  const effect = React.useEffect(() => {
    if (lib !== tmp) {
      let tmp2 = "user-code-input" !== lib.type;
      if (tmp2) {
        tmp2 = "handoff" !== lib.type;
      }
      let result = null;
      if (tmp2) {
        let obj = lib(outer1_2[3]);
        result = obj.clientIdToActivateDevicePlatform(lib.userCodeData.clientId);
      }
      let type;
      obj = {};
      if (null != tmp) {
        type = tmp.type;
      }
      obj.previous_step = type;
      obj.current_step = lib.type;
      obj.platform_type = result;
      tmp(outer1_2[4]).track(outer1_4.DEVICE_LINK_STEP, obj);
      const obj2 = tmp(outer1_2[4]);
    }
  }, items);
};
