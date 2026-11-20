// Module ID: 8707
// Function ID: 8708
// Name: useGameProfileObscured
// Dependencies: [1386, 5423, 504, 2]
// Exports: default, isGameProfileObscured

// Module 8707 (useGameProfileObscured)
import get_initialized from "get initialized" /* 504 */;
import utils from "utils" /* 5423 */;
import UserStore from "UserStore" /* 1386 */;
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
