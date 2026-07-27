// Module ID: 10158
// Function ID: 78593
// Name: computeIsFavoritesGuildEnabled
// Dependencies: [1351, 10152, 566, 2]
// Exports: getIsFavoritesGuildEnabled, useIsFavoritesGuildEnabled

// Module 10158 (computeIsFavoritesGuildEnabled)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function computeIsFavoritesGuildEnabled(isFreemium, _isNativeReflectConstruct) {
  if (isFreemium) {
    let favoriteGuildEnabled = !_isNativeReflectConstruct.favoriteGuildExplicitlyHidden;
  } else {
    favoriteGuildEnabled = _isNativeReflectConstruct.favoriteGuildEnabled;
  }
  return favoriteGuildEnabled;
}
const result = require("initialize").fileFinishedImporting("modules/favorites/hooks/useIsFavoritesGuildEnabled.tsx");

export { computeIsFavoritesGuildEnabled };
export const getIsFavoritesGuildEnabled = function getIsFavoritesGuildEnabled() {
  return computeIsFavoritesGuildEnabled(require(10152) /* computeFavoritesAccess */.getFavoritesAccess().isFreemium, _isNativeReflectConstruct);
};
export const useIsFavoritesGuildEnabled = function useIsFavoritesGuildEnabled() {
  isFreemium = isFreemium(10152).useFavoritesAccess("useIsFavoritesGuildEnabled").isFreemium;
  const obj = isFreemium(10152);
  const items = [_isNativeReflectConstruct];
  return isFreemium(566).useStateFromStores(items, () => outer1_3(isFreemium, outer1_2));
};
