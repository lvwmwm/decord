// Module ID: 11693
// Function ID: 11694
// Name: useGameConsoleAccounts
// Dependencies: [7093, 1072, 504, 1255, 2]
// Exports: default

// Module 11693 (useGameConsoleAccounts)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 7093 */;
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
