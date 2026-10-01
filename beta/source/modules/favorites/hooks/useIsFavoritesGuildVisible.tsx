// Module ID: 14872
// Function ID: 14873
// Name: useIsFavoritesGuildVisible
// Dependencies: [4655, 2048, 2070, 9701, 9685, 504, 2]
// Exports: default, isFavoritesGuildVisible

// Module 14872 (useIsFavoritesGuildVisible)
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import FavoritesHooks from "FavoritesHooks" /* 9685 */;
import FavoritesGuildIntroPopover from "FavoritesGuildIntroPopover" /* 9701 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;
import size from "module_2" /* 2 */;

function computeIsFavoritesGuildVisible(FavoriteStore, SelectedGuildStore, isExperimentEnabled) {
  let hasAccess;
  let isFreemium;
  let isIntroPopoverShown;
  let keepWhileViewing;
  ({ isFreemium, hasAccess, isIntroPopoverShown, keepWhileViewing } = isExperimentEnabled);
  isExperimentEnabled = isExperimentEnabled.isExperimentEnabled;
  if (isExperimentEnabled) {
    let tmp2 = !keepWhileViewing;
    if (keepWhileViewing) {
      const obj = FavoritesUtils;
      tmp2 = !obj.isFavoritesGuildId(SelectedGuildStore.getGuildId());
    }
    let tmp6 = !tmp2;
    if (tmp2) {
      let tmp8 = !hasAccess;
      if (hasAccess) {
        tmp8 = false === FavoriteStore.favoriteGuildVisibleSetting;
      }
      let tmp9 = !tmp8;
      if (tmp9) {
        let favoriteGuildEnabled = FavoriteStore.favoriteGuildEnabled;
        if (!favoriteGuildEnabled) {
          if (isFreemium) {
            if (!isIntroPopoverShown) {
              const obj2 = FavoritesGuildIntroPopover;
              isIntroPopoverShown = obj2.hasOfferedFavoritesGuildOnboarding();
            }
            isFreemium = isIntroPopoverShown;
          }
          favoriteGuildEnabled = isFreemium;
        }
        tmp9 = favoriteGuildEnabled;
      }
      tmp6 = tmp9;
    }
    isExperimentEnabled = tmp6;
  }
  return isExperimentEnabled;
}
const result = size.fileFinishedImporting("modules/favorites/hooks/useIsFavoritesGuildVisible.tsx");

export default function useIsFavoritesGuildVisible() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let isExperimentEnabled;
  let obj = flag(isExperimentEnabled[4]);
  const favoritesAccess = obj.useFavoritesAccess();
  isExperimentEnabled = favoritesAccess.isExperimentEnabled;
  const isFreemium = favoritesAccess.isFreemium;
  const hasAccess = favoritesAccess.hasAccess;
  const obj2 = flag(isExperimentEnabled[3]);
  const isFavoritesIntroPopoverShown = obj2.useIsFavoritesIntroPopoverShown();
  const items = [hasAccess, isFreemium];
  const items1 = [isExperimentEnabled, isFreemium, hasAccess, isFavoritesIntroPopoverShown, flag];
  const obj3 = flag(isExperimentEnabled[5]);
  return obj3.useStateFromStores(items, () => {
    const obj = { isExperimentEnabled, isFreemium, hasAccess, isIntroPopoverShown: isFavoritesIntroPopoverShown, keepWhileViewing: flag };
    return computeIsFavoritesGuildVisible(FavoriteStore, SelectedGuildStore, obj);
  }, items1);
};
export const isFavoritesGuildVisible = function isFavoritesGuildVisible() {
  let obj3;
  const obj = FavoritesHooks;
  const favoritesAccess = obj.getFavoritesAccess();
  const obj2 = { isExperimentEnabled: favoritesAccess.isExperimentEnabled, isFreemium: favoritesAccess.isFreemium, hasAccess: favoritesAccess.hasAccess, isIntroPopoverShown: obj3.isFavoritesIntroPopoverShown(), keepWhileViewing: true };
  obj3 = FavoritesGuildIntroPopover;
  return computeIsFavoritesGuildVisible(FavoriteStore, SelectedGuildStore, obj2);
};
