// Module ID: 14363
// Function ID: 14364
// Name: useGetExpiringGuildPowerups
// Dependencies: [19, 5355, 504, 14300, 1380, 2]
// Exports: default

// Module 14363 (useGetExpiringGuildPowerups)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import getExpiringGuildEntitlements from "getExpiringGuildEntitlements" /* 14300 */;
import react from "react" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 5355 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGetExpiringGuildPowerups.tsx");

export default function useGetExpiringGuildPowerups(arg0) {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  let obj = require("get initialized");
  const items = [GuildPowerupsStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const items1 = [stateFromStores];
  return react.useMemo(() => {
    if (null == stateFromStores) {
      return [];
    } else {
      const allPowerups = tmp.allPowerups;
      const unlockedPowerups = tmp.unlockedPowerups;
      const _Object = Object;
      const obj = getExpiringGuildEntitlements;
      const expiringGuildEntitlements = obj.getExpiringGuildEntitlements(Object.values(unlockedPowerups));
      const mapped = expiringGuildEntitlements.map((item) => allPowerups[item.sku_id]);
      return mapped.filter(GlobalUtils.isNotNullish);
    }
  }, items1);
};
