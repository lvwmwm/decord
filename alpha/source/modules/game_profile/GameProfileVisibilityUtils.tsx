// Module ID: 14231
// Function ID: 14232
// Name: GameProfileVisibilityUtils
// Dependencies: [8747, 7176, 2]
// Exports: isGameDisplayable

// Module 14231 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 7176 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 8747 */;
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
