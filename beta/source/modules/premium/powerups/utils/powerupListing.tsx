// Module ID: 12012
// Function ID: 12013
// Name: powerupListing
// Dependencies: [32, 19, 4723, 4724, 4727, 504, 2]
// Exports: useBuildGuildPowerupsSections

// Module 12012 (powerupListing)
import Powerups from "Powerups" /* 4727 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4723 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let items;
function orderPowerupListings(items) {
  const findIndexResult = items.findIndex((type) => {
    const tmp = "singlePerk" === type.type && type.powerup.skuId === require("Powerups").GUILD_POWERUP_GUILD_THEME_SKU_ID;
    return tmp;
  });
  let obj = items;
  if (findIndexResult > 0) {
    items = [];
    HermesBuiltin.arraySpread(items, items, 0);
    items.unshift(_slicedToArray(items.splice(findIndexResult, 1), 1)[0]);
    obj = items;
  }
  const findIndexResult1 = obj.findIndex((type) => {
    const tmp = "singlePerk" === type.type && type.powerup.skuId === require("Powerups").GUILD_POWERUP_TAG_SKU_ID;
    return tmp;
  });
  const findIndexResult2 = obj.findIndex((type) => {
    let tmp = "multiPerk" === type.type;
    if (tmp) {
      let flag = "guildTagsBadgePacks" === type.group;
      if (!flag) {
        const group = type.group;
        flag = false;
      }
      tmp = flag;
    }
    return tmp;
  });
  let tmp11 = obj;
  if (-1 !== findIndexResult1) {
    tmp11 = obj;
    if (-1 !== findIndexResult2) {
      tmp11 = obj;
      if (findIndexResult2 !== findIndexResult1 + 1) {
        items1 = [];
        HermesBuiltin.arraySpread(items1, tmp10, 0);
        items1.splice(items1.findIndex((type) => {
          const tmp = "singlePerk" === type.type && type.powerup.skuId === require("Powerups").GUILD_POWERUP_TAG_SKU_ID;
          return tmp;
        }) + 1, 0, _slicedToArray(items1.splice(findIndexResult2, 1), 1)[0]);
        tmp11 = items1;
      }
    }
  }
  return tmp11;
}
function buildPowerupListings(arg0, arr, arg2) {
  const items = [];
  let closure_1 = arr.reduce((acc, type) => {
    if (type.type !== constants.PERK) {
      return acc;
    } else {
      if (null != closure_1_8[type.skuId]) {
        if (acc[closure_1_8[type.skuId]] == null) {
          acc[closure_1_8[type.skuId]] = [];
        }
        const arr = acc[closure_1_8[type.skuId]];
        arr.push(type);
      }
      return acc;
    }
  }, {});
  function _loop() {
    let obj;
    if (type.type === GuildPowerupType.LEVEL) {
      const obj3 = { type: "singleLevel", powerup: type };
      items.push(obj3);
      return 0;
    } else if (null != closure_8[type.skuId]) {
      if (undefined !== closure_1[closure_8[type.skuId]]) {
        let closure_0 = obj[tmp13];
        const sorted = obj2.sort((skuId, skuId2) => {
          const index = closure_0.indexOf(skuId.skuId);
          return index - closure_0.indexOf(skuId2.skuId);
        });
        const obj4 = { type: "multiPerk", group: closure_8[type.skuId], powerups: closure_1[closure_8[type.skuId]] };
        items.push(obj4);
        tmp5[closure_8[type.skuId]] = undefined;
      }
      return 0;
    } else {
      obj = { type: "singlePerk", powerup: type, badge: PERK_SKU_BADGES[type.skuId] };
      items.push(obj);
    }
  }
  const iter = arr[Symbol.iterator]();
  while (iter !== undefined) {
    let type = iter.next();
    let _loopResult = _loop();
    continue;
  }
  let tmp2 = arg2;
  if (tmp2) {
    tmp2 = arg0 === GuildPowerupType.PERK;
  }
  if (tmp2) {
    arr = items.push({ type: "gameServer" });
  }
  return orderPowerupListings(items);
}
const GuildPowerupType = GuildPowerupsConstants.GuildPowerupType;
const PERK_SKU_BADGES = GuildPowerupsConstants.PERK_SKU_BADGES;
const POWERUP_GROUP_TO_SKU_IDS = { guildTagsBadgePacks: items };
items = [Powerups.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID, Powerups.GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, Powerups.GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID, Powerups.GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID];
const entries = Object.entries(POWERUP_GROUP_TO_SKU_IDS);
let closure_8 = entries.reduce((acc, item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  for (const item10016 of tmp2) {
    acc[item10016] = tmp;
    continue;
  }
  return acc;
}, {});
let items1 = [, ];
({ LEVEL: arr3[0], PERK: arr3[1] } = GuildPowerupType);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/powerupListing.tsx");

export { POWERUP_GROUP_TO_SKU_IDS };
export { buildPowerupListings };
export const useBuildGuildPowerupsSections = function useBuildGuildPowerupsSections(guildId, gameServerEnabled) {
  _require = guildId;
  dependencyMap = gameServerEnabled;
  let obj = require("get initialized");
  const items = [GuildPowerupsStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(guildId));
  let powerupCatalog;
  const useMemo = react.useMemo;
  if (stateFromStores != null) {
    powerupCatalog = stateFromStores.powerupCatalog;
  }
  items1 = [powerupCatalog, gameServerEnabled];
  return useMemo(() => {
    let powerupCatalog;
    return items1.reduce((arr, type) => {
      let tmp;
      if (powerupCatalog != null) {
        tmp = powerupCatalog.powerupCatalog[type];
      }
      if (null == tmp) {
        return arr;
      } else {
        const obj = { type, listings: buildPowerupListings(type, tmp, gameServerEnabled) };
        arr.push(obj);
        return arr;
      }
    }, []);
  }, items1);
};
