// Module ID: 15480
// Function ID: 15481
// Name: collectCallFeedback
// Dependencies: [5907, 4858, 2007, 5759, 4912, 1384, 5779, 5755, 5911, 5912, 572, 2]
// Exports: default

// Module 15480 (collectCallFeedback)
import DispatcherDefault from "Dispatcher" /* 572 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5755 */;
import LastUsedVideoBackgroundOption from "LastUsedVideoBackgroundOption" /* 5911 */;
import VideoBackgroundUtils from "VideoBackgroundUtils" /* 5912 */;
import VideoBackgroundStore from "VideoBackgroundStore" /* 5907 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import MediaEngineStore from "MediaEngineStore" /* 2007 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5759 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import UserStore from "UserStore" /* 1384 */;
import AudioRouteStore from "AudioRouteStore" /* 5779 */;
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
