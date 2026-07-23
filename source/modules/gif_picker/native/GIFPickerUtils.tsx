// Module ID: 9582
// Function ID: 74666
// Name: transformFavoriteGifUrl
// Dependencies: [31, 653, 1443, 9581, 9583, 1212, 2]
// Exports: useFavoriteGIFsMobile

// Module 9582 (transformFavoriteGifUrl)
import result from "result";

const require = arg1;
function transformFavoriteGifUrl(outer1_0) {
  let combined = outer1_0;
  const str = importDefault(1443).toURLSafe(outer1_0);
  if (null != str) {
    if (obj6.isExternalProxiedAttachmentUrl(str)) {
      const formatted = str.pathname.toLowerCase();
      const formatted1 = str.pathname.toLowerCase();
      let endsWithResult1 = formatted1.endsWith(".avif");
      const formatted2 = str.pathname.toLowerCase();
      const endsWithResult2 = formatted2.endsWith(".gif");
      if (!endsWithResult1) {
        endsWithResult1 = endsWithResult2;
      }
      if (endsWithResult1) {
        const searchParams = str.searchParams;
        const result = searchParams.set("format", "webp");
      }
      const searchParams2 = str.searchParams;
      const result1 = searchParams2.set("animated", "true");
      return str.toString();
    } else {
      const obj2 = require(9581) /* isAttachmentUrl */;
    }
    obj6 = require(9581) /* isAttachmentUrl */;
  }
  if (regex.test(arg1)) {
    const match = regex3.exec(arg1);
    let substr;
    if (null != match) {
      const first = match[0];
      if (null != first) {
        substr = first.slice(1);
      }
    }
    const _HermesInternal2 = HermesInternal;
    combined = "https://media.giphy.com/media/" + substr + "/giphy.gif";
  } else if (regex2.test(arg1)) {
    const _HermesInternal = HermesInternal;
    combined = "" + arg1 + ".gif";
  }
  return combined;
}
require("ME").GIFPickerResultTypes;
const re5 = /(https?:\/\/)(?!media(?:\d+)?\.)(?:[^.]+\.)*giphy\.com/;
const re6 = /(tenor\.com)/;
const re7 = /-(?:.(?!-))+$/;
let result = require("isOriginalContentTypeDifferent").fileFinishedImporting("modules/gif_picker/native/GIFPickerUtils.tsx");

export const GIF_HEADER_HEIGHT = 56;
export const useFavoriteGIFsMobile = function useFavoriteGIFsMobile() {
  let obj = sortedFavoriteGIFs(9583);
  sortedFavoriteGIFs = obj.useSortedFavoriteGIFs(transformFavoriteGifUrl);
  const items = [sortedFavoriteGIFs];
  obj = {
    favorites: sortedFavoriteGIFs,
    favoritesCategory: React.useMemo(() => {
      let tmp;
      if (sortedFavoriteGIFs.length > 0) {
        const obj = { type: outer1_4.FAVORITES };
        const intl = sortedFavoriteGIFs(outer1_2[5]).intl;
        obj.name = intl.string(sortedFavoriteGIFs(outer1_2[5]).t.k8fFjp);
        obj.src = sortedFavoriteGIFs[0].src;
        obj.format = sortedFavoriteGIFs[0].format;
        tmp = obj;
      }
      return tmp;
    }, items)
  };
  return obj;
};
export const GIF_PICKER_ITEM_ESIMTATED_HEIGHT = 180;
export const GIF_PICKER_GUTTER_SPACING = 8;
export const DEFAULT_CATEGORY_ROWS = 20;
