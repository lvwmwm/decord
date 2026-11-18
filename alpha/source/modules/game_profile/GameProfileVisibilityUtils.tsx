// Module ID: 9801
// Function ID: 9802
// Name: GameProfileVisibilityUtils
// Dependencies: [9667, 8800, 2]
// Exports: isGameDisplayable

// Module 9801 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 8800 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 9667 */;
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
