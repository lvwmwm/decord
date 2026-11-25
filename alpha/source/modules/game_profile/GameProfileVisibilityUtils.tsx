// Module ID: 14172
// Function ID: 14173
// Name: GameProfileVisibilityUtils
// Dependencies: [8704, 7145, 2]
// Exports: isGameDisplayable

// Module 14172 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 7145 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 8704 */;
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
