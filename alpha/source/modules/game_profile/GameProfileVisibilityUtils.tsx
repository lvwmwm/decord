// Module ID: 9679
// Function ID: 9680
// Name: GameProfileVisibilityUtils
// Dependencies: [9404, 8759, 2]
// Exports: isGameDisplayable

// Module 9679 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 8759 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 9404 */;
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
