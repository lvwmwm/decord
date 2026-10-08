// Module ID: 5252
// Function ID: 5253
// Name: VideoBackgroundStore
// Dependencies: [1207, 1243, 2011, 2115, 1389, 5135, 504, 584, 2]

// Module 5252 (VideoBackgroundStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 5135 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import UserStore from "UserStore" /* 1389 */;
import size from "module_2" /* 2 */;

function handleSyncedStoresUpdate() {
  let voiceChannelId;
  if (voiceChannelId !== SelectedChannelStore.getVoiceChannelId()) {
    c9 = false;
    c12 = false;
    c13 = false;
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
let c10 = false;
let closure_11 = {};
let c12 = false;
let c13 = false;
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
    return closure_11;
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
Object.defineProperty(prototype, "liveBackgroundEnabled", {
  get: function liveBackgroundEnabled() {
    return c10;
  },
  set: undefined
});
Object.defineProperty(prototype, "videoBackgroundUnavailable", {
  get: function videoBackgroundUnavailable() {
    return c12;
  },
  set: undefined
});
Object.defineProperty(prototype, "videoBackgroundPreviewUnavailable", {
  get: function videoBackgroundPreviewUnavailable() {
    return c13;
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
    closure_11 = obj;
  },
  VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function handleAddBackground(videoFilterAsset) {
    videoFilterAsset = videoFilterAsset.videoFilterAsset;
    const obj = {};
    const merged = Object.assign(closure_11);
    obj[videoFilterAsset.id] = videoFilterAsset;
    closure_11 = obj;
  },
  VIDEO_FILTER_ASSET_DELETE_SUCCESS: function handleRemoveBackground(videoFilterAsset) {
    const obj = {};
    videoFilterAsset = videoFilterAsset.videoFilterAsset;
    const merged = Object.assign(closure_11);
    closure_11 = obj;
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
      c12 = false;
      const tmp3 = settings[BaseConnectionEvent.FilterSettingsKey.CAMERA_BACKGROUND_LIVE];
      let graph;
      if (tmp3 != null) {
        graph = tmp3.graph;
      }
      c10 = graph !== tmp(5135).FilterSettingsGraph.NONE;
    }
    if (BaseConnectionEvent.FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW in settings) {
      c13 = false;
    }
  },
  MEDIA_ENGINE_VIDEO_FILTER_ERROR: function handleVideoFilterError(target) {
    if ("live" === target.target) {
      c12 = true;
      c10 = false;
    } else {
      c13 = true;
    }
  },
  LOGOUT: function handleLogout() {
    c7 = false;
    c9 = false;
    c8 = null;
    closure_11 = {};
    c12 = false;
    c13 = false;
    c10 = false;
  }
};
const videoBackgroundStore = new VideoBackgroundStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/video_backgrounds/VideoBackgroundStore.tsx");

export default videoBackgroundStore;
