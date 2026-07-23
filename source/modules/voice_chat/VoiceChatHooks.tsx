// Module ID: 10214
// Function ID: 78830
// Name: useIsConnectedToVoiceChannelForId
// Dependencies: [1194, 4146, 566, 2]
// Exports: useIsConnectedToVoiceChannel

// Module 10214 (useIsConnectedToVoiceChannelForId)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
function useIsConnectedToVoiceChannelForId(arg0) {
  const _require = arg0;
  const items = [closure_3, _isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => outer1_3.isInChannel(closure_0, outer1_2.getId()));
}
const result = require("initialize").fileFinishedImporting("modules/voice_chat/VoiceChatHooks.tsx");

export const useIsConnectedToVoiceChannel = function useIsConnectedToVoiceChannel(id) {
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  return useIsConnectedToVoiceChannelForId(id);
};
export { useIsConnectedToVoiceChannelForId };
