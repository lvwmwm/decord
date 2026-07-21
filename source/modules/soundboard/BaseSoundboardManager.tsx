// Module ID: 13340
// Function ID: 101402
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13340 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
const tmp2 = (arg0) => {
  class BaseSoundboardManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, BaseSoundboardManager);
      items1 = [...items];
      obj = closure_5(BaseSoundboardManager);
      tmp2 = closure_4;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      BaseSoundboardManager = tmp2Result;
      tmp2Result._playSound = () => {

      };
      tmp2Result._stopAndClearSounds = () => {

      };
      tmp2Result._handleToggleSelfDeafened = () => {
        if (deaf.isDeaf()) {
          tmp2Result._stopAndClearSounds();
        }
      };
      tmp2Result._handleSoundboardSoundReceived = (arg0) => {
        let channelId;
        let soundId;
        let soundVolume;
        let userId;
        ({ soundId, soundVolume, userId, channelId } = arg0);
        if (null != soundId) {
          if (userId !== store.getId()) {
            return tmp2Result._playSound(soundId, soundVolume, userId, channelId);
          }
        }
      };
      tmp2Result._handleSoundboardSoundPlayLocally = (sound) => {
        sound = sound.sound;
        return tmp2Result._playSound(sound.soundId, sound.volume, store.getId(), sound.channelId);
      };
      tmp2Result._handleVoiceChannelSelect = () => {
        tmp2Result._stopAndClearSounds();
      };
      return tmp2Result;
    }
  }
  const importDefault = BaseSoundboardManager;
  callback2(BaseSoundboardManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const subscription = BaseSoundboardManager(closure_1[7]).subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived);
      const obj = BaseSoundboardManager(closure_1[7]);
      const subscription1 = BaseSoundboardManager(closure_1[7]).subscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally);
      const obj2 = BaseSoundboardManager(closure_1[7]);
      const subscription2 = BaseSoundboardManager(closure_1[7]).subscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect);
      const obj3 = BaseSoundboardManager(closure_1[7]);
      const subscription3 = BaseSoundboardManager(closure_1[7]).subscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened);
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      BaseSoundboardManager(closure_1[7]).unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived);
      const obj = BaseSoundboardManager(closure_1[7]);
      BaseSoundboardManager(closure_1[7]).unsubscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally);
      const obj2 = BaseSoundboardManager(closure_1[7]);
      BaseSoundboardManager(closure_1[7]).unsubscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect);
      const obj3 = BaseSoundboardManager(closure_1[7]);
      BaseSoundboardManager(closure_1[7]).unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened);
    }
  };
  items[1] = obj;
  return callback(BaseSoundboardManager, items);
}(importDefault(dependencyMap[8]));
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/soundboard/BaseSoundboardManager.tsx");

export default tmp2;
