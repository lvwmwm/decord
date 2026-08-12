// Module ID: 9982
// Function ID: 9983
// Name: GIF_PROVIDER
// Dependencies: [1236, 2]
// Exports: getSearchPlaceholder

// Module 9982 (GIF_PROVIDER)
const result = require("set").fileFinishedImporting("modules/gif_picker/GifProvider.tsx");

export const GIF_PROVIDER = "klipy";
export const GIF_PROVIDER_EMBED_NAME = "Klipy";
export const getSearchPlaceholder = function getSearchPlaceholder() {
  const intl = require(1236) /* getSystemLocale */.intl;
  return intl.string(require(1236) /* getSystemLocale */.t.T1Frnm);
};
