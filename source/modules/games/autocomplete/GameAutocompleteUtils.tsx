// Module ID: 7082
// Function ID: 56803
// Name: GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH
// Dependencies: []
// Exports: isGameAutocompleteResultAllowedInGameWidgets, normalizeGameAutocompleteQuery, shouldSuppressAutocompleteFetch

// Module 7082 (GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteUtils.tsx");

export const GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH = 100;
export const MIN_TRUSTED_EMPTY_PREFIX_LENGTH = 7;
export const shouldSuppressAutocompleteFetch = function shouldSuppressAutocompleteFetch(result, arg1) {
  let diff = result.length - 1;
  if (diff >= 1) {
    const arr = arg1(result.slice(0, diff));
    while (null == arr) {
      diff = diff - 1;
    }
    let tmp4 = !tmp3;
    if (arr.length <= 0) {
      tmp4 = diff >= 7;
    }
    return tmp4;
  }
  return false;
};
export const normalizeGameAutocompleteQuery = function normalizeGameAutocompleteQuery(toLocaleLowerCase) {
  if (null == toLocaleLowerCase) {
    return null;
  } else {
    const formatted = toLocaleLowerCase.trim().toLowerCase();
    const replaced = formatted.replaceAll("_", " ");
    const substr = replaced.slice(0, 100);
    let tmp = null;
    if (substr.length > 0) {
      tmp = substr;
    }
    return tmp;
  }
};
export const isGameAutocompleteResultAllowedInGameWidgets = function isGameAutocompleteResultAllowedInGameWidgets(id) {
  const GAME_WIDGET_BANNED_APPLICATION_IDS = require(dependencyMap[0]).GAME_WIDGET_BANNED_APPLICATION_IDS;
  return !GAME_WIDGET_BANNED_APPLICATION_IDS.has(id.id);
};
