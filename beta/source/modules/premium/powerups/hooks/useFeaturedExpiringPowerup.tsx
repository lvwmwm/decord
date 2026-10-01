// Module ID: 12002
// Function ID: 12003
// Name: useFeaturedExpiringPowerup
// Dependencies: [19, 4744, 4723, 504, 12003, 6974, 2]
// Exports: default

// Module 12002 (useFeaturedExpiringPowerup)
import CollectiblesUtils from "CollectiblesUtils" /* 6974 */;
import react from "react" /* 19 */;
import GameServerStore from "GameServerStore" /* 4744 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4723 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useFeaturedExpiringPowerup.tsx");

export default function useFeaturedExpiringPowerup(arg0) {
  let closure_0;
  let expiringPowerupCoachmarkEnabled;
  let stateFromStores;
  _require = arg0;
  let obj = require("get initialized");
  let items = [GuildPowerupsStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const items1 = [expiringPowerupCoachmarkEnabled];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GameServerStore.getStateForGuild(closure_0));
  const obj3 = require("ExpiringPowerupCoachmarkExperiment");
  expiringPowerupCoachmarkEnabled = obj3.useExpiringPowerupCoachmarkEnabled("useFeaturedExpiringPowerup");
  const items2 = [stateFromStores, stateFromStores1, expiringPowerupCoachmarkEnabled];
  return stateFromStores1.useMemo(function() {
    let date;
    let getDaysRemaining;
    let max;
    let num3;
    const tmp2 = expiringPowerupCoachmarkEnabled;
    if (tmp2) {
      let unlockedPowerups;
      const _Object = Object;
      if (stateFromStores != null) {
        unlockedPowerups = tmp4.unlockedPowerups;
      }
      if (unlockedPowerups == null) {
        unlockedPowerups = {};
      }
      const items = [];
      let num = 0;
      let entitlements;
      const _Object2 = Object;
      const values2 = Object.values;
      const arraySpreadResult = HermesBuiltin.arraySpread(items, values(unlockedPowerups), 0);
      if (stateFromStores1 != null) {
        entitlements = stateFromStores1.entitlements;
      }
      if (entitlements == null) {
        entitlements = {};
      }
      HermesBuiltin.arraySpread(items, values2(entitlements), arraySpreadResult);
      const found = items.filter((ends_at) => {
        let tmp = null != ends_at.ends_at;
        if (tmp) {
          const metadata = ends_at.metadata;
          let num;
          if (metadata != null) {
            num = metadata.num_expiring_boosts;
          }
          if (num == null) {
            num = 0;
          }
          tmp = num > 0;
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
        if (stateFromStores != null) {
          if (stateFromStores.allPowerups[reduced.sku_id] != null) {
            title = tmp11.title;
          }
        }
        if (title == null) {
          title = null;
        }
        const sku = reduced.sku;
        let game_server;
        if (sku != null) {
          const tenant_metadata = sku.tenant_metadata;
          if (tenant_metadata != null) {
            const guild_monetization = tenant_metadata.guild_monetization;
            if (guild_monetization != null) {
              game_server = guild_monetization.game_server;
            }
          }
        }
        const _Math = Math;
        const obj = { name: title, daysUntilExpiry: max(0, getDaysRemaining(date)), numExpiringBoosts: num3, isGameServer: null != game_server, skuId: reduced.sku_id };
        max = Math.max;
        const _Date = Date;
        const self = this;
        const self2 = this;
        getDaysRemaining = CollectiblesUtils.getDaysRemaining;
        CollectiblesUtils;
        let metadata = reduced.metadata;
        num3 = undefined;
        date = new Date(reduced.ends_at);
        if (metadata != null) {
          num3 = metadata.num_expiring_boosts;
        }
        if (num3 == null) {
          num3 = 0;
        }
        return obj;
      }
    }
  }, items2);
};
