// Module ID: 12009
// Function ID: 92826
// Name: useIsMobileWishlistSuggestionsEnabled
// Dependencies: []
// Exports: getIsMobileWishlistSuggestionsEnabled, useIsMobileWishlistSuggestionsEnabled

// Module 12009 (useIsMobileWishlistSuggestionsEnabled)
const _module = require(dependencyMap[0]);
const obj = { y: 251, DateToSystemTimezoneSetter: 147, defaultConfig: { isEnabled: false }, variations: { [0]: { isEnabled: false }, [1]: { isEnabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/wishlists/experiments/MobileWishlistSuggestionsExperiment.tsx");

export const useIsMobileWishlistSuggestionsEnabled = function useIsMobileWishlistSuggestionsEnabled(WishlistEmptyState) {
  return closure_0.useConfig({ location: WishlistEmptyState }).isEnabled;
};
export const getIsMobileWishlistSuggestionsEnabled = function getIsMobileWishlistSuggestionsEnabled(location) {
  return closure_0.getConfig({ location }).isEnabled;
};
