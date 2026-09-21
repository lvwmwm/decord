// Module ID: 17601
// Function ID: 17602
// Name: useCameraEncodeError
// Dependencies: [502, 9685, 504, 9686, 2]
// Exports: default

// Module 17601 (useCameraEncodeError)
import AVError from "AVError" /* 9686 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AVErrorStore from "AVErrorStore" /* 9685 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/hooks/useCameraEncodeError.tsx");

export default function useCameraEncodeError(arg0) {
  _require = arg0;
  const items = [AVErrorStore, AuthenticationStore];
  return require("initialize").useStateFromStores(items, () => {
    if (AuthenticationStore.getId() === closure_0) {
      const first = AVErrorStore.getActiveErrorsOfType(AVError.AVError.CAMERA_SEND_LOW_FPS)[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      return type;
    }
  });
};
