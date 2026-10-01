// Module ID: 9296
// Function ID: 9297
// Name: queryGamesAutocomplete
// Dependencies: [5420, 551, 8367, 5421, 2]
// Exports: queryGamesAutocomplete

// Module 9296 (queryGamesAutocomplete)
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 5421 */;
import useGameAutocomplete2 from "useGameAutocomplete" /* 8367 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 5420 */;
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
