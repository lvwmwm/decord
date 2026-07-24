// Module ID: 4017
// Function ID: 33410
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 1838, 4018, 653, 566, 686, 2]

// Module 4017 (_isNativeReflectConstruct)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_1 from "BoostedGuildTiers";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";
import closure_6 from "_createForOfIteratorHelperLoose";
import BoostedGuildTiers from "BoostedGuildTiers";
import ME from "ME";

let closure_10;
let closure_11;
let closure_7;
let closure_8;
let closure_9;
function _isNativeReflectConstruct() {
  let _createForOfIteratorHelperLoose = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _createForOfIteratorHelperLoose;
  }
  const result = _isNativeReflectConstruct();
}
function calculateAppliedBoosts(guildId) {
  let obj;
  let tmp14;
  guild = guild.getGuild(guildId);
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
      let tmp12 = callback3;
      let tmp13 = callback3(entries[num2], 2);
      [tmp14, obj] = tmp13;
      let hasItem1 = tmp4;
      if (tmp4) {
        let tmp16 = set;
        hasItem1 = set.has(tmp14);
      }
      let tmp17 = tmp8;
      let tmp18 = tmp9;
      let tmp19 = tmp10;
      if (!hasItem1) {
        let hasItem2 = null != guild;
        if (hasItem2) {
          let premiumFeatures = guild.premiumFeatures;
          hasItem2 = null != premiumFeatures;
          tmp9 = premiumFeatures;
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
          tmp10 = isEnabledResult;
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
  if (null == dependencyMap[guildId]) {
    const obj = { allPowerups: {}, powerupCatalog: {}, unlockedPowerups: {}, appliedBoosts: calculateAppliedBoosts(guildId) };
    dependencyMap[guildId] = obj;
  }
  return dependencyMap[guildId];
}
function recalculateState(arg0, arg1) {
  let entitlements;
  let guildId;
  ({ guildId, entitlements } = arg0);
  let _createForOfIteratorHelperLoose = arg1;
  const tmp = getStateForGuild(guildId);
  let closure_1 = tmp;
  const item = entitlements.forEach((sku_id) => {
    if (_createForOfIteratorHelperLoose) {
      tmp.unlockedPowerups[sku_id.sku_id] = sku_id;
    } else {
      delete tmp2[tmp];
    }
  });
  let obj = {};
  const merged = Object.assign(obj);
  obj = {};
  const merged1 = Object.assign(tmp);
  obj["appliedBoosts"] = calculateAppliedBoosts(guildId);
  obj[guildId] = obj;
}
({ GUILD_POWERUP_TIER_3_OVERRIDDEN_PURCHASABLE_FEATURES: closure_7, PURCHASABLE_PREMIUM_FEATURES_BOOST_INFO: closure_8 } = BoostedGuildTiers);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_9, BoostedGuildTiers: closure_10, GuildFeatures: closure_11 } = ME);
let closure_12 = {};
let tmp4 = ((PersistedStore) => {
  class GuildPowerupsStore {
    constructor() {
      self = this;
      tmp = GuildPowerupsStore(this, GuildPowerupsStore);
      obj = outer1_3(GuildPowerupsStore);
      tmp2 = outer1_2;
      if (outer1_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildPowerupsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      this.waitFor(outer1_6);
      if (null != arg0) {
        const outer1_12 = arg0;
      }
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_12;
    }
  };
  items[1] = obj;
  obj = {
    key: "getStateForGuild",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        tmp = outer1_12[arg0];
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "shouldFetchCatalogForGuild",
    value(arg0) {
      let catalogFetchCooldown;
      if (null != outer1_12[arg0]) {
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
      if (null != outer1_12[arg0]) {
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
        if (null != outer1_12[arg0]) {
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
        if (null != outer1_12[arg0]) {
          prop = tmp3.hasFetchedUnlockedPowerups;
        }
        tmp = true === prop;
      }
      return tmp;
    }
  };
  return callback(GuildPowerupsStore, items);
})(require("initialize").PersistedStore);
tmp4.displayName = "GuildPowerupsStore";
tmp4.persistKey = "GuildPowerupsStore";
let items = [
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
tmp4 = new tmp4(require("dispatcher"), {
  LOGOUT: function handleReset() {
    let closure_12 = {};
  },
  GUILD_POWERUP_CATALOG_FETCH_SUCCESS: function handleGuildPowerupCatalogFetchSuccess(guildId) {
    let allPowerups;
    let powerupCatalog;
    guildId = guildId.guildId;
    ({ allPowerups, powerupCatalog } = guildId);
    let obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(getStateForGuild(guildId));
    obj["allPowerups"] = allPowerups;
    obj["powerupCatalog"] = powerupCatalog;
    obj["catalogFetchCooldown"] = Date.now();
    obj["hasFetchedPowerupCatalog"] = true;
    obj[guildId] = obj;
  },
  GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: function handleGuildBoostEntitlementsFetchSuccess(guildId) {
    guildId = guildId.guildId;
    let obj = {};
    const tmp = getStateForGuild(guildId);
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(tmp);
    obj["unlockedPowerups"] = guildId.unlockedPowerups;
    obj["appliedBoosts"] = calculateAppliedBoosts(guildId);
    obj["unlockedPowerupsFetchCooldown"] = Date.now();
    obj["hasFetchedUnlockedPowerups"] = true;
    obj[guildId] = obj;
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
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/premium/powerups/GuildPowerupsStore.tsx");

export default tmp4;
