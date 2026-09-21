// Module ID: 10659
// Function ID: 10660
// Name: GifProvider
// Dependencies: [1119, 2]
// Exports: getSearchPlaceholder

// Module 10659 (GifProvider)
import util from "util" /* 1119 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gif_picker/GifProvider.tsx");

export const GIF_PROVIDER = "klipy";
export const GIF_PROVIDER_EMBED_NAME = "Klipy";
export const getSearchPlaceholder = function getSearchPlaceholder() {
  const intl = util.intl;
  return intl.string(util.t.T1Frnm);
};
