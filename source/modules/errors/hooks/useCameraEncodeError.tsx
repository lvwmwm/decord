// Module ID: 15819
// Function ID: 122194
// Name: useCameraEncodeError
// Dependencies: [1194, 10566, 566, 8857, 2]
// Exports: default

// Module 15819 (useCameraEncodeError)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/errors/hooks/useCameraEncodeError.tsx");

export default function useCameraEncodeError(arg0) {
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    if (outer1_2.getId() === callback) {
      let type;
      const first = outer1_3.getActiveErrorsOfType(callback(outer1_1[3]).AVError.CAMERA_SEND_LOW_FPS)[0];
      if (null != first) {
        type = first.type;
      }
      return type;
    }
  });
};
