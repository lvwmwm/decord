// Module ID: 7091
// Function ID: 56884
// Name: GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH
// Dependencies: [6858, 2]
// Exports: isGameAutocompleteResultAllowedInGameWidgets, normalizeGameAutocompleteQuery, shouldSuppressAutocompleteFetch

// Module 7091 (GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH)
const result = require("set").fileFinishedImporting("modules/games/autocomplete/GameAutocompleteUtils.tsx");

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
export const normalizeGameAutocompleteQuery = function normalizeGameAutocompleteQuery(query) {
  if (null == query) {
    return null;
  } else {
    const formatted = query.trim().toLowerCase();
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
  const GAME_WIDGET_BANNED_APPLICATION_IDS = require(6858) /* GAME_WIDGET_LIMITS_BY_TYPE */.GAME_WIDGET_BANNED_APPLICATION_IDS;
  return !GAME_WIDGET_BANNED_APPLICATION_IDS.has(id.id);
};
