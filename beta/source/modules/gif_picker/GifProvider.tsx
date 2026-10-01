// Module ID: 9828
// Function ID: 9829
// Name: GifProvider
// Dependencies: [1115, 2]
// Exports: getSearchPlaceholder

// Module 9828 (GifProvider)
import intl2 from "intl" /* 1115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gif_picker/GifProvider.tsx");

export const GIF_PROVIDER = "klipy";
export const GIF_PROVIDER_EMBED_NAME = "Klipy";
export const getSearchPlaceholder = function getSearchPlaceholder() {
  const intl = intl2.intl;
  return intl.string(intl2.t.T1Frnm);
};
