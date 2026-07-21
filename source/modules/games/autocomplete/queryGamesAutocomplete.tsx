// Module ID: 7095
// Function ID: 57059
// Name: queryGamesAutocomplete
// Dependencies: []
// Exports: queryGamesAutocomplete

// Module 7095 (queryGamesAutocomplete)
let closure_2 = importDefault(dependencyMap[0]);
const obj = { leading: true, maxWait: arg1(dependencyMap[2]).GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS };
let closure_3 = importDefault(dependencyMap[1])((arg0) => {
  const useGameAutocomplete = arg1(dependencyMap[2]).useGameAutocomplete;
  const items = [arg0];
  const many = useGameAutocomplete.fetchMany(items);
}, arg1(dependencyMap[2]).GAME_AUTOCOMPLETE_DEBOUNCE_MS, obj);
const importDefaultResult = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/games/autocomplete/queryGamesAutocomplete.tsx");

export const queryGamesAutocomplete = function queryGamesAutocomplete(toLocaleLowerCase) {
  const result = arg1(dependencyMap[3]).normalizeGameAutocompleteQuery(toLocaleLowerCase);
  let found = null;
  if (null != result) {
    callback(result);
    let closestResults = closestResults.getClosestResults(result);
    if (null == closestResults) {
      closestResults = [];
    }
    found = closestResults.filter(arg1(dependencyMap[3]).isGameAutocompleteResultAllowedInGameWidgets);
  }
  return found;
};
