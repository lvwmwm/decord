// Module ID: 10567
// Function ID: 82525
// Name: map
// Dependencies: []

// Module 10567 (map)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const AnalyticEvents = arg1(dependencyMap[7]).AnalyticEvents;
const map = new Map();
const tmp3 = () => {
  class VideoSpinnerTimer {
    constructor(arg0) {
      tmp = closure_3(this, VideoSpinnerTimer);
      this.spinnerVisibleStart = null;
      tmp2 = closure_1(closure_2[8]);
      tmp2 = new tmp2(arg0);
      this.logger = tmp2;
      return;
    }
  }
  const arg1 = VideoSpinnerTimer;
  let obj = {
    key: "onSpinnerStarted",
    value() {
      if (null == this.spinnerVisibleStart) {
        tmp.spinnerVisibleStart = VideoSpinnerTimer(closure_2[9]).now();
        const obj = VideoSpinnerTimer(closure_2[9]);
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "trackSpinnerDuration",
    value(video_spinner_context, spinning_user_id) {
      const self = this;
      if (null != this.spinnerVisibleStart) {
        const value = store2.get(arg2);
        let num = 0;
        if (null != value) {
          num = value;
        }
        const sum = num + 1;
        const result = store2.set(arg2, sum);
        let obj = VideoSpinnerTimer(closure_2[9]);
        const diff = obj.now() - self.spinnerVisibleStart;
        self.spinnerVisibleStart = null;
        if (diff < 0) {
          const logger = self.logger;
          const _HermesInternal = HermesInternal;
          logger.warn("spinner duration is negative: " + diff + " ms\n        [" + video_spinner_context + ", count for stream: " + sum + "]");
        } else {
          const logger2 = self.logger;
          const _HermesInternal2 = HermesInternal;
          logger2.info("spinner visible for " + diff + " ms\n      [" + video_spinner_context + ", count for stream: " + sum + "]");
          const guildId = guildId.getGuildId();
          const userVoiceChannelId = userVoiceChannelId.getUserVoiceChannelId(guildId, id.getId());
          const channel = channel.getChannel(userVoiceChannelId);
          let str = null;
          if (null != channel) {
            str = "guild_voice";
            if (!channel.isGuildVoice()) {
              str = "is_stage_channel";
              if (!channel.isGuildStageVoice()) {
                str = "dm";
                if (!channel.isDM()) {
                  str = null;
                  if (channel.isGroupDM()) {
                    str = "group_dm";
                  }
                }
              }
            }
          }
          obj = { video_spinner_context, duration_video_spinner_visible_ms: diff, rtc_connection_id: guildId.getRTCConnectionId(), media_session_id: guildId.getMediaSessionId(), event_count_for_stream: sum, guild_id: guildId, channel_id: userVoiceChannelId, channel_type: str, spinning_user_id, connection_type: store.getType(), effective_connection_speed: store.getEffectiveConnectionSpeed(), service_provider: store.getServiceProvider() };
          callback(closure_2[10]).track(obj.VIDEO_SPINNER_SHOWN_V2, obj);
          const obj2 = callback(closure_2[10]);
        }
      }
    }
  };
  items[1] = obj;
  return callback(VideoSpinnerTimer, items);
}();
const result = arg1(dependencyMap[11]).fileFinishedImporting("lib/VideoSpinnerTimer.tsx");

export const VideoSpinnerContext = { SELF_VIDEO: "self_video", SELF_STREAM: "self_stream", REMOTE_VIDEO: "remote_video", REMOTE_STREAM: "remote_stream", CHANGE_VIDEO_BACKGROUND: "change_video_background", REPLAY_VIDEO_STREAM: "replay_video_stream" };
export const VideoSpinnerTimer = tmp3;
