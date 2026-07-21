// Module ID: 13339
// Function ID: 101406
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13339 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const map = new Map();
let importDefaultResult = importDefault(dependencyMap[9]);
importDefaultResult = new importDefaultResult("SoundboardManagerNative");
let tmp5 = (arg0) => {
  class SoundboardManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_5(this, SoundboardManager);
      items1 = [...items];
      obj = closure_7(SoundboardManager);
      tmp2 = closure_6;
      if (closure_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      SoundboardManager = tmp2Result;
      tmp2Result._stopAndClearSounds = () => {
        const item = map.forEach((stop) => {
          stop.stop();
        });
        const map = new Map();
      };
      tmp2Result._playSound = (soundId, arg1, userId) => {
        let num = arg1;
        if (arg1 === undefined) {
          num = 1;
        }
        if (voiceChannelId.getVoiceChannelId() === arg3) {
          if (!deaf.isDeaf()) {
            if (!localSoundboardMuted.isLocalSoundboardMuted(userId)) {
              const tmp6 = callback(closure_2[10])(num);
              const _HermesInternal = HermesInternal;
              const combined = "" + userId + "-" + soundId;
              const value = store.get(combined);
              if (null != value) {
                value.stop();
              }
              const tmp14 = callback(closure_2[11])(soundId);
              const sound = tmp2Result(closure_2[12]).createSound(tmp14, "soundboard_sound", tmp6);
              sound.volume = tmp6;
              const result = store.set(combined, sound);
              const obj2 = tmp2Result(closure_2[12]);
              const result1 = tmp2Result(closure_2[13]).reportSoundStartedPlaying(soundId, userId);
              const obj = { sound, soundKey: combined, soundId, userId };
              const result2 = tmp2Result._playSoundWithListener(obj);
              const obj3 = tmp2Result(closure_2[13]);
            }
          }
        }
      };
      tmp2Result._playSoundWithListener = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback2(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      return tmp2Result;
    }
  }
  const arg1 = SoundboardManager;
  callback2(SoundboardManager, arg0);
  return callback(SoundboardManager);
}(importDefault(dependencyMap[14]));
tmp5 = new tmp5();
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/soundboard/native/SoundboardManager.tsx");

export default tmp5;
