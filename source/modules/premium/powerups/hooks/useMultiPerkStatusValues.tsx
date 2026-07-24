// Module ID: 11633
// Function ID: 90423
// Name: useMultiPerkStatusValues
// Dependencies: [4018, 11561, 1212, 2230, 2]
// Exports: default

// Module 11633 (useMultiPerkStatusValues)
import { PowerupActiveStatusType } from "BoostedGuildTiers";

const result = require("getSystemLocale").fileFinishedImporting("modules/premium/powerups/hooks/useMultiPerkStatusValues.tsx");

export default function useMultiPerkStatusValues(powerups) {
  powerups = powerups.powerups;
  let obj = require(11561) /* usePowerupsActiveStatuses */;
  const powerupsActiveStatuses = obj.usePowerupsActiveStatuses(powerups.guildId, powerups);
  const someResult = powerupsActiveStatuses.some((type) => type.type !== outer1_3.INACTIVE);
  if (powerups.length <= 0) {
    return null;
  } else {
    const reduced = powerupsActiveStatuses.reduce((arg0, sourceEntitlement) => {
      sourceEntitlement = sourceEntitlement.sourceEntitlement;
      let ends_at;
      if (null != sourceEntitlement) {
        ends_at = sourceEntitlement.ends_at;
      }
      let tmp2 = arg0;
      if (null != ends_at) {
        if (null == arg0) {
          let tmp3 = ends_at;
        } else {
          tmp3 = arg0;
        }
        tmp2 = tmp3;
      }
      return tmp2;
    }, undefined);
    if (null != reduced) {
      obj = { type: "expiring", expiringAt: reduced };
      let tmp2 = obj;
    } else if (someResult) {
      obj = { type: "active" };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.statusText = intl.string(importDefault(2230).FFLkmx);
      tmp2 = obj;
    }
    const reduced1 = powerupsActiveStatuses.reduce((arg0, type) => {
      let sum = arg0;
      if (type.type === outer1_3.POWERUP_ACTIVATED) {
        sum = arg0 + type.powerup.cost;
      }
      return sum;
    }, 0);
    const first = powerupsActiveStatuses[0];
    let cost;
    if (null != first) {
      let powerup = first.powerup;
      if (null != powerup) {
        cost = powerup.cost;
      }
    }
    let num3 = 0;
    if (null != cost) {
      num3 = cost;
    }
    const reduced2 = powerupsActiveStatuses.reduce((arg0, powerup) => {
      let tmp = arg0;
      powerup = powerup.powerup;
      let cost;
      if (null != powerup) {
        cost = powerup.cost;
      }
      let num = 0;
      if (null != cost) {
        num = cost;
      }
      if (tmp >= num) {
        let cost1;
        if (null != powerup) {
          cost1 = powerup.cost;
        }
        let num2 = 0;
        if (null != cost1) {
          num2 = cost1;
        }
        tmp = num2;
      }
      return tmp;
    }, num3);
    const reduced3 = powerupsActiveStatuses.reduce((arg0, powerup) => {
      powerup = powerup.powerup;
      let cost;
      if (null != powerup) {
        cost = powerup.cost;
      }
      let num = 0;
      if (null != cost) {
        num = cost;
      }
      return arg0 + num;
    }, 0);
    let tmp11 = reduced2;
    if (someResult) {
      tmp11 = reduced1;
    }
    const obj1 = { isActive: someResult, status: tmp2, cost: tmp11 };
    let str3;
    if (!someResult) {
      if (reduced3 > tmp11) {
        str3 = "+";
      }
    }
    obj1.costDecorator = str3;
    obj1.expiringAt = reduced;
    obj1.activeCost = reduced1;
    obj1.minCost = reduced2;
    obj1.totalCost = reduced3;
    return obj1;
  }
};
