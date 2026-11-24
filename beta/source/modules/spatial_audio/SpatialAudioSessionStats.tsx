// Module ID: 5841
// Function ID: 5842
// Name: SpatialAudioSessionStats
// Dependencies: [32, 5, 1245, 502, 2131, 5810, 5811, 5658, 5842, 5812, 5662, 2]

// Module 5841 (SpatialAudioSessionStats)
import SpatialAudioConstants from "SpatialAudioConstants" /* 5811 */;
import SpatialAudioForVoiceExperimentDefault from "SpatialAudioForVoiceExperiment" /* 5812 */;
import classifyOutputDevice from "classifyOutputDevice" /* 5842 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1245 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import SpatialAudioStore from "SpatialAudioStore" /* 5810 */;
import Constants from "Constants" /* 5658 */;
import size from "module_2" /* 2 */;

const classifyOutputDeviceDefault = classifyOutputDevice;
let c4, mediaEngine, set;

let c10;
let closure_12;
let unpackModuleId;
function requestNativeStats() {
  return obj(...arguments);
}
let obj = function _requestNativeStats() {
  obj = _asyncToGenerator(async () => {
    let c1;
    let c2;
    const value = { stats: await mediaEngine.getSpatialAudioStats(true), answeredInTime: true };
    mediaEngine = mediaEngine.getMediaEngine();
    return value;
  });
  return obj(...arguments);
};
obj = function _readNativeStats() {
  obj = _asyncToGenerator(async function(arg0, value) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let c0;
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp3;
            c0 = undefined;
            const self = this;
            const self2 = this;
            const promise = new Promise((arg0) => {
              const timeout = setTimeout(() => closure_0({ stats: null, answeredInTime: false }), 1000);
            });
            c3 = 2;
            const items = [requestNativeStats(), promise];
            c1 = 3;
            c4 = 1;
            const obj4 = { value: race(items), done: false };
            return obj4;
          }
        } else if (1 === c1) {
          c3 = 0;
          const _clearTimeout4 = clearTimeout;
          clearTimeout(c0);
          throw closure_2;
        } else if (2 === c1) {
          c3 = 0;
          const _clearTimeout3 = clearTimeout;
          clearTimeout(c0);
          c4 = 3;
          const obj5 = { value: { stats: null, answeredInTime: false }, done: true };
          return obj5;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          const _clearTimeout2 = clearTimeout;
          clearTimeout(c0);
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c3 = 0;
          const _clearTimeout = clearTimeout;
          clearTimeout(c0);
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp21) {
        closure_2 = tmp21;
        if (0 === c3) {
          c4 = 3;
          throw tmp21;
        } else if (1 === tmp23) {
          c1 = 1;
        } else {
          c1 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _answeredInTime() {
  obj = _asyncToGenerator(async (value) => {
    let c2 = 0;
    let c1 = 0;
    return (async (arg0, value) => {
      await value;
      return value.answeredInTime;
    })();
  });
  return obj(...arguments);
};
function takeSnapshot(isSpatial, arg1) {
  let OFF_UNSUPPORTED;
  obj = {};
  const merged = Object.assign(isSpatial);
  isSpatial = isSpatial.isSpatial;
  if (isSpatial == null) {
    if (arg1) {
      obj.state = OFF_UNSUPPORTED;
      obj.outputClass = classifyOutputDeviceDefault(isSpatial.outputDevices[isSpatial.outputDeviceId]);
      return obj;
    }
    if (false === isSpatial.isSpatial) {
      OFF_UNSUPPORTED = obj.OFF_OVERRIDE;
    } else {
      OFF_UNSUPPORTED = arg1 ? tmp2.OFF_USER : tmp2.OFF_EXPERIMENT;
    }
  }
  if (isSpatial.supported) {
    const status = isSpatial.status;
    if (constants3.ACTIVE === status) {
      OFF_UNSUPPORTED = obj.ACTIVE;
    } else if (constants3.MONO_OUTPUT === status) {
      OFF_UNSUPPORTED = obj.ACTIVE_MONO;
    } else if (constants3.INIT_FAILED === status) {
      OFF_UNSUPPORTED = obj.FAILED_INIT;
    } else if (constants3.HRTF_FAILED === status) {
      OFF_UNSUPPORTED = obj.FAILED_HRTF;
    } else {
      OFF_UNSUPPORTED = obj.IDLE;
    }
  } else {
    OFF_UNSUPPORTED = obj.OFF_UNSUPPORTED;
  }
}
const React4 = SpatialAudioConstants.SpatialAudioOverrideSource;
({ DEFAULT_DEVICE_ID: c10, Features: unpackModuleId, SpatialAudioStatus: closure_12 } = Constants);
obj = { OFF_UNSUPPORTED: "off_unsupported", OFF_EXPERIMENT: "off_experiment", OFF_USER: "off_user", OFF_OVERRIDE: "off_override", IDLE: "idle", ACTIVE: "active", ACTIVE_MONO: "active_mono", FAILED_INIT: "failed_init", FAILED_HRTF: "failed_hrtf" };
const gesture = { [obj.OFF_UNSUPPORTED]: "duration_off_unsupported_ms", [obj.OFF_EXPERIMENT]: "duration_off_experiment_ms", [obj.OFF_USER]: "duration_off_user_ms", [obj.OFF_OVERRIDE]: "duration_off_override_ms", [obj.IDLE]: "duration_idle_ms", [obj.ACTIVE]: "duration_active_ms", [obj.ACTIVE_MONO]: "duration_active_mono_ms", [obj.FAILED_INIT]: "duration_failed_init_ms", [obj.FAILED_HRTF]: "duration_failed_hrtf_ms" };
let closure_15 = Object.values(classifyOutputDevice.OutputDeviceClass);
let closure_16 = { mixUs: "mix_us", positioningUs: "positioning_us", renderUs: "render_us", reflectionsSimUs: "reflections_sim_us" };
let closure_17 = ["mean", "p75", "p95", "p99", "max"];
let result = size.fileFinishedImporting("modules/spatial_audio/SpatialAudioSessionStats.tsx");
class SpatialAudioSessionStats {
  constructor() {
    let variantId;
    let TimeStampProducer = arg0;
    if (arg0 === undefined) {
      let tmp = obj;
      TimeStampProducer = obj(5662).TimeStampProducer;
    }
    obj = Object.create(new.target.prototype);
    let obj2 = SpatialAudioForVoiceExperimentDefault;
    let config = obj2.getConfig({ location: "SpatialAudioSessionStats" }, { autoTrackExposure: false });
    let id = AuthenticationStore.getId();
    let assignment;
    if (null != id) {
      assignment = ApexExperimentStore.getAssignment("user", id, SpatialAudioForVoiceExperimentDefault.definition.name);
    }
    let obj3 = { enabled: config.enabled, positioningModel: config.positioningModel, variantId };
    variantId = null;
    if (null != assignment) {
      variantId = null;
      if (!assignment.useAsEligibility) {
        variantId = assignment.variantId;
      }
    }
    obj.experiment = obj3;
    let obj4 = { status: SpatialAudioStore.getSpatialAudioStatus(), outputDeviceId: MediaEngineStore.getOutputDeviceId(), outputDevices: MediaEngineStore.getOutputDevices(), overrideSource: SpatialAudioStore.getSpatialAudioOverrideSource(), isSpatial: SpatialAudioStore.getSpatialAudioOverrides().isSpatial, userSetting: SpatialAudioStore.getUserAgnosticState().enabled, userEnabled: SpatialAudioStore.isSpatialAudioEnabled(), supported: MediaEngineStore.supports(constants2.SPATIAL_AUDIO) };
    obj.current = takeSnapshot(obj4, obj.experiment.enabled);
    obj.frozen = false;
    obj.durations = new Map();
    obj.lastOverrideSource = constants.NONE;
    obj.anyOverride = false;
    new Map();
    obj.outputClassAtStart = obj(5842).OutputDeviceClass.UNKNOWN;
    obj.numOutputClassChanges = 0;
    obj.numStatusChanges = 0;
    obj.numMonoTransitions = 0;
    obj.numUserToggles = 0;
    obj.firstFailureStatus = null;
    obj.maxRemoteAudioSources = 0;
    obj.nativeWindowIsWhole = Promise.resolve(false);
    obj.handleStoreChange = function handleStoreChange() {
      obj = { status: SpatialAudioStore.getSpatialAudioStatus(), outputDeviceId: MediaEngineStore.getOutputDeviceId(), outputDevices: MediaEngineStore.getOutputDevices(), overrideSource: SpatialAudioStore.getSpatialAudioOverrideSource(), isSpatial: SpatialAudioStore.getSpatialAudioOverrides().isSpatial, userSetting: SpatialAudioStore.getUserAgnosticState().enabled, userEnabled: SpatialAudioStore.isSpatialAudioEnabled(), supported: MediaEngineStore.supports(unpackModuleId.SPATIAL_AUDIO) };
      const current = obj.current;
      const obj2 = obj;
      const tmp = obj.status === current.status && obj.outputDeviceId === current.outputDeviceId && obj.outputDevices === current.outputDevices && obj.overrideSource === current.overrideSource && obj.isSpatial === current.isSpatial && obj.userSetting === current.userSetting && obj.userEnabled === current.userEnabled && obj.supported === current.supported;
      if (!tmp) {
        obj2.update(obj);
      }
    };
    obj.refreshExperiment = function refreshExperiment() {
      let variantId;
      const obj2 = SpatialAudioForVoiceExperimentDefault;
      const config = obj2.getConfig({ location: "SpatialAudioSessionStats" }, { autoTrackExposure: false });
      const id = AuthenticationStore.getId();
      let assignment;
      if (null != id) {
        assignment = ApexExperimentStore.getAssignment("user", id, SpatialAudioForVoiceExperimentDefault.definition.name);
      }
      const obj3 = { enabled: config.enabled, positioningModel: config.positioningModel, variantId };
      variantId = null;
      if (null != assignment) {
        variantId = null;
        if (!assignment.useAsEligibility) {
          variantId = assignment.variantId;
        }
      }
      obj.experiment = obj3;
      const obj4 = { status: SpatialAudioStore.getSpatialAudioStatus(), outputDeviceId: MediaEngineStore.getOutputDeviceId(), outputDevices: MediaEngineStore.getOutputDevices(), overrideSource: SpatialAudioStore.getSpatialAudioOverrideSource(), isSpatial: SpatialAudioStore.getSpatialAudioOverrides().isSpatial, userSetting: SpatialAudioStore.getUserAgnosticState().enabled, userEnabled: SpatialAudioStore.isSpatialAudioEnabled(), supported: MediaEngineStore.supports(unpackModuleId.SPATIAL_AUDIO) };
      obj.update(obj4);
    };
    obj.timestampProducer = TimeStampProducer;
    const timestampProducer = obj.timestampProducer;
    obj.lastTimestamp = timestampProducer.now();
    obj.resetCounters();
    return obj;
  }
  start() {
    SpatialAudioStore.addChangeListener(this.handleStoreChange);
    MediaEngineStore.addChangeListener(this.handleStoreChange);
    ApexExperimentStore.addChangeListener(this.refreshExperiment);
    this.resetNativeStats();
  }
  stop() {
    SpatialAudioStore.removeChangeListener(this.handleStoreChange);
    MediaEngineStore.removeChangeListener(this.handleStoreChange);
    ApexExperimentStore.removeChangeListener(this.refreshExperiment);
  }
  freeze() {
    this.accrue();
    this.frozen = true;
  }
  restartForFragment(maxRemoteAudioSources) {
    this.refreshExperiment();
    const durations = this.durations;
    durations.clear();
    this.resetCounters();
    this.maxRemoteAudioSources = maxRemoteAudioSources;
    this.frozen = false;
    const timestampProducer = this.timestampProducer;
    this.lastTimestamp = timestampProducer.now();
  }
  setRemoteAudioSourceCount(self) {
    this.maxRemoteAudioSources = Math.max(this.maxRemoteAudioSources, self);
  }
  shouldReport() {
    const self = this;
    this.refreshExperiment();
    let supported = this.current.supported;
    if (supported) {
      supported = null != self.experiment.variantId || self.anyOverride;
    }
    return supported;
  }
  getStats() {
    let str;
    let str2;
    let values;
    const self = this;
    this.refreshExperiment();
    const experiment = this.experiment;
    const positioningModel = experiment.positioningModel;
    const userSetting = this.current.userSetting;
    obj = {
      experiment_variant_id: experiment.variantId,
      experiment_enabled: experiment.enabled,
      positioning_model_experiment: str,
      mixer_override_source: null,
      any_non_experiment_override: null,
      user_setting: str2,
      num_user_toggles: self.numUserToggles,
      spatial_supported: self.current.supported,
      duration_connected_ms: values.reduce((acc, item) => {
        const durations = self.durations;
        let num = durations.get(item);
        if (num == null) {
          num = 0;
        }
        return acc + num;
      }, 0),
      num_status_changes: null,
      num_mono_transitions: null,
      first_failure_status: null,
      output_class_at_start: null,
      num_output_class_changes: null,
      output_device_is_default: self.current.outputDeviceId === authStore,
      max_remote_audio_sources: self.maxRemoteAudioSources
    };
    str = "ahead";
    if ("" !== positioningModel) {
      str = positioningModel;
    }
    ({ lastOverrideSource: obj.mixer_override_source, anyOverride: obj.any_non_experiment_override } = self);
    str2 = "unset";
    if (null != userSetting) {
      let str3 = "off";
      if (userSetting) {
        str3 = "on";
      }
      str2 = str3;
    }
    values = Object.values(closure_14);
    ({ numStatusChanges: obj.num_status_changes, numMonoTransitions: obj.num_mono_transitions, firstFailureStatus: obj.first_failure_status, outputClassAtStart: obj.output_class_at_start, numOutputClassChanges: obj.num_output_class_changes } = self);
    const values2 = Object.values(closure_14);
    for (const item10047 of values2) {
      let durations = self.durations;
      let num = durations.get(item10047) ?? 0;
      obj[item10047] = num;
      continue;
    }
    const iter = closure_15[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let _HermesInternal = HermesInternal;
      let items = ["duration_output_" + nextResult + "_ms", ];
      let _HermesInternal2 = HermesInternal;
      items[1] = "duration_active_output_" + nextResult + "_ms";
      for (const item10072 of items) {
        let durations2 = self.durations;
        let num2 = durations2.get(item10072) ?? 0;
        obj[item10072] = num2;
        continue;
      }
      continue;
    }
    return obj;
  }
  takeNativeStats() {
    const self = this;
    return (async () => {
      let c2;
      let v3;
      function getNativeStatsFields(mixFrames) {
        let maxAudibleSources;
        let maxPinnedSources;
        let maxSources;
        let mixFramesOverBudget;
        let positioningModel;
        let reflectionsSimRuns;
        mixFrames = undefined;
        if (mixFrames != null) {
          mixFrames = mixFrames.mixFrames;
        }
        if (mixFrames == null) {
          mixFrames = null;
        }
        obj = { mix_frames: mixFrames, mix_frames_over_budget: mixFramesOverBudget, reflections_sim_runs: reflectionsSimRuns, max_sources: maxSources, max_audible_sources: maxAudibleSources, max_pinned_sources: maxPinnedSources, positioning_model_effective: positioningModel };
        mixFramesOverBudget = undefined;
        if (mixFrames != null) {
          mixFramesOverBudget = mixFrames.mixFramesOverBudget;
        }
        if (mixFramesOverBudget == null) {
          mixFramesOverBudget = null;
        }
        reflectionsSimRuns = undefined;
        if (mixFrames != null) {
          reflectionsSimRuns = mixFrames.reflectionsSimRuns;
        }
        if (reflectionsSimRuns == null) {
          reflectionsSimRuns = null;
        }
        maxSources = undefined;
        if (mixFrames != null) {
          maxSources = mixFrames.maxSources;
        }
        if (maxSources == null) {
          maxSources = null;
        }
        maxAudibleSources = undefined;
        if (mixFrames != null) {
          maxAudibleSources = mixFrames.maxAudibleSources;
        }
        if (maxAudibleSources == null) {
          maxAudibleSources = null;
        }
        maxPinnedSources = undefined;
        if (mixFrames != null) {
          maxPinnedSources = mixFrames.maxPinnedSources;
        }
        if (maxPinnedSources == null) {
          maxPinnedSources = null;
        }
        positioningModel = undefined;
        if (mixFrames != null) {
          positioningModel = mixFrames.positioningModel;
        }
        if (positioningModel == null) {
          positioningModel = null;
        }
        const keys = Object.keys(closure_1_16);
        const iter = keys[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp12 = closure_1_16[nextResult];
          let tmp13;
          if (mixFrames != null) {
            tmp13 = mixFrames[tmp10];
          }
          let tmp15 = tmp13;
          for (const item10045 of closure_1_17) {
            let _HermesInternal = HermesInternal;
            let tmp18 = item10045;
            let rounded = null;
            let combined = "" + tmp12 + "_" + item10045;
            if (null != tmp15) {
              let _Math = Math;
              rounded = Math.round(tmp15[tmp18]);
            }
            obj[combined] = rounded;
            continue;
          }
          continue;
        }
        return obj;
      }
      const items = [self.nativeWindowIsWhole, self.resetNativeStats()];
      await Promise.all(items);
      let closure_0 = arg1;
      let closure_1 = c3(closure_0, 2);
      let closure_2 = closure_1[0];
      const stats = closure_1[1].stats;
      let tmp7 = null;
      if (closure_2) {
        tmp7 = stats;
      }
      return getNativeStatsFields(tmp7);
    })();
  }
  dropNativeStats() {
    this.resetNativeStats();
  }
  resetNativeStats() {
    function readNativeStats() {
      return obj(...arguments);
    }
    function answeredInTime() {
      return obj(...arguments);
    }
    const tmp = readNativeStats();
    this.nativeWindowIsWhole = answeredInTime(tmp);
    return tmp;
  }
  resetCounters() {
    const self = this;
    this.lastOverrideSource = this.current.overrideSource;
    this.anyOverride = this.current.overrideSource !== constants.NONE;
    this.outputClassAtStart = this.current.outputClass;
    this.numOutputClassChanges = 0;
    this.numStatusChanges = 0;
    this.numMonoTransitions = 0;
    this.numUserToggles = 0;
    let state = null;
    if (this.isFailure(this.current.state)) {
      state = self.current.state;
    }
    self.firstFailureStatus = state;
  }
  isFailure(state) {
    return state === obj.FAILED_INIT || state === obj.FAILED_HRTF;
  }
  add(arg0, arg1) {
    let durations;
    let durations2;
    ({ durations, durations: durations2 } = this);
    set = durations.set;
    let num = durations2.get(arg0);
    if (num == null) {
      num = 0;
    }
    const result = set(arg0, num + arg1);
  }
  accrue() {
    let outputClass;
    let state;
    const self = this;
    const timestampProducer = this.timestampProducer;
    const nowResult = timestampProducer.now();
    const bound = Math.max(0, nowResult - this.lastTimestamp);
    this.lastTimestamp = nowResult;
    if (!this.frozen) {
      if (0 !== bound) {
        ({ state, outputClass } = self.current);
        self.add(closure_14[state], bound);
        const _HermesInternal2 = HermesInternal;
        self.add("duration_output_" + outputClass + "_ms", bound);
        if (state === obj.ACTIVE) {
          const _HermesInternal = HermesInternal;
          self.add("duration_active_output_" + outputClass + "_ms", bound);
        }
      }
    }
  }
  update(arg0) {
    const self = this;
    this.accrue();
    const current = this.current;
    const tmp2 = takeSnapshot(arg0, this.experiment.enabled);
    this.current = tmp2;
    if (tmp2.status !== current.status) {
      self.numStatusChanges = self.numStatusChanges + 1;
      if (tmp2.status === constants3.MONO_OUTPUT) {
        self.numMonoTransitions = self.numMonoTransitions + 1;
      }
    }
    const tmp4 = null == self.firstFailureStatus && self.isFailure(tmp2.state);
    if (tmp4) {
      self.firstFailureStatus = tmp2.state;
    }
    if (tmp2.outputClass !== current.outputClass) {
      self.numOutputClassChanges = self.numOutputClassChanges + 1;
    }
    if (tmp2.userSetting !== current.userSetting) {
      self.numUserToggles = self.numUserToggles + 1;
    }
    if (tmp2.overrideSource !== constants.NONE) {
      self.lastOverrideSource = tmp2.overrideSource;
      self.anyOverride = true;
    }
  }
}
const prototype = SpatialAudioSessionStats.prototype;

export default SpatialAudioSessionStats;
