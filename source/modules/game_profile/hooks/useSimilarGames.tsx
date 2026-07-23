// Module ID: 11852
// Function ID: 91836
// Name: useSimilarGames
// Dependencies: [4151, 1849, 8660, 8659, 6865, 566, 8589, 8601, 2]
// Exports: default

// Module 11852 (useSimilarGames)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { SIMILAR_GAMES_BLOCKED_GAME_IDS as closure_4 } from "set";

let require = arg1;
let closure_5 = [];
let closure_6 = [];
const result = require("set").fileFinishedImporting("modules/game_profile/hooks/useSimilarGames.tsx");

export default function useSimilarGames(arg0, arg1) {
  let error;
  let isLoading;
  let tmp = arg1;
  if (arg1) {
    tmp = !set.has(arg0);
  }
  let obj = require(8659) /* _getShopCollection */;
  const similarGameIds = obj.useSimilarGameIds(arg0, tmp);
  const data = similarGameIds.data;
  ({ isLoading, error } = similarGameIds);
  if (!tmp) {
    let tmp5 = closure_5;
  } else {
    tmp5 = data;
  }
  require = tmp5;
  const games = require(6865) /* importDefaultResult1 */.useGames(tmp5);
  let obj2 = require(6865) /* importDefaultResult1 */;
  const items = [_isNativeReflectConstruct];
  const items1 = [tmp5];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => tmp5.some((arg0) => {
    let tmp = null == outer2_2.getGame(arg0);
    if (tmp) {
      tmp = !outer2_2.hasNoData(arg0);
    }
    if (tmp) {
      tmp = !outer2_2.didFetchingFail(arg0);
    }
    return tmp;
  }), items1);
  require(566) /* initialize */;
  const items2 = [_isNativeReflectConstruct, closure_3];
  [][0] = tmp5;
  obj = {};
  if (tmp) {
    obj.isFetching = null == error && null == data || isLoading || stateFromStores;
    obj.similarGames = tmp9;
    let tmp11 = obj;
  } else {
    obj.isFetching = false;
    obj.similarGames = closure_6;
    tmp11 = obj;
  }
  return tmp11;
};
