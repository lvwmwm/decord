// Module ID: 10041
// Function ID: 10042
// Name: useGameConsoleAccounts
// Dependencies: [5498, 1074, 504, 1370, 2]
// Exports: default

// Module 10041 (useGameConsoleAccounts)
import initialize from "initialize" /* 504 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5498 */;

require = fn;
const PlatformTypes = fn(1074).PlatformTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/useGameConsoleAccounts.tsx");

export default function useGameConsoleAccounts() {
  let items = [ConnectedAccountsStore];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [ConnectedAccountsStore.getAccount(null, constants.XBOX), ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION), ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION_STAGING)];
    return items.filter(GlobalUtils.isNotNullish);
  });
};
