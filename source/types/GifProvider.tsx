// Module ID: 9571
// Function ID: 74573
// Name: items
// Dependencies: [284214097]
// Exports: getProviderForRequest, isValidGifProvider

// Module 9571 (items)
const items = [];
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("types/GifProvider.tsx");

export const DEFAULT_GIF_PROVIDER_CONFIG = {};
export const VALID_GIF_PROVIDERS = items;
export const isValidGifProvider = function isValidGifProvider(arg0) {
  return items.includes(arg0);
};
export const getProviderForRequest = function getProviderForRequest(enabled) {
  if (enabled.enabled) {
    if (enabled.sendProviderToAPI) {
      return null != enabled.userProvider ? enabled.userProvider : enabled.fallbackProvider;
    }
  }
};
