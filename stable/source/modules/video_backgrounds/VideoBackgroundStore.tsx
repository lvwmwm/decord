// Module ID: 9088
// Function ID: 9089
// Name: VideoBackgroundStore
// Dependencies: [1196, 1232, 1999, 2102, 1378, 4892, 504, 585, 2]

// Module 9088 (VideoBackgroundStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4892 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1196 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2102 */;
import UserStore from "UserStore" /* 1378 */;
import size from "module_2" /* 2 */;

function handleSyncedStoresUpdate() {
  let voiceChannelId;
  if (voiceChannelId !== SelectedChannelStore.getVoiceChannelId()) {
    c9 = false;
    c11 = false;
    c12 = false;
  }
  let flag2 = false;
  if (null != UserStore.getCurrentUser()) {
    const videoBackground = UnsyncedUserSettingsStore.videoBackground;
    flag2 = null != obj.getVoiceChannelId() && MediaEngineStore.isVideoEnabled() && null != videoBackground;
    const isVideoEnabledResult = null != obj.getVoiceChannelId() && MediaEngineStore.isVideoEnabled() && null != videoBackground;
  }
  if (flag2) {
    c9 = true;
  }
  voiceChannelId = obj.getVoiceChannelId();
}
let c7 = false;
let c8 = null;
let c9 = false;
let closure_10 = {};
let c11 = false;
let c12 = false;
const Store = get_initializedDefault.Store;
class VideoBackgroundStore extends Store {
  initialize() {
    this.waitFor(MediaEngineStore, SelectedChannelStore, UnsyncedUserSettingsStore, UserSettingsProtoStore, UserStore);
    const items = [SelectedChannelStore, MediaEngineStore];
    this.syncWith(items, handleSyncedStoresUpdate);
  }
}
const prototype = VideoBackgroundStore.prototype;
Object.defineProperty(prototype, "videoFilterAssets", {
  get: function videoFilterAssets() {
    return closure_10;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasBeenApplied", {
  get: function hasBeenApplied() {
    return c7;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasUsedBackgroundInCall", {
  get: function hasUsedBackgroundInCall() {
    return c9;
  },
  set: undefined
});
Object.defineProperty(prototype, "videoBackgroundUnavailable", {
  get: function videoBackgroundUnavailable() {
    return c11;
  },
  set: undefined
});
Object.defineProperty(prototype, "videoBackgroundPreviewUnavailable", {
  get: function videoBackgroundPreviewUnavailable() {
    return c12;
  },
  set: undefined
});
VideoBackgroundStore.displayName = "VideoBackgroundStore";
let obj = {
  VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function handleVideoFilterAssetFetchSuccess(assets) {
    assets = assets.assets;
    const obj = {};
    const item = assets.forEach((id) => {
      obj[id.id] = id;
      return id;
    });
    closure_10 = obj;
  },
  VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function handleAddBackground(videoFilterAsset) {
    videoFilterAsset = videoFilterAsset.videoFilterAsset;
    const obj = {};
    const merged = Object.assign(closure_10);
    obj[videoFilterAsset.id] = videoFilterAsset;
    closure_10 = obj;
  },
  VIDEO_FILTER_ASSET_DELETE_SUCCESS: function handleRemoveBackground(videoFilterAsset) {
    const obj = {};
    videoFilterAsset = videoFilterAsset.videoFilterAsset;
    const merged = Object.assign(closure_10);
    closure_10 = obj;
    delete obj[videoFilterAsset.id];
  },
  VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function handleSaveLastUsedBackgroundOption(backgroundOption) {
    let videoBackground = backgroundOption.backgroundOption;
    let flag = false;
    if (null != UserStore.getCurrentUser()) {
      if (null == videoBackground) {
        videoBackground = UnsyncedUserSettingsStore.videoBackground;
      }
      flag = null != SelectedChannelStore.getVoiceChannelId() && MediaEngineStore.isVideoEnabled() && null != videoBackground;
      const isVideoEnabledResult = null != SelectedChannelStore.getVoiceChannelId() && MediaEngineStore.isVideoEnabled() && null != videoBackground;
    }
    if (flag) {
      c9 = true;
    }
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function handleApplyMediaFilterSettings(settings) {
    settings = settings.settings;
    if (BaseConnectionEvent.FilterSettingsKey.CAMERA_BACKGROUND_LIVE in settings) {
      c7 = true;
      c11 = false;
    }
    if (BaseConnectionEvent.FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW in settings) {
      c12 = false;
    }
  },
  MEDIA_ENGINE_VIDEO_FILTER_ERROR: function handleVideoFilterError(target) {
    if ("live" === target.target) {
      c11 = true;
    } else {
      c12 = true;
    }
  },
  LOGOUT: function handleLogout() {
    c7 = false;
    c9 = false;
    c8 = null;
    closure_10 = {};
    c11 = false;
    c12 = false;
  }
};
const videoBackgroundStore = new VideoBackgroundStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/video_backgrounds/VideoBackgroundStore.tsx");

export default videoBackgroundStore;
