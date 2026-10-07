// Module ID: 10091
// Function ID: 10092
// Name: GifProvider
// Dependencies: [1126, 2]
// Exports: getSearchPlaceholder

// Module 10091 (GifProvider)
import intl2 from "intl" /* 1126 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gif_picker/GifProvider.tsx");

export const GIF_PROVIDER = "klipy";
export const GIF_PROVIDER_EMBED_NAME = "Klipy";
export const getSearchPlaceholder = function getSearchPlaceholder() {
  const intl = intl2.intl;
  return intl.string(intl2.t.T1Frnm);
};
