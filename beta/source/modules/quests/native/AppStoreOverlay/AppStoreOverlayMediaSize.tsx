// Module ID: 10730
// Function ID: 10731
// Name: AppStoreOverlayMediaSize
// Dependencies: [32, 19, 17, 2015, 1397, 2]
// Exports: getAppStoreOverlayCarouselImageUrl, getMediaSizeFromLoadEvent, getMediaTileSize, useAppStoreOverlayMediaSizes

// Module 10730 (AppStoreOverlayMediaSize)
import react_native from "react-native" /* 17 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import ImageProxyUtils from "ImageProxyUtils" /* 2015 */;
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
export const getMediaTileSize = function getMediaTileSize(value) {
  if (null != value) {
    let tmp;
    if (value.width > value.height) {
      tmp = closure_6;
    }
    return tmp;
  }
  tmp = closure_5;
};
export const getAppStoreOverlayCarouselImageUrl = function getAppStoreOverlayCarouselImageUrl(posterUrl) {
  const getSizedImageAssetURL = ImageProxyUtils.getSizedImageAssetURL;
  let format = null;
  ImageProxyUtils;
  if (AvatarUtils.SUPPORTS_WEBP) {
    format = "webp";
  }
  return getSizedImageAssetURL(posterUrl, { size: 289, keepAspectRatio: true, format });
};
export const getMediaSizeFromLoadEvent = function getMediaSizeFromLoadEvent(nativeEvent) {
  nativeEvent = nativeEvent.nativeEvent;
  const source = nativeEvent.source;
  let width;
  if (source != null) {
    width = source.width;
  }
  if (width == null) {
    width = nativeEvent.width;
  }
  const source2 = nativeEvent.source;
  let height;
  if (source2 != null) {
    height = source2.height;
  }
  if (height == null) {
    height = nativeEvent.height;
  }
  let tmp3 = null;
  if (null != width) {
    tmp3 = null;
    if (null != height) {
      tmp3 = null;
      if (width > 0) {
        tmp3 = null;
        if (height > 0) {
          size = { width, height };
          tmp3 = size;
        }
      }
    }
  }
  return tmp3;
};
export const useAppStoreOverlayMediaSizes = function useAppStoreOverlayMediaSizes(memo) {
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
};
