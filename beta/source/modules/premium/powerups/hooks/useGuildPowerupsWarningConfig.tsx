// Module ID: 12057
// Function ID: 12058
// Name: useGuildPowerupsWarningConfig
// Dependencies: [19, 12058, 4743, 504, 1115, 2519, 2]
// Exports: default

// Module 12057 (useGuildPowerupsWarningConfig)
import intl3 from "intl" /* 1115 */;
import _modDef2519 from "module_2519" /* 2519 */;
import react_mod from "react" /* 19 */;
import AppliedGuildBoostStore from "AppliedGuildBoostStore" /* 12058 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let react = react_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsWarningConfig.tsx");

export default function useGuildPowerupsWarningConfig(arg0, arg1) {
  let closure_0;
  let closure_1;
  let stateFromStores;
  _require = arg0;
  importDefault = arg1;
  const spent = require("useGuildPowerupsBoostCount")(arg0).spent;
  let obj = require("get initialized");
  const items = [AppliedGuildBoostStore];
  const items1 = [arg0];
  stateFromStores = obj.useStateFromStores(items, () => AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(closure_0), items1);
  const items2 = [stateFromStores];
  const diff = spent - react.useMemo(() => {
    let num;
    const arr = stateFromStores;
    if (stateFromStores != null) {
      const filter = arr.filter;
      if (filter != null) {
        const found = filter((ended) => !ended.ended && null == ended.endsAt);
        if (found != null) {
          num = found.length;
        }
      }
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }, items2);
  react = diff;
  const items3 = [diff, arg1];
  return react.useMemo(() => {
    let formatToPlainString;
    let iAaAiG;
    let intl;
    let obj;
    let obj2;
    if (react <= 0) {
      obj = { shouldShow: false, title: "", description: "", requiredBoostCount: 0 };
    } else {
      obj = { shouldShow: true, title: intl.string(_modDef2519.n5hQhc), description: formatToPlainString(iAaAiG, obj2), requiredBoostCount: react };
      intl = intl3.intl;
      const intl2 = intl3.intl;
      formatToPlainString = intl2.formatToPlainString;
      obj2 = { boostCount: react, perksString: closure_1.join(", ") };
      iAaAiG = _modDef2519.iAaAiG;
    }
    return obj;
  }, items3);
};
