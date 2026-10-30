// Module ID: 10225
// Function ID: 10226
// Name: GifProvider
// Dependencies: [1114, 2]
// Exports: getSearchPlaceholder

// Module 10225 (GifProvider)
import intl2 from "intl" /* 1114 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gif_picker/GifProvider.tsx");

export const GIF_PROVIDER = "klipy";
export const GIF_PROVIDER_EMBED_NAME = "Klipy";
export function getSearchPlaceholder() {
  const intl = intl2.intl;
  return intl.string(intl2.t.T1Frnm);
}
