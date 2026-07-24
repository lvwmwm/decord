// Module ID: 4183
// Function ID: 35925
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5, 4150, 1194, 4184, 653, 4185, 3741, 4186, 4187, 44, 4188, 4194, 1360, 4197, 4198, 566, 4177, 686, 2]

// Module 4183 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import isClipsEnabled from "isClipsEnabled";
import hasFlag from "hasFlag";
import apexExperiment from "apexExperiment";
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import result from "result";
import { VoiceFlags } from "ME";
import makeButton from "makeButton";
import set from "_possibleConstructorReturn";

let ApplicationStreamFPS;
let ApplicationStreamResolutions;
let ClipsLengthSettings;
let ClipsViewerConnectivitySettings;
let DEFAULT_CLIPS_BITRATE_PERCENT;
let DEFAULT_MAX_AUTO_CLIPS;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
  if (outer2_34.clipsSettings.storageLocation === outer2_17) {
    if (null != outer2_1(outer2_2[11])) {
      if (null != outer2_1(outer2_2[11]).app) {
        const app = outer2_1(outer2_2[11]).app;
        const tmp14 = yield app.getPath("videos");
        outer2_34.clipsSettings.storageLocation = outer2_0(outer2_2[12]).pathJoin(tmp14, outer2_18);
        outer2_35.emitChange();
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
            let tmp3 = map;
            value = map.get(arg0);
            if (null == value) {
              let _Set = Set;
              let tmp4 = new.target;
              let tmp5 = new.target;
              let set = new Set();
              let tmp7 = set;
              let tmp8 = map;
              let result = map.set(arg0, set);
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
  obj = importDefault(4197);
}
({ CLIPS_HARDWARE_CLASSIFICATION_VERSION: closure_11, ClipSaveTypes: closure_12, ClipsUserEducationType: closure_13, ClipsLogger: closure_14, MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS: closure_15 } = result);
({ ClipsLengthSettings, ClipsViewerConnectivitySettings, DEFAULT_MAX_AUTO_CLIPS, DEFAULT_CLIPS_BITRATE_PERCENT } = result);
let c17 = "default";
let c18 = "Discord Clips";
let closure_19 = {};
let closure_20 = {};
let closure_21 = {};
let closure_22 = [];
let c23 = 0;
let c24 = null;
let c25 = null;
let c26 = null;
let closure_27 = {};
let closure_28 = {};
let c29 = null;
({ ApplicationStreamFPS, ApplicationStreamResolutions } = makeButton);
let set = new Set();
let c31 = false;
const map = new Map();
let obj = { clipsEnabled: false, storageLocation: "default", clipsQuality: { resolution: ApplicationStreamResolutions.RESOLUTION_1080, frameRate: ApplicationStreamFPS.FPS_30, bitratePercent: DEFAULT_CLIPS_BITRATE_PERCENT }, clipsLength: ClipsLengthSettings.SECONDS_30, remindersEnabled: true, decoupledClipsEnabled: false, viewerClipsEnabled: true, viewerConnectivity: ClipsViewerConnectivitySettings.ALL, maxAutoClips: DEFAULT_MAX_AUTO_CLIPS, clipSignals: { enableDistributedSignals: true, enableGameSignals: true }, debugTooltipsEnabled: false, enableAutoclipping: undefined, showPovClipsInGallery: false };
obj = { clipsSettings: null, hardwareClassification: null, hardwareClassificationForDecoupled: null, hardwareClassificationVersion: 0, newClipIds: null, hasClips: false, hasTakenDecoupledClip: false };
obj.clipsSettings = obj;
obj.newClipIds = [];
obj.clipsEducationState = { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 };
let tmp6 = ((DeviceSettingsStore) => {
  class ClipsStoreClass {
    constructor() {
      self = this;
      tmp = outer1_3(this, ClipsStoreClass);
      obj = outer1_6(ClipsStoreClass);
      tmp2 = outer1_5;
      if (outer1_36()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ClipsStoreClass, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const self = this;
      if (null != arg0) {
        const outer1_34 = arg0;
      }
      (function migrateDefaultStorage() {
        return outer2_39(...arguments);
      })();
      self.waitFor(outer1_9);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getClips",
    value() {
      return outer1_19;
    }
  };
  items[1] = obj;
  obj = {
    key: "getClipById",
    value(arg0) {
      return outer1_19[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getClipByRemoteId",
    value(arg0) {
      if (null != outer1_21[arg0]) {
        return outer1_19[tmp];
      }
    }
  };
  items[4] = {
    key: "getClipCandidates",
    value() {
      return outer1_22;
    }
  };
  items[5] = {
    key: "getClipCandidateById",
    value(arg0) {
      return outer1_20[arg0];
    }
  };
  items[6] = {
    key: "getUserAgnosticState",
    value() {
      return outer1_34;
    }
  };
  items[7] = {
    key: "getSettings",
    value() {
      return outer1_34.clipsSettings;
    }
  };
  items[8] = {
    key: "getEnableAutoclipping",
    value() {
      let enabled = outer1_34.clipsSettings.enableAutoclipping;
      if (null == enabled) {
        const AutoclippingDefaultOverrideExperiment = ClipsStoreClass(outer1_2[19]).AutoclippingDefaultOverrideExperiment;
        const obj = { location: "getAutoclippingDefault" };
        enabled = AutoclippingDefaultOverrideExperiment.getConfig(obj).enabled;
      }
      return enabled;
    }
  };
  items[9] = {
    key: "hasUserSetAutoclippingSettings",
    value() {
      return null != outer1_34.clipsSettings.enableAutoclipping;
    }
  };
  items[10] = {
    key: "getLastClipsSession",
    value() {
      return outer1_25;
    }
  };
  items[11] = {
    key: "getCurrentClipsSession",
    value() {
      return outer1_26;
    }
  };
  items[12] = {
    key: "getHistoricalClipsSessionById",
    value(arg0) {
      return outer1_27[arg0];
    }
  };
  items[13] = {
    key: "devSetLastClipsSession",
    value(arg0) {
      const outer1_25 = arg0;
      this.emitChange();
    }
  };
  items[14] = {
    key: "getClipsWarningShown",
    value(arg0) {
      return outer1_24 === arg0;
    }
  };
  items[15] = {
    key: "getHardwareClassification",
    value() {
      return outer1_34.hardwareClassification;
    }
  };
  items[16] = {
    key: "getHardwareClassificationForDecoupled",
    value() {
      return outer1_34.hardwareClassificationForDecoupled;
    }
  };
  items[17] = {
    key: "getHardwareClassificationVersion",
    value() {
      return outer1_34.hardwareClassificationVersion;
    }
  };
  items[18] = {
    key: "getIsAtMaxSaveClipOperations",
    value() {
      return outer1_23 >= outer1_15;
    }
  };
  items[19] = {
    key: "getLastClipsError",
    value() {
      return outer1_29;
    }
  };
  items[20] = {
    key: "isClipsEnabledForUser",
    value(arg0) {
      let clipsEnabled;
      if (null != outer1_28[arg0]) {
        clipsEnabled = tmp.clipsEnabled;
      }
      return null != clipsEnabled && clipsEnabled;
    }
  };
  items[21] = {
    key: "isVoiceRecordingAllowedForUser",
    value(arg0) {
      let allowVoiceRecording;
      if (null != outer1_28[arg0]) {
        allowVoiceRecording = tmp.allowVoiceRecording;
      }
      return null != allowVoiceRecording && allowVoiceRecording;
    }
  };
  items[22] = {
    key: "isViewerClippingAllowedForUser",
    value(arg0) {
      let allowAnyViewerClips;
      if (null != outer1_28[arg0]) {
        allowAnyViewerClips = tmp.allowAnyViewerClips;
      }
      return null != allowAnyViewerClips && allowAnyViewerClips;
    }
  };
  items[23] = {
    key: "hasClips",
    value() {
      return outer1_34.hasClips;
    }
  };
  items[24] = {
    key: "hasTakenDecoupledClip",
    value() {
      return outer1_34.hasTakenDecoupledClip;
    }
  };
  items[25] = {
    key: "canShowReminders",
    value() {
      return outer1_34.clipsSettings.remindersEnabled;
    }
  };
  items[26] = {
    key: "getNewClipIds",
    value() {
      return outer1_34.newClipIds;
    }
  };
  items[27] = {
    key: "isClipExporting",
    value(arg0) {
      return outer1_30.has(arg0);
    }
  };
  items[28] = {
    key: "getExportingClipIds",
    value() {
      return outer1_30;
    }
  };
  items[29] = {
    key: "isAutoStashEnabled",
    value() {
      return outer1_31;
    }
  };
  items[30] = {
    key: "wasClipSharedInChannel",
    value(arg0, arg1) {
      const value = outer1_32.get(arg1);
      let hasItem;
      if (null != value) {
        hasItem = value.has(arg0);
      }
      return null != hasItem && hasItem;
    }
  };
  return callback(ClipsStoreClass, items);
})(require("initialize").DeviceSettingsStore);
tmp6.displayName = "ClipsStore";
tmp6.persistKey = "ClipsStore";
let items = [
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
    const _default = require(4177) /* _isNativeReflectConstruct */.default;
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
    obj["clipsEducationState"] = { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 };
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
  },
  (clipsSettings) => {
    let obj = {};
    const merged = Object.assign(clipsSettings);
    obj = {};
    const merged1 = Object.assign(clipsSettings.clipsSettings);
    obj = {};
    const merged2 = Object.assign(clipsSettings.clipsSettings.clipsQuality);
    let bitratePercent = clipsSettings.clipsSettings.clipsQuality.bitratePercent;
    if (null == bitratePercent) {
      bitratePercent = obj.clipsQuality.bitratePercent;
    }
    obj["bitratePercent"] = bitratePercent;
    obj["clipsQuality"] = obj;
    obj["clipsSettings"] = obj;
    return obj;
  }
];
tmp6.migrations = items;
obj = {
  CLIPS_SETTINGS_UPDATE: function handleSettingsUpdate(settings) {
    let obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(obj.clipsSettings);
    const merged2 = Object.assign(settings.settings);
    obj["clipsSettings"] = obj;
  },
  CLIPS_SAVE_CLIP: function handleSaveClip(clip) {
    clip = clip.clip;
    closure_23 = Math.max(closure_23 - 1, 0);
    if (clip.isCandidate) {
      const items = [clip];
      let arraySpreadResult = HermesBuiltin.arraySpread(items, 1);
      closure_20[clip.id] = clip;
    }
    if (null != obj) {
      obj = {};
      const merged = Object.assign(obj);
      let num2 = 0;
      if ("manual" === clip.clipMethod) {
        num2 = 1;
      }
      obj["manualClipsSaved"] = obj.manualClipsSaved + num2;
      const isCandidate = clip.isCandidate;
      let num3 = 0;
      if (null != isCandidate) {
        num3 = 0;
        if (isCandidate) {
          num3 = 1;
        }
      }
      obj["candidateClipsSaved"] = obj.candidateClipsSaved + num3;
    }
    if (!clip.isCandidate) {
      obj = { applicationName: clip.applicationName, ended: false };
      const merged1 = Object.assign(obj);
      let newClipIds;
      if (null != obj) {
        newClipIds = obj.newClipIds;
      }
      if (null == newClipIds) {
        newClipIds = [];
      }
      const items1 = [];
      arraySpreadResult = HermesBuiltin.arraySpread(newClipIds, 0);
      items1[arraySpreadResult] = clip.id;
      const sum = arraySpreadResult + 1;
      obj["newClipIds"] = items1;
      obj = {};
      const merged2 = Object.assign(obj);
      let newClipIds1 = obj.newClipIds;
      if (null == newClipIds1) {
        newClipIds1 = [];
      }
      const items2 = [];
      const arraySpreadResult1 = HermesBuiltin.arraySpread(newClipIds1, 0);
      items2[arraySpreadResult1] = clip.id;
      const sum1 = arraySpreadResult1 + 1;
      obj["newClipIds"] = items2;
      closure_19[clip.id] = clip;
      if (null != clip.remoteClipId) {
        closure_21[clip.remoteClipId] = clip.id;
      }
      obj.hasClips = true;
    }
  },
  CLIPS_PROMOTE_CLIP_CANDIDATE: function handlePromoteClipCandidate(clip) {
    clip = clip.clip;
    let obj = { applicationName: clip.applicationName };
    const merged = Object.assign(obj);
    obj["ended"] = true;
    let newClipIds;
    if (null != obj) {
      newClipIds = obj.newClipIds;
    }
    if (null == newClipIds) {
      newClipIds = [];
    }
    const items = [...newClipIds, clip.id];
    obj["newClipIds"] = items;
    let tmp5 = null != obj;
    if (tmp5) {
      tmp5 = obj.id === clip.gameSessionId;
    }
    importDefault(44)(tmp5, "Promoting clip candidates that do not match current autoclip session");
    obj = {};
    const merged1 = Object.assign(obj);
    obj["candidateClipsPromoted"] = obj.candidateClipsPromoted + 1;
    obj = {};
    const merged2 = Object.assign(obj);
    let newClipIds1 = obj.newClipIds;
    if (null == newClipIds1) {
      newClipIds1 = [];
    }
    const items1 = [...newClipIds1, clip.id];
    obj["newClipIds"] = items1;
    const tmp4 = importDefault(44);
    delete tmp2[tmp];
    closure_19[clip.id] = clip;
    obj.hasClips = true;
  },
  CLIPS_SAVE_CLIP_START: function handleSaveClipStart(arg0) {
    closure_23 = closure_23 + 1;
    let hasTakenDecoupledClip = obj.hasTakenDecoupledClip;
    if (!hasTakenDecoupledClip) {
      hasTakenDecoupledClip = tmp === constants.DECOUPLED;
    }
    obj.hasTakenDecoupledClip = hasTakenDecoupledClip;
  },
  CLIPS_SAVE_CLIP_ERROR: function handleSaveClipError() {
    closure_23 = Math.max(closure_23 - 1, 0);
  },
  CLIPS_SAVE_CLIP_NO_OP: function handleSaveClipNoOp(reason) {
    reason = reason.reason;
    let tmp = reason !== require(4187) /* getClipCropAspectRatio */.ClipsSaveNoOpReason.BUFFER_WARMING_UP;
    if (tmp) {
      tmp = reason !== require(4187) /* getClipCropAspectRatio */.ClipsSaveNoOpReason.BRIDGE_SHUTDOWN;
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
    let obj = require(4188) /* isClipsEnabled */;
    if (obj.isClipsEnabled()) {
      let tmp2 = sourceName;
      if (null != pid) {
        gameForPID = gameForPID.getGameForPID(pid);
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
      let obj = require(4194) /* isStreamKey */;
      const tmp6 = obj.decodeStreamKey(tmp).ownerId === store.getId();
      if (tmp6) {
        let tmp8 = null;
        if (0 !== _null.newClipIds.length) {
          obj = {};
          const merged = Object.assign(_null);
          obj["ended"] = true;
          tmp8 = obj;
        }
        _null = tmp8;
      }
      tmp2 = tmp6;
    }
    return tmp2;
  },
  CLIPS_CLEAR_LAST_CLIPS_SESSION: function handleClearLastClipsSession() {
    if (null == c25) {
      return false;
    } else {
      c25 = null;
    }
  },
  CLIPS_SESSION_START: function handleClipsSessionStart(arg0) {
    let gameId;
    let sessionId;
    ({ sessionId, gameId } = arg0);
    if (null != obj) {
      closure_27[obj.id] = obj;
    }
    obj = { id: sessionId, gameId, manualClipsSaved: 0, candidateClipsSaved: 0, candidateClipsPromoted: 0 };
  },
  CLIPS_SESSION_STOP: function handleClipsSessionStop() {
    if (null == _null2) {
      return false;
    } else {
      closure_27[_null2.id] = _null2;
      _null2 = null;
    }
  },
  CLIPS_CLEAR_NEW_CLIP_IDS: function clearNewClipIds() {
    obj.newClipIds = [];
  },
  CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function removeSingleNewClipId(clipId) {
    clipId = clipId.clipId;
    const newClipIds = obj.newClipIds;
    obj.newClipIds = newClipIds.filter((arg0) => arg0 !== clipId);
  },
  CLIPS_LOAD_DIRECTORY_SUCCESS: function handleClipsDirectoryLoaded(clips) {
    let iter2;
    let closure_19 = {};
    let arr = [];
    const tmp = _createForOfIteratorHelperLoose(clips.clips);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        if (value.isCandidate) {
          let tmp4 = closure_20;
          closure_20[value.id] = value;
          let tmp5 = arr;
          arr = arr.push(value);
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
    obj.hasClips = Object.keys(closure_19).length > 0;
  },
  CLIPS_DELETE_CLIP: function handleClipsDelete(arg0) {
    let closure_0 = arg0;
    delete tmp4[tmp3];
    delete tmp3[tmp];
    let remoteClipId;
    if (null != table[arg0.id]) {
      remoteClipId = tmp5.remoteClipId;
    }
    if (null != remoteClipId) {
      remoteClipId = tmp5.remoteClipId;
      delete tmp3[tmp2];
    }
    obj.hasClips = Object.keys(table).length > 0;
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
    const obj = { clipsEnabled: require(1360) /* hasFlag */.hasFlag(flags.flags, VoiceFlags.CLIPS_ENABLED) };
    const obj2 = require(1360) /* hasFlag */;
    obj.allowVoiceRecording = require(1360) /* hasFlag */.hasFlag(flags.flags, VoiceFlags.ALLOW_VOICE_RECORDING);
    const obj3 = require(1360) /* hasFlag */;
    obj.allowAnyViewerClips = require(1360) /* hasFlag */.hasFlag(flags.flags, VoiceFlags.ALLOW_ANY_VIEWER_CLIPS);
    closure_28[flags.userId] = obj;
  },
  CLIPS_SHOW_CALL_WARNING: function handleShowCallWarning(channelId) {
    channelId = channelId.channelId;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    if (channelId.channelId !== c24) {
      c24 = null;
    }
  },
  CLIPS_CLASSIFY_HARDWARE: function handleClassifyHardware(classification) {
    let hardwareClassification;
    let hardwareClassification2;
    let hardwareClassificationForDecoupled;
    let hardwareClassificationForDecoupled2;
    classification = classification.classification;
    obj.hardwareClassificationVersion = closure_11;
    obj.hardwareClassification = classification;
    ({ hardwareClassification, hardwareClassification: hardwareClassification2 } = obj);
    let tmp = hardwareClassification2 === require(4187) /* getClipCropAspectRatio */.ClipsHardwareClassification.MEETS_AUTO_ENABLE;
    if (tmp) {
      tmp = hardwareClassification !== require(4187) /* getClipCropAspectRatio */.ClipsHardwareClassification.MEETS_AUTO_ENABLE;
    }
    if (tmp) {
      obj.clipsSettings.clipsEnabled = true;
    }
    obj.hardwareClassificationForDecoupled = classification;
    ({ hardwareClassificationForDecoupled, hardwareClassificationForDecoupled: hardwareClassificationForDecoupled2 } = obj);
    let clipsEnabled = hardwareClassificationForDecoupled2 === require(4187) /* getClipCropAspectRatio */.ClipsHardwareClassification.MEETS_AUTO_ENABLE;
    if (clipsEnabled) {
      clipsEnabled = hardwareClassificationForDecoupled !== require(4187) /* getClipCropAspectRatio */.ClipsHardwareClassification.MEETS_AUTO_ENABLE;
    }
    if (clipsEnabled) {
      clipsEnabled = obj.clipsSettings.clipsEnabled;
    }
    if (clipsEnabled) {
      obj.clipsSettings.decoupledClipsEnabled = true;
    }
  },
  CLIPS_INIT: function handleClipsInit(applicationName) {
    let c29 = null;
    let obj = require(4188) /* isClipsEnabled */;
    if (obj.isClipsEnabled()) {
      obj = { applicationName: applicationName.applicationName, newClipIds: [], ended: false };
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
      let c29 = null;
    } else if (closure_13.Disabled === educationType) {
      const _Date = Date;
      obj.clipsEducationState.dismissedAt = Date.now();
      obj.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0;
      const clipsEducationState = obj.clipsEducationState;
      clipsEducationState.numberOfTimesDismissed = clipsEducationState.numberOfTimesDismissed + 1;
    }
  },
  RUNNING_GAMES_CHANGE: function handleRunningGamesChange(added) {
    if (added.added.length > 0) {
      const clipsEducationState = obj.clipsEducationState;
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
          let tmp2 = trackSharedRemoteClipId;
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
    let c25 = null;
    let c24 = null;
    let closure_28 = {};
  }
};
tmp6 = new tmp6(require("dispatcher"), obj);
let closure_35 = tmp6;
result = set.fileFinishedImporting("modules/clips/ClipsStore.tsx");

export default tmp6;
export const DEFAULT_STORAGE_SENTINEL = "default";
export const DEFAULT_STORAGE_DIRECTORY = "Discord Clips";
