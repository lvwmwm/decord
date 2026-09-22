// Module ID: 13226
// Function ID: 13227
// Name: MobileWishlistSuggestionsExperiment
// Dependencies: [1433, 2]
// Exports: getIsMobileWishlistSuggestionsEnabled, useIsMobileWishlistSuggestionsEnabled

// Module 13226 (MobileWishlistSuggestionsExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-07-smag-mobile-wishlist-suggestions", kind: "user", defaultConfig: { isEnabled: false }, variations: { 0: { isEnabled: false }, 1: { isEnabled: true } } });
const result = size.fileFinishedImporting("modules/wishlists/experiments/MobileWishlistSuggestionsExperiment.tsx");

export const useIsMobileWishlistSuggestionsEnabled = function useIsMobileWishlistSuggestionsEnabled(WishlistEmptyState) {
  return closure_0.useConfig({ location: WishlistEmptyState }).isEnabled;
};
export const getIsMobileWishlistSuggestionsEnabled = function getIsMobileWishlistSuggestionsEnabled(location) {
  return closure_0.getConfig({ location }).isEnabled;
};
