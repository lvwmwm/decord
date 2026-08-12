// Module ID: 9762
// Function ID: 9763
// Name: computeIsFavoritesGuildEnabled
// Dependencies: [1394, 9755, 589, 2]
// Exports: computeIsFavoritesGuildEnabled, getIsFavoritesGuildEnabled, useIsFavoritesGuildEnabled

// Module 9762 (computeIsFavoritesGuildEnabled)
import initializeFromUserSettings from "initializeFromUserSettings";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/favorites/hooks/useIsFavoritesGuildEnabled.tsx");

export const computeIsFavoritesGuildEnabled = function computeIsFavoritesGuildEnabled(isFreemium, favoriteGuildVisibleSetting) {
  if (isFreemium) {
    let favoriteGuildEnabled = false !== favoriteGuildVisibleSetting.favoriteGuildVisibleSetting;
  } else {
    favoriteGuildEnabled = favoriteGuildVisibleSetting.favoriteGuildEnabled;
  }
  return favoriteGuildEnabled;
};
export const getIsFavoritesGuildEnabled = function getIsFavoritesGuildEnabled() {
  if (obj.getFavoritesAccess().isFreemium) {
    let favoriteGuildEnabled = false !== tmp.favoriteGuildVisibleSetting;
  } else {
    favoriteGuildEnabled = tmp.favoriteGuildEnabled;
  }
  return favoriteGuildEnabled;
};
export const useIsFavoritesGuildEnabled = function useIsFavoritesGuildEnabled() {
  isFreemium = isFreemium(9755).useFavoritesAccess("useIsFavoritesGuildEnabled").isFreemium;
  const obj = isFreemium(9755);
  const items = [initializeFromUserSettings];
  return isFreemium(589).useStateFromStores(items, () => {
    if (isFreemium) {
      let favoriteGuildEnabled = false !== tmp.favoriteGuildVisibleSetting;
    } else {
      favoriteGuildEnabled = tmp.favoriteGuildEnabled;
    }
    return favoriteGuildEnabled;
  });
};
