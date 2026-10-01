// Module ID: 11996
// Function ID: 11997
// Name: usePowerupActiveStatus
// Dependencies: [2067, 4723, 4724, 1074, 4725, 504, 2]
// Exports: default, isPowerupActiveStatusActive, usePowerupsActiveStatuses

// Module 11996 (usePowerupActiveStatus)
import Constants from "Constants" /* 1074 */;
import GameServerConstants from "GameServerConstants" /* 4725 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4723 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_2;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const f95194 = () => GuildStore.getGuild(closure_0);
const f95195 = () => GuildPowerupsStore.getStateForGuild(closure_0);
({ GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS: closure_4, PowerupActiveStatusType: hasOwnProperty, POWERUPS_INCLUDED_IN_LEVEL: metroRequire, BOOSTING_TIER_TO_LEVEL_SKU_ID: metroImportDefault } = GuildPowerupsConstants);
const GuildFeatures = Constants.GuildFeatures;
let closure_9 = GameServerConstants.GAME_SERVER_POWERUP_SKU_ID;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/usePowerupActiveStatus.tsx");

export default function usePowerupActiveStatus(arg0, arg1) {
  let closure_0;
  let first;
  let flag;
  let items;
  let stateFromStores;
  let unlockedPowerups;
  if (null == arg1) {
    items = [];
  } else {
    items = [arg1];
  }
  _require = arg0;
  let obj = require("get initialized");
  const items1 = [unlockedPowerups];
  stateFromStores = obj.useStateFromStores(items1, f95194);
  let obj2 = require("get initialized");
  const items2 = [flag];
  unlockedPowerups = obj2.useStateFromStores(items2, f95195);
  flag = undefined;
  if (stateFromStores != null) {
    let features = stateFromStores.features;
    if (features != null) {
      flag = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
    }
  }
  if (flag == null) {
    flag = false;
  }
  const mapped = items.map((skuId) => {
    let isActiveFromLevel;
    let levelEntitlement;
    let levelPowerup;
    let obj3;
    if (skuId.skuId === closure_9) {
      let hasItem;
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        if (features != null) {
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
      }
      if (hasItem != null) {
        let INACTIVE;
        if (hasItem) {
          INACTIVE = hasOwnProperty.POWERUP_ACTIVATED;
        }
        obj3 = { type: INACTIVE, powerup: skuId, sourceEntitlement: "r", sourcePowerup: "HermesInternal" };
        const obj2 = { type: INACTIVE, powerup: skuId, sourceEntitlement: "r", sourcePowerup: "HermesInternal" };
      }
      INACTIVE = hasOwnProperty.INACTIVE;
    } else {
      if (null != skuId) {
        if (null != stateFromStores) {
          let obj;
          if (null != unlockedPowerups) {
            if (null == metroRequire[skuId.skuId]) {
              obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "paddingHorizontal" };
            } else {
              let tmp4;
              const tmp = tmp18.premiumTier >= metroRequire[skuId.skuId];
              if (null != metroImportDefault[metroRequire[skuId.skuId]]) {
                unlockedPowerups = tmp19.unlockedPowerups;
                let tmp5;
                if (unlockedPowerups != null) {
                  tmp5 = unlockedPowerups[tmp3];
                }
                tmp4 = tmp5;
              }
              let tmp6;
              if (null != metroImportDefault[metroRequire[skuId.skuId]]) {
                const allPowerups = tmp19.allPowerups;
                let tmp7;
                if (allPowerups != null) {
                  tmp7 = allPowerups[tmp3];
                }
                tmp6 = tmp7;
              }
              obj = { isActiveFromLevel: tmp, levelEntitlement: tmp4, levelPowerup: tmp6 };
            }
          }
          let hasItem1 = flag;
          ({ isActiveFromLevel, levelEntitlement, levelPowerup } = obj);
          if (flag) {
            hasItem1 = set.has(skuId.skuId);
          }
          let tmp10;
          if (unlockedPowerups != null) {
            const unlockedPowerups2 = unlockedPowerups.unlockedPowerups;
            if (unlockedPowerups2 != null) {
              tmp10 = unlockedPowerups2[skuId.skuId];
            }
          }
          if (tmp10 == null) {
            tmp10 = null;
          }
          obj3 = { type: hasOwnProperty.INACTIVE, powerup: skuId, sourceEntitlement: "r", sourcePowerup: "HermesInternal" };
          if (isActiveFromLevel) {
            obj3 = { type: hasOwnProperty.LEVEL_ACTIVATED, powerup: skuId, sourceEntitlement: levelEntitlement, sourcePowerup: levelPowerup };
            const obj4 = { type: hasOwnProperty.LEVEL_ACTIVATED, powerup: skuId, sourceEntitlement: levelEntitlement, sourcePowerup: levelPowerup };
          } else if (hasItem1) {
            obj3 = { type: hasOwnProperty.TIER_OVERRIDE_ACTIVATED, powerup: skuId, sourceEntitlement: "Array", sourcePowerup: skuId };
            const obj5 = { type: hasOwnProperty.TIER_OVERRIDE_ACTIVATED, powerup: skuId, sourceEntitlement: "Array", sourcePowerup: skuId };
          } else if (null != tmp10) {
            obj3 = { type: hasOwnProperty.POWERUP_ACTIVATED, powerup: skuId, sourceEntitlement: tmp10, sourcePowerup: skuId };
            const obj6 = { type: hasOwnProperty.POWERUP_ACTIVATED, powerup: skuId, sourceEntitlement: tmp10, sourcePowerup: skuId };
          }
        }
      }
      obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "paddingHorizontal" };
    }
    return obj3;
  });
  if (mapped.length <= 0) {
    let obj3 = { type: constants.INACTIVE, sourceEntitlement: "Array", sourcePowerup: "paddingHorizontal" };
    let tmp4 = constants;
    first = obj3;
  } else {
    first = mapped[0];
  }
  return first;
};
export const isPowerupActiveStatusActive = function isPowerupActiveStatusActive(type) {
  return type.type !== hasOwnProperty.INACTIVE;
};
export const usePowerupsActiveStatuses = function usePowerupsActiveStatuses(guildId, powerups) {
  let flag;
  let stateFromStores;
  _require = guildId;
  const items = [closure_2];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, f95194);
  const items1 = [flag];
  const obj2 = require("get initialized");
  closure_2 = obj2.useStateFromStores(items1, f95195);
  flag = undefined;
  if (stateFromStores != null) {
    const features = stateFromStores.features;
    if (features != null) {
      flag = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
    }
  }
  if (flag == null) {
    flag = false;
  }
  return powerups.map((skuId) => {
    let isActiveFromLevel;
    let levelEntitlement;
    let levelPowerup;
    let obj3;
    if (skuId.skuId === closure_9) {
      let hasItem;
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        if (features != null) {
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
      }
      if (hasItem != null) {
        let INACTIVE;
        if (hasItem) {
          INACTIVE = hasOwnProperty.POWERUP_ACTIVATED;
        }
        obj3 = { type: INACTIVE, powerup: skuId, sourceEntitlement: "r", sourcePowerup: "HermesInternal" };
        const obj2 = { type: INACTIVE, powerup: skuId, sourceEntitlement: "r", sourcePowerup: "HermesInternal" };
      }
      INACTIVE = hasOwnProperty.INACTIVE;
    } else {
      if (null != skuId) {
        if (null != stateFromStores) {
          let obj;
          if (null != unlockedPowerups) {
            if (null == metroRequire[skuId.skuId]) {
              obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "paddingHorizontal" };
            } else {
              let tmp4;
              const tmp = tmp18.premiumTier >= metroRequire[skuId.skuId];
              if (null != metroImportDefault[metroRequire[skuId.skuId]]) {
                unlockedPowerups = tmp19.unlockedPowerups;
                let tmp5;
                if (unlockedPowerups != null) {
                  tmp5 = unlockedPowerups[tmp3];
                }
                tmp4 = tmp5;
              }
              let tmp6;
              if (null != metroImportDefault[metroRequire[skuId.skuId]]) {
                const allPowerups = tmp19.allPowerups;
                let tmp7;
                if (allPowerups != null) {
                  tmp7 = allPowerups[tmp3];
                }
                tmp6 = tmp7;
              }
              obj = { isActiveFromLevel: tmp, levelEntitlement: tmp4, levelPowerup: tmp6 };
            }
          }
          let hasItem1 = flag;
          ({ isActiveFromLevel, levelEntitlement, levelPowerup } = obj);
          if (flag) {
            hasItem1 = set.has(skuId.skuId);
          }
          let tmp10;
          if (unlockedPowerups != null) {
            const unlockedPowerups2 = unlockedPowerups.unlockedPowerups;
            if (unlockedPowerups2 != null) {
              tmp10 = unlockedPowerups2[skuId.skuId];
            }
          }
          if (tmp10 == null) {
            tmp10 = null;
          }
          obj3 = { type: hasOwnProperty.INACTIVE, powerup: skuId, sourceEntitlement: "r", sourcePowerup: "HermesInternal" };
          if (isActiveFromLevel) {
            obj3 = { type: hasOwnProperty.LEVEL_ACTIVATED, powerup: skuId, sourceEntitlement: levelEntitlement, sourcePowerup: levelPowerup };
            const obj4 = { type: hasOwnProperty.LEVEL_ACTIVATED, powerup: skuId, sourceEntitlement: levelEntitlement, sourcePowerup: levelPowerup };
          } else if (hasItem1) {
            obj3 = { type: hasOwnProperty.TIER_OVERRIDE_ACTIVATED, powerup: skuId, sourceEntitlement: "Array", sourcePowerup: skuId };
            const obj5 = { type: hasOwnProperty.TIER_OVERRIDE_ACTIVATED, powerup: skuId, sourceEntitlement: "Array", sourcePowerup: skuId };
          } else if (null != tmp10) {
            obj3 = { type: hasOwnProperty.POWERUP_ACTIVATED, powerup: skuId, sourceEntitlement: tmp10, sourcePowerup: skuId };
            const obj6 = { type: hasOwnProperty.POWERUP_ACTIVATED, powerup: skuId, sourceEntitlement: tmp10, sourcePowerup: skuId };
          }
        }
      }
      obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "paddingHorizontal" };
    }
    return obj3;
  });
};
