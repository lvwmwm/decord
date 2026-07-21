// Module ID: 10668
// Function ID: 83176
// Name: useIsVoiceChannelFull
// Dependencies: []
// Exports: default, useIsVoiceChannelLocked

// Module 10668 (useIsVoiceChannelFull)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const Permissions = arg1(dependencyMap[3]).Permissions;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/voice_calls/useIsVoiceChannelFull.tsx");

export default function useIsVoiceChannelFull(arg0) {
  const arg1 = arg0;
  const items = [closure_4, closure_2];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => arg0(closure_1[5]).isChannelFull(arg0, closure_4, closure_2));
};
export const useIsVoiceChannelLocked = function useIsVoiceChannelLocked(channel) {
  const arg1 = channel;
  const items = [closure_3];
  const items1 = [channel];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => {
    let tmp = null == arg0;
    if (!tmp) {
      tmp = !closure_3.can(constants.CONNECT, arg0);
    }
    return tmp;
  }, items1);
};
