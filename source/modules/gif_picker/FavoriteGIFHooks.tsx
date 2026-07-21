// Module ID: 9575
// Function ID: 74616
// Name: useFavoriteGIFs
// Dependencies: []
// Exports: useIsFavoriteGIF, useShouldShowTooltipOnFavorite, useSortedFavoriteGIFs

// Module 9575 (useFavoriteGIFs)
function useFavoriteGIFs() {
  let gifs;
  const favoriteGifs = arg1(dependencyMap[1]).useFrecencySettings().favoriteGifs;
  if (null != favoriteGifs) {
    gifs = favoriteGifs.gifs;
  }
  if (null == gifs) {
    gifs = closure_4;
  }
  return gifs;
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = {};
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/gif_picker/FavoriteGIFHooks.tsx");

export { useFavoriteGIFs };
export const useSortedFavoriteGIFs = function useSortedFavoriteGIFs(transformFavoriteGifUrl) {
  const arg1 = transformFavoriteGifUrl;
  const tmp = useFavoriteGIFs();
  const importDefault = tmp;
  const items = [tmp, transformFavoriteGifUrl];
  return React.useMemo(() => {
    const mapped = tmp(closure_2[2])(tmp).map((src) => {
      const obj = {};
      const merged = Object.assign(src);
      obj["url"] = arg1;
      src = undefined;
      if (null != callback) {
        src = callback(src.src, arg1);
      }
      if (null == src) {
        src = src.src;
      }
      obj["src"] = src;
      return obj;
    });
    const arr = tmp(closure_2[2])(tmp);
    const sortByResult = mapped.sortBy("order");
    return mapped.sortBy("order").reverse().value();
  }, items);
};
export const useShouldShowTooltipOnFavorite = function useShouldShowTooltipOnFavorite() {
  let hideTooltip;
  const favoriteGifs = arg1(dependencyMap[1]).useFrecencySettings().favoriteGifs;
  if (null != favoriteGifs) {
    hideTooltip = favoriteGifs.hideTooltip;
  }
  return null != hideTooltip && hideTooltip;
};
export const useIsFavoriteGIF = function useIsFavoriteGIF(arg0) {
  return null != useFavoriteGIFs()[arg0];
};
