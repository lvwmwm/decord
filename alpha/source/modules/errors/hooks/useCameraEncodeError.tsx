// Module ID: 19195
// Function ID: 19196
// Name: useCameraEncodeError
// Dependencies: [502, 11721, 504, 5942, 2]
// Exports: default

// Module 19195 (useCameraEncodeError)
import AVError from "AVError" /* 5942 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AVErrorStore from "AVErrorStore" /* 11721 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/errors/hooks/useCameraEncodeError.tsx");

export default function useCameraEncodeError(arg0) {
  let closure_0;
  _require = arg0;
  const items = [AVErrorStore, AuthenticationStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
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
