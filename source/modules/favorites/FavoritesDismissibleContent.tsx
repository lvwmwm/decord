// Module ID: 9781
// Function ID: 9782
// Name: items1
// Dependencies: [32, 19, 1388, 1377, 6087, 9772, 9770, 9780, 6086, 9779, 2]
// Exports: useFavoritesBetaTagDismissibleContent, useFavoritesMenuItemPopoverDismissibleContent, useShouldRenderFavoritesMenuItemPopover

// Module 9781 (items1)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { ContentDismissActionType } from "ContentDismissActionType";

const require = arg1;
let items = [require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO, require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, require("DismissibleContent").DismissibleContent.FAVORITES_GUILD_NEW_BADGE, require("DismissibleContent").DismissibleContent.FAVORITES_GUILD_SUGGESTIONS];
const items1 = [require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO, require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
const items2 = [require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
const result = require("ContentDismissActionType").fileFinishedImporting("modules/favorites/FavoritesDismissibleContent.tsx");

export const FAVORITES_GUILD_DISMISSIBLE_CONTENT = items;
export const useFavoritesMenuItemPopoverDismissibleContent = function useFavoritesMenuItemPopoverDismissibleContent(set) {
  let tmp11;
  let tmp12;
  let obj = require(9772) /* useFavoritesGuildConfig */;
  const isFavoritesGuildSelected = require(9770) /* useFavoritesAccess */.useIsFavoritesGuildSelected();
  const obj2 = require(9770) /* useFavoritesAccess */;
  const tmp4 = importDefault(9780)();
  let first = callback(require(6087) /* canShowTimeRecurringContent */.useDangerouslyPeekDismissibleContents(items1), 1)[0];
  if (first == null) {
    first = null;
  }
  require(6086) /* useSelectedDismissibleContent */;
  if (obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium) {
    if (set) {
      if (tmp4) {
        if (!isFavoritesGuildSelected) {
          if (first === tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM) {
            let items = [tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM];
          }
          obj = { shouldShowPopover: null, markPopoverAsDismissed: null };
          [tmp11, tmp12] = callback(tmp8(items), 2);
          obj[0] = tmp11 === tmp(1377).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
          obj[1] = tmp12;
          return obj;
        }
      }
    }
  }
  items = [];
};
export const useShouldRenderFavoritesMenuItemPopover = function useShouldRenderFavoritesMenuItemPopover() {
  const tmp3 = callback(require(6087) /* canShowTimeRecurringContent */.useDangerouslyPeekDismissibleContents(items2), 1)[0] === require(1377) /* DismissibleContent */.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM;
  const tmp4 = callback(React.useState(tmp3), 2);
  const first = tmp4[0];
  let tmp6 = tmp3;
  if (tmp3) {
    tmp6 = !first;
  }
  if (tmp6) {
    tmp4[1](true);
  }
  let tmp8 = tmp3;
  if (!tmp3) {
    tmp8 = first;
  }
  if (tmp8) {
    tmp8 = !require(9779) /* hasOfferedFavoritesGuildOnboarding */.hasOfferedFavoritesGuildOnboarding();
    const tmpResult = require(9779) /* hasOfferedFavoritesGuildOnboarding */;
  }
  return tmp8;
};
export const useFavoritesBetaTagDismissibleContent = function useFavoritesBetaTagDismissibleContent(arg0) {
  let require;
  let tmp9;
  let obj = require(9772) /* useFavoritesGuildConfig */;
  require(6086) /* useSelectedDismissibleContent */;
  if (obj.useFavoritesGuildConfig({ location: "FavoritesDismissibleContent" }).isFreemium) {
    if (arg0) {
      const items = [tmp(1377).DismissibleContent.FAVORITES_GUILD_NEW_BADGE];
    }
    [tmp9, require] = callback(tmp4([]), 2);
    const tmp10 = tmp9 === tmp(1377).DismissibleContent.FAVORITES_GUILD_NEW_BADGE;
    const importDefault = tmp10;
    obj = { shouldShowBetaTag: null, dismissBetaTag: null };
    obj[0] = tmp10;
    obj[1] = function dismissBetaTag() {
      if (closure_1) {
        callback(outer1_5.TAKE_ACTION);
      }
    };
    return obj;
  }
};
