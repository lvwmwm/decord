// Module ID: 8463
// Function ID: 67407
// Name: isGameProfileObscured
// Dependencies: [1850, 8003, 566, 2]
// Exports: default

// Module 8463 (isGameProfileObscured)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function isGameProfileObscured(game, nsfwAllowed) {
  let result = null != game;
  if (result) {
    result = false === nsfwAllowed;
  }
  if (result) {
    result = require(8003) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(game.contentClassification);
    const obj = require(8003) /* isAgeRestrictedContentClassification */;
  }
  return result;
}
let result = require("initialize").fileFinishedImporting("modules/game_profile/hooks/useGameProfileObscured.tsx");

export default function useGameProfileObscured(game) {
  const items = [_isNativeReflectConstruct];
  return isGameProfileObscured(game, require(566) /* initialize */.useStateFromStores(items, () => {
    const currentUser = outer1_2.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  }));
};
export { isGameProfileObscured };
