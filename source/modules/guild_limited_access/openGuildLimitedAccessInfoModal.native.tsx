// Module ID: 12840
// Function ID: 99804
// Name: openGuildLimitedAccessInfoModal
// Dependencies: [31, 27, 33, 3989, 4471, 12841, 1934, 2]
// Exports: default

// Module 12840 (openGuildLimitedAccessInfoModal)
import "result";
import { Keyboard } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/guild_limited_access/openGuildLimitedAccessInfoModal.native.tsx");

export default function openGuildLimitedAccessInfoModal(arg0) {
  const _require = arg0;
  Keyboard.dismiss();
  let obj = _require(3989);
  const bestActiveInput = obj.getBestActiveInput();
  if (null != bestActiveInput) {
    bestActiveInput.blur();
  }
  obj = {
    importer() {
      return callback(outer1_2[6])(outer1_2[5], outer1_2.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = outer2_0;
          return outer3_4(closure_0, obj);
        };
      });
    }
  };
  importDefault(4471).openLazy(obj);
};
