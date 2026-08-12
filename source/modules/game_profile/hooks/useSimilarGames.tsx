// Module ID: 12245
// Function ID: 12246
// Name: useSimilarGames
// Dependencies: [4365, 1922, 9387, 9386, 5965, 589, 9319, 4875, 2]
// Exports: default

// Module 12245 (useSimilarGames)
import handleLoadMessages from "handleLoadMessages";
import mergeGuildAvatar from "mergeGuildAvatar";
import { SIMILAR_GAMES_BLOCKED_GAME_IDS as closure_4 } from "set";

let require = arg1;
let closure_5 = [];
let closure_6 = [];
const result = require("set").fileFinishedImporting("modules/game_profile/hooks/useSimilarGames.tsx");

export default function useSimilarGames(arg0, arg1) {
  let data;
  let error;
  let isLoading;
  let tmp = arg1;
  if (arg1) {
    tmp = !set.has(arg0);
  }
  let obj = require(9386) /* _getShopCollection */;
  const similarGameIds = obj.useSimilarGameIds(arg0, tmp);
  ({ data, isLoading, error } = similarGameIds);
  if (!tmp) {
    let tmp7 = closure_5;
  } else {
    tmp7 = data;
  }
  require = tmp7;
  let tmp3Result = tmp3(5965);
  const games = tmp3Result.useGames(tmp7);
  tmp3Result = tmp3(589);
  const items = [handleLoadMessages];
  const items1 = [tmp7];
  const stateFromStores = tmp3Result.useStateFromStores(items, () => tmp7.some((closure_0) => null == game.getGame(closure_0) && !game.hasNoData(closure_0) && !game.didFetchingFail(closure_0)), items1);
  require(589) /* initialize */;
  const items2 = [handleLoadMessages, mergeGuildAvatar];
  [][0] = tmp7;
  if (tmp) {
    obj = { isFetching: null, similarGames: null };
    obj[0] = null == error && null == data || isLoading || stateFromStores;
    obj[1] = tmp11;
    const tmp14 = null == error && null == data || isLoading || stateFromStores;
  } else {
    obj = { isFetching: false, similarGames: null };
    obj[1] = closure_6;
  }
  return obj;
};
