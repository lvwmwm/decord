// Module ID: 12013
// Function ID: 92832
// Name: useIsNitroWishlistingEnabled
// Dependencies: []
// Exports: getAreNitroWishlistRoadblocksEnabled, getIsNitroWishlistingEnabled, useAreNitroWishlistRoadblocksEnabled, useIsNitroWishlistingEnabled

// Module 12013 (useIsNitroWishlistingEnabled)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "c013c533d835389917bf422e9978d1be", 0: "img_app_crash_light", defaultConfig: { "Null": null, "Null": null }, variations: { [0]: { "Null": null, "Null": null }, [1]: { "Null": true, "Null": true }, [2]: { "Null": null, "Null": null } } };
let closure_0 = _module.createApexExperiment(obj);
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
