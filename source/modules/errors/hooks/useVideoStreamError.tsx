// Module ID: 9524
// Function ID: 9525
// Name: useVideoStreamError
// Dependencies: [1215, 9525, 4545, 586, 9039, 2]
// Exports: default, useVideoStreamErrorContext

// Module 9524 (useVideoStreamError)
import closure_2 from "fetchFingerprint" /* 1215 */;
import closure_3 from "isAVErrorContextOfType" /* 9525 */;
import { MediaEngineContextTypes } from "DesktopSources" /* 4545 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/hooks/useVideoStreamError.tsx");

export default function useVideoStreamError(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  let items = [closure_3, closure_2];
  const stateFromStores = _require(586).useStateFromStores(items, () => {
    if (closure_1_2.getId() !== dependencyMap) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(closure_1_3.getActiveErrorsOfType(callback(9039).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(closure_1_3.getActiveErrorsOfType(callback(9039).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), arraySpreadResult);
      items[Symbol.iterator]();
    }
    if (callback === closure_1_4.STREAM) {
      let activeErrorsOfType = closure_1_3.getActiveErrorsOfType(callback(9039).AVError.SCREENSHARE_OS_ERROR);
    } else {
      activeErrorsOfType = [];
    }
    ({ getActiveErrorsOfType, getActiveErrorsOfType: getActiveErrorsOfType2 } = closure_1_3);
  });
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  return type;
};
export const useVideoStreamErrorContext = function useVideoStreamErrorContext(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_3, closure_2];
  return _require(586).useStateFromStores(items, () => {
    if (closure_1_2.getId() !== dependencyMap) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(closure_1_3.getActiveErrorsOfType(callback(9039).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(closure_1_3.getActiveErrorsOfType(callback(9039).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), arraySpreadResult);
      items[Symbol.iterator]();
    }
    if (callback === closure_1_4.STREAM) {
      let activeErrorsOfType = closure_1_3.getActiveErrorsOfType(callback(9039).AVError.SCREENSHARE_OS_ERROR);
    } else {
      activeErrorsOfType = [];
    }
    ({ getActiveErrorsOfType, getActiveErrorsOfType: getActiveErrorsOfType2 } = closure_1_3);
  });
};
