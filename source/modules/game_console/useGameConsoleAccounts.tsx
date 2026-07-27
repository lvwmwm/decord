// Module ID: 8860
// Function ID: 70142
// Name: useGameConsoleAccounts
// Dependencies: [4813, 653, 566, 1327, 2]
// Exports: default

// Module 8860 (useGameConsoleAccounts)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PlatformTypes } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/game_console/useGameConsoleAccounts.tsx");

export default function useGameConsoleAccounts() {
  let items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStoresArray(items, () => {
    const items = [outer1_2.getAccount(null, outer1_3.XBOX), outer1_2.getAccount(null, outer1_3.PLAYSTATION), outer1_2.getAccount(null, outer1_3.PLAYSTATION_STAGING)];
    return items.filter(outer1_0(outer1_1[3]).isNotNullish);
  });
};
