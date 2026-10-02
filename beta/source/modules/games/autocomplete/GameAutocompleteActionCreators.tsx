// Module ID: 8365
// Function ID: 8366
// Name: GameAutocompleteActionCreators
// Dependencies: [5, 5421, 1086, 5422, 585, 1283, 2]
// Exports: fetchGameAutocomplete

// Module 8365 (GameAutocompleteActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import Constants from "Constants" /* 1086 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 5422 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 5421 */;
import size from "module_2" /* 2 */;

let closure_2, closure_3, closure_4, query, results;

let obj = function _fetchGameAutocomplete() {
  obj = _asyncToGenerator(async (query) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj7;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              results = undefined;
              const obj13 = GameAutocompleteUtils;
              const result = obj13.normalizeGameAutocompleteQuery(closure_0);
              query = result;
              const tmp34 = require;
              if (null != result) {
                const shouldSuppressFetchResult = GameAutocompleteStore.shouldSuppressFetch(result);
                const dispatch = DispatcherDefault.dispatch;
                DispatcherDefault;
                if (shouldSuppressFetchResult) {
                  const obj5 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query: result, results: [] };
                  dispatch(obj5);
                } else {
                  const obj6 = { type: "GAME_AUTOCOMPLETE_FETCH", query: result };
                  dispatch(obj6);
                  c5 = 1;
                  const HTTP = tmp34(dependencyMap[5]).HTTP;
                  const request = { url: constants.GAMES_AUTOCOMPLETE, query: obj7, rejectWithError: false };
                  c6 = 2;
                  c7 = 1;
                  obj7 = { q: result };
                  const obj8 = { value: HTTP.get(request), done: false };
                  return obj8;
                }
              }
            }
          } else if (1 === c6) {
            c5 = 0;
            closure_2 = closure_4;
            const obj9 = { type: "GAME_AUTOCOMPLETE_FETCH_FAILURE", query };
            const obj4 = closure_131_1(closure_131_2[4]);
            obj4.dispatch(obj9);
            throw closure_2;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            const body = value.body;
            results = body;
            if (body == null) {
              results = [];
            }
            results = results.map((id) => {
              obj = { id: String(id.id), name: id.name, icon: id.icon, platformAvailability: id.platform_availability };
              return obj;
            });
            obj = closure_131_1(closure_131_2[4]);
            const obj11 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query, results };
            obj.dispatch(obj11);
            c5 = 0;
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp26) {
          closure_4 = tmp26;
          if (0 === c5) {
            c7 = 3;
            throw tmp26;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteActionCreators.tsx");

export const fetchGameAutocomplete = function fetchGameAutocomplete() {
  return obj(...arguments);
};
