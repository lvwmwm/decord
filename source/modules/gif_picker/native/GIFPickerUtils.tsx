// Module ID: 9575
// Function ID: 74625
// Name: transformFavoriteGifUrl
// Dependencies: []
// Exports: useFavoriteGIFsMobile

// Module 9575 (transformFavoriteGifUrl)
function transformFavoriteGifUrl(closure_0) {
  let combined = closure_0;
  const str = importDefault(dependencyMap[2]).toURLSafe(closure_0);
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
      const obj2 = arg1(dependencyMap[3]);
    }
    const obj6 = arg1(dependencyMap[3]);
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
let closure_3 = importAll(dependencyMap[0]);
arg1(dependencyMap[1]).GIFPickerResultTypes;
let closure_5 = /(https?:\/\/)(?!media(?:\d+)?\.)(?:[^.]+\.)*giphy\.com/;
let closure_6 = /(tenor\.com)/;
let closure_7 = /-(?:.(?!-))+$/;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/gif_picker/native/GIFPickerUtils.tsx");

export const GIF_HEADER_HEIGHT = 56;
export const useFavoriteGIFsMobile = function useFavoriteGIFsMobile() {
  let obj = arg1(dependencyMap[4]);
  const sortedFavoriteGIFs = obj.useSortedFavoriteGIFs(transformFavoriteGifUrl);
  const arg1 = sortedFavoriteGIFs;
  const items = [sortedFavoriteGIFs];
  obj = {
    favorites: sortedFavoriteGIFs,
    favoritesCategory: React.useMemo(() => {
      let tmp;
      if (sortedFavoriteGIFs.length > 0) {
        const obj = { type: constants.FAVORITES };
        const intl = sortedFavoriteGIFs(closure_2[5]).intl;
        obj.name = intl.string(sortedFavoriteGIFs(closure_2[5]).t.k8fFjp);
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
