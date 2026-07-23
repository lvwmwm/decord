// Module ID: 10565
// Function ID: 82511
// Name: useVideoStreamErrorContext
// Dependencies: [1194, 10566, 4191, 566, 8857, 2]
// Exports: default

// Module 10565 (useVideoStreamErrorContext)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { MediaEngineContextTypes } from "DesktopSources";

const require = arg1;
function useVideoStreamErrorContext(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  let items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    let tmp27;
    if (outer1_2.getId() === dependencyMap) {
      if (callback === outer1_4.STREAM) {
        let activeErrorsOfType = outer1_3.getActiveErrorsOfType(callback(8857).AVError.SCREENSHARE_OS_ERROR);
      } else {
        activeErrorsOfType = [];
      }
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(activeErrorsOfType, 0);
      arraySpreadResult = HermesBuiltin.arraySpread(outer1_3.getActiveErrorsOfType(callback(8857).AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT), arraySpreadResult);
      HermesBuiltin.arraySpread(outer1_3.getActiveErrorsOfType(callback(8857).AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM), arraySpreadResult);
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(outer1_3.getActiveErrorsOfType(callback(8857).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), HermesBuiltin.arraySpread(outer1_3.getActiveErrorsOfType(callback(8857).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0));
      let num6 = 0;
      if (0 < items1.length) {
        while (true) {
          tmp27 = items1[num6];
          let tmp28 = callback;
          if (tmp27.mediaContext === callback) {
            let tmp29 = dependencyMap;
            if (tmp27.userId === dependencyMap) {
              break;
            }
          }
          num6 = num6 + 1;
        }
        return tmp27;
      }
    }
  });
}
const result = require("DesktopSources").fileFinishedImporting("modules/errors/hooks/useVideoStreamError.tsx");

export default function useVideoStreamError(arg0, arg1) {
  let type;
  const tmp2 = useVideoStreamErrorContext(arg0, arg1);
  if (null != tmp2) {
    type = tmp2.type;
  }
  return type;
};
export { useVideoStreamErrorContext };
