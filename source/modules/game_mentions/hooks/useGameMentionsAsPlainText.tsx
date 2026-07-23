// Module ID: 9067
// Function ID: 71179
// Name: useGameMentionsAsPlainText
// Dependencies: [31, 4151, 1849, 4567, 6865, 566, 1832, 8601, 1212, 2]
// Exports: useGameMentionsAsPlainText

// Module 9067 (useGameMentionsAsPlainText)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { GAME_MENTION_RAW_RE_GLOBAL as closure_5 } from "MENTION_SENTINEL";

const require = arg1;
let closure_6 = [];
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/game_mentions/hooks/useGameMentionsAsPlainText.tsx");

export const useGameMentionsAsPlainText = function useGameMentionsAsPlainText(state) {
  const _require = state;
  let items = [state];
  const memo = React.useMemo(() => {
    if (null != state) {
      if ("" !== state) {
        const items = [];
        HermesBuiltin.arraySpread(state.matchAll(outer1_5), 0);
        let mapped = items.map((arg0) => arg0[1]);
        if (mapped.length <= 0) {
          mapped = outer1_6;
        }
        return mapped;
      }
    }
    return outer1_6;
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
        return nsfwAllowed.replace(outer1_5, (arg0, arg1) => {
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
