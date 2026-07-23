// Module ID: 16408
// Function ID: 127918
// Name: useIsCreatorMonetizationRequestRejected
// Dependencies: [16377, 1212, 2]
// Exports: default

// Module 16408 (useIsCreatorMonetizationRequestRejected)
import { CreatorMonetizationApplicationState as closure_2 } from "CreatorMonetizationApplicationState";

const result = require("set").fileFinishedImporting("modules/creator_monetization_eligibility/useIsCreatorMonetizationRequestRejected.tsx");

export default function useIsCreatorMonetizationRequestRejected(latestRequest) {
  let obj = {};
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
  obj.requestCooldownDuration = (function getRequestCooldown(can_reapply_at) {
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
            const intl5 = outer1_0(outer1_1[1]).intl;
            let obj = { months: roundByInterval(43200) };
            let formatToPlainStringResult = intl5.formatToPlainString(outer1_0(outer1_1[1]).t.kridzK, obj);
          } else if (rounded >= 10080) {
            const intl4 = outer1_0(outer1_1[1]).intl;
            obj = { weeks: roundByInterval(10080) };
            formatToPlainStringResult = intl4.formatToPlainString(outer1_0(outer1_1[1]).t.EmoBD2, obj);
          } else if (rounded >= 1440) {
            const intl3 = outer1_0(outer1_1[1]).intl;
            const obj1 = { days: roundByInterval(1440) };
            formatToPlainStringResult = intl3.formatToPlainString(outer1_0(outer1_1[1]).t["k2UNz+"], obj1);
          } else if (rounded >= 60) {
            const intl2 = outer1_0(outer1_1[1]).intl;
            const obj2 = { hours: roundByInterval(60) };
            formatToPlainStringResult = intl2.formatToPlainString(outer1_0(outer1_1[1]).t.xCjYxK, obj2);
          } else {
            const intl = outer1_0(outer1_1[1]).intl;
            obj = { minutes: rounded };
            formatToPlainStringResult = intl.formatToPlainString(outer1_0(outer1_1[1]).t.iXLF9W, obj);
          }
          return formatToPlainStringResult;
        }
      }
    }
  })(can_reapply_at);
  return obj;
};
