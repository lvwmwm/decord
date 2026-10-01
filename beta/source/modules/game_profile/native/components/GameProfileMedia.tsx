// Module ID: 8174
// Function ID: 8175
// Name: GameProfileMedia
// Dependencies: [32, 19, 17, 4825, 1085, 21, 576, 8175, 4836, 8139, 7707, 7755, 1115, 8176, 8165, 504, 8179, 8180, 2]
// Exports: default

// Module 8174 (GameProfileMedia)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import openMediaModal from "openMediaModal" /* 7707 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8139 */;
import GameProfileMediaSources from "GameProfileMediaSources" /* 8175 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let c10;
let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let unpackModuleId;
function Separator() {
  const obj = { style: closure_16().separator };
  return authStore(hasOwnProperty, obj);
}
function ListPadding() {
  const obj = { style: closure_16().listPadding };
  return authStore(hasOwnProperty, obj);
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
({ View: hasOwnProperty, Image: metroRequire, Pressable: metroImportDefault, StyleSheet } = react_native);
const NOOP = Constants.NOOP;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
let closure_15 = 2 * (GameProfileMediaSources.MEDIA_ITEM_MAX_WIDTH + PX_12);
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
let closure_16 = createStyles(obj);
let closure_21 = react.memo((index) => {
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
  const tmp = closure_16();
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
    children: closure_10(closure_6, obj2)
  };
  items1 = [tmp.mediaItem, { width, height }];
  obj2 = { source: { uri: url }, style: tmp.mediaImage };
  return closure_10(closure_7, obj);
});
let closure_22 = react.memo((sources) => {
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
  const tmp = closure_16();
  setMediaModalOpen.useRef(null);
  const ref = setMediaModalOpen.useRef(0);
  const callback = setMediaModalOpen.useCallback((current) => {
    ref.current = current;
  }, []);
  const useRef = setMediaModalOpen.useRef;
  let obj = index(trackAction[11]);
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
    accessibilityLabel: intl.string(index(trackAction[12]).t.oRN0Og),
    children: tmp8Result
  };
  items1 = [tmp.mediaItem, { width, height }];
  intl = index(trackAction[12]).intl;
  const tmp9 = closure_7;
  if (reducedMotion) {
    const obj4 = { source: obj5, style: tmp.reducedMotionPoster, accessibilityIgnoresInvertColors: true };
    const obj3 = { children: items2 };
    obj5 = { uri: posterUrl };
    items2 = [closure_10(ref, obj4), ];
    const obj6 = { style: tmp.playIconWrapper, pointerEvents: "none", children: closure_10(index(trackAction[13]).CirclePlayIcon, { size: "md", color: "white", secondaryColor: "black" }) };
    items2[1] = closure_10(ref, obj6);
    tmp8Result = closure_12(closure_11, obj3);
  } else {
    const obj7 = { style: tmp.mediaVideo, source: obj8, poster: posterUrl, posterResizeMode: "cover", paused: !active, muted: true, resizeMode: "cover", pauseWhileAppInactive: true, controls: ref1.current };
    obj8 = { uri: url };
    tmp8Result = tmp8(tmp4(tmp5[11]).VideoComponent, obj7);
  }
  return closure_10(tmp9, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileMedia.tsx");

export default function GameProfileMedia(game) {
  let closure_4;
  let obj6;
  let tmp30Result;
  game = game.game;
  const trackAction = game.trackAction;
  let stateFromStores;
  let first;
  react = undefined;
  let memo;
  const tmp = closure_16();
  let tmp3 = stateFromStores;
  let tmp2 = game;
  let obj = game(stateFromStores[14]);
  const obscured = obj.useObscuredSurface().obscured;
  const obj2 = game(stateFromStores[15]);
  const items = [memo];
  stateFromStores = obj2.useStateFromStores(items, () => memo.useReducedMotion);
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
  const ref = react.useRef(null);
  memo = react.useMemo(() => {
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
  const memo5 = react.useMemo(() => memo1.map((item, index) => Math.max(0, index * (memo2 + memo5) - (first - memo2 - 2 * callback2) / 2)), items5);
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
      tmp9 = authStore(closure_22, size);
    } else {
      const size1 = { url: item.previewUrl, index, sources: memo4, trackAction, width: memo2, height: memo3, onScrollToIndex: callback2, setMediaModalOpen };
      tmp9 = authStore(closure_21, size1);
    }
    return tmp9;
  }, items8);
  let tmp30Result2 = null;
  if (0 !== memo1.length) {
    const obj4 = { style: tmp.container, onLayout: callback, children: tmp30Result };
    tmp30Result = memo2 > 0;
    const tmp31 = closure_5;
    if (tmp30Result) {
      const obj5 = { ref, horizontal: true, renderScrollComponent: trackAction(tmp3[17]), style: tmp.list, overrideProps: obj6, data: memo1, extraData: tmp21, renderItem: callback3, keyExtractor, getItemType, drawDistance: num, showsHorizontalScrollIndicator: false, ItemSeparatorComponent: Separator, ListHeaderComponent: ListPadding, ListFooterComponent: ListPadding, decelerationRate: "fast", snapToOffsets: memo5, snapToStart: false, snapToEnd: false, onMomentumScrollEnd: callback1 };
      const FlashList = tmp2(tmp3[16]).FlashList;
      obj6 = { style: tmp.list };
      tmp30Result = tmp30(FlashList, obj5);
    }
    tmp30Result2 = tmp30(tmp31, obj4);
  }
  return tmp30Result2;
};
