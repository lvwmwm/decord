// Module ID: 7235
// Function ID: 7236
// Name: queryGamesAutocomplete
// Dependencies: [4813, 636, 7236, 4814, 2]
// Exports: queryGamesAutocomplete

// Module 7235 (queryGamesAutocomplete)
import set from "set";
import importDefaultResult from "debounce";

const require = arg1;
const obj = { leading: true, maxWait: null };
obj[1] = require("fetchStore").GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS;
let closure_3 = require("debounce")((arg0) => {
  const useGameAutocomplete = require(7236) /* fetchStore */.useGameAutocomplete;
  const items = [arg0];
  const many = useGameAutocomplete.fetchMany(items);
}, require("fetchStore").GAME_AUTOCOMPLETE_DEBOUNCE_MS, obj);
let result = require("fetchStore").fileFinishedImporting("modules/games/autocomplete/queryGamesAutocomplete.tsx");

export const queryGamesAutocomplete = function queryGamesAutocomplete(query) {
  const result = require(4814) /* GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH */.normalizeGameAutocompleteQuery(query);
  let found = null;
  if (null != result) {
    callback(result);
    closestResults = closestResults.getClosestResults(result);
    if (closestResults == null) {
      closestResults = [];
    }
    found = closestResults.filter(require(4814) /* GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH */.isGameAutocompleteResultAllowedInGameWidgets);
  }
  return found;
};
