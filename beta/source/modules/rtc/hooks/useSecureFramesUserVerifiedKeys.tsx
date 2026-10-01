// Module ID: 15468
// Function ID: 15469
// Name: useSecureFramesUserVerifiedKeys
// Dependencies: [9147, 504, 12, 2]
// Exports: useSecureFramesUserVerifiedKeys

// Module 15468 (useSecureFramesUserVerifiedKeys)
import _modDef12 from "module_12" /* 12 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 9147 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx");

export const useSecureFramesUserVerifiedKeys = function useSecureFramesUserVerifiedKeys(userId) {
  _require = userId;
  const items = [VerifiedKeyStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    const tmp = _modDef12;
    const tmpResult = tmp(VerifiedKeyStore.getUserVerifiedKeys(userId));
    const entries = tmpResult.entries();
    const mapped = entries.map((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      return { verifiedKey, timestamp };
    });
    const iter = mapped.sortBy((timestamp) => -1 * timestamp.timestamp);
    return iter.value();
  });
};
