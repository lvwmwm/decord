// Module ID: 13702
// Function ID: 13703
// Name: useTimeUntilNextBadge
// Dependencies: [19, 4352, 13703, 11439, 2]
// Exports: computeDaysUntilNextBadgeDate, useTimeUntilNextBadge

// Module 13702 (useTimeUntilNextBadge)
import _mod19 from "module_19" /* 19 */;
import _modDef4352 from "module_4352" /* 4352 */;
import size from "module_2" /* 2 */;

const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTimeUntilNextBadge.tsx");

export const computeDaysUntilNextBadgeDate = function computeDaysUntilNextBadgeDate(arg0, arg1) {
  const obj = _modDef4352(arg0);
  const addResult = _modDef4352(arg0).add(arg1, "months");
  return Math.max(0, _modDef4352(arg0).add(arg1, "months").add(1, "day").diff(_modDef4352(), "days"));
};
export const useTimeUntilNextBadge = function useTimeUntilNextBadge() {
  nextTenureBadge = nextTenureBadge(13703).useNextTenureBadge();
  let obj = nextTenureBadge(13703);
  const premiumSince = nextTenureBadge(11439).usePremiumSince();
  const items = [nextTenureBadge, premiumSince];
  return useMemo(() => {
    if (null != nextTenureBadge) {
      if (null != premiumSince) {
        const tenureReqNumMonths = tmp.tenureReqNumMonths;
        const obj = _modDef4352(tmp2);
        const addResult = _modDef4352(tmp2).add(tenureReqNumMonths, "months");
        const obj2 = { days: null, months: null };
        const _Math = Math;
        const addResult1 = _modDef4352(tmp2).add(tenureReqNumMonths, "months").add(1, "day");
        const obj5 = _modDef4352(tmp2);
        const addResult2 = _modDef4352(tmp2).add(tenureReqNumMonths, "months");
        obj2.days = Math.max(0, _modDef4352(tmp2).add(tenureReqNumMonths, "months").add(1, "day").diff(_modDef4352(), "days"));
        const _Math2 = Math;
        const _Math3 = Math;
        obj2.months = Math.max(0, Math.round(addResult1.diff(_modDef4352(), "months", true)));
        return obj2;
      }
    }
    return null;
  }, items);
};
