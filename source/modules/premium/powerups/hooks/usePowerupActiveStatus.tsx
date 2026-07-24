// Module ID: 11561
// Function ID: 90071
// Name: usePowerupsActiveStatuses
// Dependencies: [1838, 4017, 4019, 4018, 653, 566, 2]
// Exports: default, isPowerupActiveStatusActive

// Module 11561 (usePowerupsActiveStatuses)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GAME_SERVER_POWERUP_SKU_ID as closure_4 } from "NewGamesCoachmarkContent";
import BoostedGuildTiers from "BoostedGuildTiers";
import { GuildFeatures } from "ME";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function usePowerupsActiveStatuses(guildId, powerups) {
  const _require = guildId;
  function getPowerupActiveStatus(skuId) {
    let isActiveFromLevel;
    let levelEntitlement;
    let levelPowerup;
    if (skuId.skuId === getPowerupActiveStatus) {
      let obj = {};
      let hasItem;
      if (null != stateFromStores) {
        const features = stateFromStores.features;
        if (null != features) {
          hasItem = features.has(outer1_9.GAME_SERVERS);
        }
      }
      if (null != hasItem) {
        if (hasItem) {
          let INACTIVE = outer1_6.POWERUP_ACTIVATED;
        }
        obj.type = INACTIVE;
        obj.powerup = skuId;
        obj.sourceEntitlement = undefined;
        obj.sourcePowerup = undefined;
        return obj;
      }
      INACTIVE = outer1_6.INACTIVE;
    } else {
      if (null != skuId) {
        if (null != stateFromStores) {
          if (null != guild) {
            if (null == outer1_7[skuId.skuId]) {
              obj = { isActiveFromLevel: false, levelEntitlement: undefined, levelPowerup: undefined };
            } else {
              let tmp5;
              if (null != outer1_8[tmp32]) {
                const unlockedPowerups = guild.unlockedPowerups;
                let tmp7;
                if (null != unlockedPowerups) {
                  tmp7 = unlockedPowerups[tmp4];
                }
                tmp5 = tmp7;
              }
              let tmp8;
              if (null != outer1_8[tmp32]) {
                const allPowerups = guild.allPowerups;
                let tmp10;
                if (null != allPowerups) {
                  tmp10 = allPowerups[tmp4];
                }
                tmp8 = tmp10;
              }
              obj = { isActiveFromLevel: stateFromStores.premiumTier >= tmp32, levelEntitlement: tmp5, levelPowerup: tmp8 };
              const tmp2 = stateFromStores.premiumTier >= tmp32;
            }
          }
          let hasItem1 = _isNativeReflectConstruct;
          ({ isActiveFromLevel, levelEntitlement, levelPowerup } = obj);
          if (_isNativeReflectConstruct) {
            hasItem1 = outer1_5.has(skuId.skuId);
          }
          let tmp14;
          if (null != guild) {
            const unlockedPowerups2 = guild.unlockedPowerups;
            if (null != unlockedPowerups2) {
              tmp14 = unlockedPowerups2[skuId.skuId];
            }
          }
          let tmp16 = null;
          if (null != tmp14) {
            tmp16 = tmp14;
          }
          let obj1 = { type: outer1_6.INACTIVE, powerup: skuId, sourceEntitlement: undefined, sourcePowerup: undefined };
          if (isActiveFromLevel) {
            const obj2 = { type: outer1_6.LEVEL_ACTIVATED, powerup: skuId, sourceEntitlement: levelEntitlement, sourcePowerup: levelPowerup };
            obj1 = obj2;
          } else if (hasItem1) {
            const obj3 = { type: outer1_6.TIER_OVERRIDE_ACTIVATED, powerup: skuId, sourceEntitlement: undefined, sourcePowerup: skuId };
            obj1 = obj3;
          } else if (null != tmp16) {
            const obj4 = { type: outer1_6.POWERUP_ACTIVATED, powerup: skuId, sourceEntitlement: tmp16, sourcePowerup: skuId };
            obj1 = obj4;
          }
          return obj1;
        }
      }
      const obj5 = { isActiveFromLevel: false, levelEntitlement: undefined, levelPowerup: undefined };
      obj = obj5;
    }
  }
  const items = [_createForOfIteratorHelperLoose];
  stateFromStores = _require(stateFromStores[5]).useStateFromStores(items, () => guild.getGuild(closure_0));
  let obj = _require(stateFromStores[5]);
  const items1 = [_isNativeReflectConstruct];
  _createForOfIteratorHelperLoose = _require(stateFromStores[5]).useStateFromStores(items1, () => stateForGuild.getStateForGuild(closure_0));
  let hasItem;
  if (null != stateFromStores) {
    let features = stateFromStores.features;
    if (null != features) {
      hasItem = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
    }
  }
  _isNativeReflectConstruct = null != hasItem && hasItem;
  return powerups.map((skuId) => getPowerupActiveStatus(skuId));
}
({ GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS: closure_5, PowerupActiveStatusType: closure_6, POWERUPS_INCLUDED_IN_LEVEL: closure_7, BOOSTING_TIER_TO_LEVEL_SKU_ID: closure_8 } = BoostedGuildTiers);
const result = require("NewGamesCoachmarkContent").fileFinishedImporting("modules/premium/powerups/hooks/usePowerupActiveStatus.tsx");

export default function usePowerupActiveStatus(arg0, arg1) {
  if (null == arg1) {
    let items = [];
  } else {
    items = [arg1];
  }
  const tmpResult = usePowerupsActiveStatuses(arg0, items);
  if (tmpResult.length <= 0) {
    const obj = { type: constants.INACTIVE, sourceEntitlement: undefined, sourcePowerup: undefined };
    let first = obj;
  } else {
    first = tmpResult[0];
  }
  return first;
};
export const isPowerupActiveStatusActive = function isPowerupActiveStatusActive(type) {
  return type.type !== constants.INACTIVE;
};
export { usePowerupsActiveStatuses };
