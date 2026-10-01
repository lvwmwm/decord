// Module ID: 12015
// Function ID: 12016
// Name: useCalculatePowerupCardStatus
// Dependencies: [19, 4724, 1115, 2519, 2]
// Exports: useCalculatePowerupCardStatus

// Module 12015 (useCalculatePowerupCardStatus)
import intl4 from "intl" /* 1115 */;
import _modDef2519 from "module_2519" /* 2519 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const PowerupActiveStatusType = GuildPowerupsConstants.PowerupActiveStatusType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/useCalculatePowerupCardStatus.tsx");

export const useCalculatePowerupCardStatus = function useCalculatePowerupCardStatus(powerup, arg1, arg2) {
  let sourceEntitlement = arg1;
  let closure_2 = arg2;
  const items = [arg1, arg2, powerup];
  return react.useMemo(() => {
    let intl;
    let obj5;
    let tmp5;
    sourceEntitlement = sourceEntitlement.sourceEntitlement;
    let ends_at;
    if (sourceEntitlement != null) {
      ends_at = sourceEntitlement.ends_at;
    }
    if (null != ends_at) {
      tmp5 = { type: "expiring", expiringAt: sourceEntitlement.sourceEntitlement.ends_at };
      const obj2 = { type: "expiring", expiringAt: sourceEntitlement.sourceEntitlement.ends_at };
    } else {
      const tmp13 = closure_2;
      if (tmp13) {
        if (null != powerup.storeRemovalDate) {
          tmp5 = { type: "removing", removingAt: tmp3.storeRemovalDate };
          const obj3 = { type: "removing", removingAt: tmp3.storeRemovalDate };
        }
      }
      if (sourceEntitlement.type === PowerupActiveStatusType.LEVEL_ACTIVATED) {
        const intl2 = intl4.intl;
        const formatToPlainString = intl2.formatToPlainString;
        const sourcePowerup = tmp.sourcePowerup;
        let title;
        const WRRYUT = _modDef2519.WRRYUT;
        if (sourcePowerup != null) {
          title = sourcePowerup.title;
        }
        if (title == null) {
          const intl3 = tmp9(1115).intl;
          title = intl3.string(tmp9(1115).t.BfF6ED);
        }
        const obj4 = { type: "active", statusText: formatToPlainString(WRRYUT, obj5) };
        tmp5 = obj4;
        obj5 = { perkName: title };
      } else if (sourceEntitlement.type !== tmp4.INACTIVE) {
        const obj = { type: "active", statusText: intl.string(_modDef2519.FFLkmx) };
        intl = intl4.intl;
        tmp5 = obj;
      }
    }
    return tmp5;
  }, items);
};
