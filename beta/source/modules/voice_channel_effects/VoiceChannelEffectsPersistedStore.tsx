// Module ID: 7623
// Function ID: 7624
// Name: VoiceChannelEffectsPersistedStore
// Dependencies: [7624, 504, 577, 2]

// Module 7623 (VoiceChannelEffectsPersistedStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 577 */;
import VoiceChannelEffectsConstants from "VoiceChannelEffectsConstants" /* 7624 */;
import size from "module_2" /* 2 */;

const constants = VoiceChannelEffectsConstants.VoiceChannelEffectAnimationType;
const PersistedStore = initializeDefault.PersistedStore;
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
  closure_0 = animationType;
};
prototype["getState"] = function getState() {
  return { animationType };
};
VoiceChannelEffectsPersistedStore.displayName = "VoiceChannelEffectsPersistedStore";
VoiceChannelEffectsPersistedStore.persistKey = "VoiceChannelEffectsPersistedStore";
const voiceChannelEffectsPersistedStore = new VoiceChannelEffectsPersistedStore(DispatcherDefault, {
  VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: function handleToggleAnimationType() {
    closure_0 = closure_0 === constants.BASIC ? tmp.PREMIUM : tmp.BASIC;
  }
});
const result = size.fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsPersistedStore.tsx");

export default voiceChannelEffectsPersistedStore;
