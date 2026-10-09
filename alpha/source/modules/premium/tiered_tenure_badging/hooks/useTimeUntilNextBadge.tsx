// Module ID: 13645
// Function ID: 13646
// Name: useTimeUntilNextBadge
// Dependencies: [19, 4661, 13646, 10529, 2]
// Exports: computeDaysUntilNextBadgeDate, useTimeUntilNextBadge

// Module 13645 (useTimeUntilNextBadge)
import react from "react" /* 19 */;
import _modDef4661 from "module_4661" /* 4661 */;
import size from "module_2" /* 2 */;

const useMemo = react.useMemo;
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTimeUntilNextBadge.tsx");

export const computeDaysUntilNextBadgeDate = function computeDaysUntilNextBadgeDate(arg0, arg1) {
  const obj = _modDef4661(arg0);
  const addResult = obj.add(arg1, "months");
  const addResult1 = addResult.add(1, "day");
  return max(0, addResult1.diff(_modDef4661(), "days"));
};
export const useTimeUntilNextBadge = function useTimeUntilNextBadge() {
  let nextTenureBadge;
  let obj = nextTenureBadge(13646);
  nextTenureBadge = obj.useNextTenureBadge();
  let obj2 = nextTenureBadge(10529);
  const premiumSince = obj2.usePremiumSince();
  const items = [nextTenureBadge, premiumSince];
  return useMemo(() => {
    let addResult1;
    let addResult3;
    let max;
    if (null != nextTenureBadge) {
      if (null != premiumSince) {
        const tenureReqNumMonths = tmp.tenureReqNumMonths;
        const obj = _modDef4661(premiumSince);
        const addResult = obj.add(tenureReqNumMonths, "months");
        const _Math = Math;
        const obj2 = { days: max(0, addResult3.diff(_modDef4661(), "days")), months: Math.max(0, Math.round(addResult1.diff(_modDef4661(), "months", true))) };
        max = Math.max;
        addResult1 = addResult.add(1, "day");
        const obj5 = _modDef4661(premiumSince);
        const addResult2 = obj5.add(tenureReqNumMonths, "months");
        const _Math2 = Math;
        const _Math3 = Math;
        addResult3 = addResult2.add(1, "day");
        return obj2;
      }
    }
    return null;
  }, items);
};
