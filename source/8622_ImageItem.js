// Module ID: 8622
// Function ID: 68315
// Name: ImageItem
// Dependencies: []
// Exports: default

// Module 8622 (ImageItem)
function ImageItem(index) {
  let height;
  let url;
  let width;
  index = index.index;
  const arg1 = index;
  const sources = index.sources;
  const importDefault = sources;
  const trackAction = index.trackAction;
  const dependencyMap = trackAction;
  const onScrollToIndex = index.onScrollToIndex;
  let closure_3 = onScrollToIndex;
  const setMediaModalOpen = index.setMediaModalOpen;
  const React = setMediaModalOpen;
  ({ url, width, height } = index);
  const tmp = callback2();
  const ref = React.useRef(null);
  const items = [sources, index, trackAction, onScrollToIndex, setMediaModalOpen];
  let obj = {
    ref,
    style: items1,
    onPress: React.useCallback(() => {
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
          return callback(arg0);
        },
        onClose() {
          return callback2(false);
        }
      };
      obj.openMediaModal(obj);
    }, items),
    children: <closure_7 {...obj} />
  };
  const items1 = [tmp.mediaItem, { width, height }];
  obj = { source: { uri: url }, style: tmp.mediaImage };
  return <closure_8 {...obj} />;
}
function TrailerItem(active) {
  let height;
  let posterUrl;
  let url;
  let width;
  active = active.active;
  const arg1 = active;
  const index = active.index;
  const importDefault = index;
  const sources = active.sources;
  const dependencyMap = sources;
  const trackAction = active.trackAction;
  let callback = trackAction;
  const onScrollToIndex = active.onScrollToIndex;
  const React = onScrollToIndex;
  const setMediaModalOpen = active.setMediaModalOpen;
  ({ url, posterUrl, width, height } = active);
  const tmp = callback2();
  const ref = React.useRef(null);
  let closure_7 = React.useRef(0);
  const tmp3 = callback(React.useState(0), 2);
  let closure_8 = tmp3[1];
  callback = React.useCallback((current) => {
    closure_7.current = current;
  }, []);
  let obj = arg1(dependencyMap[9]);
  const ref1 = React.useRef(obj.createVideoControls(NOOP));
  const NOOP = ref1;
  const current = ref1.current;
  const subscribe = current.useSubscribe(callback, NOOP, NOOP);
  const items = [active];
  const effect = React.useEffect(() => {
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
    onPress: React.useCallback(() => {
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
          return callback(arg0);
        },
        onClose() {
          return callback2(false);
        }
      };
      obj.openMediaModal(obj);
    }, items1)
  };
  const items2 = [tmp.mediaItem, { width, height }];
  obj = { style: tmp.mediaVideo, source: { uri: url }, poster: posterUrl, paused: !active, muted: true, resizeMode: "cover", pauseWhileAppInactive: true, controls: ref1.current };
  let combined;
  if (obj4.isAndroid()) {
    const _HermesInternal = HermesInternal;
    combined = "render-" + tmp3[0];
  }
  obj.children = jsx(arg1(dependencyMap[9]).VideoComponent, obj, combined);
  return <closure_8 {...obj} />;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6, Image: closure_7, Pressable: closure_8 } = arg1(dependencyMap[2]));
