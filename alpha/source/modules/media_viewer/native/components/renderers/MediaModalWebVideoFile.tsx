// Module ID: 8424
// Function ID: 8425
// Name: MediaModalWebVideoFile
// Dependencies: [32, 19, 21, 8423, 558, 576, 5922, 8388, 8390, 2]
// Exports: createWebFileVideoControls

// Module 8424 (MediaModalWebVideoFile)
import Fragment from "Fragment" /* 21 */;
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 8388 */;
import MediaModalWebViewBase from "MediaModalWebViewBase" /* 8423 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c4;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let jsx = Fragment.jsx;
let closure_6 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaModalWebVideoFile(visible) {
  let closure_3;
  let closure_4;
  let controls;
  let first;
  let onError;
  let onLoad;
  let onLoadStart;
  let onToggleOverlay;
  let source;
  let style;
  let tmp10;
  let tmp16;
  let tmp9;
  const tmp2 = first;
  const tmp = visible;
  const obj = visible(first[5]);
  const cResult = obj.c(28);
  visible = visible.visible;
  ({ style, source, controls } = visible);
  ({ onError, onLoad, onLoadStart, onToggleOverlay } = visible);
  [first, _slicedToArray] = react.useState(visible(first[3]).PlayerState.UNREADY);
  const tmp6 = controls(first[6])(first);
  const obj2 = react;
  react = tmp6;
  const tmp7 = controls(first[6])(visible);
  let closure_5 = tmp7;
  let ref;
  if (controls != null) {
    let props = controls.props;
    if (props != null) {
      ref = props.ref;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      const MediaViewerAnalytics = visible(first[7]).MediaViewerAnalytics;
      const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "file", action: "attempted" });
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp10 = items;
    tmp9 = fn;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const effect = obj2.useEffect(tmp9, tmp10);
  let props1;
  const tmp12 = cResult[2];
  if (controls != null) {
    props1 = controls.props;
  }
  if (tmp12 !== props1) {
    let props2;
    if (controls != null) {
      props2 = controls.props;
    }
    const fn2 = function u(arg0) {
      function safeParse(arg0) {
        try {
          const _JSON = JSON;
          return JSON.parse(arg0);
        } catch (err) {
          return {};
        }
      }
      const iter = safeParse(arg0);
      const value = iter.value;
      switch (iter.type) {
        case "loaded":
        {
          closure_3(MediaModalWebViewBase.PlayerState.READY);
          break;
        }
        case "canplay":
        {
          if (controls != null) {
            const props5 = controls.props;
            if (props5 != null) {
              props5.onPlayerStateChange(MediaModalWebViewBase.PlayerState.VIDEO_CUED);
            }
          }
          closure_3(MediaModalWebViewBase.PlayerState.VIDEO_CUED);
          break;
        }
        case "error":
        {
          closure_3(MediaModalWebViewBase.PlayerState.ERRORED);
          const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
          const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "file", action: "errored", error: "unknown" });
          break;
        }
        case "ended":
        {
          if (controls != null) {
            const props4 = controls.props;
            if (props4 != null) {
              props4.onPlayerStateChange(MediaModalWebViewBase.PlayerState.ENDED);
            }
          }
          closure_3(MediaModalWebViewBase.PlayerState.ENDED);
          break;
        }
        case "play":
        {
          if (controls != null) {
            const props3 = controls.props;
            if (props3 != null) {
              props3.onPlayerStateChange(MediaModalWebViewBase.PlayerState.PLAYING);
            }
          }
          closure_3(MediaModalWebViewBase.PlayerState.PLAYING);
          break;
        }
        case "pause":
        {
          if (controls != null) {
            const props2 = controls.props;
            if (props2 != null) {
              props2.onPlayerStateChange(MediaModalWebViewBase.PlayerState.PAUSED);
            }
          }
          closure_3(MediaModalWebViewBase.PlayerState.PAUSED);
          break;
        }
        case "stalled":
        {
          if (controls != null) {
            const props = controls.props;
            if (props != null) {
              props.onPlayerStateChange(MediaModalWebViewBase.PlayerState.BUFFERING);
            }
          }
          closure_3(MediaModalWebViewBase.PlayerState.BUFFERING);
          break;
        }
        case "durationchange":
        {
          if (null != value) {
            if (controls != null) {
              const props8 = controls.props;
              if (props8 != null) {
                const onDuration = props8.onDuration;
                if (onDuration != null) {
                  onDuration(value);
                }
              }
            }
          }
          break;
        }
        case "progress":
        {
          if (null != value) {
            if (controls != null) {
              const props7 = controls.props;
              if (props7 != null) {
                const onDownloadProgress = props7.onDownloadProgress;
                if (onDownloadProgress != null) {
                  onDownloadProgress(value);
                }
              }
            }
          }
          break;
        }
        case "timeupdate":
        {
          if (null != value) {
            if (controls != null) {
              const props6 = controls.props;
              if (props6 != null) {
                const onCurrentSecond = props6.onCurrentSecond;
                if (onCurrentSecond != null) {
                  onCurrentSecond(value);
                }
              }
            }
          }
          break;
        }
      }
    };
    cResult[2] = props2;
    cResult[3] = fn2;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor(isMuted) {
        return isMuted.isMuted;
      }
    }
    cResult[4] = U;
    tmp16 = U;
  } else {
    class U {
      constructor(isMuted) {
        return isMuted.isMuted;
      }
    }
  }
  const tmpResult = tmp(tmp2[8]);
  const mediaPlayerMutedStore = tmpResult.useMediaPlayerMutedStore(tmp16);
  if (cResult[5] === mediaPlayerMutedStore) {
    class U {
      constructor(isMuted) {
        return isMuted.isMuted;
      }
    }
  }
  class O {
    constructor() {
      let current1;
      if (ref != null) {
        current1 = tmp.current;
      }
      const tmp3 = null != current1 && first !== MediaModalWebViewBase.PlayerState.UNREADY;
      if (tmp3) {
        const current = tmp.current;
        const _JSON = JSON;
        const _HermesInternal = HermesInternal;
        current.injectJavaScript("window.player.muted = " + JSON.stringify(mediaPlayerMutedStore) + "; true;");
        const tmp11 = visible && closure_4 === MediaModalWebViewBase.PlayerState.UNREADY && first === MediaModalWebViewBase.PlayerState.READY;
        if (tmp11) {
          const current2 = tmp.current;
          current2.injectJavaScript("window.player.play();  true;");
        }
        const tmp19 = tmp10 && !closure_5;
        if (tmp19) {
          const current3 = tmp.current;
          current3.injectJavaScript("window.player.play();  true;");
        }
        const tmp22 = !visible && closure_5;
        if (tmp22) {
          const current4 = tmp.current;
          current4.injectJavaScript("window.player.pause(); true;");
        }
      }
    }
  }
  const items1 = [ref, visible, tmp7, tmp6, first, mediaPlayerMutedStore];
  cResult[5] = mediaPlayerMutedStore;
  cResult[6] = first;
  cResult[7] = tmp6;
  cResult[8] = tmp7;
  cResult[9] = visible;
  cResult[10] = ref;
  cResult[11] = O;
  cResult[12] = items1;
}) : (function MediaModalWebVideoFile(visible) {
  let closure_3;
  let closure_4;
  let closure_5;
  let controls;
  let onError;
  let onLoad;
  let onLoadStart;
  let onToggleOverlay;
  let playerState;
  let source;
  let style;
  visible = visible.visible;
  ({ source, controls } = visible);
  playerState = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let mediaPlayerMutedStore;
  const tmp2 = playerState;
  ({ style, onError, onLoad, onLoadStart, onToggleOverlay } = visible);
  const tmp = visible;
  [playerState, _slicedToArray] = react.useState(visible(playerState[3]).PlayerState.UNREADY);
  const tmp6 = controls(playerState[6])(playerState);
  react = tmp6;
  const tmp7 = controls(playerState[6])(visible);
  jsx = tmp7;
  let ref;
  const tmp5 = controls;
  if (controls != null) {
    let props = controls.props;
    if (props != null) {
      ref = props.ref;
    }
  }
  const effect = obj.useEffect(() => {
    const MediaViewerAnalytics = visible(first[7]).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "file", action: "attempted" });
  }, []);
  let props1;
  const useCallback = react.useCallback;
  if (controls != null) {
    props1 = controls.props;
  }
  const items = [props1];
  const callback = useCallback((arg0) => {
    function safeParse(arg0) {
      try {
        const _JSON = JSON;
        return JSON.parse(arg0);
      } catch (err) {
        return {};
      }
    }
    const iter = safeParse(arg0);
    const value = iter.value;
    switch (iter.type) {
      case "loaded":
      {
        closure_3(MediaModalWebViewBase.PlayerState.READY);
        break;
      }
      case "canplay":
      {
        if (controls != null) {
          const props5 = controls.props;
          if (props5 != null) {
            props5.onPlayerStateChange(MediaModalWebViewBase.PlayerState.VIDEO_CUED);
          }
        }
        closure_3(MediaModalWebViewBase.PlayerState.VIDEO_CUED);
        break;
      }
      case "error":
      {
        closure_3(MediaModalWebViewBase.PlayerState.ERRORED);
        const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
        const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "file", action: "errored", error: "unknown" });
        break;
      }
      case "ended":
      {
        if (controls != null) {
          const props4 = controls.props;
          if (props4 != null) {
            props4.onPlayerStateChange(MediaModalWebViewBase.PlayerState.ENDED);
          }
        }
        closure_3(MediaModalWebViewBase.PlayerState.ENDED);
        break;
      }
      case "play":
      {
        if (controls != null) {
          const props3 = controls.props;
          if (props3 != null) {
            props3.onPlayerStateChange(MediaModalWebViewBase.PlayerState.PLAYING);
          }
        }
        closure_3(MediaModalWebViewBase.PlayerState.PLAYING);
        break;
      }
      case "pause":
      {
        if (controls != null) {
          const props2 = controls.props;
          if (props2 != null) {
            props2.onPlayerStateChange(MediaModalWebViewBase.PlayerState.PAUSED);
          }
        }
        closure_3(MediaModalWebViewBase.PlayerState.PAUSED);
        break;
      }
      case "stalled":
      {
        if (controls != null) {
          const props = controls.props;
          if (props != null) {
            props.onPlayerStateChange(MediaModalWebViewBase.PlayerState.BUFFERING);
          }
        }
        closure_3(MediaModalWebViewBase.PlayerState.BUFFERING);
        break;
      }
      case "durationchange":
      {
        if (null != value) {
          if (controls != null) {
            const props8 = controls.props;
            if (props8 != null) {
              const onDuration = props8.onDuration;
              if (onDuration != null) {
                onDuration(value);
              }
            }
          }
        }
        break;
      }
      case "progress":
      {
        if (null != value) {
          if (controls != null) {
            const props7 = controls.props;
            if (props7 != null) {
              const onDownloadProgress = props7.onDownloadProgress;
              if (onDownloadProgress != null) {
                onDownloadProgress(value);
              }
            }
          }
        }
        break;
      }
      case "timeupdate":
      {
        if (null != value) {
          if (controls != null) {
            const props6 = controls.props;
            if (props6 != null) {
              const onCurrentSecond = props6.onCurrentSecond;
              if (onCurrentSecond != null) {
                onCurrentSecond(value);
              }
            }
          }
        }
        break;
      }
    }
  }, items);
  const tmpResult = tmp(tmp2[8]);
  mediaPlayerMutedStore = tmpResult.useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const items1 = [ref, visible, tmp7, tmp6, playerState, mediaPlayerMutedStore];
  const effect1 = obj.useEffect(() => {
    let current1;
    if (ref != null) {
      current1 = tmp.current;
    }
    const tmp3 = null != current1 && first !== MediaModalWebViewBase.PlayerState.UNREADY;
    if (tmp3) {
      const current = tmp.current;
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      current.injectJavaScript("window.player.muted = " + JSON.stringify(mediaPlayerMutedStore) + "; true;");
      const tmp11 = visible && closure_4 === MediaModalWebViewBase.PlayerState.UNREADY && first === MediaModalWebViewBase.PlayerState.READY;
      if (tmp11) {
        const current2 = tmp.current;
        current2.injectJavaScript("window.player.play();  true;");
      }
      const tmp19 = tmp10 && !closure_5;
      if (tmp19) {
        const current3 = tmp.current;
        current3.injectJavaScript("window.player.play();  true;");
      }
      const tmp22 = !visible && closure_5;
      if (tmp22) {
        const current4 = tmp.current;
        current4.injectJavaScript("window.player.pause(); true;");
      }
    }
  }, items1);
  const combined = "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        inset: 0;\n        width: 100%;\n        height: 100%;\n        background-color: #000;\n        object-fit: contain;\n      }\n    </style>\n    <script>" + "\nfunction onReady() {\n  const player = window.player = document.createElement('video');\n  player.controls = false;\n  player.autoplay = false;\n  player.playsInline = true;\n  player.disablePictureInPicture = true;\n  const addEvent = (name, func) => {\n    player.addEventListener(name, (e) => {\n      window.ReactNativeWebView.postMessage(\n        JSON.stringify({type: name, value: func ? func() : undefined})\n      );\n    });\n  };\n  addEvent('error', () => player.error);\n  addEvent('canplay');\n  addEvent('ended');\n  addEvent('pause');\n  addEvent('play');\n  addEvent('stalled');\n  addEvent('durationchange', () => player.duration);\n  addEvent('timeupdate', () => player.currentTime);\n  addEvent('progress', () => {\n    const ranges = player.buffered;\n    let total = 0;\n    for (let i = 0; i < ranges.length; i++) {\n      total += (ranges.end(i) - ranges.start(i));\n    }\n    return total;\n  });\n  player.src = " + JSON.stringify(source.uri) + ";\n  document.body.appendChild(player);\n  player.load();\n  window.ReactNativeWebView.postMessage(JSON.stringify({type: 'loaded'}));\n}\nwindow.addEventListener('load', onReady);\n" + "</script>\n  </head>\n  <body>\n  </body>\n</html>\n";
  const obj3 = { html: combined, baseUrl: ref };
  return jsx(tmp5(tmp2[3]), { ref, style, source: obj3, baseURL: ref, playerState, onDataReceived: callback, onToggleOverlay, javaScriptCanOpenWindowsAutomatically: true, onError, onLoad, onLoadStart }, source.uri);
}));
let result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalWebVideoFile.tsx");

export default memoResult;
export const createWebFileVideoControls = function createWebFileVideoControls() {
  const ref = react.createRef();
  react = 0;
  let c5 = 0;
  let c6 = 0;
  return {
    seek(arg0) {
      const current = ref.current;
      if (current != null) {
        const _JSON = JSON;
        const _HermesInternal = HermesInternal;
        current.injectJavaScript("window.player.currentTime = " + JSON.stringify(arg0) + "; true;");
      }
    },
    pause(arg0) {
      const current = ref.current;
      if (current != null) {
        let str = "play";
        const injectJavaScript = current.injectJavaScript;
        if (arg0) {
          str = "pause";
        }
        const _HermesInternal = HermesInternal;
        injectJavaScript("window.player." + str + "(); true;");
      }
    },
    useSubscribe(arg0, arg1, arg2) {
      let closure_1_0 = arg0;
      let closure_1_1 = arg1;
      let closure_1_2 = arg2;
      const layoutEffect = react.useLayoutEffect(() => {
        if (closure_1_0 != null) {
          tmp(closure_1_4, closure_1_5);
        }
      }, []);
    },
    props: {
      ref,
      onPlayerStateChange(arg0) {
        if (importDefault != null) {
          const tmp5 = arg0 === MediaModalWebViewBase.PlayerState.PAUSED || arg0 === MediaModalWebViewBase.PlayerState.ENDED;
          tmp(tmp5);
        }
      },
      onCurrentSecond(arg0) {
        c4 = arg0;
        if (_require != null) {
          tmp(c4, c5);
        }
      },
      onDuration(arg0) {
        c5 = arg0;
        if (_require != null) {
          tmp(c4, c5);
        }
        if (c5 > 0) {
          if (dependencyMap != null) {
            tmp8(tmp7);
          }
        }
      },
      onDownloadProgress(arg0) {
        c6 = arg0;
        if (c5 > 0) {
          if (dependencyMap != null) {
            tmp4(tmp3);
          }
        }
      }
    }
  };
};
