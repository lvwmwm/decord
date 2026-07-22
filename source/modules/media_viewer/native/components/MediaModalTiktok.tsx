// Module ID: 8293
// Function ID: 65473
// Name: getReadablePlayerError
// Dependencies: []
// Exports: createTiktokVideoControls

// Module 8293 (getReadablePlayerError)
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
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = { "": true, intl: true, body: true, ref: true };
const obj = { -1: arg1(dependencyMap[3]).PlayerState.UNSTARTED, [0]: arg1(dependencyMap[3]).PlayerState.ENDED, [1]: arg1(dependencyMap[3]).PlayerState.PLAYING, [2]: arg1(dependencyMap[3]).PlayerState.PAUSED, [3]: arg1(dependencyMap[3]).PlayerState.BUFFERING };
const memoResult = importAllResult.memo((visible) => {
  visible = visible.visible;
  const arg1 = visible;
  const source = visible.source;
  const importDefault = source;
  const controls = visible.controls;
  const dependencyMap = controls;
  let obj = { "Bool(false)": -24, "Bool(false)": null, "Bool(false)": 1, "Bool(false)": "Malaysia" };
  Object.setPrototypeOf(null);
  const merged = Object.assign(visible, obj);
  obj = undefined;
  let getReadablePlayerError;
  const tmp3 = callback(React.useState(arg1(dependencyMap[3]).PlayerState.UNREADY), 2);
  const first = tmp3[0];
  let callback = first;
  const React = tmp3[1];
  const tmp5 = importDefault(dependencyMap[4])(first);
  const jsx = tmp5;
  const tmp6 = importDefault(dependencyMap[4])(visible);
  let closure_6 = tmp6;
  let ref;
  if (null != controls) {
    let props = controls.props;
    if (null != props) {
      ref = props.ref;
    }
  }
  obj = ref;
  props = undefined;
  if (null != controls) {
    props = controls.props;
  }
  const items = [props];
  callback = React.useCallback((arg0) => {
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
      let obj = { error: mediaPlayerMutedStore(iter.value) };
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
  const mediaPlayerMutedStore = arg1(dependencyMap[7]).useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  getReadablePlayerError = mediaPlayerMutedStore;
  const items1 = [ref, visible, tmp6, tmp5, first, mediaPlayerMutedStore];
  const effect = React.useEffect(() => {
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
        tmp7 = tmp5 === visible(controls[3]).PlayerState.UNREADY;
      }
      if (tmp7) {
        tmp7 = first === visible(controls[3]).PlayerState.READY;
      }
      if (tmp7) {
        let obj = { type: "play" };
        callback2(ref, obj);
      }
      let tmp17 = visible;
      if (visible) {
        tmp17 = !tmp6;
      }
      if (tmp17) {
        obj = { type: "play" };
        callback2(ref, obj);
      }
      if (tmp23) {
        obj = { type: "pause" };
        callback2(ref, obj);
      }
      if (first === visible(controls[3]).PlayerState.ENDED) {
        callback2(ref, { "Null": null, "Null": null });
        const obj1 = { type: "play" };
        callback2(ref, obj1);
      }
      const obj2 = {};
      let str5 = "unMute";
      if (mediaPlayerMutedStore) {
        str5 = "mute";
      }
      obj2.type = str5;
      callback2(ref, obj2);
      const tmp23 = !visible && tmp6;
      const tmp35 = callback2;
      const tmp36 = ref;
    }
  }, items1);
  const effect1 = React.useEffect(() => {
    const MediaViewerAnalytics = visible(controls[5]).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({});
  }, []);
  const items2 = [source.uri];
  const memo = React.useMemo(() => {
    const str = new URL(source.uri);
    const visible = str;
    const entries = Object.entries(tmp6);
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
  const obj2 = arg1(dependencyMap[7]);
  const merged1 = Object.assign(source);
  obj["uri"] = memo;
  obj.source = obj;
  obj.baseURL = "https://www.tiktok.com/player/v1/";
  obj.injectedJavaScript = "\n  window.addEventListener('message', function(event) {\n    if (!event.data[\"x-tiktok-player\"]) {\n      return;\n    }\n    window.ReactNativeWebView.postMessage(JSON.stringify(event.data));\n  }, true);\n";
  obj.onDataReceived = callback;
  obj.playerState = first;
  const merged2 = Object.assign(merged);
  return jsx(importDefault(dependencyMap[3]), obj);
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/media_viewer/native/components/MediaModalTiktok.tsx");

export default memoResult;
export const createTiktokVideoControls = function createTiktokVideoControls() {
  const ref = React.createRef();
  const dependencyMap = ref;
  let closure_3 = 0;
  const React = 0;
  let closure_5 = false;
  let obj = {
    seek(value) {
      callback2(ref, { type: "seekTo", value });
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
        closure_9(ref, obj);
        const tmp = closure_9;
        const tmp2 = ref;
      }
    },
    useSubscribe(arg0, arg1, arg2) {
      const layoutEffect = React.useLayoutEffect(() => {
        if (null != arg0) {
          arg0(closure_3, closure_4);
        }
        if (null != arg1) {
          arg1(closure_5);
        }
      }, []);
    },
    props: obj
  };
  obj = {
    ref,
    onPlayerStateChange(arg0) {
      if (null != closure_1) {
        let tmp4 = arg0 === callback(ref[3]).PlayerState.PAUSED;
        if (!tmp4) {
          tmp4 = arg0 === callback(ref[3]).PlayerState.ENDED;
        }
        closure_1(tmp4);
        const tmp = closure_1;
      }
    },
    onCurrentSecond(arg0) {
      let closure_3 = arg0;
      if (null != callback) {
        callback(closure_3, closure_4);
      }
    },
    onDuration(arg0) {
      let closure_4 = arg0;
      if (null != callback) {
        callback(closure_3, closure_4);
      }
    }
  };
  return obj;
};
