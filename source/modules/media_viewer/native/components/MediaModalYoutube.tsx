// Module ID: 12128
// Function ID: 93429
// Name: HTML
// Dependencies: []

// Module 12128 (HTML)
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
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const YOUTUBE_EMBED_PAGE_TYPE = arg1(dependencyMap[2]).YOUTUBE_EMBED_PAGE_TYPE;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
const memoResult = importAllResult.memo((visible) => {
  visible = visible.visible;
  const arg1 = visible;
  const source = visible.source;
  let obj = { sa: false, skuId: false, ind: false };
  Object.setPrototypeOf(null);
  const merged = Object.assign(visible, obj);
  const tmp3 = callback(importAllResult.useState(arg1(closure_2[4]).PlayerState.UNREADY), 2);
  const first = tmp3[0];
  const importDefault = first;
  closure_2 = tmp3[1];
  const tmp5 = callback(importAllResult.useState(undefined), 2);
  let callback = tmp5[1];
  const tmp6 = importDefault(closure_2[5])(first);
  const tmp7 = importDefault(closure_2[5])(visible);
  const YOUTUBE_EMBED_PAGE_TYPE = tmp7;
  const ref = tmp6.useRef(null);
  const jsx = ref;
  const effect = importAllResult.useEffect(() => {
    const MediaViewerAnalytics = visible(closure_2[6]).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({});
  }, []);
  const items = [ref, visible, tmp7, tmp6, first];
  callback = importAllResult.useCallback((arg0) => {
    let type;
    let value;
    const parsed = JSON.parse(arg0);
    ({ type, value } = parsed);
    if ("onReady" === type) {
      if ("-1" === value) {
        let READY = visible(callback[4]).PlayerState.ERRORED;
      } else {
        READY = visible(callback[4]).PlayerState.READY;
      }
      callback(READY);
      const tmp15 = callback;
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
      callback(visible(callback[4]).PlayerState.ERRORED);
      callback2(str7);
      const MediaViewerAnalytics = visible(callback[6]).MediaViewerAnalytics;
      let obj = { marginTop: null, marginBottom: null, error: str7 };
      const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted(obj);
    } else if ("onStateChange" === type) {
      obj = { -1: visible(callback[4]).PlayerState.UNSTARTED };
      obj[0] = visible(callback[4]).PlayerState.ENDED;
      obj[1] = visible(callback[4]).PlayerState.PLAYING;
      obj[2] = visible(callback[4]).PlayerState.PAUSED;
      obj[3] = visible(callback[4]).PlayerState.BUFFERING;
      obj[5] = visible(callback[4]).PlayerState.VIDEO_CUED;
      let tmp4 = null != tmp23;
      if (tmp4) {
        tmp4 = tmp23 in visible(callback[4]).PlayerState;
      }
      if (tmp4) {
        callback(tmp23);
      }
    }
  }, []);
  const effect1 = importAllResult.useEffect(() => {
    let tmp = null != ref.current;
    if (tmp) {
      tmp = first !== visible(closure_2[4]).PlayerState.UNREADY;
    }
    if (tmp) {
      let tmp5 = visible;
      if (visible) {
        tmp5 = tmp6 === visible(closure_2[4]).PlayerState.UNREADY;
      }
      if (tmp5) {
        tmp5 = first === visible(closure_2[4]).PlayerState.READY;
      }
      if (tmp5) {
        const current = ref.current;
        current.injectJavaScript("window.player.playVideo();  true;");
      }
      let tmp14 = visible;
      if (visible) {
        tmp14 = !tmp7;
      }
      if (tmp14) {
        const current2 = ref.current;
        current2.injectJavaScript("window.player.playVideo();  true;");
      }
      if (tmp19) {
        const current3 = ref.current;
        current3.injectJavaScript("window.player.pauseVideo(); true;");
      }
      const tmp19 = !visible && tmp7;
    }
  }, items);
  let obj1 = arg1(closure_2[7]);
  let youtubeVideoIdFromURI = obj1.getYoutubeVideoIdFromURI(source.uri);
  if (null == youtubeVideoIdFromURI) {
    youtubeVideoIdFromURI = arg1(closure_2[7]).getYoutubeClipVideoIdFromURI(source.uri);
    const obj3 = arg1(closure_2[7]);
  }
  if (null == youtubeVideoIdFromURI) {
    return null;
  } else {
    if (first === arg1(closure_2[4]).PlayerState.ERRORED) {
      if ("embed_not_allowed" === tmp5[0]) {
        obj = { videoId: youtubeVideoIdFromURI.videoId };
        return jsx(importDefault(closure_2[8]), obj);
      }
    }
    const tmp17 = arg1(closure_2[9]).isAndroid() ? {} : {};
    obj = { ref, style: visible.style };
    obj1 = {};
    const obj4 = arg1(closure_2[9]);
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
    return jsx(importDefault(closure_2[4]), obj, youtubeVideoIdFromURI.videoId);
  }
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/media_viewer/native/components/MediaModalYoutube.tsx");

export default memoResult;
