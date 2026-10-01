// Module ID: 15834
// Function ID: 15835
// Name: FavoritesGuildSuggestionsStore
// Dependencies: [32, 19, 2035, 1074, 2042, 560, 9685, 6806, 2029, 2]
// Exports: setFavoritesGuildSuggestions, useFavoritesGuildSuggestionCount, useFavoritesGuildSuggestions, useFavoritesGuildSuggestionsDismissal, useFavoritesGuildSuggestionsVisibility, useHasFavoritesGuildSuggestions

// Module 15834 (FavoritesGuildSuggestionsStore)
import Constants from "Constants" /* 1074 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 2035 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const NOOP = Constants.NOOP;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let items = [];
const state = module_560.create(() => ({ suggestions: items, dismiss: NOOP }));
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsStore.tsx");

export const NO_SUGGESTIONS = items;
export const useFavoritesGuildSuggestions = function useFavoritesGuildSuggestions() {
  return state((suggestions) => suggestions.suggestions);
};
export const useFavoritesGuildSuggestionCount = function useFavoritesGuildSuggestionCount() {
  return state((suggestions) => suggestions.suggestions.length);
};
export const useHasFavoritesGuildSuggestions = function useHasFavoritesGuildSuggestions() {
  return state((suggestions) => suggestions.suggestions.length > 0);
};
export const setFavoritesGuildSuggestions = function setFavoritesGuildSuggestions(suggestions) {
  const obj = { suggestions };
  state.setState(obj);
};
export const useFavoritesGuildSuggestionsVisibility = function useFavoritesGuildSuggestionsVisibility() {
  let closure_0;
  let items1;
  let suggestions;
  let obj = require("FavoritesHooks");
  const favoritesAccess = obj.useFavoritesAccess();
  let hasAccess = favoritesAccess.hasAccess;
  const isFreemium = favoritesAccess.isFreemium;
  const tmp4 = DismissibleContentShownStateStore((postConnectionOpen) => postConnectionOpen.postConnectionOpen);
  if (hasAccess) {
    hasAccess = isFreemium;
  }
  if (hasAccess) {
    hasAccess = tmp4;
  }
  const useSelectedDismissibleContent = tmp(6806).useSelectedDismissibleContent;
  require("useSelectedDismissibleContent");
  if (hasAccess) {
    items = [tmp(2029).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
    items1 = items;
  } else {
    items1 = [];
  }
  const tmp6 = _slicedToArray(useSelectedDismissibleContent(items1), 2);
  _require = tmp8;
  const first = tmp6[0];
  const items2 = [tmp6[1]];
  const FAVORITES_GUILD_SUGGESTIONS = tmp(2029).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS;
  const layoutEffect = react.useLayoutEffect(() => {
    let obj = {
      dismiss() {
        closure_1_0(constants.USER_DISMISS);
        const obj = { suggestions };
        state.setState(obj);
      }
    };
    state.setState(obj);
  }, items2);
  const layoutEffect1 = react.useLayoutEffect(() => {
    let dismiss;
    return () => {
      const obj = { dismiss };
      return state.setState(obj);
    };
  }, []);
  return { isEligible: hasAccess, isSelected: first === FAVORITES_GUILD_SUGGESTIONS };
};
export const useFavoritesGuildSuggestionsDismissal = function useFavoritesGuildSuggestionsDismissal() {
  return state((dismiss) => dismiss.dismiss);
};
