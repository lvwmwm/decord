// Module ID: 5737
// Function ID: 49333
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5737 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_1 = importDefault(dependencyMap[0]);
let closure_2 = importDefault(dependencyMap[1]);
let closure_3 = importDefault(dependencyMap[2]);
let closure_4 = importDefault(dependencyMap[3]);
let closure_5 = importDefault(dependencyMap[4]);
let closure_6 = arg1(dependencyMap[5]).VoiceChannelEffectAnimationType;
let tmp2 = (PersistedStore) => {
  class VoiceChannelEffectsPersistedStore {
    constructor() {
      self = this;
      tmp = closure_1(this, VoiceChannelEffectsPersistedStore);
      obj = closure_4(VoiceChannelEffectsPersistedStore);
      tmp2 = closure_3;
      if (closure_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(VoiceChannelEffectsPersistedStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(animationType) {
      animationType = undefined;
      if (null != animationType) {
        animationType = animationType.animationType;
      }
      if (null == animationType) {
        animationType = constants.PREMIUM;
      }
      const VoiceChannelEffectsPersistedStore = animationType;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getState",
    value() {
      return { animationType: VoiceChannelEffectsPersistedStore };
    }
  };
  items[1] = obj;
  return callback(VoiceChannelEffectsPersistedStore, items);
}(importDefault(dependencyMap[6]).PersistedStore);
tmp2.displayName = "VoiceChannelEffectsPersistedStore";
tmp2.persistKey = "VoiceChannelEffectsPersistedStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: function handleToggleAnimationType() {
    if (BASIC === constants.BASIC) {
      let BASIC = constants.PREMIUM;
    } else {
      BASIC = constants.BASIC;
    }
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsPersistedStore.tsx");

export default tmp2;
