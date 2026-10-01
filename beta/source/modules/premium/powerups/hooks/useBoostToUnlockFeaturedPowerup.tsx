// Module ID: 12000
// Function ID: 12001
// Name: useBoostToUnlockFeaturedPowerup
// Dependencies: [32, 19, 2067, 4723, 4724, 1074, 4727, 504, 4743, 2]
// Exports: default

// Module 12000 (useBoostToUnlockFeaturedPowerup)
import Constants from "Constants" /* 1074 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import Powerups from "Powerups" /* 4727 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4723 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_7 = GuildPowerupsConstants.GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS;
const GuildFeatures = Constants.GuildFeatures;
let obj = { skuId: Powerups.GUILD_POWERUP_LEVEL_1_SKU_ID, threshold: 1 };
let items = [obj, , , , , , ];
let obj2 = { skuId: Powerups.GUILD_POWERUP_LEVEL_2_SKU_ID, threshold: 2 };
items[1] = obj2;
items[2] = { skuId: Powerups.GUILD_POWERUP_LEVEL_3_SKU_ID, threshold: 2 };
({ skuId: Powerups.GUILD_POWERUP_LEVEL_3_SKU_ID, threshold: 2 });
items[3] = { skuId: Powerups.GUILD_POWERUP_TAG_SKU_ID, threshold: 1 };
({ skuId: Powerups.GUILD_POWERUP_TAG_SKU_ID, threshold: 1 });
items[4] = { skuId: Powerups.GUILD_POWERUP_ROLE_COLOR_SKU_ID, threshold: 1 };
({ skuId: Powerups.GUILD_POWERUP_ROLE_COLOR_SKU_ID, threshold: 1 });
items[5] = { skuId: Powerups.GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID, threshold: 1 };
({ skuId: Powerups.GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID, threshold: 1 });
items[6] = { skuId: Powerups.GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, threshold: 1 };
({ skuId: Powerups.GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, threshold: 1 });
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useBoostToUnlockFeaturedPowerup.tsx");

export default function useBoostToUnlockFeaturedPowerup(arg0) {
  let available;
  let closure_0;
  let first;
  _require = arg0;
  items = [GuildPowerupsStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  available = stateFromStores(available[8])(arg0).available;
  const items1 = [GuildStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  });
  first = stateFromStores1(first.useState(() => Math.random()), 1)[0];
  const items2 = [stateFromStores, available, stateFromStores1, first];
  return first.useMemo(() => {
    if (null != stateFromStores) {
      const unlockedPowerups = tmp.unlockedPowerups;
      items = [];
      const allPowerups = tmp.allPowerups;
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let skuId = nextResult.skuId;
        let tmp5 = skuId;
        let threshold = nextResult.threshold;
        let tmp6 = allPowerups[skuId];
        let tmp7 = tmp6;
        if (null != tmp6) {
          let tmp25 = stateFromStores1;
          if (!tmp25) {
            if (null == unlockedPowerups[tmp5]) {
              let dependencies = tmp7.dependencies;
              if (dependencies.every((item) => null != unlockedPowerups[item])) {
                let diff = tmp7.cost - available;
                let tmp16 = diff > 0;
                if (tmp16) {
                  tmp16 = tmp15 <= threshold;
                }
                if (tmp16) {
                  let arr = items.push(tmp7);
                }
              }
            }
          }
        }
        continue;
      }
      if (items.length > 0) {
        const _Math = Math;
        return items[Math.floor(Math, first * items.length)];
      }
    }
  }, items2);
};
