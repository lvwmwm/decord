// Module ID: 7418
// Function ID: 7419
// Name: isIncludedInMarketingRollout
// Dependencies: [687, 1217, 2]
// Exports: default

// Module 7418 (isIncludedInMarketingRollout)
let result = require("set").fileFinishedImporting("modules/premium/promotions/isIncludedInMarketingRollout.tsx");

export default function isIncludedInMarketingRollout(isTimed, arg1, getTime) {
  if (isTimed.isTimed) {
    if (null != isTimed.effectiveStartDate) {
      const effectiveStartDate = isTimed.effectiveStartDate;
      const time = getTime.getTime();
      const diff = time - effectiveStartDate.getTime();
      const _Math = Math;
      const _Math2 = Math;
      const result = 10000 * Math.min(1, Math.max(0, 0.2 * (diff / importDefault(687).Millis.HOUR)));
      const _HermesInternal = HermesInternal;
      return importDefault(1217).v3("" + isTimed.promotionId + ":" + arg1) % 10000 < result;
    }
  }
  return true;
};
