// Module ID: 4175
// Function ID: 35830
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4175 (_isNativeReflectConstruct)
let ApplicationStreamFPS;
let ApplicationStreamResolutions;
let ClipsLengthSettings;
let ClipsViewerConnectivitySettings;
let DEFAULT_MAX_AUTO_CLIPS;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
async function _migrateDefaultStorage() {
  if (closure_34.clipsSettings.storageLocation === closure_17) {
    if (null != callback2(closure_2[11])) {
      if (null != callback2(closure_2[11]).app) {
        const app = callback2(closure_2[11]).app;
        const tmp14 = yield app.getPath("videos");
        closure_34.clipsSettings.storageLocation = callback(closure_2[12]).pathJoin(tmp14, closure_18);
        closure_35.emitChange();
        return tmp14;
      }
    }
  }
}
function trackSharedRemoteClipId(arg0, arg1, arg2) {
  let iter;
  if (obj.getConfig({ location: "trackSharedRemoteClipId" }).enableDistributedClips) {
    if (arg2 !== store.getId()) {
      return false;
    } else {
      const tmp14 = _createForOfIteratorHelperLoose(arg1);
      const iter3 = tmp14();
      let flag2 = false;
      let iter2 = iter3;
      let flag3 = false;
      if (!iter3.done) {
        do {
          let value = iter2.value;
          if (null != value.clip_remote_id) {
            let tmp3 = closure_32;
            value = closure_32.get(arg0);
            if (null == value) {
              let _Set = Set;
              let tmp4 = new.target;
              let tmp5 = new.target;
              let set = new Set();
              let tmp7 = set;
              let tmp8 = closure_32;
              let result = closure_32.set(arg0, set);
              value = set;
            }
            let addResult = value.add(value.clip_remote_id);
            let tmp11 = value;
            flag2 = true;
          }
          iter = tmp14();
          iter2 = iter;
          flag3 = flag2;
        } while (!iter.done);
      }
      return flag3;
    }
  } else {
    return false;
  }
  const obj = importDefault(dependencyMap[18]);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const tmp2 = arg1(dependencyMap[8]);
({ CLIPS_HARDWARE_CLASSIFICATION_VERSION: closure_11, ClipSaveTypes: closure_12, ClipsUserEducationType: closure_13, ClipsLogger: closure_14, MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS: closure_15 } = tmp2);
({ ClipsLengthSettings, ClipsViewerConnectivitySettings, DEFAULT_MAX_AUTO_CLIPS } = tmp2);
const VoiceFlags = arg1(dependencyMap[9]).VoiceFlags;
let closure_17 = "default";
let closure_18 = "Discord Clips";
let closure_19 = {};
let closure_20 = {};
let closure_21 = {};
let closure_22 = [];
let closure_23 = 0;
let closure_24 = null;
let closure_25 = null;
let closure_26 = null;
let closure_27 = {};
let closure_28 = {};
let closure_29 = null;
({ ApplicationStreamFPS, ApplicationStreamResolutions } = arg1(dependencyMap[10]));
const set = new Set();
let closure_31 = false;
const map = new Map();
let obj = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, clipsQuality: { resolution: ApplicationStreamResolutions.RESOLUTION_1080, frameRate: ApplicationStreamFPS.FPS_30 }, clipsLength: ClipsLengthSettings.SECONDS_30, viewerConnectivity: ClipsViewerConnectivitySettings.ALL, maxAutoClips: DEFAULT_MAX_AUTO_CLIPS, clipSignals: { "Null": null, "Null": null }, debugTooltipsEnabled: false, enableAutoclipping: undefined, showPovClipsInGallery: false };
let closure_34 = { clipsSettings: obj, newClipIds: [], clipsEducationState: { "Null": null, "Null": null, "Null": null } };
let tmp6 = (DeviceSettingsStore) => {
  class ClipsStoreClass {
    constructor() {
      self = this;
      tmp = closure_3(this, ClipsStoreClass);
      obj = closure_6(ClipsStoreClass);
      tmp2 = closure_5;
      if (closure_36()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ClipsStoreClass;
  callback2(ClipsStoreClass, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const self = this;
      function migrateDefaultStorage() {
        return callback(...arguments);
      }();
      self.waitFor(closure_9);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getClips",
    value() {
      return closure_19;
    }
  };
  items[1] = obj;
  obj = {
    key: "getClipById",
    value(arg0) {
      return closure_19[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getClipByRemoteId",
    value(arg0) {
      if (null != closure_21[arg0]) {
        return closure_19[tmp];
      }
    }
  };
  items[4] = {
    key: "getClipCandidates",
    value() {
      return closure_22;
    }
  };
  items[5] = {
    key: "getClipCandidateById",
    value(arg0) {
      return closure_20[arg0];
    }
  };
  items[6] = {
    key: "getUserAgnosticState",
    value() {
      return closure_34;
    }
  };
  items[7] = {
    key: "getSettings",
    value() {
      return closure_34.clipsSettings;
    }
  };
  items[8] = {
    key: "getEnableAutoclipping",
    value() {
      let enabled = closure_34.clipsSettings.enableAutoclipping;
      if (null == enabled) {
        const AutoclippingDefaultOverrideExperiment = ClipsStoreClass(closure_2[19]).AutoclippingDefaultOverrideExperiment;
        const obj = { location: "getAutoclippingDefault" };
        enabled = AutoclippingDefaultOverrideExperiment.getConfig(obj).enabled;
      }
      return enabled;
    }
  };
  items[9] = {
    key: "hasUserSetAutoclippingSettings",
    value() {
      return null != closure_34.clipsSettings.enableAutoclipping;
    }
  };
  items[10] = {
    key: "getLastClipsSession",
    value() {
      return closure_25;
    }
  };
  items[11] = {
    key: "getCurrentClipsSession",
    value() {
      return closure_26;
    }
  };
  items[12] = {
    key: "getHistoricalClipsSessionById",
    value(arg0) {
      return closure_27[arg0];
    }
  };
  items[13] = {
    key: "devSetLastClipsSession",
    value(arg0) {
      this.emitChange();
    }
  };
  items[14] = {
    key: "getClipsWarningShown",
    value(arg0) {
      return closure_24 === arg0;
    }
  };
  items[15] = {
    key: "getHardwareClassification",
    value() {
      return closure_34.hardwareClassification;
    }
  };
  items[16] = {
    key: "getHardwareClassificationForDecoupled",
    value() {
      return closure_34.hardwareClassificationForDecoupled;
    }
  };
  items[17] = {
    key: "getHardwareClassificationVersion",
    value() {
      return closure_34.hardwareClassificationVersion;
    }
  };
  items[18] = {
    key: "getIsAtMaxSaveClipOperations",
    value() {
      return closure_23 >= closure_15;
    }
  };
  items[19] = {
    key: "getLastClipsError",
    value() {
      return closure_29;
    }
  };
  items[20] = {
    key: "isClipsEnabledForUser",
    value(arg0) {
      let clipsEnabled;
      if (null != closure_28[arg0]) {
        clipsEnabled = tmp.clipsEnabled;
      }
      return null != clipsEnabled && clipsEnabled;
    }
  };
  items[21] = {
    key: "isVoiceRecordingAllowedForUser",
    value(arg0) {
      let allowVoiceRecording;
      if (null != closure_28[arg0]) {
        allowVoiceRecording = tmp.allowVoiceRecording;
      }
      return null != allowVoiceRecording && allowVoiceRecording;
    }
  };
  items[22] = {
    key: "isViewerClippingAllowedForUser",
    value(arg0) {
      let allowAnyViewerClips;
      if (null != closure_28[arg0]) {
        allowAnyViewerClips = tmp.allowAnyViewerClips;
      }
      return null != allowAnyViewerClips && allowAnyViewerClips;
    }
  };
  items[23] = {
    key: "hasClips",
    value() {
      return closure_34.hasClips;
    }
  };
  items[24] = {
    key: "hasTakenDecoupledClip",
    value() {
      return closure_34.hasTakenDecoupledClip;
    }
  };
  items[25] = {
    key: "canShowReminders",
    value() {
      return closure_34.clipsSettings.remindersEnabled;
    }
  };
  items[26] = {
    key: "getNewClipIds",
    value() {
      return closure_34.newClipIds;
    }
  };
  items[27] = {
    key: "isClipExporting",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[28] = {
    key: "getExportingClipIds",
    value() {
      return closure_30;
    }
  };
  items[29] = {
    key: "isAutoStashEnabled",
    value() {
      return closure_31;
    }
  };
  items[30] = {
    key: "wasClipSharedInChannel",
    value(arg0, arg1) {
      const value = closure_32.get(arg1);
      let hasItem;
      if (null != value) {
        hasItem = value.has(arg0);
      }
      return null != hasItem && hasItem;
    }
  };
  return callback(ClipsStoreClass, items);
}(importDefault(dependencyMap[20]).DeviceSettingsStore);
tmp6.displayName = "ClipsStore";
tmp6.persistKey = "ClipsStore";
const items = [
  (arg0) => {
    let tmp = arg0;
    const obj = {};
    if (null == arg0) {
      tmp = obj;
    }
    obj.clipsSettings = tmp;
    obj.newClipsCount = 0;
    return obj;
  },
  (clipsSettings) => {
    let obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj = {};
    const merged2 = Object.assign(clipsSettings);
    obj["clipsSettings"] = obj;
    return obj;
  },
  (newClipIds) => {
    const obj = {};
    const merged = Object.assign(newClipIds);
    newClipIds = newClipIds.newClipIds;
    if (null == newClipIds) {
      newClipIds = [];
    }
    obj["newClipIds"] = newClipIds;
    return obj;
  },
  (hardwareClassification) => {
    const obj = {};
    const merged = Object.assign(hardwareClassification);
    hardwareClassification = hardwareClassification.hardwareClassification;
    let tmp2 = null;
    if (null != hardwareClassification) {
      tmp2 = hardwareClassification;
    }
    obj["hardwareClassification"] = tmp2;
    const hardwareClassificationVersion = hardwareClassification.hardwareClassificationVersion;
    let num = 0;
    if (null != hardwareClassificationVersion) {
      num = hardwareClassificationVersion;
    }
    obj["hardwareClassificationVersion"] = num;
    return obj;
  },
  (hasClips) => {
    const obj = {};
    const merged = Object.assign(hasClips);
    hasClips = hasClips.hasClips;
    obj["hasClips"] = null != hasClips && hasClips;
    return obj;
  },
  (clipsSettings) => {
    let obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj["decoupledClipsEnabled"] = obj.decoupledClipsEnabled;
    obj["clipsSettings"] = obj;
    return obj;
  },
  (hardwareClassificationForDecoupled) => {
    const obj = {};
    const merged = Object.assign(hardwareClassificationForDecoupled);
    hardwareClassificationForDecoupled = hardwareClassificationForDecoupled.hardwareClassificationForDecoupled;
    let tmp2 = null;
    if (null != hardwareClassificationForDecoupled) {
      tmp2 = hardwareClassificationForDecoupled;
    }
    obj["hardwareClassificationForDecoupled"] = tmp2;
    return obj;
  },
  (clipsSettings) => {
    let hardwareEncoding;
    const _default = arg1(dependencyMap[21]).default;
    if (null != _default) {
      hardwareEncoding = _default.getHardwareEncoding();
    }
    let obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    let clipsEnabled = !tmp4;
    if (!!hardwareEncoding) {
      clipsEnabled = clipsSettings.clipsSettings.clipsEnabled;
    }
    obj["clipsEnabled"] = clipsEnabled;
    let decoupledClipsEnabled = !tmp5;
    if (!!hardwareEncoding) {
      decoupledClipsEnabled = clipsSettings.clipsSettings.decoupledClipsEnabled;
    }
    obj["decoupledClipsEnabled"] = decoupledClipsEnabled;
    obj["clipsSettings"] = obj;
    return obj;
  },
  (newClipIds) => {
    const obj = {};
    const merged = Object.assign(newClipIds);
    newClipIds = newClipIds.newClipIds;
    if (null == newClipIds) {
      newClipIds = [];
    }
    obj["newClipIds"] = newClipIds;
    obj["newClipIDs"] = undefined;
    return obj;
  },
  (clipsSettings) => {
    let obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    if ("number" !== typeof clipsSettings.clipsSettings.clipsQuality) {
      if (null != clipsSettings.clipsSettings.clipsQuality) {
        let clipsQuality = clipsSettings.clipsSettings.clipsQuality;
      }
      obj["clipsQuality"] = clipsQuality;
      obj["clipsSettings"] = obj;
      return obj;
    }
    clipsQuality = obj.clipsQuality;
  },
  (clipsSettings) => {
    let obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    let remindersEnabled = clipsSettings.clipsSettings.remindersEnabled;
    if (null == remindersEnabled) {
      remindersEnabled = obj.remindersEnabled;
    }
    obj["remindersEnabled"] = remindersEnabled;
    obj["clipsSettings"] = obj;
    return obj;
  },
  (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["hasTakenDecoupledClip"] = false;
    obj["clipsEducationState"] = { "Null": null, "Null": null, "Null": null };
    return obj;
  },
  (clipsSettings) => {
    let obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    let maxAutoClips = clipsSettings.clipsSettings.maxAutoClips;
    if (null == maxAutoClips) {
      maxAutoClips = obj.maxAutoClips;
    }
    obj["maxAutoClips"] = maxAutoClips;
    let clipSignals = clipsSettings.clipsSettings.clipSignals;
    if (null == clipSignals) {
      clipSignals = obj.clipSignals;
    }
    obj["clipSignals"] = clipSignals;
    obj["clipsSettings"] = obj;
    return obj;
  },
  (clipsSettings) => {
    let obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj["clipsSettings"] = obj;
    return obj;
  },
  (clipsSettings) => {
    let obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    let enableAutoclipping = clipsSettings.clipsSettings.enableAutoclipping;
    if (null == enableAutoclipping) {
      enableAutoclipping = obj.enableAutoclipping;
    }
    obj["enableAutoclipping"] = enableAutoclipping;
    obj["clipsSettings"] = obj;
    return obj;
  },
  (clipsSettings) => {
    let obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    let showPovClipsInGallery = clipsSettings.clipsSettings.showPovClipsInGallery;
    if (null == showPovClipsInGallery) {
      showPovClipsInGallery = obj.showPovClipsInGallery;
    }
    obj["showPovClipsInGallery"] = showPovClipsInGallery;
    obj["clipsSettings"] = obj;
    return obj;
  }
];
tmp6.migrations = items;
obj = {
  CLIPS_SETTINGS_UPDATE: function handleSettingsUpdate(settings) {
    let obj = {};
    const merged = Object.assign(closure_34);
    obj = {};
    const merged1 = Object.assign(closure_34.clipsSettings);
    const merged2 = Object.assign(settings.settings);
    obj["clipsSettings"] = obj;
    closure_34 = obj;
  },
  CLIPS_SAVE_CLIP: function handleSaveClip(clip) {
    clip = clip.clip;
    closure_23 = Math.max(closure_23 - 1, 0);
    if (clip.isCandidate) {
      const items = [clip];
      let arraySpreadResult = HermesBuiltin.arraySpread(closure_22, 1);
      closure_22 = items;
      closure_20[clip.id] = clip;
    }
    if (null != user) {
      let obj = {};
      const merged = Object.assign(user);
      let num2 = 0;
      if ("manual" === clip.clipMethod) {
        num2 = 1;
      }
      obj["manualClipsSaved"] = user.manualClipsSaved + num2;
      const isCandidate = clip.isCandidate;
      let num3 = 0;
      if (null != isCandidate) {
        num3 = 0;
        if (isCandidate) {
          num3 = 1;
        }
      }
      obj["candidateClipsSaved"] = user.candidateClipsSaved + num3;
      const user = obj;
    }
    if (!clip.isCandidate) {
      obj = { applicationName: clip.applicationName, ended: false };
      const merged1 = Object.assign(_null);
      let newClipIds;
      if (null != _null) {
        newClipIds = _null.newClipIds;
      }
      if (null == newClipIds) {
        newClipIds = [];
      }
      const items1 = [];
      arraySpreadResult = HermesBuiltin.arraySpread(newClipIds, 0);
      items1[arraySpreadResult] = clip.id;
      const sum = arraySpreadResult + 1;
      obj["newClipIds"] = items1;
      const _null = obj;
      obj = {};
      const merged2 = Object.assign(closure_34);
      let newClipIds1 = closure_34.newClipIds;
      if (null == newClipIds1) {
        newClipIds1 = [];
      }
      const items2 = [];
      const arraySpreadResult1 = HermesBuiltin.arraySpread(newClipIds1, 0);
      items2[arraySpreadResult1] = clip.id;
      const sum1 = arraySpreadResult1 + 1;
      obj["newClipIds"] = items2;
      closure_34 = obj;
      closure_19[clip.id] = clip;
      if (null != clip.remoteClipId) {
        closure_21[clip.remoteClipId] = clip.id;
      }
      closure_34.hasClips = true;
    }
  },
  CLIPS_PROMOTE_CLIP_CANDIDATE: function handlePromoteClipCandidate(clip) {
    clip = clip.clip;
    const arg1 = clip;
    let obj = { applicationName: clip.applicationName };
    const merged = Object.assign(_null);
    obj["ended"] = true;
    let newClipIds;
    if (null != _null) {
      newClipIds = _null.newClipIds;
    }
    if (null == newClipIds) {
      newClipIds = [];
    }
    const items = [...newClipIds, clip.id];
    obj["newClipIds"] = items;
    const _null = obj;
    let tmp3 = null != user;
    if (tmp3) {
      tmp3 = user.id === clip.gameSessionId;
    }
    importDefault(dependencyMap[14])(tmp3, "Promoting clip candidates that do not match current autoclip session");
    obj = {};
    const merged1 = Object.assign(user);
    obj["candidateClipsPromoted"] = user.candidateClipsPromoted + 1;
    const user = obj;
    obj = {};
    const merged2 = Object.assign(closure_34);
    let newClipIds1 = closure_34.newClipIds;
    if (null == newClipIds1) {
      newClipIds1 = [];
    }
    const items1 = [...newClipIds1, clip.id];
    obj["newClipIds"] = items1;
    closure_34 = obj;
    closure_22 = closure_22.filter((id) => id.id !== clip.id);
    delete r4[r3];
    closure_19[clip.id] = clip;
    closure_34.hasClips = true;
  },
  CLIPS_SAVE_CLIP_START: function handleSaveClipStart(arg0) {
    closure_23 = closure_23 + 1;
    let hasTakenDecoupledClip = closure_34.hasTakenDecoupledClip;
    if (!hasTakenDecoupledClip) {
      hasTakenDecoupledClip = tmp === constants.DECOUPLED;
    }
    closure_34.hasTakenDecoupledClip = hasTakenDecoupledClip;
  },
  CLIPS_SAVE_CLIP_ERROR: function handleSaveClipError() {
    closure_23 = Math.max(closure_23 - 1, 0);
  },
  CLIPS_SAVE_CLIP_NO_OP: function handleSaveClipNoOp(reason) {
    reason = reason.reason;
    let tmp = reason !== arg1(dependencyMap[13]).ClipsSaveNoOpReason.BUFFER_WARMING_UP;
    if (tmp) {
      tmp = reason !== arg1(dependencyMap[13]).ClipsSaveNoOpReason.BRIDGE_SHUTDOWN;
    }
    if (!tmp) {
      const _Math = Math;
      closure_23 = Math.max(closure_23 - 1, 0);
    }
  },
  STREAM_START: function handleStreamStart(arg0) {
    let pid;
    let sourceName;
    ({ sourceName, pid } = arg0);
    let obj = arg1(dependencyMap[15]);
    if (obj.isClipsEnabled()) {
      let tmp2 = sourceName;
      if (null != pid) {
        const gameForPID = gameForPID.getGameForPID(pid);
        let name;
        if (null != gameForPID) {
          name = gameForPID.name;
        }
        if (null != name) {
          sourceName = name;
        }
        tmp2 = sourceName;
      }
      if (null != tmp2) {
        if ("" !== tmp2) {
          obj = { applicationName: tmp2, newClipIds: [], ended: false };
          let closure_25 = obj;
        }
      }
      return false;
    } else {
      return false;
    }
  },
  STREAM_STOP: function handleStreamStop(arg0) {
    let tmp2 = null != _null;
    if (tmp2) {
      let obj = arg1(dependencyMap[16]);
      const tmp6 = obj.decodeStreamKey(tmp).ownerId === store.getId();
      if (tmp6) {
        let tmp8 = null;
        if (0 !== _null.newClipIds.length) {
          obj = {};
          const merged = Object.assign(_null);
          obj["ended"] = true;
          tmp8 = obj;
        }
        const _null = tmp8;
      }
      tmp2 = tmp6;
    }
    return tmp2;
  },
  CLIPS_CLEAR_LAST_CLIPS_SESSION: function handleClearLastClipsSession() {
    if (null == closure_25) {
      return false;
    } else {
      closure_25 = null;
    }
  },
  CLIPS_SESSION_START: function handleClipsSessionStart(arg0) {
    let gameId;
    let sessionId;
    ({ sessionId, gameId } = arg0);
    if (null != user) {
      closure_27[user.id] = user;
    }
    const user = { id: sessionId, gameId };
  },
  CLIPS_SESSION_STOP: function handleClipsSessionStop() {
    if (null == user) {
      return false;
    } else {
      closure_27[user.id] = user;
      const user = null;
    }
  },
  CLIPS_CLEAR_NEW_CLIP_IDS: function clearNewClipIds() {
    closure_34.newClipIds = [];
  },
  CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function removeSingleNewClipId(clipId) {
    const arg1 = clipId.clipId;
    const newClipIds = closure_34.newClipIds;
    closure_34.newClipIds = newClipIds.filter((arg0) => arg0 !== clipId);
  },
  CLIPS_LOAD_DIRECTORY_SUCCESS: function handleClipsDirectoryLoaded(clips) {
    let iter2;
    let closure_19 = {};
    let closure_22 = [];
    const tmp = _createForOfIteratorHelperLoose(clips.clips);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        if (value.isCandidate) {
          let tmp4 = closure_20;
          closure_20[value.id] = value;
          let tmp5 = closure_22;
          let arr = closure_22.push(value);
        } else {
          let tmp2 = closure_19;
          closure_19[value.id] = value;
          if (null != value.remoteClipId) {
            let tmp3 = closure_21;
            closure_21[value.remoteClipId] = value.id;
          }
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
    closure_34.hasClips = Object.keys(closure_19).length > 0;
  },
  CLIPS_DELETE_CLIP: function handleClipsDelete(arg0) {
    const arg1 = arg0;
    closure_22 = closure_22.filter((id) => id.id !== id.id);
    delete r4[r3];
    delete r3[r0];
    let remoteClipId;
    if (null != closure_19[arg0.id]) {
      remoteClipId = tmp.remoteClipId;
    }
    if (null != remoteClipId) {
      remoteClipId = tmp.remoteClipId;
      delete r3[r2];
    }
    closure_34.hasClips = Object.keys(closure_19).length > 0;
  },
  CLIPS_UPDATE_METADATA: function handleClipMetadataUpdate(clip) {
    clip = clip.clip;
    if (clip.isCandidate) {
      closure_20[clip.id] = clip;
    } else {
      closure_19[clip.id] = clip;
      if (null != clip.remoteClipId) {
        closure_21[clip.remoteClipId] = clip.id;
      }
    }
  },
  RTC_CONNECTION_FLAGS: function handleRTCConnectionFlagsUpdate(flags) {
    const obj = { clipsEnabled: arg1(dependencyMap[17]).hasFlag(flags.flags, VoiceFlags.CLIPS_ENABLED) };
    const obj2 = arg1(dependencyMap[17]);
    obj.allowVoiceRecording = arg1(dependencyMap[17]).hasFlag(flags.flags, VoiceFlags.ALLOW_VOICE_RECORDING);
    const obj3 = arg1(dependencyMap[17]);
    obj.allowAnyViewerClips = arg1(dependencyMap[17]).hasFlag(flags.flags, VoiceFlags.ALLOW_ANY_VIEWER_CLIPS);
    closure_28[flags.userId] = obj;
  },
  CLIPS_SHOW_CALL_WARNING: function handleShowCallWarning(channelId) {
    channelId = channelId.channelId;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    if (channelId.channelId !== closure_24) {
      closure_24 = null;
    }
  },
  CLIPS_CLASSIFY_HARDWARE: function handleClassifyHardware(classification) {
    let hardwareClassification;
    let hardwareClassification2;
    let hardwareClassificationForDecoupled;
    let hardwareClassificationForDecoupled2;
    classification = classification.classification;
    closure_34.hardwareClassificationVersion = closure_11;
    closure_34.hardwareClassification = classification;
    ({ hardwareClassification, hardwareClassification: hardwareClassification2 } = closure_34);
    let tmp = hardwareClassification2 === arg1(dependencyMap[13]).ClipsHardwareClassification.MEETS_AUTO_ENABLE;
    if (tmp) {
      tmp = hardwareClassification !== arg1(dependencyMap[13]).ClipsHardwareClassification.MEETS_AUTO_ENABLE;
    }
    if (tmp) {
      closure_34.clipsSettings.clipsEnabled = true;
    }
    closure_34.hardwareClassificationForDecoupled = classification;
    ({ hardwareClassificationForDecoupled, hardwareClassificationForDecoupled: hardwareClassificationForDecoupled2 } = closure_34);
    let clipsEnabled = hardwareClassificationForDecoupled2 === arg1(dependencyMap[13]).ClipsHardwareClassification.MEETS_AUTO_ENABLE;
    if (clipsEnabled) {
      clipsEnabled = hardwareClassificationForDecoupled !== arg1(dependencyMap[13]).ClipsHardwareClassification.MEETS_AUTO_ENABLE;
    }
    if (clipsEnabled) {
      clipsEnabled = closure_34.clipsSettings.clipsEnabled;
    }
    if (clipsEnabled) {
      closure_34.clipsSettings.decoupledClipsEnabled = true;
    }
  },
  CLIPS_INIT: function handleClipsInit(applicationName) {
    let closure_29 = null;
    let obj = arg1(dependencyMap[15]);
    if (obj.isClipsEnabled()) {
      obj = { applicationName: applicationName.applicationName, newClipIds: [], ended: false };
      let closure_25 = obj;
    } else {
      return false;
    }
  },
  CLIPS_INIT_FAILURE: function handleClipsInitFailure(errMsg) {
    errMsg = errMsg.errMsg;
  },
  CLIPS_DISMISS_EDUCATION: function handleDismissClipsEducation(educationType) {
    educationType = educationType.educationType;
    if (closure_13.Error === educationType) {
      let closure_29 = null;
    } else if (closure_13.Disabled === educationType) {
      const _Date = Date;
      closure_34.clipsEducationState.dismissedAt = Date.now();
      closure_34.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0;
      const clipsEducationState = closure_34.clipsEducationState;
      clipsEducationState.numberOfTimesDismissed = clipsEducationState.numberOfTimesDismissed + 1;
    }
  },
  RUNNING_GAMES_CHANGE: function handleRunningGamesChange(added) {
    if (added.added.length > 0) {
      const clipsEducationState = closure_34.clipsEducationState;
      clipsEducationState.numberOfGamesLaunchedSinceDismissal = clipsEducationState.numberOfGamesLaunchedSinceDismissal + 1;
    }
  },
  CLIPS_SET_EXPORTING: function handleSetExporting(clipIds) {
    clipIds = clipIds.clipIds;
    if (null == clipIds) {
      clipIds = [];
    }
    const set = new Set(clipIds);
  },
  CLIPS_SET_AUTO_STASH_ENABLED: function handleSetAutoStashEnabled(enabled) {
    enabled = enabled.enabled;
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    let attachments = message.message.attachments;
    if (null == attachments) {
      attachments = [];
    }
    const author = message.message.author;
    let id;
    if (null != author) {
      id = author.id;
    }
    return trackSharedRemoteClipId(message.channelId, attachments, id);
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(messages) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(messages.messages);
    const iter = tmp();
    let flag = false;
    let iter2 = iter;
    let flag2 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        if (!flag) {
          let attachments = value.attachments;
          let items = attachments;
          let tmp2 = closure_40;
          if (null == attachments) {
            items = [];
          }
          let author = value.author;
          let id;
          if (null != author) {
            id = author.id;
          }
          flag = tmp2(messages.channelId, items, id);
          let tmp4 = attachments;
          let tmp5 = author;
        }
        iter3 = tmp();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
    return flag2;
  },
  LOGOUT: function reset() {
    map.clear();
    let closure_25 = null;
    let closure_24 = null;
    let closure_28 = {};
  }
};
tmp6 = new tmp6(importDefault(dependencyMap[22]), obj);
const tmp3 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/clips/ClipsStore.tsx");

export default tmp6;
export const DEFAULT_STORAGE_SENTINEL = "default";
export const DEFAULT_STORAGE_DIRECTORY = "Discord Clips";
