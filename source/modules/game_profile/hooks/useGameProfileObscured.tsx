// Module ID: 8601
// Function ID: 68304
// Name: isGameProfileObscured
// Dependencies: [1849, 8179, 566, 2]
// Exports: default

// Module 8601 (isGameProfileObscured)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function isGameProfileObscured(game, nsfwAllowed) {
  let result = null != game;
  if (result) {
    result = false === nsfwAllowed;
  }
  if (result) {
    result = require(8179) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(game.contentClassification);
    const obj = require(8179) /* isAgeRestrictedContentClassification */;
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
