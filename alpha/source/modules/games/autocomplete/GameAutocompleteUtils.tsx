// Module ID: 9313
// Function ID: 9314
// Name: GameAutocompleteUtils
// Dependencies: [7292, 2]
// Exports: isGameAutocompleteResultAllowedInGameWidgets, isRetryableGameSearchError, normalizeGameAutocompleteQuery, shouldSuppressAutocompleteFetch

// Module 9313 (GameAutocompleteUtils)
import GameWidgetLimits from "GameWidgetLimits" /* 7292 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteUtils.tsx");

export const GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH = 100;
export const MIN_TRUSTED_EMPTY_PREFIX_LENGTH = 7;
export function shouldSuppressAutocompleteFetch(arr, fn) {
  let diff = arr.length - 1;
  if (1 <= diff) {
    arr = fn(arr.slice(0, diff));
    while (null == arr) {
      diff = diff - 1;
    }
    return arr.length <= 0 && diff >= 7;
  }
  return false;
}
export function isRetryableGameSearchError(status) {
  status = status.status;
  let tmp = null != status;
  if (tmp) {
    let tmp2 = 429 === status;
    if (!tmp2) {
      tmp2 = status >= 500 && 503 !== status;
      const tmp3 = status >= 500 && 503 !== status;
    }
    tmp = tmp2;
  }
  return tmp;
}
export function normalizeGameAutocompleteQuery(name) {
  if (null == name) {
    return null;
  } else {
    const str = name.trim();
    const formatted = str.toLowerCase();
    const replaced = formatted.replaceAll("_", " ");
    const substr = replaced.slice(0, 100);
    let tmp = null;
    if (substr.length > 0) {
      tmp = substr;
    }
    return tmp;
  }
}
export function isGameAutocompleteResultAllowedInGameWidgets(id) {
  const GAME_WIDGET_BANNED_APPLICATION_IDS = GameWidgetLimits.GAME_WIDGET_BANNED_APPLICATION_IDS;
  return !GAME_WIDGET_BANNED_APPLICATION_IDS.has(id.id);
}
