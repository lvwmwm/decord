// Module ID: 4875
// Function ID: 4876
// Name: useGameProfileObscured
// Dependencies: [1922, 4876, 589, 2]
// Exports: default, isGameProfileObscured

// Module 4875 (useGameProfileObscured)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
let result = require("initialize").fileFinishedImporting("modules/game_profile/hooks/useGameProfileObscured.tsx");

export default function useGameProfileObscured(contentClassification) {
  require(589) /* initialize */;
  [][0] = mergeGuildAvatar;
  let result = null != contentClassification;
  if (result) {
    result = false === tmp4;
  }
  if (result) {
    result = require(4876) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.contentClassification);
    const tmpResult = require(4876) /* isAgeRestrictedContentClassification */;
  }
  return result;
};
export const isGameProfileObscured = function isGameProfileObscured(game, nsfwAllowed) {
  let result = null != game;
  if (result) {
    result = false === nsfwAllowed;
  }
  if (result) {
    result = require(4876) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(game.contentClassification);
    const obj = require(4876) /* isAgeRestrictedContentClassification */;
  }
  return result;
};
