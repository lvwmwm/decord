// Module ID: 12055
// Function ID: 12056
// Name: useGameServerGetExpiringEntitlements
// Dependencies: [19, 4744, 504, 11989, 2]
// Exports: default

// Module 12055 (useGameServerGetExpiringEntitlements)
import getExpiringGuildEntitlements from "getExpiringGuildEntitlements" /* 11989 */;
import react from "react" /* 19 */;
import GameServerStore from "GameServerStore" /* 4744 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/game_server/hooks/useGameServerGetExpiringEntitlements.tsx");

export default function useGameServerGetExpiringEntitlements(arg0) {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  let items = [GameServerStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => GameServerStore.getStateForGuild(closure_0));
  let entitlements;
  const useMemo = react.useMemo;
  if (stateFromStores != null) {
    entitlements = stateFromStores.entitlements;
  }
  const items1 = [entitlements];
  return useMemo(() => {
    let items;
    let entitlements;
    const _Object = Object;
    if (stateFromStores != null) {
      entitlements = stateFromStores.entitlements;
    }
    if (entitlements == null) {
      entitlements = {};
    }
    const values2 = values(entitlements);
    if (0 === values2.length) {
      items = [];
    } else {
      const obj2 = getExpiringGuildEntitlements;
      items = obj2.getExpiringGuildEntitlements(values2);
    }
    return items;
  }, items1);
};
