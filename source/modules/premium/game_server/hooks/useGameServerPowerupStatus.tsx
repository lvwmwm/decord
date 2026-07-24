// Module ID: 11635
// Function ID: 90434
// Name: useGameServerPowerupStatus
// Dependencies: [31, 4038, 566, 11619, 1212, 2230, 2]
// Exports: default

// Module 11635 (useGameServerPowerupStatus)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/game_server/hooks/useGameServerPowerupStatus.tsx");

export default function useGameServerPowerupStatus(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  const items1 = [arg0];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    const stateForGuild = outer1_4.getStateForGuild(closure_0);
    let entitlements;
    if (null != stateForGuild) {
      entitlements = stateForGuild.entitlements;
    }
    return entitlements;
  }, items1);
  const tmp2 = stateFromStores(11619)(arg0);
  const dependencyMap = tmp2;
  const items2 = [tmp2, stateFromStores];
  return React.useMemo(() => {
    if (0 !== Object.values(null != stateFromStores ? stateFromStores : {}).length) {
      if (tmp2.length > 0) {
        let obj = { type: "expiring", expiringAt: tmp2[0].ends_at };
      } else {
        obj = { type: "active" };
        const intl = callback(tmp2[4]).intl;
        obj.statusText = intl.string(stateFromStores(callback[5]).FFLkmx);
      }
      return obj;
    }
  }, items2);
};
