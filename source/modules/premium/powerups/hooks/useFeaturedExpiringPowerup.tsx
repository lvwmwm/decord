// Module ID: 11568
// Function ID: 90113
// Name: useFeaturedExpiringPowerup
// Dependencies: [31, 4038, 4017, 566, 11569, 6786, 2]
// Exports: default

// Module 11568 (useFeaturedExpiringPowerup)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/powerups/hooks/useFeaturedExpiringPowerup.tsx");

export default function useFeaturedExpiringPowerup(arg0) {
  const _require = arg0;
  let items = [closure_4];
  stateFromStores = _require(stateFromStores[3]).useStateFromStores(items, () => outer1_4.getStateForGuild(closure_0));
  let obj = _require(stateFromStores[3]);
  const items1 = [expiringPowerupCoachmarkEnabled];
  const stateFromStores1 = _require(stateFromStores[3]).useStateFromStores(items1, () => expiringPowerupCoachmarkEnabled.getStateForGuild(closure_0));
  const obj2 = _require(stateFromStores[3]);
  expiringPowerupCoachmarkEnabled = _require(stateFromStores[4]).useExpiringPowerupCoachmarkEnabled("useFeaturedExpiringPowerup");
  const items2 = [stateFromStores, stateFromStores1, expiringPowerupCoachmarkEnabled];
  return stateFromStores1.useMemo(() => {
    if (expiringPowerupCoachmarkEnabled) {
      let unlockedPowerups;
      if (null != stateFromStores) {
        unlockedPowerups = stateFromStores.unlockedPowerups;
      }
      if (null == unlockedPowerups) {
        unlockedPowerups = {};
      }
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(Object.values(unlockedPowerups), 0);
      let entitlements;
      if (null != stateFromStores1) {
        entitlements = stateFromStores1.entitlements;
      }
      if (null == entitlements) {
        entitlements = {};
      }
      arraySpreadResult = HermesBuiltin.arraySpread(Object.values(entitlements), arraySpreadResult);
      const found = items.filter((ends_at) => {
        let tmp = null != ends_at.ends_at;
        if (tmp) {
          const metadata = ends_at.metadata;
          let num_expiring_boosts;
          if (null != metadata) {
            num_expiring_boosts = metadata.num_expiring_boosts;
          }
          let num2 = 0;
          if (null != num_expiring_boosts) {
            num2 = num_expiring_boosts;
          }
          tmp = num2 > 0;
        }
        return tmp;
      });
      if (0 !== found.length) {
        const reduced = found.reduce((ends_at, ends_at2) => {
          let tmp = ends_at;
          if (ends_at2.ends_at > ends_at.ends_at) {
            tmp = ends_at2;
          }
          return tmp;
        });
        let title;
        if (null != stateFromStores) {
          if (null != stateFromStores.allPowerups[reduced.sku_id]) {
            title = tmp13.title;
          }
        }
        let tmp15 = null;
        if (null != title) {
          tmp15 = title;
        }
        const sku = reduced.sku;
        let game_server;
        if (null != sku) {
          const tenant_metadata = sku.tenant_metadata;
          if (null != tenant_metadata) {
            const guild_monetization = tenant_metadata.guild_monetization;
            if (null != guild_monetization) {
              game_server = guild_monetization.game_server;
            }
          }
        }
        const obj = { name: tmp15 };
        const _Math = Math;
        const _Date = Date;
        const date = new Date(reduced.ends_at);
        obj.daysUntilExpiry = Math.max(0, callback(stateFromStores[5]).getDaysRemaining(date));
        let metadata = reduced.metadata;
        let num_expiring_boosts;
        if (null != metadata) {
          num_expiring_boosts = metadata.num_expiring_boosts;
        }
        let num4 = 0;
        if (null != num_expiring_boosts) {
          num4 = num_expiring_boosts;
        }
        obj.numExpiringBoosts = num4;
        obj.isGameServer = null != game_server;
        obj.skuId = reduced.sku_id;
        return obj;
      }
    }
  }, items2);
};
