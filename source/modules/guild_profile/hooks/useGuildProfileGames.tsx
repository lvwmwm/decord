// Module ID: 11907
// Function ID: 92173
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 4152, 4151, 1194, 566, 6864, 1327, 2]
// Exports: default

// Module 11907 (_createForOfIteratorHelperLoose)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function useAllGuildProfileGames(profile) {
  const _require = profile;
  const games = profile.games;
  let items = [closure_5];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_5.isAuthenticated());
  _require(6864);
  if (null != games) {
    if (!stateFromStores) {
      let items1 = [];
    }
    tmp3(items1);
    const dependencyMap = (function useFallbackGameRecords(games) {
      let closure_0 = games;
      const items = [games];
      return outer1_2.useMemo(() => {
        let done;
        const map = new Map();
        if (null == closure_0) {
          return map;
        } else {
          const tmp3 = outer2_6(closure_0);
          let iter = tmp3();
          if (!iter.done) {
            do {
              let value = iter.value;
              let tmp4 = outer2_3;
              let prototype = outer2_3.prototype;
              let tmp5 = new.target;
              let tmp6 = new.target;
              let tmp7 = value;
              let tmp8 = new outer2_3(value);
              let tmp9 = tmp8;
              let result = map.set(value.id, tmp8);
              let iter2 = tmp3();
              iter = iter2;
              done = iter2.done;
            } while (!done);
          }
          return map;
        }
      }, items);
    })(games);
    const items2 = [closure_4];
    return _require(566).useStateFromStoresArray(items2, () => {
      const gameApplicationIds = profile.gameApplicationIds;
      const mapped = gameApplicationIds.map((arg0) => {
        let game = outer2_4.getGame(arg0);
        if (null == game) {
          game = outer1_1.get(arg0);
        }
        return game;
      });
      return mapped.filter(profile(table[6]).isNotNullish);
    });
  }
  items1 = profile.gameApplicationIds;
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_profile/hooks/useGuildProfileGames.tsx");

export default function useGuildProfileGames(gameActivity) {
  gameActivity = gameActivity.gameActivity;
  const tmp = useAllGuildProfileGames(gameActivity);
  const dependencyMap = tmp;
  let items = [tmp, gameActivity];
  memo = memo.useMemo(() => {
    const items = [];
    HermesBuiltin.arraySpread(closure_1, 0);
    return items.sort((function gameActivitySorter(gameActivity) {
      let closure_0 = gameActivity;
      return (arg0, arg1) => {
        let score;
        if (null != gameActivity[arg0.id]) {
          score = tmp.score;
        }
        let num = 0;
        if (null != score) {
          num = score;
        }
        let score1;
        if (null != gameActivity[arg1.id]) {
          score1 = tmp3.score;
        }
        let num2 = 0;
        if (null != score1) {
          num2 = score1;
        }
        let num3 = 0;
        if (num !== num2) {
          num3 = num2 - num;
        }
        return num3;
      };
    })(gameActivity));
  }, items);
  const items1 = [memo];
  const items2 = [memo];
  const items3 = [memo];
  return {
    gamesToDisplay: memo.useMemo(() => memo.slice(0, 5), items1),
    lastGameToDisplay: memo.useMemo(() => {
      let tmp2 = null;
      if (null != memo[5]) {
        tmp2 = tmp;
      }
      return tmp2;
    }, items2),
    remainingGames: memo.useMemo(() => memo.slice(5), items3)
  };
};
export { useAllGuildProfileGames };
