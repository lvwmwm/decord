// Module ID: 11020
// Function ID: 11021
// Name: useGameConsoleAccounts
// Dependencies: [6689, 1071, 504, 1254, 2]
// Exports: default

// Module 11020 (useGameConsoleAccounts)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1071 */;
import GlobalUtils from "GlobalUtils" /* 1254 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6689 */;
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
