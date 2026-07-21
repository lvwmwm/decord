// Module ID: 8294
// Function ID: 65490
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: createVideoControls

// Module 8294 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
class VideoComponent {
  constructor(arg0) {
    flag = global.paused;
    ({ style, source, poster, onLoadStart, onLoad, onError, onEnd } = global);
    if (flag === undefined) {
      flag = false;
    }
    flag2 = global.muted;
    if (flag2 === undefined) {
      flag2 = true;
    }
    str = global.posterResizeMode;
    if (str === undefined) {
      str = "contain";
    }
    str2 = global.resizeMode;
    if (str2 === undefined) {
      str2 = "contain";
    }
    ({ controls, pauseWhileAppInactive, disableFocus, ariaHidden, mixWithOthers, importantForAccessibility } = global);
    if (pauseWhileAppInactive === undefined) {
      pauseWhileAppInactive = true;
    }
    closure_0 = pauseWhileAppInactive;
    flag3 = global.playInBackground;
    if (flag3 === undefined) {
      flag3 = false;
    }
    flag4 = global.preventsDisplaySleepDuringVideoPlayback;
    if (flag4 === undefined) {
      flag4 = true;
    }
    closure_1 = undefined;
    tmp = closure_7(importAll.useState("active" === AppState.currentState), 2);
    closure_1 = tmp[1];
    items = [];
    items[0] = pauseWhileAppInactive;
    effect = importAll.useEffect(() => {
      if (closure_0) {
        closure_0 = closure_12.addEventListener("change", (arg0) => {
          callback("active" === arg0);
        });
        return () => {
          closure_0.remove();
        };
      }
    }, items);
    obj = { style, source, importantForAccessibility, poster };
    obj.muted = flag2;
    tmp3 = jsx;
    if (!flag) {
      if (pauseWhileAppInactive) {
        pauseWhileAppInactive = !tmp[0];
      }
      flag = pauseWhileAppInactive;
    }
    obj.paused = flag;
    obj.posterResizeMode = str;
    obj.resizeMode = str2;
    obj.repeat = true;
    obj.playInBackground = flag3;
    obj.pictureInPicture = false;
    obj.playWhenInactive = false;
    obj.onLoadStart = onLoadStart;
    obj.onLoad = onLoad;
    obj.onError = onError;
    obj.onEnd = onEnd;
    obj.disableFocus = disableFocus;
    obj.aria-hidden = ariaHidden;
    obj.mixWithOthers = mixWithOthers;
    obj.preventsDisplaySleepDuringVideoPlayback = flag4;
    obj.httpEngine = global.httpEngine;
    props = undefined;
    if (null != controls) {
      props = controls.props;
    }
    merged = Object.assign(props);
    return tmp3(closure_0(closure_1[11]).default, obj);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const importAllResult = importAll(dependencyMap[6]);
({ TouchableWithoutFeedback: closure_9, View: closure_10, Image: closure_11, AppState: closure_12 } = arg1(dependencyMap[7]));
const jsx = arg1(dependencyMap[8]).jsx;
let obj = arg1(dependencyMap[9]);
obj = {};
obj = { disabled: 38139904, size: 23751424, variant: 23778816, aliceblue: 38091008, antiquewhite: 38171904, shadowColor: importDefault(dependencyMap[10]).unsafe_rawColors.BLACK, shadowOffset: {}, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BRAND };
obj.container = obj;
const tmp3 = arg1(dependencyMap[7]);
obj.video = { flex: 1, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BRAND };
let closure_14 = obj.createLegacyClassComponentStyles(obj);
const tmp4 = (PureComponent) => {
  class Video {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, Video);
      items1 = [...items];
      obj = closure_5(Video);
      tmp2 = closure_4;
      if (closure_15()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      Video = tmp2Result;
      tmp2Result.state = { postponeRender: true };
      tmp2Result.ref = closure_8.createRef();
      tmp2Result.isVideo = () => {
        const src = tmp2Result.props.src;
        let tmp = null != src;
        if (tmp) {
          tmp = "videoURI" in src;
        }
        if (tmp) {
          tmp = null != src.videoURI;
        }
        return tmp;
      };
      tmp2Result.handleOpenFullScreen = () => {
        let height;
        let onPress;
        let src;
        let width;
        const props = tmp2Result.props;
        ({ src, onPress } = props);
        ({ width, height } = props);
        if (null != onPress) {
          onPress();
        }
        const current = tmp2Result.ref.current;
        if (null != current) {
          let obj = tmp2Result(closure_1[12]);
          obj = {};
          obj = {};
          const merged = Object.assign(src);
          obj["width"] = width;
          obj["height"] = height;
          const items = [obj];
          obj.initialSources = items;
          obj.originViewOrOriginLayout = current;
          obj.openMediaModal(obj);
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = Video;
  callback2(Video, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      const Video = this;
      this._renderTask = Video(closure_1[13]).runAfterInteractions(() => {
        self.setState({ postponeRender: false });
      });
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "componentWillUnmount",
    value() {
      if (null != this._renderTask) {
        const _renderTask = this._renderTask;
        _renderTask.cancel();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "renderVideo",
    value() {
      let resizeMode;
      let src;
      ({ src, resizeMode } = this.props);
      if ("videoURI" in src) {
        if ("" !== src.videoURI) {
          const videoURI = src.videoURI;
          let tmp12;
          if (null != videoURI) {
            let obj = {};
            const items = [tmp.video, , ];
            obj = { width: tmp3, height: tmp4 };
            items[1] = obj;
            items[2] = tmp7;
            obj.style = items;
            obj = { uri: videoURI };
            obj.source = obj;
            obj.poster = tmp2;
            obj.muted = tmp5;
            obj.paused = tmp6;
            obj.resizeMode = resizeMode;
            obj.posterResizeMode = resizeMode;
            obj.ariaHidden = tmp8;
            obj.disableFocus = tmp9;
            obj.httpEngine = tmp10;
            tmp12 = callback3(closure_16, obj);
          }
          return tmp12;
        }
      }
      return null;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "renderImage",
    value() {
      const src = this.props.src;
      if ("uri" in src) {
        if ("" !== src.uri) {
          let obj = {};
          obj = { uri: src.uri };
          obj.source = obj;
          obj = { width: tmp, height: tmp2 };
          obj.style = obj;
          obj.aria-hidden = tmp3;
          return callback3(closure_11, obj);
        }
      }
    }
  };
  items[4] = {
    key: "render",
    value() {
      const self = this;
      const props = this.props;
      let accessibilityLabel = props.accessibilityLabel;
      let obj = { ref: this.ref };
      const items = [callback4(this.context).container, { width: props.width, height: props.height }, props.style];
      obj.style = items;
      obj.accessible = null != accessibilityLabel;
      obj.accessibilityLabel = accessibilityLabel;
      if (this.state.postponeRender) {
        if (false !== tmp2) {
          obj.children = null;
          const tmp3Result = tmp3(tmp4, obj);
          let tmp9Result = tmp3Result;
          if (tmp) {
            obj = { accessibilityRole: "button" };
            if (null == accessibilityLabel) {
              const intl = Video(closure_1[14]).intl;
              accessibilityLabel = intl.string(Video(closure_1[14]).t.OIDkcp);
            }
            obj.accessibilityLabel = accessibilityLabel;
            obj.onPress = self.handleOpenFullScreen;
            obj.children = tmp3Result;
            tmp9Result = closure_13(closure_9, obj);
            const tmp10 = closure_9;
            const tmp9 = closure_13;
          }
          return tmp9Result;
        }
      }
      if (self.isVideo()) {
        self.renderVideo();
      } else {
        self.renderImage();
      }
    }
  };
  return callback(Video, items);
}(importAllResult.PureComponent);
tmp4.contextType = arg1(dependencyMap[15]).ThemeContext;
const obj1 = { flex: 1, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BRAND };
const result = arg1(dependencyMap[16]).fileFinishedImporting("components_native/common/Video.tsx");

export default tmp4;
export const createVideoControls = function createVideoControls(NOOP) {
  const arg1 = NOOP;
  const ref = React.createRef();
  let closure_4 = ref;
  let closure_5 = 0;
  let closure_6 = 0;
  let closure_7 = 0;
  const React = false;
  let obj = {
    seek(arg0) {
      const current = ref.current;
      if (!tmp) {
        current.seek(arg0);
      }
    },
    pause(arg0) {
      arg0(arg0);
      if (closure_8 !== arg0) {
        closure_8 = arg0;
        if (null != callback2) {
          callback2(closure_8);
        }
      }
    },
    useSubscribe(arg0, arg1, arg2) {
      const layoutEffect = React.useLayoutEffect(() => {
        if (null != arg0) {
          arg0(closure_5, closure_6);
        }
        if (null != arg1) {
          arg1(closure_8);
        }
        if (null != arg2) {
          arg2(closure_7);
        }
      }, []);
    },
    props: obj
  };
  obj = {
    ref,
    onPlaybackRateChange(nativeEvent) {
      if (closure_8 !== 0 === nativeEvent.playbackRate) {
        closure_8 = tmp;
        if (null != callback2) {
          callback2(closure_8);
        }
      }
    },
    onProgress(current) {
      ({ currentTime: closure_5, seekableDuration: closure_6 } = current);
      if (null != callback) {
        callback(closure_5, closure_6);
      }
    },
    onDownloadProgress(progressPercent) {
      progressPercent = progressPercent.progressPercent;
      if (null != callback3) {
        callback3(progressPercent);
      }
    }
  };
  return obj;
};
export { VideoComponent };
