// Module ID: 18249
// Function ID: 18250
// Name: FavoritesGuildSuggestionsStore
// Dependencies: [32, 19, 4855, 1072, 4860, 560, 7569, 4847, 2]
// Exports: setFavoritesGuildSuggestions, useFavoritesGuildSuggestionCount, useFavoritesGuildSuggestions, useFavoritesGuildSuggestionsDismissal, useFavoritesGuildSuggestionsVisibility, useHasFavoritesGuildSuggestions

// Module 18249 (FavoritesGuildSuggestionsStore)
import Constants from "Constants" /* 1072 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 4855 */;
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
export function useFavoritesGuildSuggestions() {
  return state((suggestions) => suggestions.suggestions);
}
export function useFavoritesGuildSuggestionCount() {
  return state((suggestions) => suggestions.suggestions.length);
}
export function useHasFavoritesGuildSuggestions() {
  return state((suggestions) => suggestions.suggestions.length > 0);
}
export function setFavoritesGuildSuggestions(suggestions) {
  const obj = { suggestions };
  state.setState(obj);
}
export function useFavoritesGuildSuggestionsVisibility() {
  let closure_0;
  let items1;
  let suggestions;
  const tmp = DismissibleContentShownStateStore((postConnectionOpen) => postConnectionOpen.postConnectionOpen);
  const useSelectedDismissibleContent = require("useSelectedDismissibleContent").useSelectedDismissibleContent;
  require("useSelectedDismissibleContent");
  if (tmp) {
    items = [require("dismissible_content").DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
    items1 = items;
  } else {
    items1 = [];
  }
  const tmp5 = _slicedToArray(useSelectedDismissibleContent(items1), 2);
  _require = tmp7;
  const first = tmp5[0];
  const items2 = [tmp5[1]];
  const FAVORITES_GUILD_SUGGESTIONS = tmp2(4847).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS;
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
  let obj = { isEligible: tmp, isSelected: first === FAVORITES_GUILD_SUGGESTIONS };
  return obj;
}
export function useFavoritesGuildSuggestionsDismissal() {
  return state((dismiss) => dismiss.dismiss);
}
