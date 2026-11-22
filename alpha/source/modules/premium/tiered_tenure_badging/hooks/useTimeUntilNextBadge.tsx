// Module ID: 13960
// Function ID: 13961
// Name: useTimeUntilNextBadge
// Dependencies: [19, 2168, 13961, 13956, 2]
// Exports: computeDaysUntilNextBadgeDate, useTimeUntilNextBadge

// Module 13960 (useTimeUntilNextBadge)
import react from "react" /* 19 */;
import _modDef2168 from "module_2168" /* 2168 */;
import size from "module_2" /* 2 */;

const useMemo = react.useMemo;
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTimeUntilNextBadge.tsx");

export function computeDaysUntilNextBadgeDate(arg0, arg1) {
  const obj = _modDef2168(arg0);
  const addResult = obj.add(arg1, "months");
  const addResult1 = addResult.add(1, "day");
  return max(0, addResult1.diff(_modDef2168(), "days"));
}
export function useTimeUntilNextBadge() {
  let nextTenureBadge;
  let obj = nextTenureBadge(13961);
  nextTenureBadge = obj.useNextTenureBadge();
  let obj2 = nextTenureBadge(13956);
  const premiumSince = obj2.usePremiumSince();
  const items = [nextTenureBadge, premiumSince];
  return useMemo(() => {
    let addResult1;
    let addResult3;
    let max;
    if (null != nextTenureBadge) {
      if (null != premiumSince) {
        const tenureReqNumMonths = tmp.tenureReqNumMonths;
        const obj = _modDef2168(premiumSince);
        const addResult = obj.add(tenureReqNumMonths, "months");
        const _Math = Math;
        const obj2 = { days: max(0, addResult3.diff(_modDef2168(), "days")), months: Math.max(0, Math.round(addResult1.diff(_modDef2168(), "months", true))) };
        max = Math.max;
        addResult1 = addResult.add(1, "day");
        const obj5 = _modDef2168(premiumSince);
        const addResult2 = obj5.add(tenureReqNumMonths, "months");
        const _Math2 = Math;
        const _Math3 = Math;
        addResult3 = addResult2.add(1, "day");
        return obj2;
      }
    }
    return null;
  }, items);
}
