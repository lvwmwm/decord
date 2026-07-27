// Module ID: 9536
// Function ID: 74437
// Name: items
// Dependencies: [2]
// Exports: getProviderForRequest, isValidGifProvider

// Module 9536 (items)
const items = ["tenor", "giphy", "klipy"];
const result = require("set").fileFinishedImporting("types/GifProvider.tsx");

export const DEFAULT_GIF_PROVIDER_CONFIG = { enabled: false, sendProviderToAPI: false, fallbackProvider: "tenor" };
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
