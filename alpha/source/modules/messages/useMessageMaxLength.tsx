// Module ID: 8839
// Function ID: 8840
// Name: useMessageMaxLength
// Dependencies: [1377, 1085, 4534, 558, 576, 504, 2]
// Exports: getMaxMessageLength

// Module 8839 (useMessageMaxLength)
import react from "react" /* 576 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4534 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const get_initialized = tmp(504);
({ MAX_MESSAGE_LENGTH_PREMIUM: closure_4, MAX_MESSAGE_LENGTH: hasOwnProperty } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let currentUser;
  let tmp4;
  let tmp5;
  let obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      const obj = PremiumUtilsDefault;
      return obj.canUseIncreasedMessageLength(currentUser.getCurrentUser()) ? closure_1_4 : closure_1_5;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let currentUser;
  let obj = get_initialized;
  const items = [UserStore];
  return obj.useStateFromStores(items, () => {
    const obj = PremiumUtilsDefault;
    return obj.canUseIncreasedMessageLength(currentUser.getCurrentUser()) ? closure_1_4 : closure_1_5;
  });
});
const result = size.fileFinishedImporting("modules/messages/useMessageMaxLength.tsx");

export default tmp3;
export const getMaxMessageLength = function getMaxMessageLength() {
  const obj = PremiumUtilsDefault;
  return obj.canUseIncreasedMessageLength(UserStore.getCurrentUser()) ? React3 : hasOwnProperty;
};
