// Module ID: 12273
// Function ID: 95846
// Name: HTML
// Dependencies: [57, 31, 653, 33, 8344, 8328, 8322, 8320, 12274, 477, 2]

// Module 12273 (HTML)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { YOUTUBE_EMBED_PAGE_TYPE } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
function HTML(start) {
  let str = "";
  let str2 = "";
  if (null != start.start) {
    const _HermesInternal = HermesInternal;
    str2 = "'start': " + start.start + ",";
  }
  let combined = str;
  if (null != start.clip) {
    const _HermesInternal2 = HermesInternal;
    combined = "'clip': '" + start.clip + "',";
  }
  if (null != start.clipt) {
    const _HermesInternal3 = HermesInternal;
    str = "'clipt': '" + start.clipt + "',";
  }
  return "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n    </style>\n    <script>" + "\nconst tag = document.createElement('script');\ntag.setAttribute('src', \"https://www.youtube.com/iframe_api\");\ndocument.head.appendChild(tag);\n\nfunction onYouTubeIframeAPIReady() {\n  window.player = new YT.Player('player', {\n    height:     '100%',\n    width:      '100%',\n    videoId:    '" + start.videoId + "',\n    playerVars: {\n      'playsinline': 1,\n      'fs': 0,\n      'pageType': " + YOUTUBE_EMBED_PAGE_TYPE + ",\n      " + str + "\n      " + combined + "\n      " + str2 + "\n    },\n    events: {\n      'onReady': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onReady', value: window.player.getPlayerState()})\n        );\n      },\n      'onError': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onError', value: e.data})\n        );\n      },\n      'onStateChange': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onStateChange', value: e.data})\n        );\n      }\n    }\n  });\n}\n" + "</script>\n  </head>\n  <body>\n    <div id=\"player\"></div>\n  </body>\n</html>\n";
}
let closure_7 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
const memoResult = importAllResult.memo((visible) => {
  visible = visible.visible;
  const source = visible.source;
  let obj = { visible: 0, style: 0, source: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(visible, obj);
  const tmp3 = callback(importAllResult.useState(visible(8344).PlayerState.UNREADY), 2);
  const first = tmp3[0];
  const dependencyMap = tmp3[1];
  let tmp5 = callback(importAllResult.useState(undefined), 2);
  callback = tmp5[1];
  const tmp6 = first(8328)(first);
  const tmp7 = first(8328)(visible);
  const YOUTUBE_EMBED_PAGE_TYPE = tmp7;
  const ref = importAllResult.useRef(null);
  const effect = importAllResult.useEffect(() => {
    const MediaViewerAnalytics = visible(8322).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "youtube", action: "attempted" });
  }, []);
  const items = [ref, visible, tmp7, tmp6, first];
  callback = importAllResult.useCallback((arg0) => {
    let type;
    let value;
    const parsed = JSON.parse(arg0);
    ({ type, value } = parsed);
    if ("onReady" === type) {
      if ("-1" === value) {
        let READY = visible(8344).PlayerState.ERRORED;
      } else {
        READY = visible(8344).PlayerState.READY;
      }
      dependencyMap(READY);
      const tmp15 = dependencyMap;
    } else if ("onError" === type) {
      let str = "number";
      str = value;
      if ("number" === typeof value) {
        str = value.toString();
      }
      if ("2" === str) {
        let str7 = "invalid_parameter";
      } else if ("5" === str) {
        str7 = "html5_error";
      } else if ("100" === str) {
        str7 = "video_not_found";
      } else {
        str7 = "embed_not_allowed";
        if ("101" !== str) {
          str7 = "embed_not_allowed";
          if ("150" !== str) {
            str7 = "unknown";
          }
        }
      }
      dependencyMap(visible(8344).PlayerState.ERRORED);
      callback(str7);
      const MediaViewerAnalytics = visible(8322).MediaViewerAnalytics;
      let obj = { platform: "youtube", action: "errored", error: str7 };
      const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted(obj);
    } else if ("onStateChange" === type) {
      obj = { "-1": visible(8344).PlayerState.UNSTARTED };
      obj[0] = visible(8344).PlayerState.ENDED;
      obj[1] = visible(8344).PlayerState.PLAYING;
      obj[2] = visible(8344).PlayerState.PAUSED;
      obj[3] = visible(8344).PlayerState.BUFFERING;
      obj[5] = visible(8344).PlayerState.VIDEO_CUED;
      let tmp4 = null != tmp23;
      if (tmp4) {
        tmp4 = tmp23 in visible(8344).PlayerState;
      }
      if (tmp4) {
        dependencyMap(tmp23);
      }
    }
  }, []);
  const effect1 = importAllResult.useEffect(() => {
    let tmp = null != ref.current;
    if (tmp) {
      tmp = first !== visible(8344).PlayerState.UNREADY;
    }
    if (tmp) {
      let tmp5 = visible;
      if (visible) {
        tmp5 = closure_4 === visible(8344).PlayerState.UNREADY;
      }
      if (tmp5) {
        tmp5 = first === visible(8344).PlayerState.READY;
      }
      if (tmp5) {
        const current = ref.current;
        current.injectJavaScript("window.player.playVideo();  true;");
      }
      let tmp14 = visible;
      if (visible) {
        tmp14 = !closure_5;
      }
      if (tmp14) {
        const current2 = ref.current;
        current2.injectJavaScript("window.player.playVideo();  true;");
      }
      if (tmp19) {
        const current3 = ref.current;
        current3.injectJavaScript("window.player.pauseVideo(); true;");
      }
      tmp19 = !visible && closure_5;
    }
  }, items);
  let obj1 = visible(8320);
  let youtubeVideoIdFromURI = obj1.getYoutubeVideoIdFromURI(source.uri);
  if (null == youtubeVideoIdFromURI) {
    youtubeVideoIdFromURI = visible(8320).getYoutubeClipVideoIdFromURI(source.uri);
    const obj3 = visible(8320);
  }
  if (null == youtubeVideoIdFromURI) {
    return null;
  } else {
    if (first === visible(8344).PlayerState.ERRORED) {
      if ("embed_not_allowed" === tmp5[0]) {
        obj = { videoId: youtubeVideoIdFromURI.videoId };
        return ref(first(12274), obj);
      }
    }
    const tmp17 = visible(477).isAndroid() ? { nestedScrollEnabled: true, overScrollMode: "never", domStorageEnabled: true, mixedContentMode: "compatibility" } : {};
    obj = { ref, style: visible.style };
    obj1 = {};
    const obj4 = visible(477);
    obj1.html = HTML(youtubeVideoIdFromURI);
    obj1.baseUrl = closure_7;
    obj.source = obj1;
    obj.baseURL = closure_7;
    obj.playerState = first;
    obj.onDataReceived = callback;
    obj.javaScriptEnabled = true;
    obj.javaScriptCanOpenWindowsAutomatically = true;
    const merged1 = Object.assign(tmp17);
    const merged2 = Object.assign(merged);
    return ref(first(8344), obj, youtubeVideoIdFromURI.videoId);
  }
});
let result = require("ME").fileFinishedImporting("modules/media_viewer/native/components/MediaModalYoutube.tsx");

export default memoResult;
