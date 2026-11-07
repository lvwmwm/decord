// Module ID: 10369
// Function ID: 10370
// Name: GifPickerUtils
// Dependencies: [2]
// Exports: filterFavoriteGIFsByQuery

// Module 10369 (GifPickerUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gif_picker/GifPickerUtils.tsx");

export function filterFavoriteGIFsByQuery(favorites, first2) {
  if ("" === first2) {
    return favorites;
  } else {
    let str = first2.toLowerCase();
    let closure_0 = str.replace(/[-_ ]/g, "");
    return favorites.filter((url) => {
      const str = url.url;
      const str2 = str.toLowerCase();
      const replaced = str2.replace(/[-_]/g, "");
      return replaced.includes(closure_0);
    });
  }
}
