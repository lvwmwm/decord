// Module ID: 9902
// Function ID: 9903
// Name: GameProfileVisibilityUtils
// Dependencies: [9766, 8827, 2]
// Exports: isGameDisplayable

// Module 9902 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 8827 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 9766 */;
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
