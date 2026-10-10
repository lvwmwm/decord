// Module ID: 8707
// Function ID: 8708
// Name: GameAutocompleteActionCreators
// Dependencies: [5, 8235, 1085, 8236, 584, 1295, 2]
// Exports: fetchGameAutocomplete

// Module 8707 (GameAutocompleteActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8236 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 8235 */;
import size from "module_2" /* 2 */;

let closure_3, closure_4, closure_5, filterGroup, results;

let obj = function _fetchGameAutocomplete() {
  obj = _asyncToGenerator(async (filterGroup, query) => {
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value) => {
      let obj7;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              filterGroup = query;
              results = undefined;
              const obj13 = GameAutocompleteUtils;
              const result = obj13.normalizeGameAutocompleteQuery(filterGroup);
              query = result;
              const tmp37 = require;
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
                  c6 = 1;
                  const HTTP = tmp37(dependencyMap[5]).HTTP;
                  const request = { url: constants.GAMES_AUTOCOMPLETE, query: obj7, rejectWithError: false };
                  c7 = 2;
                  c8 = 1;
                  obj7 = { q: result, filter_group: query };
                  const obj8 = { value: HTTP.get(request), done: false };
                  return obj8;
                }
              }
            }
          } else if (1 === c7) {
            c6 = 0;
            closure_3 = closure_5;
            const obj9 = { type: "GAME_AUTOCOMPLETE_FETCH_FAILURE", query, filterGroup };
            const obj4 = closure_132_1(closure_132_2[4]);
            obj4.dispatch(obj9);
            throw closure_3;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
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
            obj = closure_132_1(closure_132_2[4]);
            const obj11 = { type: "GAME_AUTOCOMPLETE_FETCH_SUCCESS", query, filterGroup, results };
            obj.dispatch(obj11);
            c6 = 0;
          }
          c8 = 3;
          return { value: "IconComponent", done: "+51" };
        } catch (tmp28) {
          closure_5 = tmp28;
          if (0 === c6) {
            c8 = 3;
            throw tmp28;
          } else {
            c7 = 1;
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
