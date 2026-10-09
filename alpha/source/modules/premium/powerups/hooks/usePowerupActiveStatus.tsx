// Module ID: 12192
// Function ID: 12193
// Name: usePowerupActiveStatus
// Dependencies: [2086, 4968, 4969, 1085, 4970, 558, 576, 504, 2]
// Exports: isPowerupActiveStatusActive

// Module 12192 (usePowerupActiveStatus)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import GameServerConstants from "GameServerConstants" /* 4970 */;
import GuildStore from "GuildStore" /* 2086 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4968 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ GUILD_POWERUP_TIER_3_OVERRIDDEN_SKUS: closure_4, PowerupActiveStatusType: hasOwnProperty, POWERUPS_INCLUDED_IN_LEVEL: metroRequire, BOOSTING_TIER_TO_LEVEL_SKU_ID: metroImportDefault } = GuildPowerupsConstants);
const GuildFeatures = Constants.GuildFeatures;
let closure_9 = GameServerConstants.GAME_SERVER_POWERUP_SKU_ID;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePowerupsActiveStatuses(arg0, arr) {
  let closure_0;
  let first;
  let flag;
  let stateFromStores;
  let stateFromStores1;
  let tmp10;
  let tmp6;
  let tmp8;
  _require = arg0;
  const tmp2 = stateFromStores;
  let obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp5 = stateFromStores1;
    const items = [stateFromStores1];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function w() {
      return GuildStore.getGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp9 = flag;
    const items1 = [flag];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function _() {
      return GuildPowerupsStore.getStateForGuild(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult2 = require("get initialized");
  stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp10);
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === stateFromStores1) {
      let tmp12;
      if (cResult[8] === arr) {
        tmp12 = cResult[9];
      }
      return tmp12;
    }
  }
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
  const mapped = arr.map((skuId) => {
    let isActiveFromLevel;
    let levelEntitlement;
    let levelPowerup;
    let obj3;
    let tmp3;
    let tmp5;
    if (skuId.skuId === closure_9) {
      let hasItem;
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        if (features != null) {
          hasItem = features.has(GuildFeatures.GAME_SERVERS);
        }
      }
      obj3 = { type: hasItem ? hasOwnProperty.POWERUP_ACTIVATED : hasOwnProperty.INACTIVE, powerup: skuId, sourceEntitlement: "r", sourcePowerup: "toCharArray$esjava$1" };
      const obj2 = { type: hasItem ? hasOwnProperty.POWERUP_ACTIVATED : hasOwnProperty.INACTIVE, powerup: skuId, sourceEntitlement: "r", sourcePowerup: "toCharArray$esjava$1" };
    } else {
      if (null != skuId) {
        if (null != stateFromStores) {
          let obj;
          if (null != stateFromStores1) {
            if (null == metroRequire[skuId.skuId]) {
              obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "backgroundColor" };
            } else {
              obj = { isActiveFromLevel: tmp16.premiumTier >= metroRequire[skuId.skuId], levelEntitlement: tmp3, levelPowerup: tmp5 };
              tmp3 = undefined;
              if (null != metroImportDefault[metroRequire[skuId.skuId]]) {
                const unlockedPowerups = tmp17.unlockedPowerups;
                let tmp4;
                if (unlockedPowerups != null) {
                  tmp4 = unlockedPowerups[tmp2];
                }
                tmp3 = tmp4;
              }
              tmp5 = undefined;
              if (null != metroImportDefault[metroRequire[skuId.skuId]]) {
                const allPowerups = tmp17.allPowerups;
                let tmp6;
                if (allPowerups != null) {
                  tmp6 = allPowerups[tmp2];
                }
                tmp5 = tmp6;
              }
            }
          }
          let hasItem1 = flag;
          ({ isActiveFromLevel, levelEntitlement, levelPowerup } = obj);
          if (flag) {
            hasItem1 = set.has(skuId.skuId);
          }
          let tmp9;
          if (stateFromStores1 != null) {
            const unlockedPowerups2 = stateFromStores1.unlockedPowerups;
            if (unlockedPowerups2 != null) {
              tmp9 = unlockedPowerups2[skuId.skuId];
            }
          }
          if (tmp9 == null) {
            tmp9 = null;
          }
          obj3 = { type: hasOwnProperty.INACTIVE, powerup: skuId, sourceEntitlement: "r", sourcePowerup: "toCharArray$esjava$1" };
          if (isActiveFromLevel) {
            obj3 = { type: hasOwnProperty.LEVEL_ACTIVATED, powerup: skuId, sourceEntitlement: levelEntitlement, sourcePowerup: levelPowerup };
            const obj4 = { type: hasOwnProperty.LEVEL_ACTIVATED, powerup: skuId, sourceEntitlement: levelEntitlement, sourcePowerup: levelPowerup };
          } else if (hasItem1) {
            obj3 = { type: hasOwnProperty.TIER_OVERRIDE_ACTIVATED, powerup: skuId, sourceEntitlement: "Array", sourcePowerup: skuId };
            const obj5 = { type: hasOwnProperty.TIER_OVERRIDE_ACTIVATED, powerup: skuId, sourceEntitlement: "Array", sourcePowerup: skuId };
          } else if (null != tmp9) {
            obj3 = { type: hasOwnProperty.POWERUP_ACTIVATED, powerup: skuId, sourceEntitlement: tmp9, sourcePowerup: skuId };
            const obj6 = { type: hasOwnProperty.POWERUP_ACTIVATED, powerup: skuId, sourceEntitlement: tmp9, sourcePowerup: skuId };
          }
        }
      }
      obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "backgroundColor" };
    }
    return obj3;
  });
  cResult[6] = stateFromStores;
  cResult[7] = stateFromStores1;
  cResult[8] = arr;
  cResult[9] = mapped;
  tmp12 = mapped;
}) : (function usePowerupsActiveStatuses(arg0, arr) {
  let closure_0;
  let flag;
  let stateFromStores;
  let unlockedPowerups;
  _require = arg0;
  let obj = require("get initialized");
  const items = [unlockedPowerups];
  stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  let obj2 = require("get initialized");
  const items1 = [flag];
  unlockedPowerups = obj2.useStateFromStores(items1, () => GuildPowerupsStore.getStateForGuild(closure_0));
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
  return arr.map((skuId) => {
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
        obj3 = { type: INACTIVE, powerup: skuId, sourceEntitlement: "r", sourcePowerup: "toCharArray$esjava$1" };
        const obj2 = { type: INACTIVE, powerup: skuId, sourceEntitlement: "r", sourcePowerup: "toCharArray$esjava$1" };
      }
      INACTIVE = hasOwnProperty.INACTIVE;
    } else {
      if (null != skuId) {
        if (null != stateFromStores) {
          let obj;
          if (null != unlockedPowerups) {
            if (null == metroRequire[skuId.skuId]) {
              obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "backgroundColor" };
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
          obj3 = { type: hasOwnProperty.INACTIVE, powerup: skuId, sourceEntitlement: "r", sourcePowerup: "toCharArray$esjava$1" };
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
      obj = { isActiveFromLevel: false, levelEntitlement: "Boolean", levelPowerup: "backgroundColor" };
    }
    return obj3;
  });
});
let closure_10 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePowerupActiveStatus(arg0, arg1) {
  let first;
  let tmp2;
  const obj = react;
  const cResult = obj.c(3);
  if (cResult[0] !== arg1) {
    let items;
    if (null == arg1) {
      items = [];
    } else {
      items = [arg1];
    }
    cResult[0] = arg1;
    cResult[1] = items;
    tmp2 = items;
  } else {
    tmp2 = cResult[1];
  }
  const arr2 = closure_10(arg0, tmp2);
  if (arr2.length <= 0) {
    let tmp6;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { type: hasOwnProperty.INACTIVE, sourceEntitlement: "Array", sourcePowerup: "code" };
      cResult[2] = obj2;
      tmp6 = obj2;
    } else {
      tmp6 = cResult[2];
    }
    first = tmp6;
  } else {
    first = arr2[0];
  }
  return first;
}) : (function usePowerupActiveStatus(arg0, arg1) {
  let first;
  let items;
  const tmp = closure_10;
  if (null == arg1) {
    items = [];
  } else {
    items = [arg1];
  }
  const tmpResult = tmp(arg0, items);
  if (tmpResult.length <= 0) {
    first = { type: hasOwnProperty.INACTIVE, sourceEntitlement: "Array", sourcePowerup: "code" };
    const obj = { type: hasOwnProperty.INACTIVE, sourceEntitlement: "Array", sourcePowerup: "code" };
  } else {
    first = tmpResult[0];
  }
  return first;
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/usePowerupActiveStatus.tsx");

export default tmp4;
export const isPowerupActiveStatusActive = function isPowerupActiveStatusActive(type) {
  return type.type !== hasOwnProperty.INACTIVE;
};
export const usePowerupsActiveStatuses = tmp3;
