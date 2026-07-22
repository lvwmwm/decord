// Module ID: 10202
// Function ID: 78758
// Name: useIsConnectedToVoiceChannelForId
// Dependencies: []
// Exports: useIsConnectedToVoiceChannel

// Module 10202 (useIsConnectedToVoiceChannelForId)
function useIsConnectedToVoiceChannelForId(arg0) {
  const arg1 = arg0;
  const items = [closure_3, closure_2];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => inChannel.isInChannel(arg0, id.getId()));
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/voice_chat/VoiceChatHooks.tsx");

export const useIsConnectedToVoiceChannel = function useIsConnectedToVoiceChannel(id) {
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  return useIsConnectedToVoiceChannelForId(id);
};
export { useIsConnectedToVoiceChannelForId };
