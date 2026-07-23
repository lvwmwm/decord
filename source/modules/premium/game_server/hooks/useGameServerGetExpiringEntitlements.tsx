// Module ID: 11592
// Function ID: 90082
// Name: useGameServerGetExpiringEntitlements
// Dependencies: [31, 4038, 566, 11525, 2]
// Exports: default

// Module 11592 (useGameServerGetExpiringEntitlements)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/game_server/hooks/useGameServerGetExpiringEntitlements.tsx");

export default function useGameServerGetExpiringEntitlements(arg0) {
  const _require = arg0;
  let entitlements;
  let items = [_isNativeReflectConstruct];
  stateFromStores = _require(stateFromStores[2]).useStateFromStores(items, () => outer1_3.getStateForGuild(closure_0));
  if (null != stateFromStores) {
    entitlements = stateFromStores.entitlements;
  }
  const items1 = [entitlements];
  return React.useMemo(() => {
    let entitlements;
    if (null != stateFromStores) {
      entitlements = stateFromStores.entitlements;
    }
    if (null == entitlements) {
      entitlements = {};
    }
    const values = Object.values(entitlements);
    if (0 === values.length) {
      let items = [];
    } else {
      items = callback(stateFromStores[3]).getExpiringGuildEntitlements(values);
      const obj2 = callback(stateFromStores[3]);
    }
    return items;
  }, items1);
};
