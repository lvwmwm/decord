// Module ID: 8343
// Function ID: 65738
// Name: getReadablePlayerError
// Dependencies: [57, 31, 33, 8344, 8328, 8322, 8326, 8327, 2]
// Exports: createTiktokVideoControls

// Module 8343 (getReadablePlayerError)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
function getReadablePlayerError(arg0) {
  if ("1" === arg0) {
    return "MEDIA_ERR_ABORTED";
  } else if ("2" === arg0) {
    return "MEDIA_ERR_NETWORK";
  } else if ("3" === arg0) {
    return "MEDIA_ERR_DECODE";
  } else if ("4" === arg0) {
    return "MEDIA_ERR_SRC_NOT_SUPPORTED";
  } else {
    return "UNKNOWN";
  }
}
function postMessage(current) {
  const merged = Object.assign(arg1);
  current = current.current;
  if (null != current) {
    const _HermesInternal = HermesInternal;
    current.injectJavaScript("\n    window.postMessage(" + tmp2 + ", '*')\n  ");
  }
}
let closure_6 = { controls: 0, enable_music_info: 0, enable_timestamp: 0, utm_source: "discord.gg" };
let obj = { "-1": require("PlayerState").PlayerState.UNSTARTED, [0]: require("PlayerState").PlayerState.ENDED, [1]: require("PlayerState").PlayerState.PLAYING, [2]: require("PlayerState").PlayerState.PAUSED, [3]: require("PlayerState").PlayerState.BUFFERING };
const memoResult = importAllResult.memo((visible) => {
  visible = visible.visible;
  const source = visible.source;
  const controls = visible.controls;
  let obj = { visible: 0, style: 0, source: 0, controls: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(visible, obj);
  let ref;
  let mediaPlayerMutedStore;
  let tmp3 = first(importAllResult.useState(visible(controls[3]).PlayerState.UNREADY), 2);
  first = tmp3[0];
  const tmp5 = source(controls[4])(first);
  const jsx = tmp5;
  const tmp6 = source(controls[4])(visible);
  let closure_6 = tmp6;
  ref = undefined;
  if (null != controls) {
    let props = controls.props;
    if (null != props) {
      ref = props.ref;
    }
  }
  props = undefined;
  if (null != controls) {
    props = controls.props;
  }
  const items = [props];
  const callback = importAllResult.useCallback((arg0) => {
    const iter = JSON.parse(arg0);
    const type = iter.type;
    if ("onPlayerReady" === type) {
      callback(visible(controls[3]).PlayerState.READY);
    } else if ("onStateChange" === type) {
      if (null != ref[iter.value]) {
        let tmp20 = null == controls;
        if (!tmp20) {
          const props3 = controls.props;
          tmp20 = null == props3;
          const obj4 = props3;
        }
        if (!tmp20) {
          obj4.onPlayerStateChange(tmp17);
        }
        callback(tmp17);
      }
    } else if ("onError" === type) {
      callback(visible(controls[3]).PlayerState.ERRORED);
      const MediaViewerAnalytics = visible(controls[5]).MediaViewerAnalytics;
      let obj = { platform: "tiktok", action: "errored", error: mediaPlayerMutedStore(iter.value) };
      const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted(obj);
    } else if ("onCurrentTime" === type) {
      let tmp3 = null == controls;
      if (!tmp3) {
        const props = controls.props;
        tmp3 = null == props;
        obj = props;
      }
      if (!tmp3) {
        tmp3 = null == obj.onCurrentSecond;
      }
      if (!tmp3) {
        obj.onCurrentSecond(iter.value.currentTime);
      }
      let tmp7 = null == controls;
      if (!tmp7) {
        const props2 = controls.props;
        tmp7 = null == props2;
      }
      if (!tmp7) {
        tmp7 = null == obj2.onDuration;
      }
      if (!tmp7) {
        obj2.onDuration(iter.value.duration);
      }
    } else if ("onMute" === type) {
      visible(controls[6]).setMuted(iter.value);
      const obj5 = visible(controls[6]);
    }
  }, items);
  mediaPlayerMutedStore = visible(controls[7]).useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const items1 = [ref, visible, tmp6, tmp5, first, mediaPlayerMutedStore];
  const effect = importAllResult.useEffect(() => {
    let current;
    if (null != ref) {
      current = ref.current;
    }
    let tmp3 = null != current;
    if (tmp3) {
      tmp3 = first !== visible(controls[3]).PlayerState.UNREADY;
    }
    if (tmp3) {
      let tmp7 = visible;
      if (visible) {
        tmp7 = closure_5 === visible(controls[3]).PlayerState.UNREADY;
      }
      if (tmp7) {
        tmp7 = first === visible(controls[3]).PlayerState.READY;
      }
      if (tmp7) {
        let obj = { type: "play" };
        outer1_9(ref, obj);
      }
      let tmp17 = visible;
      if (visible) {
        tmp17 = !closure_6;
      }
      if (tmp17) {
        obj = { type: "play" };
        outer1_9(ref, obj);
      }
      if (tmp23) {
        obj = { type: "pause" };
        outer1_9(ref, obj);
      }
      if (first === visible(controls[3]).PlayerState.ENDED) {
        outer1_9(ref, { type: "seekTo", value: 0 });
        const obj1 = { type: "play" };
        outer1_9(ref, obj1);
      }
      const obj2 = {};
      let str5 = "unMute";
      if (mediaPlayerMutedStore) {
        str5 = "mute";
      }
      obj2.type = str5;
      outer1_9(ref, obj2);
      tmp23 = !visible && closure_6;
      const tmp35 = outer1_9;
      const tmp36 = ref;
    }
  }, items1);
  const effect1 = importAllResult.useEffect(() => {
    const MediaViewerAnalytics = visible(controls[5]).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "tiktok", action: "attempted" });
  }, []);
  const items2 = [source.uri];
  const memo = importAllResult.useMemo(() => {
    const str = new URL(source.uri);
    const entries = Object.entries(closure_6);
    const item = entries.forEach((arg0) => {
      let str;
      let tmp;
      [tmp, str] = arg0;
      const searchParams = str.searchParams;
      searchParams.append(tmp, str.toString());
    });
    return str.toString();
  }, items2);
  obj = { ref, style: visible.style };
  obj = {};
  let obj2 = visible(controls[7]);
  const merged1 = Object.assign(source);
  obj["uri"] = memo;
  obj.source = obj;
  obj.baseURL = "https://www.tiktok.com/player/v1/";
  obj.injectedJavaScript = "\n  window.addEventListener('message', function(event) {\n    if (!event.data[\"x-tiktok-player\"]) {\n      return;\n    }\n    window.ReactNativeWebView.postMessage(JSON.stringify(event.data));\n  }, true);\n";
  obj.onDataReceived = callback;
  obj.playerState = first;
  const merged2 = Object.assign(merged);
  return jsx(source(controls[3]), {});
});
let result = require("jsxProd").fileFinishedImporting("modules/media_viewer/native/components/MediaModalTiktok.tsx");

