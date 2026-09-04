// Module ID: 13840
// Function ID: 13841
// Name: openGuildLimitedAccessInfoModal
// Dependencies: [19, 17, 21, 4343, 4866, 13841, 2008, 2]
// Exports: default

// Module 13840 (openGuildLimitedAccessInfoModal)
import noopAll from "noop" /* 19 */;
import _modDef4866 from "module_4866" /* 4866 */;
import { Keyboard } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_limited_access/openGuildLimitedAccessInfoModal.native.tsx");

export default function openGuildLimitedAccessInfoModal(arg0) {
  const _require = arg0;
  Keyboard.dismiss();
  let obj = _require(4343);
  const bestActiveInput = obj.getBestActiveInput();
  if (bestActiveInput != null) {
    bestActiveInput.blur();
  }
  obj = {
    importer() {
      return callback(closure_1_2[6])(closure_1_2[5], closure_1_2.paths).then((arg0) => {
        closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          return closure_2_4(closure_0, obj);
        };
      });
    }
  };
  _modDef4866.openLazy(obj);
};
