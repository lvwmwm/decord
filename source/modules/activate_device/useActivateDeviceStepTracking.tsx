// Module ID: 12760
// Function ID: 97834
// Name: useActivateDeviceStepTracking
// Dependencies: [31, 27, 33, 4126, 12774, 4963]
// Exports: useActivateDeviceStepTracking

// Module 12760 (useActivateDeviceStepTracking)
import module_31 from "module_31";
import { AnalyticEvents } from "keys";
import Background from "Background";

const result = Background.fileFinishedImporting("modules/activate_device/useActivateDeviceStepTracking.tsx");

export const useActivateDeviceStepTracking = function useActivateDeviceStepTracking(first) {
  const arg1 = first;
  const tmp = importDefault(dependencyMap[2])(first);
  const importDefault = tmp;
  const items = [tmp, first];
  const effect = React.useEffect((self) => {
    if (self !== tmp) {
      let tmp2 = "user-code-input" !== self.type;
      if (tmp2) {
        tmp2 = "handoff" !== self.type;
      }
      let result = null;
      if (tmp2) {
        let obj = self(closure_2[3]);
        result = obj.clientIdToActivateDevicePlatform(self.userCodeData.clientId);
      }
      let type;
      obj = {};
      if (null != tmp) {
        type = tmp.type;
      }
      obj.previous_step = type;
      obj.current_step = self.type;
      obj.platform_type = result;
      tmp(closure_2[4]).track(constants.DEVICE_LINK_STEP, obj);
      const obj2 = tmp(closure_2[4]);
    }
  }, items);
};
