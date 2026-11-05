// Module ID: 11223
// Function ID: 11224
// Name: sound_playback/SoundUtils
// Dependencies: [5, 17, 3, 1624, 11224, 11225, 559, 1377, 2]

// Module 11223 (sound_playback/SoundUtils)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import BackoffDefault from "Backoff" /* 559 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import _modDef11224 from "module_11224" /* 11224 */;
import _modDef11225 from "module_11225" /* 11225 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import "MetaQuestUtils";
import MetaQuestUtils_mod from "MetaQuestUtils" /* 1624 */;
import size from "module_2" /* 2 */;

let _self, c4, c5, closure_2;

let MetaQuestUtils;
const NativeModules = react_native.NativeModules;
let tmp2 = new LoggerDefault("MobileAudioSound");
let closure_5 = tmp2;
let closure_6 = 0;
class RNSound {
  constructor(arg0, arg1, _volume, fn) {
    const obj = Object.create(new.target.prototype);
    obj._volume = _volume;
    obj._loaded = false;
    closure_6 = tmp + 1;
    obj._key = +closure_6;
    obj._duration = -1;
    obj._numberOfChannels = -1;
    obj._volume = 1;
    obj._pan = 0;
    obj._numberOfLoops = 0;
    obj._sound = obj._createSound(arg0, arg1, fn);
    return obj;
  }
  _createSound(arg0, arg1, fn) {
    const self = this;
    let closure_0 = fn;
    let DCDSoundManager = NativeModules.DCDSoundManager;
    DCDSoundManager.prepare(arg0, arg1, this._key, (arg0, arg1) => {
      if (null != arg1) {
        ({ duration: self._duration, numberOfChannels: self._numberOfChannels } = arg1);
      }
      if (null == arg0) {
        self._loaded = true;
      } else {
        const DCDSoundManager = NativeModules.DCDSoundManager;
        DCDSoundManager.release(self._key);
      }
      if (fn != null) {
        tmp6(arg0);
      }
    });
  }
  play() {
    if (this._loaded) {
      const DCDSoundManager = NativeModules.DCDSoundManager;
      DCDSoundManager.play(tmp._key);
    }
  }
  pause() {
    if (this._loaded) {
      const DCDSoundManager = NativeModules.DCDSoundManager;
      DCDSoundManager.pause(tmp._key);
    }
  }
  stop() {
    if (this._loaded) {
      const DCDSoundManager = NativeModules.DCDSoundManager;
      DCDSoundManager.stop(tmp._key);
    }
  }
  release() {
    const self = this;
    if (this._loaded) {
      const DCDSoundManager = NativeModules.DCDSoundManager;
      DCDSoundManager.release(self._key);
    }
    self._loaded = false;
  }
}
const prototype = RNSound.prototype;
Object.defineProperty(prototype, "volume", {
  get: function volume() {
    return this._volume;
  },
  set: undefined
});
Object.defineProperty(prototype, "volume", {
  get: undefined,
  set: function volume(_volume) {
    this._volume = _volume;
    if (this._loaded) {
      const DCDSoundManager = NativeModules.DCDSoundManager;
      DCDSoundManager.setVolume(tmp._key, _volume);
    }
  }
});
Object.defineProperty(prototype, "duration", {
  get: function duration() {
    return this._duration;
  },
  set: undefined
});
Object.defineProperty(prototype, "numberOfLoops", {
  get: function numberOfLoops() {
    return this._numberOfLoops;
  },
  set: undefined
});
Object.defineProperty(prototype, "numberOfLoops", {
  get: undefined,
  set: function numberOfLoops(_numberOfLoops) {
    this._numberOfLoops = _numberOfLoops;
    if (this._loaded) {
      const DCDSoundManager = NativeModules.DCDSoundManager;
      DCDSoundManager.setNumberOfLoops(tmp._key, _numberOfLoops);
    }
  }
});
let obj = { NOTIFICATION: "notification", VOICE: "voice", RING_TONE: "ring_tone", MEDIA: "media", NOTIFICATION_NO_VIBRATION: "notification_no_vibration" };
let obj3 = { call_calling: obj.VOICE, call_ringing: MetaQuestUtils.isMetaQuest() ? obj.MEDIA : obj.RING_TONE, call_ringing_halloween: MetaQuestUtils.isMetaQuest() ? obj.MEDIA : obj.RING_TONE, camera_on: null, camera_off: null, deafen: null, disconnect: null, mention1: null, mention2: null, mention3: null, message1: null, message2: null, message3: null, mute: null, ptt_start: null, ptt_stop: null, reconnect: null, stage_waiting: null, stream_ended: null, stream_started: null, stream_user_joined: null, stream_user_left: null, soundboard_sound: null, undeafen: null, unmute: null, user_join: null, user_leave: null, user_moved: null, vibing_wumpus: null, activity_end: null, activity_launch: null, activity_user_join: null, activity_user_left: null };
MetaQuestUtils = MetaQuestUtils_mod;
({ VOICE: obj2.camera_on, VOICE: obj2.camera_off, VOICE: obj2.deafen, VOICE: obj2.disconnect, NOTIFICATION: obj2.mention1, NOTIFICATION: obj2.mention2, NOTIFICATION: obj2.mention3, NOTIFICATION: obj2.message1, NOTIFICATION: obj2.message2, NOTIFICATION: obj2.message3, VOICE: obj2.mute, VOICE: obj2.ptt_start, VOICE: obj2.ptt_stop, VOICE: obj2.reconnect, VOICE: obj2.stage_waiting, VOICE: obj2.stream_ended, VOICE: obj2.stream_started, VOICE: obj2.stream_user_joined, VOICE: obj2.stream_user_left, VOICE: obj2.soundboard_sound, VOICE: obj2.undeafen, VOICE: obj2.unmute, VOICE: obj2.user_join, VOICE: obj2.user_leave, VOICE: obj2.user_moved, MEDIA: obj2.vibing_wumpus, NOTIFICATION_NO_VIBRATION: obj2.activity_end, NOTIFICATION_NO_VIBRATION: obj2.activity_launch, NOTIFICATION_NO_VIBRATION: obj2.activity_user_join, NOTIFICATION_NO_VIBRATION: obj2.activity_user_left } = obj);
let obj4 = { stage_waiting: _modDef11224, vibing_wumpus: _modDef11225 };
const result = size.fileFinishedImporting("modules/sound_playback/native/SoundUtils.tsx");
class tmp4 {
  constructor(arg0, arg1, _volume, outputChannel) {
    const merged = Object.assign({ numberOfLoops: 0, playbackRequest: 0, prepareBackoff: null, retryAfter: 0 });
    merged[2] = new BackoffDefault();
    let tmp3 = obj4[arg0];
    new BackoffDefault();
    if (tmp3 == null) {
      tmp3 = arg0;
    }
    merged.name = tmp3;
    merged.usage = obj3[arg1];
    merged._volume = _volume;
    merged.outputChannel = outputChannel;
    return merged;
  }
  loop() {
    const self = this;
    this.numberOfLoops = -1;
    const sum = this.playbackRequest + 1;
    this.playbackRequest = sum;
    require = sum;
    const ensureSoundResult = this.ensureSound();
    ensureSoundResult.then((play) => {
      const tmp = null != play && require === self.playbackRequest;
      if (tmp) {
        play.numberOfLoops = -1;
        play.play();
      }
    });
  }
  play() {
    const self = this;
    const sum = this.playbackRequest + 1;
    this.playbackRequest = sum;
    require = sum;
    const ensureSoundResult = this.ensureSound();
    ensureSoundResult.then((play) => {
      const tmp = null != play && require === self.playbackRequest;
      if (tmp) {
        play.play();
      }
    });
  }
  playWithListener() {
    const self = this;
    const sum = this.playbackRequest + 1;
    this.playbackRequest = sum;
    require = sum;
    const promise = new Promise((arg0, arg1) => {
      let closure_1;
      let closure_0 = arg0;
      _self = arg1;
      const ensureSoundResult = _self.ensureSound();
      const nextPromise = ensureSoundResult.then((duration) => {
        if (null != duration) {
          if (require === self.playbackRequest) {
            const tmp4 = null != duration.duration && 0 !== duration.duration;
            if (!tmp4) {
              closure_1("sound has no duration");
            }
            duration.play();
            let num2 = 1;
            const obj = PlatformUtils;
            if (obj.isIOS()) {
              num2 = 1000;
            }
            const _setTimeout = setTimeout;
            const timerId = setTimeout(() => {
              closure_1_0(true);
            }, duration.duration * num2);
          }
        }
        closure_0(false);
      });
      nextPromise.catch((error) => {
        closure_1(error);
      });
    });
    return promise;
  }
  pause() {
    this.playbackRequest = this.playbackRequest + 1;
    if (null != this.soundPromise) {
      const soundPromise = this.soundPromise;
      soundPromise.then((pause) => {
        let pauseResult;
        if (pause != null) {
          pauseResult = pause.pause();
        }
        return pauseResult;
      });
    }
  }
  stop() {
    this.playbackRequest = this.playbackRequest + 1;
    this.destroyAudio();
  }
  destroyAudio() {
    const self = this;
    if (null != this.soundPromise) {
      const soundPromise = self.soundPromise;
      soundPromise.then((stop) => {
        if (stop != null) {
          stop.stop();
        }
        if (stop != null) {
          stop.release();
        }
      });
      self.soundPromise = null;
    }
  }
  ensureSound() {
    function load() {
      return closure_0(...arguments);
    }
    let self = this;
    if (null != this.soundPromise) {
      return self.soundPromise;
    } else {
      const tmp = globalThis;
      let _Date = Date;
      if (Date.now() < self.retryAfter) {
        return Promise.resolve(null);
      } else {
        const tmp2 = _asyncToGenerator;
        let closure_0 = _asyncToGenerator(async function(arg0, value) {
          if (c5 === 2) {
            c5 = 3;
            const str = "Generator functions may not be called on executing generators";
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            let c3;
            try {
              c5 = 2;
              const tmp4 = c4;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_1 = tmp;
                  value = undefined;
                  c3 = 1;
                  self = this;
                  const self2 = this;
                  const promise = new Promise((arg0, arg1) => {
                    closure_0 = arg0;
                    closure_1 = arg1;
                    if (typeof closure_2_7 === "function") {
                      const fn = (arg0) => {
                        if (null != arg0) {
                          if ("" !== arg0) {
                            closure_1(arg0);
                          }
                        }
                        closure_0(obj);
                      };
                      const obj = Object.create(tmp.prototype);
                      obj._volume = tmp4;
                      obj._loaded = false;
                      closure_6 = tmp6 + 1;
                      obj._key = +closure_6;
                      obj._duration = -1;
                      obj._numberOfChannels = -1;
                      obj._volume = 1;
                      obj._pan = 0;
                      obj._numberOfLoops = 0;
                      obj._sound = obj._createSound(tmp2, tmp3, fn);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  });
                  c4 = 2;
                  c5 = 1;
                  obj4 = { value: promise, done: false };
                  return obj4;
                }
              } else if (1 === tmp4) {
                c3 = 0;
                closure_1 = closure_2;
                logger.warn("Could not prepare sound", value.name, closure_1);
                if (value.soundPromise === closure_1) {
                  value.soundPromise = null;
                  const _Date = Date;
                  const prepareBackoff2 = value.prepareBackoff;
                  const timestamp = Date.now();
                  value.retryAfter = timestamp + prepareBackoff2.fail();
                }
                c5 = 3;
                return { value: null, done: true };
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                value.numberOfLoops = value.numberOfLoops;
                value.volume = value._volume;
                if (value.soundPromise === closure_1) {
                  const tmp6 = value;
                  const prepareBackoff = value.prepareBackoff;
                  prepareBackoff.succeed();
                  value.retryAfter = 0;
                }
                c3 = 0;
                c5 = 3;
                let obj = { value, done: true };
                return obj;
              }
            } catch (tmp27) {
              closure_2 = tmp27;
              if (0 === c3) {
                c5 = 3;
                throw tmp27;
              } else {
                c4 = 1;
              }
            }
          }
        });
        const tmp3 = load();
        let closure_1 = tmp3;
        self.soundPromise = tmp3;
        return tmp3;
      }
    }
  }
}
const prototype2 = tmp4.prototype;
Object.defineProperty(prototype2, "volume", {
  get: function volume() {
    return this._volume;
  },
  set: undefined
});
Object.defineProperty(prototype2, "volume", {
  get: undefined,
  set: function volume(_volume) {
    const volume = _volume;
    this._volume = _volume;
    if (this.soundPromise != null) {
      this.soundPromise.then((result) => {
        if (null != result) {
          result.volume = volume;
        }
      });
    }
  }
});

export const MobileAudioSound = tmp4;
