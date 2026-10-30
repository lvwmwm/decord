// Module ID: 10228
// Function ID: 10229
// Name: FavoriteGIFHooks
// Dependencies: [19, 10229, 12, 2]
// Exports: useFavoriteGIFs, useIsFavoriteGIF, useShouldShowTooltipOnFavorite, useSortedFavoriteGIFs

// Module 10228 (FavoriteGIFHooks)
import _modDef12 from "module_12" /* 12 */;
import FrecencyUserSettingsHooks from "FrecencyUserSettingsHooks" /* 10229 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, src;

let closure_4 = {};
const result = size.fileFinishedImporting("modules/gif_picker/FavoriteGIFHooks.tsx");

export function useFavoriteGIFs(flag) {
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
}
export function useSortedFavoriteGIFs(transformFavoriteGifUrl) {
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
}
export function useShouldShowTooltipOnFavorite() {
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
}
export function useIsFavoriteGIF(arg0, flag) {
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
}
