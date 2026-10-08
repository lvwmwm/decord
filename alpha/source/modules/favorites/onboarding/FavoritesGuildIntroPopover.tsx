// Module ID: 10306
// Function ID: 10307
// Name: FavoritesGuildIntroPopover
// Dependencies: [32, 19, 2055, 2066, 1085, 570, 558, 576, 2048, 10294, 504, 10307, 7090, 2]
// Exports: hasOfferedFavoritesGuildOnboarding, isFavoritesIntroPopoverShown, resetHasOfferedFavoritesGuildOnboarding

// Module 10306 (FavoritesGuildIntroPopover)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import dismissible_content from "dismissible_content" /* 2048 */;
import FavoritesHooks from "FavoritesHooks" /* 10294 */;
import useCanShowFavoritesGuildOnboardingDefault from "useCanShowFavoritesGuildOnboarding" /* 10307 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import DismissibleContentShownStateStore_mod from "DismissibleContentShownStateStore" /* 2055 */;
import FavoriteStore from "FavoriteStore" /* 2066 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let hasOwnProperty;
let metroRequire;
let tmp;
const get_initialized = tmp(504);
const useSelectedDismissibleContent2 = tmp(7090);
let DismissibleContentShownStateStore = DismissibleContentShownStateStore_mod;
({ isContentShown: hasOwnProperty, useIsContentShown: metroRequire } = DismissibleContentShownStateStore);
DismissibleContentShownStateStore = DismissibleContentShownStateStore_mod;
const NOOP = Constants.NOOP;
const state = module_570.create(() => ({ shouldShowPopover: false, markPopoverAsDismissed: NOOP }));
let c11 = false;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesIntroPopover() {
  let first;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(shouldShowPopover) {
      return shouldShowPopover.shouldShowPopover;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp4 = state(first);
  const tmp3 = state;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function t(markPopoverAsDismissed) {
      return markPopoverAsDismissed.markPopoverAsDismissed;
    };
    cResult[1] = fn2;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[1];
  }
  const tmp3Result = tmp3(tmp5);
  if (cResult[2] === tmp3Result) {
    let tmp7;
    if (cResult[3] === tmp4) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  const obj2 = { shouldShowPopover: tmp4, markPopoverAsDismissed: tmp3Result };
  cResult[2] = tmp3Result;
  cResult[3] = tmp4;
  cResult[4] = obj2;
  tmp7 = obj2;
}) : (function useFavoritesIntroPopover() {
  const obj = { shouldShowPopover: state((shouldShowPopover) => shouldShowPopover.shouldShowPopover), markPopoverAsDismissed: state((markPopoverAsDismissed) => markPopoverAsDismissed.markPopoverAsDismissed) };
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsFavoritesIntroPopoverShown() {
  const tmp = metroRequire(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && metroRequire(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
  return tmp;
}) : (function useIsFavoritesIntroPopoverShown() {
  const tmp = metroRequire(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && metroRequire(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
  return tmp;
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildIntroPopover() {
  let hasAccess;
  let isFreemium;
  let require;
  let shouldShowPopover;
  let tmp10;
  let tmp15;
  let tmp16;
  let tmp22;
  let tmp23;
  let tmp5;
  let tmp6;
  let tmp = require;
  let obj = react2;
  const cResult = obj.c(20);
  const obj2 = FavoritesHooks;
  const favoritesAccess = obj2.useFavoritesAccess("FavoritesGuildIntroPopover");
  ({ hasAccess, isFreemium } = favoritesAccess);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    const fn = function n() {
      return false === FavoriteStore.favoriteGuildVisibleSetting;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmp9 = useCanShowFavoritesGuildOnboardingDefault();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c(postConnectionOpen) {
      return postConnectionOpen.postConnectionOpen;
    };
    cResult[2] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[2];
  }
  const tmp11 = DismissibleContentShownStateStore(tmp10);
  if (cResult[3] === tmp9) {
    if (cResult[4] === hasAccess) {
      if (cResult[5] === isFreemium) {
        if (cResult[6] === stateFromStores) {
          let tmp17;
          let tmp20;
          let tmp19;
          const tmpResult3 = useSelectedDismissibleContent2;
          [tmp15, tmp16] = tmpResult3.useSelectedDismissibleContent(tmp12);
          require = tmp16;
          _slicedToArray(tmpResult3.useSelectedDismissibleContent(tmp12), 2);
          const tmp13 = _slicedToArray;
          if (cResult[9] !== tmp15) {
            let items2;
            if (tmp15 === dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) {
              const items1 = [dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
              items2 = items1;
            } else {
              items2 = [];
            }
            cResult[9] = tmp15;
            cResult[10] = items2;
            tmp17 = items2;
          } else {
            tmp17 = cResult[10];
          }
          const tmpResult4 = useSelectedDismissibleContent2;
          const tmp18 = tmp13(tmpResult4.useSelectedDismissibleContent(tmp17, undefined, true), 1)[0] === dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
          importDefault = tmp18;
          if (cResult[11] !== tmp18) {
            class V {
              constructor() {
                const tmp = shouldShowPopover;
                if (tmp) {
                  c11 = true;
                }
              }
            }
            const items3 = [tmp18];
            cResult[11] = tmp18;
            cResult[12] = V;
            cResult[13] = items3;
            tmp20 = items3;
            tmp19 = V;
          } else {
            class V {
              constructor() {
                const tmp = shouldShowPopover;
                if (tmp) {
                  c11 = true;
                }
              }
            }
            tmp20 = cResult[13];
          }
          const effect = react.useEffect(tmp19, tmp20);
          if (cResult[14] === tmp16) {
            let tmp26;
            let tmp25;
            class V {
              constructor() {
                const tmp = shouldShowPopover;
                if (tmp) {
                  c11 = true;
                }
              }
            }
            const layoutEffect = obj6.useLayoutEffect(tmp22, tmp23);
            const _Symbol = Symbol;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              class M {
                constructor() {
                  return () => {
                    const obj = { shouldShowPopover: false, markPopoverAsDismissed };
                    return state.setState(obj);
                  };
                }
              }
              const items4 = [];
              cResult[18] = items4;
              cResult[19] = M;
              tmp26 = M;
              tmp25 = items4;
            } else {
              class M {
                constructor() {
                  return () => {
                    const obj = { shouldShowPopover: false, markPopoverAsDismissed };
                    return state.setState(obj);
                  };
                }
              }
              tmp26 = cResult[19];
            }
            const layoutEffect1 = obj6.useLayoutEffect(tmp26, tmp25);
            return null;
          }
          class C {
            constructor() {
              const obj = { shouldShowPopover, markPopoverAsDismissed: require };
              state.setState(obj);
            }
          }
          const items5 = [tmp18, tmp16];
          cResult[14] = tmp16;
          cResult[15] = tmp18;
          cResult[16] = C;
          cResult[17] = items5;
          tmp22 = C;
          tmp23 = items5;
        }
      }
    }
  }
  if (hasAccess) {
    class M {
      constructor() {
        return () => {
          const obj = { shouldShowPopover: false, markPopoverAsDismissed };
          return state.setState(obj);
        };
      }
    }
  }
}) : (function FavoritesGuildIntroPopover() {
  let _require;
  let hasAccess;
  let isFreemium;
  let shouldShowPopover;
  let tmp = _require;
  let obj = require("FavoritesHooks");
  const favoritesAccess = obj.useFavoritesAccess("FavoritesGuildIntroPopover");
  ({ hasAccess, isFreemium } = favoritesAccess);
  const items = [FavoriteStore];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => false === FavoriteStore.favoriteGuildVisibleSetting);
  const tmp5 = useCanShowFavoritesGuildOnboardingDefault();
  const tmp6 = DismissibleContentShownStateStore((postConnectionOpen) => postConnectionOpen.postConnectionOpen);
  require("useSelectedDismissibleContent");
  if (hasAccess) {
    if (isFreemium) {
      if (!stateFromStores) {
        if (tmp5) {
          let items1;
          let items3;
          if (tmp6) {
            items1 = [tmp(2048).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO];
          }
          const tmp10 = _slicedToArray(tmp8(items1), 2);
          _require = tmp12;
          const first = tmp10[0];
          const useSelectedDismissibleContent = tmp(7090).useSelectedDismissibleContent;
          tmp(7090);
          const tmp9 = _slicedToArray;
          if (first === tmp(2048).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) {
            const items2 = [tmp(2048).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
            items3 = items2;
          } else {
            items3 = [];
          }
          const tmp14 = tmp9(useSelectedDismissibleContent(items3, undefined, true), 1)[0] === tmp(2048).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
          importDefault = tmp14;
          const items4 = [tmp14];
          const effect = react.useEffect(() => {
            const tmp = shouldShowPopover;
            if (tmp) {
              c11 = true;
            }
          }, items4);
          const items5 = [tmp14, tmp10[1]];
          const layoutEffect = react.useLayoutEffect(() => {
            const obj = { shouldShowPopover, markPopoverAsDismissed };
            state.setState(obj);
          }, items5);
          const layoutEffect1 = react.useLayoutEffect(() => () => {
            const obj = { shouldShowPopover: false, markPopoverAsDismissed };
            return state.setState(obj);
          }, []);
          return null;
        }
      }
    }
  }
  items1 = [];
}));
const result = size.fileFinishedImporting("modules/favorites/onboarding/FavoritesGuildIntroPopover.tsx");

export default memoResult;
export function hasOfferedFavoritesGuildOnboarding() {
  return c11;
}
export function resetHasOfferedFavoritesGuildOnboarding() {
  c11 = false;
}
export const useFavoritesIntroPopover = tmp3;
export const isFavoritesIntroPopoverShown = function isFavoritesIntroPopoverShown() {
  const tmp4 = hasOwnProperty(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && hasOwnProperty(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
  return tmp4;
};
export const useIsFavoritesIntroPopoverShown = tmp4;
