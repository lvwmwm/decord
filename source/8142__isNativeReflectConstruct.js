// Module ID: 8142
// Function ID: 64407
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8142 (_isNativeReflectConstruct)
let Platform;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
importDefault(dependencyMap[6]);
let obj = arg1(dependencyMap[7]);
const StyleSheet = obj.StyleSheet;
({ NativeModules: closure_9, View: closure_10, Image: closure_11, Platform, findNodeHandle: closure_12, UIManager: closure_13 } = obj);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[8]));
const styles = StyleSheet.create({ base: { overflow: "hidden" } });
const tmp4 = (Component) => {
  class Video {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, Video);
      items = [];
      items[0] = Component;
      obj = closure_6(Video);
      tmp2 = closure_5;
      if (closure_18()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      Video = tmp2Result;
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
      tmp2Result.save = () => {
        let closure_0 = callback(async (arg0) => {
          const VideoManager = VideoManager.VideoManager;
          return yield VideoManager.save(arg0, closure_12(closure_0._root));
        });
        return function(arg0) {
          return callback(...arguments);
        };
      }();
      tmp2Result.restoreUserInterfaceForPictureInPictureStopCompleted = (restoreUserInterfaceForPIPStopCompletionHandler) => {
        tmp2Result.setNativeProps({ restoreUserInterfaceForPIPStopCompletionHandler });
      };
      tmp2Result._assignRoot = (_root) => {
        tmp2Result._root = _root;
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
                    const VideoManager2 = closure_9.VideoManager;
                    VideoManager2.setLicenseResult(arg0, callback(closure_0._root));
                  } else if (closure_9.VideoManager.setLicenseError) {
                    const VideoManager = closure_9.VideoManager;
                    VideoManager.setLicenseError("Empty license result", callback(closure_0._root));
                  }
                }).catch((arg0) => {
                  if (closure_9.VideoManager.setLicenseError) {
                    const VideoManager = closure_9.VideoManager;
                    VideoManager.setLicenseError(arg0, callback(closure_0._root));
                  }
                });
                const nextPromise = resolved.then((arg0) => {
                  if (undefined !== arg0) {
                    const VideoManager2 = closure_9.VideoManager;
                    VideoManager2.setLicenseResult(arg0, callback(closure_0._root));
                  } else if (closure_9.VideoManager.setLicenseError) {
                    const VideoManager = closure_9.VideoManager;
                    VideoManager.setLicenseError("Empty license result", callback(closure_0._root));
                  }
                });
              }
            }
            if (closure_9.VideoManager.setLicenseError) {
              const VideoManager = closure_9.VideoManager;
              VideoManager.setLicenseError("No spc received", callback2(tmp2Result._root));
            }
          }
        }
      };
      tmp2Result.getViewManagerConfig = (arg0) => {
        if (getViewManagerConfig.getViewManagerConfig) {
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
  const importDefault = Video;
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
  const items = [obj, , , ];
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
      const Video = headers;
      const self = this;
      const obj = {};
      const keys = Object.keys(headers);
      const item = keys.forEach((arg0) => {
        obj[arg0] = self.toTypeString(arg0[arg0]);
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
      const tmp = Video(closure_1[9])(this.props.source) || {};
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
      if (resizeMode === Video(closure_1[10]).stretch) {
        let ScaleNone = viewManagerConfig.Constants.ScaleToFill;
      } else if (resizeMode === Video(closure_1[10]).contain) {
        ScaleNone = viewManagerConfig.Constants.ScaleAspectFit;
      } else if (resizeMode === Video(closure_1[10]).cover) {
        ScaleNone = viewManagerConfig.Constants.ScaleAspectFill;
      } else {
        ScaleNone = viewManagerConfig.Constants.ScaleNone;
      }
      const merged = Object.assign({}, self.props);
      let obj = { style: items };
      const items = [base.base, merged.style];
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
      const merged2 = Object.assign({}, closure_8.absoluteFillObject, obj);
      const items1 = [callback3(closure_17, Object.assign({ ref: self._assignRoot }, merged, { style: closure_8.absoluteFill })), ];
      let showPoster = self.state.showPoster;
      if (showPoster) {
        const obj4 = { style: merged2 };
        const obj5 = { uri: self.props.poster };
        obj4.source = obj5;
        showPoster = callback3(closure_11, obj4);
      }
      items1[1] = showPoster;
      obj1.children = items1;
      return closure_15(closure_10, obj1);
    }
  };
  return callback(Video, items);
}(arg1(dependencyMap[6]).Component);
obj = {};
const tmp3 = arg1(dependencyMap[8]);
const items = [importDefault(dependencyMap[12]).NONE, importDefault(dependencyMap[12]).INVERT, importDefault(dependencyMap[12]).MONOCHROME, importDefault(dependencyMap[12]).POSTERIZE, importDefault(dependencyMap[12]).FALSE, importDefault(dependencyMap[12]).MAXIMUMCOMPONENT, importDefault(dependencyMap[12]).MINIMUMCOMPONENT, importDefault(dependencyMap[12]).CHROME, importDefault(dependencyMap[12]).FADE, importDefault(dependencyMap[12]).INSTANT, importDefault(dependencyMap[12]).MONO, importDefault(dependencyMap[12]).NOIR, importDefault(dependencyMap[12]).PROCESS, importDefault(dependencyMap[12]).TONAL, importDefault(dependencyMap[12]).TRANSFER, importDefault(dependencyMap[12]).SEPIA];
obj.filter = importDefault(dependencyMap[11]).oneOf(items);
obj.filterEnabled = importDefault(dependencyMap[11]).bool;
obj.src = importDefault(dependencyMap[11]).object;
const importDefaultResult1 = importDefault(dependencyMap[11]);
const items1 = [importDefault(dependencyMap[11]).number, importDefault(dependencyMap[11]).object];
obj.seek = importDefault(dependencyMap[11]).oneOfType(items1);
obj.fullscreen = importDefault(dependencyMap[11]).bool;
obj.onVideoLoadStart = importDefault(dependencyMap[11]).func;
obj.onVideoLoad = importDefault(dependencyMap[11]).func;
obj.onVideoBuffer = importDefault(dependencyMap[11]).func;
obj.onVideoError = importDefault(dependencyMap[11]).func;
obj.onVideoProgress = importDefault(dependencyMap[11]).func;
obj.onVideoBandwidthUpdate = importDefault(dependencyMap[11]).func;
obj.onVideoSeek = importDefault(dependencyMap[11]).func;
obj.onVideoEnd = importDefault(dependencyMap[11]).func;
obj.onTimedMetadata = importDefault(dependencyMap[11]).func;
obj.onVideoAudioBecomingNoisy = importDefault(dependencyMap[11]).func;
obj.onVideoExternalPlaybackChange = importDefault(dependencyMap[11]).func;
obj.onVideoFullscreenPlayerWillPresent = importDefault(dependencyMap[11]).func;
obj.onVideoFullscreenPlayerDidPresent = importDefault(dependencyMap[11]).func;
obj.onVideoFullscreenPlayerWillDismiss = importDefault(dependencyMap[11]).func;
obj.onVideoFullscreenPlayerDidDismiss = importDefault(dependencyMap[11]).func;
const importDefaultResult2 = importDefault(dependencyMap[11]);
const importDefaultResult3 = importDefault(dependencyMap[11]);
obj = { uri: importDefault(dependencyMap[11]).string };
const items2 = [importDefault(dependencyMap[11]).shape(obj), importDefault(dependencyMap[11]).number];
obj.source = importDefaultResult3.oneOfType(items2);
const importDefaultResult4 = importDefault(dependencyMap[11]);
const obj1 = {};
const importDefaultResult5 = importDefault(dependencyMap[11]);
const items3 = [importDefault(dependencyMap[13]).CLEARKEY, importDefault(dependencyMap[13]).FAIRPLAY, importDefault(dependencyMap[13]).WIDEVINE, importDefault(dependencyMap[13]).PLAYREADY];
obj1.type = importDefault(dependencyMap[11]).oneOf(items3);
obj1.licenseServer = importDefault(dependencyMap[11]).string;
const importDefaultResult6 = importDefault(dependencyMap[11]);
obj1.headers = importDefault(dependencyMap[11]).shape({});
obj1.base64Certificate = importDefault(dependencyMap[11]).bool;
obj1.certificateUrl = importDefault(dependencyMap[11]).string;
obj1.getLicense = importDefault(dependencyMap[11]).func;
obj.drm = importDefaultResult5.shape(obj1);
obj.minLoadRetryCount = importDefault(dependencyMap[11]).number;
obj.maxBitRate = importDefault(dependencyMap[11]).number;
obj.resizeMode = importDefault(dependencyMap[11]).string;
obj.poster = importDefault(dependencyMap[11]).string;
obj.posterResizeMode = arg1(dependencyMap[14]).ImagePropTypes.resizeMode;
obj.repeat = importDefault(dependencyMap[11]).bool;
obj.automaticallyWaitsToMinimizeStalling = importDefault(dependencyMap[11]).bool;
obj.allowsExternalPlayback = importDefault(dependencyMap[11]).bool;
const importDefaultResult7 = importDefault(dependencyMap[11]);
const obj2 = { type: importDefault(dependencyMap[11]).string.isRequired };
const importDefaultResult8 = importDefault(dependencyMap[11]);
const items4 = [importDefault(dependencyMap[11]).string, importDefault(dependencyMap[11]).number];
obj2.value = importDefault(dependencyMap[11]).oneOfType(items4);
obj.selectedAudioTrack = importDefaultResult8.shape(obj2);
const importDefaultResult9 = importDefault(dependencyMap[11]);
const obj3 = { type: importDefault(dependencyMap[11]).string.isRequired };
const importDefaultResult10 = importDefault(dependencyMap[11]);
const items5 = [importDefault(dependencyMap[11]).string, importDefault(dependencyMap[11]).number];
obj3.value = importDefault(dependencyMap[11]).oneOfType(items5);
obj.selectedVideoTrack = importDefaultResult10.shape(obj3);
const importDefaultResult11 = importDefault(dependencyMap[11]);
const obj4 = { type: importDefault(dependencyMap[11]).string.isRequired };
const importDefaultResult12 = importDefault(dependencyMap[11]);
const items6 = [importDefault(dependencyMap[11]).string, importDefault(dependencyMap[11]).number];
obj4.value = importDefault(dependencyMap[11]).oneOfType(items6);
obj.selectedTextTrack = importDefaultResult12.shape(obj4);
const importDefaultResult13 = importDefault(dependencyMap[11]);
const importDefaultResult14 = importDefault(dependencyMap[11]);
const obj5 = { title: importDefault(dependencyMap[11]).string, uri: importDefault(dependencyMap[11]).string.isRequired };
const importDefaultResult15 = importDefault(dependencyMap[11]);
const items7 = [importDefault(dependencyMap[15]).SRT, importDefault(dependencyMap[15]).TTML, importDefault(dependencyMap[15]).VTT];
obj5.type = importDefault(dependencyMap[11]).oneOf(items7);
obj5.language = importDefault(dependencyMap[11]).string.isRequired;
obj.textTracks = importDefaultResult14.arrayOf(importDefaultResult15.shape(obj5));
obj.paused = importDefault(dependencyMap[11]).bool;
obj.muted = importDefault(dependencyMap[11]).bool;
obj.volume = importDefault(dependencyMap[11]).number;
const importDefaultResult16 = importDefault(dependencyMap[11]);
const importDefaultResult17 = importDefault(dependencyMap[11]);
obj.bufferConfig = importDefaultResult17.shape({ minBufferMs: importDefault(dependencyMap[11]).number, maxBufferMs: importDefault(dependencyMap[11]).number, bufferForPlaybackMs: importDefault(dependencyMap[11]).number, bufferForPlaybackAfterRebufferMs: importDefault(dependencyMap[11]).number });
obj.stereoPan = importDefault(dependencyMap[11]).number;
obj.rate = importDefault(dependencyMap[11]).number;
obj.pictureInPicture = importDefault(dependencyMap[11]).bool;
obj.playInBackground = importDefault(dependencyMap[11]).bool;
obj.preferredForwardBufferDuration = importDefault(dependencyMap[11]).number;
obj.playWhenInactive = importDefault(dependencyMap[11]).bool;
const obj6 = { minBufferMs: importDefault(dependencyMap[11]).number, maxBufferMs: importDefault(dependencyMap[11]).number, bufferForPlaybackMs: importDefault(dependencyMap[11]).number, bufferForPlaybackAfterRebufferMs: importDefault(dependencyMap[11]).number };
obj.ignoreSilentSwitch = importDefault(dependencyMap[11]).oneOf([null, null]);
obj.reportBandwidth = importDefault(dependencyMap[11]).bool;
obj.disableFocus = importDefault(dependencyMap[11]).bool;
obj.controls = importDefault(dependencyMap[11]).bool;
obj.audioOnly = importDefault(dependencyMap[11]).bool;
obj.currentTime = importDefault(dependencyMap[11]).number;
obj.fullscreenAutorotate = importDefault(dependencyMap[11]).bool;
const importDefaultResult18 = importDefault(dependencyMap[11]);
obj.fullscreenOrientation = importDefault(dependencyMap[11]).oneOf(["height", "a", "no"]);
obj.progressUpdateInterval = importDefault(dependencyMap[11]).number;
obj.useTextureView = importDefault(dependencyMap[11]).bool;
obj.hideShutterView = importDefault(dependencyMap[11]).bool;
obj.onLoadStart = importDefault(dependencyMap[11]).func;
obj.onLoad = importDefault(dependencyMap[11]).func;
obj.onBuffer = importDefault(dependencyMap[11]).func;
obj.onError = importDefault(dependencyMap[11]).func;
obj.onProgress = importDefault(dependencyMap[11]).func;
obj.onBandwidthUpdate = importDefault(dependencyMap[11]).func;
obj.onSeek = importDefault(dependencyMap[11]).func;
obj.onEnd = importDefault(dependencyMap[11]).func;
obj.onFullscreenPlayerWillPresent = importDefault(dependencyMap[11]).func;
obj.onFullscreenPlayerDidPresent = importDefault(dependencyMap[11]).func;
obj.onFullscreenPlayerWillDismiss = importDefault(dependencyMap[11]).func;
obj.onFullscreenPlayerDidDismiss = importDefault(dependencyMap[11]).func;
obj.onReadyForDisplay = importDefault(dependencyMap[11]).func;
obj.onPlaybackStalled = importDefault(dependencyMap[11]).func;
obj.onPlaybackResume = importDefault(dependencyMap[11]).func;
obj.onPlaybackRateChange = importDefault(dependencyMap[11]).func;
obj.onAudioFocusChanged = importDefault(dependencyMap[11]).func;
obj.onAudioBecomingNoisy = importDefault(dependencyMap[11]).func;
obj.onPictureInPictureStatusChanged = importDefault(dependencyMap[11]).func;
obj.needsToRestoreUserInterfaceForPictureInPictureStop = importDefault(dependencyMap[11]).func;
obj.onExternalPlaybackChange = importDefault(dependencyMap[11]).func;
obj.scaleX = importDefault(dependencyMap[11]).number;
obj.scaleY = importDefault(dependencyMap[11]).number;
obj.translateX = importDefault(dependencyMap[11]).number;
obj.translateY = importDefault(dependencyMap[11]).number;
obj.rotation = importDefault(dependencyMap[11]).number;
tmp4.propTypes = Object.assign(obj, arg1(dependencyMap[14]).ViewPropTypes);
let closure_17 = obj.requireNativeComponent("RNVVideo", tmp4, { nativeOnly: {} });

export default tmp4;
export const TextTrackType = importDefault(dependencyMap[15]);
export const FilterType = importDefault(dependencyMap[12]);
export const DRMType = importDefault(dependencyMap[13]);
