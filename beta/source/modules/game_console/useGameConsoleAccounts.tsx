// Module ID: 10019
// Function ID: 10020
// Name: useGameConsoleAccounts
// Dependencies: [5500, 1078, 558, 568, 1374, 504, 2]

// Module 10019 (useGameConsoleAccounts)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import GlobalUtils from "GlobalUtils" /* 1374 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5500 */;

require = fn;
const PlatformTypes = fn(1078).PlatformTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/useGameConsoleAccounts.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
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
  return initialize.useStateFromStoresArray(tmp4, tmp5);
}) : (() => {
  let items = [ConnectedAccountsStore];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [ConnectedAccountsStore.getAccount(null, constants.XBOX), ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION), ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION_STAGING)];
    return items.filter(GlobalUtils.isNotNullish);
  });
});
