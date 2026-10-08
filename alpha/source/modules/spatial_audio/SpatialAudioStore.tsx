// Module ID: 5242
// Function ID: 5243
// Name: SpatialAudioStore
// Dependencies: [1258, 2011, 5108, 5243, 5115, 12, 510, 5244, 504, 5135, 584, 2]

// Module 5242 (SpatialAudioStore)
import get_initializedDefault from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import SpatialAudioConstants from "SpatialAudioConstants" /* 5243 */;
import SpatialAudioForVoiceExperimentDefault from "SpatialAudioForVoiceExperiment" /* 5244 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1258 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;
import Constants from "Constants" /* 5115 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let SpatialAudioStatus;
let metroImportAll;
let metroImportDefault;
function applyActiveOptions(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isSpatial2;
  const merge = module_12.merge;
  module_12;
  obj = module_12;
  const cloneDeepResult = obj.cloneDeep(DEFAULT_SPATIAL_AUDIO_OPTIONS);
  const obj2 = module_12;
  mergeResult = merge(cloneDeepResult, obj2.cloneDeep(isSpatial));
  const obj3 = SpatialAudioForVoiceExperimentDefault;
  let enabled = obj3.getConfig({ location: "SpatialAudioStore" }).enabled;
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
    isSpatial = MediaEngineStore.supports(metroImportDefault.SPATIAL_AUDIO);
  }
  mergeResult.isSpatial = isSpatial;
  if (!flag) {
    const tmpResult = module_12;
    if (tmpResult.isEqual(mergeResult, mergeResult)) {
      return false;
    }
  }
  isSpatial2 = mergeResult.isSpatial;
  const mediaEngine = MediaEngineStore.getMediaEngine();
  mediaEngine.setAudioMixerOptions(mergeResult);
  if (!isSpatial2) {
    UNKNOWN = SpatialAudioStatus.UNKNOWN;
  }
  mediaEngine.eachConnection((setSpatialAudioEnabled) => setSpatialAudioEnabled.setSpatialAudioEnabled(isSpatial2), metroImportAll.DEFAULT);
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
({ Features: metroImportDefault, MediaEngineContextTypes: metroImportAll, SpatialAudioStatus } = Constants);
let obj = {};
let isSpatial = {};
let mergeResult = module_12.cloneDeep(DEFAULT_SPATIAL_AUDIO_OPTIONS);
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
    let closure_10 = { enabled };
    self.waitFor(ApexExperimentStore, MediaEngineStore, RTCConnectionStore);
    const items = [ApexExperimentStore];
    self.syncWith(items, handleExperimentChange);
    const mediaEngine = MediaEngineStore.getMediaEngine();
    mediaEngine.on(self(5135).MediaEngineEvent.Connection, (setSpatialAudioEnabled) => setSpatialAudioEnabled.setSpatialAudioEnabled(isSpatial.isSpatial));
    mediaEngine.on(self(5135).MediaEngineEvent.SpatialAudioStatus, (arg0) => {
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
    return mergeResult.isSpatial;
  }
  getActiveSpatialAudioOptions() {
    return mergeResult;
  }
  getSpatialAudioOverrides() {
    return isSpatial;
  }
  getSpatialAudioStatus() {
    return UNKNOWN;
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
      tmp2 = value[metroImportAll.DEFAULT];
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
    let closure_11 = {};
    applyActiveOptions();
  }
};
const spatialAudioStore = new SpatialAudioStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/spatial_audio/SpatialAudioStore.tsx");

export default spatialAudioStore;
