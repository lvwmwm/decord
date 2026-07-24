// Module ID: 11621
// Function ID: 90327
// Name: useGuildPowerupsWarningConfig
// Dependencies: [31, 11622, 4037, 566, 1212, 2230, 2]
// Exports: default

// Module 11621 (useGuildPowerupsWarningConfig)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("useGuildAppliedBoostCount").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsWarningConfig.tsx");

export default function useGuildPowerupsWarningConfig(arg0, arg1) {
  const _require = arg0;
  const importDefault = arg1;
  const items = [_isNativeReflectConstruct];
  const items1 = [arg0];
  stateFromStores = _require(stateFromStores[3]).useStateFromStores(items, () => outer1_4.getAppliedGuildBoostsForGuild(closure_0), items1);
  const items2 = [stateFromStores];
  diff = importDefault(stateFromStores[2])(arg0).spent - diff.useMemo(() => {
    let length;
    if (null != stateFromStores) {
      if (null != stateFromStores.filter) {
        const found = stateFromStores.filter((ended) => {
          let tmp = !ended.ended;
          if (tmp) {
            tmp = null == ended.endsAt;
          }
          return tmp;
        });
        if (null != found) {
          length = found.length;
        }
      }
    }
    let num = 0;
    if (null != length) {
      num = length;
    }
    return num;
  }, items2);
  const items3 = [diff, arg1];
  return diff.useMemo(() => {
    if (result <= 0) {
      let obj = { shouldShow: false, title: "", description: "", requiredBoostCount: 0 };
    } else {
      obj = { shouldShow: true };
      const intl = callback(stateFromStores[4]).intl;
      obj.title = intl.string(lib(stateFromStores[5]).n5hQhc);
      const intl2 = callback(stateFromStores[4]).intl;
      obj = { boostCount: result, perksString: lib.join(", ") };
      obj.description = intl2.formatToPlainString(lib(stateFromStores[5]).iAaAiG, obj);
      obj.requiredBoostCount = result;
    }
    return obj;
  }, items3);
};
