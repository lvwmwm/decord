// Module ID: 14885
// Function ID: 113503
// Name: isFavoritesGuildVisible
// Dependencies: [1340, 3947, 1849, 1351, 1851, 5077, 1872, 10193, 1334, 3946, 566, 2]
// Exports: default

// Module 14885 (isFavoritesGuildVisible)
import { useIsContentShown } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { PremiumTypes } from "GuildFeatures";

function isFavoritesGuildVisible(favoriteGuildEnabled, getCurrentUser, getGuildId, favoritesGuildXPEnabled) {
  if (favoritesGuildXPEnabled.favoritesGuildXPEnabled) {
    if (favoritesGuildXPEnabled.isMenuItemDCSelected) {
      if (!favoritesGuildXPEnabled.isIntroDCDismissed) {
        return true;
      }
    }
    if (obj.isFavoritesGuildId(getGuildId.getGuildId())) {
      return true;
    } else {
      const currentUser = getCurrentUser.getCurrentUser();
      let tmp5 = null == currentUser;
      if (!tmp5) {
        tmp5 = !importDefault(1872).isPremiumExactly(currentUser, PremiumTypes.TIER_2);
        const obj2 = importDefault(1872);
      }
      favoriteGuildEnabled = !tmp5;
      if (!tmp5) {
        favoriteGuildEnabled = favoriteGuildEnabled.favoriteGuildEnabled;
      }
      return favoriteGuildEnabled;
    }
    obj = require(5077) /* isFavoritesGuildId */;
  } else {
    return false;
  }
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/favorites/useIsFavoritesGuildVisible.tsx");

export default function useIsFavoritesGuildVisible(location) {
  let obj = enabled(10193);
  obj = { location };
  enabled = obj.useFavoritesGuildConfig(obj).enabled;
  let closure_1 = useIsContentShown(enabled(1334).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
  const dependencyMap = enabled(3946).useIsDismissibleContentDismissed_UNSAFE(enabled(1334).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO);
  const obj3 = enabled(3946);
  const items = [closure_6, closure_5, _isNativeReflectConstruct];
  return enabled(566).useStateFromStores(items, () => outer1_8(outer1_6, outer1_5, outer1_4, { favoritesGuildXPEnabled: enabled, isMenuItemDCSelected: closure_1, isIntroDCDismissed: closure_2 }));
};
export { isFavoritesGuildVisible };
