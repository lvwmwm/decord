// Module ID: 15454
// Function ID: 15455
// Name: useSecureFramesVerifiedUsers
// Dependencies: [9124, 558, 576, 504, 2]

// Module 15454 (useSecureFramesVerifiedUsers)
import react from "react" /* 576 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 9124 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  let userIds;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VerifiedKeyStore];
    const fn = function o() {
      return userIds.getUserIds();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStoresArray(tmp4, tmp5);
}) : (() => {
  let userIds;
  const items = [VerifiedKeyStore];
  const obj = get_initialized;
  return obj.useStateFromStoresArray(items, () => userIds.getUserIds());
});
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = tmp2;
