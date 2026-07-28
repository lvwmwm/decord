// Module ID: 6151
// Function ID: 55049
// Name: queryGamesAutocomplete
// Dependencies: [6142, 574, 6152, 6143, 2]
// Exports: queryGamesAutocomplete

// Module 6151 (queryGamesAutocomplete)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "debounce";

const require = arg1;
const obj = { leading: true, maxWait: require("fetchStore").GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS };
let closure_3 = require("debounce")((arg0) => {
  const useGameAutocomplete = require(6152) /* fetchStore */.useGameAutocomplete;
  const items = [arg0];
  const many = useGameAutocomplete.fetchMany(items);
}, require("fetchStore").GAME_AUTOCOMPLETE_DEBOUNCE_MS, obj);
let result = require("fetchStore").fileFinishedImporting("modules/games/autocomplete/queryGamesAutocomplete.tsx");

export const queryGamesAutocomplete = function queryGamesAutocomplete(query) {
  const result = require(6143) /* GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH */.normalizeGameAutocompleteQuery(query);
  let found = null;
  if (null != result) {
    callback(result);
    closestResults = closestResults.getClosestResults(result);
    if (null == closestResults) {
      closestResults = [];
    }
    found = closestResults.filter(require(6143) /* GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH */.isGameAutocompleteResultAllowedInGameWidgets);
  }
  return found;
};
