// Module ID: 9106
// Function ID: 71394
// Name: useGameMentionsAsPlainText
// Dependencies: [31, 4151, 1849, 4567, 6864, 566, 1832, 8643, 1212, 2]
// Exports: useGameMentionsAsPlainText

// Module 9106 (useGameMentionsAsPlainText)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import regExp from "regExp";

let closure_5;
let closure_6;
const require = arg1;
({ extractGameMentionIds: closure_5, GAME_MENTION_RAW_RE_GLOBAL: closure_6 } = regExp);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/game_mentions/hooks/useGameMentionsAsPlainText.tsx");

export const useGameMentionsAsPlainText = function useGameMentionsAsPlainText(state) {
  const _require = state;
  const items = [state];
  const memo = React.useMemo(() => {
    let str = "";
    if (null != closure_0) {
      str = closure_0;
    }
    return outer1_5(str);
  }, items);
  const games = _require(memo[4]).useGames(memo);
  const obj = _require(memo[4]);
  const items1 = [_isNativeReflectConstruct, closure_4];
  const items2 = [state, memo];
  return _require(memo[5]).useStateFromStores(items1, () => {
    if (!obj.isNullOrEmpty(nsfwAllowed)) {
      if (0 !== memo.length) {
        const currentUser = outer1_4.getCurrentUser();
        nsfwAllowed = undefined;
        if (null != currentUser) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        return nsfwAllowed.replace(outer1_6, (arg0, arg1) => {
          const game = outer2_3.getGame(arg1);
          if (obj.isGameProfileObscured(game, nsfwAllowed)) {
            const intl2 = nsfwAllowed(memo[8]).intl;
            let stringResult = intl2.string(nsfwAllowed(memo[8]).t["11pdXZ"]);
          } else {
            stringResult = undefined;
            if (null != game) {
              stringResult = game.name;
            }
            if (null == stringResult) {
              const intl = nsfwAllowed(memo[8]).intl;
              stringResult = intl.string(nsfwAllowed(memo[8]).t["11pdXZ"]);
            }
          }
          return stringResult;
        });
      }
    }
    return nsfwAllowed;
  }, items2);
};
