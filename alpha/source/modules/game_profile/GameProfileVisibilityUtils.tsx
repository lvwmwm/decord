// Module ID: 10520
// Function ID: 10521
// Name: GameProfileVisibilityUtils
// Dependencies: [10386, 9389, 2]
// Exports: isGameDisplayable

// Module 10520 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 9389 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 10386 */;
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
