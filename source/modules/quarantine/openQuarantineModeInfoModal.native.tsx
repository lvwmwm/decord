// Module ID: 5477
// Function ID: 5478
// Name: openQuarantineModeInfoModal
// Dependencies: [19, 17, 21, 4343, 4866, 5478, 2008, 2]
// Exports: default

// Module 5477 (openQuarantineModeInfoModal)
import noopAll from "noop" /* 19 */;
import getBestActiveInput from "getBestActiveInput" /* 4343 */;
import _modDef4866 from "module_4866" /* 4866 */;
import { Keyboard } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/quarantine/openQuarantineModeInfoModal.native.tsx");

export default function openQuarantineModeInfoModal() {
  Keyboard.dismiss();
  let obj = getBestActiveInput;
  const bestActiveInput = obj.getBestActiveInput();
  if (bestActiveInput != null) {
    bestActiveInput.blur();
  }
  obj = {
    importer() {
      return callback(paths[6])(paths[5], paths.paths).then((arg0) => {
        closure_0 = arg0.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return closure_1_4(closure_0, {});
        };
      });
    }
  };
  _modDef4866.openLazy(obj);
};
