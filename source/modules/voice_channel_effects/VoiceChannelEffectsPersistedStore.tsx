// Module ID: 5871
// Function ID: 5872
// Name: initialize
// Dependencies: [5872, 589, 709, 2]

// Module 5871 (initialize)
import { VoiceChannelEffectAnimationType as closure_1 } from "VoiceChannelEffectAnimationType";
import { PersistedStore } from "initialize";

class VoiceChannelEffectsPersistedStore extends PersistedStore {
}
const prototype = VoiceChannelEffectsPersistedStore.prototype;
prototype["initialize"] = function initialize(animationType) {
  animationType = undefined;
  if (animationType != null) {
    animationType = animationType.animationType;
  }
  if (animationType == null) {
    animationType = constants.PREMIUM;
  }
};
prototype["getState"] = function getState() {
  return { animationType: closure_0 };
};
VoiceChannelEffectsPersistedStore.displayName = "VoiceChannelEffectsPersistedStore";
VoiceChannelEffectsPersistedStore.persistKey = "VoiceChannelEffectsPersistedStore";
const voiceChannelEffectsPersistedStore = new VoiceChannelEffectsPersistedStore(require("dispatcher"), {
  VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: function handleToggleAnimationType() {
    closure_0 = closure_0 === constants.BASIC ? tmp.PREMIUM : tmp.BASIC;
  }
});
const result = require("dispatcher").fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsPersistedStore.tsx");

export default voiceChannelEffectsPersistedStore;
