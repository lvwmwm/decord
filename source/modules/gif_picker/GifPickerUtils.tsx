// Module ID: 10372
// Function ID: 10373
// Name: filterFavoriteGIFsByQuery
// Dependencies: [2]
// Exports: filterFavoriteGIFsByQuery

// Module 10372 (filterFavoriteGIFsByQuery)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/gif_picker/GifPickerUtils.tsx");

export const filterFavoriteGIFsByQuery = function filterFavoriteGIFsByQuery(favorites, first2) {
  if ("" === first2) {
    return favorites;
  } else {
    closure_0 = first2.toLowerCase().replace(/[-_ ]/g, "");
    return favorites.filter((url) => {
      const replaced = url.url.toLowerCase().replace(/[-_]/g, "");
      return replaced.includes(closure_0);
    });
  }
};
