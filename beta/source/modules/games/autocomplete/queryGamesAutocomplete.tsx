// Module ID: 9274
// Function ID: 9275
// Name: queryGamesAutocomplete
// Dependencies: [5421, 551, 8364, 5422, 2]
// Exports: queryGamesAutocomplete

// Module 9274 (queryGamesAutocomplete)
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 5422 */;
import useGameAutocomplete2 from "useGameAutocomplete" /* 8364 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 5421 */;
import debounce from "debounce" /* 551 */;
import size from "module_2" /* 2 */;

let obj = { leading: true, maxWait: useGameAutocomplete2.GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS };
const GAME_AUTOCOMPLETE_DEBOUNCE_MS = useGameAutocomplete2.GAME_AUTOCOMPLETE_DEBOUNCE_MS;
let closure_3 = debounce((arg0) => {
  const useGameAutocomplete = useGameAutocomplete2.useGameAutocomplete;
  const items = [arg0];
  const many = useGameAutocomplete.fetchMany(items);
}, GAME_AUTOCOMPLETE_DEBOUNCE_MS, obj);
let result = size.fileFinishedImporting("modules/games/autocomplete/queryGamesAutocomplete.tsx");

export const queryGamesAutocomplete = function queryGamesAutocomplete(query) {
  const obj = GameAutocompleteUtils;
  const result = obj.normalizeGameAutocompleteQuery(query);
  let found = null;
  if (null != result) {
    closure_3(result);
    let closestResults = GameAutocompleteStore.getClosestResults(result);
    if (closestResults == null) {
      closestResults = [];
    }
    found = closestResults.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
  }
  return found;
};
