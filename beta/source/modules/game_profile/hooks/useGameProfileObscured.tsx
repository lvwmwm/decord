// Module ID: 5359
// Function ID: 5360
// Name: useGameProfileObscured
// Dependencies: [1372, 5360, 504, 2]
// Exports: default, isGameProfileObscured

// Module 5359 (useGameProfileObscured)
import initialize from "initialize" /* 504 */;
import utils from "utils" /* 5360 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileObscured.tsx");

export default function useGameProfileObscured(contentClassification) {
  initialize;
  [][0] = UserStore;
  let result = null != contentClassification;
  if (result) {
    result = false === tmp4;
  }
  if (result) {
    result = utils.isAgeRestrictedContentClassification(contentClassification.contentClassification);
    const tmpResult = utils;
  }
  return result;
};
export const isGameProfileObscured = function isGameProfileObscured(game, nsfwAllowed) {
  let result = null != game;
  if (result) {
    result = false === nsfwAllowed;
  }
  if (result) {
    result = utils.isAgeRestrictedContentClassification(game.contentClassification);
  }
  return result;
};
