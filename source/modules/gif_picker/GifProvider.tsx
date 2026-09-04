// Module ID: 10296
// Function ID: 10297
// Name: GIF_PROVIDER
// Dependencies: [1233, 2]
// Exports: getSearchPlaceholder

// Module 10296 (GIF_PROVIDER)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;

const result = set.fileFinishedImporting("modules/gif_picker/GifProvider.tsx");

export const GIF_PROVIDER = "klipy";
export const GIF_PROVIDER_EMBED_NAME = "Klipy";
export const getSearchPlaceholder = function getSearchPlaceholder() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.T1Frnm);
};
