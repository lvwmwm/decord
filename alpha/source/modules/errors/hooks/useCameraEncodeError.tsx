// Module ID: 17811
// Function ID: 17812
// Name: useCameraEncodeError
// Dependencies: [502, 10886, 558, 576, 5289, 504, 2]

// Module 17811 (useCameraEncodeError)
import AVError from "AVError" /* 5289 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AVErrorStore from "AVErrorStore" /* 10886 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCameraEncodeError(arg0) {
  let closure_0;
  let first;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AVErrorStore, AuthenticationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      if (AuthenticationStore.getId() === closure_0) {
        const first = AVErrorStore.getActiveErrorsOfType(AVError.AVError.CAMERA_SEND_LOW_FPS)[0];
        let type;
        if (first != null) {
          type = first.type;
        }
        return type;
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7);
}) : (function useCameraEncodeError(arg0) {
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
});
const result = size.fileFinishedImporting("modules/errors/hooks/useCameraEncodeError.tsx");

export default tmp2;
