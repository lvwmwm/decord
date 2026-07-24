// Module ID: 5742
// Function ID: 49382
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5743, 566, 686, 2]

// Module 5742 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { VoiceChannelEffectAnimationType as closure_6 } from "VoiceChannelEffectAnimationType";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let tmp2 = ((PersistedStore) => {
  class VoiceChannelEffectsPersistedStore {
    constructor() {
      self = this;
      tmp = outer1_1(this, VoiceChannelEffectsPersistedStore);
      obj = outer1_4(VoiceChannelEffectsPersistedStore);
      tmp2 = outer1_3;
      if (outer1_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_4(self).constructor);
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
        animationType = outer1_6.PREMIUM;
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
})(require("initialize").PersistedStore);
tmp2.displayName = "VoiceChannelEffectsPersistedStore";
tmp2.persistKey = "VoiceChannelEffectsPersistedStore";
tmp2 = new tmp2(require("dispatcher"), {
  VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: function handleToggleAnimationType() {
    if (BASIC === constants.BASIC) {
      BASIC = constants.PREMIUM;
    } else {
      BASIC = constants.BASIC;
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsPersistedStore.tsx");

export default tmp2;
