// Module ID: 16275
// Function ID: 125641
// Name: useIsCreatorMonetizationRequestRejected
// Dependencies: []
// Exports: default

// Module 16275 (useIsCreatorMonetizationRequestRejected)
let closure_2 = require(dependencyMap[0]).CreatorMonetizationApplicationState;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/creator_monetization_eligibility/useIsCreatorMonetizationRequestRejected.tsx");

export default function useIsCreatorMonetizationRequestRejected(latestRequest) {
  const obj = {};
  let state;
  if (null != latestRequest) {
    latestRequest = latestRequest.latestRequest;
    if (null != latestRequest) {
      state = latestRequest.state;
    }
  }
  obj.isApplicationRejected = state === constants.REJECTED;
  let can_reapply_at;
  if (null != latestRequest) {
    const rejection = latestRequest.rejection;
    if (null != rejection) {
      can_reapply_at = rejection.can_reapply_at;
    }
  }
  obj.requestCooldownDuration = function getRequestCooldown(can_reapply_at) {
    function roundByInterval(arg0) {
      return Math.round(rounded / arg0);
    }
    if (null != can_reapply_at) {
      const _Date = Date;
      const parsed = Date.parse(can_reapply_at);
      const _Date2 = Date;
      const timestamp = Date.now();
      const _isNaN = isNaN;
      if (!isNaN(parsed)) {
        if (parsed >= timestamp) {
          const _Math = Math;
          const rounded = Math.round((parsed - timestamp) / 60000);
          if (rounded >= 43200) {
            const intl5 = rounded(closure_1[1]).intl;
            let obj = { months: roundByInterval(43200) };
            let formatToPlainStringResult = intl5.formatToPlainString(rounded(closure_1[1]).t.kridzK, obj);
          } else if (rounded >= 10080) {
            const intl4 = rounded(closure_1[1]).intl;
            obj = { weeks: roundByInterval(10080) };
            formatToPlainStringResult = intl4.formatToPlainString(rounded(closure_1[1]).t.EmoBD2, obj);
          } else if (rounded >= 1440) {
            const intl3 = rounded(closure_1[1]).intl;
            const obj1 = { days: roundByInterval(1440) };
            formatToPlainStringResult = intl3.formatToPlainString(rounded(closure_1[1]).t.k2UNz+, obj1);
          } else if (rounded >= 60) {
            const intl2 = rounded(closure_1[1]).intl;
            const obj2 = { hours: roundByInterval(60) };
            formatToPlainStringResult = intl2.formatToPlainString(rounded(closure_1[1]).t.xCjYxK, obj2);
          } else {
            const intl = rounded(closure_1[1]).intl;
            obj = { minutes: rounded };
            formatToPlainStringResult = intl.formatToPlainString(rounded(closure_1[1]).t.iXLF9W, obj);
          }
          return formatToPlainStringResult;
        }
      }
    }
  }(can_reapply_at);
  return obj;
};
