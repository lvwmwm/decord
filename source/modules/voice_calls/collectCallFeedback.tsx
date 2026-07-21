// Module ID: 12440
// Function ID: 94923
// Name: collectCallFeedback
// Dependencies: []
// Exports: default

// Module 12440 (collectCallFeedback)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/voice_calls/collectCallFeedback.tsx");

export default function collectCallFeedback(arg0, arg1, arg2, videoEnabled) {
  const voiceChannelId = voiceChannelId.getVoiceChannelId();
  const channel = channel.getChannel(voiceChannelId);
  if (null == arg1) {
    if (null != voiceChannelId) {
      if (null != channel) {
        const rTCConnection = store2.getRTCConnection();
        let voiceDurationStats;
        if (null != rTCConnection) {
          voiceDurationStats = rTCConnection.getVoiceDurationStats();
        }
        let obj = {};
        ({ id: obj3.channel_id, type: obj3.channel_type } = channel);
        obj.guild_id = channel.getGuildId();
        obj.rtc_connection_id = store2.getRTCConnectionId();
        obj.duration = store2.getDuration();
        obj.media_session_id = store2.getMediaSessionId();
        let obj3 = arg1(dependencyMap[7]);
        const guildId = store2.getGuildId();
        const merged = Object.assign(obj3.getVoiceStateMetadata(guildId, store2.getChannelId(), videoEnabled));
        let duration_muted_ms;
        if (null != voiceDurationStats) {
          duration_muted_ms = voiceDurationStats.duration_muted_ms;
        }
        let tmp13 = null;
        if (null != duration_muted_ms) {
          tmp13 = duration_muted_ms;
        }
        obj["duration_muted_ms"] = tmp13;
        obj["output_audio_route_type"] = currentRouteType.getCurrentRouteType();
        arg0();
        if (obj.hasUsedBackgroundInCall) {
          obj = {};
          const merged1 = Object.assign(obj);
          const lastUsedVideoBackgroundOption = arg1(dependencyMap[8]).getLastUsedVideoBackgroundOption(currentUser.getCurrentUser());
          const obj1 = {};
          const videoDevices = store.getVideoDevices();
          let name;
          if (null != videoDevices[closure_5.getVideoDeviceId(closure_5)]) {
            name = tmp29.name;
          }
          obj1.video_device_name = name;
          obj1.video_hardware_scaling_enabled = store.getHardwareEncoding();
          const obj8 = arg1(dependencyMap[8]);
          obj1.video_effect_type = arg1(dependencyMap[9]).getEffectAnalyticsType(lastUsedVideoBackgroundOption);
          const obj10 = arg1(dependencyMap[9]);
          obj1.video_effect_detail = arg1(dependencyMap[9]).getEffectDetailAnalyticsName(lastUsedVideoBackgroundOption);
          const merged2 = Object.assign(obj1);
          const obj11 = arg1(dependencyMap[9]);
          const obj2 = { type: "VIDEO_BACKGROUND_SHOW_FEEDBACK", analyticsData: obj };
          importDefault(dependencyMap[10]).dispatch(obj2);
          const obj12 = importDefault(dependencyMap[10]);
        } else {
          obj3 = { type: "VOICE_CHANNEL_SHOW_FEEDBACK", analyticsData: obj };
          importDefault(dependencyMap[10]).dispatch(obj3);
          const obj5 = importDefault(dependencyMap[10]);
        }
      }
    }
  }
  arg0();
};
