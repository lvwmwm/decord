// Module ID: 14254
// Function ID: 107725
// Dependencies: []

// Module 14254
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
let closure_2 = _module(require(dependencyMap[2]));
let closure_3 = _module(require(dependencyMap[3]));
const _module1Result = _module1(require(dependencyMap[4]));
const _module2 = require(dependencyMap[5]);
const self = this;
const StyleSheet = _module2.StyleSheet;
const styles = StyleSheet.create({ webView: { backgroundColor: "transparent" } });

export default _module1Result.forwardRef(function YoutubeIframe(videoId) {
  let allowWebViewZoom;
  let height;
  let initialPlayerParams;
  let webViewProps;
  let webViewStyle;
  let width;
  videoId = videoId.videoId;
  const require = videoId;
  const playList = videoId.playList;
  const dependencyMap = playList;
  const play = videoId.play;
  let tmp = undefined !== play;
  ({ height, width } = videoId);
  if (tmp) {
    tmp = play;
  }
  let closure_2 = tmp;
  const mute = videoId.mute;
  let closure_3 = tmp2;
  const volume = videoId.volume;
  let num = 100;
  if (undefined !== volume) {
    num = volume;
  }
  const useLocalHTML = videoId.useLocalHTML;
  const _module2 = useLocalHTML;
  const baseUrlOverride = videoId.baseUrlOverride;
  const self = baseUrlOverride;
  const playbackRate = videoId.playbackRate;
  let num2 = 1;
  ({ webViewStyle, webViewProps } = videoId);
  if (undefined !== playbackRate) {
    num2 = playbackRate;
  }
  const webView = num2;
  const contentScale = videoId.contentScale;
  let num3 = 1;
  if (undefined !== contentScale) {
    num3 = contentScale;
  }
  let fn = videoId.onError;
  if (undefined === fn) {
    fn = (arg0) => {

    };
  }
  let fn2 = videoId.onReady;
  if (undefined === fn2) {
    fn2 = (arg0) => {

    };
  }
  const playListStartIndex = videoId.playListStartIndex;
  let num4 = 0;
  if (undefined !== playListStartIndex) {
    num4 = playListStartIndex;
  }
  ({ initialPlayerParams, allowWebViewZoom } = videoId);
  const tmp3 = undefined !== allowWebViewZoom && allowWebViewZoom;
  const forceAndroidAutoplay = videoId.forceAndroidAutoplay;
  let fn3 = videoId.onChangeState;
  if (undefined === fn3) {
    fn3 = (arg0) => {

    };
  }
  let fn4 = videoId.onFullScreenChange;
  if (undefined === fn4) {
    fn4 = (arg0) => {

    };
  }
  let fn5 = videoId.onPlaybackQualityChange;
  if (undefined === fn5) {
    fn5 = (arg0) => {

    };
  }
  let fn6 = videoId.onPlaybackRateChange;
  if (undefined === fn6) {
    fn6 = (arg0) => {

    };
  }
  const defaultResult = closure_3.default(num.useState(false), 2);
  const first = defaultResult[0];
  let closure_18 = defaultResult[1];
  let closure_19 = _module1Result.useRef(videoId);
  let closure_20 = _module1Result.useRef(playList);
  if (!initialPlayerParams) {
    initialPlayerParams = {};
  }
  const ref = _module1Result.useRef(initialPlayerParams);
  const ref1 = _module1Result.useRef(null);
  const eventEmitter = new require(dependencyMap[6]).EventEmitter();
  let closure_23 = _module1Result.useRef(eventEmitter);
  const imperativeHandle = _module1Result.useImperativeHandle(arg1, () => ({
    getVideoUrl() {
      const current = closure_22.current;
      current.injectJavaScript(callback(closure_1[7]).PLAYER_FUNCTIONS.getVideoUrlScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("getVideoUrl", arg0);
      });
    },
    getDuration() {
      const current = closure_22.current;
      current.injectJavaScript(callback(closure_1[7]).PLAYER_FUNCTIONS.durationScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("getDuration", arg0);
      });
    },
    getCurrentTime() {
      const current = closure_22.current;
      current.injectJavaScript(callback(closure_1[7]).PLAYER_FUNCTIONS.currentTimeScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("getCurrentTime", arg0);
      });
    },
    isMuted(id) {
      const current = closure_22.current;
      current.injectJavaScript(callback(closure_1[7]).PLAYER_FUNCTIONS.isMutedScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("isMuted", arg0);
      });
    },
    getVolume() {
      const current = closure_22.current;
      current.injectJavaScript(callback(closure_1[7]).PLAYER_FUNCTIONS.getVolumeScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("getVolume", arg0);
      });
    },
    getPlaybackRate() {
      const current = closure_22.current;
      current.injectJavaScript(callback(closure_1[7]).PLAYER_FUNCTIONS.getPlaybackRateScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("getPlaybackRate", arg0);
      });
    },
    getAvailablePlaybackRates() {
      const current = closure_22.current;
      current.injectJavaScript(callback(closure_1[7]).PLAYER_FUNCTIONS.getAvailablePlaybackRatesScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("getAvailablePlaybackRates", arg0);
      });
    },
    seekTo(arg0, arg1) {
      const current = closure_22.current;
      const PLAYER_FUNCTIONS = callback(closure_1[7]).PLAYER_FUNCTIONS;
      current.injectJavaScript(PLAYER_FUNCTIONS.seekToScript(arg0, arg1));
    }
  }), []);
  const items = [tmp, undefined !== mute && mute, num, num2, first];
  const effect = _module1Result.useEffect(() => {
    if (first) {
      const items = [videoId(playList[7]).playMode[closure_2], videoId(playList[7]).soundMode[closure_3], , ];
      const PLAYER_FUNCTIONS = videoId(playList[7]).PLAYER_FUNCTIONS;
      items[2] = PLAYER_FUNCTIONS.setVolume(7);
      const PLAYER_FUNCTIONS2 = videoId(playList[7]).PLAYER_FUNCTIONS;
      items[3] = PLAYER_FUNCTIONS2.setPlaybackRate(num2);
      const item = items.forEach(ref1.current.injectJavaScript);
      const tmp = videoId;
      const tmp2 = playList;
    }
  }, items);
  const items1 = [videoId, tmp, first];
  const effect1 = _module1Result.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = ref.current !== videoId;
    }
    if (tmp) {
      ref.current = videoId;
      const current = ref1.current;
      const PLAYER_FUNCTIONS = videoId(playList[7]).PLAYER_FUNCTIONS;
      current.injectJavaScript(PLAYER_FUNCTIONS.loadVideoById(videoId, tmp));
    }
  }, items1);
  const items2 = [playList, tmp, num4, first];
  const effect2 = _module1Result.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = playList;
    }
    if (tmp) {
      tmp = !videoId(playList[8]).deepComparePlayList(ref2.current, playList);
    }
    if (tmp) {
      ref2.current = playList;
      const current = ref1.current;
      const PLAYER_FUNCTIONS = videoId(playList[7]).PLAYER_FUNCTIONS;
      current.injectJavaScript(PLAYER_FUNCTIONS.loadPlaylist(playList, num4, tmp));
    }
  }, items2);
  const items3 = [fn2, fn, fn3, fn4, fn6, fn5];
  const items4 = [baseUrlOverride];
  const callback = _module1Result.useCallback((nativeEvent) => {
    const parsed = JSON.parse(nativeEvent.nativeEvent.data);
    const eventType = parsed.eventType;
    if ("fullScreenChange" === eventType) {
      fn4(parsed.data);
    } else if ("playerStateChange" === eventType) {
      fn3(videoId(playList[9]).PLAYER_STATES[tmp2.data]);
    } else if ("playerReady" === eventType) {
      fn2();
      callback(true);
    } else if ("playerQualityChange" === eventType) {
      fn5(tmp2.data);
    } else if ("playerError" === eventType) {
      fn(videoId(playList[9]).PLAYER_ERROR[tmp2.data]);
    } else if ("playbackRateChange" === eventType) {
      fn6(tmp2.data);
    } else {
      const current = ref3.current;
      current.emit(tmp2.eventType, tmp2.data);
    }
  }, items3);
  const items5 = [useLocalHTML, num3, baseUrlOverride, tmp3];
  const callback1 = _module1Result.useCallback((mainDocumentURL) => {
    mainDocumentURL = mainDocumentURL.mainDocumentURL;
    let url = mainDocumentURL;
    if (!mainDocumentURL) {
      url = mainDocumentURL.url;
    }
    let tmp2 = tmp;
    if ("ios" === useLocalHTML.Platform.OS) {
      tmp2 = "about:blank" === obj;
    }
    let startsWithResult = tmp2;
    if (!tmp2) {
      let DEFAULT_BASE_URL = baseUrlOverride;
      if (!baseUrlOverride) {
        DEFAULT_BASE_URL = videoId(playList[9]).DEFAULT_BASE_URL;
      }
      startsWithResult = obj.startsWith(DEFAULT_BASE_URL);
    }
    return startsWithResult;
  }, items4);
  let obj = { style: { height, width }, __self: self, __source: { 1403937251: "Array", -304651439: "isArray", -732773340: "Reflect" } };
  const memo = _module1Result.useMemo(() => {
    const obj = {};
    if (useLocalHTML) {
      obj.html = MAIN_SCRIPTResult.htmlString;
      if (baseUrlOverride) {
        obj.baseUrl = baseUrlOverride;
      }
      return obj;
    } else {
      let DEFAULT_BASE_URL = baseUrlOverride;
      if (!baseUrlOverride) {
        DEFAULT_BASE_URL = videoId(playList[9]).DEFAULT_BASE_URL;
        const tmp3 = playList;
      }
      obj.uri = `${DEFAULT_BASE_URL}?data=${tmp.urlEncodedJSON}`;
      return obj;
    }
    const MAIN_SCRIPTResult = videoId(playList[7]).MAIN_SCRIPT(ref.current, ref2.current, ref.current, tmp3, num3);
  }, items5);
  obj = { errorMessage: null, getVersionedDismissibleContentCurrentVersion: null, subscriptionPlans: "k", b64ToPreloadedUserSettingsProto: "k", _eventsCount: "L", originWhitelist: ["<string:1982989120>"] };
  const items6 = [webView.webView, webViewStyle];
  obj.style = items6;
  obj.onShouldStartLoadWithRequest = callback1;
  obj.allowsFullscreenVideo = !ref.current.preventFullScreen;
  let str = "";
  if (tmp4) {
    const Platform = _module2.Platform;
    obj = { android: require(dependencyMap[9]).CUSTOM_USER_AGENT, ios: "" };
    str = Platform.select(obj);
  }
  obj.userAgent = str;
  return <_module2.View {......obj}>{num.default.createElement(require(dependencyMap[10]).WebView, closure_2.default(obj, webViewProps, { source: memo, ref: ref1, onMessage: callback, __self: self, __source: {} }))}</_module2.View>;
});
