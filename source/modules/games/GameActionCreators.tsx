// Module ID: 6865
// Function ID: 54345
// Name: requestGames
// Dependencies: [5, 4151, 653, 507, 686, 4015, 22, 2]
// Exports: fetchGamesWithSupplementalData

// Module 6865 (requestGames)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
function requestGames() {
  return _requestGames(...arguments);
}
async function _requestGames(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[3]).HTTP;
  obj = { url: outer2_5.GAMES, query: obj, rejectWithError: true };
  obj = { game_ids: arg0 };
  obj = { type: "GAME_FETCH_SUCCESS", gameIds: arg0, games: yield HTTP.get(obj).body };
  outer2_1(outer2_2[4]).dispatch(obj);
}
async function _fetchGamesWithSupplementalData(arg0, arg1) {
  if (0 !== arg0.length) {
    yield outer2_6.queue(arg0);
  }
}
const batchInvocationManager = new require("_createForOfIteratorHelperLoose").BatchInvocationManager((() => {
  let closure_0 = callback(async (arg0) => {
    const obj = outer2_1(outer2_2[6]);
    yield Promise.all(outer2_1(outer2_2[6]).chunk(arg0, 20).map(outer2_7));
  });
  return function() {
    return callback(...arguments);
  };
})(), {
  predicate(arg0) {
    return !_isNativeReflectConstruct.hasNoData(arg0);
  },
  onQueued(gameIds) {
    let obj = importDefault(686);
    obj = { type: "GAME_FETCH", gameIds };
    return obj.dispatch(obj);
  },
  onCancelled(gameIds) {
    let obj = importDefault(686);
    obj = { type: "GAME_FETCH_CANCELLED", gameIds };
    return obj.dispatch(obj);
  }
});
const result = require("ME").fileFinishedImporting("modules/games/GameActionCreators.tsx");

export const fetchGamesWithSupplementalData = function fetchGamesWithSupplementalData(items) {
  return _fetchGamesWithSupplementalData(...arguments);
};
