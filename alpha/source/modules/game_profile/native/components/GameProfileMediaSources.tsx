// Module ID: 9361
// Function ID: 9362
// Name: GameProfileMediaSources
// Dependencies: [1445, 6449, 2032, 2]
// Exports: buildMediaEntries, buildMediaViewerSources, getCarouselPreviewPixelSize

// Module 9361 (GameProfileMediaSources)
import ImageLoaderUtils from "ImageLoaderUtils" /* 1445 */;
import ImageProxyUtils from "ImageProxyUtils" /* 2032 */;
import StoreUtils from "StoreUtils" /* 6449 */;
import size_mod from "module_2" /* 2 */;

let map;

let c2 = 366;
let size = { width: 1920, height: 1080 };
size = size_mod;
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileMediaSources.tsx");

export const MEDIA_ITEM_MAX_WIDTH = 366;
export const MEDIA_ITEM_MAX_HEIGHT = 200;
export const MEDIA_ITEM_ASPECT_RATIO = 1.83;
export const MEDIA_VIEWER_ITEM_SIZE = size;
export function getCarouselPreviewPixelSize() {
  let devicePixelRatio = arg0;
  if (arg0 === undefined) {
    const obj = ImageLoaderUtils;
    devicePixelRatio = obj.getDevicePixelRatio();
  }
  const obj2 = ImageLoaderUtils;
  const bestMediaProxySize = obj2.getBestMediaProxySize(c2 * devicePixelRatio);
  size = { width: bestMediaProxySize, height: Math.round(bestMediaProxySize / 1.83) };
  return size;
}
export function buildMediaEntries(game) {
  let items;
  let styles;
  if (null == game) {
    items = [];
  } else {
    let trailers = game.trailers;
    if (trailers == null) {
      trailers = [];
    }
    items = [];
    let screenshotUrls = game.screenshotUrls;
    const arraySpreadResult = HermesBuiltin.arraySpread(items, trailers.map((application_id) => {
      let obj2;
      let obj3;
      const obj = { type: "trailer", originalUrl: obj2.getAssetURL(application_id.application_id, application_id.id, styles.width, "mp4"), previewUrl: obj3.getAssetURL(application_id.application_id, application_id.id, size, "webp") };
      obj2 = StoreUtils;
      obj3 = StoreUtils;
      return obj;
    }), 0);
    if (screenshotUrls == null) {
      screenshotUrls = [];
    }
    HermesBuiltin.arraySpread(items, screenshotUrls.map((originalUrl) => {
      let obj2;
      const obj = { type: "image", originalUrl, previewUrl: obj2.getSizedImageAssetURL(originalUrl, obj3) };
      obj2 = ImageProxyUtils;
      return obj;
    }), arraySpreadResult);
  }
  return items;
}
export function buildMediaViewerSources(memo1, memo, dimensions) {
  map = dimensions;
  if (dimensions === undefined) {
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map();
  }
  return memo1.map((uri, mediaIndex) => {
    let height;
    let originalUrl;
    let tmp4;
    let value;
    if ("image" === uri.type) {
      value = map.get(uri.originalUrl);
    }
    if (null == value) {
      height = memo.height;
      tmp4 = memo;
    } else {
      const _Math = Math;
      tmp4 = memo;
      height = Math.round(memo.width * value.height / value.width);
    }
    const obj = { uri: uri.originalUrl, videoURI: originalUrl, mediaIndex, thumbnail: { width: tmp4.width, height, uri: uri.previewUrl }, accessoryType: "embed", disableDownload: true };
    originalUrl = undefined;
    if ("trailer" === uri.type) {
      originalUrl = uri.originalUrl;
    }
    if (value == null) {
      value = size;
    }
    const merged = Object.assign(value);
    return obj;
  });
}
