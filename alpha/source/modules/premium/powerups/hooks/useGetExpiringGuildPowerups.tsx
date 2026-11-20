// Module ID: 13328
// Function ID: 13329
// Name: useGetExpiringGuildPowerups
// Dependencies: [19, 8211, 504, 13262, 1254, 2]
// Exports: default

// Module 13328 (useGetExpiringGuildPowerups)
import GlobalUtils from "GlobalUtils" /* 1254 */;
import getExpiringGuildEntitlements from "getExpiringGuildEntitlements" /* 13262 */;
import react from "react" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 8211 */;
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
