// Module ID: 10749
// Function ID: 10750
// Name: useGameMentionsAsPlainText
// Dependencies: [19, 2014, 1383, 6036, 7480, 504, 2026, 8682, 1113, 2]
// Exports: useGameMentionsAsPlainText

// Module 10749 (useGameMentionsAsPlainText)
import StringUtils from "StringUtils" /* 2026 */;
import react from "react" /* 19 */;
import GameStore from "GameStore" /* 2014 */;
import UserStore from "UserStore" /* 1383 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 6036 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, game;

let hasOwnProperty;
let metroRequire;
({ extractGameMentionIds: hasOwnProperty, GAME_MENTION_RAW_RE_GLOBAL: metroRequire } = ChannelAutocompleteConstants);
const result = size.fileFinishedImporting("modules/game_mentions/hooks/useGameMentionsAsPlainText.tsx");

export function useGameMentionsAsPlainText(state) {
  _require = state;
  const items = [state];
  const memo = react.useMemo(() => {
    let str = state;
    const tmp = hasOwnProperty;
    if (state == null) {
      str = "";
    }
    return tmp(str);
  }, items);
  let obj = require("useGame");
  const games = obj.useGames(memo);
  const items1 = [GameStore, UserStore];
  const items2 = [state, memo];
  const obj2 = require("get initialized");
  return obj2.useStateFromStores(items1, () => {
    let obj = StringUtils;
    if (!obj.isNullOrEmpty(state)) {
      if (0 !== memo.length) {
        const tmp2 = UserStore;
        const currentUser = UserStore.getCurrentUser();
        let nsfwAllowed;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        return state.replace(metroRequire, (arg0, arg1) => {
          let stringResult;
          game = game.getGame(arg1);
          const obj = state(memo[7]);
          if (obj.isGameProfileObscured(game, nsfwAllowed)) {
            const intl2 = tmp2(tmp3[8]).intl;
            stringResult = intl2.string(tmp2(tmp3[8]).t["11pdXZ"]);
          } else {
            stringResult = undefined;
            if (game != null) {
              stringResult = game.name;
            }
            if (stringResult == null) {
              const intl = tmp2(tmp3[8]).intl;
              stringResult = intl.string(tmp2(tmp3[8]).t["11pdXZ"]);
            }
          }
          return stringResult;
        });
      }
    }
    return state;
  }, items2);
}
