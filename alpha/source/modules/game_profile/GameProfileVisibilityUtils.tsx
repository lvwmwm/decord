// Module ID: 10465
// Function ID: 10466
// Name: GameProfileVisibilityUtils
// Dependencies: [10461, 9380, 2]
// Exports: isGameDisplayable

// Module 10465 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 9380 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 10461 */;
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
