// Module ID: 4015
// Function ID: 33393
// Name: _isNativeReflectConstruct
// Dependencies: [4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 4015 (_isNativeReflectConstruct)
import closure_1 from "result";
import closure_2 from "result";
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";
import closure_6 from "result";
import result from "result";
import result from "result";
import result from "result";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function calculateAppliedBoosts(guildId) {
  let obj;
  let tmp14;
  const guild = guild.getGuild(guildId);
  let hasItem;
  if (null != guild) {
    const features = guild.features;
    hasItem = features.has(obj.PREMIUM_TIER_3_OVERRIDE);
  }
  let num = 0;
  if (true !== hasItem) {
    let premiumTier;
    if (null != guild) {
      premiumTier = guild.premiumTier;
    }
    if (null == premiumTier) {
      premiumTier = constants.NONE;
    }
    num = closure_9[premiumTier];
    const tmp5 = closure_9;
  }
  const entries = Object.entries(closure_8);
  let tmp8 = num;
  let num2 = 0;
  let tmp11 = num;
  if (0 < entries.length) {
    do {
      let tmp12 = closure_5;
      let tmp13 = closure_5(entries[num2], 2);
      [tmp14, obj] = tmp13;
      let hasItem1 = tmp4;
      if (tmp4) {
        let tmp16 = closure_7;
        hasItem1 = closure_7.has(tmp14);
      }
      let tmp17 = tmp8;
      let tmp18 = tmp9;
      let tmp19 = tmp10;
      if (!hasItem1) {
        let hasItem2 = null != guild;
        if (hasItem2) {
          let premiumFeatures = guild.premiumFeatures;
          hasItem2 = null != premiumFeatures;
          let tmp9 = premiumFeatures;
        }
        if (hasItem2) {
          let features2 = tmp9.features;
          hasItem2 = features2.includes(tmp14);
        }
        if (hasItem2) {
          let isEnabledResult;
          if (null != obj.isEnabled) {
            isEnabledResult = obj.isEnabled(guildId);
          }
          let tmp22 = null == isEnabledResult || isEnabledResult;
          hasItem2 = tmp22;
          let tmp10 = isEnabledResult;
        }
        if (hasItem2) {
          let tmp23 = null == obj.includedInLevel || guild.premiumTier < obj.includedInLevel;
          hasItem2 = tmp23;
        }
        let sum = tmp8;
        if (hasItem2) {
          sum = tmp8 + obj.boostPrice;
        }
        tmp17 = sum;
        tmp18 = tmp9;
        tmp19 = tmp10;
      }
      num2 = num2 + 1;
      tmp8 = tmp17;
      tmp9 = tmp18;
      tmp10 = tmp19;
      tmp11 = tmp17;
    } while (num2 < entries.length);
  }
  return tmp11;
}
function getStateForGuild(guildId) {
  if (null == closure_12[guildId]) {
    const obj = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(guildId) };
    closure_12[guildId] = obj;
  }
  return closure_12[guildId];
}
function recalculateState(arg0, arg1) {
  let entitlements;
  let guildId;
  ({ guildId, entitlements } = arg0);
  let closure_0 = arg1;
  const tmp = getStateForGuild(guildId);
  let closure_1 = tmp;
  const item = entitlements.forEach((sku_id) => {
    if (arg1) {
      tmp.unlockedPowerups[sku_id.sku_id] = sku_id;
    } else {
      delete r1[r0];
    }
  });
  let obj = {};
  const merged = Object.assign(closure_12);
  obj = {};
  const merged1 = Object.assign(tmp);
  obj["appliedBoosts"] = calculateAppliedBoosts(guildId);
  obj[guildId] = obj;
  closure_12 = obj;
}
let closure_0 = importDefault(dependencyMap[0]);
({ GUILD_POWERUP_TIER_3_OVERRIDDEN_PURCHASABLE_FEATURES: closure_7, PURCHASABLE_PREMIUM_FEATURES_BOOST_INFO: closure_8 } = result);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_9, BoostedGuildTiers: closure_10, GuildFeatures: closure_11 } = result);
let closure_12 = {};
let tmp4 = (PersistedStore) => {
  class GuildPowerupsStore {
    constructor() {
      self = this;
      tmp = GuildPowerupsStore(this, GuildPowerupsStore);
      obj = closure_3(GuildPowerupsStore);
      tmp2 = closure_2;
      if (closure_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = GuildPowerupsStore;
  callback2(GuildPowerupsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      this.waitFor(closure_6);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_12;
    }
  };
  items[1] = obj;
  obj = {
    key: "getStateForGuild",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        tmp = closure_12[arg0];
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "shouldFetchCatalogForGuild",
    value(arg0) {
      let catalogFetchCooldown;
      if (null != closure_12[arg0]) {
        catalogFetchCooldown = tmp.catalogFetchCooldown;
      }
      let tmp3 = null == catalogFetchCooldown;
      if (!tmp3) {
        const _Date = Date;
        const sum = catalogFetchCooldown + 86400000;
        tmp3 = sum < Date.now();
      }
      return tmp3;
    }
  };
  items[4] = {
    key: "shouldFetchPowerupsForGuild",
    value(arg0) {
      let prop;
      if (null != closure_12[arg0]) {
        prop = tmp.unlockedPowerupsFetchCooldown;
      }
      let tmp3 = null == prop;
      if (!tmp3) {
        const _Date = Date;
        const sum = prop + 3600000;
        tmp3 = sum < Date.now();
      }
      return tmp3;
    }
  };
  items[5] = {
    key: "hasFetchedPowerupCatalog",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        let prop;
        if (null != closure_12[arg0]) {
          prop = tmp3.hasFetchedPowerupCatalog;
        }
        tmp = true === prop;
      }
      return tmp;
    }
  };
  items[6] = {
    key: "hasFetchedUnlockedPowerups",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        let prop;
        if (null != closure_12[arg0]) {
          prop = tmp3.hasFetchedUnlockedPowerups;
        }
        tmp = true === prop;
      }
      return tmp;
    }
  };
  return callback(GuildPowerupsStore, items);
}(require("result").PersistedStore);
tmp4.displayName = "GuildPowerupsStore";
tmp4.persistKey = "GuildPowerupsStore";
const items = [
  (arg0) => {
    let fromEntriesResult = arg0;
    if (null != arg0) {
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(arg0);
      const found = entries.filter((arg0) => {
        let tmp;
        [, tmp] = arg0;
        let tmp2 = null != tmp;
        if (tmp2) {
          tmp2 = "object" === typeof tmp;
        }
        return tmp2;
      });
      fromEntriesResult = Object.fromEntries(found.map((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp, ];
        const obj = {};
        const merged = Object.assign(tmp2);
        let allPowerups = tmp2.allPowerups;
        if (null == allPowerups) {
          allPowerups = {};
        }
        obj["allPowerups"] = allPowerups;
        let powerupCatalog = tmp2.powerupCatalog;
        if (null == powerupCatalog) {
          powerupCatalog = {};
        }
        obj["powerupCatalog"] = powerupCatalog;
        let unlockedPowerups = tmp2.unlockedPowerups;
        if (null == unlockedPowerups) {
          unlockedPowerups = {};
        }
        obj["unlockedPowerups"] = unlockedPowerups;
        items[1] = obj;
        return items;
      }));
    }
    return fromEntriesResult;
  }
];
tmp4.migrations = items;
tmp4 = new tmp4(require("result"), {
  LOGOUT: function handleReset() {
    let closure_12 = {};
  },
  GUILD_POWERUP_CATALOG_FETCH_SUCCESS: function handleGuildPowerupCatalogFetchSuccess(guildId) {
    let allPowerups;
    let powerupCatalog;
    guildId = guildId.guildId;
    ({ allPowerups, powerupCatalog } = guildId);
    let obj = {};
    const merged = Object.assign(closure_12);
    obj = {};
    const merged1 = Object.assign(getStateForGuild(guildId));
    obj["allPowerups"] = allPowerups;
    obj["powerupCatalog"] = powerupCatalog;
    obj["catalogFetchCooldown"] = Date.now();
    obj["hasFetchedPowerupCatalog"] = true;
    obj[guildId] = obj;
    closure_12 = obj;
  },
  GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: function handleGuildBoostEntitlementsFetchSuccess(guildId) {
    guildId = guildId.guildId;
    let obj = {};
    const tmp = getStateForGuild(guildId);
    const merged = Object.assign(closure_12);
    obj = {};
    const merged1 = Object.assign(tmp);
    obj["unlockedPowerups"] = guildId.unlockedPowerups;
    obj["appliedBoosts"] = calculateAppliedBoosts(guildId);
    obj["unlockedPowerupsFetchCooldown"] = Date.now();
    obj["hasFetchedUnlockedPowerups"] = true;
    obj[guildId] = obj;
    closure_12 = obj;
  },
  GUILD_POWERUP_ENTITLEMENTS_CREATE: function handleGuildPowerupCreated(arg0) {
    recalculateState(arg0, true);
  },
  GUILD_POWERUP_ENTITLEMENTS_DELETE: function handleGuildPowerupDeleted(arg0) {
    recalculateState(arg0, false);
  },
  GUILD_UPDATE: function handleGuildUpdated(guild) {
    const id = guild.guild.id;
    const obj = {};
    const merged = Object.assign(getStateForGuild(id));
    obj["appliedBoosts"] = calculateAppliedBoosts(id);
    closure_12[id] = obj;
  },
  GAME_SERVER_FETCH_INSTANCES_SUCCESS: function handleGameServerInstanceFetched(guildId) {
    guildId = guildId.guildId;
    const obj = {};
    const merged = Object.assign(getStateForGuild(guildId));
    obj["appliedBoosts"] = calculateAppliedBoosts(guildId);
    closure_12[guildId] = obj;
  }
});
result = result.fileFinishedImporting("modules/premium/powerups/GuildPowerupsStore.tsx");

export default tmp4;
