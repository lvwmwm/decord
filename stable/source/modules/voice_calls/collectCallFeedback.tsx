// Module ID: 13716
// Function ID: 13717
// Name: collectCallFeedback
// Dependencies: [9225, 1957, 1908, 4659, 2011, 1371, 9212, 4816, 9229, 9226, 573, 2]
// Exports: default

// Module 13716 (collectCallFeedback)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4816 */;
import VideoBackgroundStore from "VideoBackgroundStore" /* 9225 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4659 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import UserStore from "UserStore" /* 1371 */;
import AudioRouteStore from "AudioRouteStore" /* 9212 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/collectCallFeedback.tsx");

export default function collectCallFeedback(fn, arg1, arg2, videoEnabled) {
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
        const obj = { channel_id: null, channel_type: null, guild_id: null, rtc_connection_id: null, duration: null, media_session_id: null };
        ({ id: obj4.channel_id, type: obj4.channel_type } = channel);
        obj.guild_id = channel.getGuildId();
        obj.rtc_connection_id = RTCConnectionStore.getRTCConnectionId();
        obj.duration = RTCConnectionStore.getDuration();
        obj.media_session_id = RTCConnectionStore.getMediaSessionId();
        const guildId = obj2.getGuildId();
        const merged = Object.assign(AppAnalyticsUtils.getVoiceStateMetadata(guildId, obj2.getChannelId(), videoEnabled));
        let duration_muted_ms;
        if (voiceDurationStats != null) {
          duration_muted_ms = voiceDurationStats.duration_muted_ms;
        }
        if (duration_muted_ms == null) {
          duration_muted_ms = null;
        }
        obj.duration_muted_ms = duration_muted_ms;
        obj.output_audio_route_type = AudioRouteStore.getCurrentRouteType();
        fn();
        if (VideoBackgroundStore.hasUsedBackgroundInCall) {
          const obj3 = {};
          const merged1 = Object.assign(obj);
          const lastUsedVideoBackgroundOption = tmp5(9229).getLastUsedVideoBackgroundOption(UserStore.getCurrentUser());
          const videoDevices = MediaEngineStore.getVideoDevices();
          const tmp22 = videoDevices[MediaEngineStore.getVideoDeviceId(MediaEngineStore)];
          let name;
          if (tmp22 != null) {
            name = tmp22.name;
          }
          const obj7 = { video_device_name: name, video_hardware_scaling_enabled: MediaEngineStore.getHardwareEncoding(), video_effect_type: null, video_effect_detail: null };
          const tmp5Result = tmp5(9229);
          obj7.video_effect_type = tmp5(9226).getEffectAnalyticsType(lastUsedVideoBackgroundOption);
          const tmp5Result3 = tmp5(9226);
          obj7.video_effect_detail = tmp5(9226).getEffectDetailAnalyticsName(lastUsedVideoBackgroundOption);
          const merged2 = Object.assign(obj7);
          const tmp5Result4 = tmp5(9226);
          const obj8 = { type: "VIDEO_BACKGROUND_SHOW_FEEDBACK", analyticsData: obj3 };
          DispatcherDefault.dispatch(obj8);
        } else {
          const obj9 = { type: "VOICE_CHANNEL_SHOW_FEEDBACK", analyticsData: obj };
          DispatcherDefault.dispatch(obj9);
        }
      }
    }
  }
  fn();
};
