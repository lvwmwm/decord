// Module ID: 11868
// Function ID: 91882
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 11868 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const arg1 = profile;
  const games = profile.games;
  const items = [closure_5];
  const stateFromStores = arg1(closure_1[4]).useStateFromStores(items, () => authenticated.isAuthenticated());
  arg1(closure_1[5]);
  if (null != games) {
    if (!stateFromStores) {
      let items1 = [];
    }
    tmp3(items1);
    closure_1 = function useFallbackGameRecords(games) {
      const items = [games];
      return React.useMemo(() => {
        let done;
        const map = new Map();
        if (null == arg0) {
          return map;
        } else {
          const tmp3 = callback(arg0);
          let iter = tmp3();
          if (!iter.done) {
            do {
              let value = iter.value;
              let tmp4 = closure_3;
              let prototype = closure_3.prototype;
              let tmp5 = new.target;
              let tmp6 = new.target;
              let tmp7 = value;
              let tmp8 = new closure_3(value);
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
    }(games);
    const items2 = [closure_4];
    return arg1(closure_1[4]).useStateFromStoresArray(items2, () => {
      const gameApplicationIds = arg0.gameApplicationIds;
      const mapped = gameApplicationIds.map((arg0) => {
        let game = game.getGame(arg0);
        if (null == game) {
          game = closure_1.get(arg0);
        }
        return game;
      });
      return mapped.filter(arg0(closure_1[6]).isNotNullish);
    });
  }
  items1 = profile.gameApplicationIds;
}
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_profile/hooks/useGuildProfileGames.tsx");

export default function useGuildProfileGames(gameActivity) {
  gameActivity = gameActivity.gameActivity;
  const arg1 = gameActivity;
  const tmp = useAllGuildProfileGames(gameActivity);
  const dependencyMap = tmp;
  const items = [tmp, gameActivity];
  const memo = React.useMemo(() => {
    const items = [];
    const tmp = function gameActivitySorter(gameActivity) {
      return (arg0, arg1) => {
        let score;
        if (null != arg0[arg0.id]) {
          score = tmp.score;
        }
        let num = 0;
        if (null != score) {
          num = score;
        }
        let score1;
        if (null != arg0[arg1.id]) {
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
    }(gameActivity);
    HermesBuiltin.arraySpread(tmp, 0);
    return items.sort(tmp);
  }, items);
  const React = memo;
  const items1 = [memo];
  const items2 = [memo];
  const items3 = [memo];
  return {
    gamesToDisplay: React.useMemo(() => memo.slice(0, 5), items1),
    lastGameToDisplay: React.useMemo(() => {
      let tmp2 = null;
      if (null != memo[5]) {
        tmp2 = tmp;
      }
      return tmp2;
    }, items2),
    remainingGames: React.useMemo(() => memo.slice(5), items3)
  };
};
export { useAllGuildProfileGames };
