// Module ID: 5765
// Function ID: 49395
// Name: canChannelUseSoundboard
// Dependencies: []
// Exports: canSelectedVoiceChannelUseSoundboard, useCanChannelUseSoundboard

// Module 5765 (canChannelUseSoundboard)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ ChannelTypesSets: closure_5, Permissions: closure_6 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/soundboard/canChannelUseSoundboard.tsx");

export default canChannelUseSoundboard;
export const canSelectedVoiceChannelUseSoundboard = function canSelectedVoiceChannelUseSoundboard() {
  return canChannelUseSoundboard(channel.getChannel(voiceChannelId.getVoiceChannelId()));
};
export const useCanChannelUseSoundboard = function useCanChannelUseSoundboard(arg0) {
  const arg1 = arg0;
  const items = [closure_3];
  const items1 = [arg0];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => callback(arg0), items1);
};
