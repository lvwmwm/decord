// Module ID: 9222
// Function ID: 9223
// Name: GameAutocompleteActionCreators
// Dependencies: [5, 8751, 1072, 8752, 572, 1282, 2]
// Exports: fetchGameAutocomplete

// Module 9222 (GameAutocompleteActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8752 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 8751 */;
import size from "module_2" /* 2 */;

let closure_3, closure_4, closure_5, closure_6, filterGroup;

let obj = function _fetchGameAutocomplete() {
  obj = _asyncToGenerator(async (filterGroup, query, results) => {
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2) => {
      let obj7;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_4 = tmp4;
              filterGroup = query;
              results = undefined;
              const obj13 = GameAutocompleteUtils;
              const result = obj13.normalizeGameAutocompleteQuery(filterGroup);
              query = result;
              const tmp37 = results;
              const tmp38 = require;
              if (null != result) {
                const shouldSuppressFetchResult = GameAutocompleteStore.shouldSuppressFetch(result, query);
                const dispatch = DispatcherDefault.dispatch;
                DispatcherDefault;
                if (shouldSuppressFetchResult) {
                  const obj5 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: result, filterGroup: query, results: [] };
                  dispatch(obj5);
                } else {
                  const obj6 = { type: "GAME_AUTOCOMPLETE_FETCH", query: result, filterGroup: query };
                  dispatch(obj6);
                  c7 = 1;
                  const HTTP = tmp38(dependencyMap[5]).HTTP;
                  const request = { url: constants.GAMES_AUTOCOMPLETE, signal: tmp37, query: obj7, rejectWithError: false };
                  c8 = 2;
                  c9 = 1;
                  obj7 = { q: result, filter_group: query };
                  const obj8 = { value: HTTP.get(request), done: false };
                  return obj8;
                }
              }
            }
          } else if (1 === c8) {
            c7 = 0;
            closure_3 = closure_6;
            const obj9 = { type: "GAME_AUTOCOMPLETE_FETCH_FAILURE", query, filterGroup };
            const obj4 = closure_133_1(closure_133_2[4]);
            obj4.dispatch(obj9);
            throw closure_3;
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            return { value, done: true };
          } else {
            const body = value.body;
            closure_3 = body;
            if (body == null) {
              closure_3 = [];
            }
            results = closure_3.map((id) => {
              obj = { id: String(id.id), name: id.name, icon: id.icon, platformAvailability: id.platform_availability };
              return obj;
            });
            obj = closure_133_1(closure_133_2[4]);
            const obj11 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query, filterGroup, results };
            obj.dispatch(obj11);
            c7 = 0;
          }
          c9 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp28) {
          closure_6 = tmp28;
          if (0 === c7) {
            c9 = 3;
            throw tmp28;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteActionCreators.tsx");

export function fetchGameAutocomplete() {
  return obj(...arguments);
}
