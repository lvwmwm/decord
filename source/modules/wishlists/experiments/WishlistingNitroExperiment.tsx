// Module ID: 12158
// Function ID: 95261
// Name: useIsNitroWishlistingEnabled
// Dependencies: [1428, 2]
// Exports: getAreNitroWishlistRoadblocksEnabled, getIsNitroWishlistingEnabled, useAreNitroWishlistRoadblocksEnabled, useIsNitroWishlistingEnabled

// Module 12158 (useIsNitroWishlistingEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-03-wishlisting-nitro", kind: "user", defaultConfig: { isEnabled: false, isRoadblocksEnabled: false }, variations: { [0]: { isEnabled: false, isRoadblocksEnabled: false }, [1]: { isEnabled: true, isRoadblocksEnabled: false }, [2]: { isEnabled: true, isRoadblocksEnabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/wishlists/experiments/WishlistingNitroExperiment.tsx");

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
