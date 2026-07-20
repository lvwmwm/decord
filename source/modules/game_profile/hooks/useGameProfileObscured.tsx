// Module ID: 8589
// Function ID: 68229
// Name: isGameProfileObscured
// Dependencies: []
// Exports: default

// Module 8589 (isGameProfileObscured)
function isGameProfileObscured(game, nsfwAllowed) {
  let result = null != game;
  if (result) {
    result = false === nsfwAllowed;
  }
  if (result) {
    result = nsfwAllowed(dependencyMap[1]).isAgeRestrictedContentClassification(game.contentClassification);
    const obj = nsfwAllowed(dependencyMap[1]);
  }
  return result;
}
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/game_profile/hooks/useGameProfileObscured.tsx");

export default function useGameProfileObscured(game) {
  const items = [closure_2];
  return isGameProfileObscured(game, arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  }));
};
export { isGameProfileObscured };
