// Module ID: 11552
// Function ID: 89941
// Name: useCalculatePowerupCardStatus
// Dependencies: [31, 4018, 1212, 2230, 2]
// Exports: useCalculatePowerupCardStatus

// Module 11552 (useCalculatePowerupCardStatus)
import result from "result";
import { PowerupActiveStatusType } from "BoostedGuildTiers";

const require = arg1;
const result = require("getSystemLocale").fileFinishedImporting("modules/premium/powerups/utils/useCalculatePowerupCardStatus.tsx");

export const useCalculatePowerupCardStatus = function useCalculatePowerupCardStatus(powerup, arg1, arg2) {
  let closure_0 = powerup;
  let closure_1 = arg1;
  let closure_2 = arg2;
  const items = [arg1, arg2, powerup];
  return React.useMemo(() => {
    const sourceEntitlement = lib.sourceEntitlement;
    let ends_at;
    if (null != sourceEntitlement) {
      ends_at = sourceEntitlement.ends_at;
    }
    if (null != ends_at) {
      let obj = { type: "expiring", expiringAt: lib.sourceEntitlement.ends_at };
      let tmp7 = obj;
    } else {
      if (dependencyMap) {
        if (null != powerup.storeRemovalDate) {
          obj = { type: "removing", removingAt: powerup.storeRemovalDate };
          tmp7 = obj;
        }
      }
      if (lib.type === outer1_4.LEVEL_ACTIVATED) {
        const obj1 = { type: "active" };
        const intl2 = powerup(1212).intl;
        const obj2 = {};
        const sourcePowerup = lib.sourcePowerup;
        let title;
        if (null != sourcePowerup) {
          title = sourcePowerup.title;
        }
        if (null == title) {
          const intl3 = powerup(1212).intl;
          title = intl3.string(powerup(1212).t.BfF6ED);
        }
        obj2.perkName = title;
        obj1.statusText = intl2.formatToPlainString(lib(2230).WRRYUT, obj2);
        tmp7 = obj1;
      } else if (lib.type !== outer1_4.INACTIVE) {
        obj = { type: "active" };
        const intl = powerup(1212).intl;
        obj.statusText = intl.string(lib(2230).FFLkmx);
        tmp7 = obj;
      }
    }
    return tmp7;
  }, items);
};
