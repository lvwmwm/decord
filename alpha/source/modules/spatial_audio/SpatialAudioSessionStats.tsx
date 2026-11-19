// Module ID: 5720
// Function ID: 5721
// Name: SpatialAudioSessionStats
// Dependencies: [1246, 502, 2133, 5689, 5690, 5537, 5721, 5691, 5541, 2]

// Module 5720 (SpatialAudioSessionStats)
import SpatialAudioConstants from "SpatialAudioConstants" /* 5690 */;
import SpatialAudioForVoiceExperimentDefault from "SpatialAudioForVoiceExperiment" /* 5691 */;
import classifyOutputDevice from "classifyOutputDevice" /* 5721 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import SpatialAudioStore from "SpatialAudioStore" /* 5689 */;
import Constants from "Constants" /* 5537 */;
import size from "module_2" /* 2 */;

const classifyOutputDeviceDefault = classifyOutputDevice;
let set;

let c10;
let c9;
let metroImportAll;
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
const metroImportDefault = SpatialAudioConstants.SpatialAudioOverrideSource;
({ DEFAULT_DEVICE_ID: metroImportAll, Features: c9, SpatialAudioStatus: c10 } = Constants);
let obj = { OFF_UNSUPPORTED: "off_unsupported", OFF_EXPERIMENT: "off_experiment", OFF_USER: "off_user", OFF_OVERRIDE: "off_override", IDLE: "idle", ACTIVE: "active", ACTIVE_MONO: "active_mono", FAILED_INIT: "failed_init", FAILED_HRTF: "failed_hrtf" };
const authStore2 = { [obj.OFF_UNSUPPORTED]: "duration_off_unsupported_ms", [obj.OFF_EXPERIMENT]: "duration_off_experiment_ms", [obj.OFF_USER]: "duration_off_user_ms", [obj.OFF_OVERRIDE]: "duration_off_override_ms", [obj.IDLE]: "duration_idle_ms", [obj.ACTIVE]: "duration_active_ms", [obj.ACTIVE_MONO]: "duration_active_mono_ms", [obj.FAILED_INIT]: "duration_failed_init_ms", [obj.FAILED_HRTF]: "duration_failed_hrtf_ms" };
Object.values(classifyOutputDevice.OutputDeviceClass);
let result = size.fileFinishedImporting("modules/spatial_audio/SpatialAudioSessionStats.tsx");
class SpatialAudioSessionStats {
  constructor() {
    let variantId;
    let TimeStampProducer = arg0;
    if (arg0 === undefined) {
      let tmp = obj;
      TimeStampProducer = obj(5541).TimeStampProducer;
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
    obj.outputClassAtStart = obj(5721).OutputDeviceClass.UNKNOWN;
    obj.numOutputClassChanges = 0;
    obj.numStatusChanges = 0;
    obj.numMonoTransitions = 0;
    obj.numUserToggles = 0;
    obj.firstFailureStatus = null;
    obj.maxRemoteAudioSources = 0;
    obj.handleStoreChange = function handleStoreChange() {
      obj = { status: SpatialAudioStore.getSpatialAudioStatus(), outputDeviceId: MediaEngineStore.getOutputDeviceId(), outputDevices: MediaEngineStore.getOutputDevices(), overrideSource: SpatialAudioStore.getSpatialAudioOverrideSource(), isSpatial: SpatialAudioStore.getSpatialAudioOverrides().isSpatial, userSetting: SpatialAudioStore.getUserAgnosticState().enabled, userEnabled: SpatialAudioStore.isSpatialAudioEnabled(), supported: MediaEngineStore.supports(constants.SPATIAL_AUDIO) };
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
      const obj4 = { status: SpatialAudioStore.getSpatialAudioStatus(), outputDeviceId: MediaEngineStore.getOutputDeviceId(), outputDevices: MediaEngineStore.getOutputDevices(), overrideSource: SpatialAudioStore.getSpatialAudioOverrideSource(), isSpatial: SpatialAudioStore.getSpatialAudioOverrides().isSpatial, userSetting: SpatialAudioStore.getUserAgnosticState().enabled, userEnabled: SpatialAudioStore.isSpatialAudioEnabled(), supported: MediaEngineStore.supports(constants.SPATIAL_AUDIO) };
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
      output_device_is_default: self.current.outputDeviceId === metroImportAll,
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
    values = Object.values(closure_12);
    ({ numStatusChanges: obj.num_status_changes, numMonoTransitions: obj.num_mono_transitions, firstFailureStatus: obj.first_failure_status, outputClassAtStart: obj.output_class_at_start, numOutputClassChanges: obj.num_output_class_changes } = self);
    const values2 = Object.values(closure_12);
    for (const item10047 of values2) {
      let durations = self.durations;
      let num = durations.get(item10047) ?? 0;
      obj[item10047] = num;
      continue;
    }
    const iter = closure_13[Symbol.iterator]();
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
        self.add(closure_12[state], bound);
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
