// Module ID: 9782
// Function ID: 9783
// Name: GameProfileVisibilityUtils
// Dependencies: [9646, 8707, 2]
// Exports: isGameDisplayable

// Module 9782 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 8707 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 9646 */;
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
