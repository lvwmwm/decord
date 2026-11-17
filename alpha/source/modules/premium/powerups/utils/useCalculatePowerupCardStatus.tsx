// Module ID: 14032
// Function ID: 14033
// Name: useCalculatePowerupCardStatus
// Dependencies: [19, 5518, 1113, 2735, 2]
// Exports: useCalculatePowerupCardStatus

// Module 14032 (useCalculatePowerupCardStatus)
import intl4 from "intl" /* 1113 */;
import _modDef2735 from "module_2735" /* 2735 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5518 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const PowerupActiveStatusType = GuildPowerupsConstants.PowerupActiveStatusType;
const result = size.fileFinishedImporting("modules/premium/powerups/utils/useCalculatePowerupCardStatus.tsx");

export function useCalculatePowerupCardStatus(powerup, arg1, arg2) {
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
        const WRRYUT = _modDef2735.WRRYUT;
        if (sourcePowerup != null) {
          title = sourcePowerup.title;
        }
        if (title == null) {
          const intl3 = tmp9(1113).intl;
          title = intl3.string(tmp9(1113).t.BfF6ED);
        }
        const obj4 = { type: "active", statusText: formatToPlainString(WRRYUT, obj5) };
        tmp5 = obj4;
        obj5 = { perkName: title };
      } else if (sourceEntitlement.type !== tmp4.INACTIVE) {
        const obj = { type: "active", statusText: intl.string(_modDef2735.FFLkmx) };
        intl = intl4.intl;
        tmp5 = obj;
      }
    }
    return tmp5;
  }, items);
}
