// Module ID: 7744
// Function ID: 7745
// Name: MediaModalTiktok
// Dependencies: [32, 19, 21, 7745, 7720, 7709, 7710, 7711, 2]
// Exports: createTiktokVideoControls

// Module 7744 (MediaModalTiktok)
import Fragment from "Fragment" /* 21 */;
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 7709 */;
import useVideoControls from "useVideoControls" /* 7710 */;
import MediaModalWebView from "MediaModalWebView" /* 7745 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c4, visible;

let react = react_mod;
let jsx = Fragment.jsx;
let closure_6 = { controls: 0, enable_music_info: 0, enable_timestamp: 0, utm_source: "discord.gg" };
let obj = { "-1": MediaModalWebView.PlayerState.UNSTARTED, 0: null, 1: null, 2: null, 3: null };
obj[0] = MediaModalWebView.PlayerState.ENDED;
obj[1] = MediaModalWebView.PlayerState.PLAYING;
obj[2] = MediaModalWebView.PlayerState.PAUSED;
obj[3] = MediaModalWebView.PlayerState.BUFFERING;
const memoResult = react.memo((visible) => {
  let closure_4;
  let closure_5;
  visible = visible.visible;
  const source = visible.source;
  const controls = visible.controls;
  const style = visible.style;
  let merged = Object.assign(visible, Object.assign({ visible: 0, style: 0, source: 0, controls: 0 }));
  let playerState;
  react = undefined;
  let mediaPlayerMutedStore;
  obj = react;
  let tmp3 = controls;
  const tmp4 = playerState(react.useState(visible(controls[3]).PlayerState.UNREADY), 2);
  playerState = tmp4[0];
  react = tmp4[1];
  const tmp7 = source(controls[4])(playerState);
  jsx = tmp7;
  let tmp8 = source(controls[4])(visible);
  closure_6 = tmp8;
  let ref;
  const tmp2 = visible;
  const tmp6 = source;
  if (controls != null) {
    let props = controls.props;
    if (props != null) {
      ref = props.ref;
    }
  }
  let props1;
  const useCallback = obj.useCallback;
  if (controls != null) {
    props1 = controls.props;
  }
  const items = [props1];
  const callback = useCallback((arg0) => {
    const iter = JSON.parse(arg0);
    const type = iter.type;
    if ("onPlayerReady" === type) {
      closure_4(MediaModalWebView.PlayerState.READY);
    } else if ("onStateChange" === type) {
      if (null != obj[iter.value]) {
        if (controls != null) {
          const props2 = controls.props;
          if (props2 != null) {
            props2.onPlayerStateChange(obj[iter.value]);
          }
        }
        closure_4(obj[iter.value]);
      }
    } else if ("onError" === type) {
      let str5;
      closure_4(MediaModalWebView.PlayerState.ERRORED);
      const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
      const value = iter.value;
      const trackMessageEmbedsActionCompleted = MediaViewerAnalytics.trackMessageEmbedsActionCompleted;
      if ("1" === value) {
        str5 = "MEDIA_ERR_ABORTED";
      } else if ("2" === value) {
        str5 = "MEDIA_ERR_NETWORK";
      } else if ("3" === value) {
        str5 = "MEDIA_ERR_DECODE";
      } else {
        str5 = "MEDIA_ERR_SRC_NOT_SUPPORTED";
        if ("4" !== value) {
          str5 = "UNKNOWN";
        }
      }
      obj = { platform: "tiktok", action: "errored", error: str5 };
      const result = trackMessageEmbedsActionCompleted(obj);
    } else if ("onCurrentTime" === type) {
      if (controls != null) {
        const props = tmp.props;
        if (props != null) {
          const onCurrentSecond = props.onCurrentSecond;
          if (onCurrentSecond != null) {
            onCurrentSecond(iter.value.currentTime);
          }
        }
      }
      if (controls != null) {
        const props3 = tmp.props;
        if (props3 != null) {
          const onDuration = props3.onDuration;
          if (onDuration != null) {
            onDuration(iter.value.duration);
          }
        }
      }
    } else if ("onMute" === type) {
      const obj2 = useVideoControls;
      obj2.setMuted(iter.value);
    }
  }, items);
  const tmp2Result = tmp2(tmp3[7]);
  mediaPlayerMutedStore = tmp2Result.useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const items1 = [ref, visible, tmp8, tmp7, playerState, mediaPlayerMutedStore];
  const effect = obj.useEffect(() => {
    let current1;
    if (ref != null) {
      current1 = tmp.current;
    }
    const tmp3 = null != current1 && first !== MediaModalWebView.PlayerState.UNREADY;
    if (tmp3) {
      const tmp8 = visible && closure_5 === MediaModalWebView.PlayerState.UNREADY && first === MediaModalWebView.PlayerState.READY;
      if (tmp8) {
        const _JSON = JSON;
        const merged = Object.assign({ type: "play" });
        const current = tmp.current;
        if (current != null) {
          const _HermesInternal = HermesInternal;
          current.injectJavaScript("\n    window.postMessage(" + tmp18 + ", '*')\n  ");
        }
      }
      const tmp20 = tmp7 && !closure_6;
      if (tmp20) {
        const _JSON2 = JSON;
        const stringify2 = JSON.stringify;
        const merged1 = Object.assign({ type: "play" });
        const current2 = tmp.current;
        if (current2 != null) {
          const _HermesInternal2 = HermesInternal;
          current2.injectJavaScript("\n    window.postMessage(" + tmp25 + ", '*')\n  ");
        }
      }
      const tmp27 = !visible && closure_6;
      if (tmp27) {
        const _JSON3 = JSON;
        const stringify3 = JSON.stringify;
        const merged2 = Object.assign({ type: "pause" });
        const current3 = tmp.current;
        if (current3 != null) {
          const _HermesInternal3 = HermesInternal;
          current3.injectJavaScript("\n    window.postMessage(" + tmp31 + ", '*')\n  ");
        }
      }
      if (first === MediaModalWebView.PlayerState.ENDED) {
        const _JSON6 = JSON;
        const stringify6 = JSON.stringify;
        const merged3 = Object.assign({ type: "seekTo", value: 0 });
        const current6 = tmp.current;
        if (current6 != null) {
          const _HermesInternal4 = HermesInternal;
          current6.injectJavaScript("\n    window.postMessage(" + tmp51 + ", '*')\n  ");
        }
        const _JSON4 = JSON;
        const stringify4 = JSON.stringify;
        const merged4 = Object.assign({ type: "play" });
        const current4 = tmp.current;
        if (current4 != null) {
          const _HermesInternal5 = HermesInternal;
          current4.injectJavaScript("\n    window.postMessage(" + tmp39 + ", '*')\n  ");
        }
      }
      let str11 = "unMute";
      if (mediaPlayerMutedStore) {
        str11 = "mute";
      }
      const _JSON5 = JSON;
      const stringify5 = JSON.stringify;
      const obj6 = { type: str11 };
      const merged5 = Object.assign(obj6);
      const current5 = tmp.current;
      if (current5 != null) {
        const _HermesInternal6 = HermesInternal;
        current5.injectJavaScript("\n    window.postMessage(" + tmp46 + ", '*')\n  ");
      }
    }
  }, items1);
  const effect1 = obj.useEffect(() => {
    const MediaViewerAnalytics = visible(controls[5]).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "tiktok", action: "attempted" });
  }, []);
  const items2 = [source.uri];
  const memo = obj.useMemo(() => {
    const str = new URL(source.uri);
    const entries = Object.entries(closure_6);
    const item = entries.forEach((item) => {
      let tmp;
      [tmp, str] = item;
      const searchParams = str.searchParams;
      searchParams.append(tmp, str.toString());
    });
    return str.toString();
  }, items2);
  const obj3 = { uri: memo };
  tmp6(tmp3[3]);
  let merged1 = Object.assign(source);
  let merged2 = Object.assign(merged);
  return <tmp6Result ref={ref} style={style} source={obj3} baseURL="https://www.tiktok.com/player/v1/" injectedJavaScript="\n  window.addEventListener('message', function(event) {\n    if (!event.data[\"x-tiktok-player\"]) {\n      return;\n    }\n    window.ReactNativeWebView.postMessage(JSON.stringify(event.data));\n  }, true);\n" onDataReceived={callback} playerState={playerState} />;
});
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalTiktok.tsx");

export default memoResult;
export const createTiktokVideoControls = function createTiktokVideoControls() {
  const ref = react.createRef();
  let c3 = 0;
  react = 0;
  let c5 = false;
  obj = {
    seek(value) {
      obj = { type: "seekTo", value };
      const merged = Object.assign(obj);
      const current = ref.current;
      if (current != null) {
        const _HermesInternal = HermesInternal;
        current.injectJavaScript("\n    window.postMessage(" + tmp2 + ", '*')\n  ");
      }
    },
    pause(arg0) {
      if (c5 !== arg0) {
        c5 = arg0;
        let str = "play";
        const tmp = ref;
        if (arg0) {
          str = "pause";
        }
        const _JSON = JSON;
        obj = { type: str };
        const merged = Object.assign(obj);
        const current = tmp.current;
        if (current != null) {
          const _HermesInternal = HermesInternal;
          current.injectJavaScript("\n    window.postMessage(" + tmp6 + ", '*')\n  ");
        }
      }
    },
    useSubscribe(arg0, arg1, arg2) {
      let closure_1_0 = arg0;
      let closure_1_1 = arg1;
      const layoutEffect = react.useLayoutEffect(() => {
        if (closure_1_0 != null) {
          tmp(closure_1_3, closure_1_4);
        }
        if (closure_1_1 != null) {
          tmp5(closure_1_5);
        }
      }, []);
    },
    props: {
      ref,
      onPlayerStateChange(arg0) {
        if (importDefault != null) {
          const tmp5 = arg0 === MediaModalWebView.PlayerState.PAUSED || arg0 === MediaModalWebView.PlayerState.ENDED;
          tmp(tmp5);
        }
      },
      onCurrentSecond(arg0) {
        c3 = arg0;
        if (require != null) {
          tmp(c3, c4);
        }
      },
      onDuration(arg0) {
        c4 = arg0;
        if (require != null) {
          tmp(c3, c4);
        }
      }
    }
  };
  return obj;
};
