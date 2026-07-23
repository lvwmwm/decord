// Module ID: 12123
// Function ID: 94977
// Name: useIsMobileWishlistSuggestionsEnabled
// Dependencies: [1428, 2]
// Exports: getIsMobileWishlistSuggestionsEnabled, useIsMobileWishlistSuggestionsEnabled

// Module 12123 (useIsMobileWishlistSuggestionsEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-07-smag-mobile-wishlist-suggestions", kind: "user", defaultConfig: { isEnabled: false }, variations: { [0]: { isEnabled: false }, [1]: { isEnabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/wishlists/experiments/MobileWishlistSuggestionsExperiment.tsx");

export const useIsMobileWishlistSuggestionsEnabled = function useIsMobileWishlistSuggestionsEnabled(WishlistEmptyState) {
  return closure_0.useConfig({ location: WishlistEmptyState }).isEnabled;
};
export const getIsMobileWishlistSuggestionsEnabled = function getIsMobileWishlistSuggestionsEnabled(location) {
  return closure_0.getConfig({ location }).isEnabled;
};
