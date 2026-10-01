// Module ID: 9701
// Function ID: 9702
// Name: FavoritesGuildIntroPopover
// Dependencies: [32, 19, 2035, 2048, 1074, 560, 2029, 9685, 504, 9702, 6806, 2]
// Exports: hasOfferedFavoritesGuildOnboarding, isFavoritesIntroPopoverShown, resetHasOfferedFavoritesGuildOnboarding, useFavoritesIntroPopover, useIsFavoritesIntroPopoverShown

// Module 9701 (FavoritesGuildIntroPopover)
import Constants from "Constants" /* 1074 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import useCanShowFavoritesGuildOnboardingDefault from "useCanShowFavoritesGuildOnboarding" /* 9702 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import DismissibleContentShownStateStore_mod from "DismissibleContentShownStateStore" /* 2035 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let hasOwnProperty;
let metroRequire;
let DismissibleContentShownStateStore = DismissibleContentShownStateStore_mod;
({ isContentShown: hasOwnProperty, useIsContentShown: metroRequire } = DismissibleContentShownStateStore);
DismissibleContentShownStateStore = DismissibleContentShownStateStore_mod;
const NOOP = Constants.NOOP;
let closure_10 = module_560.create(() => ({ shouldShowPopover: false, markPopoverAsDismissed: NOOP }));
let c11 = false;
const memoResult = react.memo(function FavoritesGuildIntroPopover() {
  let hasAccess;
  let isFreemium;
  let markPopoverAsDismissed;
  let shouldShowPopover;
  let state;
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
            items1 = [tmp(2029).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO];
          }
          const tmp10 = _slicedToArray(tmp8(items1), 2);
          _require = tmp12;
          const first = tmp10[0];
          const useSelectedDismissibleContent = tmp(6806).useSelectedDismissibleContent;
          tmp(6806);
          const tmp9 = _slicedToArray;
          if (first === tmp(2029).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) {
            const items2 = [tmp(2029).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
            items3 = items2;
          } else {
            items3 = [];
          }
          const tmp14 = tmp9(useSelectedDismissibleContent(items3, undefined, true), 1)[0] === tmp(2029).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
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
});
const result = size.fileFinishedImporting("modules/favorites/onboarding/FavoritesGuildIntroPopover.tsx");

export default memoResult;
export function hasOfferedFavoritesGuildOnboarding() {
  return c11;
}
export function resetHasOfferedFavoritesGuildOnboarding() {
  c11 = false;
}
export const useFavoritesIntroPopover = function useFavoritesIntroPopover() {
  const obj = { shouldShowPopover: closure_10((shouldShowPopover) => shouldShowPopover.shouldShowPopover), markPopoverAsDismissed: closure_10((markPopoverAsDismissed) => markPopoverAsDismissed.markPopoverAsDismissed) };
  return obj;
};
export const isFavoritesIntroPopoverShown = function isFavoritesIntroPopoverShown() {
  const tmp4 = hasOwnProperty(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && hasOwnProperty(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
  return tmp4;
};
export const useIsFavoritesIntroPopoverShown = function useIsFavoritesIntroPopoverShown() {
  const tmp = metroRequire(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) && metroRequire(dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
  return tmp;
};
