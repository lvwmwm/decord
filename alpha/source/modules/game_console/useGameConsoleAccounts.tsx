// Module ID: 11937
// Function ID: 11938
// Name: useGameConsoleAccounts
// Dependencies: [6566, 1072, 504, 1380, 2]
// Exports: default

// Module 11937 (useGameConsoleAccounts)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6566 */;
import size from "module_2" /* 2 */;

const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/game_console/useGameConsoleAccounts.tsx");

export default function useGameConsoleAccounts() {
  let items = [ConnectedAccountsStore];
  const obj = get_initialized;
  return obj.useStateFromStoresArray(items, () => {
    const items = [ConnectedAccountsStore.getAccount(null, constants.XBOX), ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION), ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION_STAGING)];
    return items.filter(GlobalUtils.isNotNullish);
  });
};
