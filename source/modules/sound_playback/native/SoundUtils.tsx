// Module ID: 10280
// Function ID: 79352
// Name: RNSound
// Dependencies: [6, 7, 27, 1553, 477, 2]

// Module 10280 (RNSound)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import { NativeModules } from "get ActivityIndicator";
import isMetaQuest from "isMetaQuest";
import isMetaQuest from "isMetaQuest";

const require = arg1;
let c5 = 0;
let closure_6 = (() => {
  class RNSound {
    constructor(arg0, arg1, arg2, arg3) {
      tmp = outer1_2(this, RNSound);
      this._volume = arg2;
      this._loaded = false;
      tmp2 = +outer1_5;
      outer1_5 = tmp2 + 1;
      this._key = tmp2;
      this._duration = -1;
      this._numberOfChannels = -1;
      this._volume = 1;
      this._pan = 0;
      this._numberOfLoops = 0;
      this._sound = this._createSound(arg0, arg1, arg3);
      return;
    }
  }
  let obj = {
    key: "_createSound",
    value(arg0, arg1, arg2) {
      const self = this;
      let closure_1 = arg2;
      const DCDSoundManager = outer1_4.DCDSoundManager;
      DCDSoundManager.prepare(arg0, arg1, this._key, (arg0, arg1) => {
        if (arg1) {
          ({ duration: self._duration, numberOfChannels: self._numberOfChannels } = arg1);
        }
        if (null == arg0) {
          self._loaded = true;
        }
        if (null != callback) {
          callback(arg0);
        }
      });
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "play",
    value() {
      if (this._loaded) {
        const DCDSoundManager = outer1_4.DCDSoundManager;
        DCDSoundManager.play(tmp._key);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "pause",
    value() {
      if (this._loaded) {
        const DCDSoundManager = outer1_4.DCDSoundManager;
        DCDSoundManager.pause(tmp._key);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "stop",
    value() {
      if (this._loaded) {
        const DCDSoundManager = outer1_4.DCDSoundManager;
        DCDSoundManager.stop(tmp._key);
      }
    }
  };
  items[4] = {
    key: "release",
    value() {
      const self = this;
      if (this._loaded) {
        const DCDSoundManager = outer1_4.DCDSoundManager;
        DCDSoundManager.release(self._key);
      }
      self._loaded = false;
    }
  };
  items[5] = {
    key: "volume",
    get() {
      return this._volume;
    },
    set(_volume) {
      this._volume = _volume;
      if (this._loaded) {
        const DCDSoundManager = outer1_4.DCDSoundManager;
        DCDSoundManager.setVolume(tmp._key, _volume);
      }
    }
  };
  items[6] = {
    key: "duration",
    get() {
      return this._duration;
    }
  };
  items[7] = {
    key: "numberOfLoops",
    get() {
      return this._numberOfLoops;
    },
    set(_numberOfLoops) {
      this._numberOfLoops = _numberOfLoops;
      if (this._loaded) {
        const DCDSoundManager = outer1_4.DCDSoundManager;
        DCDSoundManager.setNumberOfLoops(tmp._key, _numberOfLoops);
      }
    }
  };
  return callback(RNSound, items);
})();
let obj = { NOTIFICATION: "notification", VOICE: "voice", RING_TONE: "ring_tone", MEDIA: "media", NOTIFICATION_NO_VIBRATION: "notification_no_vibration" };
obj = { call_calling: obj.VOICE };
obj.call_ringing = isMetaQuest.isMetaQuest() ? obj.MEDIA : obj.RING_TONE;
obj.call_ringing_halloween = isMetaQuest.isMetaQuest() ? obj.MEDIA : obj.RING_TONE;
({ VOICE: obj2.camera_on, VOICE: obj2.camera_off, VOICE: obj2.deafen, VOICE: obj2.disconnect, NOTIFICATION: obj2.mention1, NOTIFICATION: obj2.mention2, NOTIFICATION: obj2.mention3, NOTIFICATION: obj2.message1, NOTIFICATION: obj2.message2, NOTIFICATION: obj2.message3, VOICE: obj2.mute, VOICE: obj2.ptt_start, VOICE: obj2.ptt_stop, VOICE: obj2.reconnect, VOICE: obj2.stage_waiting, VOICE: obj2.stream_ended, VOICE: obj2.stream_started, VOICE: obj2.stream_user_joined, VOICE: obj2.stream_user_left, VOICE: obj2.soundboard_sound, VOICE: obj2.undeafen, VOICE: obj2.unmute, VOICE: obj2.user_join, VOICE: obj2.user_leave, VOICE: obj2.user_moved, MEDIA: obj2.vibing_wumpus, NOTIFICATION_NO_VIBRATION: obj2.activity_end, NOTIFICATION_NO_VIBRATION: obj2.activity_launch, NOTIFICATION_NO_VIBRATION: obj2.activity_user_join, NOTIFICATION_NO_VIBRATION: obj2.activity_user_left } = obj);
const tmp2 = (() => {
  class MobileAudioSound {
    constructor(arg0, arg1, arg2, arg3) {
      tmp = outer1_2(this, MobileAudioSound);
      this.name = arg0;
      this.usage = outer1_7[arg1];
      this._volume = arg2;
      this.outputChannel = arg3;
      return;
    }
  }
  let obj = {
    key: "volume",
    get() {
      return this._volume;
    },
    set(_volume) {
      let closure_0 = _volume;
      this._volume = _volume;
      this.ensureSound().then((arg0) => {
        arg0.volume = closure_0;
      });
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "loop",
    value() {
      this.ensureSound().then((play) => {
        play.numberOfLoops = -1;
        play.play();
      });
    }
  };
  items[1] = obj;
  obj = {
    key: "play",
    value() {
      this.ensureSound().then((play) => {
        play.play();
      });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "playWithListener",
    value() {
      const self = this;
      return new Promise((arg0, arg1) => {
        const _self = arg0;
        let closure_1 = arg1;
        const ensureSoundResult = _self.ensureSound();
        _self.ensureSound().then((duration) => {
          let tmp = null != duration.duration;
          if (tmp) {
            tmp = 0 !== duration.duration;
          }
          if (!tmp) {
            callback("sound has no duration");
          }
          duration.play();
          let num2 = 1;
          if (obj.isIOS()) {
            num2 = 1000;
          }
          const timerId = setTimeout(() => {
            outer1_0(true);
          }, duration.duration * num2);
        }).catch((arg0) => {
          callback(arg0);
        });
      });
    }
  };
  items[4] = {
    key: "pause",
    value() {
      if (null != this.soundPromise) {
        this.soundPromise.then((pause) => pause.pause());
        const soundPromise = this.soundPromise;
      }
    }
  };
  items[5] = {
    key: "stop",
    value() {
      this.destroyAudio();
    }
  };
  items[6] = {
    key: "destroyAudio",
    value() {
      const self = this;
      if (null != this.soundPromise) {
        this.soundPromise.then((stop) => {
          stop.stop();
          stop.release();
          self.soundPromise = null;
        });
        const soundPromise = this.soundPromise;
      }
    }
  };
  items[7] = {
    key: "ensureSound",
    value() {
      let self = this;
      self = this;
      let soundPromise = this.soundPromise;
      if (null == soundPromise) {
        soundPromise = new Promise((arg0, arg1) => {
          const _self = arg0;
          let closure_1 = arg1;
          let _classCallCheck = new outer2_6(_self.name, _self.usage, _self._volume, (arg0) => {
            if (null != arg0) {
              if ("" !== arg0) {
                callback2(arg0);
              }
            }
            callback(_classCallCheck);
          });
        });
      }
      self.soundPromise = soundPromise;
      return self.soundPromise;
    }
  };
  return callback(MobileAudioSound, items);
})();
const result = require("get ActivityIndicator").fileFinishedImporting("modules/sound_playback/native/SoundUtils.tsx");

export const MobileAudioSound = tmp2;
