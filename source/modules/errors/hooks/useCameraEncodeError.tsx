// Module ID: 16226
// Function ID: 16227
// Name: useCameraEncodeError
// Dependencies: [1218, 10690, 589, 9175, 2]
// Exports: default

// Module 16226 (useCameraEncodeError)
import fetchFingerprint from "fetchFingerprint";
import isAVErrorContextOfType from "isAVErrorContextOfType";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/errors/hooks/useCameraEncodeError.tsx");

export default function useCameraEncodeError(arg0) {
  const _require = arg0;
  const items = [isAVErrorContextOfType, fetchFingerprint];
  return _require(589).useStateFromStores(items, () => {
    if (outer1_2.getId() === callback) {
      const first = outer1_3.getActiveErrorsOfType(callback(outer1_1[3]).AVError.CAMERA_SEND_LOW_FPS)[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      return type;
    }
  });
};
