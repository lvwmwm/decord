// Module ID: 9901
// Function ID: 9902
// Name: useGameConsoleAccounts
// Dependencies: [5234, 673, 586, 1470, 2]
// Exports: default

// Module 9901 (useGameConsoleAccounts)
import initialize from "initialize" /* 586 */;
import closure_2 from "set" /* 5234 */;
import { PlatformTypes } from "ME" /* 673 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/game_console/useGameConsoleAccounts.tsx");

export default function useGameConsoleAccounts() {
  let items = [closure_2];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [store.getAccount(null, constants.XBOX), store.getAccount(null, constants.PLAYSTATION), store.getAccount(null, constants.PLAYSTATION_STAGING)];
    return items.filter(callback(table[3]).isNotNullish);
  });
};
