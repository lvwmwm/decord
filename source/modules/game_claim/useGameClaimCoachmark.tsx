// Module ID: 14958
// Function ID: 112542
// Name: useCanShowGameClaimCoachmark
// Dependencies: []
// Exports: useCanShowGameClaimCoachmark

// Module 14958 (useCanShowGameClaimCoachmark)
let closure_2 = importDefault(dependencyMap[0]);
const Permissions = arg1(dependencyMap[1]).Permissions;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/game_claim/useGameClaimCoachmark.tsx");

export const useCanShowGameClaimCoachmark = function useCanShowGameClaimCoachmark(id) {
  const arg1 = id;
  let gameClaimCoachmarkEnabled = arg1(dependencyMap[2]).useGameClaimCoachmarkEnabled(id, "useCanShowGameClaimCoachmark");
  const obj = arg1(dependencyMap[2]);
  const items = [closure_2];
  const items1 = [id];
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = obj2.useStateFromStores(items, () => closure_2.canWithPartialContext(constants.ADMINISTRATOR, { guildId: arg0 }), items1);
  }
  const obj2 = arg1(dependencyMap[3]);
  if (gameClaimCoachmarkEnabled) {
    gameClaimCoachmarkEnabled = obj3.useHasUnclaimedGames(id, gameClaimCoachmarkEnabled);
  }
  return gameClaimCoachmarkEnabled;
};
