// Module ID: 8877
// Function ID: 8878
// Name: NativeVideo
// Dependencies: [109, 32, 19, 17, 21, 5014, 81, 8878, 5717, 2]
// Exports: default

// Module 8877 (NativeVideo)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let closure_10, dependencyMap, sum;

let StyleSheet;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let closure_3 = ["src"];
({ View: metroImportDefault, StyleSheet } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let c10 = 0;
let createStyles = createStyles_mod;
let obj = { container: { overflow: "hidden" }, content: obj2 };
obj2 = {};
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_11 = createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/media_playback/native/NativeVideo.tsx");

export default function NativeVideo(ref) {
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
  const f93474 = (item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    return { name, value };
  };
  ref = ref.ref;
  let merged = Object.assign(ref, Object.assign({ ref: 0 }));
  dependencyMap = undefined;
  let json;
  let str;
  let id;
  c7 = undefined;
  ref = undefined;
  const tmp2 = closure_11();
  let obj = id;
  const ref1 = id.useRef(null);
  [tmp6, c2] = str(id.useState({}), 2);
  const obj2 = {};
  const tmp5 = str(id.useState({}), 2);
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
  const tmp4Result = str(obj.useState(() => {
    let entries;
    const obj = { id: String(c10), uri: str, headersKey: json, headers: entries.map(f93474) };
    c10 = c10 + 1;
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
    let obj4 = { id: String(sum), uri: str, headersKey: json, headers: entries.map(f93474) };
    const _String = String;
    sum = closure_10 + 1;
    closure_10 = sum;
    let parsed = JSON.parse(json);
    const _Object = Object;
    entries = Object.entries(parsed);
    tmp14(obj4);
  }
  id = first.id;
  [tmp21, c7] = str(obj.useState(null), 2);
  str(obj.useState(null), 2);
  ref = obj.useRef(merged);
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
          const Commands = merged(c2[7]).Commands;
          Commands.seek(tmp.current, arg0, num);
        }
      },
      setNativeProps(src) {
        src = src.src;
        const tmp = json(src, obj2);
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
          const Commands = merged(c2[7]).Commands;
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
  items2 = [ref(ref1(8878), obj6), ];
  let tmp26Result = null != obj2.poster && tmp21 !== id;
  const tmp24 = closure_9;
  const tmp25 = c7;
  const tmp26 = ref;
  const tmp27 = ref1;
  if (tmp26Result) {
    let obj7 = { accessible: false, style: tmp2.content, source: obj8, resizeMode: str2 };
    obj8 = { uri: obj2.poster };
    str2 = "center";
    const tmp27Result = tmp27(5717);
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
};
