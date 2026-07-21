// Module ID: 11520
// Function ID: 89751
// Name: usePowerupsActiveStatuses
// Dependencies: []
// Exports: default, isPowerupActiveStatusActive

// Module 11520 (usePowerupsActiveStatuses)
function usePowerupsActiveStatuses(guildId, powerups) {
  powerups = guildId;
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
          hasItem = features.has(constants2.GAME_SERVERS);
        }
      }
      if (null != hasItem) {
        if (hasItem) {
          let INACTIVE = constants.POWERUP_ACTIVATED;
        }
        obj.type = INACTIVE;
        obj.powerup = skuId;
        obj.sourceEntitlement = undefined;
        obj.sourcePowerup = undefined;
        return obj;
      }
      INACTIVE = constants.INACTIVE;
    } else {
      if (null != skuId) {
        if (null != stateFromStores) {
          if (null != guild) {
            if (null == closure_7[skuId.skuId]) {
              obj = { isActiveFromLevel: false, levelEntitlement: undefined, levelPowerup: undefined };
            } else {
              let tmp5;
              if (null != closure_8[tmp32]) {
                const unlockedPowerups = guild.unlockedPowerups;
                let tmp7;
                if (null != unlockedPowerups) {
                  tmp7 = unlockedPowerups[tmp4];
                }
                tmp5 = tmp7;
              }
              let tmp8;
              if (null != closure_8[tmp32]) {
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
          let hasItem1 = closure_3;
          ({ isActiveFromLevel, levelEntitlement, levelPowerup } = obj);
          if (closure_3) {
            hasItem1 = set.has(skuId.skuId);
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
          let obj1 = { type: constants.INACTIVE, powerup: skuId, sourceEntitlement: undefined, sourcePowerup: undefined };
          if (isActiveFromLevel) {
            const obj2 = { type: constants.LEVEL_ACTIVATED, powerup: skuId, sourceEntitlement: levelEntitlement, sourcePowerup: levelPowerup };
            obj1 = obj2;
          } else if (hasItem1) {
            const obj3 = { type: constants.TIER_OVERRIDE_ACTIVATED, powerup: skuId, sourceEntitlement: undefined, sourcePowerup: skuId };
            obj1 = obj3;
          } else if (null != tmp16) {
            const obj4 = { type: constants.POWERUP_ACTIVATED, powerup: skuId, sourceEntitlement: tmp16, sourcePowerup: skuId };
            obj1 = obj4;
          }
          return obj1;
        }
      }
      const obj5 = { isActiveFromLevel: false, levelEntitlement: undefined, levelPowerup: undefined };
      obj = obj5;
    }
  }
  const items = [closure_2];
  const stateFromStores = powerups(dependencyMap[5]).useStateFromStores(items, () => guild.getGuild(arg0));
  const dependencyMap = stateFromStores;
  const obj = powerups(dependencyMap[5]);
  const items1 = [closure_3];
  closure_2 = powerups(dependencyMap[5]).useStateFromStores(items1, () => stateForGuild.getStateForGuild(arg0));
  let hasItem;
  if (null != stateFromStores) {
    const features = stateFromStores.features;
    if (null != features) {
      hasItem = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
    }
  }
  closure_3 = null != hasItem && hasItem;
  return powerups.map((skuId) => getPowerupActiveStatus(skuId));
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = arg1(dependencyMap[2]).GAME_SERVER_POWERUP_SKU_ID;
({ GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS: closure_5, PowerupActiveStatusType: closure_6, POWERUPS_INCLUDED_IN_LEVEL: closure_7, BOOSTING_TIER_TO_LEVEL_SKU_ID: closure_8 } = arg1(dependencyMap[3]));
const GuildFeatures = arg1(dependencyMap[4]).GuildFeatures;
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/premium/powerups/hooks/usePowerupActiveStatus.tsx");

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
