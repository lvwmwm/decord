// Module ID: 8148
// Function ID: 64444
// Name: _isNativeReflectConstruct
// Dependencies: [5, 6, 7, 15, 17, 18, 31, 27, 33, 90, 8149, 3955, 8151, 8152, 8153, 8171]

// Module 8148 (_isNativeReflectConstruct)
import _inherits from "_inherits";
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import module_8171 from "module_8171";
import _getPrototypeOf from "_getPrototypeOf";
import closure_7 from "_inherits";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import importDefaultResult1 from "emptyFunction";
import importDefaultResult2 from "emptyFunction";
import importDefaultResult3 from "emptyFunction";
import importDefaultResult4 from "emptyFunction";
import importDefaultResult5 from "emptyFunction";
import importDefaultResult6 from "emptyFunction";
import importDefaultResult7 from "emptyFunction";
import importDefaultResult8 from "emptyFunction";
import importDefaultResult9 from "emptyFunction";
import importDefaultResult10 from "emptyFunction";
import importDefaultResult11 from "emptyFunction";
import importDefaultResult12 from "emptyFunction";
import importDefaultResult13 from "emptyFunction";
import importDefaultResult14 from "emptyFunction";
import importDefaultResult15 from "emptyFunction";
import importDefaultResult16 from "emptyFunction";
import importDefaultResult17 from "emptyFunction";
import importDefaultResult18 from "emptyFunction";

