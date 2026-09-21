// Module ID: 16541
// Function ID: 16542
// Name: FavoritesGuildSuggestionsStore
// Dependencies: [32, 19, 2037, 1078, 2042, 562, 558, 568, 10606, 2031, 7632, 2]
// Exports: setFavoritesGuildSuggestions

// Module 16541 (FavoritesGuildSuggestionsStore)
import c from "c" /* 568 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DismissibleContentShownStateStore from "DismissibleContentShownStateStore" /* 2037 */;

require = fn;
const NOOP = fn(1078).NOOP;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
let items = [];
const module_562 = fn(562);
let closure_8 = module_562.create(() => ({ suggestions: items, dismiss: NOOP }));
fn(558);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(suggestions) {
      return suggestions.suggestions;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_8(first);
}) : (() => closure_8((suggestions) => suggestions.suggestions));
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(suggestions) {
      return suggestions.suggestions.length;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_8(first);
}) : (() => closure_8((suggestions) => suggestions.suggestions.length));
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(suggestions) {
      return suggestions.suggestions.length > 0;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_8(first);
}) : (() => closure_8((suggestions) => suggestions.suggestions.length > 0));
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(11);
  const obj = require("c");
  const favoritesAccess = require("FavoritesHooks").useFavoritesAccess();
  const hasAccess = favoritesAccess.hasAccess;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(arg0) {
        return arg0.postConnectionOpen;
      }
    }
    cResult[0] = S;
    const tmp5 = S;
  } else {
    class S {
      constructor(arg0) {
        return arg0.postConnectionOpen;
      }
    }
  }
  DismissibleContentShownStateStore(tmp5);
  if (hasAccess) {
    class S {
      constructor(arg0) {
        return arg0.postConnectionOpen;
      }
    }
  }
  if (hasAccess) {
    class S {
      constructor(arg0) {
        return arg0.postConnectionOpen;
      }
    }
  }
  if (cResult[1] !== hasAccess) {
    class S {
      constructor(arg0) {
        return arg0.postConnectionOpen;
      }
    }
    cResult[1] = hasAccess;
    cResult[2] = tmp8;
  } else {
    class S {
      constructor(arg0) {
        return arg0.postConnectionOpen;
      }
    }
    const tmp11 = _slicedToArray(tmp(7632).useSelectedDismissibleContent(tmp7), 2);
    _require = tmp12;
    if (cResult[3] !== tmp11[1]) {
      class I {
        constructor() {
          obj = { dismiss() { ... } };
          setStateResult = closure_8.setState(obj);
          return;
        }
      }
      items = [tmp12];
      cResult[3] = tmp12;
      cResult[4] = I;
      cResult[5] = items;
      let tmp14 = items;
      const tmp13 = I;
    } else {
      class I {
        constructor() {
          obj = { dismiss() { ... } };
          setStateResult = closure_8.setState(obj);
          return;
        }
      }
      tmp14 = cResult[5];
    }
    const layoutEffect = noop.useLayoutEffect(tmp13, tmp14);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class O {
        constructor() {
          return () => { ... };
        }
      }
      const items1 = [];
      cResult[6] = O;
      cResult[7] = items1;
      let tmp17 = items1;
      const tmp16 = O;
    } else {
      class O {
        constructor() {
          return () => { ... };
        }
      }
      tmp17 = cResult[7];
    }
    const tmp18 = tmp11[0] === tmp(2031).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS;
    const layoutEffect1 = noop.useLayoutEffect(tmp16, tmp17);
    if (cResult[8] === hasAccess) {
      class O {
        constructor() {
          return () => { ... };
        }
      }
      return tmp20;
    }
    const obj3 = { isEligible: hasAccess, isSelected: tmp18 };
    cResult[8] = hasAccess;
    cResult[9] = tmp18;
    cResult[10] = obj3;
    tmp20 = obj3;
    const tmpResult = tmp(7632);
  }
}) : (() => {
  const favoritesAccess = require("FavoritesHooks").useFavoritesAccess();
  let isFreemium = favoritesAccess.hasAccess;
  const obj = require("FavoritesHooks");
  if (isFreemium) {
    isFreemium = favoritesAccess.isFreemium;
  }
  if (isFreemium) {
    isFreemium = tmp4;
  }
  tmp4 = DismissibleContentShownStateStore((postConnectionOpen) => postConnectionOpen.postConnectionOpen);
  if (isFreemium) {
    items = [tmp(2031).DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp5 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(items1), 2);
  _require = tmp6;
  const items2 = [tmp5[1]];
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_8.setState({
      dismiss() {
        closure_1_0(constants.USER_DISMISS);
        closure_2_8.setState({ suggestions });
      }
    });
  }, items2);
  const layoutEffect1 = noop.useLayoutEffect(() => () => state.setState({ dismiss }), []);
  const tmpResult = require("useSelectedDismissibleContent");
  return { isEligible: isFreemium, isSelected: tmp5[0] === require("dismissible_content").DismissibleContent.FAVORITES_GUILD_SUGGESTIONS };
});
function setFavoritesGuildSuggestions(suggestions) {
  closure_8.setState({ suggestions });
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsStore.tsx");

export const NO_SUGGESTIONS = items;
export const useFavoritesGuildSuggestions = tmp2;
export const useFavoritesGuildSuggestionCount = tmp3;
export const useHasFavoritesGuildSuggestions = tmp4;
export { setFavoritesGuildSuggestions };
export const useFavoritesGuildSuggestionsVisibility = tmp5;
export const useFavoritesGuildSuggestionsDismissal = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s(dismiss) {
      return dismiss.dismiss;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_8(first);
}) : (() => closure_8((dismiss) => dismiss.dismiss));
