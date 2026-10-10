// Module ID: 8426
// Function ID: 8427
// Name: TextTrackType
// Dependencies: [5, 41, 42, 93, 95, 98, 19, 17, 21, 81, 8427, 4947, 8429, 8430, 8431, 8449]

// Module 8426 (TextTrackType)
import react2 from "react" /* 19 */;
import resolveAssetSourceDefault from "resolveAssetSource" /* 81 */;
import _modDef8427 from "module_8427" /* 8427 */;
import _modDef8429 from "module_8429" /* 8429 */;
import _modDef8430 from "module_8430" /* 8430 */;
import get_ColorPropType from "get ColorPropType" /* 8431 */;
import _modDef8449 from "module_8449" /* 8449 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import module_4947_mod from "module_4947" /* 4947 */;
import "module_4947";

let Platform;
let arrayOf;
let c10;
let c9;
let closure_12;
let items1;
let items2;
let items3;
let items4;
let items5;
let items6;
let items7;
let items8;
let map1;
let metroImportAll;
let metroImportDefault;
let module_4947;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let oneOf;
let oneOf2;
let oneOf3;
let oneOfType;
let oneOfType2;
let oneOfType3;
let oneOfType4;
let oneOfType5;
let requireNativeComponent;
let shape;
let shape2;
let shape3;
let shape4;
let shape5;
let unpackModuleId;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const Component = react2.Component;
const StyleSheet = react_native.StyleSheet;
({ NativeModules: metroImportDefault, View: metroImportAll, Image: c9, Platform, findNodeHandle: c10, UIManager: unpackModuleId, requireNativeComponent } = react_native);
({ jsx: closure_12, jsxs: map1 } = Fragment);
const base = StyleSheet.create({ base: { overflow: "hidden" } });
class Video {
  constructor(poster) {
    let constructResult;
    let getViewManagerConfig;
    let self = this;
    let tmp = _classCallCheck(this, Video);
    const items = [poster];
    const tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(Video);
    const tmp3 = _possibleConstructorReturn;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.seek = function(seek) {
      if (isNaN(seek)) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Specified time is not a number");
        throw error;
      } else {
        const obj = { seek };
        closure_0.setNativeProps(obj);
      }
    };
    tmp3Result.presentFullscreenPlayer = () => {
      closure_0.setNativeProps({ fullscreen: true });
    };
    tmp3Result.dismissFullscreenPlayer = () => {
      closure_0.setNativeProps({ fullscreen: false });
    };
    let closure_0 = _asyncToGenerator(async (arg0) => {
      const _root = arg0;
      let c2 = 0;
      let c1 = 0;
      return (async (arg0, value) => {
        VideoManager = VideoManager.VideoManager;
        await VideoManager.save(_root, closure_2_10(_root._root));
        return value;
      })();
    });
    tmp3Result.save = function(arg0) {
      return closure_0(...arguments);
    };
    tmp3Result.restoreUserInterfaceForPictureInPictureStopCompleted = (restoreUserInterfaceForPIPStopCompletionHandler) => {
      const obj = { restoreUserInterfaceForPIPStopCompletionHandler };
      closure_0.setNativeProps(obj);
    };
    tmp3Result._assignRoot = (_root) => {
      closure_0._root = _root;
    };
    tmp3Result._hidePoster = () => {
      const obj = closure_0;
      if (closure_0.state.showPoster) {
        obj.setState({ showPoster: false });
      }
    };
    tmp3Result._onLoadStart = (nativeEvent) => {
      if (closure_0.props.onLoadStart) {
        const props = tmp.props;
        props.onLoadStart(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onLoad = (nativeEvent) => {
      if (closure_0.props.onLoad) {
        const props = tmp.props;
        props.onLoad(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onError = (nativeEvent) => {
      if (closure_0.props.onError) {
        const props = tmp.props;
        props.onError(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onProgress = (nativeEvent) => {
      if (closure_0.props.onProgress) {
        const props = tmp.props;
        props.onProgress(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onBandwidthUpdate = (nativeEvent) => {
      if (closure_0.props.onBandwidthUpdate) {
        const props = tmp.props;
        props.onBandwidthUpdate(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onSeek = (nativeEvent) => {
      if (closure_0.props.onSeek) {
        const props = tmp.props;
        props.onSeek(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onEnd = (nativeEvent) => {
      if (closure_0.props.onEnd) {
        const props = tmp.props;
        props.onEnd(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onTimedMetadata = (nativeEvent) => {
      if (closure_0.props.onTimedMetadata) {
        const props = tmp.props;
        props.onTimedMetadata(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onFullscreenPlayerWillPresent = (nativeEvent) => {
      if (closure_0.props.onFullscreenPlayerWillPresent) {
        const props = tmp.props;
        const result = props.onFullscreenPlayerWillPresent(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onFullscreenPlayerDidPresent = (nativeEvent) => {
      if (closure_0.props.onFullscreenPlayerDidPresent) {
        const props = tmp.props;
        const result = props.onFullscreenPlayerDidPresent(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onFullscreenPlayerWillDismiss = (nativeEvent) => {
      if (closure_0.props.onFullscreenPlayerWillDismiss) {
        const props = tmp.props;
        const result = props.onFullscreenPlayerWillDismiss(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onFullscreenPlayerDidDismiss = (nativeEvent) => {
      if (closure_0.props.onFullscreenPlayerDidDismiss) {
        const props = tmp.props;
        const result = props.onFullscreenPlayerDidDismiss(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onReadyForDisplay = (nativeEvent) => {
      if (!closure_0.props.audioOnly) {
        closure_0._hidePoster();
      }
      if (closure_0.props.onReadyForDisplay) {
        const props = obj.props;
        props.onReadyForDisplay(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onPlaybackStalled = (nativeEvent) => {
      if (closure_0.props.onPlaybackStalled) {
        const props = tmp.props;
        props.onPlaybackStalled(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onPlaybackResume = (nativeEvent) => {
      if (closure_0.props.onPlaybackResume) {
        const props = tmp.props;
        props.onPlaybackResume(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onPlaybackRateChange = (nativeEvent) => {
      if (closure_0.props.onPlaybackRateChange) {
        const props = tmp.props;
        props.onPlaybackRateChange(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onExternalPlaybackChange = (nativeEvent) => {
      if (closure_0.props.onExternalPlaybackChange) {
        const props = tmp.props;
        const result = props.onExternalPlaybackChange(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onAudioBecomingNoisy = () => {
      if (closure_0.props.onAudioBecomingNoisy) {
        const props = closure_0.props;
        props.onAudioBecomingNoisy();
      }
    };
    tmp3Result._onPictureInPictureStatusChanged = (nativeEvent) => {
      if (closure_0.props.onPictureInPictureStatusChanged) {
        const props = tmp.props;
        const result = props.onPictureInPictureStatusChanged(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onRestoreUserInterfaceForPictureInPictureStop = (arg0) => {
      if (closure_0.props.onRestoreUserInterfaceForPictureInPictureStop) {
        const props = closure_0.props;
        const result = props.onRestoreUserInterfaceForPictureInPictureStop();
      }
    };
    tmp3Result._onAudioFocusChanged = (nativeEvent) => {
      if (closure_0.props.onAudioFocusChanged) {
        const props = tmp.props;
        props.onAudioFocusChanged(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onBuffer = (nativeEvent) => {
      if (closure_0.props.onBuffer) {
        const props = tmp.props;
        props.onBuffer(nativeEvent.nativeEvent);
      }
    };
    tmp3Result._onGetLicense = (nativeEvent) => {
      const tmp = closure_0;
      if (closure_0.props.drm) {
        const _Function = Function;
        if (tmp.props.drm.getLicense instanceof Function) {
          nativeEvent = nativeEvent.nativeEvent;
          if (nativeEvent) {
            if (nativeEvent.spcBase64) {
              const drm = tmp.props.drm;
              const resolved = Promise.resolve(drm.getLicense(nativeEvent.spcBase64, nativeEvent.contentId, nativeEvent.licenseUrl));
              const nextPromise = resolved.then((result) => {
                if (undefined !== result) {
                  const VideoManager2 = closure_2_7.VideoManager;
                  VideoManager2.setLicenseResult(result, closure_2_10(closure_1_0._root));
                } else if (closure_2_7.VideoManager.setLicenseError) {
                  const VideoManager = closure_2_7.VideoManager;
                  VideoManager.setLicenseError("Empty license result", closure_2_10(closure_1_0._root));
                }
              });
              nextPromise.catch((error) => {
                if (closure_2_7.VideoManager.setLicenseError) {
                  const VideoManager = tmp.VideoManager;
                  VideoManager.setLicenseError(error, closure_2_10(closure_1_0._root));
                }
              });
            }
          }
          if (closure_2_7.VideoManager.setLicenseError) {
            let VideoManager = closure_2_7.VideoManager;
            VideoManager.setLicenseError("No spc received", closure_2_10(tmp._root));
          }
        }
      }
    };
    tmp3Result.getViewManagerConfig = (arg0) => {
      let viewManagerConfig;
      if (getViewManagerConfig.getViewManagerConfig) {
        viewManagerConfig = obj.getViewManagerConfig(arg0);
      } else {
        viewManagerConfig = obj[arg0];
      }
      return viewManagerConfig;
    };
    tmp3Result.state = { showPoster: poster.poster };
    return tmp3Result;
  }
}
_inherits(Video, Component);
const entry = {
  key: "setNativeProps",
  value: function setNativeProps(arg0) {
    const self = this;
    if (this._root) {
      if (self._root.setNativeProps) {
        const _root = self._root;
        _root.setNativeProps(arg0);
      }
    }
    console.warn("Video component not ready for setNativeProps call");
  }
};
let items = [
  entry,
  {
    key: "toTypeString",
    value: function toTypeString(toISOString) {
      if ("object" === typeof toISOString) {
        let toISOStringResult;
        const _Date = Date;
        if (toISOString instanceof Date) {
          toISOStringResult = toISOString.toISOString();
        } else {
          const _JSON = JSON;
          toISOStringResult = JSON.stringify(toISOString);
        }
        return toISOStringResult;
      } else if ("undefined" === typeof toISOString) {
        return "";
      } else {
        return toISOString.toString();
      }
    }
  },
  {
    key: "stringsOnlyObject",
    value: function stringsOnlyObject(headers) {
      const self = this;
      const obj = {};
      const keys = Object.keys(headers);
      const item = keys.forEach((item) => {
        obj[item] = self.toTypeString(headers[item]);
      });
      return obj;
    }
  },
  {
    key: "render",
    value: function render() {
      let ScaleNone;
      let items;
      let items1;
      let obj2;
      let obj8;
      let str5;
      let stringsOnlyObjectResult;
      const self = this;
      const resizeMode = this.props.resizeMode;
      const tmp3 = resolveAssetSourceDefault(this.props.source) || {};
      let str = tmp3.uri;
      const tmp4 = !tmp3.__packager_asset;
      if (!str) {
        str = "";
      }
      let str2 = str;
      const tmp5 = str && str.match(/^\//);
      if (tmp5) {
        const _HermesInternal = HermesInternal;
        str2 = "file://" + str;
      }
      if (!str2) {
        const _console = console;
        console.warn("Trying to load empty source.");
      }
      let tmp9 = !str2;
      if (str2) {
        tmp9 = !str2.match(/^https?:/);
      }
      let tmp10 = !str2;
      if (str2) {
        tmp10 = !str2.match(/^(assets-library|ipod-library|file|content|ms-appx|ms-appdata):/);
      }
      const viewManagerConfig = self.getViewManagerConfig("RNVVideo");
      if (resizeMode === _modDef8427.stretch) {
        ScaleNone = viewManagerConfig.Constants.ScaleToFill;
      } else if (resizeMode === _modDef8427.contain) {
        ScaleNone = viewManagerConfig.Constants.ScaleAspectFit;
      } else if (resizeMode === _modDef8427.cover) {
        ScaleNone = viewManagerConfig.Constants.ScaleAspectFill;
      } else {
        ScaleNone = viewManagerConfig.Constants.ScaleNone;
      }
      const tmp12 = !tmp9;
      const tmp13 = !tmp10;
      const merged = Object.assign({}, self.props);
      const obj = { style: items, resizeMode: ScaleNone, src: obj2, onVideoLoadStart: null, onVideoLoad: null, onVideoError: null, onVideoProgress: null, onVideoSeek: null, onVideoEnd: null, onVideoBuffer: null, onVideoBandwidthUpdate: null, onTimedMetadata: null, onVideoAudioBecomingNoisy: null, onVideoExternalPlaybackChange: null, onVideoFullscreenPlayerWillPresent: null, onVideoFullscreenPlayerDidPresent: null, onVideoFullscreenPlayerWillDismiss: null, onVideoFullscreenPlayerDidDismiss: null, onReadyForDisplay: null, onPlaybackStalled: null, onPlaybackResume: null, onPlaybackRateChange: null, onAudioFocusChanged: null, onAudioBecomingNoisy: null, onGetLicense: merged.drm && merged.drm.getLicense && self._onGetLicense, onPictureInPictureStatusChanged: null, onRestoreUserInterfaceForPictureInPictureStop: null };
      items = [base.base, merged.style];
      obj2 = { uri: str2, isNetwork: tmp12, isAsset: tmp13, shouldCache: tmp4, type: str5, mainVer: tmp3.mainVer || 0, patchVer: tmp3.patchVer || 0, requestHeaders: stringsOnlyObjectResult };
      str5 = tmp3.type;
      const _Object = Object;
      if (!str5) {
        str5 = "";
      }
      if (tmp3.headers) {
        stringsOnlyObjectResult = self.stringsOnlyObject(tmp3.headers);
      } else {
        stringsOnlyObjectResult = {};
      }
      ({ _onLoadStart: obj.onVideoLoadStart, _onLoad: obj.onVideoLoad, _onError: obj.onVideoError, _onProgress: obj.onVideoProgress, _onSeek: obj.onVideoSeek, _onEnd: obj.onVideoEnd, _onBuffer: obj.onVideoBuffer, _onBandwidthUpdate: obj.onVideoBandwidthUpdate, _onTimedMetadata: obj.onTimedMetadata, _onAudioBecomingNoisy: obj.onVideoAudioBecomingNoisy, _onExternalPlaybackChange: obj.onVideoExternalPlaybackChange, _onFullscreenPlayerWillPresent: obj.onVideoFullscreenPlayerWillPresent, _onFullscreenPlayerDidPresent: obj.onVideoFullscreenPlayerDidPresent, _onFullscreenPlayerWillDismiss: obj.onVideoFullscreenPlayerWillDismiss, _onFullscreenPlayerDidDismiss: obj.onVideoFullscreenPlayerDidDismiss, _onReadyForDisplay: obj.onReadyForDisplay, _onPlaybackStalled: obj.onPlaybackStalled, _onPlaybackResume: obj.onPlaybackResume, _onPlaybackRateChange: obj.onPlaybackRateChange, _onAudioFocusChanged: obj.onAudioFocusChanged, _onAudioBecomingNoisy: obj.onAudioBecomingNoisy } = self);
      ({ _onPictureInPictureStatusChanged: obj.onPictureInPictureStatusChanged, _onRestoreUserInterfaceForPictureInPictureStop: obj.onRestoreUserInterfaceForPictureInPictureStop } = self);
      assign(merged, obj);
      const obj4 = { resizeMode: self.props.posterResizeMode || "contain" };
      const merged1 = Object.assign(StyleSheet.absoluteFillObject);
      const obj5 = { style: merged.style, children: items1 };
      const obj6 = { ref: self._assignRoot, style: StyleSheet.absoluteFill };
      const merged2 = Object.assign(merged);
      items1 = [authStore2(closure_16, obj6), ];
      let showPoster = self.state.showPoster;
      const tmp18 = map1;
      const tmp19 = metroImportAll;
      const tmp20 = authStore2;
      if (showPoster) {
        const obj7 = { style: obj4, source: obj8 };
        obj8 = { uri: self.props.poster };
        showPoster = tmp20(React4, obj7);
      }
      items1[1] = showPoster;
      return tmp18(tmp19, obj5);
    }
  }
];
const importDefaultResultResult = _createClass(Video, items);
let obj = { filter: oneOf(items1), filterEnabled: module_4947.bool, src: module_4947.object, seek: oneOfType(items2), fullscreen: module_4947.bool, onVideoLoadStart: module_4947.func, onVideoLoad: module_4947.func, onVideoBuffer: module_4947.func, onVideoError: module_4947.func, onVideoProgress: module_4947.func, onVideoBandwidthUpdate: module_4947.func, onVideoSeek: module_4947.func, onVideoEnd: module_4947.func, onTimedMetadata: module_4947.func, onVideoAudioBecomingNoisy: module_4947.func, onVideoExternalPlaybackChange: module_4947.func, onVideoFullscreenPlayerWillPresent: module_4947.func, onVideoFullscreenPlayerDidPresent: module_4947.func, onVideoFullscreenPlayerWillDismiss: module_4947.func, onVideoFullscreenPlayerDidDismiss: module_4947.func, source: oneOfType2(items3), drm: shape(obj3), minLoadRetryCount: module_4947.number, maxBitRate: module_4947.number, resizeMode: module_4947.string, poster: module_4947.string, posterResizeMode: get_ColorPropType.ImagePropTypes.resizeMode, repeat: module_4947.bool, automaticallyWaitsToMinimizeStalling: module_4947.bool, allowsExternalPlayback: module_4947.bool, selectedAudioTrack: shape2(obj4), selectedVideoTrack: shape3(obj5), selectedTextTrack: shape4(obj6), textTracks: arrayOf(shape5(obj7)), paused: module_4947.bool, muted: module_4947.bool, volume: module_4947.number, bufferConfig: module_4947.shape(obj8), stereoPan: module_4947.number, rate: module_4947.number, pictureInPicture: module_4947.bool, playInBackground: module_4947.bool, preferredForwardBufferDuration: module_4947.number, playWhenInactive: module_4947.bool, ignoreSilentSwitch: module_4947.oneOf(["ignore", "obey"]), reportBandwidth: module_4947.bool, disableFocus: module_4947.bool, controls: module_4947.bool, audioOnly: module_4947.bool, currentTime: module_4947.number, fullscreenAutorotate: module_4947.bool, fullscreenOrientation: module_4947.oneOf(["all", "landscape", "portrait"]), progressUpdateInterval: module_4947.number, useTextureView: module_4947.bool, hideShutterView: module_4947.bool, onLoadStart: module_4947.func, onLoad: module_4947.func, onBuffer: module_4947.func, onError: module_4947.func, onProgress: module_4947.func, onBandwidthUpdate: module_4947.func, onSeek: module_4947.func, onEnd: module_4947.func, onFullscreenPlayerWillPresent: module_4947.func, onFullscreenPlayerDidPresent: module_4947.func, onFullscreenPlayerWillDismiss: module_4947.func, onFullscreenPlayerDidDismiss: module_4947.func, onReadyForDisplay: module_4947.func, onPlaybackStalled: module_4947.func, onPlaybackResume: module_4947.func, onPlaybackRateChange: module_4947.func, onAudioFocusChanged: module_4947.func, onAudioBecomingNoisy: module_4947.func, onPictureInPictureStatusChanged: module_4947.func, needsToRestoreUserInterfaceForPictureInPictureStop: module_4947.func, onExternalPlaybackChange: module_4947.func, scaleX: module_4947.number, scaleY: module_4947.number, translateX: module_4947.number, translateY: module_4947.number, rotation: module_4947.number };
module_4947 = module_4947_mod;
oneOf = module_4947.oneOf;
items1 = [_modDef8429.NONE, _modDef8429.INVERT, _modDef8429.MONOCHROME, _modDef8429.POSTERIZE, _modDef8429.FALSE, _modDef8429.MAXIMUMCOMPONENT, _modDef8429.MINIMUMCOMPONENT, _modDef8429.CHROME, _modDef8429.FADE, _modDef8429.INSTANT, _modDef8429.MONO, _modDef8429.NOIR, _modDef8429.PROCESS, _modDef8429.TONAL, _modDef8429.TRANSFER, _modDef8429.SEPIA];
module_4947 = module_4947_mod;
oneOfType = module_4947.oneOfType;
items2 = [module_4947.number, module_4947.object];
module_4947 = module_4947_mod;
oneOfType2 = module_4947.oneOfType;
module_4947 = module_4947_mod;
let obj2 = { uri: module_4947.string };
items3 = [module_4947.shape(obj2), module_4947.number];
module_4947 = module_4947_mod;
obj3 = { type: oneOf2(items4), licenseServer: module_4947.string, headers: module_4947.shape({}), base64Certificate: module_4947.bool, certificateUrl: module_4947.string, getLicense: module_4947.func };
shape = module_4947.shape;
module_4947 = module_4947_mod;
oneOf2 = module_4947.oneOf;
items4 = [_modDef8430.CLEARKEY, _modDef8430.FAIRPLAY, _modDef8430.WIDEVINE, _modDef8430.PLAYREADY];
module_4947 = module_4947_mod;
obj4 = { type: module_4947.string.isRequired, value: oneOfType3(items5) };
shape2 = module_4947.shape;
module_4947 = module_4947_mod;
oneOfType3 = module_4947.oneOfType;
items5 = [module_4947.string, module_4947.number];
module_4947 = module_4947_mod;
obj5 = { type: module_4947.string.isRequired, value: oneOfType4(items6) };
shape3 = module_4947.shape;
module_4947 = module_4947_mod;
oneOfType4 = module_4947.oneOfType;
items6 = [module_4947.string, module_4947.number];
module_4947 = module_4947_mod;
obj6 = { type: module_4947.string.isRequired, value: oneOfType5(items7) };
shape4 = module_4947.shape;
module_4947 = module_4947_mod;
oneOfType5 = module_4947.oneOfType;
items7 = [module_4947.string, module_4947.number];
module_4947 = module_4947_mod;
arrayOf = module_4947.arrayOf;
module_4947 = module_4947_mod;
obj7 = { title: module_4947.string, uri: module_4947.string.isRequired, type: oneOf3(items8), language: module_4947.string.isRequired };
shape5 = module_4947.shape;
module_4947 = module_4947_mod;
oneOf3 = module_4947.oneOf;
items8 = [_modDef8449.SRT, _modDef8449.TTML, _modDef8449.VTT];
module_4947 = module_4947_mod;
obj8 = { minBufferMs: module_4947.number, maxBufferMs: module_4947.number, bufferForPlaybackMs: module_4947.number, bufferForPlaybackAfterRebufferMs: module_4947.number };
module_4947 = module_4947_mod;
let merged = Object.assign(get_ColorPropType.ViewPropTypes);
importDefaultResultResult.propTypes = obj;
let closure_16 = requireNativeComponent("RNVVideo", importDefaultResultResult, { nativeOnly: { src: true, seek: true, fullscreen: true } });

export default importDefaultResultResult;
export const TextTrackType = _modDef8449;
export const FilterType = _modDef8429;
export const DRMType = _modDef8430;
