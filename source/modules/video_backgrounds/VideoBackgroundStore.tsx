// Module ID: 8849
// Function ID: 69818
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1316, 4177, 1906, 1849, 8850, 4227, 566, 686, 2]

// Module 8849 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function hasVideoBackgroundLive(backgroundOption) {
  let videoBackgroundOptionFromProto = backgroundOption;
  currentUser = currentUser.getCurrentUser();
  if (null == currentUser) {
    return false;
  } else {
    if (null == videoBackgroundOptionFromProto) {
      let prop;
      const voiceAndVideo = settings.settings.voiceAndVideo;
      if (null != voiceAndVideo) {
        prop = voiceAndVideo.videoBackgroundFilterDesktop;
      }
      videoBackgroundOptionFromProto = require(8850) /* isCustomBackgroundOption */.getVideoBackgroundOptionFromProto(prop, currentUser.id);
      const obj = require(8850) /* isCustomBackgroundOption */;
    }
    let isVideoEnabledResult = null != store.getVoiceChannelId();
    if (isVideoEnabledResult) {
      isVideoEnabledResult = videoEnabled.isVideoEnabled();
    }
    if (isVideoEnabledResult) {
      isVideoEnabledResult = null != videoBackgroundOptionFromProto;
    }
    return isVideoEnabledResult;
  }
}
function handleSyncedStoresUpdate() {
  if (voiceChannelId !== store.getVoiceChannelId()) {
    let c13 = false;
    let c15 = false;
    let c16 = false;
  }
  if (hasVideoBackgroundLive()) {
    c13 = true;
  }
  voiceChannelId = store.getVoiceChannelId();
}
let c11 = false;
let c12 = null;
let c13 = false;
let closure_14 = {};
let c15 = false;
let c16 = false;
let tmp2 = ((Store) => {
  class VideoBackgroundStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, VideoBackgroundStore);
      obj = outer1_5(VideoBackgroundStore);
      tmp2 = outer1_4;
      if (outer1_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(VideoBackgroundStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_9, outer1_7, outer1_10);
      const items = [outer1_9, outer1_8];
      this.syncWith(items, outer1_19);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "videoFilterAssets",
    get() {
      return outer1_14;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasBeenApplied",
    get() {
      return outer1_11;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasUsedBackgroundInCall",
    get() {
      return outer1_13;
    }
  };
  items[4] = {
    key: "videoBackgroundUnavailable",
    get() {
      return outer1_15;
    }
  };
  items[5] = {
    key: "videoBackgroundPreviewUnavailable",
    get() {
      return outer1_16;
    }
  };
  return callback(VideoBackgroundStore, items);
})(require("initialize").Store);
tmp2.displayName = "VideoBackgroundStore";
tmp2 = new tmp2(require("dispatcher"), {
  VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function handleVideoFilterAssetFetchSuccess(assets) {
    assets = assets.assets;
    const obj = {};
    const item = assets.forEach((id) => {
      obj[id.id] = id;
      return id;
    });
  },
  VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function handleAddBackground(videoFilterAsset) {
    videoFilterAsset = videoFilterAsset.videoFilterAsset;
    const obj = {};
    const merged = Object.assign(obj);
    obj[videoFilterAsset.id] = videoFilterAsset;
  },
  VIDEO_FILTER_ASSET_DELETE_SUCCESS: function handleRemoveBackground(videoFilterAsset) {
    const obj = {};
    videoFilterAsset = videoFilterAsset.videoFilterAsset;
    const merged = Object.assign(obj);
    delete tmp2[tmp];
  },
  VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function handleSaveLastUsedBackgroundOption(backgroundOption) {
    if (hasVideoBackgroundLive(backgroundOption.backgroundOption)) {
      let c13 = true;
    }
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function handleApplyMediaFilterSettings(settings) {
    settings = settings.settings;
    if (require(4227) /* getMediaEngineImpl */.FilterSettingsKey.CAMERA_BACKGROUND_LIVE in settings) {
      let c11 = true;
      let c15 = false;
    }
    if (require(4227) /* getMediaEngineImpl */.FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW in settings) {
      let c16 = false;
    }
  },
  MEDIA_ENGINE_VIDEO_FILTER_ERROR: function handleVideoFilterError(target) {
    if ("live" === target.target) {
      let c15 = true;
    } else {
      let c16 = true;
    }
  },
  LOGOUT: function handleLogout() {
    let c11 = false;
    let c13 = false;
    let c12 = null;
    let closure_14 = {};
    let c15 = false;
    let c16 = false;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/video_backgrounds/VideoBackgroundStore.tsx");

export default tmp2;
