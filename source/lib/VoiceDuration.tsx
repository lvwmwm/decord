// Module ID: 12800
// Function ID: 99644
// Name: VoiceDuration
// Dependencies: [6, 7, 4206, 4282, 2]

// Module 12800 (VoiceDuration)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
let closure_4 = [1, 100, 1000, 10000];
let closure_5 = [100, 500, 1000, 5000];
const tmp2 = (() => {
  class VoiceDuration {
    constructor(arg0, arg1) {
      TimeStampProducer = arg2;
      self = this;
      if (arg2 === undefined) {
        tmp = VoiceDuration;
        tmp2 = outer1_1;
        num = 2;
        TimeStampProducer = VoiceDuration(outer1_1[2]).TimeStampProducer;
      }
      tmp3 = outer1_2(self, VoiceDuration);
      self.userId = arg0;
      self.connection = arg1;
      self.timestampProducer = TimeStampProducer;
      set = new Set();
      self.listeningUsers = set;
      map = new Map();
      self.timesUntilSpeakingDurationMilestonesMs = map;
      map1 = new Map();
      self.speakingMinimumChunks = map1;
      map2 = new Map();
      self.speakingMinimumChunkCounts = map2;
      self.speechEventCount = 0;
      stopWatch = new VoiceDuration(outer1_1[2]).StopWatch(self.timestampProducer);
      self.listening = stopWatch;
      stopWatch1 = new VoiceDuration(outer1_1[2]).StopWatch(self.timestampProducer);
      self.speaking = stopWatch1;
      stopWatch2 = new VoiceDuration(outer1_1[2]).StopWatch(self.timestampProducer);
      self.participation = stopWatch2;
      stopWatch3 = new VoiceDuration(outer1_1[2]).StopWatch(self.timestampProducer);
      self.connected = stopWatch3;
      stopWatch4 = new VoiceDuration(outer1_1[2]).StopWatch(self.timestampProducer);
      self.muted = stopWatch4;
      stopWatch5 = new VoiceDuration(outer1_1[2]).StopWatch(self.timestampProducer);
      self.deafened = stopWatch5;
      durationEnabled = new VoiceDuration(outer1_1[2]).DurationEnabled(arg1.getNoiseCancellation(), self.timestampProducer);
      self.noiseCancellation = durationEnabled;
      durationEnabled1 = new VoiceDuration(outer1_1[2]).DurationEnabled(arg1.getSpatialAudioEnabled(), self.timestampProducer);
      self.spatialAudio = durationEnabled1;
      return;
    }
  }
  let obj = {
    key: "start",
    value() {
      let flag = arg0;
      let flag2 = arg1;
      let self = this;
      self = this;
      if (arg0 === undefined) {
        flag = false;
      }
      if (flag2 === undefined) {
        flag2 = false;
      }
      const listeningUsers = self.listeningUsers;
      listeningUsers.clear();
      const listening = self.listening;
      listening.reset();
      const speaking = self.speaking;
      speaking.reset();
      const participation = self.participation;
      participation.reset();
      const muted = self.muted;
      muted.reset();
      const deafened = self.deafened;
      deafened.reset();
      const connected = self.connected;
      connected.reset();
      const noiseCancellation = self.noiseCancellation;
      noiseCancellation.reset();
      const spatialAudio = self.spatialAudio;
      spatialAudio.reset();
      const timesUntilSpeakingDurationMilestonesMs = self.timesUntilSpeakingDurationMilestonesMs;
      timesUntilSpeakingDurationMilestonesMs.clear();
      const speakingMinimumChunks = self.speakingMinimumChunks;
      speakingMinimumChunks.clear();
      const speakingMinimumChunkCounts = self.speakingMinimumChunkCounts;
      speakingMinimumChunkCounts.clear();
      self.speechEventCount = 0;
      const connected2 = self.connected;
      connected2.start();
      const connection = self.connection;
      connection.on(VoiceDuration(outer1_1[3]).BaseConnectionEvent.Speaking, (arg0, arg1) => {
        if (self.userId === arg0) {
          self.onSpeaking(0 !== arg1);
        } else {
          self.onListening(0 !== arg1, arg0);
        }
      });
      self.onMuted(flag);
      self.onDeafened(flag2);
      const connection2 = self.connection;
      connection2.on(VoiceDuration(outer1_1[3]).BaseConnectionEvent.Mute, (arg0) => {
        self.onMuted(arg0);
      });
      const connection3 = self.connection;
      connection3.on(VoiceDuration(outer1_1[3]).BaseConnectionEvent.Deafen, (arg0) => {
        self.onDeafened(arg0);
      });
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "onSpeaking",
    value(arg0) {
      const self = this;
      if (arg0) {
        const speaking2 = self.speaking;
        speaking2.start();
        const participation2 = self.participation;
        participation2.start();
        self.speechEventCount = self.speechEventCount + 1;
      } else {
        self.addSpeechChunk();
        const speaking = self.speaking;
        speaking.stop();
        const listening = self.listening;
        if (!listening.isRunning()) {
          const participation = self.participation;
          participation.stop();
        }
        const speakingDurationMilestones = self.computeSpeakingDurationMilestones(self.connected.lastStartTime, self.speaking.lastStartTime, self.speaking.lastElapsed);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "onListening",
    value(arg0, arg1) {
      const self = this;
      const listeningUsers = this.listeningUsers;
      if (arg0) {
        listeningUsers.add(arg1);
        const listening2 = self.listening;
        listening2.start();
        const participation2 = self.participation;
        participation2.start();
      } else {
        let deleteResult = listeningUsers.delete(arg1);
        if (deleteResult) {
          deleteResult = 0 === self.listeningUsers.size;
        }
        if (deleteResult) {
          const listening = self.listening;
          listening.stop();
          const speaking = self.speaking;
          if (!speaking.isRunning()) {
            const participation = self.participation;
            participation.stop();
          }
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "onMuted",
    value(arg0) {
      const muted = this.muted;
      if (arg0) {
        muted.start();
      } else {
        muted.stop();
      }
    }
  };
  items[4] = {
    key: "onDeafened",
    value(arg0) {
      const deafened = this.deafened;
      if (arg0) {
        deafened.start();
      } else {
        deafened.stop();
      }
    }
  };
  items[5] = {
    key: "computeSpeakingDurationMilestones",
    value(arg0, arg1, arg2) {
      const self = this;
      let closure_1 = arg0;
      let _classCallCheck = arg1;
      let _defineProperties = arg2;
      if (null != arg0) {
        if (null != arg1) {
          const speaking = this.speaking;
          let closure_4 = speaking.elapsed().asMilliseconds();
          const found = outer1_4.filter((arg0) => {
            const timesUntilSpeakingDurationMilestonesMs = self.timesUntilSpeakingDurationMilestonesMs;
            return !timesUntilSpeakingDurationMilestonesMs.has(arg0);
          });
          const found1 = found.filter((arg0) => closure_4 >= arg0);
          const item = found1.forEach((arg0) => {
            const timesUntilSpeakingDurationMilestonesMs = self.timesUntilSpeakingDurationMilestonesMs;
            const result = timesUntilSpeakingDurationMilestonesMs.set(arg0, _classCallCheck - closure_1 + arg0 - _defineProperties);
          });
          const elapsedResult = speaking.elapsed();
        }
      }
    }
  };
  items[6] = {
    key: "addSpeechChunk",
    value() {
      const self = this;
      const lastStartTime = this.speaking.lastStartTime;
      if (null != lastStartTime) {
        const timestampProducer = this.timestampProducer;
        let closure_1 = timestampProducer.now() - lastStartTime;
        const found = outer1_5.filter((arg0) => closure_1 >= arg0);
        const item = found.forEach((arg0) => {
          const speakingMinimumChunks = self.speakingMinimumChunks;
          let value = speakingMinimumChunks.get(arg0);
          let num = 0;
          if (null != value) {
            num = value;
          }
          const speakingMinimumChunks2 = self.speakingMinimumChunks;
          const result = speakingMinimumChunks2.set(arg0, num + closure_1);
          const speakingMinimumChunkCounts = self.speakingMinimumChunkCounts;
          value = speakingMinimumChunkCounts.get(arg0);
          let num2 = 0;
          if (null != value) {
            num2 = value;
          }
          const speakingMinimumChunkCounts2 = self.speakingMinimumChunkCounts;
          const result1 = speakingMinimumChunkCounts2.set(arg0, num2 + 1);
        });
      }
    }
  };
  items[7] = {
    key: "setNoiseCancellationEnabled",
    value(value) {
      this.noiseCancellation.value = value;
    }
  };
  items[8] = {
    key: "setSpatialAudioEnabled",
    value(value) {
      this.spatialAudio.value = value;
    }
  };
  items[9] = {
    key: "stop",
    value() {
      this.addSpeechChunk();
      const speaking = this.speaking;
      speaking.stop();
      const listening = this.listening;
      listening.stop();
      const participation = this.participation;
      participation.stop();
      const connected = this.connected;
      connected.stop();
      const muted = this.muted;
      muted.stop();
      this.noiseCancellation.value = false;
      this.spatialAudio.value = false;
      const speakingDurationMilestones = this.computeSpeakingDurationMilestones(this.connected.lastStartTime, this.speaking.lastStartTime, this.speaking.lastElapsed);
    }
  };
  items[10] = {
    key: "getDurationStats",
    value() {
      let self = this;
      self = this;
      const lastStartTime = this.speaking.lastStartTime;
      const timestampProducer = this.timestampProducer;
      let num = 0;
      if (null != lastStartTime) {
        num = timestampProducer.now() - lastStartTime;
      }
      const speakingDurationMilestones = self.computeSpeakingDurationMilestones(self.connected.lastStartTime, self.speaking.lastStartTime, self.speaking.lastElapsed);
      let obj = {};
      const listening = self.listening;
      obj.duration_listening_ms = listening.elapsed().asMilliseconds();
      const speaking = self.speaking;
      const elapsedResult = listening.elapsed();
      obj.duration_speaking_ms = speaking.elapsed().asMilliseconds();
      const participation = self.participation;
      const elapsedResult1 = speaking.elapsed();
      obj.duration_participation_ms = participation.elapsed().asMilliseconds();
      const connected = self.connected;
      const elapsedResult2 = participation.elapsed();
      obj.duration_connected_ms = connected.elapsed().asMilliseconds();
      const muted = self.muted;
      const elapsedResult3 = connected.elapsed();
      obj.duration_muted_ms = muted.elapsed().asMilliseconds();
      const deafened = self.deafened;
      const elapsedResult4 = muted.elapsed();
      obj.duration_deafened_ms = deafened.elapsed().asMilliseconds();
      const noiseCancellation = self.noiseCancellation;
      obj.duration_noise_cancellation_enabled_ms = noiseCancellation.totalDuration();
      const spatialAudio = self.spatialAudio;
      obj.duration_spatial_ms = spatialAudio.totalDuration();
      obj.speech_event_count = self.speechEventCount;
      const found = outer1_4.filter((arg0) => {
        const timesUntilSpeakingDurationMilestonesMs = self.timesUntilSpeakingDurationMilestonesMs;
        return timesUntilSpeakingDurationMilestonesMs.has(arg0);
      });
      let merged = Object.assign(found.reduce((arg0, arg1) => {
        const obj = {};
        const merged = Object.assign(arg0);
        const timesUntilSpeakingDurationMilestonesMs = self.timesUntilSpeakingDurationMilestonesMs;
        const combined = "time_to_first_" + arg1 + "ms_speech_ms";
        obj[combined] = timesUntilSpeakingDurationMilestonesMs.get(arg1);
        return obj;
      }, {}));
      const found1 = outer1_5.filter((arg0) => {
        const speakingMinimumChunks = self.speakingMinimumChunks;
        let hasItem = speakingMinimumChunks.has(arg0);
        if (!hasItem) {
          hasItem = num >= arg0;
        }
        return hasItem;
      });
      const merged1 = Object.assign(found1.reduce((arg0, arg1) => {
        const obj = {};
        const merged = Object.assign(arg0);
        const speakingMinimumChunks = self.speakingMinimumChunks;
        const combined = "duration_speaking_gte_" + arg1 + "ms_ms";
        let value = speakingMinimumChunks.get(arg1);
        let num = 0;
        if (null != value) {
          num = value;
        }
        let num2 = 0;
        if (num >= arg1) {
          num2 = num;
        }
        obj[combined] = num + num2;
        const speakingMinimumChunkCounts = self.speakingMinimumChunkCounts;
        const combined1 = "speech_event_count_gte_" + arg1 + "ms";
        value = speakingMinimumChunkCounts.get(arg1);
        let num3 = 0;
        if (null != value) {
          num3 = value;
        }
        let num4 = 0;
        if (num >= arg1) {
          num4 = 1;
        }
        obj[combined1] = num3 + num4;
        return obj;
      }, {}));
      return obj;
    }
  };
  return callback(VoiceDuration, items);
})();
let result = require("sleep").fileFinishedImporting("lib/VoiceDuration.tsx");

export default tmp2;
