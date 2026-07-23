// Module ID: 10577
// Function ID: 82575
// Name: map
// Dependencies: [6, 7, 1194, 1348, 4222, 4202, 4146, 653, 3, 4206, 675, 2]

// Module 10577 (map)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
const map = new Map();
const tmp3 = (() => {
  class VideoSpinnerTimer {
    constructor(arg0) {
      tmp = outer1_3(this, VideoSpinnerTimer);
      this.spinnerVisibleStart = null;
      tmp2 = outer1_1(outer1_2[8]);
      tmp2 = new tmp2(arg0);
      this.logger = tmp2;
      return;
    }
  }
  let obj = {
    key: "onSpinnerStarted",
    value() {
      if (null == this.spinnerVisibleStart) {
        tmp.spinnerVisibleStart = VideoSpinnerTimer(outer1_2[9]).now();
        const obj = VideoSpinnerTimer(outer1_2[9]);
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "trackSpinnerDuration",
    value(video_spinner_context, spinning_user_id) {
      const self = this;
      if (null != this.spinnerVisibleStart) {
        const value = outer1_11.get(arg2);
        let num = 0;
        if (null != value) {
          num = value;
        }
        const sum = num + 1;
        const result = outer1_11.set(arg2, sum);
        let obj = VideoSpinnerTimer(outer1_2[9]);
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
          const guildId = outer1_8.getGuildId();
          const userVoiceChannelId = outer1_9.getUserVoiceChannelId(guildId, outer1_5.getId());
          const channel = outer1_6.getChannel(userVoiceChannelId);
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
          obj = { video_spinner_context, duration_video_spinner_visible_ms: diff, rtc_connection_id: outer1_8.getRTCConnectionId(), media_session_id: outer1_8.getMediaSessionId(), event_count_for_stream: sum, guild_id: guildId, channel_id: userVoiceChannelId, channel_type: str, spinning_user_id, connection_type: outer1_7.getType(), effective_connection_speed: outer1_7.getEffectiveConnectionSpeed(), service_provider: outer1_7.getServiceProvider() };
          outer1_1(outer1_2[10]).track(outer1_10.VIDEO_SPINNER_SHOWN_V2, obj);
          const obj2 = outer1_1(outer1_2[10]);
        }
      }
    }
  };
  items[1] = obj;
  return callback(VideoSpinnerTimer, items);
})();
let result = require("_isNativeReflectConstruct").fileFinishedImporting("lib/VideoSpinnerTimer.tsx");

export const VideoSpinnerContext = { SELF_VIDEO: "self_video", SELF_STREAM: "self_stream", REMOTE_VIDEO: "remote_video", REMOTE_STREAM: "remote_stream", CHANGE_VIDEO_BACKGROUND: "change_video_background", REPLAY_VIDEO_STREAM: "replay_video_stream" };
export const VideoSpinnerTimer = tmp3;
