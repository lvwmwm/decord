// Module ID: 6226
// Function ID: 6227
// Name: SpatialAudioStore
// Dependencies: [1246, 2133, 6071, 6227, 6075, 12, 510, 6228, 504, 6096, 572, 2]

// Module 6226 (SpatialAudioStore)
import get_initializedDefault from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import SpatialAudioForVoiceExperimentDefault from "SpatialAudioForVoiceExperiment" /* 6228 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6071 */;
import SpatialAudioConstants from "SpatialAudioConstants" /* 6227 */;
import Constants from "Constants" /* 6075 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let SpatialAudioStatus;
let c9;
let metroImportAll;
function applyActiveOptions(arg0) {
  let enabled;
  let positioningModel;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isSpatial2;
  obj = SpatialAudioForVoiceExperimentDefault;
  const config = obj.getConfig({ location: "SpatialAudioStore" });
  ({ enabled, positioningModel } = config);
  const merge = module_12.merge;
  module_12;
  const obj2 = module_12;
  const cloneDeepResult = obj2.cloneDeep(DEFAULT_SPATIAL_AUDIO_OPTIONS);
  const mediaEngine = MediaEngineStore.getMediaEngine();
  let str = "";
  if (mediaEngine.getSpatialAudioVersion() >= MIN_POSITIONING_SPATIAL_AUDIO_VERSION) {
    str = positioningModel;
  }
  const obj4 = { positioning: { model: str } };
  const tmpResult = module_12;
  map1 = merge(cloneDeepResult, obj4, tmpResult.cloneDeep(isSpatial));
  isSpatial = isSpatial.isSpatial;
  if (isSpatial == null) {
    if (enabled) {
      let enabled2 = obj.enabled;
      if (enabled2 == null) {
        enabled2 = defaultOn;
      }
      enabled = enabled2;
    }
    isSpatial = enabled;
  }
  if (isSpatial) {
    isSpatial = obj3.supports(metroImportAll.SPATIAL_AUDIO);
  }
  map1.isSpatial = isSpatial;
  if (!flag) {
    const tmpResult2 = module_12;
    if (tmpResult2.isEqual(map1, map1)) {
      return false;
    }
  }
  isSpatial2 = map1.isSpatial;
  const mediaEngine1 = obj3.getMediaEngine();
  mediaEngine1.setAudioMixerOptions(map1);
  if (!isSpatial2) {
    UNKNOWN = SpatialAudioStatus.UNKNOWN;
  }
  mediaEngine1.eachConnection((setSpatialAudioEnabled) => setSpatialAudioEnabled.setSpatialAudioEnabled(isSpatial2), constants2.DEFAULT);
  const rTCConnection = RTCConnectionStore.getRTCConnection();
  if (rTCConnection != null) {
    const result = rTCConnection.setSpatialAudioEnabled(isSpatial2);
  }
  return true;
}
function handleExperimentChange() {
  let enabled = obj.enabled;
  if (enabled == null) {
    enabled = defaultOn;
  }
  obj = SpatialAudioForVoiceExperimentDefault;
  defaultOn = obj.getConfig({ location: "SpatialAudioStore" }).defaultOn;
  let tmp = applyActiveOptions();
  if (!tmp) {
    let enabled2 = obj.enabled;
    if (enabled2 == null) {
      enabled2 = defaultOn;
    }
    tmp = enabled2 !== enabled;
  }
  return tmp;
}
const DEFAULT_SPATIAL_AUDIO_OPTIONS = SpatialAudioConstants.DEFAULT_SPATIAL_AUDIO_OPTIONS;
const MIN_POSITIONING_SPATIAL_AUDIO_VERSION = SpatialAudioConstants.MIN_POSITIONING_SPATIAL_AUDIO_VERSION;
({ Features: metroImportAll, MediaEngineContextTypes: c9, SpatialAudioStatus } = Constants);
let obj = {};
let isSpatial = {};
let map1 = module_12.cloneDeep(DEFAULT_SPATIAL_AUDIO_OPTIONS);
let UNKNOWN = SpatialAudioStatus.UNKNOWN;
let defaultOn = false;
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class SpatialAudioStore extends DeviceSettingsStore {
  initialize(enabled) {
    const self = this;
    enabled = undefined;
    if (enabled != null) {
      enabled = enabled.enabled;
    }
    let closure_11 = { enabled };
    self.waitFor(ApexExperimentStore, MediaEngineStore, RTCConnectionStore);
    const items = [ApexExperimentStore];
    self.syncWith(items, handleExperimentChange);
    const mediaEngine = MediaEngineStore.getMediaEngine();
    mediaEngine.on(self(6096).MediaEngineEvent.Connection, (setSpatialAudioEnabled) => setSpatialAudioEnabled.setSpatialAudioEnabled(isSpatial.isSpatial));
    mediaEngine.on(self(6096).MediaEngineEvent.SpatialAudioStatus, (arg0) => {
      let flag = arg0 !== UNKNOWN;
      if (flag) {
        UNKNOWN = arg0;
        flag = true;
      }
      if (flag) {
        self.emitChange();
      }
    });
    const obj2 = SpatialAudioForVoiceExperimentDefault;
    defaultOn = obj2.getConfig({ location: "SpatialAudioStore" }).defaultOn;
    applyActiveOptions(true);
  }
  getUserAgnosticState() {
    return obj;
  }
  isSpatialAudioEnabled() {
    let enabled = obj.enabled;
    if (enabled == null) {
      enabled = defaultOn;
    }
    return enabled;
  }
  isSpatialAudioActive() {
    return map1.isSpatial;
  }
  getActiveSpatialAudioOptions() {
    return map1;
  }
  getSpatialAudioOverrides() {
    return isSpatial;
  }
  getSpatialAudioStatus() {
    return UNKNOWN;
  }
  getExperimentPositioningModel(arg0) {
    const mediaEngine = MediaEngineStore.getMediaEngine();
    let str = "";
    if (mediaEngine.getSpatialAudioVersion() >= MIN_POSITIONING_SPATIAL_AUDIO_VERSION) {
      str = arg0;
    }
    return str;
  }
}
const prototype = SpatialAudioStore.prototype;
SpatialAudioStore.displayName = "SpatialAudioStore";
SpatialAudioStore.persistKey = "SpatialAudioStore";
let items = [
  function migrateFromMediaEngineStore() {
    const Storage = Storage2.Storage;
    const value = Storage.get("MediaEngineStore");
    let tmp2;
    if (value != null) {
      tmp2 = value[constants2.DEFAULT];
    }
    let num;
    if (tmp2 != null) {
      num = tmp2.audioMixerSettingsVersion;
    }
    if (num == null) {
      num = 0;
    }
    if (num < 3) {
      obj = {};
    } else {
      let enabled;
      if (tmp2 != null) {
        const audioMixerSettings = tmp2.audioMixerSettings;
        if (audioMixerSettings != null) {
          enabled = audioMixerSettings.enabled;
        }
      }
      obj = false === enabled ? { enabled: false } : {};
    }
    return obj;
  }
];
SpatialAudioStore.migrations = items;
obj = {
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    return applyActiveOptions();
  },
  AUDIO_SET_SPATIAL_AUDIO_ENABLED: function handleSetSpatialAudioEnabled(enabled) {
    obj = { enabled };
    enabled = enabled.enabled;
    const merged = Object.assign(obj);
    applyActiveOptions();
  },
  AUDIO_SET_SPATIAL_AUDIO_OVERRIDES: function handleSetSpatialAudioOverrides(overrides) {
    overrides = overrides.overrides;
    applyActiveOptions();
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    if (null == channelId.channelId) {
      if (UNKNOWN !== SpatialAudioStatus.UNKNOWN) {
        UNKNOWN = SpatialAudioStatus.UNKNOWN;
      }
    }
    return false;
  },
  LOGOUT: function handleLogout() {
    let closure_12 = {};
    applyActiveOptions();
  }
};
const spatialAudioStore = new SpatialAudioStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/spatial_audio/SpatialAudioStore.tsx");

export default spatialAudioStore;
