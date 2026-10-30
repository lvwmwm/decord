// Module ID: 14620
// Function ID: 14621
// Name: AppStoreOverlayMediaSize
// Dependencies: [32, 19, 17, 2032, 1410, 2]
// Exports: getAppStoreOverlayCarouselImageUrl, getMediaSizeFromLoadEvent, getMediaTileSize, useAppStoreOverlayMediaSizes

// Module 14620 (AppStoreOverlayMediaSize)
import react_native from "react-native" /* 17 */;
import AvatarUtils from "AvatarUtils" /* 1410 */;
import ImageProxyUtils from "ImageProxyUtils" /* 2032 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let c0, dependencyMap;

const Image = react_native.Image;
let closure_5 = { width: 166, height: 289 };
let closure_6 = { width: 289, height: 166 };
let map = new Map();
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaSize.tsx");

export const MEDIA_FALLBACK_WIDTH = 1080;
export const MEDIA_FALLBACK_HEIGHT = 1920;
export function getMediaTileSize(value) {
  if (null != value) {
    let tmp;
    if (value.width > value.height) {
      tmp = closure_6;
    }
    return tmp;
  }
  tmp = closure_5;
}
export function getAppStoreOverlayCarouselImageUrl(posterUrl) {
  const getSizedImageAssetURL = ImageProxyUtils.getSizedImageAssetURL;
  let format = null;
  ImageProxyUtils;
  if (AvatarUtils.SUPPORTS_WEBP) {
    format = "webp";
  }
  return getSizedImageAssetURL(posterUrl, { size: 289, keepAspectRatio: true, format });
}
export function getMediaSizeFromLoadEvent(nativeEvent) {
  let height;
  let width;
  nativeEvent = nativeEvent.nativeEvent;
  let source = nativeEvent;
  if ("source" in nativeEvent) {
    source = nativeEvent.source;
  }
  ({ width, height } = source);
  let tmp = null;
  if (null != width) {
    tmp = null;
    if (null != height) {
      tmp = null;
      if (width > 0) {
        tmp = null;
        if (height > 0) {
          size = { width, height };
          tmp = size;
        }
      }
    }
  }
  return tmp;
}
export function useAppStoreOverlayMediaSizes(memo) {
  let tmp3;
  let first = _slicedToArray(react.useState(memo), 1)[0];
  [tmp3, dependencyMap] = _slicedToArray(react.useState(map), 2);
  const items = [first];
  const tmp2 = _slicedToArray(react.useState(map), 2);
  const recordMediaSize = react.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    dependencyMap = arg1;
    let tmp = dependencyMap(function(get) {
      let result;
      size = closure_1;
      const size2 = get.get(closure_0);
      let width;
      const tmp = closure_0;
      if (size2 != null) {
        width = size2.width;
      }
      if (width !== size.width) {
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map(get);
        result = map.set(tmp, size);
      } else {
        let height;
        if (size2 != null) {
          height = size2.height;
        }
        result = get;
      }
      return result;
    });
  }, []);
  const effect = react.useEffect(() => {
    first = false;
    const item = first.forEach((item) => {
      let closure_0 = item;
      size = size.getSize(item, (width, height) => {
        let tmp = width;
        if (!tmp) {
          closure_2_1(function(get) {
            let result;
            size = { width, height };
            const size2 = get.get(width);
            const tmp = width;
            width = undefined;
            if (size2 != null) {
              width = size2.width;
            }
            if (width !== size.width) {
              const _Map = Map;
              const self = this;
              const self2 = this;
              map = new Map(get);
              result = map.set(tmp, size);
            } else {
              height = undefined;
              if (size2 != null) {
                height = size2.height;
              }
              result = get;
            }
            return result;
          });
        }
      }, () => {

      });
    });
    return () => {
      c0 = true;
    };
  }, items);
  return { sizes, recordMediaSize };
}
