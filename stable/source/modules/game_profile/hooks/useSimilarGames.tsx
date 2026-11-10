// Module ID: 9585
// Function ID: 9586
// Name: useSimilarGames
// Dependencies: [2014, 1383, 9456, 9455, 7480, 504, 9317, 8682, 9376, 2]
// Exports: default

// Module 9585 (useSimilarGames)
import SimilarGamesConstants from "SimilarGamesConstants" /* 9456 */;
import GameStore from "GameStore" /* 2014 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

const set = SimilarGamesConstants.SIMILAR_GAMES_BLOCKED_GAME_IDS;
let closure_5 = [];
const similarGames = [];
const result = size.fileFinishedImporting("modules/game_profile/hooks/useSimilarGames.tsx");

export default function useSimilarGames(arg0) {
  let data;
  let error;
  let isLoading;
  let obj3;
  let tmp13;
  let tmp7;
  const hasItem = set.has(arg0);
  const tmp2 = !hasItem;
  let obj = data(9455);
  const similarGameIds = obj.useSimilarGameIds(arg0, tmp2);
  ({ data, isLoading, error } = similarGameIds);
  if (hasItem) {
    tmp7 = closure_5;
  } else {
    tmp7 = data;
  }
  data = tmp7;
  const tmp3Result = data(7480);
  const games = tmp3Result.useGames(tmp7);
  const items = [GameStore];
  const items1 = [tmp7];
  const tmp3Result3 = data(504);
  const stateFromStores = tmp3Result3.useStateFromStores(items, () => {
    let game;
    return data.some((item) => {
      const tmp = null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item);
      return tmp;
    });
  }, items1);
  data(504);
  const items2 = [GameStore, UserStore];
  [][0] = tmp7;
  if (hasItem) {
    obj3 = { isFetching: false, similarGames };
    const obj2 = { isFetching: false, similarGames };
  } else {
    obj3 = { isFetching: tmp13, similarGames: tmp11 };
    tmp13 = null == error && null == data || isLoading || stateFromStores;
  }
  return obj3;
};
