// Module ID: 9830
// Function ID: 9831
// Name: gif_picker/GIFPickerUtils
// Dependencies: [19, 1074, 1366, 9399, 9831, 1115, 2]
// Exports: useFavoriteGIFsMobile

// Module 9830 (gif_picker/GIFPickerUtils)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import URLUtilsDefault from "URLUtils" /* 1366 */;
import AttachmentUrlUtilsAll from "AttachmentUrlUtils" /* 9399 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function transformFavoriteGifUrl(url, arg1) {
  let combined = url;
  const obj = URLUtilsDefault;
  const str = obj.toURLSafe(url);
  if (null != str) {
    const obj6 = AttachmentUrlUtilsAll;
    const tmp14 = importAll;
    if (obj6.isExternalProxiedAttachmentUrl(str)) {
      const str2 = str.pathname;
      const formatted = str2.toLowerCase();
      const str4 = str.pathname;
      formatted.endsWith(".webp");
      const formatted1 = str4.toLowerCase();
      let endsWithResult1 = formatted1.endsWith(".avif");
      const str6 = str.pathname;
      const formatted2 = str6.toLowerCase();
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
      tmp14(9399);
    }
  }
  if (re6.test(arg1)) {
    const match = re8.exec(arg1);
    let substr;
    if (match != null) {
      const first = match[0];
      if (first != null) {
        substr = first.slice(1);
      }
    }
    const _HermesInternal2 = HermesInternal;
    return "https://media.giphy.com/media/" + substr + "/giphy.gif";
  } else {
    if (re7.test(arg1)) {
      const _HermesInternal = HermesInternal;
      combined = "" + arg1 + ".gif";
    }
    return combined;
  }
}
const GIFPickerResultTypes = Constants.GIFPickerResultTypes;
const re6 = /(https?:\/\/)(?!media(?:\d+)?\.)(?:[^.]+\.)*giphy\.com/;
const re7 = /(tenor\.com)/;
const re8 = /-(?:.(?!-))+$/;
let result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerUtils.tsx");

export const GIF_HEADER_HEIGHT = 56;
export const useFavoriteGIFsMobile = function useFavoriteGIFsMobile() {
  let sortedFavoriteGIFs;
  let obj = sortedFavoriteGIFs(9831);
  sortedFavoriteGIFs = obj.useSortedFavoriteGIFs(transformFavoriteGifUrl);
  const items = [sortedFavoriteGIFs];
  const obj2 = {
    favorites: sortedFavoriteGIFs,
    favoritesCategory: react.useMemo(() => {
      let intl;
      let tmp2;
      if (sortedFavoriteGIFs.length > 0) {
        const obj = { type: GIFPickerResultTypes.FAVORITES, name: intl.string(intl2.t.k8fFjp), src: sortedFavoriteGIFs[0].src, format: sortedFavoriteGIFs[0].format };
        intl = intl2.intl;
        tmp2 = obj;
      }
      return tmp2;
    }, items)
  };
  return obj2;
};
export const GIF_PICKER_ITEM_ESIMTATED_HEIGHT = 180;
export const GIF_PICKER_GUTTER_SPACING = 8;
export const DEFAULT_CATEGORY_ROWS = 20;
