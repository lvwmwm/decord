// Module ID: 5051
// Function ID: 43730
// Name: openQuarantineModeInfoModal
// Dependencies: [31, 27, 33, 3990, 4472, 5052, 1935, 2]
// Exports: default

// Module 5051 (openQuarantineModeInfoModal)
import "result";
import { Keyboard } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/quarantine/openQuarantineModeInfoModal.native.tsx");

export default function openQuarantineModeInfoModal() {
  Keyboard.dismiss();
  let obj = require(3990) /* getHighestActiveScreenIndex */;
  const bestActiveInput = obj.getBestActiveInput();
  if (null != bestActiveInput) {
    bestActiveInput.blur();
  }
  obj = {
    importer() {
      return outer1_0(outer1_2[6])(outer1_2[5], outer1_2.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return outer3_4(closure_0, {});
        };
      });
    }
  };
  importDefault(4472).openLazy(obj);
};