const NOOP = arg1(dependencyMap[3]).NOOP;
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { gap: importDefault(dependencyMap[6]).space.PX_12, marginHorizontal: -importDefault(dependencyMap[6]).space.PX_16 };
obj.container = obj;
obj.scrollView = {};
const tmp2 = arg1(dependencyMap[2]);
obj.scrollViewContent = { gap: importDefault(dependencyMap[6]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
const obj1 = { gap: importDefault(dependencyMap[6]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
const merged = Object.assign(importDefault(dependencyMap[6]).shadows.SHADOW_HIGH);
obj.mediaItem = { borderRadius: importDefault(dependencyMap[6]).radii.lg };
obj.mediaImage = { "Null": "5489cb913a06f6a88877637630ce77b7", "Null": "pl.messages.5489cb913a06f6a88877637630ce77b7.compiled.messages", "Null": "jsona" };
const obj3 = { aze: 30271555, azj: 22092032, backgroundColor: importDefault(dependencyMap[6]).colors.BLACK };
obj.mediaVideo = obj3;
let closure_11 = obj.createStyles(obj);
const obj2 = { borderRadius: importDefault(dependencyMap[6]).radii.lg };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/game_profile/native/components/GameProfileMedia.tsx");

export default function GameProfileMedia(game) {
  game = game.game;
  const arg1 = game;
  const importDefault = game.trackAction;
  const tmp = callback2();
  const width = importDefault(dependencyMap[11])().width;
  const dependencyMap = width;
  let obj = arg1(dependencyMap[12]);
  let callback = obj.useObscuredSurface().obscured;
  const tmp2 = callback(React.useState(0), 2);
  const first = tmp2[0];
  const React = first;
  let closure_5 = tmp2[1];
  [closure_6, closure_7] = callback(React.useState(0), 2);
  const tmp4 = callback(React.useState(0), 2);
  [closure_8, closure_9] = callback(React.useState(false), 2);
  let tmp6 = null;
  const ref = React.useRef(null);
  const jsx = ref;
  const items = [width];
  const tmp8 = callback(React.useMemo(() => {
    const bound = Math.min(width, 1920);
    const obj = game(width[13]);
    const bestMediaProxySize = obj.getBestMediaProxySize(bound * game(width[13]).getDevicePixelRatio());
    const items = [bestMediaProxySize, bestMediaProxySize / 1.83];
    return items;
  }, items), 2);
  const first1 = tmp8[0];
  const callback2 = first1;
  const ImageItem = tmp10;
  const items1 = [game, first1, width];
  callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = React.useMemo(() => {
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
        const obj = { type: "trailer", url: callback(closure_2[14]).getAssetURL(application_id.application_id, application_id.id, 1920, "mp4") };
        const obj2 = callback(closure_2[14]);
        ({ application_id, id } = application_id);
        obj.thumbnailUrl = callback(closure_2[14]).getAssetURL(application_id, id, Math.min(closure_2, 1920), "webp");
        return obj;
      }), 0);
      let screenshotUrls = game.screenshotUrls;
      if (null == screenshotUrls) {
        screenshotUrls = [];
      }
      arraySpreadResult = HermesBuiltin.arraySpread(screenshotUrls.map((url) => ({ type: "image", url, thumbnailUrl: url.replace(/size=\d+/g, "size=" + closure_11) })), arraySpreadResult);
    }
    return items;
  }, items1);
  const TrailerItem = memo;
  const items2 = [first];
  const memo1 = React.useMemo(() => {
    const diff = first - trackAction(width[6]).space.PX_12;
    return Math.max(0, Math.min(366, diff - 2 * trackAction(width[6]).space.PX_16));
  }, items2);
  const items3 = [memo1];
  let closure_15 = React.useMemo(() => Math.min(200, memo1 / 1.83), items3);
  const items4 = [memo, first1, tmp8[1]];
  let closure_16 = React.useMemo(() => memo.map((uri, mediaIndex) => {
    let obj = { uri: uri.url };
    let url;
    if ("trailer" === uri.type) {
      url = uri.url;
    }
    obj.videoURI = url;
    obj.mediaIndex = mediaIndex;
    obj.width = 1920;
    obj.height = 1080;
    obj = { width: closure_11, height: closure_12, uri: uri.thumbnailUrl };
    obj.thumbnail = obj;
    obj.accessoryType = "embed";
    obj.disableDownload = true;
    return obj;
  }), items4);
  const items5 = [memo, first, memo1];
  const memo2 = React.useMemo(() => {
    const diff = first - memo1;
    let closure_0 = (diff - 2 * trackAction(width[6]).space.PX_16) / 2;
    const trackAction = memo1 + trackAction(width[6]).space.PX_12;
    return memo.map((arg0, arg1) => Math.max(0, arg1 * closure_1 - closure_0));
  }, items5);
  const items6 = [memo2];
  const items7 = [memo2];
  const callback1 = React.useCallback((nativeEvent) => {
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
          let tmp = closure_17;
          let absolute1 = Math.abs(closure_17[num2] - x);
          if (absolute1 < absolute) {
            num = num2;
            absolute = absolute1;
          }
          num2 = num2 + 1;
          let tmp4 = closure_17;
          num3 = num;
        } while (num2 < closure_17.length);
      }
      callback2(num3);
    }
  }, items6);
  let closure_18 = React.useCallback((arg0) => {
    const current = ref.current;
    if (null != current) {
      const obj = { "Null": true, "Null": true, "Null": true, x: memo2[arg0] };
      current.scrollTo(obj);
    }
    callback2(arg0);
  }, items7);
  if (0 !== memo.length) {
    obj = { style: tmp.container, onLayout: callback };
    obj = { ref };
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
        tmpResult = ref(tmp10, obj, "" + type.url + "-" + index);
      }
      return tmpResult;
    });
    obj.children = <closure_6 {...obj} />;
    tmp6 = <closure_5 {...obj} />;
  }
  return tmp6;
};
