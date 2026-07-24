// Module ID: 12805
// Function ID: 99751
// Name: VoiceStateAnalytics
// Dependencies: [6, 7, 4177, 4146, 4203, 4191, 22, 2]

// Module 12805 (VoiceStateAnalytics)
import apply from "apply";
import set from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { SpeakingFlags } from "DesktopSources";

const require = arg1;
let tmp2 = (() => {
  class VoiceStateAnalytics {
    constructor(arg0, arg1) {
      tmp = outer1_2(this, VoiceStateAnalytics);
      this.maxVoiceStateCount = 1;
      set = new Set();
      this.totalParticipants = set;
      this.speaking = outer1_7.NONE;
      this.maxListenerCount = 0;
      set1 = new Set();
      this.totalListeners = set1;
      this.maxSpeakerCount = 0;
      this.totalSpeakers = {};
      this.userId = arg0;
      setChannelIdResult = this.setChannelId(arg1);
      return;
    }
  }
  let obj = {
    key: "updateVoiceStates",
    value(arg0, arg1) {
      const self = this;
      if (arg1 === this.channelId) {
        const totalParticipants = self.totalParticipants;
        totalParticipants.add(arg0);
        const _Math = Math;
        self.maxVoiceStateCount = Math.max(outer1_6.countVoiceStatesForChannel(arg1), self.maxVoiceStateCount);
      } else {
        if (tmp2) {
          self.totalSpeakers[arg0] = outer1_7.NONE;
        }
        if (tmp4) {
          self.setChannelId(arg1);
        }
        tmp2 = null == arg1 && arg0 in self.totalSpeakers;
        tmp4 = arg0 === self.userId && null != arg1;
      }
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "getStats",
    value() {
      return { max_voice_state_count: this.maxVoiceStateCount, total_voice_state_count: this.totalParticipants.size, max_listener_count: this.maxListenerCount, total_listener_count: this.totalListeners.size, max_speaker_count: this.maxSpeakerCount, total_speaker_count: Object.keys(this.totalSpeakers).length };
    }
  };
  items[1] = obj;
  obj = {
    key: "getUserVoiceSettingsStats",
    value(guildId) {
      const settings = outer1_4.getSettings(guildId);
      const set = new Set(Object.keys(settings.localMutes));
      const set1 = new Set(Object.keys(settings.localVolumes));
      set1.delete(this.userId);
      set.delete(this.userId);
      const obj = {};
      let arr = Array.from(set);
      obj.num_local_voice_user_mutes = VoiceStateAnalytics(outer1_1[6]).intersection(arr, Array.from(this.totalParticipants)).length;
      const obj4 = VoiceStateAnalytics(outer1_1[6]);
      arr = Array.from(set1);
      obj.num_local_voice_volumes = VoiceStateAnalytics(outer1_1[6]).intersection(arr, Array.from(this.totalParticipants)).length;
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "setSpeaking",
    value(arg0, speaking) {
      let self = this;
      self = this;
      if (speaking !== outer1_7.NONE) {
        const voiceStateForChannel = outer1_5.getVoiceStateForChannel(self.channelId, arg0);
        if (null != voiceStateForChannel) {
          if (!voiceStateForChannel.selfMute) {
            if (!voiceStateForChannel.mute) {
              self.totalSpeakers[arg0] = speaking;
              const _Object = Object;
              let values = Object.values(self.totalSpeakers);
              const _Math = Math;
              self.maxSpeakerCount = Math.max(self.maxSpeakerCount, values.filter((arg0) => arg0 !== outer2_7.NONE).length);
            }
          }
        }
      } else if (arg0 in self.totalSpeakers) {
        self.totalSpeakers[arg0] = outer1_7.NONE;
      }
      if (self.userId === arg0) {
        if (speaking !== self.speaking) {
          if (speaking !== outer1_7.NONE) {
            const _Object2 = Object;
            values = Object.values(outer1_5.getVoiceStatesForChannel(self.channelId));
            const found = values.filter((selfDeaf) => !selfDeaf.selfDeaf && !selfDeaf.deaf);
            const item = found.forEach((userId) => {
              const totalListeners = self.totalListeners;
              return totalListeners.add(userId.userId);
            });
            const _Math2 = Math;
            self.maxListenerCount = Math.max(found.length, self.maxListenerCount);
          }
          self.speaking = speaking;
        }
      }
    }
  };
  items[4] = {
    key: "setChannelId",
    value(channelId) {
      let self = this;
      self = this;
      if (channelId !== this.channelId) {
        self.channelId = channelId;
        const _Set = Set;
        const items = [self.userId];
        const set = new Set(items);
        self.totalParticipants = set;
        const _Object = Object;
        const keys = Object.keys(outer1_5.getVoiceStatesForChannel(self.channelId));
        const item = keys.forEach((arg0) => {
          const totalParticipants = self.totalParticipants;
          return totalParticipants.add(arg0);
        });
        self.maxVoiceStateCount = keys.length;
        self.speaking = outer1_7.NONE;
        self.maxListenerCount = 0;
        const _Set2 = Set;
        const set1 = new Set();
        self.totalListeners = set1;
        self.maxSpeakerCount = 0;
        self.totalSpeakers = {};
      }
    }
  };
  return callback(VoiceStateAnalytics, items);
})();
const result = require("_isNativeReflectConstruct").fileFinishedImporting("lib/VoiceStateAnalytics.tsx");

export default tmp2;
