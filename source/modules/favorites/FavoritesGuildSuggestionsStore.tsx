// Module ID: 15399
// Function ID: 15400
// Name: items
// Dependencies: [32, 19, 1383, 1394, 676, 1388, 644, 9755, 6063, 1377, 589, 2]
// Exports: setFavoritesGuildSuggestions, useFavoritesGuildShouldShowSuggestions, useFavoritesGuildSuggestionCount, useFavoritesGuildSuggestions, useFavoritesGuildSuggestionsDismissal, useHasFavoritesGuildSuggestions

// Module 15399 (items)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import withContent from "withContent";
import initializeFromUserSettings from "initializeFromUserSettings";
import { NOOP } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import keys from "keys";

let require = arg1;
let items = [];
let closure_9 = keys.create(() => ({ suggestions: items, dismiss: NOOP }));
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
  const favoritesAccess = require(9755) /* useFavoritesAccess */.useFavoritesAccess();
  ({ hasAccess, isFreemium } = favoritesAccess);
  const obj = require(9755) /* useFavoritesAccess */;
  require(6063) /* useSelectedDismissibleContent */;
  if (hasAccess) {
    if (isFreemium) {
      if (tmp4) {
        const items = [tmp(1377).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
      }
      const tmp9 = callback(tmp6([]), 2);
      require = tmp10;
      const items1 = [tmp9[1]];
      const layoutEffect = React.useLayoutEffect(() => {
        outer1_9.setState({
          dismiss() {
            return callback(outer1_7.USER_DISMISS);
          }
        });
      }, items1);
      const layoutEffect1 = React.useLayoutEffect(() => () => state.setState({ dismiss: closure_6 }), []);
      return tmp9[0] === tmp(1377).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS;
    }
  }
};
export const useFavoritesGuildSuggestionsDismissal = function useFavoritesGuildSuggestionsDismissal() {
  const obj = { canDismiss: null, dismiss: null };
  const tmp = state((dismiss) => dismiss.dismiss);
  const items = [initializeFromUserSettings];
  obj[0] = require(589) /* initialize */.useStateFromStores(items, () => favoritesCountAgainstLimit.getFavoritesCountAgainstLimit() > 0);
  obj[1] = tmp;
  return obj;
};
