// Module ID: 14761
// Function ID: 111292
// Name: isFavoritesGuildVisible
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 14761 (isFavoritesGuildVisible)
import { useIsContentShown } from "result";
import closure_4 from "result";
import closure_5 from "result";
import closure_6 from "result";
import { PremiumTypes } from "result";
import result from "result";

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
        tmp5 = !importDefault(dependencyMap[6]).isPremiumExactly(currentUser, PremiumTypes.TIER_2);
        const obj2 = importDefault(dependencyMap[6]);
      }
      favoriteGuildEnabled = !tmp5;
      if (!tmp5) {
        favoriteGuildEnabled = favoriteGuildEnabled.favoriteGuildEnabled;
      }
      return favoriteGuildEnabled;
    }
    const obj = require(dependencyMap[5]);
  } else {
    return false;
  }
}
result = result.fileFinishedImporting("modules/favorites/useIsFavoritesGuildVisible.tsx");

export default function useIsFavoritesGuildVisible(location) {
  let obj = require(closure_2[7]);
  obj = { location };
  const require = obj.useFavoritesGuildConfig(obj).enabled;
  let closure_1 = useIsContentShown(require(closure_2[8]).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
  closure_2 = require(closure_2[9]).useIsDismissibleContentDismissed_UNSAFE(require(closure_2[8]).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO);
  const obj3 = require(closure_2[9]);
  const items = [closure_6, closure_5, closure_4];
  return require(closure_2[10]).useStateFromStores(items, () => callback(closure_6, closure_5, closure_4, { favoritesGuildXPEnabled: enabled, isMenuItemDCSelected: closure_1, isIntroDCDismissed: closure_2 }));
};
export { isFavoritesGuildVisible };
