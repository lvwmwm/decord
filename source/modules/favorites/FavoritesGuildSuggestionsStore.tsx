// Module ID: 15414
// Function ID: 15415
// Name: items
// Dependencies: [32, 19, 1383, 676, 1388, 644, 9770, 6086, 1377, 2]
// Exports: setFavoritesGuildSuggestions, useFavoritesGuildShouldShowSuggestions, useFavoritesGuildSuggestionCount, useFavoritesGuildSuggestions, useFavoritesGuildSuggestionsDismissal, useHasFavoritesGuildSuggestions

// Module 15414 (items)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import withContent from "withContent";
import { NOOP } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import keys from "keys";

let require = arg1;
let items = [];
let closure_8 = keys.create(() => ({ suggestions: items, dismiss: NOOP }));
const result = require("withContent").fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsStore.tsx");

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
  state.setState({ suggestions });
};
export const useFavoritesGuildShouldShowSuggestions = function useFavoritesGuildShouldShowSuggestions() {
  let hasAccess;
  let isFreemium;
  const favoritesAccess = require(9770) /* useFavoritesAccess */.useFavoritesAccess();
  ({ hasAccess, isFreemium } = favoritesAccess);
  const obj = require(9770) /* useFavoritesAccess */;
  require(6086) /* useSelectedDismissibleContent */;
  if (hasAccess) {
    if (isFreemium) {
      if (tmp4) {
        const items = [tmp(1377).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
      }
      const tmp9 = callback(tmp6([]), 2);
      require = tmp10;
      const items1 = [tmp9[1]];
      const layoutEffect = React.useLayoutEffect(() => {
        outer1_8.setState({
          dismiss() {
            return callback(outer1_6.USER_DISMISS);
          }
        });
      }, items1);
      const layoutEffect1 = React.useLayoutEffect(() => () => state.setState({ dismiss: closure_5 }), []);
      return tmp9[0] === tmp(1377).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS;
    }
  }
};
export const useFavoritesGuildSuggestionsDismissal = function useFavoritesGuildSuggestionsDismissal() {
  return state((dismiss) => dismiss.dismiss);
};
