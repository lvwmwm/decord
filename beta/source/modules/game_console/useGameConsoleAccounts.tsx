// Module ID: 9217
// Function ID: 9218
// Name: useGameConsoleAccounts
// Dependencies: [5594, 1086, 558, 576, 1376, 504, 2]

// Module 9217 (useGameConsoleAccounts)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1086 */;
import GlobalUtils from "GlobalUtils" /* 1376 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5594 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const PlatformTypes = Constants.PlatformTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConnectedAccountsStore];
    const fn = function o() {
      const items = [ConnectedAccountsStore.getAccount(null, constants.XBOX), ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION), ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION_STAGING)];
      return items.filter(GlobalUtils.isNotNullish);
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
  let items = [ConnectedAccountsStore];
  const obj = get_initialized;
  return obj.useStateFromStoresArray(items, () => {
    const items = [ConnectedAccountsStore.getAccount(null, constants.XBOX), ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION), ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION_STAGING)];
    return items.filter(GlobalUtils.isNotNullish);
  });
});
const result = size.fileFinishedImporting("modules/game_console/useGameConsoleAccounts.tsx");

export default tmp2;
