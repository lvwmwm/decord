// Module ID: 10238
// Function ID: 10239
// Name: useGameMentionsAsPlainText
// Dependencies: [19, 2020, 1390, 5404, 558, 576, 7008, 2031, 8237, 1126, 504, 2]

// Module 10238 (useGameMentionsAsPlainText)
import StringUtils from "StringUtils" /* 2031 */;
import react from "react" /* 19 */;
import GameStore from "GameStore" /* 2020 */;
import UserStore from "UserStore" /* 1390 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 5404 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, game;

let hasOwnProperty;
let metroRequire;
({ extractGameMentionIds: hasOwnProperty, GAME_MENTION_RAW_RE_GLOBAL: metroRequire } = ChannelAutocompleteConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameMentionsAsPlainText(arg0) {
  let closure_0;
  let length;
  let tmp4;
  let tmp8;
  _require = arg0;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(7);
  let str = arg0;
  if (arg0 == null) {
    str = "";
  }
  if (cResult[0] !== str) {
    const tmp6 = closure_5(str);
    cResult[0] = str;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  dependencyMap = tmp4;
  const tmpResult = require("useGame");
  const games = tmpResult.useGames(tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameStore, UserStore];
    cResult[2] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    let tmp11;
    let tmp12;
    if (cResult[4] === arg0) {
      tmp11 = cResult[5];
      tmp12 = cResult[6];
    }
    const tmpResult2 = require("get initialized");
    return tmpResult2.useStateFromStores(tmp8, tmp11, tmp12);
  }
  const fn = function p() {
    let obj = StringUtils;
    if (!obj.isNullOrEmpty(closure_0)) {
      if (0 !== length.length) {
        const tmp2 = UserStore;
        const currentUser = UserStore.getCurrentUser();
        let nsfwAllowed;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        return closure_0.replace(metroRequire, (arg0, gameId) => {
          let stringResult;
          game = game.getGame(gameId);
          const obj = closure_2_0(length[8]);
          if (obj.isGameProfileObscured(game, nsfwAllowed)) {
            const intl2 = tmp2(tmp3[9]).intl;
            stringResult = intl2.string(tmp2(tmp3[9]).t["11pdXZ"]);
          } else {
            stringResult = undefined;
            if (game != null) {
              stringResult = game.name;
            }
            if (stringResult == null) {
              const intl = tmp2(tmp3[9]).intl;
              stringResult = intl.string(tmp2(tmp3[9]).t["11pdXZ"]);
            }
          }
          return stringResult;
        });
      }
    }
    return closure_0;
  };
  const items1 = [arg0, tmp4];
  cResult[3] = tmp4;
  cResult[4] = arg0;
  cResult[5] = fn;
  cResult[6] = items1;
  tmp12 = items1;
  tmp11 = fn;
}) : (function useGameMentionsAsPlainText(arg0) {
  let closure_0;
  _require = arg0;
  const items = [arg0];
  const memo = react.useMemo(() => {
    let str = closure_0;
    const tmp = hasOwnProperty;
    if (closure_0 == null) {
      str = "";
    }
    return tmp(str);
  }, items);
  let obj = require("useGame");
  const games = obj.useGames(memo);
  const items1 = [GameStore, UserStore];
  const items2 = [arg0, memo];
  const obj2 = require("get initialized");
  return obj2.useStateFromStores(items1, () => {
    let obj = StringUtils;
    if (!obj.isNullOrEmpty(closure_0)) {
      if (0 !== memo.length) {
        const tmp2 = UserStore;
        const currentUser = UserStore.getCurrentUser();
        let nsfwAllowed;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        return closure_0.replace(metroRequire, (arg0, gameId) => {
          let stringResult;
          game = game.getGame(gameId);
          const obj = closure_2_0(memo[8]);
          if (obj.isGameProfileObscured(game, nsfwAllowed)) {
            const intl2 = tmp2(tmp3[9]).intl;
            stringResult = intl2.string(tmp2(tmp3[9]).t["11pdXZ"]);
          } else {
            stringResult = undefined;
            if (game != null) {
              stringResult = game.name;
            }
            if (stringResult == null) {
              const intl = tmp2(tmp3[9]).intl;
              stringResult = intl.string(tmp2(tmp3[9]).t["11pdXZ"]);
            }
          }
          return stringResult;
        });
      }
    }
    return closure_0;
  }, items2);
});
const result = size.fileFinishedImporting("modules/game_mentions/hooks/useGameMentionsAsPlainText.tsx");

export const useGameMentionsAsPlainText = tmp3;
