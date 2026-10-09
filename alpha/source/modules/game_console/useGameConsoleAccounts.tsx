// Module ID: 11068
// Function ID: 11069
// Name: useGameConsoleAccounts
// Dependencies: [5758, 1085, 558, 576, 1388, 504, 2]

// Module 11068 (useGameConsoleAccounts)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5758 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const PlatformTypes = Constants.PlatformTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameConsoleAccounts() {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConnectedAccountsStore];
    const fn = function l() {
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
}) : (function useGameConsoleAccounts() {
  let items = [ConnectedAccountsStore];
  const obj = get_initialized;
  return obj.useStateFromStoresArray(items, () => {
    const items = [ConnectedAccountsStore.getAccount(null, constants.XBOX), ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION), ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION_STAGING)];
    return items.filter(GlobalUtils.isNotNullish);
  });
});
const result = size.fileFinishedImporting("modules/game_console/useGameConsoleAccounts.tsx");

export default tmp2;
