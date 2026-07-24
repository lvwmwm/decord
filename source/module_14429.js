// Module ID: 14429
// Function ID: 110276
// Dependencies: [7659, 14430, 14431, 57, 31, 27, 631, 14432, 14433, 14428, 14434]

// Module 14429
import module_7659 from "module_7659";
import _getRequireWildcardCache from "_getRequireWildcardCache";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";

module_7659(require("_extends"));
const self = this;
const StyleSheet = get_ActivityIndicator.StyleSheet;
const styles = StyleSheet.create({ webView: { backgroundColor: "transparent" } });

export default result.forwardRef(function YoutubeIframe(videoId) {
  let allowWebViewZoom;
  let height;
  let initialPlayerParams;
  let webViewProps;
  let webViewStyle;
  let width;
  videoId = videoId.videoId;
  const playList = videoId.playList;
  const play = videoId.play;
  let tmp = undefined !== play;
  ({ height, width } = videoId);
  if (tmp) {
    tmp = play;
  }
  const mute = videoId.mute;
  const _slicedToArray = tmp2;
  const volume = videoId.volume;
  let num = 100;
  if (undefined !== volume) {
    num = volume;
  }
  const useLocalHTML = videoId.useLocalHTML;
  const baseUrlOverride = videoId.baseUrlOverride;
  const playbackRate = videoId.playbackRate;
  let num2 = 1;
  ({ webViewStyle, webViewProps } = videoId);
  if (undefined !== playbackRate) {
    num2 = playbackRate;
  }
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
  let closure_12 = tmp3;
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
  const defaultResult = _slicedToArray.default(num.useState(false), 2);
  const first = defaultResult[0];
  let closure_18 = defaultResult[1];
  let closure_19 = num.useRef(videoId);
  let closure_20 = num.useRef(playList);
  if (!initialPlayerParams) {
    initialPlayerParams = {};
  }
  const ref = num.useRef(initialPlayerParams);
  const ref1 = num.useRef(null);
  const eventEmitter = new videoId(playList[6]).EventEmitter();
  let closure_23 = num.useRef(eventEmitter);
  const imperativeHandle = num.useImperativeHandle(arg1, () => ({
    getVideoUrl() {
      let current = outer1_22.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.getVideoUrlScript);
      return new Promise((arg0) => {
        const current = outer2_23.current;
        current.once("getVideoUrl", arg0);
      });
    },
    getDuration() {
      let current = outer1_22.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.durationScript);
      return new Promise((arg0) => {
        const current = outer2_23.current;
        current.once("getDuration", arg0);
      });
    },
    getCurrentTime() {
      let current = outer1_22.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.currentTimeScript);
      return new Promise((arg0) => {
        const current = outer2_23.current;
        current.once("getCurrentTime", arg0);
      });
    },
    isMuted(id) {
      let current = outer1_22.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.isMutedScript);
      return new Promise((arg0) => {
        const current = outer2_23.current;
        current.once("isMuted", arg0);
      });
    },
    getVolume() {
      let current = outer1_22.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.getVolumeScript);
      return new Promise((arg0) => {
        const current = outer2_23.current;
        current.once("getVolume", arg0);
      });
    },
    getPlaybackRate() {
      let current = outer1_22.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.getPlaybackRateScript);
      return new Promise((arg0) => {
        const current = outer2_23.current;
        current.once("getPlaybackRate", arg0);
      });
    },
    getAvailablePlaybackRates() {
      let current = outer1_22.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.getAvailablePlaybackRatesScript);
      return new Promise((arg0) => {
        const current = outer2_23.current;
        current.once("getAvailablePlaybackRates", arg0);
      });
    },
    seekTo(arg0, arg1) {
      const current = outer1_22.current;
      const PLAYER_FUNCTIONS = videoId(playList[7]).PLAYER_FUNCTIONS;
      current.injectJavaScript(PLAYER_FUNCTIONS.seekToScript(arg0, arg1));
    }
  }), []);
  let items = [tmp, undefined !== mute && mute, num, num2, first];
  const effect = num.useEffect(() => {
    if (first) {
      const items = [videoId(playList[7]).playMode[closure_2], videoId(playList[7]).soundMode[closure_3], , ];
      const PLAYER_FUNCTIONS = videoId(playList[7]).PLAYER_FUNCTIONS;
      items[2] = PLAYER_FUNCTIONS.setVolume(7);
      const PLAYER_FUNCTIONS2 = videoId(playList[7]).PLAYER_FUNCTIONS;
      items[3] = PLAYER_FUNCTIONS2.setPlaybackRate(num2);
      const item = items.forEach(ref1.current.injectJavaScript);
    }
  }, items);
  const items1 = [videoId, tmp, first];
  const effect1 = num.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = ref.current !== videoId;
    }
    if (tmp) {
      ref.current = videoId;
      const current = ref1.current;
      const PLAYER_FUNCTIONS = videoId(playList[7]).PLAYER_FUNCTIONS;
      current.injectJavaScript(PLAYER_FUNCTIONS.loadVideoById(videoId, closure_2));
    }
  }, items1);
  const items2 = [playList, tmp, num4, first];
  const effect2 = num.useEffect(() => {
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
      current.injectJavaScript(PLAYER_FUNCTIONS.loadPlaylist(playList, num4, closure_2));
    }
  }, items2);
  const items3 = [fn2, fn, fn3, fn4, fn6, fn5];
  const items4 = [baseUrlOverride];
  const callback = num.useCallback((nativeEvent) => {
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
  const items5 = [useLocalHTML, num3, baseUrlOverride, undefined !== allowWebViewZoom && allowWebViewZoom];
  const callback1 = num.useCallback((mainDocumentURL) => {
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
  let obj = { style: { height, width }, __self: baseUrlOverride, __source: { fileName: "/Users/ananthukanive/side-proj/react-native-youtube-iframe/src/YoutubeIframe.js", lineNumber: 251, columnNumber: 5 } };
  const memo = num.useMemo(() => {
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
      }
      obj.uri = `${DEFAULT_BASE_URL}?data=${tmp.urlEncodedJSON}`;
      return obj;
    }
    MAIN_SCRIPTResult = videoId(playList[7]).MAIN_SCRIPT(ref.current, ref2.current, ref.current, closure_12, num3);
  }, items5);
  obj = { bounces: false, originWhitelist: ["*"], allowsInlineMediaPlayback: true, style: null, mediaPlaybackRequiresUserAction: false };
  const items6 = [num2.webView, webViewStyle];
  obj.style = items6;
  obj.onShouldStartLoadWithRequest = callback1;
  obj.allowsFullscreenVideo = !ref.current.preventFullScreen;
  let str = "";
  if (tmp4) {
    const Platform = useLocalHTML.Platform;
    obj = { android: videoId(playList[9]).CUSTOM_USER_AGENT, ios: "" };
    str = Platform.select(obj);
  }
  obj.userAgent = str;
  return <useLocalHTML.View bounces={false} originWhitelist={["*"]} allowsInlineMediaPlayback style={null} mediaPlaybackRequiresUserAction={false}>{num.default.createElement(videoId(playList[10]).WebView, tmp.default(obj, webViewProps, { source: memo, ref: ref1, onMessage: callback, __self: baseUrlOverride, __source: { fileName: "/Users/ananthukanive/side-proj/react-native-youtube-iframe/src/YoutubeIframe.js", lineNumber: 252, columnNumber: 7 } }))}</useLocalHTML.View>;
});
