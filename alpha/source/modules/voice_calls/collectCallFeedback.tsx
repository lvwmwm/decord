// Module ID: 13850
// Function ID: 13851
// Name: collectCallFeedback
// Dependencies: [5253, 2064, 2012, 5109, 2115, 1390, 5131, 5106, 5257, 5258, 584, 2]
// Exports: default

// Module 13850 (collectCallFeedback)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5106 */;
import LastUsedVideoBackgroundOption from "LastUsedVideoBackgroundOption" /* 5257 */;
import VideoBackgroundUtils from "VideoBackgroundUtils" /* 5258 */;
import VideoBackgroundStore from "VideoBackgroundStore" /* 5253 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5109 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import UserStore from "UserStore" /* 1390 */;
import AudioRouteStore from "AudioRouteStore" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_calls/collectCallFeedback.tsx");

export default function collectCallFeedback(fn, arg1, arg2, videoEnabled) {
  let duration_muted_ms;
  let tmp5Result3;
  let tmp5Result4;
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  const channel = ChannelStore.getChannel(voiceChannelId);
  if (null == arg1) {
    if (null != voiceChannelId) {
      if (null != channel) {
        const rTCConnection = RTCConnectionStore.getRTCConnection();
        let voiceDurationStats;
        if (rTCConnection != null) {
          voiceDurationStats = rTCConnection.getVoiceDurationStats();
        }
        const obj = { channel_id: null, channel_type: null, guild_id: channel.getGuildId(), rtc_connection_id: RTCConnectionStore.getRTCConnectionId(), duration: RTCConnectionStore.getDuration(), media_session_id: RTCConnectionStore.getMediaSessionId(), duration_muted_ms, output_audio_route_type: AudioRouteStore.getCurrentRouteType() };
        ({ id: obj4.channel_id, type: obj4.channel_type } = channel);
        const getVoiceStateMetadata = AppAnalyticsUtils.getVoiceStateMetadata;
        AppAnalyticsUtils;
        const guildId = obj2.getGuildId();
        const merged = Object.assign(getVoiceStateMetadata(guildId, obj2.getChannelId(), videoEnabled));
        duration_muted_ms = undefined;
        if (voiceDurationStats != null) {
          duration_muted_ms = voiceDurationStats.duration_muted_ms;
        }
        if (duration_muted_ms == null) {
          duration_muted_ms = null;
        }
        fn();
        if (VideoBackgroundStore.hasUsedBackgroundInCall) {
          const obj3 = {};
          const merged1 = Object.assign(obj);
          const tmp5Result = LastUsedVideoBackgroundOption;
          const lastUsedVideoBackgroundOption = tmp5Result.getLastUsedVideoBackgroundOption(UserStore.getCurrentUser());
          const videoDevices = MediaEngineStore.getVideoDevices();
          const tmp23 = videoDevices[MediaEngineStore.getVideoDeviceId(MediaEngineStore)];
          let name;
          const obj9 = MediaEngineStore;
          if (tmp23 != null) {
            name = tmp23.name;
          }
          const obj6 = { video_device_name: name, video_hardware_scaling_enabled: obj9.getHardwareEncoding(), video_effect_type: tmp5Result3.getEffectAnalyticsType(lastUsedVideoBackgroundOption), video_effect_detail: tmp5Result4.getEffectDetailAnalyticsName(lastUsedVideoBackgroundOption) };
          tmp5Result3 = VideoBackgroundUtils;
          tmp5Result4 = VideoBackgroundUtils;
          const merged2 = Object.assign(obj6);
          const obj7 = { type: "VIDEO_BACKGROUND_SHOW_FEEDBACK", analyticsData: obj3 };
          const obj13 = DispatcherDefault;
          obj13.dispatch(obj7);
        } else {
          const obj8 = { type: "VOICE_CHANNEL_SHOW_FEEDBACK", analyticsData: obj };
          const obj5 = DispatcherDefault;
          obj5.dispatch(obj8);
        }
      }
    }
  }
  fn();
};
