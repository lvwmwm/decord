// Module ID: 12005
// Function ID: 92788
// Name: useIsMobileWishlistSuggestionsEnabled
// Dependencies: []
// Exports: getIsMobileWishlistSuggestionsEnabled, useIsMobileWishlistSuggestionsEnabled

// Module 12005 (useIsMobileWishlistSuggestionsEnabled)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "%Object.getPrototypeOf%", 0: "handleJoinThreadVoice", defaultConfig: { isEnabled: false }, variations: { [0]: { isEnabled: false }, [1]: { isEnabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/wishlists/experiments/MobileWishlistSuggestionsExperiment.tsx");

export const useIsMobileWishlistSuggestionsEnabled = function useIsMobileWishlistSuggestionsEnabled(WishlistEmptyState) {
  return closure_0.useConfig({ location: WishlistEmptyState }).isEnabled;
};
export const getIsMobileWishlistSuggestionsEnabled = function getIsMobileWishlistSuggestionsEnabled(location) {
  return closure_0.getConfig({ location }).isEnabled;
};
