// Module ID: 12971
// Function ID: 12972
// Name: openGuildLimitedAccessInfoModal
// Dependencies: [19, 17, 21, 4048, 4529, 12972, 1959, 2]
// Exports: default

// Module 12971 (openGuildLimitedAccessInfoModal)
import "noop";
import { Keyboard } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/guild_limited_access/openGuildLimitedAccessInfoModal.native.tsx");

export default function openGuildLimitedAccessInfoModal(arg0) {
  const _require = arg0;
  Keyboard.dismiss();
  let obj = _require(4048);
  const bestActiveInput = obj.getBestActiveInput();
  if (bestActiveInput != null) {
    bestActiveInput.blur();
  }
  obj = {
    importer() {
      return callback(outer1_2[6])(outer1_2[5], outer1_2.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          return outer2_4(closure_0, obj);
        };
      });
    }
  };
  importDefault(4529).openLazy(obj);
};
