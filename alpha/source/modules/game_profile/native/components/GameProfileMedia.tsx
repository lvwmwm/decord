// Module ID: 8897
// Function ID: 8898
// Name: GameProfileMedia
// Dependencies: [32, 19, 17, 5079, 1096, 21, 587, 8898, 5090, 558, 576, 8850, 8362, 6164, 8401, 1126, 8899, 8887, 504, 8600, 8902, 2]

// Module 8897 (GameProfileMedia)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import openMediaModal from "openMediaModal" /* 8362 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8850 */;
import GameProfileMediaSources from "GameProfileMediaSources" /* 8898 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 5079 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let unpackModuleId;
function keyExtractor(originalUrl, arg1) {
  return "" + originalUrl.originalUrl + "-" + arg1;
}
function getItemType(type) {
  if ("trailer" === type.type) {
    const _HermesInternal = HermesInternal;
    type = "trailer-" + type.originalUrl;
  } else {
    type = type.type;
  }
  return type;
}
let react = react_mod;
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = react_native);
let AccessibilityStore = AccessibilityStore_mod;
const NOOP = Constants.NOOP;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
let closure_14 = 2 * (GameProfileMediaSources.MEDIA_ITEM_MAX_WIDTH + PX_12);
let createStyles = createStyles_mod;
let obj = { container: obj2, list: { overflow: "visible" }, separator: { width: PX_12 }, listPadding: { width: PX_16 }, mediaItem: obj3, mediaImage: { width: "100%", height: "100%", resizeMode: "cover" }, mediaVideo: size, reducedMotionPoster: obj4, playIconWrapper: obj5 };
obj2 = { gap: nativeDefault.space.PX_12, marginHorizontal: -nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { maxWidth: GameProfileMediaSources.MEDIA_ITEM_MAX_WIDTH, maxHeight: GameProfileMediaSources.MEDIA_ITEM_MAX_HEIGHT, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
size = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj4 = { resizeMode: "cover" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { alignItems: "center", justifyContent: "center" };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function Separator() {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_15();
  if (cResult[0] !== tmp2.separator) {
    const obj2 = { style: tmp2.separator };
    const tmp6 = React4(hasOwnProperty, obj2);
    cResult[0] = tmp2.separator;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function Separator() {
  const obj = { style: closure_15().separator };
  return React4(hasOwnProperty, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function ListPadding() {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_15();
  if (cResult[0] !== tmp2.listPadding) {
    const obj2 = { style: tmp2.listPadding };
    const tmp6 = React4(hasOwnProperty, obj2);
    cResult[0] = tmp2.listPadding;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function ListPadding() {
  const obj = { style: closure_15().listPadding };
  return React4(hasOwnProperty, obj);
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ImageItem(sources) {
  let height;
  let index;
  let onScrollToIndex;
  let trackAction;
  let url;
  let width;
  let obj = index(trackAction[10]);
  const cResult = obj.c(21);
  ({ url, index } = sources);
  sources = sources.sources;
  const tmp = trackAction;
  trackAction = sources.trackAction;
  ({ width, height, onScrollToIndex } = sources);
  const setMediaModalOpen = sources.setMediaModalOpen;
  const tmp3 = closure_15();
  const ref = setMediaModalOpen.useRef(null);
  if (cResult[0] === index) {
    if (cResult[1] === onScrollToIndex) {
      if (cResult[2] === setMediaModalOpen) {
        if (cResult[3] === sources) {
          let tmp5;
          if (cResult[4] === trackAction) {
            tmp5 = cResult[5];
          }
          if (cResult[6] === height) {
            let tmp6;
            if (cResult[7] === width) {
              tmp6 = cResult[8];
            }
            if (cResult[9] === tmp3.mediaItem) {
              let tmp7;
              let tmp8;
              if (cResult[10] === tmp6) {
                tmp7 = cResult[11];
              }
              if (cResult[12] !== url) {
                let obj2 = { uri: url };
                cResult[12] = url;
                cResult[13] = obj2;
                tmp8 = obj2;
              } else {
                tmp8 = cResult[13];
              }
              if (cResult[14] === tmp3.mediaImage) {
                let tmp9;
                if (cResult[15] === tmp8) {
                  tmp9 = cResult[16];
                }
                if (cResult[17] === tmp5) {
                  if (cResult[18] === tmp7) {
                    let tmp13;
                    if (cResult[19] === tmp9) {
                      tmp13 = cResult[20];
                    }
                    return tmp13;
                  }
                }
                const obj3 = { ref, style: tmp7, onPress: tmp5, children: tmp9 };
                const tmp16 = closure_9(closure_6, obj3);
                cResult[17] = tmp5;
                cResult[18] = tmp7;
                cResult[19] = tmp9;
                cResult[20] = tmp16;
                tmp13 = tmp16;
              }
              const obj4 = { source: tmp8, style: tmp3.mediaImage };
              const tmp12 = closure_9(sources(tmp[13]), obj4);
              cResult[14] = tmp3.mediaImage;
              cResult[15] = tmp8;
              cResult[16] = tmp12;
              tmp9 = tmp12;
            }
            const items = [tmp3.mediaItem, tmp6];
            cResult[9] = tmp3.mediaItem;
            cResult[10] = tmp6;
            cResult[11] = items;
            tmp7 = items;
          }
          size = { width, height };
          cResult[6] = height;
          cResult[7] = width;
          cResult[8] = size;
          tmp6 = size;
        }
      }
    }
  }
  const fn = function o() {
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickImage);
    setMediaModalOpen(true);
    const obj = openMediaModal;
    const obj2 = {
      initialSources: sources,
      initialIndex: index,
      originViewOrOriginLayout: ref.current,
      analyticsSource: "game_profile",
      openAs: "action-sheet",
      onIndexChange(arg0) {
        return onScrollToIndex(arg0);
      },
      onClose() {
        return setMediaModalOpen(false);
      }
    };
    obj.openMediaModal(obj2);
  };
  cResult[0] = index;
  cResult[1] = onScrollToIndex;
  cResult[2] = setMediaModalOpen;
  cResult[3] = sources;
  cResult[4] = trackAction;
  cResult[5] = fn;
  tmp5 = fn;
}) : (function ImageItem(index) {
  let height;
  let items1;
  let obj2;
  let url;
  let width;
  index = index.index;
  const sources = index.sources;
  const trackAction = index.trackAction;
  const onScrollToIndex = index.onScrollToIndex;
  const setMediaModalOpen = index.setMediaModalOpen;
  ({ url, width, height } = index);
  const tmp = closure_15();
  const ref = setMediaModalOpen.useRef(null);
  const items = [sources, index, trackAction, onScrollToIndex, setMediaModalOpen];
  let obj = {
    ref,
    style: items1,
    onPress: setMediaModalOpen.useCallback(() => {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickImage);
      setMediaModalOpen(true);
      const obj = openMediaModal;
      const obj2 = {
        initialSources: sources,
        initialIndex: index,
        originViewOrOriginLayout: ref.current,
        analyticsSource: "game_profile",
        openAs: "action-sheet",
        onIndexChange(arg0) {
          return onScrollToIndex(arg0);
        },
        onClose() {
          return setMediaModalOpen(false);
        }
      };
      obj.openMediaModal(obj2);
    }, items),
    children: closure_9(sources(trackAction[13]), obj2)
  };
  items1 = [tmp.mediaItem, { width, height }];
  obj2 = { source: { uri: url }, style: tmp.mediaImage };
  return closure_9(closure_6, obj);
}));
let closure_21 = react.memo(function TrailerItem(sources) {
  let active;
  let height;
  let index;
  let intl;
  let items1;
  let items2;
  let obj5;
  let obj8;
  let posterUrl;
  let reducedMotion;
  let tmp8Result;
  let url;
  let width;
  ({ posterUrl, index } = sources);
  sources = sources.sources;
  const trackAction = sources.trackAction;
  const onScrollToIndex = sources.onScrollToIndex;
  const setMediaModalOpen = sources.setMediaModalOpen;
  ({ url, active, reducedMotion, width, height } = sources);
  const tmp = closure_15();
  setMediaModalOpen.useRef(null);
  const ref = setMediaModalOpen.useRef(0);
  const callback = setMediaModalOpen.useCallback((current) => {
    ref.current = current;
  }, []);
  const useRef = setMediaModalOpen.useRef;
  let obj = index(trackAction[14]);
  const ref1 = useRef(obj.createVideoControls(NOOP));
  const current = ref1.current;
  const subscribe = current.useSubscribe(callback, NOOP, NOOP);
  const items = [trackAction, sources, index, onScrollToIndex, setMediaModalOpen];
  let obj2 = {
    ref,
    style: items1,
    onPress: setMediaModalOpen.useCallback(() => {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickTrailer);
      setMediaModalOpen(true);
      const obj = openMediaModal;
      const obj2 = {
        initialSources: sources,
        initialIndex: index,
        initialIndexVideoStartTime: ref.current,
        originViewOrOriginLayout: ref.current,
        analyticsSource: "game_profile",
        openAs: "action-sheet",
        onIndexChange(arg0) {
          return onScrollToIndex(arg0);
        },
        onClose() {
          return setMediaModalOpen(false);
        }
      };
      obj.openMediaModal(obj2);
    }, items),
    accessibilityLabel: intl.string(index(trackAction[15]).t.oRN0Og),
    children: tmp8Result
  };
  items1 = [tmp.mediaItem, { width, height }];
  intl = index(trackAction[15]).intl;
  const tmp9 = ref;
  if (reducedMotion) {
    const obj4 = { source: obj5, style: tmp.reducedMotionPoster, accessibilityIgnoresInvertColors: true };
    const obj3 = { children: items2 };
    obj5 = { uri: posterUrl };
    items2 = [closure_9(sources(trackAction[13]), obj4), ];
    const obj6 = { style: tmp.playIconWrapper, pointerEvents: "none", children: closure_9(index(trackAction[16]).CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" }) };
    items2[1] = closure_9(ref, obj6);
    tmp8Result = closure_11(closure_10, obj3);
  } else {
    const obj7 = { style: tmp.mediaVideo, source: obj8, poster: posterUrl, posterResizeMode: "cover", paused: !active, muted: true, resizeMode: "cover", pauseWhileAppInactive: true, controls: ref1.current };
    obj8 = { uri: url };
    tmp8Result = tmp8(tmp4(tmp5[14]).VideoComponent, obj7);
  }
  return closure_9(tmp9, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileMedia(arg0) {
  let arr2;
  let closure_3;
  let game;
  let length;
  let minResult;
  let onScrollToIndex;
  let setMediaModalOpen;
  let tmp10;
  let tmp14;
  let tmp22;
  let tmp5;
  let tmp6;
  let trackAction;
  let tmp2 = dependencyMap;
  let obj = trackAction(576);
  const cResult = obj.c(44);
  ({ game, trackAction } = arg0);
  let tmp4 = closure_15();
  const obj2 = trackAction(8887);
  const obscured = obj2.useObscuredSurface().obscured;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function s() {
      return AccessibilityStore.useReducedMotion;
    };
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = trackAction(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  let tmp9 = _slicedToArray(react.useState(0), 2);
  [tmp10, dependencyMap] = tmp9;
  [, _slicedToArray] = react.useState(0);
  [, react] = react.useState(false);
  const ref = react.useRef(null);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult2 = trackAction(8898);
    const carouselPreviewPixelSize = tmpResult2.getCarouselPreviewPixelSize();
    cResult[2] = carouselPreviewPixelSize;
    tmp14 = carouselPreviewPixelSize;
  } else {
    tmp14 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(nativeEvent) {
        dependencyMap(nativeEvent.nativeEvent.layout.width);
      }
    }
    let num3 = 3;
    cResult[3] = F;
  } else {
    class F {
      constructor(nativeEvent) {
        dependencyMap(nativeEvent.nativeEvent.layout.width);
      }
    }
  }
  if (cResult[4] !== game) {
    class F {
      constructor(nativeEvent) {
        dependencyMap(nativeEvent.nativeEvent.layout.width);
      }
    }
    const mediaEntries = obj5.buildMediaEntries(game);
    cResult[4] = game;
    cResult[5] = mediaEntries;
    arr2 = mediaEntries;
  } else {
    class F {
      constructor(nativeEvent) {
        dependencyMap(nativeEvent.nativeEvent.layout.width);
      }
    }
  }
  const bound = Math.max(0, Math.min(tmp(8898).MEDIA_ITEM_MAX_WIDTH, tmp10 - PX_12 - 2 * PX_16));
  AccessibilityStore = min(tmp(8898).MEDIA_ITEM_MAX_HEIGHT, bound / tmp(8898).MEDIA_ITEM_ASPECT_RATIO);
  min(trackAction(8898).MEDIA_ITEM_MAX_HEIGHT, bound / trackAction(8898).MEDIA_ITEM_ASPECT_RATIO);
  const tmp18 = PX_12;
  const tmp19 = PX_16;
  if (cResult[6] !== arr2) {
    class F {
      constructor(nativeEvent) {
        dependencyMap(nativeEvent.nativeEvent.layout.width);
      }
    }
    let mediaViewerSources = obj6.buildMediaViewerSources(arr2, tmp14);
    cResult[6] = arr2;
    cResult[7] = mediaViewerSources;
    tmp22 = mediaViewerSources;
  } else {
    class F {
      constructor(nativeEvent) {
        dependencyMap(nativeEvent.nativeEvent.layout.width);
      }
    }
  }
  mediaViewerSources = tmp22;
  const result = (tmp10 - bound - 2 * tmp19) / 2;
  let closure_9 = result;
  const sum = bound + tmp18;
  let closure_10 = sum;
  if (cResult[8] === sum) {
    class F {
      constructor(nativeEvent) {
        dependencyMap(nativeEvent.nativeEvent.layout.width);
      }
    }
  }
  if (cResult[12] === sum) {
    class F {
      constructor(nativeEvent) {
        dependencyMap(nativeEvent.nativeEvent.layout.width);
      }
    }
    const mapped = arr2.map(Q);
    cResult[8] = sum;
    cResult[9] = arr2;
    cResult[10] = result;
    cResult[11] = mapped;
  }
  class Q {
    constructor(arg0, arg1) {
      return Math.max(0, arg1 * closure_10 - closure_9);
    }
  }
  cResult[12] = sum;
  cResult[13] = result;
  cResult[14] = Q;
}) : (function GameProfileMedia(game) {
  let closure_4;
  let obj6;
  let tmp30Result;
  game = game.game;
  const trackAction = game.trackAction;
  let stateFromStores;
  let first;
  react = undefined;
  let ref;
  let num;
  const tmp = num();
  let tmp3 = stateFromStores;
  let tmp2 = game;
  let obj = game(stateFromStores[17]);
  const obscured = obj.useObscuredSurface().obscured;
  const obj2 = game(stateFromStores[18]);
  const items = [ref];
  stateFromStores = obj2.useStateFromStores(items, () => ref.useReducedMotion);
  const tmp5 = first(react.useState(0), 2);
  first = tmp5[0];
  const obj3 = react;
  react = tmp5[1];
  const tmp7 = first(react.useState(0), 2);
  let closure_5 = tmp7[1];
  const first1 = tmp7[0];
  let tmp9 = first(react.useState(false), 2);
  const setMediaModalOpen = tmp9[1];
  const first2 = tmp9[0];
  ref = react.useRef(null);
  const memo = react.useMemo(() => {
    const obj = game(stateFromStores[7]);
    return obj.getCarouselPreviewPixelSize();
  }, []);
  const items1 = [game];
  const callback = react.useCallback((nativeEvent) => {
    closure_4(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo1 = react.useMemo(() => {
    const obj = GameProfileMediaSources;
    return obj.buildMediaEntries(game);
  }, items1);
  const items2 = [first];
  const memo2 = react.useMemo(() => Math.max(0, Math.min(GameProfileMediaSources.MEDIA_ITEM_MAX_WIDTH, first - PX_12 - 2 * PX_16)), items2);
  const items3 = [memo2];
  const memo3 = react.useMemo(() => {
    return min(GameProfileMediaSources.MEDIA_ITEM_MAX_HEIGHT, memo2 / GameProfileMediaSources.MEDIA_ITEM_ASPECT_RATIO);
  }, items3);
  const items4 = [memo1, memo];
  const memo4 = react.useMemo(() => {
    const obj = GameProfileMediaSources;
    return obj.buildMediaViewerSources(memo1, memo);
  }, items4);
  const items5 = [memo1, first, memo2];
  const memo5 = react.useMemo(() => memo1.map((item, index) => Math.max(0, index * (memo2 + memo4) - (first - memo2 - 2 * memo5) / 2)), items5);
  const items6 = [memo5];
  const items7 = [memo5];
  const callback1 = react.useCallback((nativeEvent) => {
    let arr2;
    if (0 !== memo5.length) {
      const x = nativeEvent.nativeEvent.contentOffset.x;
      const _Math2 = Math;
      num = 1;
      let absolute = Math.abs(arr[0] - x);
      let num2 = 0;
      let num3 = 0;
      if (1 < memo5.length) {
        do {
          let _Math = Math;
          arr2 = memo5;
          let absolute1 = Math.abs(memo5[num] - x);
          let tmp3 = absolute;
          let tmp4 = num2;
          if (absolute1 < absolute) {
            tmp3 = absolute1;
            tmp4 = num;
          }
          num = num + 1;
          absolute = tmp3;
          num2 = tmp4;
          num3 = tmp4;
        } while (num < arr2.length);
      }
      closure_5(num3);
    }
  }, items6);
  const callback2 = react.useCallback((arg0) => {
    if (null != memo5[arg0]) {
      const current = ref.current;
      if (current != null) {
        const obj = { offset: memo5[arg0], animated: false };
        current.scrollToOffset(obj);
      }
    }
    closure_5(arg0);
  }, items7);
  num = -1;
  if (!obscured) {
    num = -1;
    if (!first2) {
      num = -1;
      if (!stateFromStores) {
        num = first1;
      }
    }
  }
  const items8 = [num, memo4, trackAction, memo2, memo3, callback2, stateFromStores];
  const items9 = [num, memo2, memo3, memo4, stateFromStores];
  const callback3 = obj3.useCallback((arg0) => {
    let index;
    let item;
    let tmp9;
    ({ item, index } = arg0);
    if ("trailer" === item.type) {
      size = { url: null, posterUrl: null, active: index === num, reducedMotion: stateFromStores, index, sources: memo4, trackAction, width: memo2, height: memo3, onScrollToIndex: callback2, setMediaModalOpen };
      ({ originalUrl: obj2.url, previewUrl: obj2.posterUrl } = item);
      tmp9 = React4(closure_21, size);
    } else {
      const size1 = { url: item.previewUrl, index, sources: memo4, trackAction, width: memo2, height: memo3, onScrollToIndex: callback2, setMediaModalOpen };
      tmp9 = React4(closure_20, size1);
    }
    return tmp9;
  }, items8);
  let tmp30Result2 = null;
  if (0 !== memo1.length) {
    const obj4 = { style: tmp.container, onLayout: callback, children: tmp30Result };
    tmp30Result = memo2 > 0;
    const tmp31 = closure_5;
    if (tmp30Result) {
      const obj5 = { ref, horizontal: true, renderScrollComponent: trackAction(tmp3[20]), style: tmp.list, overrideProps: obj6, data: memo1, extraData: tmp21, renderItem: callback3, keyExtractor, getItemType, drawDistance: callback2, showsHorizontalScrollIndicator: false, ItemSeparatorComponent, ListHeaderComponent: ListFooterComponent, ListFooterComponent, decelerationRate: "fast", snapToOffsets: memo5, snapToStart: false, snapToEnd: false, onMomentumScrollEnd: callback1 };
      const FlashList = tmp2(tmp3[19]).FlashList;
      obj6 = { style: tmp.list };
      tmp30Result = tmp30(FlashList, obj5);
    }
    tmp30Result2 = tmp30(tmp31, obj4);
  }
  return tmp30Result2;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileMedia.tsx");

export default tmp8;
