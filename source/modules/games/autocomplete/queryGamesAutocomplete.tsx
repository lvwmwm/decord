// Module ID: 6117
// Function ID: 54929
// Name: queryGamesAutocomplete
// Dependencies: [6108, 574, 6118, 6109, 2]
// Exports: queryGamesAutocomplete

// Module 6117 (queryGamesAutocomplete)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "debounce";

const require = arg1;
const obj = { leading: true, maxWait: require("fetchStore").GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS };
let closure_3 = require("debounce")((arg0) => {
  const useGameAutocomplete = require(6118) /* fetchStore */.useGameAutocomplete;
  const items = [arg0];
  const many = useGameAutocomplete.fetchMany(items);
}, require("fetchStore").GAME_AUTOCOMPLETE_DEBOUNCE_MS, obj);
let result = require("fetchStore").fileFinishedImporting("modules/games/autocomplete/queryGamesAutocomplete.tsx");

export const queryGamesAutocomplete = function queryGamesAutocomplete(query) {
  const result = require(6109) /* GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH */.normalizeGameAutocompleteQuery(query);
  let found = null;
  if (null != result) {
    callback(result);
    closestResults = closestResults.getClosestResults(result);
    if (null == closestResults) {
      closestResults = [];
    }
    found = closestResults.filter(require(6109) /* GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH */.isGameAutocompleteResultAllowedInGameWidgets);
  }
  return found;
};
