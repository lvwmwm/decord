// Module ID: 11541
// Function ID: 89879
// Name: useCalculatePowerupCardStatus
// Dependencies: []
// Exports: useCalculatePowerupCardStatus

// Module 11541 (useCalculatePowerupCardStatus)
let closure_3 = importAll(dependencyMap[0]);
const PowerupActiveStatusType = arg1(dependencyMap[1]).PowerupActiveStatusType;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/premium/powerups/utils/useCalculatePowerupCardStatus.tsx");

export const useCalculatePowerupCardStatus = function useCalculatePowerupCardStatus(powerup, arg1, arg2) {
  arg1 = powerup;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const items = [arg1, arg2, powerup];
  return React.useMemo((arg0, self) => {
    const sourceEntitlement = self.sourceEntitlement;
    let ends_at;
    if (null != sourceEntitlement) {
      ends_at = sourceEntitlement.ends_at;
    }
    if (null != ends_at) {
      let obj = { type: "expiring", expiringAt: self.sourceEntitlement.ends_at };
      let tmp7 = obj;
    } else {
      if (arg2) {
        if (null != arg0.storeRemovalDate) {
          obj = { type: "removing", removingAt: arg0.storeRemovalDate };
          tmp7 = obj;
        }
      }
      if (self.type === constants.LEVEL_ACTIVATED) {
        const obj1 = { type: "active" };
        const intl2 = arg0(arg2[2]).intl;
        const obj2 = {};
        const sourcePowerup = self.sourcePowerup;
        let title;
        if (null != sourcePowerup) {
          title = sourcePowerup.title;
        }
        if (null == title) {
          const intl3 = arg0(arg2[2]).intl;
          title = intl3.string(arg0(arg2[2]).t.BfF6ED);
        }
        obj2.perkName = title;
        obj1.statusText = intl2.formatToPlainString(self(arg2[3]).WRRYUT, obj2);
        tmp7 = obj1;
      } else if (self.type !== constants.INACTIVE) {
        obj = { type: "active" };
        const intl = arg0(arg2[2]).intl;
        obj.statusText = intl.string(self(arg2[3]).FFLkmx);
        tmp7 = obj;
      }
    }
    return tmp7;
  }, items);
};
