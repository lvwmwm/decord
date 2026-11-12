// Module ID: 10396
// Function ID: 10397
// Name: GameProfileVisibilityUtils
// Dependencies: [10392, 9313, 2]
// Exports: isGameDisplayable

// Module 10396 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 9313 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 10392 */;
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
