// Module ID: 9485
// Function ID: 9486
// Name: useIsConnectedToVoiceChannel
// Dependencies: [1218, 4467, 589, 2]
// Exports: useIsConnectedToVoiceChannel, useIsConnectedToVoiceChannelForId

// Module 9485 (useIsConnectedToVoiceChannel)
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "updateVoiceState" /* 4467 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/voice_chat/VoiceChatHooks.tsx");

export const useIsConnectedToVoiceChannel = function useIsConnectedToVoiceChannel(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const items = [closure_3, closure_2];
  return id(589).useStateFromStores(items, () => closure_1_3.isInChannel(id, closure_1_2.getId()));
};
export const useIsConnectedToVoiceChannelForId = function useIsConnectedToVoiceChannelForId(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_2];
  return _require(589).useStateFromStores(items, () => closure_1_3.isInChannel(id, closure_1_2.getId()));
};
