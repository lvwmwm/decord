// Module ID: 10876
// Function ID: 10877
// Name: useGameConsoleAccounts
// Dependencies: [4998, 676, 589, 1351, 2]
// Exports: default

// Module 10876 (useGameConsoleAccounts)
import set from "set";
import { PlatformTypes } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/game_console/useGameConsoleAccounts.tsx");

export default function useGameConsoleAccounts() {
  let items = [set];
  return require(589) /* initialize */.useStateFromStoresArray(items, () => {
    const items = [store.getAccount(null, constants.XBOX), store.getAccount(null, constants.PLAYSTATION), store.getAccount(null, constants.PLAYSTATION_STAGING)];
    return items.filter(callback(table[3]).isNotNullish);
  });
};
