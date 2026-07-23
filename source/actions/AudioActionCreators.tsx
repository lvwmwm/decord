// Module ID: 8843
// Function ID: 69731
// Name: getInputDeviceName
// Dependencies: [5, 4201, 1348, 4177, 4202, 1906, 1849, 653, 8844, 4191, 3, 675, 574, 686, 8845, 8847, 8848, 8856, 2]

// Module 8843 (getInputDeviceName)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import { SoundOutputChannel } from "SoundOutputChannel";
import { MediaEngineContextTypes } from "DesktopSources";
import importDefaultResult from "_isNativeReflectConstruct";

let closure_10;
let closure_11;
let closure_15;
let closure_16;
let closure_17;
const require = arg1;
function getInputDeviceName() {
  const inputDevices = store3.getInputDevices();
  const tmp2 = inputDevices[store3.getInputDeviceId(store3)];
  let str = "";
  if (null != tmp2) {
    str = tmp2.name;
  }
  return str;
}
function trackDeviceChanged(inputDevices, inputDeviceId, found, Video, arg4) {
  if (arg4 === undefined) {
    let obj = {};
  }
  if (inputDeviceId !== found) {
    const voiceChannelId = store5.getVoiceChannelId();
    let channel = null;
    if (null != voiceChannelId) {
      channel = store2.getChannel(voiceChannelId);
    }
    const mediaEngine = store3.getMediaEngine();
    const audioSubsystem = mediaEngine.getAudioSubsystem();
    const mediaEngine1 = store3.getMediaEngine();
    const audioLayer = mediaEngine1.getAudioLayer();
    obj = {};
    let str = "";
    let str2 = "";
    if (null != inputDevices[inputDeviceId]) {
      str2 = tmp5.name;
    }
    obj.device_from_name = store.getCertifiedDeviceName(inputDeviceId, str2);
    if (null != inputDevices[found]) {
      str = tmp6.name;
    }
    obj.device_to_name = store.getCertifiedDeviceName(found, str);
    obj.device_type = Video;
    obj.device_is_certified = store.isCertified(found);
    obj.location = tmp;
    obj.location_stack = tmp2;
    let type;
    if (null != channel) {
      type = channel.type;
    }
    obj.voice_channel_type = type;
    obj.audio_subsystem = audioSubsystem;
    obj.audio_layer = audioLayer;
    importDefault(675).track(constants2.MEDIA_DEVICE_CHANGED, obj);
    const obj4 = importDefault(675);
  }
}
({ InputModes: closure_10, AnalyticEvents: closure_11 } = ME);
importDefaultResult = new importDefaultResult("AudioActionCreators");
importDefaultResult.enableNativeLogger(true);
let closure_14 = require("debounce")((target_user_id, context, volume) => {
  let obj = importDefault(675);
  obj = { target_user_id, context, volume, media_session_id: store4.getMediaSessionId(), rtc_connection_id: store4.getRTCConnectionId() };
  obj.track(constants2.USER_VOLUME_SETTING_UPDATED, obj);
}, 300);
let obj = {
  isNotSupported() {
    return false;
  },
  enable() {
    return Promise.resolve(true);
  },
  trackToggleSelfMute() {

  },
  trackToggleSelfDeaf() {

  }
};
({ isNotSupported: closure_15, trackToggleSelfMute: closure_16, trackToggleSelfDeaf: closure_17 } = obj);
obj = {
  enable: obj.enable,
  toggleSelfMute(arg0) {
    let obj = arg0;
    const self = this;
    if (arg0 === undefined) {
      obj = {};
    }
    let DEFAULT = obj.context;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let flag = obj.syncRemote;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = obj.usedKeybind;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let flag3 = obj.playSoundEffect;
    if (flag3 === undefined) {
      flag3 = true;
    }
    if (callback3()) {
      let resolved = Promise.resolve();
    } else {
      obj = { usedKeybind: flag2 };
      obj.location = obj.location;
      callback4(obj);
      if (flag3) {
        flag3 = !store3.hasActiveCallKitCall();
      }
      const currentUser = authStore.getCurrentUser();
      if (tmp7) {
        importDefaultResult.info("Toggling self mute");
      }
      if (store3.isEnabled()) {
        obj = { type: "AUDIO_TOGGLE_SELF_MUTE", context: DEFAULT, syncRemote: flag, playSoundEffect: flag3 };
        resolved = importDefault(686).dispatch(obj);
        const obj4 = importDefault(686);
      } else {
        resolved = self.enable(true);
      }
      tmp7 = null != currentUser && currentUser.isStaff();
    }
    return resolved;
  },
  setSelfMute(DEFAULT, pendingMutePreference, arg2) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    if (!callback3()) {
      if (flag) {
        flag = !store3.hasActiveCallKitCall();
      }
      const currentUser = authStore.getCurrentUser();
      if (tmp4) {
        importDefaultResult.info("Setting self mute", pendingMutePreference);
      }
      tmp4 = null != currentUser && currentUser.isStaff();
      const obj = { type: "AUDIO_SET_SELF_MUTE", context: DEFAULT, mute: pendingMutePreference, playSoundEffect: flag };
      importDefault(686).dispatch(obj);
      const obj2 = importDefault(686);
    }
  },
  setTemporarySelfMute(mute) {
    if (!callback3()) {
      const currentUser = authStore.getCurrentUser();
      if (tmp3) {
        importDefaultResult.info("Setting temporary self mute", mute);
      }
      tmp3 = null != currentUser && currentUser.isStaff();
      const obj = { type: "AUDIO_SET_TEMPORARY_SELF_MUTE", mute };
      importDefault(686).dispatch(obj);
      const obj2 = importDefault(686);
    }
  },
  toggleSelfDeaf(arg0) {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let DEFAULT = obj.context;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let flag = obj.syncRemote;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = obj.usedKeybind;
    if (flag2 === undefined) {
      flag2 = false;
    }
    if (!callback3()) {
      obj = { usedKeybind: flag2 };
      obj.location = obj.location;
      callback5(obj);
      obj = { type: "AUDIO_TOGGLE_SELF_DEAF", context: DEFAULT, syncRemote: flag };
      importDefault(686).dispatch(obj);
      const obj3 = importDefault(686);
    }
  },
  toggleLocalMute(closure_0, closure_1) {
    let DEFAULT = closure_1;
    if (closure_1 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    if (!callback3()) {
      let obj = importDefault(686);
      obj = { type: "AUDIO_TOGGLE_LOCAL_MUTE", context: DEFAULT, userId: closure_0 };
      obj.dispatch(obj);
    }
  },
  toggleLocalSoundboardMute(id) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let obj = importDefault(686);
    obj = { type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE", context: DEFAULT, userId: id };
    obj.dispatch(obj);
  },
  setDisableLocalVideo(id, MANUAL_ENABLED, DEFAULT, arg3) {
    let flag = arg3;
    let flag2 = arg4;
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    if (flag === undefined) {
      flag = true;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    if (!callback3()) {
      let obj = importDefault(686);
      obj = { type: "AUDIO_SET_LOCAL_VIDEO_DISABLED", context: DEFAULT, userId: id, videoToggleState: MANUAL_ENABLED, persist: flag, isAutomatic: flag2 };
      obj.dispatch(obj);
    }
  },
  setLocalVolume(closure_0, volume, STREAM) {
    let DEFAULT = STREAM;
    if (STREAM === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let obj = require(8845) /* snapVolumeToDefault */;
    const snapVolumeToDefaultResult = obj.snapVolumeToDefault(volume, DEFAULT);
    obj = { type: "AUDIO_SET_LOCAL_VOLUME", context: DEFAULT, userId: closure_0, volume: snapVolumeToDefaultResult };
    importDefault(686).dispatch(obj);
    callback2(closure_0, DEFAULT, snapVolumeToDefaultResult);
  },
  setAudioMixerSettings(audioMixerSettings) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let obj = importDefault(686);
    obj = { type: "AUDIO_SET_AUDIO_MIXER_SETTINGS", context: DEFAULT, settings: audioMixerSettings };
    obj.dispatch(obj);
  },
  setSpatialAudio(arg0, arg1) {
    if (!callback3()) {
      const audioMixerSettings = store3.getAudioMixerSettings();
      importDefault(8847)("spatial_audio_enabled", arg0, audioMixerSettings.enabled, arg1);
      let obj = importDefault(686);
      obj = { type: "AUDIO_SET_AUDIO_MIXER_SETTINGS", context: MediaEngineContextTypes.DEFAULT };
      obj = {};
      const merged = Object.assign(audioMixerSettings);
      obj["enabled"] = arg0;
      obj.settings = obj;
      obj.dispatch(obj);
    }
  },
  setLocalPan(result2, left, right) {
    let DEFAULT = arg3;
    if (arg3 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let obj = importDefault(686);
    obj = { type: "AUDIO_SET_LOCAL_PAN", context: DEFAULT, userId: result2, left, right };
    obj.dispatch(obj);
  },
  setMode(mode, arg1, DEFAULT) {
    let obj = arg1;
    obj = arg3;
    if (arg1 === undefined) {
      obj = {};
    }
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    if (obj === undefined) {
      obj = {};
    }
    const analyticsLocations = obj.analyticsLocations;
    if (!callback3()) {
      mode = store3.getMode();
      const modeOptions = store3.getModeOptions(DEFAULT);
      let obj2 = importDefault(686);
      obj = { type: "AUDIO_SET_MODE", context: DEFAULT, mode };
      const obj1 = {};
      const merged = Object.assign(modeOptions);
      const merged1 = Object.assign(obj);
      obj.options = obj1;
      obj2.dispatch(obj);
      if (mode !== mode) {
        const mediaEngine = store3.getMediaEngine();
        const audioSubsystem = mediaEngine.getAudioSubsystem();
        const mediaEngine1 = store3.getMediaEngine();
        const audioLayer = mediaEngine1.getAudioLayer();
        const voiceChannelId = store5.getVoiceChannelId();
        let channel = null;
        if (null != voiceChannelId) {
          channel = store2.getChannel(voiceChannelId);
        }
        const tmp34 = getInputDeviceName();
        obj2 = { mode, location_stack: analyticsLocations };
        let type;
        if (null != channel) {
          type = channel.type;
        }
        obj2.voice_channel_type = type;
        obj2.input_device_name = tmp34;
        obj2.audio_subsystem = audioSubsystem;
        obj2.audio_layer = audioLayer;
        importDefault(675).track(constants2.VOICE_ACTIVATION_MODE_CHANGED, obj2);
        const obj10 = importDefault(675);
      } else if (mode === constants.VOICE_ACTIVITY) {
        if (modeOptions !== obj) {
          const mediaEngine2 = store3.getMediaEngine();
          const audioSubsystem1 = mediaEngine2.getAudioSubsystem();
          const mediaEngine3 = store3.getMediaEngine();
          const audioLayer1 = mediaEngine3.getAudioLayer();
          const voiceChannelId1 = store5.getVoiceChannelId();
          let channel1 = null;
          if (null != voiceChannelId1) {
            channel1 = store2.getChannel(voiceChannelId1);
          }
          const tmp18 = getInputDeviceName();
          const obj3 = { location_stack: analyticsLocations };
          let type1;
          if (null != channel1) {
            type1 = channel1.type;
          }
          obj3.voice_channel_type = type1;
          obj3.input_device_name = tmp18;
          obj3.audio_subsystem = audioSubsystem1;
          obj3.audio_layer = audioLayer1;
          obj3.old_threshold = modeOptions.threshold;
          obj3.new_threshold = obj.threshold;
          obj3.old_auto_threshold = modeOptions.autoThreshold;
          obj3.new_auto_threshold = obj.autoThreshold;
          importDefault(675).track(constants2.VOICE_ACTIVITY_THRESHOLD_CHANGED, obj3);
          const obj6 = importDefault(675);
        }
      }
    }
  },
  setBypassSystemInputProcessing(bypassEnabled, location) {
    if (!callback3()) {
      let obj = importDefault(686);
      obj = { type: "AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING", bypassEnabled, location };
      obj.dispatch(obj);
    }
  },
  setInputVolume(inputVolume) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (!callback3()) {
      obj = { type: "AUDIO_SET_INPUT_VOLUME", volume: inputVolume };
      importDefault(686).dispatch(obj);
      const voiceChannelId = store5.getVoiceChannelId();
      let channel = null;
      if (null != voiceChannelId) {
        channel = store2.getChannel(voiceChannelId);
      }
      const obj2 = importDefault(686);
      obj = { volume: inputVolume };
      obj.location_stack = obj.analyticsLocations;
      let type;
      if (null != channel) {
        type = channel.type;
      }
      obj.voice_channel_type = type;
      importDefault(675).track(constants2.MEDIA_INPUT_VOLUME_CHANGED, obj);
      const obj4 = importDefault(675);
    }
  },
  setOutputVolume(closure_45) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (!callback3()) {
      obj = { type: "AUDIO_SET_OUTPUT_VOLUME", volume: closure_45 };
      importDefault(686).dispatch(obj);
      const voiceChannelId = store5.getVoiceChannelId();
      let channel = null;
      if (null != voiceChannelId) {
        channel = store2.getChannel(voiceChannelId);
      }
      const obj2 = importDefault(686);
      obj = { volume: closure_45 };
      obj.location_stack = obj.analyticsLocations;
      let type;
      if (null != channel) {
        type = channel.type;
      }
      obj.voice_channel_type = type;
      importDefault(675).track(constants2.MEDIA_OUTPUT_VOLUME_CHANGED, obj);
      const obj4 = importDefault(675);
    }
  },
  setInputDevice(id) {
    let _location;
    let analyticsLocations;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ location: _location, analyticsLocations } = obj);
    if (!callback3()) {
      const inputDeviceId = store3.getInputDeviceId();
      if (null != _location) {
        obj = { location: _location, analyticsLocations };
        trackDeviceChanged(store3.getInputDevices(), inputDeviceId, id, "Audio Input", obj);
      }
      obj = { type: "AUDIO_SET_INPUT_DEVICE", id, oldId: inputDeviceId };
      importDefault(686).dispatch(obj);
      const obj3 = importDefault(686);
    }
  },
  setOutputDevice(id) {
    let _location;
    let analyticsLocations;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ location: _location, analyticsLocations } = obj);
    if (!callback3()) {
      const outputDeviceId = store3.getOutputDeviceId();
      if (null != _location) {
        obj = { location: _location, analyticsLocations };
        trackDeviceChanged(store3.getOutputDevices(), outputDeviceId, id, "Audio Output", obj);
      }
      obj = { type: "AUDIO_SET_OUTPUT_DEVICE", id, oldId: outputDeviceId };
      importDefault(686).dispatch(obj);
      const obj3 = importDefault(686);
    }
  },
  setVideoDevice(found) {
    let _location;
    let analyticsLocations;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ location: _location, analyticsLocations } = obj);
    if (!callback3()) {
      const videoDeviceId = store3.getVideoDeviceId();
      if (null != _location) {
        obj = { location: _location, analyticsLocations };
        trackDeviceChanged(store3.getVideoDevices(), videoDeviceId, found, "Video", obj);
      }
      obj = { type: "MEDIA_ENGINE_SET_VIDEO_DEVICE", id: found, oldId: videoDeviceId };
      importDefault(686).dispatch(obj);
      const obj3 = importDefault(686);
    }
  },
  setActiveInputProfile(inputProfile) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const analyticsLocations = obj.analyticsLocations;
    if (!callback3()) {
      const activeInputProfile = store3.getActiveInputProfile();
      let tmp7;
      if (null != activeInputProfile) {
        tmp7 = activeInputProfile;
      }
      importDefault(8847)("active_input_profile", inputProfile, tmp7, analyticsLocations);
      const tmp3 = importDefault(8847);
      obj = { type: "AUDIO_SET_ACTIVE_INPUT_PROFILE", inputProfile };
      importDefault(686).dispatch(obj);
      const obj2 = importDefault(686);
    }
  },
  setEchoCancellation(echoCancellation, location) {
    if (!callback3()) {
      let obj = importDefault(686);
      obj = { type: "AUDIO_SET_ECHO_CANCELLATION", enabled: echoCancellation, location };
      obj.dispatch(obj);
    }
  },
  setSidechainCompression(sidechainCompression) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const analyticsLocations = obj.analyticsLocations;
    if (!callback3()) {
      importDefault(8847)("stream_attenuation_enabled", sidechainCompression, store3.getSidechainCompression(), analyticsLocations);
      const tmp3 = importDefault(8847);
      obj = { type: "AUDIO_SET_SIDECHAIN_COMPRESSION", enabled: sidechainCompression };
      importDefault(686).dispatch(obj);
      const obj2 = importDefault(686);
    }
  },
  setSidechainCompressionStrength(sidechainCompressionStrength) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const analyticsLocations = obj.analyticsLocations;
    if (!callback3()) {
      importDefault(8847)("stream_attenuation_strength", sidechainCompressionStrength, store3.getSidechainCompressionStrength(), analyticsLocations);
      const tmp3 = importDefault(8847);
      obj = { type: "AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH", strength: sidechainCompressionStrength };
      importDefault(686).dispatch(obj);
      const obj2 = importDefault(686);
    }
  },
  setLoopback(loopbackReason, enabled) {
    if (!callback3()) {
      let obj = importDefault(686);
      obj = { type: "AUDIO_SET_LOOPBACK", loopbackReason, enabled };
      obj.dispatch(obj);
    }
  },
  setNoiseSuppression(noiseSuppression, location) {
    if (!callback3()) {
      let obj = importDefault(686);
      obj = { type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: noiseSuppression, location };
      obj.dispatch(obj);
    }
  },
  setNoiseCancellation(enabled, location) {
    if (!callback3()) {
      let obj = importDefault(686);
      obj = { type: "AUDIO_SET_NOISE_CANCELLATION", enabled, location };
      obj.dispatch(obj);
      obj = { type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !enabled, location };
      importDefault(686).dispatch(obj);
      const obj3 = importDefault(686);
    }
  },
  setAutomaticGainControl(enabled, location) {
    if (!callback3()) {
      let obj = importDefault(686);
      obj = { type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL", enabled, location };
      obj.dispatch(obj);
    }
  },
  setAttenuation(attenuation, attenuateWhileSpeakingSelf, attenuateWhileSpeakingOthers) {
    if (!callback3()) {
      attenuation = store3.getAttenuation();
      attenuateWhileSpeakingSelf = store3.getAttenuateWhileSpeakingSelf();
      attenuateWhileSpeakingOthers = store3.getAttenuateWhileSpeakingOthers();
      if (attenuation !== attenuation) {
        attenuateWhileSpeakingSelf = dependencyMap;
        importDefault(8847)("global_attenuation_strength", attenuation, attenuation);
        let obj = importDefault(686);
        obj = { type: "AUDIO_SET_ATTENUATION", attenuation, attenuateWhileSpeakingSelf, attenuateWhileSpeakingOthers };
        obj.dispatch(obj);
      } else if (attenuateWhileSpeakingSelf === attenuateWhileSpeakingSelf) {
        if (attenuateWhileSpeakingOthers !== attenuateWhileSpeakingOthers) {
          importDefault(8847)("global_attenuation_for_other_speak_enabled", attenuateWhileSpeakingOthers, attenuateWhileSpeakingOthers);
        }
      }
      importDefault(8847)("global_attenuation_for_self_speak_enabled", attenuateWhileSpeakingSelf, attenuateWhileSpeakingSelf);
    }
  },
  setQoS(enabled) {
    if (!callback3()) {
      importDefault(8847)("quality_of_service_packets_enabled", enabled, store3.getQoS());
      let obj = importDefault(686);
      obj = { type: "AUDIO_SET_QOS", enabled };
      obj.dispatch(obj);
      const tmp3 = importDefault(8847);
    }
  },
  reset() {
    if (!callback3()) {
      let obj = importDefault(686);
      obj = { type: "AUDIO_RESET" };
      obj.dispatch(obj);
    }
  },
  setSilenceWarning(enabled) {
    if (!callback3()) {
      importDefault(8847)("silence_warning_enabled", enabled, store3.getEnableSilenceWarning());
      let obj = importDefault(686);
      obj = { type: "AUDIO_SET_DISPLAY_SILENCE_WARNING", enabled };
      obj.dispatch(obj);
      const tmp3 = importDefault(8847);
    }
  },
  setDebugLogging(enabled) {
    let closure_0 = enabled;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  setVideoHook(enabled) {
    if (!callback3()) {
      importDefault(8847)("video_hook_enabled", enabled, store3.getVideoHook());
      let obj = importDefault(686);
      obj = { type: "MEDIA_ENGINE_SET_VIDEO_HOOK", enabled };
      obj.dispatch(obj);
      const tmp3 = importDefault(8847);
    }
  },
  setExperimentalSoundshare(enabled) {
    if (!callback3()) {
      importDefault(8847)("experimental_soundshare_enabled", enabled, store3.getExperimentalSoundshare());
      let obj = importDefault(686);
      obj = { type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE", enabled };
      obj.dispatch(obj);
      const tmp3 = importDefault(8847);
    }
  },
  setUseSystemScreensharePicker(enabled) {
    if (!callback3()) {
      importDefault(8847)("system_screenshare_picker_enabled", enabled, store3.getUseSystemScreensharePicker());
      let obj = importDefault(686);
      obj = { type: "MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER", enabled };
      obj.dispatch(obj);
      const tmp3 = importDefault(8847);
    }
  },
  setAudioSubsystem(arg0) {
    let closure_0 = arg0;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  setVideoEnabled(enabled) {
    let obj = require(8848) /* _getFilterBlob */;
    const result = obj.applyInitialVideoBackgroundOption();
    obj = { type: "MEDIA_ENGINE_SET_VIDEO_ENABLED", enabled };
    importDefault(686).dispatch(obj);
  },
  setGoLiveSource(closure_1, STREAM) {
    let qualityOptions;
    if (null != closure_1) {
      qualityOptions = closure_1.qualityOptions;
    }
    if (null != qualityOptions) {
      let obj = require(8856) /* isPremiumRequirement */;
      const preset = closure_1.qualityOptions.preset;
      const resolution = closure_1.qualityOptions.resolution;
      const frameRate = closure_1.qualityOptions.frameRate;
      const desktopSettings = closure_1.desktopSettings;
      let sound;
      if (null != desktopSettings) {
        sound = desktopSettings.sound;
      }
      const result = obj.trackStreamSettingsUpdate(preset, resolution, frameRate, sound);
    }
    obj = { type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: closure_1 };
    importDefault(686).dispatch(obj);
  },
  setAecDump(aecDumpEnabled) {
    if (!callback3()) {
      importDefault(8847)("diagnostic_audio_recording_enabled", aecDumpEnabled, store3.getAecDump());
      let obj = importDefault(686);
      obj = { type: "MEDIA_ENGINE_SET_AEC_DUMP", enabled: aecDumpEnabled };
      obj.dispatch(obj);
      const tmp3 = importDefault(8847);
    }
  },
  interact() {
    if (!callback3()) {
      importDefault(686).dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: false });
      const obj = importDefault(686);
    }
  },
  setEnableHardwareMuteNotice(enabled) {
    if (!callback3()) {
      let obj = importDefault(686);
      obj = { type: "MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE", enabled };
      obj.dispatch(obj);
    }
  },
  setKrispSuppressionLevel(level) {
    if (!callback3()) {
      let obj = importDefault(686);
      obj = { type: "AUDIO_SET_KRISP_SUPPRESSION_LEVEL", level };
      obj.dispatch(obj);
    }
  },
  setKrispModelOverride(model) {
    const self = this;
    if (!callback3()) {
      let obj = importDefault(686);
      obj = { type: "AUDIO_SET_KRISP_MODEL_OVERRIDE", model };
      obj.dispatch(obj);
      if (store3.getNoiseCancellation()) {
        self.setNoiseCancellation(false);
        self.setNoiseCancellation(true);
      }
    }
  },
  setNoiseCancellationEnableStats(enabled) {
    callback3();
  },
  setOpenH264Enabled(enabled) {
    if (!callback3()) {
      let obj = importDefault(686);
      obj = { type: "MEDIA_ENGINE_SET_OPENH264_ENABLED", enabled };
      obj.dispatch(obj);
    }
  },
  resetMediaEngineSettings(overrides) {
    let obj = importDefault(686);
    obj = { type: "MEDIA_ENGINE_RESET_SETTINGS", overrides };
    return obj.dispatch(obj);
  }
};
let result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/AudioActionCreators.tsx");

export default obj;
