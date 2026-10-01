// Module ID: 8344
// Function ID: 8345
// Name: useSimilarGames
// Dependencies: [2001, 1372, 8223, 8222, 6727, 504, 8129, 5423, 2]
// Exports: default

// Module 8344 (useSimilarGames)
import SimilarGamesConstants from "SimilarGamesConstants" /* 8223 */;
import GameStore from "GameStore" /* 2001 */;
import UserStore from "UserStore" /* 1372 */;
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
  let tmp2 = !hasItem;
  let obj = data(8222);
  const similarGameIds = obj.useSimilarGameIds(arg0, tmp2);
  ({ data, isLoading, error } = similarGameIds);
  if (hasItem) {
    tmp7 = closure_5;
  } else {
    tmp7 = data;
  }
  data = tmp7;
  const tmp3Result = data(6727);
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
