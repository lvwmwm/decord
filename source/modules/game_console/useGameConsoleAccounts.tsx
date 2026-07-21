// Module ID: 8925
// Function ID: 70393
// Name: useGameConsoleAccounts
// Dependencies: []
// Exports: default

// Module 8925 (useGameConsoleAccounts)
let closure_2 = importDefault(dependencyMap[0]);
const PlatformTypes = arg1(dependencyMap[1]).PlatformTypes;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/game_console/useGameConsoleAccounts.tsx");

export default function useGameConsoleAccounts() {
  const items = [closure_2];
  return arg1(dependencyMap[2]).useStateFromStoresArray(items, () => {
    const items = [store.getAccount(null, constants.XBOX), store.getAccount(null, constants.PLAYSTATION), store.getAccount(null, constants.PLAYSTATION_STAGING)];
    return items.filter(callback(closure_1[3]).isNotNullish);
  });
};
