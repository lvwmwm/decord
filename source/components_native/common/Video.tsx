// Module ID: 8302
// Function ID: 65552
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 31, 27, 33, 4130, 689, 8148, 8274, 5584, 1212, 3842, 2]
// Exports: createVideoControls

// Module 8302 (_isNativeReflectConstruct)
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import ManaContext from "ManaContext";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_9;
const require = arg1;
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
    c0 = pauseWhileAppInactive;
    flag3 = global.playInBackground;
    if (flag3 === undefined) {
      flag3 = false;
    }
    flag4 = global.preventsDisplaySleepDuringVideoPlayback;
    if (flag4 === undefined) {
      flag4 = true;
    }
    c1 = undefined;
    tmp = c7(closure_8.useState("active" === AppState.currentState), 2);
    c1 = tmp[1];
    items = [];
    items[0] = pauseWhileAppInactive;
    effect = closure_8.useEffect(() => {
      if (closure_0) {
        closure_0 = outer1_12.addEventListener("change", (arg0) => {
          outer1_1("active" === arg0);
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
    obj["aria-hidden"] = ariaHidden;
    obj.mixWithOthers = mixWithOthers;
    obj.preventsDisplaySleepDuringVideoPlayback = flag4;
    obj.httpEngine = global.httpEngine;
    props = undefined;
    if (null != controls) {
      props = controls.props;
    }
    merged = Object.assign(props);
    return tmp3(require("_isNativeReflectConstruct").default, obj);
  }
}
({ TouchableWithoutFeedback: closure_9, View: closure_10, Image: closure_11, AppState: closure_12 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, shadowColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK, shadowOpacity: 0.5, shadowOffset: { height: 1, width: 0 }, shadowRadius: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.video = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const tmp4 = ((PureComponent) => {
  class Video {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_2(this, apply);
      items1 = [...items];
      obj = outer1_5(apply);
      tmp2 = outer1_4;
      if (outer1_15()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items1, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.state = { postponeRender: true };
      tmp2Result.ref = outer1_8.createRef();
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
          let obj = Video(outer2_1[12]);
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
  callback2(Video, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      const self = this;
      this._renderTask = Video(outer1_1[13]).runAfterInteractions(() => {
        self.setState({ postponeRender: false });
      });
    }
  };
  let items = [obj, , , , ];
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
            tmp12 = outer1_13(outer1_16, obj);
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
          obj["aria-hidden"] = tmp3;
          return outer1_13(outer1_11, obj);
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
      const items = [outer1_14(this.context).container, { width: props.width, height: props.height }, props.style];
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
              const intl = Video(outer1_1[14]).intl;
              accessibilityLabel = intl.string(Video(outer1_1[14]).t.OIDkcp);
            }
            obj.accessibilityLabel = accessibilityLabel;
            obj.onPress = self.handleOpenFullScreen;
            obj.children = tmp3Result;
            tmp9Result = outer1_13(outer1_9, obj);
            const tmp10 = outer1_9;
            const tmp9 = outer1_13;
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
})(importAllResult.PureComponent);
tmp4.contextType = require("ManaContext").ThemeContext;
const obj1 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/common/Video.tsx");

export default tmp4;
export const createVideoControls = function createVideoControls(ref1) {
  let closure_0 = ref1;
  const ref = importAllResult.createRef();
  let c5 = 0;
  let c6 = 0;
  let c7 = 0;
  obj = {
    seek(arg0) {
      const current = ref.current;
      if (!tmp) {
        current.seek(arg0);
      }
    },
    pause(arg0) {
      callback(arg0);
      if (closure_8 !== arg0) {
        closure_8 = arg0;
        if (null != callback3) {
          callback3(closure_8);
        }
      }
    },
    useSubscribe(arg0, arg1, arg2) {
      let closure_1 = arg0;
      let result = arg1;
      let getActivityIndicator = arg2;
      const layoutEffect = React.useLayoutEffect(() => {
        if (null != callback) {
          callback(outer1_5, outer1_6);
        }
        if (null != callback2) {
          callback2(outer1_8);
        }
        if (null != callback3) {
          callback3(outer1_7);
        }
      }, []);
    },
    props: obj
  };
  obj = {
    ref,
    onPlaybackRateChange(nativeEvent) {
      if (c8 !== 0 === nativeEvent.playbackRate) {
        c8 = tmp;
        if (null != callback3) {
          callback3(c8);
        }
      }
    },
    onProgress(current) {
      let c5;
      let c6;
      ({ currentTime: c5, seekableDuration: c6 } = current);
      if (null != callback2) {
        callback2(c5, c6);
      }
    },
    onDownloadProgress(progressPercent) {
      progressPercent = progressPercent.progressPercent;
      if (null != callback4) {
        callback4(progressPercent);
      }
    }
  };
  return obj;
};
export { VideoComponent };
