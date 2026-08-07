// Module ID: 5233
// Function ID: 5234
// Name: openQuarantineModeInfoModal
// Dependencies: [19, 17, 21, 4160, 4641, 5234, 1988, 2]
// Exports: default

// Module 5233 (openQuarantineModeInfoModal)
import "noop";
import { Keyboard } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/quarantine/openQuarantineModeInfoModal.native.tsx");

export default function openQuarantineModeInfoModal() {
  Keyboard.dismiss();
  let obj = require(4160) /* getBestActiveInput */;
  const bestActiveInput = obj.getBestActiveInput();
  if (bestActiveInput != null) {
    bestActiveInput.blur();
  }
  obj = {
    importer() {
      return callback(paths[6])(paths[5], paths.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return outer1_4(closure_0, {});
        };
      });
    }
  };
  importDefault(4641).openLazy(obj);
};
