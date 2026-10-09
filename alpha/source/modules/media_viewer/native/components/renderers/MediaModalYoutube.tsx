// Module ID: 13019
// Function ID: 13020
// Name: MediaModalYoutube
// Dependencies: [32, 19, 1085, 21, 558, 576, 8407, 5929, 8372, 8376, 13020, 1382, 2]

// Module 13019 (MediaModalYoutube)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 8372 */;
import MediaModalWebViewBase from "MediaModalWebViewBase" /* 8407 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const YOUTUBE_EMBED_PAGE_TYPE = Constants.YOUTUBE_EMBED_PAGE_TYPE;
const jsx = Fragment.jsx;
let closure_7 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaModalYoutube(visible) {
  let closure_2;
  let closure_4;
  let onError;
  let onLoad;
  let onLoadStart;
  let onToggleOverlay;
  let playerState;
  let source;
  let str21;
  let str22;
  let style;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp7;
  const tmp = visible;
  let tmp2 = dependencyMap;
  let obj = visible(576);
  const cResult = obj.c(33);
  visible = visible.visible;
  ({ style, source, onError, onLoad, onLoadStart, onToggleOverlay } = visible);
  let obj2 = react;
  [playerState, dependencyMap] = react.useState(visible(8407).PlayerState.UNREADY);
  const tmp6 = _slicedToArray(react.useState(undefined), 2);
  [tmp7, _slicedToArray] = tmp6;
  const tmp9 = playerState(5929)(playerState);
  react = tmp9;
  const tmp10 = playerState(5929)(visible);
  let closure_5 = tmp10;
  const ref = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      const MediaViewerAnalytics = visible(closure_2[8]).MediaViewerAnalytics;
      const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "youtube", action: "attempted" });
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp12 = fn;
    tmp13 = items;
  } else {
    [tmp12, tmp13] = cResult;
  }
  const effect = obj2.useEffect(tmp12, tmp13);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y(arg0) {
      let type;
      let value;
      const parsed = JSON.parse(arg0);
      ({ type, value } = parsed);
      if ("onReady" === type) {
        let READY;
        const tmp17 = closure_2;
        if ("-1" === value) {
          READY = MediaModalWebViewBase.PlayerState.ERRORED;
        } else {
          READY = MediaModalWebViewBase.PlayerState.READY;
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
        closure_2(MediaModalWebViewBase.PlayerState.ERRORED);
        _slicedToArray(str6);
        const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
        const obj = { platform: "youtube", action: "errored", error: str6 };
        const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted(obj);
      } else if ("onStateChange" === type) {
        const obj2 = { "-1": null, 0: null, 1: null, 2: null, 3: null, 5: null };
        obj2[0] = MediaModalWebViewBase.PlayerState.UNSTARTED;
        obj2[0] = MediaModalWebViewBase.PlayerState.ENDED;
        obj2[1] = MediaModalWebViewBase.PlayerState.PLAYING;
        obj2[2] = MediaModalWebViewBase.PlayerState.PAUSED;
        obj2[3] = MediaModalWebViewBase.PlayerState.BUFFERING;
        obj2[5] = MediaModalWebViewBase.PlayerState.VIDEO_CUED;
        const tmp4 = null != tmp35 && tmp35 in MediaModalWebViewBase.PlayerState;
        if (tmp4) {
          closure_2(obj2[value]);
        }
      }
    };
    cResult[2] = fn2;
    tmp15 = fn2;
  } else {
    tmp15 = cResult[2];
  }
  if (cResult[3] === playerState) {
    if (cResult[4] === tmp9) {
      if (cResult[5] === tmp10) {
        let tmp16;
        let tmp17;
        if (cResult[6] === visible) {
          tmp16 = cResult[7];
          tmp17 = cResult[8];
        }
        const effect1 = obj2.useEffect(tmp16, tmp17);
        if (cResult[9] === tmp7) {
          if (cResult[10] === playerState) {
            if (cResult[11] === source.uri) {
              let tmp19;
              let tmp21;
              let tmp22;
              let tmp23;
              let tmp24;
              let tmp25;
              if (cResult[12] === style) {
                tmp19 = cResult[13];
                tmp21 = cResult[15];
                tmp22 = cResult[16];
                tmp23 = cResult[17];
                tmp24 = cResult[18];
                tmp25 = cResult[19];
              }
              const _Symbol2 = Symbol;
              if (tmp21 === Symbol.for("react.early_return_sentinel")) {
                let tmp43;
                if (cResult[20] !== tmp22) {
                  const obj3 = { html: tmp22, baseUrl: baseURL };
                  cResult[20] = tmp22;
                  cResult[21] = obj3;
                  tmp43 = obj3;
                } else {
                  tmp43 = cResult[21];
                }
                if (cResult[22] === tmp19) {
                  if (cResult[23] === onError) {
                    if (cResult[24] === onLoad) {
                      if (cResult[25] === onLoadStart) {
                        if (cResult[26] === onToggleOverlay) {
                          if (cResult[27] === playerState) {
                            if (cResult[28] === tmp43) {
                              if (cResult[29] === tmp23) {
                                if (cResult[30] === tmp24) {
                                  let tmp45;
                                  if (cResult[31] === tmp25) {
                                    tmp45 = cResult[32];
                                  }
                                  tmp21 = tmp45;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                const obj4 = { ref: tmp24, style: tmp25, source: tmp43, baseURL, playerState, onDataReceived: tmp15, onToggleOverlay, javaScriptCanOpenWindowsAutomatically: true, domStorageEnabled: tmp20, mixedContentMode: str21, nestedScrollEnabled: tmp20 || undefined, onError, onLoad, onLoadStart, overScrollMode: str22 };
                str21 = undefined;
                const tmp46 = ref;
                if (tmp20) {
                  str21 = "compatibility";
                }
                str22 = undefined;
                if (tmp20) {
                  str22 = "never";
                }
                const tmp46Result = tmp46(tmp19, obj4, tmp23);
                cResult[22] = tmp19;
                cResult[23] = onError;
                cResult[24] = onLoad;
                cResult[25] = onLoadStart;
                cResult[26] = onToggleOverlay;
                cResult[27] = playerState;
                cResult[28] = tmp43;
                cResult[29] = tmp23;
                class V {
                  constructor() {
                    const tmp2 = null != ref.current && first !== MediaModalWebViewBase.PlayerState.UNREADY;
                    if (tmp2) {
                      const tmp7 = visible && closure_4 === MediaModalWebViewBase.PlayerState.UNREADY && first === MediaModalWebViewBase.PlayerState.READY;
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
                  }
                }
                cResult[31] = tmp25;
                cResult[32] = tmp46Result;
                tmp45 = tmp46Result;
              }
              return tmp21;
            }
          }
        }
        const _Symbol = Symbol;
        const forResult = Symbol.for("react.early_return_sentinel");
        const tmpResult = tmp(8376);
        let youtubeVideoIdFromURI = tmpResult.getYoutubeVideoIdFromURI(source.uri);
        if (youtubeVideoIdFromURI == null) {
          const tmpResult3 = tmp(8376);
          youtubeVideoIdFromURI = tmpResult3.getYoutubeClipVideoIdFromURI(source.uri);
        }
        let tmp28;
        let tmp29;
        let tmp30;
        let combined1;
        let tmp32 = null;
        let tmp33;
        let tmp34;
        if (null != youtubeVideoIdFromURI) {
          if (playerState === tmp(8407).PlayerState.ERRORED) {
            if ("embed_not_allowed" === tmp7) {
              const tmp35 = ref;
              const obj5 = { videoId: youtubeVideoIdFromURI.videoId };
              tmp32 = ref(tmp8(13020), obj5);
            }
          }
          let str3 = "";
          let str4 = "";
          const tmpResult4 = tmp(1382);
          const videoId = youtubeVideoIdFromURI.videoId;
          const isAndroidResult = tmpResult4.isAndroid();
          const tmp8Result = playerState(8407);
          if (null != youtubeVideoIdFromURI.start) {
            const _HermesInternal = HermesInternal;
            let str6 = "'start': ";
            str4 = "'start': " + youtubeVideoIdFromURI.start + ",";
          }
          let combined = str3;
          if (null != youtubeVideoIdFromURI.clip) {
            const _HermesInternal2 = HermesInternal;
            combined = "'clip': '" + youtubeVideoIdFromURI.clip + "',";
          }
          if (null != youtubeVideoIdFromURI.clipt) {
            const _HermesInternal3 = HermesInternal;
            str3 = "'clipt': '" + youtubeVideoIdFromURI.clipt + "',";
          }
          const _HermesInternal4 = HermesInternal;
          const _HermesInternal5 = HermesInternal;
          combined1 = "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n    </style>\n    <script>" + "\nconst tag = document.createElement('script');\ntag.setAttribute('src', \"https://www.youtube.com/iframe_api\");\ndocument.head.appendChild(tag);\n\nfunction onYouTubeIframeAPIReady() {\n  window.player = new YT.Player('player', {\n    height:     '100%',\n    width:      '100%',\n    videoId:    '" + youtubeVideoIdFromURI.videoId + "',\n    playerVars: {\n      'playsinline': 1,\n      'fs': 0,\n      'pageType': " + closure_5 + ",\n      " + str3 + "\n      " + combined + "\n      " + str4 + "\n    },\n    events: {\n      'onReady': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onReady', value: window.player.getPlayerState()})\n        );\n      },\n      'onError': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onError', value: e.data})\n        );\n      },\n      'onStateChange': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onStateChange', value: e.data})\n        );\n      }\n    }\n  });\n}\n" + "</script>\n  </head>\n  <body>\n    <div id=\"player\"></div>\n  </body>\n</html>\n";
          tmp28 = style;
          tmp29 = ref;
          tmp30 = videoId;
          tmp32 = forResult;
          tmp33 = isAndroidResult;
          tmp34 = tmp8Result;
        }
        cResult[9] = tmp7;
        cResult[10] = playerState;
        cResult[11] = source.uri;
        cResult[12] = style;
        cResult[13] = tmp34;
        cResult[14] = tmp33;
        cResult[15] = tmp32;
        cResult[16] = combined1;
        cResult[17] = tmp30;
        cResult[18] = tmp29;
        cResult[19] = tmp28;
        tmp25 = tmp28;
        tmp24 = tmp29;
        tmp23 = tmp30;
        tmp22 = combined1;
        tmp21 = tmp32;
        class V {
          constructor() {
            const tmp2 = null != ref.current && first !== MediaModalWebViewBase.PlayerState.UNREADY;
            if (tmp2) {
              const tmp7 = visible && closure_4 === MediaModalWebViewBase.PlayerState.UNREADY && first === MediaModalWebViewBase.PlayerState.READY;
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
          }
        }
        tmp19 = tmp34;
      }
    }
  }
  class V {
    constructor() {
      const tmp2 = null != ref.current && first !== MediaModalWebViewBase.PlayerState.UNREADY;
      if (tmp2) {
        const tmp7 = visible && closure_4 === MediaModalWebViewBase.PlayerState.UNREADY && first === MediaModalWebViewBase.PlayerState.READY;
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
    }
  }
  const items1 = [ref, visible, tmp10, tmp9, playerState];
  cResult[3] = playerState;
  cResult[4] = tmp9;
  cResult[5] = tmp10;
  cResult[6] = visible;
  cResult[7] = V;
  cResult[8] = items1;
  tmp17 = items1;
  tmp16 = V;
}) : (function MediaModalYoutube(visible) {
  let closure_2;
  let closure_3;
  let closure_4;
  let first1;
  let obj4;
  let onError;
  let onLoad;
  let onLoadStart;
  let onToggleOverlay;
  let playerState;
  let str19;
  let str20;
  let style;
  visible = visible.visible;
  const source = visible.source;
  playerState = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  react = undefined;
  const tmp = visible;
  let tmp2 = dependencyMap;
  ({ style, onError, onLoad, onLoadStart, onToggleOverlay } = visible);
  [playerState, dependencyMap] = react.useState(visible(8407).PlayerState.UNREADY);
  [first1, _slicedToArray] = react.useState(undefined);
  let tmp7 = playerState;
  const tmp8 = playerState(5929)(playerState);
  react = tmp8;
  const tmp9 = playerState(5929)(visible);
  let closure_5 = tmp9;
  const ref = react.useRef(null);
  const effect = react.useEffect(() => {
    const MediaViewerAnalytics = visible(closure_2[8]).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "youtube", action: "attempted" });
  }, []);
  const items = [ref, visible, tmp9, tmp8, playerState];
  const callback = react.useCallback((arg0) => {
    let type;
    let value;
    const parsed = JSON.parse(arg0);
    ({ type, value } = parsed);
    if ("onReady" === type) {
      let READY;
      const tmp17 = closure_2;
      if ("-1" === value) {
        READY = MediaModalWebViewBase.PlayerState.ERRORED;
      } else {
        READY = MediaModalWebViewBase.PlayerState.READY;
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
      closure_2(MediaModalWebViewBase.PlayerState.ERRORED);
      closure_3(str6);
      const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
      const obj = { platform: "youtube", action: "errored", error: str6 };
      const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted(obj);
    } else if ("onStateChange" === type) {
      const obj2 = { "-1": null, 0: null, 1: null, 2: null, 3: null, 5: null };
      obj2[0] = MediaModalWebViewBase.PlayerState.UNSTARTED;
      obj2[0] = MediaModalWebViewBase.PlayerState.ENDED;
      obj2[1] = MediaModalWebViewBase.PlayerState.PLAYING;
      obj2[2] = MediaModalWebViewBase.PlayerState.PAUSED;
      obj2[3] = MediaModalWebViewBase.PlayerState.BUFFERING;
      obj2[5] = MediaModalWebViewBase.PlayerState.VIDEO_CUED;
      const tmp4 = null != tmp35 && tmp35 in MediaModalWebViewBase.PlayerState;
      if (tmp4) {
        closure_2(obj2[value]);
      }
    }
  }, []);
  const effect1 = react.useEffect(() => {
    const tmp2 = null != ref.current && first !== MediaModalWebViewBase.PlayerState.UNREADY;
    if (tmp2) {
      const tmp7 = visible && closure_4 === MediaModalWebViewBase.PlayerState.UNREADY && first === MediaModalWebViewBase.PlayerState.READY;
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
  let obj = visible(8376);
  let youtubeVideoIdFromURI = obj.getYoutubeVideoIdFromURI(source.uri);
  if (youtubeVideoIdFromURI == null) {
    const tmpResult = tmp(8376);
    youtubeVideoIdFromURI = tmpResult.getYoutubeClipVideoIdFromURI(source.uri);
  }
  if (null == youtubeVideoIdFromURI) {
    return null;
  } else {
    if (playerState === tmp(8407).PlayerState.ERRORED) {
      if ("embed_not_allowed" === first1) {
        let obj2 = { videoId: youtubeVideoIdFromURI.videoId };
        return ref(tmp7(13020), obj2);
      }
    }
    const tmpResult2 = tmp(1382);
    const isAndroidResult = tmpResult2.isAndroid();
    let str2 = "";
    let str3 = "";
    const obj3 = { ref, style, source: obj4, baseURL, playerState, onDataReceived: callback, onToggleOverlay, javaScriptCanOpenWindowsAutomatically: true, domStorageEnabled: isAndroidResult || undefined, mixedContentMode: str19, nestedScrollEnabled: isAndroidResult || undefined, onError, onLoad, onLoadStart, overScrollMode: str20 };
    const tmp16 = ref;
    const tmp7Result = tmp7(8407);
    if (null != youtubeVideoIdFromURI.start) {
      let tmp18 = globalThis;
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
    str19 = undefined;
    obj4 = { html: "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n    </style>\n    <script>" + "\nconst tag = document.createElement('script');\ntag.setAttribute('src', \"https://www.youtube.com/iframe_api\");\ndocument.head.appendChild(tag);\n\nfunction onYouTubeIframeAPIReady() {\n  window.player = new YT.Player('player', {\n    height:     '100%',\n    width:      '100%',\n    videoId:    '" + youtubeVideoIdFromURI.videoId + "',\n    playerVars: {\n      'playsinline': 1,\n      'fs': 0,\n      'pageType': " + closure_5 + ",\n      " + str2 + "\n      " + combined + "\n      " + str3 + "\n    },\n    events: {\n      'onReady': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onReady', value: window.player.getPlayerState()})\n        );\n      },\n      'onError': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onError', value: e.data})\n        );\n      },\n      'onStateChange': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onStateChange', value: e.data})\n        );\n      }\n    }\n  });\n}\n" + "</script>\n  </head>\n  <body>\n    <div id=\"player\"></div>\n  </body>\n</html>\n", baseUrl: baseURL };
    if (isAndroidResult) {
      str19 = "compatibility";
    }
    str20 = undefined;
    if (isAndroidResult) {
      str20 = "never";
    }
    return tmp16(tmp7Result, obj3, youtubeVideoIdFromURI.videoId);
  }
}));
let result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalYoutube.tsx");

export default memoResult;
