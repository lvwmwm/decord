// Module ID: 16718
// Function ID: 16719
// Name: useCameraEncodeError
// Dependencies: [1218, 9564, 589, 9565, 2]
// Exports: default

// Module 16718 (useCameraEncodeError)
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "isAVErrorContextOfType" /* 9564 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/hooks/useCameraEncodeError.tsx");

export default function useCameraEncodeError(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_2];
  return _require(589).useStateFromStores(items, () => {
    if (closure_1_2.getId() === callback) {
      const first = closure_1_3.getActiveErrorsOfType(callback(closure_1_1[3]).AVError.CAMERA_SEND_LOW_FPS)[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      return type;
    }
  });
};
