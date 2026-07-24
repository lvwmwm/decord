// Module ID: 5770
// Function ID: 49433
// Name: canChannelUseSoundboard
// Dependencies: [1348, 3758, 1906, 653, 566, 2]
// Exports: canSelectedVoiceChannelUseSoundboard, useCanChannelUseSoundboard

// Module 5770 (canChannelUseSoundboard)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_5;
let closure_6;
const require = arg1;
function canChannelUseSoundboard(channel) {
  if (null == channel) {
    return false;
  } else {
    const CALLABLE = constants.CALLABLE;
    if (CALLABLE.has(channel.type)) {
      return true;
    } else {
      const canResult = closure_3.can(constants2.USE_SOUNDBOARD, channel);
      const canResult1 = closure_3.can(constants2.SPEAK, channel);
      return channel.isGuildVoiceOrThread() && canResult && closure_3.can(constants2.SPEAK, channel);
    }
  }
}
({ ChannelTypesSets: closure_5, Permissions: closure_6 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/soundboard/canChannelUseSoundboard.tsx");

export default canChannelUseSoundboard;
export const canSelectedVoiceChannelUseSoundboard = function canSelectedVoiceChannelUseSoundboard() {
  return canChannelUseSoundboard(channel.getChannel(voiceChannelId.getVoiceChannelId()));
};
export const useCanChannelUseSoundboard = function useCanChannelUseSoundboard(arg0) {
  const _require = arg0;
  const items = [closure_3];
  const items1 = [arg0];
  return _require(566).useStateFromStores(items, () => outer1_7(closure_0), items1);
};
