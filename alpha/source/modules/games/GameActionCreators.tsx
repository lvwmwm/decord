// Module ID: 7545
// Function ID: 7546
// Name: GameActionCreators
// Dependencies: [5, 2138, 1072, 1282, 572, 4984, 12, 2]
// Exports: fetchGamesWithSupplementalData

// Module 7545 (GameActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import Timers from "Timers" /* 4984 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GameStore from "GameStore" /* 2138 */;
import size from "module_2" /* 2 */;

let c1;

function requestGames() {
  return obj(...arguments);
}
let obj = function _requestGames() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let obj5;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c3;
      try {
        let body;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            body = undefined;
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.GAMES, query: obj5, rejectWithError: true };
            obj5 = { game_ids: gameIds };
            c4 = 2;
            c5 = 1;
            const obj6 = { value: HTTP.get(request), done: false };
            return obj6;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            const obj7 = { type: "GAME_FETCH_FAILURE", gameIds };
            const obj4 = closure_130_1(closure_130_2[4]);
            obj4.dispatch(obj7);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            body = value.body;
            const obj9 = { type: "GAME_FETCH_SUCCESS", gameIds, games: body };
            obj = closure_130_1(closure_130_2[4]);
            obj.dispatch(obj9);
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp18) {
        if (0 === c3) {
          c5 = 3;
          throw tmp18;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchGamesWithSupplementalData() {
  obj = _asyncToGenerator(async (gameIds) => {
    let c2;
    let closure_3;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    const iter = (async (arg0, value) => {
      let flag;
      if (1 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          return { value, done: true };
        } else if (0 !== gameIds.length) {
          const tmp5 = flag;
          if (tmp5) {
            const obj6 = { type: "GAME_FETCH", gameIds, force: flag };
            const obj2 = closure_131_1(closure_131_2[4]);
            obj2.dispatch(obj6);
          }
          c4 = 2;
          c5 = 1;
          const obj7 = { value: closure_131_8.queue(gameIds), done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        return { value, done: true };
      }
      await "HermesInternal";
      flag = closure_1;
      if (closure_1 === undefined) {
        flag = false;
      }
      return "flexDirection";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const BatchInvocationManager = Timers.BatchInvocationManager;
let closure_0 = _asyncToGenerator(async (arg0, value) => {
  let chunkResult;
  let v3;
  closure_0 = arg0;
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const obj2 = c1(c2[6]);
          c2 = 1;
          c1 = 1;
          const obj5 = { value: all(chunkResult.map(requestGames)), done: false };
          chunkResult = obj2.chunk(closure_0, 20);
          return obj5;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c1 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } catch (tmp9) {
      c1 = 3;
      throw tmp9;
    }
  }
});
obj = {
  predicate(nextResult) {
    return !GameStore.hasNoData(nextResult);
  },
  onQueued(gameIds) {
    obj = DispatcherDefault;
    const obj2 = { type: "GAME_FETCH", gameIds };
    return obj.dispatch(obj2);
  },
  onCancelled(gameIds) {
    obj = DispatcherDefault;
    const obj2 = { type: "GAME_FETCH_CANCELLED", gameIds };
    return obj.dispatch(obj2);
  }
};
const batchInvocationManager = new BatchInvocationManager(function() {
  return closure_0(...arguments);
}, obj);
const result = size.fileFinishedImporting("modules/games/GameActionCreators.tsx");

export function fetchGamesWithSupplementalData() {
  return obj(...arguments);
}
