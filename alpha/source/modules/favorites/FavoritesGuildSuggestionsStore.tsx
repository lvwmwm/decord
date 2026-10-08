// Module ID: 16426
// Function ID: 16427
// Name: FavoritesGuildSuggestionsStore
// Dependencies: [32, 19, 2055, 1085, 2060, 570, 558, 576, 10294, 2048, 7090, 2]
// Exports: setFavoritesGuildSuggestions

// Module 16426 (FavoritesGuildSuggestionsStore)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2060 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 2055 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, setStateResult;

const NOOP = Constants.NOOP;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let items = [];
let closure_8 = module_570.create(() => ({ suggestions: items, dismiss: NOOP }));
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
  return closure_8(first);
}) : (function useFavoritesGuildSuggestions() {
  return closure_8((suggestions) => suggestions.suggestions);
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
  return closure_8(first);
}) : (function useFavoritesGuildSuggestionCount() {
  return closure_8((suggestions) => suggestions.suggestions.length);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasFavoritesGuildSuggestions() {
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
  return closure_8(first);
}) : (function useHasFavoritesGuildSuggestions() {
  return closure_8((suggestions) => suggestions.suggestions.length > 0);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildSuggestionsVisibility() {
  let closure_0;
  let first;
  let obj3;
  let suggestions;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp7;
  let obj = require("react");
  const cResult = obj.c(11);
  const obj2 = require("FavoritesHooks");
  const favoritesAccess = obj2.useFavoritesAccess();
  let hasAccess = favoritesAccess.hasAccess;
  const isFreemium = favoritesAccess.isFreemium;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(postConnectionOpen) {
      return postConnectionOpen.postConnectionOpen;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = DismissibleContentShownStateStore(first);
  if (hasAccess) {
    hasAccess = isFreemium;
  }
  if (hasAccess) {
    hasAccess = tmp6;
  }
  if (cResult[1] !== hasAccess) {
    let items1;
    if (hasAccess) {
      items = [tmp(2048).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[1] = hasAccess;
    cResult[2] = items1;
    tmp7 = items1;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = require("useSelectedDismissibleContent");
  const tmp8 = _slicedToArray(tmpResult.useSelectedDismissibleContent(tmp7), 2);
  _require = tmp10;
  const first1 = tmp8[0];
  const FAVORITES_GUILD_SUGGESTIONS = tmp(2048).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS;
  if (cResult[3] !== tmp8[1]) {
    class I {
      constructor() {
        obj = {
          dismiss() {
                  closure_1_0(constants.USER_DISMISS);
                  const obj = { suggestions };
                  closure_2_8.setState(obj);
                }
        };
        setStateResult = closure_8.setState(obj);
        return;
      }
    }
    const items2 = [tmp8[1]];
    cResult[3] = tmp8[1];
    cResult[4] = I;
    cResult[5] = items2;
    tmp12 = items2;
    tmp11 = I;
  } else {
    class I {
      constructor() {
        obj = {
          dismiss() {
                  closure_1_0(constants.USER_DISMISS);
                  const obj = { suggestions };
                  closure_2_8.setState(obj);
                }
        };
        setStateResult = closure_8.setState(obj);
        return;
      }
    }
    tmp12 = cResult[5];
  }
  const layoutEffect = react.useLayoutEffect(tmp11, tmp12);
  const obj4 = react;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        return () => {
          const obj = { dismiss };
          return state.setState(obj);
        };
      }
    }
    const items3 = [];
    cResult[6] = D;
    cResult[7] = items3;
    tmp15 = items3;
    tmp14 = D;
  } else {
    class D {
      constructor() {
        return () => {
          const obj = { dismiss };
          return state.setState(obj);
        };
      }
    }
    tmp15 = cResult[7];
  }
  const layoutEffect1 = obj4.useLayoutEffect(tmp14, tmp15);
  if (cResult[8] === hasAccess) {
    class D {
      constructor() {
        return () => {
          const obj = { dismiss };
          return state.setState(obj);
        };
      }
    }
    return obj3;
  }
  obj3 = { isEligible: hasAccess, isSelected: first1 === FAVORITES_GUILD_SUGGESTIONS };
  cResult[8] = hasAccess;
  cResult[9] = first1 === FAVORITES_GUILD_SUGGESTIONS;
  cResult[10] = obj3;
}) : (function useFavoritesGuildSuggestionsVisibility() {
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
  const useSelectedDismissibleContent = tmp(7090).useSelectedDismissibleContent;
  require("useSelectedDismissibleContent");
  if (hasAccess) {
    items = [tmp(2048).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
    items1 = items;
  } else {
    items1 = [];
  }
  const tmp6 = _slicedToArray(useSelectedDismissibleContent(items1), 2);
  _require = tmp8;
  const first = tmp6[0];
  const items2 = [tmp6[1]];
  const FAVORITES_GUILD_SUGGESTIONS = tmp(2048).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS;
  const layoutEffect = react.useLayoutEffect(() => {
    let obj = {
      dismiss() {
        closure_1_0(constants.USER_DISMISS);
        const obj = { suggestions };
        closure_2_8.setState(obj);
      }
    };
    closure_8.setState(obj);
  }, items2);
  const layoutEffect1 = react.useLayoutEffect(() => {
    let dismiss;
    let state;
    return () => {
      const obj = { dismiss };
      return state.setState(obj);
    };
  }, []);
  return { isEligible: hasAccess, isSelected: first === FAVORITES_GUILD_SUGGESTIONS };
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
  return closure_8(first);
}) : (function useFavoritesGuildSuggestionsDismissal() {
  return closure_8((dismiss) => dismiss.dismiss);
});
function setFavoritesGuildSuggestions(suggestions) {
  const obj = { suggestions };
  closure_8.setState(obj);
}
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsStore.tsx");

export const NO_SUGGESTIONS = items;
export const useFavoritesGuildSuggestions = tmp2;
export const useFavoritesGuildSuggestionCount = tmp3;
export const useHasFavoritesGuildSuggestions = tmp4;
export { setFavoritesGuildSuggestions };
export const useFavoritesGuildSuggestionsVisibility = tmp5;
export const useFavoritesGuildSuggestionsDismissal = tmp6;
