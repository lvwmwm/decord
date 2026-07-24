// Module ID: 7101
// Function ID: 57131
// Name: _fetchGameAutocomplete
// Dependencies: [5, 7090, 653, 7091, 686, 507, 2]
// Exports: fetchGameAutocomplete

// Module 7101 (_fetchGameAutocomplete)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
async function _fetchGameAutocomplete(arg0, arg1) {
  let obj = outer2_0(outer2_2[3]);
  const result = obj.normalizeGameAutocompleteQuery(arg0);
  if (null != result) {
    const shouldSuppressFetchResult = outer2_4.shouldSuppressFetch(tmp2);
    const dispatch = outer2_1(outer2_2[4]).dispatch;
    if (shouldSuppressFetchResult) {
      obj = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: result, results: [] };
      dispatch(obj);
    } else {
      obj = { type: "GAME_AUTOCOMPLETE_FETCH", query: tmp2 };
      dispatch(obj);
      const HTTP = outer2_0(outer2_2[5]).HTTP;
      const obj1 = { url: outer2_5.GAMES_AUTOCOMPLETE };
      const obj2 = { q: tmp2 };
      obj1.query = obj2;
      obj1.rejectWithError = false;
      const body = yield HTTP.get(obj1).body;
      const mapped = null != body ? body : [].map((id) => ({ id: String(id.id), name: id.name, icon: id.icon }));
      const obj3 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: tmp2, results: mapped };
      outer2_1(outer2_2[4]).dispatch(obj3);
      const arr = null != body ? body : [];
      const obj5 = outer2_1(outer2_2[4]);
    }
    const tmp21 = outer2_1(outer2_2[4]);
  }
}
let result = require("ME").fileFinishedImporting("modules/games/autocomplete/GameAutocompleteActionCreators.tsx");

export const fetchGameAutocomplete = function fetchGameAutocomplete(arg0) {
  return _fetchGameAutocomplete(...arguments);
};
