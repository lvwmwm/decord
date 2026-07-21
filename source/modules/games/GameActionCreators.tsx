// Module ID: 6860
// Function ID: 54282
// Name: requestGames
// Dependencies: []
// Exports: fetchGamesWithSupplementalData

// Module 6860 (requestGames)
function requestGames() {
  return _requestGames(...arguments);
}
async function _requestGames(gameIds, arg1) {
  const HTTP = callback(closure_2[3]).HTTP;
  let obj = { url: constants.GAMES, query: obj, rejectWithError: true };
  obj = { game_ids: gameIds };
  obj = { type: "GAME_FETCH_SUCCESS", gameIds, games: yield HTTP.get(obj).body };
  callback2(closure_2[4]).dispatch(obj);
}
async function _fetchGamesWithSupplementalData(arg0, arg1) {
  if (0 !== arg0.length) {
    yield closure_6.queue(arg0);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const Endpoints = arg1(dependencyMap[2]).Endpoints;
const batchInvocationManager = new arg1(dependencyMap[5]).BatchInvocationManager(() => {
  let closure_0 = callback(async (arg0) => {
    let obj = callback(closure_2[4]);
    obj = { type: "GAME_FETCH", gameIds: arg0 };
    obj.dispatch(obj);
    const obj3 = callback(closure_2[6]);
    yield Promise.all(callback(closure_2[6]).chunk(arg0, 20).map(closure_7));
  });
  return function() {
    return callback(...arguments);
  };
}(), (arg0) => !closure_4.hasNoData(arg0));
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/games/GameActionCreators.tsx");

export const fetchGamesWithSupplementalData = function fetchGamesWithSupplementalData(items) {
  return _fetchGamesWithSupplementalData(...arguments);
};
