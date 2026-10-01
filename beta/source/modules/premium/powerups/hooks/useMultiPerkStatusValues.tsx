// Module ID: 12069
// Function ID: 12070
// Name: useMultiPerkStatusValues
// Dependencies: [4724, 11996, 1115, 2519, 2]
// Exports: default

// Module 12069 (useMultiPerkStatusValues)
import _modDef2519 from "module_2519" /* 2519 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import usePowerupActiveStatus from "usePowerupActiveStatus" /* 11996 */;
import size from "module_2" /* 2 */;

let tmp;
const intl2 = tmp(1115);
const PowerupActiveStatusType = GuildPowerupsConstants.PowerupActiveStatusType;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useMultiPerkStatusValues.tsx");

export default function useMultiPerkStatusValues(powerups) {
  let intl;
  let str;
  powerups = powerups.powerups;
  let tmp2 = dependencyMap;
  const guildId = powerups.guildId;
  let tmp = require;
  const obj = usePowerupActiveStatus;
  const powerupsActiveStatuses = obj.usePowerupsActiveStatuses(guildId, powerups);
  const someResult = powerupsActiveStatuses.some((type) => type.type !== constants.INACTIVE);
  if (powerups.length <= 0) {
    return null;
  } else {
    let tmp4;
    const reduced = powerupsActiveStatuses.reduce((acc, sourceEntitlement) => {
      sourceEntitlement = sourceEntitlement.sourceEntitlement;
      let ends_at;
      if (sourceEntitlement != null) {
        ends_at = sourceEntitlement.ends_at;
      }
      let tmp2 = acc;
      if (null != ends_at) {
        let tmp3;
        if (null == acc) {
          tmp3 = ends_at;
        } else {
          tmp3 = acc;
        }
        tmp2 = tmp3;
      }
      return tmp2;
    }, undefined);
    if (null != reduced) {
      tmp4 = { type: "expiring", expiringAt: reduced };
      const obj2 = { type: "expiring", expiringAt: reduced };
    } else if (someResult) {
      const obj3 = { type: "active", statusText: intl.string(_modDef2519.FFLkmx) };
      intl = intl2.intl;
      tmp4 = obj3;
    }
    const reduced1 = powerupsActiveStatuses.reduce((acc, type) => {
      let sum = acc;
      if (type.type === constants.POWERUP_ACTIVATED) {
        sum = acc + type.powerup.cost;
      }
      return sum;
    }, 0);
    const first = powerupsActiveStatuses[0];
    let num;
    const reduce = powerupsActiveStatuses.reduce;
    if (first != null) {
      let powerup = first.powerup;
      if (powerup != null) {
        num = powerup.cost;
      }
    }
    if (num == null) {
      num = 0;
    }
    const reduced2 = reduce((arg0, powerup) => {
      powerup = powerup.powerup;
      let num;
      if (powerup != null) {
        num = powerup.cost;
      }
      if (num == null) {
        num = 0;
      }
      let tmp = arg0;
      if (arg0 >= num) {
        let num2;
        if (powerup != null) {
          num2 = powerup.cost;
        }
        if (num2 == null) {
          num2 = 0;
        }
        tmp = num2;
      }
      return tmp;
    }, num);
    const reduced3 = powerupsActiveStatuses.reduce((acc, powerup) => {
      powerup = powerup.powerup;
      let num;
      if (powerup != null) {
        num = powerup.cost;
      }
      if (num == null) {
        num = 0;
      }
      return acc + num;
    }, 0);
    let tmp10 = reduced2;
    if (someResult) {
      tmp10 = reduced1;
    }
    const obj4 = { isActive: someResult, status: tmp4, cost: tmp10, costDecorator: str, expiringAt: reduced, activeCost: reduced1, minCost: reduced2, totalCost: reduced3 };
    str = undefined;
    if (!someResult) {
      if (reduced3 > tmp10) {
        str = "+";
      }
    }
    return obj4;
  }
};
