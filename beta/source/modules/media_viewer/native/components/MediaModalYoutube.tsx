// Module ID: 12532
// Function ID: 12533
// Name: MediaModalYoutube
// Dependencies: [32, 19, 1074, 21, 7745, 7720, 7709, 7713, 12533, 1364, 2]

// Module 12532 (MediaModalYoutube)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 7709 */;
import MediaModalWebView from "MediaModalWebView" /* 7745 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap, visible;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const YOUTUBE_EMBED_PAGE_TYPE = Constants.YOUTUBE_EMBED_PAGE_TYPE;
const jsx = Fragment.jsx;
let closure_7 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
const memoResult = react.memo((visible) => {
  let closure_2;
  let closure_3;
  let closure_4;
  let first1;
  let obj4;
  let playerState;
  visible = visible.visible;
  const source = visible.source;
  const style = visible.style;
  const merged = Object.assign(visible, Object.assign({ visible: 0, style: 0, source: 0 }));
  playerState = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let tmp2 = visible;
  [playerState, dependencyMap] = react.useState(visible(7745).PlayerState.UNREADY);
  [first1, _slicedToArray] = react.useState(undefined);
  const tmp9 = playerState(7720)(playerState);
  react = tmp9;
  const tmp10 = playerState(7720)(visible);
  let closure_5 = tmp10;
  const ref = react.useRef(null);
  const effect = react.useEffect(() => {
    const MediaViewerAnalytics = visible(closure_2[6]).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "youtube", action: "attempted" });
  }, []);
  const items = [ref, visible, tmp10, tmp9, playerState];
  const callback = react.useCallback((arg0) => {
    let type;
    let value;
    const parsed = JSON.parse(arg0);
    ({ type, value } = parsed);
    if ("onReady" === type) {
      let READY;
      const tmp17 = closure_2;
      if ("-1" === value) {
        READY = MediaModalWebView.PlayerState.ERRORED;
      } else {
        READY = MediaModalWebView.PlayerState.READY;
      }
      tmp17(READY);
    } else if ("onError" === type) {
      let str6;
      let str1 = value;
      if (typeof value === "number") {
        str1 = value.toString();
      }
      if ("2" === str1) {
        str6 = "invalid_parameter";
      } else if ("5" === str1) {
        str6 = "html5_error";
      } else if ("100" === str1) {
        str6 = "video_not_found";
      } else {
        str6 = "embed_not_allowed";
        if ("101" !== str1) {
          str6 = "embed_not_allowed";
          if ("150" !== str1) {
            str6 = "unknown";
          }
        }
      }
      closure_2(MediaModalWebView.PlayerState.ERRORED);
      closure_3(str6);
      const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
      const obj = { platform: "youtube", action: "errored", error: str6 };
      const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted(obj);
    } else if ("onStateChange" === type) {
      const obj2 = { "-1": null, 0: null, 1: null, 2: null, 3: null, 5: null };
      obj2[0] = MediaModalWebView.PlayerState.UNSTARTED;
      obj2[0] = MediaModalWebView.PlayerState.ENDED;
      obj2[1] = MediaModalWebView.PlayerState.PLAYING;
      obj2[2] = MediaModalWebView.PlayerState.PAUSED;
      obj2[3] = MediaModalWebView.PlayerState.BUFFERING;
      obj2[5] = MediaModalWebView.PlayerState.VIDEO_CUED;
      const tmp4 = null != tmp35 && tmp35 in MediaModalWebView.PlayerState;
      if (tmp4) {
        closure_2(obj2[value]);
      }
    }
  }, []);
  const effect1 = react.useEffect(() => {
    const tmp2 = null != ref.current && first !== MediaModalWebView.PlayerState.UNREADY;
    if (tmp2) {
      const tmp7 = visible && closure_4 === MediaModalWebView.PlayerState.UNREADY && first === MediaModalWebView.PlayerState.READY;
      if (tmp7) {
        const current = tmp.current;
        current.injectJavaScript("window.player.playVideo();  true;");
      }
      const tmp15 = tmp6 && !closure_5;
      if (tmp15) {
        const current2 = tmp.current;
        current2.injectJavaScript("window.player.playVideo();  true;");
      }
      const tmp18 = !visible && closure_5;
      if (tmp18) {
        const current3 = tmp.current;
        current3.injectJavaScript("window.player.pauseVideo(); true;");
      }
    }
  }, items);
  let obj = visible(7713);
  let youtubeVideoIdFromURI = obj.getYoutubeVideoIdFromURI(source.uri);
  if (youtubeVideoIdFromURI == null) {
    const tmp2Result = tmp2(7713);
    youtubeVideoIdFromURI = tmp2Result.getYoutubeClipVideoIdFromURI(source.uri);
  }
  if (null == youtubeVideoIdFromURI) {
    return null;
  } else {
    if (playerState === tmp2(7745).PlayerState.ERRORED) {
      if ("embed_not_allowed" === first1) {
        const tmp35 = ref;
        let obj2 = { videoId: youtubeVideoIdFromURI.videoId };
        return ref(playerState(12533), obj2);
      }
    }
    const tmp2Result2 = tmp2(1364);
    const tmp16 = tmp2Result2.isAndroid() ? { nestedScrollEnabled: true, overScrollMode: "never", domStorageEnabled: true, mixedContentMode: "compatibility" } : {};
    let tmp17 = ref;
    const obj3 = { ref, style, source: obj4, baseURL, playerState, onDataReceived: callback, javaScriptEnabled: true, javaScriptCanOpenWindowsAutomatically: true };
    let str2 = "";
    let str3 = "";
    const tmp8Result = playerState(7745);
    if (null != youtubeVideoIdFromURI.start) {
      const _HermesInternal = HermesInternal;
      str3 = "'start': " + youtubeVideoIdFromURI.start + ",";
    }
    let combined = str2;
    if (null != youtubeVideoIdFromURI.clip) {
      const _HermesInternal2 = HermesInternal;
      let str6 = "',";
      combined = "'clip': '" + youtubeVideoIdFromURI.clip + "',";
    }
    if (null != youtubeVideoIdFromURI.clipt) {
      const _HermesInternal3 = HermesInternal;
      str2 = "'clipt': '" + youtubeVideoIdFromURI.clipt + "',";
    }
    const _HermesInternal4 = HermesInternal;
    const _HermesInternal5 = HermesInternal;
    obj4 = { html: "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n    </style>\n    <script>" + "\nconst tag = document.createElement('script');\ntag.setAttribute('src', \"https://www.youtube.com/iframe_api\");\ndocument.head.appendChild(tag);\n\nfunction onYouTubeIframeAPIReady() {\n  window.player = new YT.Player('player', {\n    height:     '100%',\n    width:      '100%',\n    videoId:    '" + youtubeVideoIdFromURI.videoId + "',\n    playerVars: {\n      'playsinline': 1,\n      'fs': 0,\n      'pageType': " + closure_5 + ",\n      " + str2 + "\n      " + combined + "\n      " + str3 + "\n    },\n    events: {\n      'onReady': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onReady', value: window.player.getPlayerState()})\n        );\n      },\n      'onError': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onError', value: e.data})\n        );\n      },\n      'onStateChange': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onStateChange', value: e.data})\n        );\n      }\n    }\n  });\n}\n" + "</script>\n  </head>\n  <body>\n    <div id=\"player\"></div>\n  </body>\n</html>\n", baseUrl: baseURL };
    const merged1 = Object.assign(tmp16);
    const merged2 = Object.assign(merged);
    return tmp17(tmp8Result, obj3, youtubeVideoIdFromURI.videoId);
  }
});
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalYoutube.tsx");

export default memoResult;
