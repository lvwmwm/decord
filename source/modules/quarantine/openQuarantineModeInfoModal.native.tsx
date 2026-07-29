// Module ID: 5107
// Function ID: 5108
// Name: openQuarantineModeInfoModal
// Dependencies: [19, 17, 21, 4048, 4529, 5108, 1959, 2]
// Exports: default

// Module 5107 (openQuarantineModeInfoModal)
import "noop";
import { Keyboard } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/quarantine/openQuarantineModeInfoModal.native.tsx");

export default function openQuarantineModeInfoModal() {
  Keyboard.dismiss();
  let obj = require(4048) /* getBestActiveInput */;
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
  importDefault(4529).openLazy(obj);
};
