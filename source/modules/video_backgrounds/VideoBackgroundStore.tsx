// Module ID: 8837
// Function ID: 69741
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8837 (_isNativeReflectConstruct)
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
  const currentUser = currentUser.getCurrentUser();
  if (null == currentUser) {
    return false;
  } else {
    if (null == videoBackgroundOptionFromProto) {
      let prop;
      const voiceAndVideo = settings.settings.voiceAndVideo;
      if (null != voiceAndVideo) {
        prop = voiceAndVideo.videoBackgroundFilterDesktop;
      }
      videoBackgroundOptionFromProto = arg1(dependencyMap[9]).getVideoBackgroundOptionFromProto(prop, currentUser.id);
      const obj = arg1(dependencyMap[9]);
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
    let closure_13 = false;
    let closure_15 = false;
    let closure_16 = false;
  }
  if (hasVideoBackgroundLive()) {
    closure_13 = true;
  }
  const voiceChannelId = store.getVoiceChannelId();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = false;
let closure_12 = null;
let closure_13 = false;
let closure_14 = {};
let closure_15 = false;
let closure_16 = false;
let tmp2 = (Store) => {
  class VideoBackgroundStore {
    constructor() {
      self = this;
      tmp = closure_2(this, VideoBackgroundStore);
      obj = closure_5(VideoBackgroundStore);
      tmp2 = closure_4;
      if (closure_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = VideoBackgroundStore;
  callback2(VideoBackgroundStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8, closure_9, closure_7, closure_10);
      const items = [closure_9, closure_8];
      this.syncWith(items, closure_19);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "videoFilterAssets",
    get() {
      return closure_14;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasBeenApplied",
    get() {
      return closure_11;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasUsedBackgroundInCall",
    get() {
      return closure_13;
    }
  };
  items[4] = {
    key: "videoBackgroundUnavailable",
    get() {
      return closure_15;
    }
  };
  items[5] = {
    key: "videoBackgroundPreviewUnavailable",
    get() {
      return closure_16;
    }
  };
  return callback(VideoBackgroundStore, items);
}(importDefault(dependencyMap[11]).Store);
tmp2.displayName = "VideoBackgroundStore";
tmp2 = new tmp2(importDefault(dependencyMap[12]), {
  VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function handleVideoFilterAssetFetchSuccess(assets) {
    assets = assets.assets;
    const obj = {};
    const arg1 = obj;
    const item = assets.forEach((id) => {
      obj[id.id] = id;
      return id;
    });
    let closure_14 = obj;
  },
  VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function handleAddBackground(videoFilterAsset) {
    videoFilterAsset = videoFilterAsset.videoFilterAsset;
    const obj = {};
    const merged = Object.assign(closure_14);
    obj[videoFilterAsset.id] = videoFilterAsset;
    closure_14 = obj;
  },
  VIDEO_FILTER_ASSET_DELETE_SUCCESS: function handleRemoveBackground(videoFilterAsset) {
    videoFilterAsset = videoFilterAsset.videoFilterAsset;
    const merged = Object.assign(closure_14);
    closure_14 = {};
    delete r1[r0];
  },
  VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function handleSaveLastUsedBackgroundOption(backgroundOption) {
    if (hasVideoBackgroundLive(backgroundOption.backgroundOption)) {
      let closure_13 = true;
    }
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function handleApplyMediaFilterSettings(settings) {
    settings = settings.settings;
    if (arg1(dependencyMap[10]).FilterSettingsKey.CAMERA_BACKGROUND_LIVE in settings) {
      let closure_11 = true;
      let closure_15 = false;
    }
    if (arg1(dependencyMap[10]).FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW in settings) {
      let closure_16 = false;
    }
  },
  MEDIA_ENGINE_VIDEO_FILTER_ERROR: function handleVideoFilterError(target) {
    if ("live" === target.target) {
      let closure_15 = true;
    } else {
      let closure_16 = true;
    }
  },
  LOGOUT: function handleLogout() {
    let closure_11 = false;
    let closure_13 = false;
    let closure_12 = null;
    let closure_14 = {};
    let closure_15 = false;
    let closure_16 = false;
  }
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/video_backgrounds/VideoBackgroundStore.tsx");

export default tmp2;
