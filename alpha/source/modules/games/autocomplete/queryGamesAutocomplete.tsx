// Module ID: 9108
// Function ID: 9109
// Name: queryGamesAutocomplete
// Dependencies: [8638, 551, 9109, 9111, 8639, 2]
// Exports: queryGamesAutocomplete

// Module 9108 (queryGamesAutocomplete)
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8639 */;
import useGameAutocomplete2 from "useGameAutocomplete" /* 9109 */;
import GameSearchSession from "GameSearchSession" /* 9111 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 8638 */;
import debounce from "debounce" /* 551 */;
import size from "module_2" /* 2 */;

let results;

let obj = { leading: true, maxWait: useGameAutocomplete2.GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS };
const GAME_AUTOCOMPLETE_DEBOUNCE_MS = useGameAutocomplete2.GAME_AUTOCOMPLETE_DEBOUNCE_MS;
let closure_3 = debounce((arg0, arg1) => {
  const useGameAutocomplete = useGameAutocomplete2.useGameAutocomplete;
  const items = [arg0, arg1];
  const many = useGameAutocomplete.fetchMany(items);
}, GAME_AUTOCOMPLETE_DEBOUNCE_MS, obj);
let result = size.fileFinishedImporting("modules/games/autocomplete/queryGamesAutocomplete.tsx");

export function queryGamesAutocomplete(query, DEFAULT, CHAT_MENTION) {
  let gameSearchSession = null;
  if (null != CHAT_MENTION) {
    const obj = GameSearchSession;
    gameSearchSession = obj.getGameSearchSession(CHAT_MENTION, DEFAULT);
  }
  if (gameSearchSession != null) {
    gameSearchSession.onQuery(query);
  }
  const obj2 = GameAutocompleteUtils;
  const result = obj2.normalizeGameAutocompleteQuery(query);
  if (null == result) {
    return null;
  } else {
    closure_3(result, DEFAULT);
    const closestResults = GameAutocompleteStore.getClosestResults(result, DEFAULT);
    results = undefined;
    if (closestResults != null) {
      results = closestResults.results;
    }
    if (results == null) {
      results = [];
    }
    const found = results.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
    if (null != closestResults) {
      if (gameSearchSession != null) {
        gameSearchSession.onResults(closestResults.query, found);
      }
    }
    return found;
  }
}
