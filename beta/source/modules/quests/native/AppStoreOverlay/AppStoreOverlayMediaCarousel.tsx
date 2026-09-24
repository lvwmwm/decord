// Module ID: 11666
// Function ID: 11667
// Name: AppStoreOverlayMediaCarousel
// Dependencies: [19, 17, 4782, 1089, 21, 4790, 580, 11667, 558, 568, 11668, 1119, 5834, 504, 8615, 9024, 6923, 2]

// Module 11666 (AppStoreOverlayMediaCarousel)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import AppStoreOverlayMediaSize from "AppStoreOverlayMediaSize" /* 11667 */;
import openAppStoreOverlayMediaModal from "openAppStoreOverlayMediaModal" /* 11668 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;

require = fn;
function getMeasurableUrl(type) {
  if ("trailer" === type.type) {
    let posterUrl = type.posterUrl;
    if (posterUrl == null) {
      posterUrl = null;
    }
    let url = posterUrl;
  } else {
    url = type.url;
  }
  return url;
}
function AppStoreOverlayTrailerItem(media) {
  media = media.media;
  const index = media.index;
  const mediaViewerSources = media.mediaViewerSources;
  const onGetGamePress = media.onGetGamePress;
  const tmp = closure_11();
  onGetGamePress.useRef(null);
  const ref = onGetGamePress.useRef(0);
  const items = [media.posterUrl];
  const memo = onGetGamePress.useMemo(() => {
    let appStoreOverlayCarouselImageUrl;
    if (null != media.posterUrl) {
      appStoreOverlayCarouselImageUrl = AppStoreOverlayMediaSize.getAppStoreOverlayCarouselImageUrl(tmp.posterUrl);
    }
    return appStoreOverlayCarouselImageUrl;
  }, items);
  const items1 = [AccessibilityStore];
  const stateFromStores = media(mediaViewerSources[13]).useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const callback = onGetGamePress.useCallback((current) => {
    closure_5.current = current;
  }, []);
  let obj = media(mediaViewerSources[13]);
  const ref1 = onGetGamePress.useRef(media(mediaViewerSources[14]).createVideoControls(NOOP));
  const current = ref1.current;
  const subscribe = current.useSubscribe(callback, NOOP, NOOP);
  const items2 = [index, mediaViewerSources, onGetGamePress];
  const obj3 = {
    ref,
    style: null,
    onPress: onGetGamePress.useCallback(() => {
      const result = openAppStoreOverlayMediaModal.openAppStoreOverlayMediaModal({ initialSources: mediaViewerSources, initialIndex: index, initialIndexVideoStartTime: ref.current, originViewOrOriginLayout: ref.current, analyticsSource: "quest_app_store_overlay", onGetGamePress });
    }, items2),
    accessibilityLabel: null,
    children: null
  };
  const items3 = [tmp.mediaItem, media.tileSize];
  obj3.style = items3;
  const intl = media(mediaViewerSources[11]).intl;
  obj3.accessibilityLabel = intl.string(media(mediaViewerSources[11]).t.N0IE3v);
  const items4 = [closure_9(media(mediaViewerSources[14]).VideoComponent, { style: tmp.media, source: { uri: media.url }, poster: memo, posterResizeMode: "cover", resizeMode: "cover", muted: true, pauseWhileAppInactive: true, paused: stateFromStores, controls: ref1.current }), ];
  const obj2 = media(mediaViewerSources[14]);
  const obj4 = { style: tmp.media, source: { uri: media.url }, poster: memo, posterResizeMode: "cover", resizeMode: "cover", muted: true, pauseWhileAppInactive: true, paused: stateFromStores, controls: ref1.current };
  items4[1] = closure_9(closure_6, { style: tmp.playIconWrapper, pointerEvents: "none", children: closure_9(media(mediaViewerSources[15]).CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" }) });
  obj3.children = items4;
  return closure_10(ref, obj3);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, ScrollView: hasOwnProperty, StyleSheet, View: metroRequire } = get_ActivityIndicator);
const NOOP = fn(1089).NOOP;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { carousel: { marginHorizontal: -nativeDefault.space.PX_16 }, carouselContent: null, mediaItem: null, media: null, playIconWrapper: null };
let obj3 = { marginHorizontal: -nativeDefault.space.PX_16 };
obj2.carouselContent = { gap: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16, alignItems: "center" };
let obj4 = { gap: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16, alignItems: "center" };
obj2.mediaItem = { borderRadius: nativeDefault.space.PX_16, overflow: "hidden", backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.media = {};
const obj7 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj7.alignItems = "center";
obj7.justifyContent = "center";
obj2.playIconWrapper = obj7;
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((media) => {
  const cResult = media(mediaViewerSources[9]).c(23);
  media = media.media;
  const index = media.index;
  mediaViewerSources = media.mediaViewerSources;
  ({ tileSize, recordMediaSize } = media);
  const onGetGamePress = media.onGetGamePress;
  const tmp4 = closure_11();
  const ref = recordMediaSize.useRef(null);
  if (cResult[0] !== media.url) {
    const appStoreOverlayCarouselImageUrl = tmp(tmp2[7]).getAppStoreOverlayCarouselImageUrl(media.url);
    cResult[0] = media.url;
    cResult[1] = appStoreOverlayCarouselImageUrl;
    let tmp6 = appStoreOverlayCarouselImageUrl;
    const tmpResult = tmp(tmp2[7]);
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === media.url) {
    if (cResult[3] === recordMediaSize) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === index) {
      if (cResult[6] === mediaViewerSources) {
        if (cResult[7] === onGetGamePress) {
          let tmp9 = cResult[8];
        }
        if (cResult[9] === tmp4.mediaItem) {
          if (cResult[10] === tileSize) {
            let tmp10 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[11]).intl;
            const stringResult = intl.string(tmp(tmp2[11]).t.lWDPcO);
            cResult[12] = stringResult;
            let tmp12 = stringResult;
          } else {
            tmp12 = cResult[12];
          }
          if (cResult[13] !== tmp6) {
            const obj2 = { uri: tmp6 };
            cResult[13] = tmp6;
            cResult[14] = obj2;
            let tmp14 = obj2;
          } else {
            tmp14 = cResult[14];
          }
          if (cResult[15] === tmp8) {
            if (cResult[16] === tmp4.media) {
              if (cResult[17] === tmp14) {
                let tmp15 = cResult[18];
              }
              if (cResult[19] === tmp9) {
                if (cResult[20] === tmp10) {
                  if (cResult[21] === tmp15) {
                    let tmp19 = cResult[22];
                  }
                  return tmp19;
                }
              }
              const obj3 = { ref, style: tmp10, onPress: tmp9, accessibilityLabel: tmp12, children: tmp15 };
              const tmp22 = closure_9(onGetGamePress, obj3);
              cResult[19] = tmp9;
              cResult[20] = tmp10;
              cResult[21] = tmp15;
              cResult[22] = tmp22;
              tmp19 = tmp22;
            }
          }
          const obj4 = { source: tmp14, style: tmp4.media, resizeMode: "cover", onLoad: tmp8, accessibilityIgnoresInvertColors: true };
          const tmp18 = closure_9(index(tmp2[12]), obj4);
          cResult[15] = tmp8;
          cResult[16] = tmp4.media;
          cResult[17] = tmp14;
          cResult[18] = tmp18;
          tmp15 = tmp18;
        }
        const items = [tmp4.mediaItem, tileSize];
        cResult[9] = tmp4.mediaItem;
        cResult[10] = tileSize;
        cResult[11] = items;
        tmp10 = items;
      }
    }
    const fn = function w() {
      const result = openAppStoreOverlayMediaModal.openAppStoreOverlayMediaModal({ initialSources: mediaViewerSources, initialIndex: index, originViewOrOriginLayout: ref.current, analyticsSource: "quest_app_store_overlay", onGetGamePress });
    };
    cResult[5] = index;
    cResult[6] = mediaViewerSources;
    cResult[7] = onGetGamePress;
    cResult[8] = fn;
    tmp9 = fn;
  }
  class I {
    constructor(arg0) {
      obj = closure_0(closure_2[7]);
      mediaSizeFromLoadEvent = obj.getMediaSizeFromLoadEvent(media);
      if (null != mediaSizeFromLoadEvent) {
        tmp2 = recordMediaSize;
        tmp3 = media;
        tmp4 = recordMediaSize(media.url, mediaSizeFromLoadEvent);
      }
      return;
    }
  }
  cResult[2] = media.url;
  cResult[3] = recordMediaSize;
  cResult[4] = I;
  tmp8 = I;
}) : ((media) => {
  media = media.media;
  const index = media.index;
  const mediaViewerSources = media.mediaViewerSources;
  const recordMediaSize = media.recordMediaSize;
  const onGetGamePress = media.onGetGamePress;
  const tmp = closure_11();
  const ref = recordMediaSize.useRef(null);
  const items = [media.url];
  const items1 = [media.url, recordMediaSize];
  const memo = recordMediaSize.useMemo(() => AppStoreOverlayMediaSize.getAppStoreOverlayCarouselImageUrl(media.url), items);
  const items2 = [index, mediaViewerSources, onGetGamePress];
  const callback = recordMediaSize.useCallback((nativeEvent) => {
    const mediaSizeFromLoadEvent = AppStoreOverlayMediaSize.getMediaSizeFromLoadEvent(nativeEvent);
    if (null != mediaSizeFromLoadEvent) {
      recordMediaSize(media.url, mediaSizeFromLoadEvent);
    }
  }, items1);
  const obj = {
    ref,
    style: null,
    onPress: recordMediaSize.useCallback(() => {
      const result = openAppStoreOverlayMediaModal.openAppStoreOverlayMediaModal({ initialSources: mediaViewerSources, initialIndex: index, originViewOrOriginLayout: ref.current, analyticsSource: "quest_app_store_overlay", onGetGamePress });
    }, items2),
    accessibilityLabel: null,
    children: null
  };
  const items3 = [tmp.mediaItem, media.tileSize];
  obj.style = items3;
  const intl = media(mediaViewerSources[11]).intl;
  obj.accessibilityLabel = intl.string(media(mediaViewerSources[11]).t.lWDPcO);
  obj.children = closure_9(index(mediaViewerSources[12]), { source: { uri: memo }, style: tmp.media, resizeMode: "cover", onLoad: callback, accessibilityIgnoresInvertColors: true });
  return closure_9(onGetGamePress, obj);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(13);
  ({ media, index, mediaViewerSources, tileSize, recordMediaSize, onGetGamePress } = arg0);
  const type = media.type;
  if ("screenshot" === type) {
    if (cResult[0] === index) {
      if (cResult[1] === media) {
        if (cResult[2] === mediaViewerSources) {
          if (cResult[3] === onGetGamePress) {
            if (cResult[4] === recordMediaSize) {
              if (cResult[5] === tileSize) {
                let tmp6 = cResult[6];
              }
              return tmp6;
            }
          }
        }
      }
    }
    const obj2 = { media, index, mediaViewerSources, tileSize, recordMediaSize, onGetGamePress };
    const tmp9 = options(closure_13, obj2);
    cResult[0] = index;
    cResult[1] = media;
    cResult[2] = mediaViewerSources;
    cResult[3] = onGetGamePress;
    cResult[4] = recordMediaSize;
    cResult[5] = tileSize;
    cResult[6] = tmp9;
    tmp6 = tmp9;
  } else if ("trailer" === type) {
    if (cResult[7] === index) {
      if (cResult[8] === media) {
        if (cResult[9] === mediaViewerSources) {
          if (cResult[10] === onGetGamePress) {
            if (cResult[11] === tileSize) {
              let tmp2 = cResult[12];
            }
            return tmp2;
          }
        }
      }
    }
    const obj3 = { media, index, mediaViewerSources, tileSize, onGetGamePress };
    const tmp5 = options(AppStoreOverlayTrailerItem, obj3);
    cResult[7] = index;
    cResult[8] = media;
    cResult[9] = mediaViewerSources;
    cResult[10] = onGetGamePress;
    cResult[11] = tileSize;
    cResult[12] = tmp5;
    tmp2 = tmp5;
  }
}) : ((arg0) => {
  ({ media, index, mediaViewerSources, tileSize, onGetGamePress } = arg0);
  const type = media.type;
  if ("screenshot" === type) {
    const obj2 = { media, index, mediaViewerSources, tileSize, recordMediaSize: tmp, onGetGamePress };
    return options(closure_13, obj2);
  } else if ("trailer" === type) {
    const obj = { media, index, mediaViewerSources, tileSize, onGetGamePress };
    return options(AppStoreOverlayTrailerItem, obj);
  }
});
ReactCompilerGating = fn(558);
let obj5 = { borderRadius: nativeDefault.space.PX_16, overflow: "hidden", backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT };
const obj6 = {};
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaCarousel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = onGetGamePress(recordMediaSize[9]).c(25);
  ({ media, onGetGamePress } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] !== media) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function o(arg0) {
        return null != arg0;
      };
      cResult[2] = fn;
      let tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    const mapped = media.map(getMeasurableUrl);
    const found = mapped.filter(tmp6);
    cResult[0] = media;
    cResult[1] = found;
  } else {
    const appStoreOverlayMediaSizes = tmp(tmp2[7]).useAppStoreOverlayMediaSizes(cResult[1]);
    const sizes = appStoreOverlayMediaSizes.sizes;
    recordMediaSize = appStoreOverlayMediaSizes.recordMediaSize;
    if (cResult[3] === media) {
      if (cResult[4] === sizes) {
        let tmp11 = cResult[5];
      }
      const mediaViewerSources = tmp11;
      const _Symbol2 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { disallowInterruption: true };
        cResult[6] = obj2;
        let tmp14 = obj2;
      } else {
        tmp14 = cResult[6];
      }
      const nativeGesture = tmp(tmp2[16]).useNativeGesture(tmp14);
      if (0 === media.length) {
        return null;
      } else {
        if (cResult[7] === media) {
          if (cResult[8] === tmp11) {
            if (cResult[9] === onGetGamePress) {
              if (cResult[10] === recordMediaSize) {
                if (cResult[11] === sizes) {
                  if (cResult[18] === tmp4.carousel) {
                    if (cResult[19] === tmp4.carouselContent) {
                      if (cResult[20] === tmp16) {
                        let tmp20 = cResult[21];
                      }
                      if (cResult[22] === nativeGesture) {
                        if (cResult[23] === tmp20) {
                          let tmp24 = cResult[24];
                        }
                        return tmp24;
                      }
                      const obj3 = { gesture: nativeGesture, children: tmp20 };
                      const tmp26 = closure_9(tmp(tmp2[16]).GestureDetector, obj3);
                      cResult[22] = nativeGesture;
                      cResult[23] = tmp20;
                      cResult[24] = tmp26;
                      tmp24 = tmp26;
                    }
                  }
                  const obj4 = { horizontal: true, nestedScrollEnabled: true, showsHorizontalScrollIndicator: false, style: tmp28, contentContainerStyle: tmp29, children: cResult[12] };
                  const tmp23 = closure_9(closure_5, obj4);
                  cResult[18] = tmp4.carousel;
                  cResult[19] = tmp4.carouselContent;
                  cResult[20] = cResult[12];
                  cResult[21] = tmp23;
                  tmp20 = tmp23;
                }
              }
            }
          }
        }
        if (cResult[13] === tmp11) {
          if (cResult[14] === onGetGamePress) {
            if (cResult[15] === recordMediaSize) {
              if (cResult[16] === sizes) {
                let tmp17 = cResult[17];
              }
              const mapped1 = media.map(tmp17);
              cResult[7] = media;
              cResult[8] = tmp11;
              cResult[9] = onGetGamePress;
              cResult[10] = recordMediaSize;
              cResult[11] = sizes;
              cResult[12] = mapped1;
            }
          }
        }
        const fn2 = function f(media, index) {
          if ("trailer" === media.type) {
            let posterUrl = media.posterUrl;
            if (posterUrl == null) {
              posterUrl = null;
            }
            let url = posterUrl;
          } else {
            url = media.url;
          }
          const obj = { media, index, mediaViewerSources, tileSize: null, recordMediaSize: null, onGetGamePress: null };
          value = undefined;
          if (null != url) {
            value = sizes.get(url);
          }
          obj.tileSize = AppStoreOverlayMediaSize.getMediaTileSize(value);
          obj.recordMediaSize = recordMediaSize;
          obj.onGetGamePress = onGetGamePress;
          return options(closure_15, obj, "" + media.type + "-" + index);
        };
        cResult[13] = tmp11;
        cResult[14] = onGetGamePress;
        cResult[15] = recordMediaSize;
        cResult[16] = sizes;
        cResult[17] = fn2;
        tmp17 = fn2;
      }
      const tmpResult2 = tmp(tmp2[16]);
    }
    closure_129_0 = sizes;
    const mapped2 = media.map((type, mediaIndex) => {
      if ("trailer" === type.type) {
        let posterUrl = type.posterUrl;
        if (posterUrl == null) {
          posterUrl = null;
        }
        let url = posterUrl;
      } else {
        url = type.url;
      }
      value = undefined;
      if (null != url) {
        value = closure_0.get(url);
      }
      if (value == null) {
        const size = { width: media(sizes[7]).MEDIA_FALLBACK_WIDTH, height: media(sizes[7]).MEDIA_FALLBACK_HEIGHT };
        value = size;
      }
      ({ width, height } = value);
      if ("trailer" === type.type) {
        const size1 = { uri: type.url, mediaIndex, width, height, videoURI: type.url, thumbnail: null, accessoryType: "embed", disableDownload: true };
        let tmp7;
        if (null != type.posterUrl) {
          const size2 = { width, height, uri: type.posterUrl };
          tmp7 = size2;
        }
        size1.thumbnail = tmp7;
        let size3 = size1;
      } else {
        size3 = { uri: type.url, mediaIndex, width, height, accessoryType: "embed", disableDownload: true };
      }
      return size3;
    });
    cResult[3] = media;
    cResult[4] = sizes;
    cResult[5] = mapped2;
    tmp11 = mapped2;
    const tmpResult = tmp(tmp2[7]);
  }
}) : ((media) => {
  media = media.media;
  const onGetGamePress = media.onGetGamePress;
  let sizes;
  let recordMediaSize;
  const items = [media];
  const memo = recordMediaSize.useMemo(() => {
    const mapped = media.map(getMeasurableUrl);
    return mapped.filter((item) => null != item);
  }, items);
  const tmp = closure_11();
  const tmp3 = media;
  const tmp4 = sizes;
  const appStoreOverlayMediaSizes = media(sizes[7]).useAppStoreOverlayMediaSizes(memo);
  sizes = appStoreOverlayMediaSizes.sizes;
  recordMediaSize = appStoreOverlayMediaSizes.recordMediaSize;
  const items1 = [media, sizes];
  const mediaViewerSources = recordMediaSize.useMemo(() => {
    closure_0 = sizes;
    return media.map((type, mediaIndex) => {
      if ("trailer" === type.type) {
        let posterUrl = type.posterUrl;
        if (posterUrl == null) {
          posterUrl = null;
        }
        let url = posterUrl;
      } else {
        url = type.url;
      }
      value = undefined;
      if (null != url) {
        value = closure_0.get(url);
      }
      if (value == null) {
        const size = { width: media(sizes[7]).MEDIA_FALLBACK_WIDTH, height: media(sizes[7]).MEDIA_FALLBACK_HEIGHT };
        value = size;
      }
      ({ width, height } = value);
      if ("trailer" === type.type) {
        const size1 = { uri: type.url, mediaIndex, width, height, videoURI: type.url, thumbnail: null, accessoryType: "embed", disableDownload: true };
        let tmp7;
        if (null != type.posterUrl) {
          const size2 = { width, height, uri: type.posterUrl };
          tmp7 = size2;
        }
        size1.thumbnail = tmp7;
        let size3 = size1;
      } else {
        size3 = { uri: type.url, mediaIndex, width, height, accessoryType: "embed", disableDownload: true };
      }
      return size3;
    });
  }, items1);
  media(sizes[16]);
  let tmp8 = null;
  if (0 !== media.length) {
    const obj2 = { gesture: tmp7, children: null };
    const obj5 = { horizontal: true, nestedScrollEnabled: true, showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, children: null };
    ({ carousel: obj3.style, carouselContent: obj3.contentContainerStyle } = tmp);
    obj5.children = media.map((media, index) => {
      if ("trailer" === media.type) {
        let posterUrl = media.posterUrl;
        if (posterUrl == null) {
          posterUrl = null;
        }
        let url = posterUrl;
      } else {
        url = media.url;
      }
      const obj = { media, index, mediaViewerSources, tileSize: null, recordMediaSize: null, onGetGamePress: null };
      value = undefined;
      if (null != url) {
        value = sizes.get(url);
      }
      obj.tileSize = AppStoreOverlayMediaSize.getMediaTileSize(value);
      obj.recordMediaSize = recordMediaSize;
      obj.onGetGamePress = onGetGamePress;
      return options(closure_15, obj, "" + media.type + "-" + index);
    });
    obj2.children = closure_9(closure_5, obj5);
    tmp8 = closure_9(tmp3(tmp4[16]).GestureDetector, obj2);
  }
  return tmp8;
});
