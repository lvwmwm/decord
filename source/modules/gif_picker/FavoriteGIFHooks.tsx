// Module ID: 9583
// Function ID: 74670
// Name: useFavoriteGIFs
// Dependencies: [31, 9584, 22, 2]
// Exports: useIsFavoriteGIF, useShouldShowTooltipOnFavorite, useSortedFavoriteGIFs

// Module 9583 (useFavoriteGIFs)
import result from "result";

const require = arg1;
function useFavoriteGIFs() {
  let gifs;
  const favoriteGifs = require(9584) /* useFrecencySettings */.useFrecencySettings().favoriteGifs;
  if (null != favoriteGifs) {
    gifs = favoriteGifs.gifs;
  }
  if (null == gifs) {
    gifs = closure_4;
  }
  return gifs;
}
let closure_4 = {};
const result = require("apply").fileFinishedImporting("modules/gif_picker/FavoriteGIFHooks.tsx");

export { useFavoriteGIFs };
export const useSortedFavoriteGIFs = function useSortedFavoriteGIFs(transformFavoriteGifUrl) {
  let closure_0 = transformFavoriteGifUrl;
  const tmp = useFavoriteGIFs();
  const importDefault = tmp;
  const items = [tmp, transformFavoriteGifUrl];
  return React.useMemo(() => {
    const mapped = tmp(outer1_2[2])(tmp).map((src) => {
      const obj = {};
      const merged = Object.assign(src);
      obj["url"] = arg1;
      src = undefined;
      if (null != outer1_0) {
        src = outer1_0(src.src, arg1);
      }
      if (null == src) {
        src = src.src;
      }
      obj["src"] = src;
      return obj;
    });
    const arr = tmp(outer1_2[2])(tmp);
    const sortByResult = mapped.sortBy("order");
    return mapped.sortBy("order").reverse().value();
  }, items);
};
export const useShouldShowTooltipOnFavorite = function useShouldShowTooltipOnFavorite() {
  let hideTooltip;
  const favoriteGifs = require(9584) /* useFrecencySettings */.useFrecencySettings().favoriteGifs;
  if (null != favoriteGifs) {
    hideTooltip = favoriteGifs.hideTooltip;
  }
  return null != hideTooltip && hideTooltip;
};
export const useIsFavoriteGIF = function useIsFavoriteGIF(arg0) {
  return null != useFavoriteGIFs()[arg0];
};
