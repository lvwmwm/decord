// Module ID: 10729
// Function ID: 10730
// Name: AppStoreOverlayMediaCarousel
// Dependencies: [32, 19, 17, 4825, 1085, 21, 576, 4836, 10730, 10731, 1115, 5899, 504, 7755, 8176, 7131, 7141, 6073, 2]
// Exports: default

// Module 10729 (AppStoreOverlayMediaCarousel)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsActions from "AnalyticsActions" /* 7131 */;
import AppStoreOverlayMediaSize from "AppStoreOverlayMediaSize" /* 10730 */;
import openAppStoreOverlayMediaModal from "openAppStoreOverlayMediaModal" /* 10731 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let c10;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
function getMeasurableUrl(type) {
  let url;
  if ("trailer" === type.type) {
    let posterUrl = type.posterUrl;
    if (posterUrl == null) {
      posterUrl = null;
    }
    url = posterUrl;
  } else {
    url = type.url;
  }
  return url;
}
function AppStoreOverlayScreenshotItem(media) {
  let intl;
  let items3;
  let obj2;
  media = media.media;
  const index = media.index;
  const mediaViewerSources = media.mediaViewerSources;
  const recordMediaSize = media.recordMediaSize;
  const onGetGamePress = media.onGetGamePress;
  const tileSize = media.tileSize;
  const tmp = closure_14();
  const ref = onGetGamePress.useRef(null);
  const items = [media.url];
  const items1 = [media.url, recordMediaSize];
  const memo = onGetGamePress.useMemo(() => {
    const obj = AppStoreOverlayMediaSize;
    return obj.getAppStoreOverlayCarouselImageUrl(media.url);
  }, items);
  const items2 = [index, mediaViewerSources, onGetGamePress];
  const callback = onGetGamePress.useCallback((nativeEvent) => {
    const obj = AppStoreOverlayMediaSize;
    const mediaSizeFromLoadEvent = obj.getMediaSizeFromLoadEvent(nativeEvent);
    if (null != mediaSizeFromLoadEvent) {
      recordMediaSize(media.url, mediaSizeFromLoadEvent);
    }
  }, items1);
  let obj = {
    ref,
    style: items3,
    onPress: onGetGamePress.useCallback(() => {
      const obj = openAppStoreOverlayMediaModal;
      const obj2 = { initialSources: mediaViewerSources, initialIndex: index, originViewOrOriginLayout: ref.current, analyticsSource: "quest_app_store_overlay", onGetGamePress };
      const result = obj.openAppStoreOverlayMediaModal(obj2);
    }, items2),
    accessibilityLabel: intl.string(media(mediaViewerSources[10]).t.lWDPcO),
    children: closure_10(index(mediaViewerSources[11]), obj2)
  };
  items3 = [tmp.mediaItem, tileSize];
  intl = media(mediaViewerSources[10]).intl;
  obj2 = { source: { uri: memo }, style: tmp.media, resizeMode: "cover", onLoad: callback, accessibilityIgnoresInvertColors: true };
  return closure_10(ref, obj);
}
function AppStoreOverlayTrailerItem(media) {
  let intl;
  let items3;
  let items4;
  let useReducedMotion;
  media = media.media;
  const index = media.index;
  const mediaViewerSources = media.mediaViewerSources;
  const onGetGamePress = media.onGetGamePress;
  let ref;
  const tileSize = media.tileSize;
  const tmp = closure_14();
  ref = ref.useRef(null);
  ref = ref.useRef(0);
  const items = [media.posterUrl];
  const memo = ref.useMemo(() => {
    let appStoreOverlayCarouselImageUrl;
    if (null != media.posterUrl) {
      const obj = AppStoreOverlayMediaSize;
      appStoreOverlayCarouselImageUrl = obj.getAppStoreOverlayCarouselImageUrl(tmp.posterUrl);
    }
    return appStoreOverlayCarouselImageUrl;
  }, items);
  let obj = media(mediaViewerSources[12]);
  const items1 = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const callback = ref.useCallback((current) => {
    ref.current = current;
  }, []);
  const useRef = ref.useRef;
  let obj2 = media(mediaViewerSources[13]);
  const ref1 = useRef(obj2.createVideoControls(NOOP));
  const current = ref1.current;
  const subscribe = current.useSubscribe(callback, NOOP, NOOP);
  const items2 = [index, mediaViewerSources, onGetGamePress];
  const obj3 = {
    ref,
    style: items3,
    onPress: ref.useCallback(() => {
      const obj = openAppStoreOverlayMediaModal;
      const obj2 = { initialSources: mediaViewerSources, initialIndex: index, initialIndexVideoStartTime: ref.current, originViewOrOriginLayout: ref.current, analyticsSource: "quest_app_store_overlay", onGetGamePress };
      const result = obj.openAppStoreOverlayMediaModal(obj2);
    }, items2),
    accessibilityLabel: intl.string(media(mediaViewerSources[10]).t.N0IE3v),
    children: items4
  };
  items3 = [tmp.mediaItem, tileSize];
  intl = media(mediaViewerSources[10]).intl;
  items4 = [, ];
  const obj4 = { style: tmp.media, source: { uri: media.url }, poster: memo, posterResizeMode: "cover", resizeMode: "cover", muted: true, pauseWhileAppInactive: true, paused: stateFromStores, controls: ref1.current };
  items4[0] = closure_10(media(mediaViewerSources[13]).VideoComponent, obj4);
  const obj5 = { style: tmp.playIconWrapper, pointerEvents: "none", children: closure_10(media(mediaViewerSources[14]).CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" }) };
  items4[1] = closure_10(closure_7, obj5);
  return closure_11(ref, obj3);
}
function AppStoreOverlayMediaCarouselItem(arg0) {
  let index;
  let media;
  let mediaViewerSources;
  let onGetGamePress;
  let tileSize;
  ({ media, index, mediaViewerSources, tileSize, onGetGamePress } = arg0);
  const type = media.type;
  if ("screenshot" === type) {
    const obj2 = { media, index, mediaViewerSources, tileSize, recordMediaSize: tmp, onGetGamePress };
    return authStore(AppStoreOverlayScreenshotItem, obj2);
  } else if ("trailer" === type) {
    const obj = { media, index, mediaViewerSources, tileSize, onGetGamePress };
    return authStore(AppStoreOverlayTrailerItem, obj);
  }
}
({ Pressable: hasOwnProperty, ScrollView: metroRequire, StyleSheet, View: metroImportDefault } = react_native);
const NOOP = Constants.NOOP;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
const PX_162 = nativeDefault.space.PX_16;
let createStyles = createStyles_mod;
let obj = { carousel: obj2, carouselContent: obj3, mediaItem: obj4, media: obj5, playIconWrapper: obj6 };
obj2 = { marginHorizontal: -nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: PX_16, paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16, alignItems: "center" };
obj4 = { borderRadius: nativeDefault.space.PX_16, overflow: "hidden", backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT };
obj5 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj6 = { alignItems: "center", justifyContent: "center" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_14 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaCarousel.tsx");

export default function AppStoreOverlayMediaCarousel(media) {
  let obj5;
  let onCarouselScroll;
  let onGetGamePress;
  media = media.media;
  ({ onGetGamePress: importDefault, onCarouselScroll } = media);
  let recordMediaSize;
  const tmp = closure_14();
  const items = [media];
  const memo = recordMediaSize.useMemo(() => {
    const mapped = media.map(getMeasurableUrl);
    return mapped.filter((item) => null != item);
  }, items);
  let tmp3 = media;
  let tmp4 = onCarouselScroll;
  let obj = media(onCarouselScroll[8]);
  const appStoreOverlayMediaSizes = obj.useAppStoreOverlayMediaSizes(memo);
  let sizes = appStoreOverlayMediaSizes.sizes;
  recordMediaSize = appStoreOverlayMediaSizes.recordMediaSize;
  const items1 = [media, sizes];
  const mediaViewerSources = recordMediaSize.useMemo(() => media.map((type, mediaIndex) => {
    let height;
    let size3;
    let tmp7;
    let url;
    let width;
    if ("trailer" === type.type) {
      let posterUrl = type.posterUrl;
      if (posterUrl == null) {
        posterUrl = null;
      }
      url = posterUrl;
    } else {
      url = type.url;
    }
    let value;
    if (null != url) {
      value = closure_0.get(url);
    }
    if (value == null) {
      size = { width: sizes(onCarouselScroll[8]).MEDIA_FALLBACK_WIDTH, height: sizes(onCarouselScroll[8]).MEDIA_FALLBACK_HEIGHT };
      value = size;
    }
    ({ width, height } = value);
    if ("trailer" === type.type) {
      const size1 = { uri: type.url, mediaIndex, width, height, videoURI: type.url, thumbnail: tmp7, accessoryType: "embed", disableDownload: true };
      tmp7 = undefined;
      if (null != type.posterUrl) {
        const size2 = { width, height, uri: type.posterUrl };
        tmp7 = size2;
      }
      size3 = size1;
    } else {
      size3 = { uri: type.url, mediaIndex, width, height, accessoryType: "embed", disableDownload: true };
    }
    return size3;
  }), items1);
  const items2 = [media, sizes];
  const memo1 = recordMediaSize.useMemo(() => media.map((type) => {
    let url;
    if ("trailer" === type.type) {
      let posterUrl = type.posterUrl;
      if (posterUrl == null) {
        posterUrl = null;
      }
      url = posterUrl;
    } else {
      url = type.url;
    }
    let value;
    const getMediaTileSize = media(onCarouselScroll[8]).getMediaTileSize;
    media(onCarouselScroll[8]);
    if (null != url) {
      value = sizes.get(url);
    }
    return getMediaTileSize(value).width;
  }), items2);
  const ref = recordMediaSize.useRef(0);
  let tmp7 = sizes(recordMediaSize.useState(0), 2);
  const first = tmp7[0];
  let closure_9 = tmp7[1];
  const length = media.length;
  const items3 = [length];
  const effect = recordMediaSize.useEffect(() => {
    ref.current = 0;
  }, items3);
  const items4 = [length, first, memo1, onCarouselScroll];
  const callback = recordMediaSize.useCallback((nativeEvent) => {
    closure_9(nativeEvent.nativeEvent.layout.width);
  }, []);
  const callback1 = recordMediaSize.useCallback((nativeEvent) => {
    let LEFT;
    if (null != onCarouselScroll) {
      if (length > 1) {
        if (first > 0) {
          const x = nativeEvent.nativeEvent.contentOffset.x;
          let num5 = 0;
          if (0 !== memo1.length) {
            num5 = 0;
            if (first > 0) {
              let sum1 = PX_162;
              let num = 0;
              let num2 = 0;
              let num3 = 0;
              let num4 = 0;
              if (0 < memo1.length) {
                do {
                  let sum = sum1 + arr[num];
                  let _Math = Math;
                  let _Math2 = Math;
                  let _Math3 = Math;
                  let bound = Math.min(x + tmp16, sum);
                  let maxResult = max(0, bound - Math.max(x, sum1));
                  let tmp8 = num2;
                  let tmp9 = num3;
                  if (maxResult > num2) {
                    tmp8 = maxResult;
                    tmp9 = num;
                  }
                  sum1 = sum + PX_16;
                  num = num + 1;
                  num2 = tmp8;
                  num3 = tmp9;
                  num4 = tmp9;
                } while (num < memo1.length);
              }
              num5 = num4;
            }
          }
          const current = ref.current;
          if (num5 !== current) {
            const obj = { carouselType: AnalyticsActions.AppStoreOverlayCarouselTypes.MEDIA, scrollingDirection: LEFT, carouselPosition: num5, carouselSize: tmp15 };
            if (num5 > current) {
              LEFT = tmp12(7141).HorizontalScrollingDirection.RIGHT;
            } else {
              LEFT = tmp12(7141).HorizontalScrollingDirection.LEFT;
            }
            tmp(obj);
            tmp11.current = num5;
          }
        }
      }
    }
  }, items4);
  const items5 = [callback1];
  const callback2 = recordMediaSize.useCallback((nativeEvent) => {
    const velocity = nativeEvent.nativeEvent.velocity;
    let num;
    if (velocity != null) {
      num = velocity.x;
    }
    if (num == null) {
      num = 0;
    }
    if (0 === num) {
      callback1(nativeEvent);
    }
  }, items5);
  media(onCarouselScroll[17]);
  let tmp15 = null;
  if (0 !== media.length) {
    const tmp16 = length;
    const obj2 = { gesture: tmp14, children: length(memo1, obj5) };
    ({ carousel: obj3.style, carouselContent: obj3.contentContainerStyle } = tmp);
    obj5 = {
      horizontal: true,
      nestedScrollEnabled: true,
      showsHorizontalScrollIndicator: false,
      style: null,
      contentContainerStyle: null,
      onLayout: callback,
      onScrollEndDrag: callback2,
      onMomentumScrollEnd: callback1,
      children: media.map((media, index) => {
          let getMediaTileSize;
          let url;
          let value;
          if ("trailer" === media.type) {
            let posterUrl = media.posterUrl;
            if (posterUrl == null) {
              posterUrl = null;
            }
            url = posterUrl;
          } else {
            url = media.url;
          }
          const obj = { media, index, mediaViewerSources, tileSize: getMediaTileSize(value), recordMediaSize, onGetGamePress: importDefault };
          value = undefined;
          getMediaTileSize = AppStoreOverlayMediaSize.getMediaTileSize;
          AppStoreOverlayMediaSize;
          const tmp3 = authStore;
          const tmp4 = AppStoreOverlayMediaCarouselItem;
          if (null != url) {
            value = sizes.get(url);
          }
          return tmp3(tmp4, obj, "" + media.type + "-" + index);
        })
    };
    const GestureDetector = tmp3(tmp4[17]).GestureDetector;
    tmp15 = length(GestureDetector, obj2);
  }
  return tmp15;
};
