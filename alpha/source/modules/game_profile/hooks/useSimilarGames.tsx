// Module ID: 9717
// Function ID: 9718
// Name: useSimilarGames
// Dependencies: [2143, 1385, 9584, 9445, 8806, 9504, 9583, 7604, 504, 2]
// Exports: default, isShowableSimilarGame

// Module 9717 (useSimilarGames)
import useGameProfileObscured from "useGameProfileObscured" /* 8806 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 9445 */;
import useGameArtwork from "useGameArtwork" /* 9504 */;
import SimilarGamesConstants from "SimilarGamesConstants" /* 9584 */;
import GameStore from "GameStore" /* 2143 */;
import UserStore from "UserStore" /* 1385 */;
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
  let tmp12;
  let tmp6;
  let tmp = null != arg0;
  if (tmp) {
    tmp = !set.has(arg0);
  }
  let obj = data(9583);
  const similarGameIds = obj.useSimilarGameIds(arg0, tmp);
  ({ data, isLoading, error } = similarGameIds);
  if (!tmp) {
    tmp6 = closure_5;
  } else {
    tmp6 = data;
  }
  data = tmp6;
  const tmp3Result = data(7604);
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
export function isShowableSimilarGame(game, nsfwAllowed) {
  const obj = useShouldOpenGameProfileModal;
  let gameIsAcceptableResult = obj.gameIsAcceptable(game);
  if (gameIsAcceptableResult) {
    const tmpResult = useGameProfileObscured;
    gameIsAcceptableResult = !tmpResult.isGameProfileObscured(game, nsfwAllowed);
  }
  if (gameIsAcceptableResult) {
    const tmpResult2 = useGameArtwork;
    gameIsAcceptableResult = tmpResult2.hasGameArtwork(game);
  }
  return gameIsAcceptableResult;
}
