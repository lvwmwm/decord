// Module ID: 9360
// Function ID: 9361
// Name: GameProfileMedia
// Dependencies: [32, 19, 17, 5010, 1083, 21, 575, 9361, 5009, 9320, 8825, 5712, 8864, 1114, 9362, 9348, 504, 9365, 8826, 7288, 9366, 2]
// Exports: default

// Module 9360 (GameProfileMedia)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import intl2 from "intl" /* 1114 */;
import openMediaModal from "openMediaModal" /* 8825 */;
import useMediaViewerSources from "useMediaViewerSources" /* 8826 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9320 */;
import GameProfileMediaSources from "GameProfileMediaSources" /* 9361 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let nativeEvent;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let items;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let unpackModuleId;
function Separator() {
  const obj = { style: closure_15().separator };
  return React4(hasOwnProperty, obj);
}
function ListPadding() {
  const obj = { style: closure_15().listPadding };
  return React4(hasOwnProperty, obj);
}
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
const NOOP = Constants.NOOP;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
let closure_14 = 2 * (GameProfileMediaSources.MEDIA_ITEM_MAX_WIDTH + PX_12);
let createStyles = createStyles_mod;
let obj = { container: obj2, list: { overflow: "visible" }, separator: { width: PX_12 }, listPadding: { width: PX_16 }, mediaItem: obj3, mediaImage: { width: "100%", height: "100%", resizeMode: "cover" }, portraitImage: { resizeMode: "contain" }, imageBackdrop: obj4, mediaVideo: size, reducedMotionPoster: obj5, playIconWrapper: obj6 };
obj2 = { gap: nativeDefault.space.PX_12, marginHorizontal: -nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { maxWidth: GameProfileMediaSources.MEDIA_ITEM_MAX_WIDTH, maxHeight: GameProfileMediaSources.MEDIA_ITEM_MAX_HEIGHT, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj4 = { transform: items };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
items = [{ scale: 1.2 }];
size = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj5 = { resizeMode: "cover" };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj6 = { alignItems: "center", justifyContent: "center" };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
let closure_15 = createStyles(obj);
let closure_20 = react.memo(function ImageItem(index) {
  let accessibilityLabel;
  let height;
  let items2;
  let items3;
  let items4;
  let obj3;
  let recordDimensions;
  let url;
  let width;
  ({ url, recordDimensions } = index);
  index = index.index;
  const sources = index.sources;
  const trackAction = index.trackAction;
  const onScrollToIndex = index.onScrollToIndex;
  const setMediaModalOpen = index.setMediaModalOpen;
  ({ accessibilityLabel, width, height } = index);
  const tmp = closure_15();
  const ref = onScrollToIndex.useRef(null);
  size = sources[index];
  let portraitImage = size.height > size.width;
  const items = [size.uri, recordDimensions];
  const items1 = [sources, index, trackAction, onScrollToIndex, setMediaModalOpen];
  const callback = onScrollToIndex.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    let source = nativeEvent;
    if ("source" in nativeEvent) {
      source = nativeEvent.source;
    }
    size = { width: source.width, height: source.height };
    recordDimensions(size.uri, size);
  }, items);
  let obj = {
    ref,
    style: items2,
    onPress: onScrollToIndex.useCallback(() => {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickImage);
      setMediaModalOpen(true);
      const obj = openMediaModal;
      const obj2 = {
        initialSources: sources,
        initialIndex: index,
        originViewOrOriginLayout: ref.current,
        analyticsSource: "game_profile",
        openAs: "action-sheet",
        disableMediaOverlayButton: true,
        shareable: false,
        onIndexChange(arg0) {
          return onScrollToIndex(arg0);
        },
        onClose() {
          return setMediaModalOpen(false);
        }
      };
      obj.openMediaModal(obj2);
    }, items1),
    accessibilityLabel,
    children: items3
  };
  items2 = [tmp.mediaItem, { width, height }];
  let tmp6 = portraitImage;
  const tmp4 = closure_10;
  const tmp5 = ref;
  if (portraitImage) {
    let obj2 = { source: obj3, style: tmp.imageBackdrop, resizeMode: "cover", blurRadius: 24, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    obj3 = { uri: url };
    tmp6 = closure_9(index(sources[11]), obj2);
  }
  items3 = [tmp6, ];
  const obj4 = { source: { uri: url }, style: items4, onLoad: callback, accessible: false };
  items4 = [tmp.mediaImage, ];
  const tmp10 = closure_9;
  const tmp11 = index(sources[11]);
  if (portraitImage) {
    portraitImage = tmp.portraitImage;
  }
  items4[1] = portraitImage;
  items3[1] = tmp10(tmp11, obj4);
  return tmp4(tmp5, obj);
});
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
  let obj = index(trackAction[12]);
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
        disableMediaOverlayButton: true,
        shareable: false,
        onIndexChange(arg0) {
          return onScrollToIndex(arg0);
        },
        onClose() {
          return setMediaModalOpen(false);
        }
      };
      obj.openMediaModal(obj2);
    }, items),
    accessibilityLabel: intl.string(index(trackAction[13]).t.oRN0Og),
    children: tmp8Result
  };
  items1 = [tmp.mediaItem, { width, height }];
  intl = index(trackAction[13]).intl;
  const tmp9 = ref;
  if (reducedMotion) {
    const obj4 = { source: obj5, style: tmp.reducedMotionPoster, accessibilityIgnoresInvertColors: true };
    const obj3 = { children: items2 };
    obj5 = { uri: posterUrl };
    items2 = [closure_9(sources(trackAction[11]), obj4), ];
    const obj6 = { style: tmp.playIconWrapper, pointerEvents: "none", children: closure_9(index(trackAction[14]).CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" }) };
    items2[1] = closure_9(ref, obj6);
    tmp8Result = closure_10(closure_11, obj3);
  } else {
    const obj7 = { style: tmp.mediaVideo, source: obj8, poster: posterUrl, posterResizeMode: "cover", paused: !active, muted: true, resizeMode: "cover", pauseWhileAppInactive: true, controls: ref1.current };
    obj8 = { uri: url };
    tmp8Result = tmp8(tmp4(tmp5[12]).VideoComponent, obj7);
  }
  return closure_9(tmp9, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileMedia.tsx");

export default function GameProfileMedia(game) {
  let closure_4;
  let obj6;
  let tmp34Result;
  game = game.game;
  const trackAction = game.trackAction;
  let stateFromStores;
  let first;
  react = undefined;
  let setMediaModalOpen;
  let memo4;
  let tmp = memo4();
  let tmp3 = stateFromStores;
  let tmp2 = game;
  let obj = game(stateFromStores[15]);
  const obscured = obj.useObscuredSurface().obscured;
  const obj2 = game(stateFromStores[16]);
  const items = [setMediaModalOpen];
  stateFromStores = obj2.useStateFromStores(items, () => setMediaModalOpen.useReducedMotion);
  const tmp6 = first(react.useState(0), 2);
  first = tmp6[0];
  const tmp5 = react;
  react = tmp6[1];
  const tmp8 = first(react.useState(0), 2);
  let closure_5 = tmp8[1];
  const first1 = tmp8[0];
  const tmp10 = first(react.useState(false), 2);
  const first2 = tmp10[0];
  setMediaModalOpen = tmp10[1];
  const ref = react.useRef(null);
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
  const obj3 = game(stateFromStores[17]);
  const gameProfileMediaDimensions = obj3.useGameProfileMediaDimensions(game(stateFromStores[7]).MEDIA_VIEWER_ITEM_SIZE.width);
  const dimensions = gameProfileMediaDimensions.dimensions;
  const recordDimensions = gameProfileMediaDimensions.recordDimensions;
  const items2 = [first];
  const memo2 = react.useMemo(() => Math.max(0, Math.min(GameProfileMediaSources.MEDIA_ITEM_MAX_WIDTH, first - PX_12 - 2 * PX_16)), items2);
  const items3 = [memo2];
  const memo3 = react.useMemo(() => {
    return min(GameProfileMediaSources.MEDIA_ITEM_MAX_HEIGHT, memo2 / GameProfileMediaSources.MEDIA_ITEM_ASPECT_RATIO);
  }, items3);
  const items4 = [memo1, memo, dimensions];
  memo4 = react.useMemo(() => {
    const obj = GameProfileMediaSources;
    return obj.buildMediaViewerSources(memo1, memo, dimensions);
  }, items4);
  const items5 = [memo4, first2];
  const effect = react.useEffect(() => {
    const tmp = first2;
    if (tmp) {
      const obj = useMediaViewerSources;
      const result = obj.updateMediaViewerSources(memo4);
    }
  }, items5);
  const items6 = [memo1, first, memo2];
  const memo5 = react.useMemo(() => memo1.map((item, index) => Math.max(0, index * (closure_1_13 + recordDimensions) - (first - closure_1_13 - 2 * memo2) / 2)), items6);
  const items7 = [memo5];
  const items8 = [memo5];
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
  }, items7);
  const callback2 = react.useCallback((arg0) => {
    if (null != memo5[arg0]) {
      const current = ref.current;
      if (current != null) {
        const obj = { offset: memo5[arg0], animated: false };
        current.scrollToOffset(obj);
      }
    }
    closure_5(arg0);
  }, items8);
  let num = -1;
  if (!obscured) {
    num = -1;
    if (!first2) {
      num = -1;
      if (!stateFromStores) {
        num = first1;
      }
    }
  }
  const items9 = [num, memo4, trackAction, memo2, memo3, callback2, stateFromStores, recordDimensions, ];
  let name;
  const useCallback = tmp5.useCallback;
  if (game != null) {
    name = game.name;
  }
  items9[8] = name;
  const items10 = [num, memo2, memo3, memo4, stateFromStores];
  const callback3 = useCallback((arg0) => {
    let COYYrn;
    let formatToPlainString;
    let index;
    let item;
    let obj;
    let tmp20Result;
    ({ item, index } = arg0);
    if ("trailer" === item.type) {
      size = { url: null, posterUrl: null, active: index === num, reducedMotion: stateFromStores, index, sources: memo4, trackAction, width: memo2, height: memo3, onScrollToIndex: callback2, setMediaModalOpen };
      ({ originalUrl: obj2.url, previewUrl: obj2.posterUrl } = item);
      tmp20Result = React4(closure_21, size);
    } else {
      const size1 = { url: item.previewUrl, accessibilityLabel: formatToPlainString(COYYrn, obj), recordDimensions, index, sources: memo4, trackAction, width: memo2, height: memo3, onScrollToIndex: callback2, setMediaModalOpen };
      const intl = intl2.intl;
      formatToPlainString = intl.formatToPlainString;
      let name;
      COYYrn = intl2.t.COYYrn;
      const tmp20 = React4;
      const tmp21 = closure_20;
      if (game != null) {
        name = game.name;
      }
      obj = { game: name };
      tmp20Result = tmp20(tmp21, size1);
    }
    return tmp20Result;
  }, items9);
  let tmp34Result2 = null;
  if (0 !== memo1.length) {
    const obj4 = { style: tmp.container, onLayout: callback, children: tmp34Result };
    tmp34Result = memo2 > 0;
    const tmp35 = closure_5;
    if (tmp34Result) {
      const obj5 = { ref, horizontal: true, renderScrollComponent: trackAction(tmp3[20]), style: tmp.list, overrideProps: obj6, data: memo1, extraData: tmp25, renderItem: callback3, keyExtractor: num, getItemType, drawDistance: memo3, showsHorizontalScrollIndicator: false, ItemSeparatorComponent: memo5, ListHeaderComponent: callback2, ListFooterComponent: callback2, decelerationRate: "fast", snapToOffsets: memo5, snapToStart: false, snapToEnd: false, onMomentumScrollEnd: callback1 };
      const FlashList = tmp2(tmp3[19]).FlashList;
      obj6 = { style: tmp.list };
      tmp34Result = tmp34(FlashList, obj5);
    }
    tmp34Result2 = tmp34(tmp35, obj4);
  }
  return tmp34Result2;
};
