// Module ID: 16200
// Function ID: 125564
// Name: clearPendingRetry
// Dependencies: [5, 13821, 4, 561, 664, 16201, 507, 686, 1184, 2]
// Exports: clearWarning, forceFetchWarning, resetFetchState

// Module 16200 (clearPendingRetry)
import isParentalConsentWarningFetchEnabled from "isParentalConsentWarningFetchEnabled";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "Backoff";

const require = arg1;
function clearPendingRetry() {
  if (null != c8) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c8);
    c8 = null;
  }
}
function fetchWarning() {
  if (obj.isParentalConsentWarningFetchEnabled("parental_consent_warning_manager")) {
    if (null != c7) {
      return c7;
    } else {
      const _require = c9;
      // CreateGeneratorClosureLongIndex (0x67)
      const tmp7 = callback(tmp)();
      c7 = tmp7;
      return tmp7;
    }
  } else {
    return Promise.resolve();
  }
  obj = _require(16201);
}
function maybeFetchWarning() {
  return _maybeFetchWarning(...arguments);
}
function _maybeFetchWarning() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _forceFetchWarning() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const logger = new require("set").Logger("ParentalConsentWarning");
const result = 5 * require("set").Millis.SECOND;
importDefaultResult = new importDefaultResult(result, 5 * require("set").Millis.MINUTE, true);
let c7 = null;
let c8 = null;
let c9 = 0;
const result1 = require("log").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningActionCreators.tsx");

export { maybeFetchWarning };
export const forceFetchWarning = function forceFetchWarning() {
  return _forceFetchWarning(...arguments);
};
export const resetFetchState = function resetFetchState() {
  closure_9 = closure_9 + 1;
  clearPendingRetry();
  let c7 = null;
  importDefaultResult.succeed();
};
export const clearWarning = function clearWarning() {
  importDefault(686).dispatch({ type: "PARENTAL_CONSENT_WARNING_CLEARED" });
};
