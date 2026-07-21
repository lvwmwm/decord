// Module ID: 12635
// Function ID: 97246
// Name: VoiceStateAnalytics
// Dependencies: []

// Module 12635 (VoiceStateAnalytics)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const SpeakingFlags = arg1(dependencyMap[5]).SpeakingFlags;
const tmp2 = () => {
  class VoiceStateAnalytics {
    constructor(arg0, arg1) {
      tmp = closure_2(this, VoiceStateAnalytics);
      this.maxVoiceStateCount = 1;
      set = new Set();
      this.totalParticipants = set;
      this.speaking = closure_7.NONE;
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
  const arg1 = VoiceStateAnalytics;
  let obj = {
    key: "updateVoiceStates",
    value(arg0, arg1) {
      const self = this;
      if (arg1 === this.channelId) {
        const totalParticipants = self.totalParticipants;
        totalParticipants.add(arg0);
        const _Math = Math;
        self.maxVoiceStateCount = Math.max(closure_6.countVoiceStatesForChannel(arg1), self.maxVoiceStateCount);
      } else {
        if (tmp2) {
          self.totalSpeakers[arg0] = constants.NONE;
        }
        if (tmp4) {
          self.setChannelId(arg1);
        }
        const tmp2 = null == arg1 && arg0 in self.totalSpeakers;
        const tmp4 = arg0 === self.userId && null != arg1;
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getStats",
    value() {
      return { max_voice_state_count: this.maxVoiceStateCount, total_voice_state_count: this.totalParticipants.size, max_listener_count: this.maxListenerCount, total_listener_count: this.totalListeners.size, max_speaker_count: this.maxSpeakerCount, total_speaker_count: Object.keys(this.totalSpeakers).length };
    }
  };
  items[1] = obj;
  obj = {
    key: "getUserVoiceSettingsStats",
    value(closure_0) {
      const settings = settings.getSettings(closure_0);
      const set = new Set(Object.keys(settings.localMutes));
      const set1 = new Set(Object.keys(settings.localVolumes));
      set1.delete(this.userId);
      set.delete(this.userId);
      const obj = {};
      let arr = Array.from(set);
      obj.num_local_voice_user_mutes = VoiceStateAnalytics(closure_1[6]).intersection(arr, Array.from(this.totalParticipants)).length;
      const obj4 = VoiceStateAnalytics(closure_1[6]);
      arr = Array.from(set1);
      obj.num_local_voice_volumes = VoiceStateAnalytics(closure_1[6]).intersection(arr, Array.from(this.totalParticipants)).length;
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "setSpeaking",
    value(arg0, speaking) {
      const self = this;
      const VoiceStateAnalytics = this;
      if (speaking !== constants.NONE) {
        const voiceStateForChannel = store.getVoiceStateForChannel(self.channelId, arg0);
        if (null != voiceStateForChannel) {
          if (!voiceStateForChannel.selfMute) {
            if (!voiceStateForChannel.mute) {
              self.totalSpeakers[arg0] = speaking;
              const _Object = Object;
              let values = Object.values(self.totalSpeakers);
              const _Math = Math;
              self.maxSpeakerCount = Math.max(self.maxSpeakerCount, values.filter((arg0) => arg0 !== constants.NONE).length);
            }
          }
        }
      } else if (arg0 in self.totalSpeakers) {
        self.totalSpeakers[arg0] = constants.NONE;
      }
      if (self.userId === arg0) {
        if (speaking !== self.speaking) {
          if (speaking !== constants.NONE) {
            const _Object2 = Object;
            values = Object.values(store.getVoiceStatesForChannel(self.channelId));
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
      const self = this;
      const VoiceStateAnalytics = this;
      if (channelId !== this.channelId) {
        self.channelId = channelId;
        const _Set = Set;
        const items = [self.userId];
        const set = new Set(items);
        self.totalParticipants = set;
        const _Object = Object;
        const keys = Object.keys(store.getVoiceStatesForChannel(self.channelId));
        const item = keys.forEach((arg0) => {
          const totalParticipants = self.totalParticipants;
          return totalParticipants.add(arg0);
        });
        self.maxVoiceStateCount = keys.length;
        self.speaking = constants.NONE;
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
}();
const result = arg1(dependencyMap[7]).fileFinishedImporting("lib/VoiceStateAnalytics.tsx");

export default tmp2;
