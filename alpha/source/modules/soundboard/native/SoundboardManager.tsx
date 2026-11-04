// Module ID: 16634
// Function ID: 16635
// Name: SoundboardManager
// Dependencies: [5, 2135, 5044, 6193, 3, 16635, 16636, 16637, 11211, 7657, 2]

// Module 16634 (SoundboardManager)
import LoggerDefault from "Logger" /* 3 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7657 */;
import SoundUtils from "SoundUtils" /* 11211 */;
import getVolumeForSoundDefault from "getVolumeForSound" /* 16636 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5044 */;
import SoundboardStore from "SoundboardStore" /* 6193 */;
import BaseSoundboardManager from "BaseSoundboardManager" /* 16635 */;
import size from "module_2" /* 2 */;

let closure_2;

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
            const tmp14 = tmp6(16637)(soundId);
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
      let closure_1;
      closure_0 = arg0;
      let closure_4 = false;
      await c0.playWithListener();
      if (2 === c5) {
        let c4 = 0;
        const error = closure_3;
        const obj7 = { error };
        logger.error("Failed to play sound", obj7);
        closure_4 = true;
      } else if (arg0 === 1) {
        let c6 = 3;
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
      await "HermesInternal";
      closure_2 = tmp;
      ({ sound: c0, soundKey: c1, soundId: c2, userId: c3 } = closure_0);
      return "flexDirection";
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
