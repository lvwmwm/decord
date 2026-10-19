// Module ID: 17330
// Function ID: 17331
// Name: FavoritesGuildSuggestionsStore
// Dependencies: [32, 19, 2060, 1087, 2065, 570, 558, 576, 2052, 7376, 2]
// Exports: setFavoritesGuildSuggestions

// Module 17330 (FavoritesGuildSuggestionsStore)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2065 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 2060 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const NOOP = Constants.NOOP;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let items = [];
const state = module_570.create(() => ({ suggestions: items, dismiss: NOOP }));
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildSuggestions() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(suggestions) {
      return suggestions.suggestions;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return state(first);
}) : (function useFavoritesGuildSuggestions() {
  return state((suggestions) => suggestions.suggestions);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildSuggestionCount() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(suggestions) {
      return suggestions.suggestions.length;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return state(first);
}) : (function useFavoritesGuildSuggestionCount() {
  return state((suggestions) => suggestions.suggestions.length);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasFavoritesGuildSuggestions() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(suggestions) {
      return suggestions.suggestions.length > 0;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return state(first);
}) : (function useHasFavoritesGuildSuggestions() {
  return state((suggestions) => suggestions.suggestions.length > 0);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildSuggestionsVisibility() {
  let closure_0;
  let first;
  let suggestions;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp6;
  let obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(postConnectionOpen) {
      return postConnectionOpen.postConnectionOpen;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp5 = DismissibleContentShownStateStore(first);
  if (cResult[1] !== tmp5) {
    let items1;
    if (tmp5) {
      items = [tmp(2052).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[1] = tmp5;
    cResult[2] = items1;
    tmp6 = items1;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("useSelectedDismissibleContent");
  const tmp7 = _slicedToArray(tmpResult.useSelectedDismissibleContent(tmp6), 2);
  _require = tmp9;
  const first1 = tmp7[0];
  const FAVORITES_GUILD_SUGGESTIONS = tmp(2052).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS;
  if (cResult[3] !== tmp7[1]) {
    const fn2 = function _() {
      let obj = {
        dismiss() {
          closure_1_0(constants.USER_DISMISS);
          const obj = { suggestions };
          state.setState(obj);
        }
      };
      state.setState(obj);
    };
    const items2 = [tmp7[1]];
    cResult[3] = tmp7[1];
    cResult[4] = fn2;
    cResult[5] = items2;
    tmp11 = items2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const layoutEffect = react.useLayoutEffect(tmp10, tmp11);
  const obj3 = react;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function b() {
      let dismiss;
      return () => {
        const obj = { dismiss };
        return state.setState(obj);
      };
    };
    const items3 = [];
    cResult[6] = fn3;
    cResult[7] = items3;
    tmp14 = items3;
    tmp13 = fn3;
  } else {
    tmp13 = cResult[6];
    tmp14 = cResult[7];
  }
  const layoutEffect1 = obj3.useLayoutEffect(tmp13, tmp14);
  if (cResult[8] === tmp5) {
    let tmp17;
    if (cResult[9] === first1 === FAVORITES_GUILD_SUGGESTIONS) {
      tmp17 = cResult[10];
    }
    return tmp17;
  }
  const obj2 = { isEligible: tmp5, isSelected: first1 === FAVORITES_GUILD_SUGGESTIONS };
  cResult[8] = tmp5;
  cResult[9] = first1 === FAVORITES_GUILD_SUGGESTIONS;
  cResult[10] = obj2;
  tmp17 = obj2;
}) : (function useFavoritesGuildSuggestionsVisibility() {
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
  const FAVORITES_GUILD_SUGGESTIONS = tmp2(2052).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS;
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildSuggestionsDismissal() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(dismiss) {
      return dismiss.dismiss;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return state(first);
}) : (function useFavoritesGuildSuggestionsDismissal() {
  return state((dismiss) => dismiss.dismiss);
});
function setFavoritesGuildSuggestions(suggestions) {
  const obj = { suggestions };
  state.setState(obj);
}
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsStore.tsx");

export const NO_SUGGESTIONS = items;
export const useFavoritesGuildSuggestions = tmp2;
export const useFavoritesGuildSuggestionCount = tmp3;
export const useHasFavoritesGuildSuggestions = tmp4;
export { setFavoritesGuildSuggestions };
export const useFavoritesGuildSuggestionsVisibility = tmp5;
export const useFavoritesGuildSuggestionsDismissal = tmp6;