let Platform;
let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_9;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ NativeModules: closure_9, View: closure_10, Image: closure_11, Platform, findNodeHandle: closure_12, UIManager: closure_13 } = get_ActivityIndicator);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const styles = StyleSheet.create({ base: { overflow: "hidden" } });
const tmp4 = ((Component) => {
  class Video {
    constructor(arg0) {
      self = this;
      tmp = outer1_3(this, apply);
      items = [];
      items[0] = Component;
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_18()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.seek = (seek) => {
        if (isNaN(seek)) {
          const _Error = Error;
          const error = new Error("Specified time is not a number");
          throw error;
        } else {
          const obj = { seek };
          tmp2Result.setNativeProps(obj);
        }
      };
      tmp2Result.presentFullscreenPlayer = () => {
        tmp2Result.setNativeProps({ fullscreen: true });
      };
      tmp2Result.dismissFullscreenPlayer = () => {
        tmp2Result.setNativeProps({ fullscreen: false });
      };
      tmp2Result.save = (() => {
        let closure_0 = outer2_2(async (arg0) => {
          const VideoManager = outer4_9.VideoManager;
          return yield VideoManager.save(arg0, outer4_12(closure_0._root));
        });
        return function(arg0) {
          return callback(...arguments);
        };
      })();
      tmp2Result.restoreUserInterfaceForPictureInPictureStopCompleted = (restoreUserInterfaceForPIPStopCompletionHandler) => {
        tmp2Result.setNativeProps({ restoreUserInterfaceForPIPStopCompletionHandler });
      };
      tmp2Result._assignRoot = (_root) => {
        closure_0._root = _root;
      };
      tmp2Result._hidePoster = () => {
        if (tmp2Result.state.showPoster) {
          const obj = { showPoster: false };
          tmp2Result.setState(obj);
        }
      };
      tmp2Result._onLoadStart = (nativeEvent) => {
        if (tmp2Result.props.onLoadStart) {
          const props = tmp2Result.props;
          props.onLoadStart(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onLoad = (nativeEvent) => {
        if (tmp2Result.props.onLoad) {
          const props = tmp2Result.props;
          props.onLoad(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onError = (nativeEvent) => {
        if (tmp2Result.props.onError) {
          const props = tmp2Result.props;
          props.onError(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onProgress = (nativeEvent) => {
        if (tmp2Result.props.onProgress) {
          const props = tmp2Result.props;
          props.onProgress(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onBandwidthUpdate = (nativeEvent) => {
        if (tmp2Result.props.onBandwidthUpdate) {
          const props = tmp2Result.props;
          props.onBandwidthUpdate(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onSeek = (nativeEvent) => {
        if (tmp2Result.props.onSeek) {
          const props = tmp2Result.props;
          props.onSeek(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onEnd = (nativeEvent) => {
        if (tmp2Result.props.onEnd) {
          const props = tmp2Result.props;
          props.onEnd(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onTimedMetadata = (nativeEvent) => {
        if (tmp2Result.props.onTimedMetadata) {
          const props = tmp2Result.props;
          props.onTimedMetadata(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onFullscreenPlayerWillPresent = (nativeEvent) => {
        if (tmp2Result.props.onFullscreenPlayerWillPresent) {
          const props = tmp2Result.props;
          const result = props.onFullscreenPlayerWillPresent(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onFullscreenPlayerDidPresent = (nativeEvent) => {
        if (tmp2Result.props.onFullscreenPlayerDidPresent) {
          const props = tmp2Result.props;
          const result = props.onFullscreenPlayerDidPresent(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onFullscreenPlayerWillDismiss = (nativeEvent) => {
        if (tmp2Result.props.onFullscreenPlayerWillDismiss) {
          const props = tmp2Result.props;
          const result = props.onFullscreenPlayerWillDismiss(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onFullscreenPlayerDidDismiss = (nativeEvent) => {
        if (tmp2Result.props.onFullscreenPlayerDidDismiss) {
          const props = tmp2Result.props;
          const result = props.onFullscreenPlayerDidDismiss(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onReadyForDisplay = (nativeEvent) => {
        if (!tmp2Result.props.audioOnly) {
          tmp2Result._hidePoster();
        }
        if (tmp2Result.props.onReadyForDisplay) {
          const props = tmp2Result.props;
          props.onReadyForDisplay(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onPlaybackStalled = (nativeEvent) => {
        if (tmp2Result.props.onPlaybackStalled) {
          const props = tmp2Result.props;
          props.onPlaybackStalled(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onPlaybackResume = (nativeEvent) => {
        if (tmp2Result.props.onPlaybackResume) {
          const props = tmp2Result.props;
          props.onPlaybackResume(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onPlaybackRateChange = (nativeEvent) => {
        if (tmp2Result.props.onPlaybackRateChange) {
          const props = tmp2Result.props;
          props.onPlaybackRateChange(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onExternalPlaybackChange = (nativeEvent) => {
        if (tmp2Result.props.onExternalPlaybackChange) {
          const props = tmp2Result.props;
          const result = props.onExternalPlaybackChange(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onAudioBecomingNoisy = () => {
        if (tmp2Result.props.onAudioBecomingNoisy) {
          const props = tmp2Result.props;
          props.onAudioBecomingNoisy();
        }
      };
      tmp2Result._onPictureInPictureStatusChanged = (nativeEvent) => {
        if (tmp2Result.props.onPictureInPictureStatusChanged) {
          const props = tmp2Result.props;
          const result = props.onPictureInPictureStatusChanged(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onRestoreUserInterfaceForPictureInPictureStop = (arg0) => {
        if (tmp2Result.props.onRestoreUserInterfaceForPictureInPictureStop) {
          const props = tmp2Result.props;
          const result = props.onRestoreUserInterfaceForPictureInPictureStop();
        }
      };
      tmp2Result._onAudioFocusChanged = (nativeEvent) => {
        if (tmp2Result.props.onAudioFocusChanged) {
          const props = tmp2Result.props;
          props.onAudioFocusChanged(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onBuffer = (nativeEvent) => {
        if (tmp2Result.props.onBuffer) {
          const props = tmp2Result.props;
          props.onBuffer(nativeEvent.nativeEvent);
        }
      };
      tmp2Result._onGetLicense = (nativeEvent) => {
        if (tmp2Result.props.drm) {
          const _Function = Function;
          if (tmp2Result.props.drm.getLicense instanceof Function) {
            nativeEvent = nativeEvent.nativeEvent;
            if (nativeEvent) {
              if (nativeEvent.spcBase64) {
                const drm = tmp2Result.props.drm;
                const resolved = Promise.resolve(drm.getLicense(nativeEvent.spcBase64, nativeEvent.contentId, nativeEvent.licenseUrl));
                resolved.then((arg0) => {
                  if (undefined !== arg0) {
                    const VideoManager2 = outer3_9.VideoManager;
                    VideoManager2.setLicenseResult(arg0, outer3_12(outer1_0._root));
                  } else if (outer3_9.VideoManager.setLicenseError) {
                    const VideoManager = outer3_9.VideoManager;
                    VideoManager.setLicenseError("Empty license result", outer3_12(outer1_0._root));
                  }
                }).catch((arg0) => {
                  if (outer3_9.VideoManager.setLicenseError) {
                    const VideoManager = outer3_9.VideoManager;
                    VideoManager.setLicenseError(arg0, outer3_12(outer1_0._root));
                  }
                });
                const nextPromise = resolved.then((arg0) => {
                  if (undefined !== arg0) {
                    const VideoManager2 = outer3_9.VideoManager;
                    VideoManager2.setLicenseResult(arg0, outer3_12(outer1_0._root));
                  } else if (outer3_9.VideoManager.setLicenseError) {
                    const VideoManager = outer3_9.VideoManager;
                    VideoManager.setLicenseError("Empty license result", outer3_12(outer1_0._root));
                  }
                });
              }
            }
            if (outer2_9.VideoManager.setLicenseError) {
              let VideoManager = outer2_9.VideoManager;
              VideoManager.setLicenseError("No spc received", outer2_12(tmp2Result._root));
            }
          }
        }
      };
      tmp2Result.getViewManagerConfig = (arg0) => {
        if (outer2_13.getViewManagerConfig) {
          let viewManagerConfig = obj.getViewManagerConfig(arg0);
        } else {
          viewManagerConfig = obj[arg0];
        }
        return viewManagerConfig;
      };
      tmp2Result.state = { showPoster: Component.poster };
      return tmp2Result;
    }
  }
  callback2(Video, Component);
  let obj = {
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
  let items = [obj, , , ];
  obj = {
    key: "toTypeString",
    value: function toTypeString(toISOString) {
      if ("object" === typeof toISOString) {
        const _Date = Date;
        if (toISOString instanceof Date) {
          let toISOStringResult = toISOString.toISOString();
        } else {
          const _JSON = JSON;
          toISOStringResult = JSON.stringify(toISOString);
        }
        return toISOStringResult;
      } else if ("undefined" === tmp) {
        return "";
      } else {
        return toISOString.toString();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "stringsOnlyObject",
    value: function stringsOnlyObject(headers) {
      let closure_0 = headers;
      const self = this;
      const obj = {};
      const keys = Object.keys(headers);
      const item = keys.forEach((arg0) => {
        obj[arg0] = self.toTypeString(headers[arg0]);
      });
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value: function render() {
      const self = this;
      const resizeMode = this.props.resizeMode;
      const tmp = Video(outer1_1[9])(this.props.source) || {};
      let str = tmp.uri;
      if (!str) {
        str = "";
      }
      let match = str;
      if (str) {
        match = str.match(/^\//);
      }
      let str2 = str;
      if (match) {
        const _HermesInternal = HermesInternal;
        str2 = "file://" + str;
      }
      if (!str2) {
        const _console = console;
        console.warn("Trying to load empty source.");
      }
      const tmp2 = !tmp.__packager_asset;
      const tmp7 = !str2 || !str2.match(/^https?:/);
      const viewManagerConfig = self.getViewManagerConfig("RNVVideo");
      if (resizeMode === Video(outer1_1[10]).stretch) {
        let ScaleNone = viewManagerConfig.Constants.ScaleToFill;
      } else if (resizeMode === Video(outer1_1[10]).contain) {
        ScaleNone = viewManagerConfig.Constants.ScaleAspectFit;
      } else if (resizeMode === Video(outer1_1[10]).cover) {
        ScaleNone = viewManagerConfig.Constants.ScaleAspectFill;
      } else {
        ScaleNone = viewManagerConfig.Constants.ScaleNone;
      }
      const merged = Object.assign({}, self.props);
      let obj = { style: items };
      items = [outer1_16.base, merged.style];
      obj.resizeMode = ScaleNone;
      obj = { uri: str2, isNetwork: !tmp7, isAsset: !(!str2 || !str2.match(/^(assets-library|ipod-library|file|content|ms-appx|ms-appdata):/)), shouldCache: tmp2 };
      let str5 = tmp.type;
      if (!str5) {
        str5 = "";
      }
      obj.type = str5;
      obj.mainVer = tmp.mainVer || 0;
      obj.patchVer = tmp.patchVer || 0;
      if (tmp.headers) {
        let stringsOnlyObjectResult = self.stringsOnlyObject(tmp.headers);
      } else {
        stringsOnlyObjectResult = {};
      }
      obj.requestHeaders = stringsOnlyObjectResult;
      obj.src = obj;
      ({ _onLoadStart: obj.onVideoLoadStart, _onLoad: obj.onVideoLoad, _onError: obj.onVideoError, _onProgress: obj.onVideoProgress, _onSeek: obj.onVideoSeek, _onEnd: obj.onVideoEnd, _onBuffer: obj.onVideoBuffer, _onBandwidthUpdate: obj.onVideoBandwidthUpdate, _onTimedMetadata: obj.onTimedMetadata, _onAudioBecomingNoisy: obj.onVideoAudioBecomingNoisy, _onExternalPlaybackChange: obj.onVideoExternalPlaybackChange, _onFullscreenPlayerWillPresent: obj.onVideoFullscreenPlayerWillPresent, _onFullscreenPlayerDidPresent: obj.onVideoFullscreenPlayerDidPresent, _onFullscreenPlayerWillDismiss: obj.onVideoFullscreenPlayerWillDismiss, _onFullscreenPlayerDidDismiss: obj.onVideoFullscreenPlayerDidDismiss, _onReadyForDisplay: obj.onReadyForDisplay, _onPlaybackStalled: obj.onPlaybackStalled, _onPlaybackResume: obj.onPlaybackResume, _onPlaybackRateChange: obj.onPlaybackRateChange, _onAudioFocusChanged: obj.onAudioFocusChanged, _onAudioBecomingNoisy: obj.onAudioBecomingNoisy } = self);
      obj.onGetLicense = merged.drm && merged.drm.getLicense && self._onGetLicense;
      ({ _onPictureInPictureStatusChanged: obj.onPictureInPictureStatusChanged, _onRestoreUserInterfaceForPictureInPictureStop: obj.onRestoreUserInterfaceForPictureInPictureStop } = self);
      const merged1 = Object.assign(merged, obj);
      obj = {};
      let str6 = self.props.posterResizeMode;
      if (!str6) {
        str6 = "contain";
      }
      obj.resizeMode = str6;
      const obj1 = { style: merged.style };
      const merged2 = Object.assign({}, outer1_8.absoluteFillObject, obj);
      const items1 = [outer1_14(outer1_17, Object.assign({ ref: self._assignRoot }, merged, { style: outer1_8.absoluteFill })), ];
      let showPoster = self.state.showPoster;
      if (showPoster) {
        const obj4 = { style: merged2 };
        const obj5 = { uri: self.props.poster };
        obj4.source = obj5;
        showPoster = outer1_14(outer1_11, obj4);
      }
      items1[1] = showPoster;
      obj1.children = items1;
      return outer1_15(outer1_10, obj1);
    }
  };
  return callback(Video, items);
})(require("result").Component);
get_ActivityIndicator = {};
let items = [require("module_8151").NONE, require("module_8151").INVERT, require("module_8151").MONOCHROME, require("module_8151").POSTERIZE, require("module_8151").FALSE, require("module_8151").MAXIMUMCOMPONENT, require("module_8151").MINIMUMCOMPONENT, require("module_8151").CHROME, require("module_8151").FADE, require("module_8151").INSTANT, require("module_8151").MONO, require("module_8151").NOIR, require("module_8151").PROCESS, require("module_8151").TONAL, require("module_8151").TRANSFER, require("module_8151").SEPIA];
get_ActivityIndicator.filter = require("emptyFunction").oneOf(items);
get_ActivityIndicator.filterEnabled = require("emptyFunction").bool;
get_ActivityIndicator.src = require("emptyFunction").object;
let items1 = [require("emptyFunction").number, require("emptyFunction").object];
get_ActivityIndicator.seek = require("emptyFunction").oneOfType(items1);
get_ActivityIndicator.fullscreen = require("emptyFunction").bool;
get_ActivityIndicator.onVideoLoadStart = require("emptyFunction").func;
get_ActivityIndicator.onVideoLoad = require("emptyFunction").func;
get_ActivityIndicator.onVideoBuffer = require("emptyFunction").func;
get_ActivityIndicator.onVideoError = require("emptyFunction").func;
get_ActivityIndicator.onVideoProgress = require("emptyFunction").func;
get_ActivityIndicator.onVideoBandwidthUpdate = require("emptyFunction").func;
get_ActivityIndicator.onVideoSeek = require("emptyFunction").func;
get_ActivityIndicator.onVideoEnd = require("emptyFunction").func;
get_ActivityIndicator.onTimedMetadata = require("emptyFunction").func;
get_ActivityIndicator.onVideoAudioBecomingNoisy = require("emptyFunction").func;
get_ActivityIndicator.onVideoExternalPlaybackChange = require("emptyFunction").func;
get_ActivityIndicator.onVideoFullscreenPlayerWillPresent = require("emptyFunction").func;
get_ActivityIndicator.onVideoFullscreenPlayerDidPresent = require("emptyFunction").func;
get_ActivityIndicator.onVideoFullscreenPlayerWillDismiss = require("emptyFunction").func;
get_ActivityIndicator.onVideoFullscreenPlayerDidDismiss = require("emptyFunction").func;
get_ActivityIndicator = { uri: require("emptyFunction").string };
const items2 = [require("emptyFunction").shape(get_ActivityIndicator), require("emptyFunction").number];
get_ActivityIndicator.source = importDefaultResult3.oneOfType(items2);
let obj1 = {};
const items3 = [require("module_8152").CLEARKEY, require("module_8152").FAIRPLAY, require("module_8152").WIDEVINE, require("module_8152").PLAYREADY];
obj1.type = require("emptyFunction").oneOf(items3);
obj1.licenseServer = require("emptyFunction").string;
obj1.headers = require("emptyFunction").shape({});
obj1.base64Certificate = require("emptyFunction").bool;
obj1.certificateUrl = require("emptyFunction").string;
obj1.getLicense = require("emptyFunction").func;
get_ActivityIndicator.drm = importDefaultResult5.shape(obj1);
get_ActivityIndicator.minLoadRetryCount = require("emptyFunction").number;
get_ActivityIndicator.maxBitRate = require("emptyFunction").number;
get_ActivityIndicator.resizeMode = require("emptyFunction").string;
get_ActivityIndicator.poster = require("emptyFunction").string;
get_ActivityIndicator.posterResizeMode = require("get ColorPropType").ImagePropTypes.resizeMode;
get_ActivityIndicator.repeat = require("emptyFunction").bool;
get_ActivityIndicator.automaticallyWaitsToMinimizeStalling = require("emptyFunction").bool;
get_ActivityIndicator.allowsExternalPlayback = require("emptyFunction").bool;
const obj2 = { type: require("emptyFunction").string.isRequired };
const items4 = [require("emptyFunction").string, require("emptyFunction").number];
obj2.value = require("emptyFunction").oneOfType(items4);
get_ActivityIndicator.selectedAudioTrack = importDefaultResult8.shape(obj2);
const obj3 = { type: require("emptyFunction").string.isRequired };
const items5 = [require("emptyFunction").string, require("emptyFunction").number];
obj3.value = require("emptyFunction").oneOfType(items5);
get_ActivityIndicator.selectedVideoTrack = importDefaultResult10.shape(obj3);
let obj4 = { type: require("emptyFunction").string.isRequired };
const items6 = [require("emptyFunction").string, require("emptyFunction").number];
obj4.value = require("emptyFunction").oneOfType(items6);
get_ActivityIndicator.selectedTextTrack = importDefaultResult12.shape(obj4);
let obj5 = { title: require("emptyFunction").string, uri: require("emptyFunction").string.isRequired };
const items7 = [require("module_8171").SRT, require("module_8171").TTML, require("module_8171").VTT];
obj5.type = require("emptyFunction").oneOf(items7);
obj5.language = require("emptyFunction").string.isRequired;
get_ActivityIndicator.textTracks = importDefaultResult14.arrayOf(importDefaultResult15.shape(obj5));
get_ActivityIndicator.paused = require("emptyFunction").bool;
get_ActivityIndicator.muted = require("emptyFunction").bool;
get_ActivityIndicator.volume = require("emptyFunction").number;
get_ActivityIndicator.bufferConfig = importDefaultResult17.shape({ minBufferMs: require("emptyFunction").number, maxBufferMs: require("emptyFunction").number, bufferForPlaybackMs: require("emptyFunction").number, bufferForPlaybackAfterRebufferMs: require("emptyFunction").number });
get_ActivityIndicator.stereoPan = require("emptyFunction").number;
get_ActivityIndicator.rate = require("emptyFunction").number;
get_ActivityIndicator.pictureInPicture = require("emptyFunction").bool;
get_ActivityIndicator.playInBackground = require("emptyFunction").bool;
get_ActivityIndicator.preferredForwardBufferDuration = require("emptyFunction").number;
get_ActivityIndicator.playWhenInactive = require("emptyFunction").bool;
const obj6 = { minBufferMs: require("emptyFunction").number, maxBufferMs: require("emptyFunction").number, bufferForPlaybackMs: require("emptyFunction").number, bufferForPlaybackAfterRebufferMs: require("emptyFunction").number };
get_ActivityIndicator.ignoreSilentSwitch = require("emptyFunction").oneOf(["ignore", "obey"]);
get_ActivityIndicator.reportBandwidth = require("emptyFunction").bool;
get_ActivityIndicator.disableFocus = require("emptyFunction").bool;
get_ActivityIndicator.controls = require("emptyFunction").bool;
get_ActivityIndicator.audioOnly = require("emptyFunction").bool;
get_ActivityIndicator.currentTime = require("emptyFunction").number;
get_ActivityIndicator.fullscreenAutorotate = require("emptyFunction").bool;
get_ActivityIndicator.fullscreenOrientation = require("emptyFunction").oneOf(["all", "landscape", "portrait"]);
get_ActivityIndicator.progressUpdateInterval = require("emptyFunction").number;
get_ActivityIndicator.useTextureView = require("emptyFunction").bool;
get_ActivityIndicator.hideShutterView = require("emptyFunction").bool;
get_ActivityIndicator.onLoadStart = require("emptyFunction").func;
get_ActivityIndicator.onLoad = require("emptyFunction").func;
get_ActivityIndicator.onBuffer = require("emptyFunction").func;
get_ActivityIndicator.onError = require("emptyFunction").func;
get_ActivityIndicator.onProgress = require("emptyFunction").func;
get_ActivityIndicator.onBandwidthUpdate = require("emptyFunction").func;
get_ActivityIndicator.onSeek = require("emptyFunction").func;
get_ActivityIndicator.onEnd = require("emptyFunction").func;
get_ActivityIndicator.onFullscreenPlayerWillPresent = require("emptyFunction").func;
get_ActivityIndicator.onFullscreenPlayerDidPresent = require("emptyFunction").func;
get_ActivityIndicator.onFullscreenPlayerWillDismiss = require("emptyFunction").func;
get_ActivityIndicator.onFullscreenPlayerDidDismiss = require("emptyFunction").func;
get_ActivityIndicator.onReadyForDisplay = require("emptyFunction").func;
get_ActivityIndicator.onPlaybackStalled = require("emptyFunction").func;
get_ActivityIndicator.onPlaybackResume = require("emptyFunction").func;
get_ActivityIndicator.onPlaybackRateChange = require("emptyFunction").func;
get_ActivityIndicator.onAudioFocusChanged = require("emptyFunction").func;
get_ActivityIndicator.onAudioBecomingNoisy = require("emptyFunction").func;
get_ActivityIndicator.onPictureInPictureStatusChanged = require("emptyFunction").func;
get_ActivityIndicator.needsToRestoreUserInterfaceForPictureInPictureStop = require("emptyFunction").func;
get_ActivityIndicator.onExternalPlaybackChange = require("emptyFunction").func;
get_ActivityIndicator.scaleX = require("emptyFunction").number;
get_ActivityIndicator.scaleY = require("emptyFunction").number;
get_ActivityIndicator.translateX = require("emptyFunction").number;
get_ActivityIndicator.translateY = require("emptyFunction").number;
get_ActivityIndicator.rotation = require("emptyFunction").number;
tmp4.propTypes = Object.assign(get_ActivityIndicator, require("get ColorPropType").ViewPropTypes);
let closure_17 = get_ActivityIndicator.requireNativeComponent("RNVVideo", tmp4, { nativeOnly: { src: true, seek: true, fullscreen: true } });

export default tmp4;
export const TextTrackType = require("module_8171");
export const FilterType = require("module_8151");
export const DRMType = require("module_8152");
