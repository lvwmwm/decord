// Module ID: 9831
// Function ID: 9832
// Name: FavoriteGIFHooks
// Dependencies: [19, 9832, 12, 2]
// Exports: useFavoriteGIFs, useIsFavoriteGIF, useShouldShowTooltipOnFavorite, useSortedFavoriteGIFs

// Module 9831 (FavoriteGIFHooks)
import _modDef12 from "module_12" /* 12 */;
import FrecencyUserSettingsHooks from "FrecencyUserSettingsHooks" /* 9832 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, src;

let closure_4 = {};
const result = size.fileFinishedImporting("modules/gif_picker/FavoriteGIFHooks.tsx");

export const useFavoriteGIFs = function useFavoriteGIFs(flag) {
  if (flag === undefined) {
    flag = true;
  }
  const obj = FrecencyUserSettingsHooks;
  const favoriteGifs = obj.useFrecencySettings(flag).favoriteGifs;
  let gifs;
  if (favoriteGifs != null) {
    gifs = favoriteGifs.gifs;
  }
  if (gifs == null) {
    gifs = closure_4;
  }
  return gifs;
};
export const useSortedFavoriteGIFs = function useSortedFavoriteGIFs(transformFavoriteGifUrl) {
  _require = transformFavoriteGifUrl;
  let obj = require("FrecencyUserSettingsHooks");
  const favoriteGifs = obj.useFrecencySettings(true).favoriteGifs;
  let gifs;
  if (favoriteGifs != null) {
    gifs = favoriteGifs.gifs;
  }
  if (gifs == null) {
    gifs = closure_4;
  }
  const items = [gifs, transformFavoriteGifUrl];
  return react.useMemo(() => {
    const arr = _modDef12(gifs);
    const mapped = arr.map((src, url) => {
      const obj = { url, src };
      const merged = Object.assign(src);
      src = undefined;
      if (transformFavoriteGifUrl != null) {
        src = tmp2(src.src, url);
      }
      if (src == null) {
        src = src.src;
      }
      return obj;
    });
    const sortByResult = mapped.sortBy("order");
    const iter = sortByResult.reverse();
    return iter.value();
  }, items);
};
export const useShouldShowTooltipOnFavorite = function useShouldShowTooltipOnFavorite() {
  const obj = FrecencyUserSettingsHooks;
  const favoriteGifs = obj.useFrecencySettings().favoriteGifs;
  let flag;
  if (favoriteGifs != null) {
    flag = favoriteGifs.hideTooltip;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const useIsFavoriteGIF = function useIsFavoriteGIF(arg0, flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (flag === undefined) {
    flag = true;
  }
  const obj = FrecencyUserSettingsHooks;
  const favoriteGifs = obj.useFrecencySettings(flag).favoriteGifs;
  let gifs;
  if (favoriteGifs != null) {
    gifs = favoriteGifs.gifs;
  }
  if (gifs == null) {
    gifs = closure_4;
  }
  return null != gifs[arg0];
};
