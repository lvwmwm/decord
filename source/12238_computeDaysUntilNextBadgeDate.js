// Module ID: 12238
// Function ID: 93890
// Name: computeDaysUntilNextBadgeDate
// Dependencies: []
// Exports: useTimeUntilNextBadge

// Module 12238 (computeDaysUntilNextBadgeDate)
function computeDaysUntilNextBadgeDate(arg0, arg1) {
  return Math.max(0, computeNextBadgeDate(arg0, arg1).diff(importDefault(dependencyMap[1])(), "days"));
}
function computeNextBadgeDate(arg0, arg1) {
  const obj = importDefault(dependencyMap[1])(arg0);
  return importDefault(dependencyMap[1])(arg0).add(arg1, "months").add(1, "day");
}
const useMemo = require(dependencyMap[0]).useMemo;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTimeUntilNextBadge.tsx");

export { computeDaysUntilNextBadgeDate };
export const useTimeUntilNextBadge = function useTimeUntilNextBadge() {
  const nextTenureBadge = require(dependencyMap[2]).useNextTenureBadge();
  const require = nextTenureBadge;
  const obj = require(dependencyMap[2]);
  const premiumSince = require(dependencyMap[3]).usePremiumSince();
  const importDefault = premiumSince;
  const items = [nextTenureBadge, premiumSince];
  return useMemo(() => {
    if (null != nextTenureBadge) {
      if (null != premiumSince) {
        const tenureReqNumMonths = nextTenureBadge.tenureReqNumMonths;
        let obj = callback2(premiumSince, tenureReqNumMonths);
        obj = { days: callback(premiumSince, tenureReqNumMonths) };
        const _Math = Math;
        const _Math2 = Math;
        obj.months = Math.max(0, Math.round(obj.diff(premiumSince(closure_2[1])(), "months", true)));
        return obj;
      }
    }
    return null;
  }, items);
};
