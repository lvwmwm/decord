// Module ID: 8674
// Function ID: 8675
// Name: useGameProfileObscured
// Dependencies: [1384, 5655, 504, 2]
// Exports: default, isGameProfileObscured

// Module 8674 (useGameProfileObscured)
import get_initialized from "get initialized" /* 504 */;
import utils from "utils" /* 5655 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileObscured.tsx");

export default function useGameProfileObscured(contentClassification) {
  get_initialized;
  [][0] = UserStore;
  let result = null != contentClassification;
  if (result) {
    result = false === tmp4;
  }
  if (result) {
    const tmpResult = utils;
    result = tmpResult.isAgeRestrictedContentClassification(contentClassification.contentClassification);
  }
  return result;
};
export function isGameProfileObscured(game, nsfwAllowed) {
  let result = null != game && false === nsfwAllowed;
  if (result) {
    const obj = utils;
    result = obj.isAgeRestrictedContentClassification(game.contentClassification);
  }
  return result;
}
