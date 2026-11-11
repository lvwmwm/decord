// Module ID: 10398
// Function ID: 10399
// Name: GameProfileVisibilityUtils
// Dependencies: [10394, 9314, 2]
// Exports: isGameDisplayable

// Module 10398 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 9314 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 10394 */;
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
