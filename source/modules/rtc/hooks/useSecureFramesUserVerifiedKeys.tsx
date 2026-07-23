// Module ID: 14517
// Function ID: 110809
// Name: useSecureFramesUserVerifiedKeys
// Dependencies: [8881, 566, 22, 2]
// Exports: useSecureFramesUserVerifiedKeys

// Module 14517 (useSecureFramesUserVerifiedKeys)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("apply").fileFinishedImporting("modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx");

export const useSecureFramesUserVerifiedKeys = function useSecureFramesUserVerifiedKeys(userId) {
  const _require = userId;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStoresArray(items, () => {
    const tmp = outer1_1(outer1_2[2]);
    const entries = outer1_1(outer1_2[2])(outer1_3.getUserVerifiedKeys(closure_0)).entries();
    const mapped = entries.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      return { verifiedKey, timestamp };
    });
    const tmpResult = outer1_1(outer1_2[2])(outer1_3.getUserVerifiedKeys(closure_0));
    return mapped.sortBy((timestamp) => -1 * timestamp.timestamp).value();
  });
};
