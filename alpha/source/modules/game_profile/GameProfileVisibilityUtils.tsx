// Module ID: 9691
// Function ID: 9692
// Name: GameProfileVisibilityUtils
// Dependencies: [9416, 8774, 2]
// Exports: isGameDisplayable

// Module 9691 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 8774 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 9416 */;
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
