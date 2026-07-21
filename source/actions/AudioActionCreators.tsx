// Module ID: 8835
// Function ID: 69678
// Name: getInputDeviceName
// Dependencies: []

// Module 8835 (getInputDeviceName)
function getInputDeviceName() {
  const inputDevices = store3.getInputDevices();
  let str = "";
  if (null != inputDevices[closure_6.getInputDeviceId(closure_6)]) {
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
    importDefault(dependencyMap[11]).track(constants2.MEDIA_DEVICE_CHANGED, obj);
    const obj4 = importDefault(dependencyMap[11]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ InputModes: closure_10, AnalyticEvents: closure_11 } = arg1(dependencyMap[7]));
const SoundOutputChannel = arg1(dependencyMap[8]).SoundOutputChannel;
const MediaEngineContextTypes = arg1(dependencyMap[9]).MediaEngineContextTypes;
let importDefaultResult = importDefault(dependencyMap[10]);
importDefaultResult = new importDefaultResult("AudioActionCreators");
importDefaultResult.enableNativeLogger(true);
let closure_14 = importDefault(dependencyMap[12])((target_user_id, context, volume) => {
  let obj = importDefault(dependencyMap[11]);
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
        resolved = importDefault(dependencyMap[13]).dispatch(obj);
        const obj4 = importDefault(dependencyMap[13]);
      } else {
        resolved = self.enable(true);
      }
      const tmp7 = null != currentUser && currentUser.isStaff();
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
      const tmp4 = null != currentUser && currentUser.isStaff();
      const obj = { type: "AUDIO_SET_SELF_MUTE", context: DEFAULT, mute: pendingMutePreference, playSoundEffect: flag };
      importDefault(dependencyMap[13]).dispatch(obj);
      const obj2 = importDefault(dependencyMap[13]);
    }
  },
  setTemporarySelfMute(mute) {
    if (!callback3()) {
      const currentUser = authStore.getCurrentUser();
      if (tmp3) {
        importDefaultResult.info("Setting temporary self mute", mute);
      }
      const tmp3 = null != currentUser && currentUser.isStaff();
      const obj = { type: "AUDIO_SET_TEMPORARY_SELF_MUTE", mute };
      importDefault(dependencyMap[13]).dispatch(obj);
      const obj2 = importDefault(dependencyMap[13]);
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
      importDefault(dependencyMap[13]).dispatch(obj);
      const obj3 = importDefault(dependencyMap[13]);
    }
  },
  toggleLocalMute(id, arg1) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    if (!callback3()) {
      let obj = importDefault(dependencyMap[13]);
      obj = { type: "AUDIO_TOGGLE_LOCAL_MUTE", context: DEFAULT, userId: id };
      obj.dispatch(obj);
    }
  },
  toggleLocalSoundboardMute(id) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let obj = importDefault(dependencyMap[13]);
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
      let obj = importDefault(dependencyMap[13]);
      obj = { type: "AUDIO_SET_LOCAL_VIDEO_DISABLED", context: DEFAULT, userId: id, videoToggleState: MANUAL_ENABLED, persist: flag, isAutomatic: flag2 };
      obj.dispatch(obj);
    }
  },
  setLocalVolume(ownerId, volume, STREAM) {
    let DEFAULT = STREAM;
    if (STREAM === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let obj = volume(dependencyMap[14]);
    const snapVolumeToDefaultResult = obj.snapVolumeToDefault(volume, DEFAULT);
    obj = { type: "AUDIO_SET_LOCAL_VOLUME", context: DEFAULT, userId: ownerId, volume: snapVolumeToDefaultResult };
    importDefault(dependencyMap[13]).dispatch(obj);
    callback2(ownerId, DEFAULT, snapVolumeToDefaultResult);
  },
  setAudioMixerSettings(settings, DEFAULT) {
    if (DEFAULT === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let obj = importDefault(dependencyMap[13]);
    obj = { type: "AUDIO_SET_AUDIO_MIXER_SETTINGS", context: DEFAULT, settings };
    obj.dispatch(obj);
  },
  setLocalPan(result2, left, right) {
    let DEFAULT = arg3;
    if (arg3 === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    let obj = importDefault(dependencyMap[13]);
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
      let obj2 = importDefault(dependencyMap[13]);
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
        importDefault(dependencyMap[11]).track(constants2.VOICE_ACTIVATION_MODE_CHANGED, obj2);
        const obj10 = importDefault(dependencyMap[11]);
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
          importDefault(dependencyMap[11]).track(constants2.VOICE_ACTIVITY_THRESHOLD_CHANGED, obj3);
          const obj6 = importDefault(dependencyMap[11]);
        }
      }
    }
  },
  setBypassSystemInputProcessing(bypassEnabled, location) {
    if (!callback3()) {
      let obj = importDefault(dependencyMap[13]);
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
      importDefault(dependencyMap[13]).dispatch(obj);
      const voiceChannelId = store5.getVoiceChannelId();
      let channel = null;
      if (null != voiceChannelId) {
        channel = store2.getChannel(voiceChannelId);
      }
      const obj2 = importDefault(dependencyMap[13]);
      obj = { volume: inputVolume };
      obj.location_stack = obj.analyticsLocations;
      let type;
      if (null != channel) {
        type = channel.type;
      }
      obj.voice_channel_type = type;
      importDefault(dependencyMap[11]).track(constants2.MEDIA_INPUT_VOLUME_CHANGED, obj);
      const obj4 = importDefault(dependencyMap[11]);
    }
  },
  setOutputVolume(closure_45) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (!callback3()) {
      obj = { type: "AUDIO_SET_OUTPUT_VOLUME", volume: closure_45 };
      importDefault(dependencyMap[13]).dispatch(obj);
      const voiceChannelId = store5.getVoiceChannelId();
      let channel = null;
      if (null != voiceChannelId) {
        channel = store2.getChannel(voiceChannelId);
      }
      const obj2 = importDefault(dependencyMap[13]);
      obj = { volume: closure_45 };
      obj.location_stack = obj.analyticsLocations;
      let type;
      if (null != channel) {
        type = channel.type;
      }
      obj.voice_channel_type = type;
      importDefault(dependencyMap[11]).track(constants2.MEDIA_OUTPUT_VOLUME_CHANGED, obj);
      const obj4 = importDefault(dependencyMap[11]);
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
      importDefault(dependencyMap[13]).dispatch(obj);
      const obj3 = importDefault(dependencyMap[13]);
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
      importDefault(dependencyMap[13]).dispatch(obj);
      const obj3 = importDefault(dependencyMap[13]);
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
      importDefault(dependencyMap[13]).dispatch(obj);
      const obj3 = importDefault(dependencyMap[13]);
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
      importDefault(dependencyMap[15])("active_input_profile", inputProfile, tmp7, analyticsLocations);
      const tmp3 = importDefault(dependencyMap[15]);
      obj = { type: "AUDIO_SET_ACTIVE_INPUT_PROFILE", inputProfile };
      importDefault(dependencyMap[13]).dispatch(obj);
      const obj2 = importDefault(dependencyMap[13]);
    }
  },
  setEchoCancellation(echoCancellation, location) {
    if (!callback3()) {
      let obj = importDefault(dependencyMap[13]);
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
      importDefault(dependencyMap[15])("stream_attenuation_enabled", sidechainCompression, store3.getSidechainCompression(), analyticsLocations);
      const tmp3 = importDefault(dependencyMap[15]);
      obj = { type: "AUDIO_SET_SIDECHAIN_COMPRESSION", enabled: sidechainCompression };
      importDefault(dependencyMap[13]).dispatch(obj);
      const obj2 = importDefault(dependencyMap[13]);
    }
  },
  setSidechainCompressionStrength(sidechainCompressionStrength) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const analyticsLocations = obj.analyticsLocations;
    if (!callback3()) {
      importDefault(dependencyMap[15])("stream_attenuation_strength", sidechainCompressionStrength, store3.getSidechainCompressionStrength(), analyticsLocations);
      const tmp3 = importDefault(dependencyMap[15]);
      obj = { type: "AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH", strength: sidechainCompressionStrength };
      importDefault(dependencyMap[13]).dispatch(obj);
      const obj2 = importDefault(dependencyMap[13]);
    }
  },
  setLoopback(loopbackReason, enabled) {
    if (!callback3()) {
      let obj = importDefault(dependencyMap[13]);
      obj = { type: "AUDIO_SET_LOOPBACK", loopbackReason, enabled };
      obj.dispatch(obj);
    }
  },
  setNoiseSuppression(noiseSuppression, location) {
    if (!callback3()) {
      let obj = importDefault(dependencyMap[13]);
      obj = { type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: noiseSuppression, location };
      obj.dispatch(obj);
    }
  },
  setNoiseCancellation(enabled, location) {
    if (!callback3()) {
      let obj = importDefault(dependencyMap[13]);
      obj = { type: "AUDIO_SET_NOISE_CANCELLATION", enabled, location };
      obj.dispatch(obj);
      obj = { type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !enabled, location };
      importDefault(dependencyMap[13]).dispatch(obj);
      const obj3 = importDefault(dependencyMap[13]);
    }
  },
  setAutomaticGainControl(enabled, location) {
    if (!callback3()) {
      let obj = importDefault(dependencyMap[13]);
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
        importDefault(dependencyMap[15])("global_attenuation_strength", attenuation, attenuation);
        let obj = importDefault(dependencyMap[13]);
        obj = { type: "AUDIO_SET_ATTENUATION", attenuation, attenuateWhileSpeakingSelf, attenuateWhileSpeakingOthers };
        obj.dispatch(obj);
      } else if (attenuateWhileSpeakingSelf === attenuateWhileSpeakingSelf) {
        if (attenuateWhileSpeakingOthers !== attenuateWhileSpeakingOthers) {
          importDefault(dependencyMap[15])("global_attenuation_for_other_speak_enabled", attenuateWhileSpeakingOthers, attenuateWhileSpeakingOthers);
        }
      }
      importDefault(dependencyMap[15])("global_attenuation_for_self_speak_enabled", attenuateWhileSpeakingSelf, attenuateWhileSpeakingSelf);
    }
  },
  setQoS(enabled) {
    if (!callback3()) {
      importDefault(dependencyMap[15])("quality_of_service_packets_enabled", enabled, store3.getQoS());
      let obj = importDefault(dependencyMap[13]);
      obj = { type: "AUDIO_SET_QOS", enabled };
      obj.dispatch(obj);
      const tmp3 = importDefault(dependencyMap[15]);
    }
  },
  reset() {
    if (!callback3()) {
      let obj = importDefault(dependencyMap[13]);
      obj = { type: "AUDIO_RESET" };
      obj.dispatch(obj);
    }
  },
  setSilenceWarning(enabled) {
    if (!callback3()) {
      importDefault(dependencyMap[15])("silence_warning_enabled", enabled, store3.getEnableSilenceWarning());
      let obj = importDefault(dependencyMap[13]);
      obj = { type: "AUDIO_SET_DISPLAY_SILENCE_WARNING", enabled };
      obj.dispatch(obj);
      const tmp3 = importDefault(dependencyMap[15]);
    }
  },
  setDebugLogging(enabled) {
    const arg1 = enabled;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  setVideoHook(enabled) {
    if (!callback3()) {
      importDefault(dependencyMap[15])("video_hook_enabled", enabled, store3.getVideoHook());
      let obj = importDefault(dependencyMap[13]);
      obj = { type: "MEDIA_ENGINE_SET_VIDEO_HOOK", enabled };
      obj.dispatch(obj);
      const tmp3 = importDefault(dependencyMap[15]);
    }
  },
  setExperimentalSoundshare(enabled) {
    if (!callback3()) {
      importDefault(dependencyMap[15])("experimental_soundshare_enabled", enabled, store3.getExperimentalSoundshare());
      let obj = importDefault(dependencyMap[13]);
      obj = { type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE", enabled };
      obj.dispatch(obj);
      const tmp3 = importDefault(dependencyMap[15]);
    }
  },
  setUseSystemScreensharePicker(enabled) {
    if (!callback3()) {
      importDefault(dependencyMap[15])("system_screenshare_picker_enabled", enabled, store3.getUseSystemScreensharePicker());
      let obj = importDefault(dependencyMap[13]);
      obj = { type: "MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER", enabled };
      obj.dispatch(obj);
      const tmp3 = importDefault(dependencyMap[15]);
    }
  },
  setAudioSubsystem(arg0) {
    const arg1 = arg0;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  setVideoEnabled(enabled) {
    let obj = arg1(dependencyMap[16]);
    const result = obj.applyInitialVideoBackgroundOption();
    obj = { type: "MEDIA_ENGINE_SET_VIDEO_ENABLED", enabled };
    importDefault(dependencyMap[13]).dispatch(obj);
  },
  setGoLiveSource(qualityOptions, STREAM) {
    qualityOptions = undefined;
    if (null != qualityOptions) {
      qualityOptions = qualityOptions.qualityOptions;
    }
    if (null != qualityOptions) {
      let obj = STREAM(dependencyMap[17]);
      const preset = qualityOptions.qualityOptions.preset;
      const resolution = qualityOptions.qualityOptions.resolution;
      const frameRate = qualityOptions.qualityOptions.frameRate;
      const desktopSettings = qualityOptions.desktopSettings;
      let sound;
      if (null != desktopSettings) {
        sound = desktopSettings.sound;
      }
      const result = obj.trackStreamSettingsUpdate(preset, resolution, frameRate, sound);
    }
    obj = { type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: qualityOptions };
    importDefault(dependencyMap[13]).dispatch(obj);
  },
  setAecDump(aecDumpEnabled) {
    if (!callback3()) {
      importDefault(dependencyMap[15])("diagnostic_audio_recording_enabled", aecDumpEnabled, store3.getAecDump());
      let obj = importDefault(dependencyMap[13]);
      obj = { type: "MEDIA_ENGINE_SET_AEC_DUMP", enabled: aecDumpEnabled };
      obj.dispatch(obj);
      const tmp3 = importDefault(dependencyMap[15]);
    }
  },
  interact() {
    if (!callback3()) {
      importDefault(dependencyMap[13]).dispatch({ pointerEvents: "png", width: true });
      const obj = importDefault(dependencyMap[13]);
    }
  },
  setEnableHardwareMuteNotice(enabled) {
    if (!callback3()) {
      let obj = importDefault(dependencyMap[13]);
      obj = { type: "MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE", enabled };
      obj.dispatch(obj);
    }
  },
  setKrispSuppressionLevel(level) {
    if (!callback3()) {
      let obj = importDefault(dependencyMap[13]);
      obj = { type: "AUDIO_SET_KRISP_SUPPRESSION_LEVEL", level };
      obj.dispatch(obj);
    }
  },
  setKrispModelOverride(model) {
    const self = this;
    if (!callback3()) {
      let obj = importDefault(dependencyMap[13]);
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
      let obj = importDefault(dependencyMap[13]);
      obj = { type: "MEDIA_ENGINE_SET_OPENH264_ENABLED", enabled };
      obj.dispatch(obj);
    }
  },
  resetMediaEngineSettings(overrides) {
    let obj = importDefault(dependencyMap[13]);
    obj = { type: "MEDIA_ENGINE_RESET_SETTINGS", overrides };
    return obj.dispatch(obj);
  }
};
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("actions/AudioActionCreators.tsx");

export default obj;
