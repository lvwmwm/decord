// Module ID: 14671
// Function ID: 14672
// Name: computeIsFavoritesGuildVisible
// Dependencies: [4197, 1394, 1913, 9988, 9979, 589, 2]
// Exports: default, isFavoritesGuildVisible

// Module 14671 (computeIsFavoritesGuildVisible)
import handleConnectionOpen from "handleConnectionOpen";
import initializeFromUserSettings from "initializeFromUserSettings";

const require = arg1;
function computeIsFavoritesGuildVisible(initializeFromUserSettings, handleConnectionOpen, isExperimentEnabled) {
  let hasAccess;
  let isFreemium;
  let isIntroPopoverShown;
  let keepWhileViewing;
  ({ isFreemium, hasAccess, isIntroPopoverShown, keepWhileViewing } = isExperimentEnabled);
  isExperimentEnabled = isExperimentEnabled.isExperimentEnabled;
  if (isExperimentEnabled) {
    let tmp2 = !keepWhileViewing;
    if (keepWhileViewing) {
      tmp2 = !require(1913) /* getFavoritesAwareGuildName */.isFavoritesGuildId(handleConnectionOpen.getGuildId());
      const obj = require(1913) /* getFavoritesAwareGuildName */;
    }
    let tmp6 = !tmp2;
    if (tmp2) {
      let tmp8 = !hasAccess;
      if (hasAccess) {
        tmp8 = false === initializeFromUserSettings.favoriteGuildVisibleSetting;
      }
      let tmp9 = !tmp8;
      if (!tmp8) {
        let favoriteGuildEnabled = initializeFromUserSettings.favoriteGuildEnabled;
        if (!favoriteGuildEnabled) {
          if (isFreemium) {
            if (!isIntroPopoverShown) {
              isIntroPopoverShown = require(9988) /* hasOfferedFavoritesGuildOnboarding */.hasOfferedFavoritesGuildOnboarding();
              const obj2 = require(9988) /* hasOfferedFavoritesGuildOnboarding */;
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
const result = require("getFavoritesAwareGuildName").fileFinishedImporting("modules/favorites/hooks/useIsFavoritesGuildVisible.tsx");

export default function useIsFavoritesGuildVisible() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let isExperimentEnabled;
  let isFreemium;
  let hasAccess;
  let isFavoritesIntroPopoverShown;
  const favoritesAccess = flag(isExperimentEnabled[4]).useFavoritesAccess();
  isExperimentEnabled = favoritesAccess.isExperimentEnabled;
  isFreemium = favoritesAccess.isFreemium;
  hasAccess = favoritesAccess.hasAccess;
  const obj = flag(isExperimentEnabled[4]);
  isFavoritesIntroPopoverShown = flag(isExperimentEnabled[3]).useIsFavoritesIntroPopoverShown();
  const obj2 = flag(isExperimentEnabled[3]);
  const items = [hasAccess, isFreemium];
  const items1 = [isExperimentEnabled, isFreemium, hasAccess, isFavoritesIntroPopoverShown, flag];
  return flag(isExperimentEnabled[5]).useStateFromStores(items, () => isFavoritesIntroPopoverShown(hasAccess, isFreemium, { isExperimentEnabled, isFreemium, hasAccess, isIntroPopoverShown: isFavoritesIntroPopoverShown, keepWhileViewing: flag }), items1);
};
export const isFavoritesGuildVisible = function isFavoritesGuildVisible() {
  let obj = require(9979) /* useFavoritesAccess */;
  const favoritesAccess = obj.getFavoritesAccess();
  obj = { isExperimentEnabled: favoritesAccess.isExperimentEnabled, isFreemium: favoritesAccess.isFreemium, hasAccess: favoritesAccess.hasAccess, isIntroPopoverShown: null, keepWhileViewing: true };
  obj[3] = require(9988) /* hasOfferedFavoritesGuildOnboarding */.isFavoritesIntroPopoverShown();
  return computeIsFavoritesGuildVisible(initializeFromUserSettings, handleConnectionOpen, obj);
};
