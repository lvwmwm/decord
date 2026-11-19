// Module ID: 9780
// Function ID: 9781
// Name: GameProfileVisibilityUtils
// Dependencies: [9646, 8769, 2]
// Exports: isGameDisplayable

// Module 9780 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 8769 */;
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
