// Module ID: 12006
// Function ID: 92809
// Name: useIsNitroWishlistingEnabled
// Dependencies: []
// Exports: getAreNitroWishlistRoadblocksEnabled, getIsNitroWishlistingEnabled, useAreNitroWishlistRoadblocksEnabled, useIsNitroWishlistingEnabled

// Module 12006 (useIsNitroWishlistingEnabled)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: {}, variations: { [0]: {}, [1]: { createStageEndSystemMessage: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021043611947808288, request_data: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000053357352779429986 }, [2]: { createStageEndSystemMessage: null, request_data: null } } });
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
