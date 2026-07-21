// Module ID: 16028
// Function ID: 123025
// Name: clearPendingRetry
// Dependencies: []
// Exports: clearWarning, forceFetchWarning, resetFetchState

// Module 16028 (clearPendingRetry)
function clearPendingRetry() {
  if (null != closure_8) {
    const _clearTimeout = clearTimeout;
    clearTimeout(closure_8);
    closure_8 = null;
  }
}
function fetchWarning() {
  if (obj.isParentalConsentWarningFetchEnabled("parental_consent_warning_manager")) {
    if (null != closure_7) {
      return closure_7;
    } else {
      const callback = closure_9;
      // CreateGeneratorClosureLongIndex (0x67)
      const tmp7 = callback2(tmp)();
      closure_7 = tmp7;
      return tmp7;
    }
  } else {
    return Promise.resolve();
  }
  const obj = callback(dependencyMap[5]);
}
function maybeFetchWarning() {
  return _maybeFetchWarning(...arguments);
}
function _maybeFetchWarning() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _maybeFetchWarning = obj;
  return obj(...arguments);
}
function _forceFetchWarning() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _forceFetchWarning = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const logger = new arg1(dependencyMap[2]).Logger("ParentalConsentWarning");
let importDefaultResult = importDefault(dependencyMap[3]);
const result = 5 * importDefault(dependencyMap[4]).Millis.SECOND;
importDefaultResult = new importDefaultResult(result, 5 * importDefault(dependencyMap[4]).Millis.MINUTE, true);
let closure_7 = null;
let closure_8 = null;
let closure_9 = 0;
const result1 = arg1(dependencyMap[9]).fileFinishedImporting("modules/parent_tools/ParentalConsentWarningActionCreators.tsx");

export { maybeFetchWarning };
export const forceFetchWarning = function forceFetchWarning() {
  return _forceFetchWarning(...arguments);
};
export const resetFetchState = function resetFetchState() {
  closure_9 = closure_9 + 1;
  clearPendingRetry();
  let closure_7 = null;
  importDefaultResult.succeed();
};
export const clearWarning = function clearWarning() {
  importDefault(dependencyMap[7]).dispatch({ type: "PARENTAL_CONSENT_WARNING_CLEARED" });
};
