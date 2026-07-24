// Module ID: 8675
// Function ID: 68610
// Name: ImageItem
// Dependencies: [57, 31, 27, 482, 33, 4130, 689, 8642, 8318, 8346, 478, 1450, 8670, 1426, 4369, 2]
// Exports: default

// Module 8675 (ImageItem)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { NOOP } from "sum";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function ImageItem(index) {
  let height;
  let url;
  let width;
  index = index.index;
  const sources = index.sources;
  const trackAction = index.trackAction;
  const onScrollToIndex = index.onScrollToIndex;
  const setMediaModalOpen = index.setMediaModalOpen;
  ({ url, width, height } = index);
  const tmp = _createForOfIteratorHelperLoose();
  const ref = setMediaModalOpen.useRef(null);
  const items = [sources, index, trackAction, onScrollToIndex, setMediaModalOpen];
  obj = {
    ref,
    style: items1,
    onPress: setMediaModalOpen.useCallback(() => {
      trackAction(index(trackAction[7]).GameProfileTrackActionActions.ClickImage);
      setMediaModalOpen(true);
      let obj = index(trackAction[8]);
      obj = {
        initialSources: sources,
        initialIndex: index,
        originViewOrOriginLayout: ref.current,
        analyticsSource: "game_profile",
        openAs: "action-sheet",
        onIndexChange(arg0) {
          return outer1_3(arg0);
        },
        onClose() {
          return outer1_4(false);
        }
      };
      obj.openMediaModal(obj);
    }, items),
    children: <closure_7 {...obj} />
  };
  items1 = [tmp.mediaItem, { width, height }];
  obj = { source: { uri: url }, style: tmp.mediaImage };
  return <closure_8 source={{ uri: url }} style={tmp.mediaImage} />;
}
function TrailerItem(active) {
  let height;
  let posterUrl;
  let url;
  let width;
  active = active.active;
  const index = active.index;
  const sources = active.sources;
  const trackAction = active.trackAction;
  const onScrollToIndex = active.onScrollToIndex;
  const setMediaModalOpen = active.setMediaModalOpen;
  ({ url, posterUrl, width, height } = active);
  const tmp = _createForOfIteratorHelperLoose();
  const ref = onScrollToIndex.useRef(null);
  let closure_7 = onScrollToIndex.useRef(0);
  const tmp3 = trackAction(onScrollToIndex.useState(0), 2);
  let closure_8 = tmp3[1];
  const callback = onScrollToIndex.useCallback((current) => {
    closure_7.current = current;
  }, []);
  let obj = active(sources[9]);
  ref1 = onScrollToIndex.useRef(obj.createVideoControls(ref1));
  let current = ref1.current;
  const subscribe = current.useSubscribe(callback, ref1, ref1);
  const items = [active];
  const effect = onScrollToIndex.useEffect(() => {
    if (obj.isAndroid()) {
      if (!active) {
        callback((arg0) => arg0 + 1);
      }
    }
    const current = ref1.current;
    current.seek(0);
  }, items);
  const items1 = [trackAction, sources, index, onScrollToIndex, setMediaModalOpen];
  obj = {
    ref,
    style: items2,
    onPress: onScrollToIndex.useCallback(() => {
      trackAction(active(sources[7]).GameProfileTrackActionActions.ClickTrailer);
      setMediaModalOpen(true);
      let obj = active(sources[8]);
      obj = {
        initialSources: sources,
        initialIndex: index,
        initialIndexVideoStartTime: ref.current,
        originViewOrOriginLayout: ref.current,
        analyticsSource: "game_profile",
        openAs: "action-sheet",
        onIndexChange(arg0) {
          return outer1_4(arg0);
        },
        onClose() {
          return outer1_5(false);
        }
      };
      obj.openMediaModal(obj);
    }, items1)
  };
  items2 = [tmp.mediaItem, { width, height }];
  obj = { style: tmp.mediaVideo, source: { uri: url }, poster: posterUrl, paused: !active, muted: true, resizeMode: "cover", pauseWhileAppInactive: true, controls: ref1.current };
  let combined;
  if (obj4.isAndroid()) {
    const _HermesInternal = HermesInternal;
    combined = "render-" + tmp3[0];
  }
  obj.children = jsx(active(sources[9]).VideoComponent, { style: tmp.mediaVideo, source: { uri: url }, poster: posterUrl, paused: !active, muted: true, resizeMode: "cover", pauseWhileAppInactive: true, controls: ref1.current }, combined);
  return <closure_8 style={tmp.mediaVideo} source={{ uri: url }} poster={posterUrl} paused={!active} muted resizeMode="cover" pauseWhileAppInactive controls={ref1.current} />;
}
({ View: closure_5, ScrollView: closure_6, Image: closure_7, Pressable: closure_8 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { gap: require("_createForOfIteratorHelperLoose").space.PX_12, marginHorizontal: -require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.scrollView = { flexDirection: "row", overflow: "visible" };
_createForOfIteratorHelperLoose.scrollViewContent = { gap: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { maxWidth: 366, maxHeight: 200, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, overflow: "hidden" };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_HIGH);
_createForOfIteratorHelperLoose.mediaItem = obj2;
_createForOfIteratorHelperLoose.mediaImage = { width: "100%", height: "100%", resizeMode: "cover" };
const obj3 = { width: "100%", height: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BLACK };
_createForOfIteratorHelperLoose.mediaVideo = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { gap: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/game_profile/native/components/GameProfileMedia.tsx");

export default function GameProfileMedia(game) {
  let NOOP;
  let closure_6;
  let closure_7;
  let closure_8;
  game = game.game;
  const trackAction = game.trackAction;
  let tmp = first1();
  width = trackAction(width[11])().width;
  let obj = game(width[12]);
  const obscured = obj.useObscuredSurface().obscured;
  let tmp2 = obscured(first.useState(0), 2);
  first = tmp2[0];
  let closure_5 = tmp2[1];
  [closure_6, closure_7] = obscured(first.useState(0), 2);
  let tmp4 = obscured(first.useState(0), 2);
  [closure_8, NOOP] = obscured(first.useState(false), 2);
  let tmp6 = null;
  const ref = first.useRef(null);
  let items = [width];
  const tmp8 = obscured(first.useMemo(() => {
    const bound = Math.min(width, 1920);
    const obj = game(width[13]);
    const bestMediaProxySize = obj.getBestMediaProxySize(bound * game(width[13]).getDevicePixelRatio());
    const items = [bestMediaProxySize, bestMediaProxySize / 1.83];
    return items;
  }, items), 2);
  first1 = tmp8[0];
  const ImageItem = tmp10;
  const items1 = [game, first1, width];
  const callback = first.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = first.useMemo(() => {
    if (null == game) {
      let items = [];
    } else {
      let trailers = game.trailers;
      if (null == trailers) {
        trailers = [];
      }
      items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(trailers.map((application_id) => {
        let id;
        const obj = { type: "trailer", url: game(width[14]).getAssetURL(application_id.application_id, application_id.id, 1920, "mp4") };
        const obj2 = game(width[14]);
        ({ application_id, id } = application_id);
        obj.thumbnailUrl = game(width[14]).getAssetURL(application_id, id, Math.min(outer1_2, 1920), "webp");
        return obj;
      }), 0);
      let screenshotUrls = game.screenshotUrls;
      if (null == screenshotUrls) {
        screenshotUrls = [];
      }
      arraySpreadResult = HermesBuiltin.arraySpread(screenshotUrls.map((url) => ({ type: "image", url, thumbnailUrl: url.replace(/size=\d+/g, "size=" + outer1_11) })), arraySpreadResult);
    }
    return items;
  }, items1);
  const items2 = [first];
  const memo1 = first.useMemo(() => {
    const diff = first - trackAction(width[6]).space.PX_12;
    return Math.max(0, Math.min(366, diff - 2 * trackAction(width[6]).space.PX_16));
  }, items2);
  const items3 = [memo1];
  let closure_15 = first.useMemo(() => Math.min(200, memo1 / 1.83), items3);
  const items4 = [memo, first1, tmp8[1]];
  let closure_16 = first.useMemo(() => memo.map((uri, mediaIndex) => {
    let obj = { uri: uri.url };
    let url;
    if ("trailer" === uri.type) {
      url = uri.url;
    }
    obj.videoURI = url;
    obj.mediaIndex = mediaIndex;
    obj.width = 1920;
    obj.height = 1080;
    obj = { width: outer1_11, height: outer1_12, uri: uri.thumbnailUrl };
    obj.thumbnail = obj;
    obj.accessoryType = "embed";
    obj.disableDownload = true;
    return obj;
  }), items4);
  const items5 = [memo, first, memo1];
  const memo2 = first.useMemo(() => {
    const diff = first - memo1;
    let closure_0 = (diff - 2 * trackAction(width[6]).space.PX_16) / 2;
    let closure_1 = memo1 + trackAction(width[6]).space.PX_12;
    return memo.map((arg0, arg1) => Math.max(0, arg1 * closure_1 - closure_0));
  }, items5);
  const items6 = [memo2];
  const items7 = [memo2];
  const callback1 = first.useCallback((nativeEvent) => {
    if (0 !== memo2.length) {
      const x = nativeEvent.nativeEvent.contentOffset.x;
      const _Math2 = Math;
      let absolute = Math.abs(memo2[0] - x);
      let num2 = 1;
      let num = 0;
      let num3 = 0;
      if (1 < memo2.length) {
        do {
          let _Math = Math;
          let tmp = memo2;
          let absolute1 = Math.abs(memo2[num2] - x);
          if (absolute1 < absolute) {
            num = num2;
            absolute = absolute1;
          }
          num2 = num2 + 1;
          let tmp4 = memo2;
          num3 = num;
        } while (num2 < memo2.length);
      }
      callback2(num3);
    }
  }, items6);
  let closure_18 = first.useCallback((arg0) => {
    const current = ref.current;
    if (null != current) {
      const obj = { x: memo2[arg0], y: 0, animated: false };
      current.scrollTo(obj);
    }
    callback2(arg0);
  }, items7);
  if (0 !== memo.length) {
    obj = { style: tmp.container, onLayout: callback };
    obj = { ref, horizontal: true, showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, decelerationRate: "fast" };
    ({ scrollView: obj3.style, scrollViewContent: obj3.contentContainerStyle } = tmp);
    obj.snapToOffsets = memo2;
    obj.snapToStart = false;
    obj.snapToEnd = false;
    obj.onMomentumScrollEnd = callback1;
    obj.children = memo.map((type, index) => {
      if ("trailer" === type.type) {
        let obj = {};
        ({ url: obj.url, thumbnailUrl: obj.posterUrl } = type);
        let tmp4 = !obscured;
        if (tmp4) {
          tmp4 = !closure_8;
        }
        if (tmp4) {
          tmp4 = closure_6 === index;
        }
        obj.active = tmp4;
        obj.index = index;
        obj.sources = closure_16;
        obj.trackAction = trackAction;
        obj.width = memo1;
        obj.height = closure_15;
        obj.onScrollToIndex = closure_18;
        obj.setMediaModalOpen = closure_9;
        const _HermesInternal = HermesInternal;
        let tmpResult = ref(memo, obj, "" + type.url + "-" + index);
        const tmp = ref;
        const tmp2 = memo;
      } else {
        obj = { url: type.url, index, sources: closure_16, trackAction, width: memo1, height: closure_15, onScrollToIndex: closure_18, setMediaModalOpen: closure_9 };
        const _HermesInternal2 = HermesInternal;
        tmpResult = ref(closure_12, obj, "" + type.url + "-" + index);
      }
      return tmpResult;
    });
    obj.children = ref(closure_6, obj);
    tmp6 = ref(closure_5, obj);
  }
  return tmp6;
};
