// Module ID: 8864
// Function ID: 8865
// Name: common/Video
// Dependencies: [32, 19, 17, 21, 5009, 575, 8865, 5075, 8825, 7201, 5712, 1114, 2]
// Exports: createVideoControls

// Module 8864 (common/Video)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import native from "native" /* 5075 */;
import FastImageDefault from "FastImage" /* 5712 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 7201 */;
import openMediaModal2 from "openMediaModal" /* 8825 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let closure_0;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
class VideoComponent {
  constructor(paused) {
    let ariaHidden;
    let closure_1;
    let controls;
    let disableFocus;
    let first;
    let importantForAccessibility;
    let mixWithOthers;
    let onEnd;
    let onError;
    let onLoad;
    let onLoadStart;
    let onReadyForDisplay;
    let pauseWhileAppInactive;
    let poster;
    let source;
    let style;
    let flag = paused.paused;
    ({ style, source, poster, onLoadStart, onLoad, onReadyForDisplay, onError, onEnd } = paused);
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = paused.muted;
    if (flag2 === undefined) {
      flag2 = true;
    }
    let str = paused.posterResizeMode;
    if (str === undefined) {
      str = "contain";
    }
    let str2 = paused.resizeMode;
    if (str2 === undefined) {
      str2 = "contain";
    }
    ({ controls, pauseWhileAppInactive, disableFocus, ariaHidden, mixWithOthers, importantForAccessibility } = paused);
    if (pauseWhileAppInactive === undefined) {
      pauseWhileAppInactive = true;
    }
    let flag3 = paused.playInBackground;
    if (flag3 === undefined) {
      flag3 = false;
    }
    let flag4 = paused.preventsDisplaySleepDuringVideoPlayback;
    if (flag4 === undefined) {
      flag4 = true;
    }
    closure_1 = undefined;
    const httpEngine = paused.httpEngine;
    const _default = pauseWhileAppInactive(8865).default;
    [first, closure_1] = react.useState("active" === currentState.currentState);
    const items = [pauseWhileAppInactive];
    const effect = react.useEffect(() => {
      const tmp = closure_0;
      if (tmp) {
        closure_0 = currentState.addEventListener("change", (event) => {
          closure_1_1("active" === event);
        });
        return () => {
          closure_0.remove();
        };
      }
    }, items);
    const obj = { style, source, importantForAccessibility, poster, muted: flag2, paused: flag, posterResizeMode: str, resizeMode: str2, repeat: true, playInBackground: flag3, pictureInPicture: false, playWhenInactive: false, onLoadStart, onLoad, onReadyForDisplay, onError, onEnd, disableFocus, "aria-hidden": ariaHidden, mixWithOthers, preventsDisplaySleepDuringVideoPlayback: flag4, httpEngine };
    const tmp4 = jsx;
    if (!flag) {
      if (pauseWhileAppInactive) {
        pauseWhileAppInactive = !first;
      }
      flag = pauseWhileAppInactive;
    }
    let props;
    if (controls != null) {
      props = controls.props;
    }
    const merged = Object.assign(props);
    return tmp4(_default, obj);
  }
}
({ TouchableWithoutFeedback: hasOwnProperty, View: metroRequire, AppState: metroImportDefault } = react_native);
const jsx = Fragment.jsx;
let obj = { container: obj2, video: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND } };
obj2 = { flex: 1, shadowColor: nativeDefault.unsafe_rawColors.BLACK, shadowOpacity: 0.5, shadowOffset: { height: 1, width: 0 }, shadowRadius: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND });
const React4 = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class Video extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.state = { postponeRender: true };
    applyArgumentsResult.ref = react.createRef();
    applyArgumentsResult.isVideo = function isVideo() {
      const src = require.props.src;
      return null != src && "videoURI" in src && null != src.videoURI;
    };
    applyArgumentsResult.handleOpenFullScreen = function handleOpenFullScreen() {
      let height;
      let items;
      let onPress;
      let src;
      let width;
      const props = require.props;
      ({ src, onPress } = props);
      ({ width, height } = props);
      const tmp = require;
      if (null != onPress) {
        onPress();
      }
      const current = tmp.ref.current;
      if (null != current) {
        const obj = { initialSources: items, originViewOrOriginLayout: current };
        const obj2 = { width, height };
        const openMediaModal = openMediaModal2.openMediaModal;
        openMediaModal2;
        const merged = Object.assign(src);
        items = [obj2];
        openMediaModal(obj);
      }
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    const self = this;
    const obj = RunAfterInteractionsUtils;
    this._renderTask = obj.runAfterInteractions(() => {
      self.setState({ postponeRender: false });
    });
  }
  componentWillUnmount() {
    if (null != this._renderTask) {
      const _renderTask = this._renderTask;
      _renderTask.cancel();
    }
  }
  renderVideo() {
    let resizeMode;
    let src;
    ({ src, resizeMode } = this.props);
    if ("videoURI" in src) {
      if ("" !== src.videoURI) {
        const videoURI = src.videoURI;
        let tmp13;
        if (null != videoURI) {
          const items = [tmp.video, , ];
          size = { width: tmp3, height: tmp4 };
          items[1] = size;
          items[2] = tmp7;
          tmp13 = <VideoComponent style={items} source={{ uri: videoURI }} poster={tmp2} muted={tmp5} paused={tmp6} resizeMode={resizeMode} posterResizeMode={resizeMode} ariaHidden={tmp8} disableFocus={tmp9} httpEngine={tmp10} />;
          const obj2 = { uri: videoURI };
        }
        return tmp13;
      }
    }
    return null;
  }
  renderImage() {
    let ariaHidden;
    let obj2;
    let src;
    let str2;
    ({ src, ariaHidden } = this.props);
    if ("uri" in src) {
      if ("" !== src.uri) {
        const obj = { source: obj2, style: size, accessible: true !== ariaHidden, accessibilityElementsHidden: ariaHidden, importantForAccessibility: str2 };
        size = { width: tmp, height: tmp2 };
        obj2 = { uri: src.uri };
        str2 = undefined;
        const tmp3 = jsx;
        const tmp6 = FastImageDefault;
        if (true === ariaHidden) {
          str2 = "no-hide-descendants";
        }
        return tmp3(tmp6, obj);
      }
    }
  }
  render() {
    let tmp4;
    const self = this;
    const props = this.props;
    let accessibilityLabel = props.accessibilityLabel;
    const items = [closure_9(this.context).container, { width: props.width, height: props.height }, props.style];
    const canOpenFullscreen = props.canOpenFullscreen;
    if (!this.state.postponeRender) {
      let renderVideoResult;
      if (self.isVideo()) {
        renderVideoResult = self.renderVideo();
      } else {
        renderVideoResult = self.renderImage();
      }
      tmp4 = renderVideoResult;
    } else {
      tmp4 = null;
    }
    const tmp2Result = <tmp3 ref={this.ref} style={items} accessible={null != accessibilityLabel} accessibilityLabel={accessibilityLabel}>{tmp4}</tmp3>;
    let tmp2Result2 = tmp2Result;
    if (canOpenFullscreen) {
      const tmp8 = hasOwnProperty;
      if (accessibilityLabel == null) {
        const intl = intl2.intl;
        accessibilityLabel = intl.string(intl2.t.OIDkcp);
      }
      const obj2 = { accessibilityRole: "button", accessibilityLabel, onPress: self.handleOpenFullScreen, children: tmp2Result };
      tmp2Result2 = tmp2(tmp8, obj2);
    }
    return tmp2Result2;
  }
}
const prototype = Video.prototype;
Video.contextType = native.ThemeContext;
let size = size_mod;
const result = size.fileFinishedImporting("components_native/common/Video.tsx");

export default Video;
export function createVideoControls(NOOP) {
  let ref;
  ref = ref.createRef();
  let c5 = 0;
  let c6 = 0;
  let progressPercent = 0;
  let closure_8 = false;
  return {
    seek(arg0) {
      const current = ref.current;
      if (current != null) {
        const seek = current.seek;
        if (seek != null) {
          seek(arg0);
        }
      }
    },
    pause(arg0) {
      NOOP(arg0);
      if (closure_8 !== arg0) {
        closure_8 = arg0;
        if (dependencyMap != null) {
          tmp2(closure_8);
        }
      }
    },
    useSubscribe(arg0, arg1, arg2) {
      let closure_1_1 = arg0;
      let closure_1_2 = arg1;
      let closure_1_3 = arg2;
      const layoutEffect = react.useLayoutEffect(() => {
        if (closure_1_1 != null) {
          tmp(closure_1_5, closure_1_6);
        }
        if (closure_1_2 != null) {
          tmp5(closure_1_8);
        }
        if (closure_1_3 != null) {
          tmp8(progressPercent);
        }
      }, []);
    },
    props: {
      ref,
      onPlaybackRateChange(nativeEvent) {
        if (closure_8 !== 0 === nativeEvent.playbackRate) {
          closure_8 = tmp;
          if (dependencyMap != null) {
            tmp2(closure_8);
          }
        }
      },
      onProgress(arg0) {
        ({ currentTime: c5, seekableDuration: c6 } = arg0);
        if (importDefault != null) {
          tmp(c5, c6);
        }
      },
      onDownloadProgress(progressPercent) {
        progressPercent = progressPercent.progressPercent;
        if (_slicedToArray != null) {
          tmp(progressPercent);
        }
      }
    }
  };
}
export { VideoComponent };
