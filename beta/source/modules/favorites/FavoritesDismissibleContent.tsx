// Module ID: 9703
// Function ID: 9704
// Name: FavoritesDismissibleContent
// Dependencies: [32, 19, 2042, 2029, 6807, 9687, 9685, 9702, 6806, 9701, 2]
// Exports: useFavoritesBetaTagDismissibleContent, useFavoritesMenuItemPopoverDismissibleContent, useShouldRenderFavoritesMenuItemPopover

// Module 9703 (FavoritesDismissibleContent)
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 6806 */;
import useGetDismissibleContent from "useGetDismissibleContent" /* 6807 */;
import FavoritesHooks from "FavoritesHooks" /* 9685 */;
import FavoritesGuildExperiment from "FavoritesGuildExperiment" /* 9687 */;
import useCanShowFavoritesGuildOnboardingDefault from "useCanShowFavoritesGuildOnboarding" /* 9702 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const FavoritesGuildIntroPopover = tmp(9701);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let items = [dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO, dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, dismissible_content.DismissibleContent.FAVORITES_GUILD_NEW_BADGE, dismissible_content.DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
const items1 = [dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO, dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
const items2 = [dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
const result = size.fileFinishedImporting("modules/favorites/FavoritesDismissibleContent.tsx");

export const FAVORITES_GUILD_DISMISSIBLE_CONTENT = items;
export const useFavoritesMenuItemPopoverDismissibleContent = function useFavoritesMenuItemPopoverDismissibleContent(set) {
  let tmp11;
  let tmp12;
  const obj = FavoritesGuildExperiment;
  const isFreemium = obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium;
  const obj2 = FavoritesHooks;
  const isFavoritesGuildSelected = obj2.useIsFavoritesGuildSelected();
  const tmp4 = useCanShowFavoritesGuildOnboardingDefault();
  const obj3 = useGetDismissibleContent;
  let first = _slicedToArray(obj3.useDangerouslyPeekDismissibleContents(items1), 1)[0];
  if (first == null) {
    first = null;
  }
  const FAVORITES_SERVER_ONBOARDING_MENU_ITEM = tmp(2029).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
  useSelectedDismissibleContent;
  if (isFreemium) {
    const tmp9 = set;
    if (tmp9) {
      if (tmp4) {
        if (!isFavoritesGuildSelected) {
          let items;
          if (first === FAVORITES_SERVER_ONBOARDING_MENU_ITEM) {
            items = [dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
          }
          const obj4 = { shouldShowPopover: tmp11 === dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, markPopoverAsDismissed: tmp12 };
          [tmp11, tmp12] = _slicedToArray(tmp8(items), 2);
          _slicedToArray(tmp8(items), 2);
          return obj4;
        }
      }
    }
  }
  items = [];
};
export const useShouldRenderFavoritesMenuItemPopover = function useShouldRenderFavoritesMenuItemPopover() {
  let first;
  let tmp6;
  const obj = useGetDismissibleContent;
  const tmp3 = _slicedToArray(obj.useDangerouslyPeekDismissibleContents(items2), 1)[0] === dismissible_content.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
  [first, tmp6] = react.useState(tmp3);
  let tmp7 = tmp3;
  if (tmp3) {
    tmp7 = !first;
  }
  if (tmp7) {
    tmp6(true);
  }
  let tmp9 = tmp3 || first;
  if (tmp9) {
    const tmpResult = FavoritesGuildIntroPopover;
    tmp9 = !tmpResult.hasOfferedFavoritesGuildOnboarding();
  }
  return tmp9;
};
export const useFavoritesBetaTagDismissibleContent = function useFavoritesBetaTagDismissibleContent(arg0) {
  let tmp9;
  let tmp = require;
  const obj = FavoritesGuildExperiment;
  const isFreemium = obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium;
  useSelectedDismissibleContent;
  if (isFreemium) {
    const tmp5 = arg0;
    if (tmp5) {
      const items = [dismissible_content.DismissibleContent.FAVORITES_GUILD_NEW_BADGE];
    }
    [tmp9, require] = tmp4([]);
    _slicedToArray(tmp4([]), 2);
    const tmp10 = tmp9 === dismissible_content.DismissibleContent.FAVORITES_GUILD_NEW_BADGE;
    let closure_1 = tmp10;
    return {
      shouldShowBetaTag: tmp10,
      dismissBetaTag() {
          const tmp = closure_1;
          if (tmp) {
            require(ContentDismissActionType.TAKE_ACTION);
          }
        }
    };
  }
};
