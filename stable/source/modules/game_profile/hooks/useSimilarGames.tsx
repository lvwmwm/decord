// Module ID: 8341
// Function ID: 8342
// Name: useSimilarGames
// Dependencies: [2007, 1378, 8220, 558, 576, 8219, 6728, 504, 8127, 5424, 2]

// Module 8341 (useSimilarGames)
import SimilarGamesConstants from "SimilarGamesConstants" /* 8220 */;
import GameStore from "GameStore" /* 2007 */;
import UserStore from "UserStore" /* 1378 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const set = SimilarGamesConstants.SIMILAR_GAMES_BLOCKED_GAME_IDS;
let closure_5 = [];
const similarGames = [];
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let data;
  let error;
  let isLoading;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp24;
  let tmp4;
  let tmp = data;
  let tmp2 = dependencyMap;
  let obj = data(576);
  const cResult = obj.c(14);
  if (cResult[0] !== arg0) {
    const hasItem = set.has(arg0);
    cResult[0] = arg0;
    cResult[1] = hasItem;
    tmp4 = hasItem;
  } else {
    tmp4 = cResult[1];
  }
  const tmp7 = !tmp4;
  let tmpResult = tmp(8219);
  const similarGameIds = tmpResult.useSimilarGameIds(arg0, tmp7);
  ({ data, isLoading, error } = similarGameIds);
  if (tmp4) {
    tmp10 = closure_5;
  } else {
    tmp10 = data;
  }
  data = tmp10;
  const tmpResult4 = tmp(6728);
  const games = tmpResult4.useGames(tmp10);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameStore];
    cResult[2] = items;
    tmp12 = items;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] !== tmp10) {
    class S {
      constructor() {
        return data.some(() => { /* body not rendered: F137344 */ });
      }
    }
    const items1 = [tmp10];
    cResult[3] = tmp10;
    cResult[4] = S;
    cResult[5] = items1;
    tmp15 = items1;
    tmp14 = S;
  } else {
    class S {
      constructor() {
        return data.some(() => { /* body not rendered: F137344 */ });
      }
    }
    tmp15 = cResult[5];
  }
  const tmpResult5 = tmp(504);
  const stateFromStores = tmpResult5.useStateFromStores(tmp12, tmp14, tmp15);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return data.some(() => { /* body not rendered: F137344 */ });
      }
    }
    const items2 = [GameStore, UserStore];
    cResult[6] = items2;
    tmp17 = items2;
  } else {
    class S {
      constructor() {
        return data.some(() => { /* body not rendered: F137344 */ });
      }
    }
  }
  if (cResult[7] !== tmp10) {
    class S {
      constructor() {
        return data.some(() => { /* body not rendered: F137344 */ });
      }
    }
    const items3 = [tmp10];
    cResult[7] = tmp10;
    cResult[8] = tmp21;
    cResult[9] = items3;
    tmp20 = items3;
    tmp19 = tmp21;
  } else {
    class S {
      constructor() {
        return data.some(() => { /* body not rendered: F137344 */ });
      }
    }
    tmp20 = cResult[9];
  }
  const tmpResult6 = tmp(504);
  const stateFromStoresArray = tmpResult6.useStateFromStoresArray(tmp17, tmp19, tmp20);
  if (tmp4) {
    let tmp25;
    class S {
      constructor() {
        return data.some(() => { /* body not rendered: F137344 */ });
      }
    }
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          return data.some(() => { /* body not rendered: F137344 */ });
        }
      }
      tmp26[1] = closure_6;
      cResult[10] = tmp26;
      tmp25 = tmp26;
    } else {
      class S {
        constructor() {
          return data.some(() => { /* body not rendered: F137344 */ });
        }
      }
    }
    return tmp25;
  } else {
    class S {
      constructor() {
        return data.some(() => { /* body not rendered: F137344 */ });
      }
    }
    if (cResult[11] === stateFromStoresArray) {
      class S {
        constructor() {
          return data.some(() => { /* body not rendered: F137344 */ });
        }
      }
      return tmp24;
    }
    const obj2 = { isFetching: null == error && null == data || isLoading || stateFromStores, similarGames: stateFromStoresArray };
    cResult[11] = stateFromStoresArray;
    cResult[12] = null == error && null == data || isLoading || stateFromStores;
    cResult[13] = obj2;
    tmp24 = obj2;
  }
}) : ((arg0) => {
  let data;
  let error;
  let isLoading;
  let obj3;
  let tmp13;
  let tmp7;
  const hasItem = set.has(arg0);
  let tmp2 = !hasItem;
  let obj = data(8219);
  const similarGameIds = obj.useSimilarGameIds(arg0, tmp2);
  ({ data, isLoading, error } = similarGameIds);
  if (hasItem) {
    tmp7 = closure_5;
  } else {
    tmp7 = data;
  }
  data = tmp7;
  const tmp3Result = data(6728);
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
});
const result = size.fileFinishedImporting("modules/game_profile/hooks/useSimilarGames.tsx");

export default tmp2;
