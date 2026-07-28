// Module ID: 12448
// Function ID: 96451
// Name: computeDaysUntilNextBadgeDate
// Dependencies: [31, 3747, 12449, 8400, 2]
// Exports: useTimeUntilNextBadge

// Module 12448 (computeDaysUntilNextBadgeDate)
import { useMemo } from "result";

function computeDaysUntilNextBadgeDate(arg0, arg1) {
  return Math.max(0, computeNextBadgeDate(arg0, arg1).diff(importDefault(3747)(), "days"));
}
function computeNextBadgeDate(arg0, arg1) {
  const obj = importDefault(3747)(arg0);
  return importDefault(3747)(arg0).add(arg1, "months").add(1, "day");
}
const result = require("useNextTenureBadge").fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTimeUntilNextBadge.tsx");

export { computeDaysUntilNextBadgeDate };
export const useTimeUntilNextBadge = function useTimeUntilNextBadge() {
  nextTenureBadge = nextTenureBadge(12449).useNextTenureBadge();
  let obj = nextTenureBadge(12449);
  const premiumSince = nextTenureBadge(8400).usePremiumSince();
  const items = [nextTenureBadge, premiumSince];
  return useMemo(() => {
    if (null != nextTenureBadge) {
      if (null != premiumSince) {
        const tenureReqNumMonths = nextTenureBadge.tenureReqNumMonths;
        let obj = outer1_5(premiumSince, tenureReqNumMonths);
        obj = { days: outer1_4(premiumSince, tenureReqNumMonths) };
        const _Math = Math;
        const _Math2 = Math;
        obj.months = Math.max(0, Math.round(obj.diff(premiumSince(outer1_2[1])(), "months", true)));
        return obj;
      }
    }
    return null;
  }, items);
};
