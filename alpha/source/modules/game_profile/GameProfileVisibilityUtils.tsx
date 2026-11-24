// Module ID: 14049
// Function ID: 14050
// Name: GameProfileVisibilityUtils
// Dependencies: [8605, 7050, 2]
// Exports: isGameDisplayable

// Module 14049 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 7050 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 8605 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/GameProfileVisibilityUtils.tsx");

export function isGameDisplayable(item, nsfwAllowed) {
  let gameIsAcceptableResult = null != item;
  if (gameIsAcceptableResult) {
    const obj = useShouldOpenGameProfileModal;
    gameIsAcceptableResult = obj.gameIsAcceptable(item);
  }
  if (gameIsAcceptableResult) {
    const obj2 = useGameProfileObscured;
    gameIsAcceptableResult = !obj2.isGameProfileObscured(item, nsfwAllowed);
  }
  return gameIsAcceptableResult;
}
