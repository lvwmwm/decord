// Module ID: 12013
// Function ID: 92844
// Name: useIsNitroWishlistingEnabled
// Dependencies: []
// Exports: getAreNitroWishlistRoadblocksEnabled, getIsNitroWishlistingEnabled, useAreNitroWishlistRoadblocksEnabled, useIsNitroWishlistingEnabled

// Module 12013 (useIsNitroWishlistingEnabled)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { "Bool(false)": null, "Bool(false)": null }, variations: { [0]: { "Bool(false)": null, "Bool(false)": null }, [1]: { "Bool(false)": null, "Bool(false)": null }, [2]: { "Bool(false)": null, "Bool(false)": null } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/wishlists/experiments/WishlistingNitroExperiment.tsx");

export const useIsNitroWishlistingEnabled = function useIsNitroWishlistingEnabled(add_to_wishlist_grid_suggested_nitro) {
  return store.useConfig({ location: add_to_wishlist_grid_suggested_nitro }).isEnabled;
};
export const getIsNitroWishlistingEnabled = function getIsNitroWishlistingEnabled(location) {
  return store.getConfig({ location }).isEnabled;
};
export const useAreNitroWishlistRoadblocksEnabled = function useAreNitroWishlistRoadblocksEnabled(location) {
  return store.useConfig({ location }).isRoadblocksEnabled;
};
export const getAreNitroWishlistRoadblocksEnabled = function getAreNitroWishlistRoadblocksEnabled(location) {
  return store.getConfig({ location }).isRoadblocksEnabled;
};
