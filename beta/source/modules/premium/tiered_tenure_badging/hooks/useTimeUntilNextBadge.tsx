// Module ID: 13738
// Function ID: 13739
// Name: useTimeUntilNextBadge
// Dependencies: [19, 4384, 13739, 11475, 2]
// Exports: computeDaysUntilNextBadgeDate, useTimeUntilNextBadge

// Module 13738 (useTimeUntilNextBadge)
import _mod19 from "module_19" /* 19 */;
import _modDef4384 from "module_4384" /* 4384 */;
import size from "module_2" /* 2 */;

const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTimeUntilNextBadge.tsx");

export const computeDaysUntilNextBadgeDate = function computeDaysUntilNextBadgeDate(arg0, arg1) {
  const obj = _modDef4384(arg0);
  const addResult = _modDef4384(arg0).add(arg1, "months");
  return Math.max(0, _modDef4384(arg0).add(arg1, "months").add(1, "day").diff(_modDef4384(), "days"));
};
export const useTimeUntilNextBadge = function useTimeUntilNextBadge() {
  nextTenureBadge = nextTenureBadge(13739).useNextTenureBadge();
  let obj = nextTenureBadge(13739);
  const premiumSince = nextTenureBadge(11475).usePremiumSince();
  const items = [nextTenureBadge, premiumSince];
  return useMemo(() => {
    if (null != nextTenureBadge) {
      if (null != premiumSince) {
        const tenureReqNumMonths = tmp.tenureReqNumMonths;
        const obj = _modDef4384(tmp2);
        const addResult = _modDef4384(tmp2).add(tenureReqNumMonths, "months");
        const obj2 = { days: null, months: null };
        const _Math = Math;
        const addResult1 = _modDef4384(tmp2).add(tenureReqNumMonths, "months").add(1, "day");
        const obj5 = _modDef4384(tmp2);
        const addResult2 = _modDef4384(tmp2).add(tenureReqNumMonths, "months");
        obj2.days = Math.max(0, _modDef4384(tmp2).add(tenureReqNumMonths, "months").add(1, "day").diff(_modDef4384(), "days"));
        const _Math2 = Math;
        const _Math3 = Math;
        obj2.months = Math.max(0, Math.round(addResult1.diff(_modDef4384(), "months", true)));
        return obj2;
      }
    }
    return null;
  }, items);
};
