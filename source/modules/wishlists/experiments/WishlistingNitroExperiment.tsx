// Module ID: 12017
// Function ID: 92870
// Name: useIsNitroWishlistingEnabled
// Dependencies: []
// Exports: getAreNitroWishlistRoadblocksEnabled, getIsNitroWishlistingEnabled, useAreNitroWishlistRoadblocksEnabled, useIsNitroWishlistingEnabled

// Module 12017 (useIsNitroWishlistingEnabled)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { -738787996: true, -1767340650: true }, variations: { [0]: { -738787996: true, -1767340650: true }, [1]: { -738787996: "<string:1040334421>", -1767340650: "<string:1040334338>" }, [2]: { -738787996: null, -1767340650: null } } });
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
