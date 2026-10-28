// Module ID: 8826
// Function ID: 8827
// Name: NativeVideo
// Dependencies: [32, 109, 19, 17, 21, 5003, 558, 576, 81, 8827, 5701, 2]

// Module 8826 (NativeVideo)
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let StyleSheet;
let c10;
let c9;
let obj2;
let unpackModuleId;
const f101807 = (item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  return { name, value };
};
let closure_3 = ["ref"];
let closure_4 = ["src"];
let closure_5 = ["src"];
let react = react_mod;
({ View: c9, StyleSheet } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let sum = 0;
let createStyles = createStyles_mod;
let obj = { container: { overflow: "hidden" }, content: obj2 };
obj2 = {};
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_13 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function NativeVideo(ref) {
  let closure_2;
  let entries;
  let first;
  let id;
  let items2;
  let items3;
  let obj19;
  let obj4;
  let obj5;
  let source;
  let str2;
  let tmp10;
  let tmp25;
  let tmp9;
  let tmp = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(12);
  ref = ref.ref;
  let tmp3 = _objectWithoutProperties(ref, obj4);
  _require = tmp3;
  const tmp4 = closure_13();
  const obj2 = react;
  const ref1 = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = {};
    let num = 0;
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  [tmp9, tmp10] = id(obj2.useState(first), 2);
  dependencyMap = tmp10;
  obj4 = {};
  const tmp8 = id(obj2.useState(first), 2);
  let merged = Object.assign(tmp3);
  let merged1 = Object.assign(tmp9);
  if (typeof obj4.source === "number") {
    source = ref1(81)(obj4.source);
  } else {
    source = obj4.source;
  }
  const _JSON = JSON;
  if (typeof obj4.source === "object") {
    let headers = obj4.source.headers;
    if (headers == null) {
      headers = {};
    }
    obj5 = headers;
  } else {
    obj5 = {};
  }
  const json = stringify(obj5);
  let str;
  if (source != null) {
    str = source.uri;
  }
  if (str == null) {
    str = "";
  }
  if (cResult[1] === json) {
    let tmp15;
    if (cResult[2] === str) {
      tmp15 = cResult[3];
    }
    const tmp7Result = id(obj2.useState(tmp15), 2);
    const first1 = tmp7Result[0];
    let tmp19 = first1.uri === str;
    const tmp18 = tmp7Result[1];
    if (tmp19) {
      tmp19 = first1.headersKey === json;
    }
    if (!tmp19) {
      const _JSON2 = JSON;
      let obj6 = { id: String(sum), uri: str, headersKey: json, headers: entries.map(f101807) };
      const _String = String;
      sum = sum + 1;
      let parsed = JSON.parse(json);
      const _Object = Object;
      entries = Object.entries(parsed);
      tmp18(obj6);
    }
    id = first1.id;
    [tmp25, _objectWithoutProperties] = id(obj2.useState(null), 2);
    id(obj2.useState(null), 2);
    react = obj2.useRef(tmp3);
    if (cResult[4] === tmp3) {
      let tmp26;
      let tmp27;
      let tmp29;
      let tmp30;
      if (cResult[5] === tmp10) {
        tmp26 = cResult[6];
      }
      if (cResult[7] !== tmp3) {
        const items = [tmp3];
        cResult[7] = tmp3;
        cResult[8] = items;
        tmp27 = items;
      } else {
        tmp27 = cResult[8];
      }
      const effect = obj2.useEffect(tmp26, tmp27);
      if (cResult[9] !== tmp10) {
        const fn2 = function j() {
          let obj = {
            seek(arg0, arg1) {
              let num = 100;
              if (undefined !== arg1) {
                num = arg1;
              }
              if (null != ref.current) {
                const Commands = closure_0(dependencyMap[9]).Commands;
                Commands.seek(tmp.current, arg0, num);
              }
            },
            setNativeProps(src) {
              src = src.src;
              const tmp = _objectWithoutProperties(src, json);
              closure_0 = tmp;
              if (null != src) {
                const uri = src.uri;
                let obj = { uri };
                tmp.source = obj;
              }
              let uri1;
              if (src != null) {
                uri1 = src.uri;
              }
              const tmp3 = null === uri1 && null != ref.current;
              if (tmp3) {
                const Commands = closure_0(dependencyMap[9]).Commands;
                Commands.reset(ref.current);
              }
              closure_1_2((arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                const merged1 = Object.assign(closure_0);
                return obj;
              });
            }
          };
          return obj;
        };
        cResult[9] = tmp10;
        cResult[10] = fn2;
        tmp29 = fn2;
      } else {
        tmp29 = cResult[10];
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [];
        cResult[11] = items1;
        tmp30 = items1;
      } else {
        tmp30 = cResult[11];
      }
      const imperativeHandle = obj2.useImperativeHandle(ref, tmp29, tmp30);
      let obj7 = { style: items2, onLayout: obj4.onLayout, accessible: null, accessibilityRole: null, importantForAccessibility: null, "aria-hidden": null, children: items3 };
      items2 = [tmp4.container, obj4.style];
      class O {
        constructor() {
          const current = ref.current;
          ref.current = current;
          tmp10((arg0) => {
            const keys = Object.keys(arg0);
            const found = keys.filter((item) => current[item] !== closure_1_0[item]);
            if (0 === found.length) {
              return arg0;
            } else {
              const obj = {};
              const merged = Object.assign(arg0);
              for (const item10018 of found) {
                delete obj[item10018];
                continue;
              }
              return obj;
            }
          });
        }
      }
      ({ accessibilityRole: obj8.accessibilityRole, importantForAccessibility: obj8.importantForAccessibility, "aria-hidden": obj8["aria-hidden"] } = obj4);
      const obj10 = {
        ref: ref1,
        style: tmp4.content,
        sourceId: id,
        sourceUri: null,
        sourceHeaders: null,
        paused: null,
        muted: null,
        volume: null,
        rate: null,
        repeat: null,
        controls: null,
        resizeMode: null,
        audioPolicy: null,
        disableFocus: null,
        httpEngine: null,
        bufferConfig: null,
        playInBackground: null,
        playWhenInactive: null,
        pictureInPicture: null,
        preventsDisplaySleepDuringVideoPlayback: null,
        automaticallyWaitsToMinimizeStalling: null,
        maxBitRate: null,
        preferredForwardBufferDuration: null,
        onPlaybackEvent: function handleEvent(nativeEvent) {
              let obj19;
              let str2;
              nativeEvent = nativeEvent.nativeEvent;
              if (nativeEvent.sourceId === id) {
                switch (nativeEvent.type) {
                  case "loading":
                  {
                    const onLoadStart = obj4.onLoadStart;
                    if (onLoadStart != null) {
                      onLoadStart();
                    }
                    break;
                  }
                  case "loaded":
                  {
                    const onLoad = obj4.onLoad;
                    if (onLoad != null) {
                      const obj3 = { currentTime: nativeEvent.positionMs / 1000, duration: nativeEvent.durationMs / 1000, naturalSize: size, canPlayFastForward: null, canPlayReverse: null, canPlaySlowForward: null, canPlaySlowReverse: null, canStepBackward: null, canStepForward: null };
                      size = { width: null, height: null, orientation: str2 };
                      ({ width: obj10.width, height: obj10.height } = nativeEvent);
                      str2 = "portrait";
                      if (nativeEvent.width >= nativeEvent.height) {
                        str2 = "landscape";
                      }
                      ({ canPlayFastForward: obj9.canPlayFastForward, canPlayReverse: obj9.canPlayReverse, canPlaySlowForward: obj9.canPlaySlowForward, canPlaySlowReverse: obj9.canPlaySlowReverse, canStepBackward: obj9.canStepBackward, canStepForward: obj9.canStepForward } = nativeEvent);
                      onLoad(obj3);
                    }
                    break;
                  }
                  case "firstFrame":
                  {
                    _objectWithoutProperties(tmp);
                    const onReadyForDisplay = obj4.onReadyForDisplay;
                    if (onReadyForDisplay != null) {
                      onReadyForDisplay();
                    }
                    break;
                  }
                  case "tracks":
                  {
                    const onVideoTracks = obj4.onVideoTracks;
                    if (onVideoTracks != null) {
                      obj4 = { videoTracks: nativeEvent.videoTracks, selectedVideoTrackId: str };
                      const first = nativeEvent.videoTracks[0];
                      str = undefined;
                      if (first != null) {
                        str = first.trackId;
                      }
                      if (str == null) {
                        str = "";
                      }
                      onVideoTracks(obj4);
                    }
                    break;
                  }
                  case "buffering":
                  {
                    const onBuffer = obj4.onBuffer;
                    if (onBuffer != null) {
                      const obj5 = { isBuffering: nativeEvent.buffering };
                      onBuffer(obj5);
                    }
                    break;
                  }
                  case "downloadProgress":
                  {
                    const onDownloadProgress = obj4.onDownloadProgress;
                    if (onDownloadProgress != null) {
                      const obj6 = { progressPercent: nativeEvent.downloadProgress };
                      onDownloadProgress(obj6);
                    }
                    break;
                  }
                  case "progress":
                  {
                    const onProgress = obj4.onProgress;
                    if (onProgress != null) {
                      const obj7 = { currentTime: nativeEvent.positionMs / 1000, playableDuration: nativeEvent.bufferedPositionMs / 1000, seekableDuration: nativeEvent.durationMs / 1000 };
                      onProgress(obj7);
                    }
                    break;
                  }
                  case "seek":
                  {
                    const onSeek = obj4.onSeek;
                    if (onSeek != null) {
                      const obj8 = { currentTime: nativeEvent.positionMs / 1000, seekTime: nativeEvent.requestedPositionMs / 1000 };
                      onSeek(obj8);
                    }
                    break;
                  }
                  case "rate":
                  {
                    const onPlaybackRateChange = obj4.onPlaybackRateChange;
                    if (onPlaybackRateChange != null) {
                      const obj18 = { playbackRate: nativeEvent.playbackRate };
                      onPlaybackRateChange(obj18);
                    }
                    break;
                  }
                  case "stalled":
                  {
                    const onPlaybackStalled = obj4.onPlaybackStalled;
                    if (onPlaybackStalled != null) {
                      onPlaybackStalled();
                    }
                    break;
                  }
                  case "resumed":
                  {
                    const onPlaybackResume = obj4.onPlaybackResume;
                    if (onPlaybackResume != null) {
                      onPlaybackResume();
                    }
                    break;
                  }
                  case "ended":
                  {
                    const onEnd = obj4.onEnd;
                    if (onEnd != null) {
                      onEnd();
                    }
                    break;
                  }
                  case "error":
                  {
                    const onError = obj4.onError;
                    if (onError != null) {
                      const obj = { error: obj19 };
                      obj19 = { "": null, code: null, domain: null, localizedDescription: null };
                      ({ errorMessage: obj2[""], errorCode: obj2.code, errorDomain: obj2.domain, errorMessage: obj2.localizedDescription } = nativeEvent);
                      onError(obj);
                    }
                    break;
                  }
                }
              }
            }
      };
      ({ uri: obj9.sourceUri, headers: obj9.sourceHeaders } = first1);
      ({ paused: obj9.paused, muted: obj9.muted, volume: obj9.volume, rate: obj9.rate, repeat: obj9.repeat, controls: obj9.controls, resizeMode: obj9.resizeMode, mixWithOthers: obj9.audioPolicy, disableFocus: obj9.disableFocus, httpEngine: obj9.httpEngine, bufferConfig: obj9.bufferConfig, playInBackground: obj9.playInBackground, playWhenInactive: obj9.playWhenInactive, pictureInPicture: obj9.pictureInPicture, preventsDisplaySleepDuringVideoPlayback: obj9.preventsDisplaySleepDuringVideoPlayback, automaticallyWaitsToMinimizeStalling: obj9.automaticallyWaitsToMinimizeStalling, maxBitRate: obj9.maxBitRate, preferredForwardBufferDuration: obj9.preferredForwardBufferDuration } = obj4);
      items3 = [closure_10(ref1(8827), obj10), ];
      let tmp34Result = null != obj4.poster && tmp25 !== id;
      const tmp32 = closure_11;
      const tmp33 = closure_9;
      const tmp34 = closure_10;
      const tmp35 = ref1;
      if (tmp34Result) {
        const obj11 = { accessible: false, style: tmp4.content, source: obj19, resizeMode: str2 };
        obj19 = { uri: obj4.poster };
        str2 = "center";
        const tmp35Result = tmp35(5701);
        if ("none" !== obj4.posterResizeMode) {
          let str4 = obj4.posterResizeMode;
          if (str4 == null) {
            str4 = "contain";
          }
          str2 = str4;
        }
        tmp34Result = tmp34(tmp35Result, obj11);
      }
      items3[1] = tmp34Result;
      return tmp32(tmp33, obj7);
    }
    class O {
      constructor() {
        const current = ref.current;
        ref.current = current;
        tmp10((arg0) => {
          const keys = Object.keys(arg0);
          const found = keys.filter((item) => current[item] !== closure_1_0[item]);
          if (0 === found.length) {
            return arg0;
          } else {
            const obj = {};
            const merged = Object.assign(arg0);
            for (const item10018 of found) {
              delete obj[item10018];
              continue;
            }
            return obj;
          }
        });
      }
    }
    cResult[4] = tmp3;
    cResult[5] = tmp10;
    cResult[6] = O;
    tmp26 = O;
  }
  const fn = function w() {
    let entries;
    const obj = { id: String(sum), uri: str, headersKey: json, headers: entries.map(f101807) };
    sum = sum + 1;
    const parsed = JSON.parse(json);
    entries = Object.entries(parsed);
    return obj;
  };
  cResult[1] = json;
  cResult[2] = str;
  cResult[3] = fn;
  tmp15 = fn;
}) : (function NativeVideo(ref) {
  let _undefined;
  let _undefined2;
  let c2;
  let c7;
  let entries;
  let items1;
  let items2;
  let obj3;
  let obj8;
  let source;
  let str2;
  let tmp21;
  let tmp6;
  ref = ref.ref;
  let merged = Object.assign(ref, Object.assign({ ref: 0 }));
  dependencyMap = undefined;
  let json;
  let str;
  let id;
  c7 = undefined;
  react = undefined;
  const tmp2 = closure_13();
  let obj = react;
  const ref1 = react.useRef(null);
  [tmp6, c2] = id(react.useState({}), 2);
  const obj2 = {};
  const tmp5 = id(react.useState({}), 2);
  let merged1 = Object.assign(merged);
  const merged2 = Object.assign(tmp6);
  if (typeof obj2.source === "number") {
    source = ref1(81)(obj2.source);
  } else {
    source = obj2.source;
  }
  const _JSON = JSON;
  if (typeof obj2.source === "object") {
    let headers = obj2.source.headers;
    if (headers == null) {
      headers = {};
    }
    obj3 = headers;
  } else {
    obj3 = {};
  }
  json = stringify(obj3);
  str = undefined;
  if (source != null) {
    str = source.uri;
  }
  if (str == null) {
    str = "";
  }
  const tmp4Result = id(obj.useState(() => {
    let entries;
    const obj = { id: String(sum), uri: str, headersKey: json, headers: entries.map(f101807) };
    sum = sum + 1;
    const parsed = JSON.parse(json);
    entries = Object.entries(parsed);
    return obj;
  }), 2);
  let first = tmp4Result[0];
  let tmp15 = first.uri === str;
  const tmp14 = tmp4Result[1];
  if (tmp15) {
    tmp15 = first.headersKey === json;
  }
  if (!tmp15) {
    const _JSON2 = JSON;
    let obj4 = { id: String(sum), uri: str, headersKey: json, headers: entries.map(f101807) };
    const _String = String;
    sum = sum + 1;
    let parsed = JSON.parse(json);
    const _Object = Object;
    entries = Object.entries(parsed);
    tmp14(obj4);
  }
  id = first.id;
  [tmp21, c7] = id(obj.useState(null), 2);
  id(obj.useState(null), 2);
  react = obj.useRef(merged);
  const items = [merged];
  const effect = obj.useEffect(() => {
    const current = ref.current;
    ref.current = current;
    _undefined((arg0) => {
      const keys = Object.keys(arg0);
      const found = keys.filter((item) => current[item] !== closure_1_0[item]);
      if (0 === found.length) {
        return arg0;
      } else {
        const obj = {};
        merged = Object.assign(arg0);
        for (const item10018 of found) {
          delete obj[item10018];
          continue;
        }
        return obj;
      }
    });
  }, items);
  const imperativeHandle = obj.useImperativeHandle(ref, () => {
    let obj = {
      seek(arg0) {
        let num = arg1;
        if (arg1 === undefined) {
          num = 100;
        }
        if (null != ref.current) {
          const Commands = merged(c2[9]).Commands;
          Commands.seek(tmp.current, arg0, num);
        }
      },
      setNativeProps(src) {
        src = src.src;
        const tmp = c7(src, str);
        let closure_0 = tmp;
        if (null != src) {
          const uri = src.uri;
          let obj = { uri };
          tmp.source = obj;
        }
        let uri1;
        if (src != null) {
          uri1 = src.uri;
        }
        const tmp3 = null === uri1 && null != ref.current;
        if (tmp3) {
          const Commands = merged(c2[9]).Commands;
          Commands.reset(ref.current);
        }
        _undefined((arg0) => {
          const obj = {};
          merged = Object.assign(arg0);
          const merged1 = Object.assign(closure_0);
          return obj;
        });
      }
    };
    return obj;
  }, []);
  let obj5 = { style: items1, onLayout: obj2.onLayout, accessible: obj2.accessible, accessibilityRole: obj2.accessibilityRole, importantForAccessibility: obj2.importantForAccessibility, "aria-hidden": obj2["aria-hidden"], children: items2 };
  items1 = [tmp2.container, obj2.style];
  let obj6 = {
    ref: ref1,
    style: tmp2.content,
    sourceId: id,
    sourceUri: first.uri,
    sourceHeaders: first.headers,
    paused: obj2.paused,
    muted: obj2.muted,
    volume: obj2.volume,
    rate: obj2.rate,
    repeat: obj2.repeat,
    controls: obj2.controls,
    resizeMode: obj2.resizeMode,
    audioPolicy: obj2.mixWithOthers,
    disableFocus: obj2.disableFocus,
    httpEngine: obj2.httpEngine,
    bufferConfig: obj2.bufferConfig,
    playInBackground: obj2.playInBackground,
    playWhenInactive: obj2.playWhenInactive,
    pictureInPicture: obj2.pictureInPicture,
    preventsDisplaySleepDuringVideoPlayback: obj2.preventsDisplaySleepDuringVideoPlayback,
    automaticallyWaitsToMinimizeStalling: obj2.automaticallyWaitsToMinimizeStalling,
    maxBitRate: obj2.maxBitRate,
    preferredForwardBufferDuration: obj2.preferredForwardBufferDuration,
    onPlaybackEvent: function handleEvent(nativeEvent) {
      let obj19;
      let str2;
      nativeEvent = nativeEvent.nativeEvent;
      if (nativeEvent.sourceId === id) {
        switch (nativeEvent.type) {
          case "loading":
          {
            const onLoadStart = obj2.onLoadStart;
            if (onLoadStart != null) {
              onLoadStart();
            }
            break;
          }
          case "loaded":
          {
            const onLoad = obj2.onLoad;
            if (onLoad != null) {
              const obj3 = { currentTime: nativeEvent.positionMs / 1000, duration: nativeEvent.durationMs / 1000, naturalSize: size, canPlayFastForward: null, canPlayReverse: null, canPlaySlowForward: null, canPlaySlowReverse: null, canStepBackward: null, canStepForward: null };
              size = { width: null, height: null, orientation: str2 };
              ({ width: obj10.width, height: obj10.height } = nativeEvent);
              str2 = "portrait";
              if (nativeEvent.width >= nativeEvent.height) {
                str2 = "landscape";
              }
              ({ canPlayFastForward: obj9.canPlayFastForward, canPlayReverse: obj9.canPlayReverse, canPlaySlowForward: obj9.canPlaySlowForward, canPlaySlowReverse: obj9.canPlaySlowReverse, canStepBackward: obj9.canStepBackward, canStepForward: obj9.canStepForward } = nativeEvent);
              onLoad(obj3);
            }
            break;
          }
          case "firstFrame":
          {
            _undefined2(tmp);
            const onReadyForDisplay = obj2.onReadyForDisplay;
            if (onReadyForDisplay != null) {
              onReadyForDisplay();
            }
            break;
          }
          case "tracks":
          {
            const onVideoTracks = obj2.onVideoTracks;
            if (onVideoTracks != null) {
              const first = nativeEvent.videoTracks[0];
              const obj4 = { videoTracks: nativeEvent.videoTracks, selectedVideoTrackId: str };
              str = undefined;
              if (first != null) {
                str = first.trackId;
              }
              if (str == null) {
                str = "";
              }
              onVideoTracks(obj4);
            }
            break;
          }
          case "buffering":
          {
            const onBuffer = obj2.onBuffer;
            if (onBuffer != null) {
              const obj5 = { isBuffering: nativeEvent.buffering };
              onBuffer(obj5);
            }
            break;
          }
          case "downloadProgress":
          {
            const onDownloadProgress = obj2.onDownloadProgress;
            if (onDownloadProgress != null) {
              const obj6 = { progressPercent: nativeEvent.downloadProgress };
              onDownloadProgress(obj6);
            }
            break;
          }
          case "progress":
          {
            const onProgress = obj2.onProgress;
            if (onProgress != null) {
              const obj7 = { currentTime: nativeEvent.positionMs / 1000, playableDuration: nativeEvent.bufferedPositionMs / 1000, seekableDuration: nativeEvent.durationMs / 1000 };
              onProgress(obj7);
            }
            break;
          }
          case "seek":
          {
            const onSeek = obj2.onSeek;
            if (onSeek != null) {
              const obj8 = { currentTime: nativeEvent.positionMs / 1000, seekTime: nativeEvent.requestedPositionMs / 1000 };
              onSeek(obj8);
            }
            break;
          }
          case "rate":
          {
            const onPlaybackRateChange = obj2.onPlaybackRateChange;
            if (onPlaybackRateChange != null) {
              const obj18 = { playbackRate: nativeEvent.playbackRate };
              onPlaybackRateChange(obj18);
            }
            break;
          }
          case "stalled":
          {
            const onPlaybackStalled = obj2.onPlaybackStalled;
            if (onPlaybackStalled != null) {
              onPlaybackStalled();
            }
            break;
          }
          case "resumed":
          {
            const onPlaybackResume = obj2.onPlaybackResume;
            if (onPlaybackResume != null) {
              onPlaybackResume();
            }
            break;
          }
          case "ended":
          {
            const onEnd = obj2.onEnd;
            if (onEnd != null) {
              onEnd();
            }
            break;
          }
          case "error":
          {
            const onError = obj2.onError;
            if (onError != null) {
              const obj = { error: obj19 };
              obj19 = { "": null, code: null, domain: null, localizedDescription: null };
              ({ errorMessage: obj2[""], errorCode: obj2.code, errorDomain: obj2.domain, errorMessage: obj2.localizedDescription } = nativeEvent);
              onError(obj);
            }
            break;
          }
        }
      }
    }
  };
  items2 = [closure_10(ref1(8827), obj6), ];
  let tmp26Result = null != obj2.poster && tmp21 !== id;
  const tmp24 = closure_11;
  const tmp25 = closure_9;
  const tmp26 = closure_10;
  const tmp27 = ref1;
  if (tmp26Result) {
    let obj7 = { accessible: false, style: tmp2.content, source: obj8, resizeMode: str2 };
    obj8 = { uri: obj2.poster };
    str2 = "center";
    const tmp27Result = tmp27(5701);
    if ("none" !== obj2.posterResizeMode) {
      let str4 = obj2.posterResizeMode;
      if (str4 == null) {
        str4 = "contain";
      }
      str2 = str4;
    }
    tmp26Result = tmp26(tmp27Result, obj7);
  }
  items2[1] = tmp26Result;
  return tmp24(tmp25, obj5);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/media_playback/native/NativeVideo.tsx");

export default tmp6;
