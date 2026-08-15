// Module ID: 8675
// Function ID: 8676
// Name: useIsConnectedToVoiceChannel
// Dependencies: [1218, 4542, 589, 2]
// Exports: useIsConnectedToVoiceChannel, useIsConnectedToVoiceChannelForId

// Module 8675 (useIsConnectedToVoiceChannel)
import fetchFingerprint from "fetchFingerprint";
import updateVoiceState from "updateVoiceState";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/voice_chat/VoiceChatHooks.tsx");

export const useIsConnectedToVoiceChannel = function useIsConnectedToVoiceChannel(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const items = [updateVoiceState, fetchFingerprint];
  return id(589).useStateFromStores(items, () => outer1_3.isInChannel(id, outer1_2.getId()));
};
export const useIsConnectedToVoiceChannelForId = function useIsConnectedToVoiceChannelForId(arg0) {
  const _require = arg0;
  const items = [updateVoiceState, fetchFingerprint];
  return _require(589).useStateFromStores(items, () => outer1_3.isInChannel(id, outer1_2.getId()));
};
