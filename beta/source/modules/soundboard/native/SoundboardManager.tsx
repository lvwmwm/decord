// Module ID: 14380
// Function ID: 14381
// Name: SoundboardManager
// Dependencies: [5, 1999, 2103, 5680, 3, 14381, 14382, 14383, 9562, 6841, 2]

// Module 14380 (SoundboardManager)
import LoggerDefault from "Logger" /* 3 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 6841 */;
import SoundUtils from "SoundUtils" /* 9562 */;
import getVolumeForSoundDefault from "getVolumeForSound" /* 14382 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SoundboardStore from "SoundboardStore" /* 5680 */;
import BaseSoundboardManager from "BaseSoundboardManager" /* 14381 */;
import size from "module_2" /* 2 */;

let c5, c6, closure_3;

let map = new Map();
const tmp3 = new LoggerDefault("SoundboardManagerNative");
let closure_8 = tmp3;
class SoundboardManager extends BaseSoundboardManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult._stopAndClearSounds = function _stopAndClearSounds() {
      const item = map.forEach((stop) => {
        stop.stop();
      });
      map = new Map();
    };
    applyArgumentsResult._playSound = function _playSound(soundId, arg1, userId) {
      let num = arg1;
      if (arg1 === undefined) {
        num = 1;
      }
      if (SelectedChannelStore.getVoiceChannelId() === arg3) {
        if (!MediaEngineStore.isDeaf()) {
          if (!SoundboardStore.isLocalSoundboardMuted(userId)) {
            const tmp8 = getVolumeForSoundDefault(num);
            const _HermesInternal = HermesInternal;
            const combined = "" + userId + "-" + soundId;
            const value = map.get(combined);
            const tmp6 = importDefault;
            if (null != value) {
              value.stop();
            }
            const tmp14 = tmp6(14383)(soundId);
            const obj2 = SoundUtils;
            const sound = obj2.createSound(tmp14, "soundboard_sound", tmp8);
            sound.volume = tmp8;
            const result = map.set(combined, sound);
            const obj3 = SoundboardActionCreators;
            const result1 = obj3.reportSoundStartedPlaying(soundId, userId);
            const obj = { sound, soundKey: combined, soundId, userId };
            const result2 = require._playSoundWithListener(obj);
          }
        }
      }
    };
    let closure_0 = _asyncToGenerator(async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c3;
      closure_0 = arg0;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let closure_2;
          let closure_4;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp;
              let closure_1 = tmp4;
              c0 = undefined;
              c1 = undefined;
              c2 = undefined;
              c3 = undefined;
              ({ sound: c0, soundKey: c1, soundId: c2, userId: c3 } = closure_0);
              closure_4 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "Reflect", done: null };
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_4 = false;
              c4 = 1;
              c5 = 3;
              c6 = 1;
              const obj6 = { value: c0.playWithListener(), done: false };
              return obj6;
            }
          } else {
            if (2 === c5) {
              c4 = 0;
              const error = closure_3;
              const obj7 = { error };
              logger.error("Failed to play sound", obj7);
              closure_4 = true;
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_4 = value;
              c4 = 0;
            }
            const tmp14 = closure_4;
            if (tmp14) {
              set.delete(c1);
              const obj3 = closure_0(closure_2[9]);
              const result = obj3.reportSoundFinishedPlaying(c2, c3);
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp27) {
          closure_3 = tmp27;
          if (0 === c4) {
            c6 = 3;
            throw tmp27;
          } else {
            c5 = 2;
          }
        }
      }
    });
    applyArgumentsResult._playSoundWithListener = function() {
      return closure_0(...arguments);
    };
    return applyArgumentsResult;
  }
}
const soundboardManager = new SoundboardManager();
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardManager.tsx");

export default soundboardManager;