export default memoResult;
export const createTiktokVideoControls = function createTiktokVideoControls() {
  const ref = importAllResult.createRef();
  let c3 = 0;
  let c5 = false;
  obj = {
    seek(value) {
      outer1_9(ref, { type: "seekTo", value });
    },
    pause(arg0) {
      if (closure_5 !== arg0) {
        const obj = {};
        closure_5 = arg0;
        let str = "play";
        if (arg0) {
          str = "pause";
        }
        obj.type = str;
        outer1_9(ref, obj);
        const tmp = outer1_9;
        const tmp2 = ref;
      }
    },
    useSubscribe(arg0, arg1, arg2) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const layoutEffect = React.useLayoutEffect(() => {
        if (null != callback) {
          callback(outer1_3, outer1_4);
        }
        if (null != callback2) {
          callback2(outer1_5);
        }
      }, []);
    },
    props: obj
  };
  obj = {
    ref,
    onPlayerStateChange(arg0) {
      if (null != closure_1) {
        let tmp4 = arg0 === outer1_0(ref[3]).PlayerState.PAUSED;
        if (!tmp4) {
          tmp4 = arg0 === outer1_0(ref[3]).PlayerState.ENDED;
        }
        closure_1(tmp4);
        const tmp = closure_1;
      }
    },
    onCurrentSecond(arg0) {
      let _slicedToArray = arg0;
      if (null != callback) {
        callback(_slicedToArray, c4);
      }
    },
    onDuration(arg0) {
      let closure_4 = arg0;
      if (null != callback) {
        callback(c3, closure_4);
      }
    }
  };
  return obj;
};
