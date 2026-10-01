// Module ID: 12071
// Function ID: 12072
// Name: useGameServerPowerupStatus
// Dependencies: [19, 4744, 504, 12055, 1115, 2519, 2]
// Exports: default

// Module 12071 (useGameServerPowerupStatus)
import intl2 from "intl" /* 1115 */;
import _modDef2519 from "module_2519" /* 2519 */;
import react from "react" /* 19 */;
import GameServerStore from "GameServerStore" /* 4744 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/game_server/hooks/useGameServerPowerupStatus.tsx");

export default function useGameServerPowerupStatus(arg0) {
  let closure_0;
  let length;
  _require = arg0;
  let obj = require("get initialized");
  const items = [GameServerStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stateForGuild = GameServerStore.getStateForGuild(closure_0);
    let entitlements;
    if (stateForGuild != null) {
      entitlements = stateForGuild.entitlements;
    }
    return entitlements;
  }, items1);
  const tmp2 = stateFromStores(12055)(arg0);
  dependencyMap = tmp2;
  const items2 = [tmp2, stateFromStores];
  return react.useMemo(() => {
    let intl;
    let obj = stateFromStores;
    const _Object = Object;
    if (stateFromStores == null) {
      obj = {};
    }
    if (0 !== values(obj).length) {
      let obj3;
      if (length.length > 0) {
        obj3 = { type: "expiring", expiringAt: tmp[0].ends_at };
        const obj2 = { type: "expiring", expiringAt: tmp[0].ends_at };
      } else {
        obj3 = { type: "active", statusText: intl.string(_modDef2519.FFLkmx) };
        intl = intl2.intl;
      }
      return obj3;
    }
  }, items2);
};
