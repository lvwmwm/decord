// Module ID: 9690
// Function ID: 9691
// Name: useSimilarGames
// Dependencies: [2138, 1385, 9555, 9691, 9475, 9554, 7567, 504, 2]
// Exports: default, isShowableSimilarGame

// Module 9690 (useSimilarGames)
import SimilarGamesConstants from "SimilarGamesConstants" /* 9555 */;
import GameProfileVisibilityUtils from "GameProfileVisibilityUtils" /* 9691 */;
import GameStore from "GameStore" /* 2138 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

let tmp;
const useGameArtwork = tmp(9475);
const set = SimilarGamesConstants.SIMILAR_GAMES_BLOCKED_GAME_IDS;
let closure_5 = [];
const similarGames = [];
const result = size.fileFinishedImporting("modules/game_profile/hooks/useSimilarGames.tsx");

export default function useSimilarGames(arg0) {
  let data;
  let error;
  let isLoading;
  let obj3;
  let tmp12;
  let tmp6;
  let tmp = null != arg0;
  if (tmp) {
    let tmp2 = set;
    tmp = !set.has(arg0);
  }
  let obj = data(9554);
  const similarGameIds = obj.useSimilarGameIds(arg0, tmp);
  ({ data, isLoading, error } = similarGameIds);
  if (!tmp) {
    tmp6 = closure_5;
  } else {
    tmp6 = data;
  }
  data = tmp6;
  const tmp3Result = data(7567);
  const games = tmp3Result.useGames(tmp6);
  const items = [GameStore];
  const items1 = [tmp6];
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
  [][0] = tmp6;
  if (tmp) {
    const obj2 = { isFetching: tmp12, similarGames: tmp10 };
    obj3 = obj2;
    tmp12 = null == error && null == data || isLoading || stateFromStores;
  } else {
    obj3 = { isFetching: false, similarGames };
  }
  return obj3;
};
export function isShowableSimilarGame(media, nsfwAllowed) {
  const obj = GameProfileVisibilityUtils;
  let isGameDisplayableResult = obj.isGameDisplayable(media, nsfwAllowed);
  if (isGameDisplayableResult) {
    const tmpResult = useGameArtwork;
    isGameDisplayableResult = tmpResult.hasGameArtwork(media);
  }
  return isGameDisplayableResult;
}
