// Module ID: 7096
// Function ID: 57061
// Name: _fetchGameAutocomplete
// Dependencies: []
// Exports: fetchGameAutocomplete

// Module 7096 (_fetchGameAutocomplete)
async function _fetchGameAutocomplete(toLocaleLowerCase, arg1) {
  let obj = callback(closure_2[3]);
  const result = obj.normalizeGameAutocompleteQuery(toLocaleLowerCase);
  if (null != result) {
    const shouldSuppressFetchResult = closure_4.shouldSuppressFetch(tmp2);
    const dispatch = callback2(closure_2[4]).dispatch;
    if (shouldSuppressFetchResult) {
      obj = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: result, results: [] };
      dispatch(obj);
    } else {
      obj = { type: "GAME_AUTOCOMPLETE_FETCH", query: tmp2 };
      dispatch(obj);
      const HTTP = callback(closure_2[5]).HTTP;
      const obj1 = { url: constants.GAMES_AUTOCOMPLETE };
      const obj2 = { q: tmp2 };
      obj1.query = obj2;
      obj1.rejectWithError = false;
      const body = yield HTTP.get(obj1).body;
      const mapped = null != body ? body : [].map((id) => ({ id: String(id.id), name: id.name, icon: id.icon }));
      const obj3 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: tmp2, results: mapped };
      callback2(closure_2[4]).dispatch(obj3);
      const arr = null != body ? body : [];
      const obj5 = callback2(closure_2[4]);
    }
    const tmp21 = callback2(closure_2[4]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const Endpoints = arg1(dependencyMap[2]).Endpoints;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/games/autocomplete/GameAutocompleteActionCreators.tsx");

export const fetchGameAutocomplete = function fetchGameAutocomplete(arg0) {
  return _fetchGameAutocomplete(...arguments);
};
