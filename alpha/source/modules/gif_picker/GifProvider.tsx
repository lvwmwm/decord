// Module ID: 10245
// Function ID: 10246
// Name: GifProvider
// Dependencies: [1113, 2]
// Exports: getSearchPlaceholder

// Module 10245 (GifProvider)
import intl2 from "intl" /* 1113 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gif_picker/GifProvider.tsx");

export const GIF_PROVIDER = "klipy";
export const GIF_PROVIDER_EMBED_NAME = "Klipy";
export function getSearchPlaceholder() {
  const intl = intl2.intl;
  return intl.string(intl2.t.T1Frnm);
}
