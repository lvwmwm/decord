// Module ID: 17613
// Function ID: 17614
// Name: useCameraEncodeError
// Dependencies: [502, 9691, 504, 9692, 2]
// Exports: default

// Module 17613 (useCameraEncodeError)
import AVError from "AVError" /* 9692 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AVErrorStore from "AVErrorStore" /* 9691 */;

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
