// Module ID: 7100
// Function ID: 57104
// Name: queryGamesAutocomplete
// Dependencies: [7091, 574, 7101, 7092, 2]
// Exports: queryGamesAutocomplete

// Module 7100 (queryGamesAutocomplete)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "debounce";

const require = arg1;
const obj = { leading: true, maxWait: require("fetchStore").GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS };
let closure_3 = require("debounce")((arg0) => {
  const useGameAutocomplete = require(7101) /* fetchStore */.useGameAutocomplete;
  const items = [arg0];
  const many = useGameAutocomplete.fetchMany(items);
}, require("fetchStore").GAME_AUTOCOMPLETE_DEBOUNCE_MS, obj);
let result = require("fetchStore").fileFinishedImporting("modules/games/autocomplete/queryGamesAutocomplete.tsx");

export const queryGamesAutocomplete = function queryGamesAutocomplete(toLocaleLowerCase) {
  const result = require(7092) /* GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH */.normalizeGameAutocompleteQuery(toLocaleLowerCase);
  let found = null;
  if (null != result) {
    callback(result);
    closestResults = closestResults.getClosestResults(result);
    if (null == closestResults) {
      closestResults = [];
    }
    found = closestResults.filter(require(7092) /* GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH */.isGameAutocompleteResultAllowedInGameWidgets);
  }
  return found;
};
