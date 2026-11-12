// Module ID: 12052
// Function ID: 12053
// Name: SuggestedGameHooks
// Dependencies: [32, 19, 2138, 12024, 12053, 9466, 504, 12026, 2]
// Exports: useFetchSuggestedGames, useSuggestedGames

// Module 12052 (SuggestedGameHooks)
import WidgetActionCreatorsDefault from "WidgetActionCreators" /* 12026 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GameStore from "GameStore" /* 2138 */;
import WidgetStore from "WidgetStore" /* 12024 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, suggestedGamesIds;

const result = size.fileFinishedImporting("modules/user_profile/hooks/SuggestedGameHooks.tsx");

export function useSuggestedGames(widgetType) {
  let bumpMultiple;
  let memo1;
  _require = widgetType;
  const obj = require("suggestedGameIdStack");
  const suggestedGameIdStack = obj.useSuggestedGameIdStack();
  const bump = suggestedGameIdStack.bump;
  bumpMultiple = suggestedGameIdStack.bumpMultiple;
  const gameIds = suggestedGameIdStack.gameIds;
  _require = widgetType;
  const obj2 = require("suggestedGameIdStack");
  const suggestedGameIdStack1 = obj2.useSuggestedGameIdStack();
  const remove = suggestedGameIdStack1.remove;
  const peekedGameIds = suggestedGameIdStack1.peekedGameIds;
  let items = [peekedGameIds, widgetType];
  const memo = memo1.useMemo(() => {
    let items = peekedGameIds[closure_0];
    if (items == null) {
      items = [];
    }
    return items;
  }, items);
  const obj3 = require("useGame");
  const games = obj3.useGames(memo);
  const items1 = [GameStore];
  const items2 = [memo, remove, widgetType, ];
  const obj4 = require("get initialized");
  items2[3] = obj4.useStateFromStoresArray(items1, () => {
    let fetching;
    return memo.map((item) => fetching.isFetching(item));
  });
  const effect = memo1.useEffect(() => {
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let didFetchingFailResult = GameStore.didFetchingFail(nextResult);
      let _Boolean = Boolean;
      let hasNoDataResult = GameStore.hasNoData(nextResult);
      let BooleanResult = Boolean(GameStore.getGame(nextResult));
      let tmp8 = null != GameStore.getCoverImageUrl(nextResult);
      if (!didFetchingFailResult) {
        didFetchingFailResult = hasNoDataResult;
      }
      if (!didFetchingFailResult) {
        let tmp9 = BooleanResult;
        if (tmp9) {
          tmp9 = !tmp8;
        }
        didFetchingFailResult = tmp9;
      }
      if (didFetchingFailResult) {
        let tmp14 = remove(tmp3, closure_0);
      }
      continue;
    }
  }, items2);
  const items3 = [gameIds, widgetType];
  memo1 = memo1.useMemo(() => {
    let items = gameIds[widgetType];
    if (items == null) {
      items = [];
    }
    return items;
  }, items3);
  const items4 = [bump, widgetType];
  const callback = memo1.useCallback((arg0) => {
    bump(arg0, widgetType);
  }, items4);
  const items5 = [GameStore];
  const items6 = [memo1, widgetType, bumpMultiple, ];
  const obj5 = require("get initialized");
  items6[3] = obj5.useStateFromStoresArray(items5, () => {
    let fetching;
    return memo1.map((item) => fetching.isFetching(item));
  });
  const effect1 = memo1.useEffect(() => {
    const found = memo1.filter((item) => {
      let didFetchingFailResult = closure_1_5.didFetchingFail(item);
      const hasNoDataResult = closure_1_5.hasNoData(item);
      let BooleanResult = Boolean(closure_1_5.getGame(item));
      const tmp4 = null != closure_1_5.getCoverImageUrl(item);
      if (!didFetchingFailResult) {
        didFetchingFailResult = hasNoDataResult;
      }
      if (!didFetchingFailResult) {
        if (BooleanResult) {
          BooleanResult = !tmp4;
        }
        didFetchingFailResult = BooleanResult;
      }
      return didFetchingFailResult;
    });
    if (found.length > 0) {
      bumpMultiple(found, widgetType);
    }
  }, items6);
  const items7 = [memo1];
  const obj6 = { gameIds: memo1, games: memo1.useMemo(() => memo1.map((gameId) => ({ gameId })), items7), onAddGame: callback };
  return obj6;
}
export function useFetchSuggestedGames(arg0, memo) {
  let closure_0;
  let closure_3;
  let first;
  let tmp3;
  _require = arg0;
  let obj = require("get initialized");
  let items = [first];
  [first, _slicedToArray, react, tmp3] = obj.useStateFromStoresArray(items, () => {
    const items = [, , , ];
    ({ suggestedFetchAttempted: arr[0], suggestedFetchError: arr[1], suggestedGameIds: arr[2], suggestedFetchIsLoading: arr[3] } = first);
    return items;
  });
  const obj2 = require("suggestedGameIdStack");
  const onLoad = obj2.useSuggestedGameIdStack().onLoad;
  const items1 = [first, arg0];
  const effect = react.useEffect(() => {
    const tmp = !first && closure_0;
    if (tmp) {
      const obj = WidgetActionCreatorsDefault;
      const suggestedGames = obj.fetchSuggestedGames();
    }
  }, items1);
  const obj3 = react;
  if (first) {
    first = !tmp3;
  }
  const items2 = [first];
  const effect1 = obj3.useEffect(() => {
    const tmp = first;
    if (tmp) {
      const mapped = memo.map((games) => games.games);
      const tmp5 = closure_3;
      if (!tmp5) {
        suggestedGamesIds = suggestedGamesIds.suggestedGamesIds;
        const tmp6 = suggestedGamesIds;
        if (suggestedGamesIds == null) {
          suggestedGamesIds = [];
        }
        let prop = tmp6.suggestedWishlistGamesIds;
        if (prop == null) {
          prop = [];
        }
        onLoad(suggestedGamesIds, prop, tmp4);
      }
    }
  }, items2);
}
