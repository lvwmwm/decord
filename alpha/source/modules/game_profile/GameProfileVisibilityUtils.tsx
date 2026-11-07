// Module ID: 9673
// Function ID: 9674
// Name: GameProfileVisibilityUtils
// Dependencies: [9398, 8753, 2]
// Exports: isGameDisplayable

// Module 9673 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 8753 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 9398 */;
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
