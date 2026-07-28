// Module ID: 12667
// Function ID: 97752
// Name: collectCallFeedback
// Dependencies: [8820, 1348, 4212, 4237, 1907, 1850, 8808, 4359, 8824, 8821, 686, 2]
// Exports: default

// Module 12667 (collectCallFeedback)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_calls/collectCallFeedback.tsx");

export default function collectCallFeedback(arg0, arg1, arg2, videoEnabled) {
  voiceChannelId = voiceChannelId.getVoiceChannelId();
  channel = channel.getChannel(voiceChannelId);
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
        let obj3 = require(4359) /* _createForOfIteratorHelperLoose */;
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
          const lastUsedVideoBackgroundOption = require(8824) /* getOptionFromSettingsFiltered */.getLastUsedVideoBackgroundOption(currentUser.getCurrentUser());
          const obj1 = {};
          const videoDevices = store.getVideoDevices();
          const tmp29 = videoDevices[store.getVideoDeviceId(store)];
          let name;
          if (null != tmp29) {
            name = tmp29.name;
          }
          obj1.video_device_name = name;
          obj1.video_hardware_scaling_enabled = store.getHardwareEncoding();
          const obj8 = require(8824) /* getOptionFromSettingsFiltered */;
          obj1.video_effect_type = require(8821) /* isCustomBackgroundOption */.getEffectAnalyticsType(lastUsedVideoBackgroundOption);
          const obj10 = require(8821) /* isCustomBackgroundOption */;
          obj1.video_effect_detail = require(8821) /* isCustomBackgroundOption */.getEffectDetailAnalyticsName(lastUsedVideoBackgroundOption);
          const merged2 = Object.assign(obj1);
          const obj11 = require(8821) /* isCustomBackgroundOption */;
          const obj2 = { type: "VIDEO_BACKGROUND_SHOW_FEEDBACK", analyticsData: obj };
          importDefault(686).dispatch(obj2);
          const obj12 = importDefault(686);
        } else {
          obj3 = { type: "VOICE_CHANNEL_SHOW_FEEDBACK", analyticsData: obj };
          importDefault(686).dispatch(obj3);
          const obj5 = importDefault(686);
        }
      }
    }
  }
  arg0();
};
