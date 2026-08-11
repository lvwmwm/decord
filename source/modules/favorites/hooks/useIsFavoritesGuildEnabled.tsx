// Module ID: 9723
// Function ID: 9724
// Name: computeIsFavoritesGuildEnabled
// Dependencies: [1394, 9716, 589, 2]
// Exports: computeIsFavoritesGuildEnabled, getIsFavoritesGuildEnabled, useIsFavoritesGuildEnabled

// Module 9723 (computeIsFavoritesGuildEnabled)
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
  isFreemium = isFreemium(9716).useFavoritesAccess("useIsFavoritesGuildEnabled").isFreemium;
  const obj = isFreemium(9716);
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
