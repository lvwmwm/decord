// Module ID: 10985
// Function ID: 10986
// Name: VoiceChatHooks
// Dependencies: [502, 5674, 504, 2]
// Exports: useIsConnectedToVoiceChannel, useIsConnectedToVoiceChannelForId

// Module 10985 (VoiceChatHooks)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoiceStateStore from "VoiceStateStore" /* 5674 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/voice_chat/VoiceChatHooks.tsx");

export function useIsConnectedToVoiceChannel(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const items = [VoiceStateStore, AuthenticationStore];
  const obj = id(504);
  return obj.useStateFromStores(items, () => VoiceStateStore.isInChannel(id, AuthenticationStore.getId()));
}
export function useIsConnectedToVoiceChannelForId(arg0) {
  let closure_0;
  _require = arg0;
  const items = [VoiceStateStore, AuthenticationStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => VoiceStateStore.isInChannel(id, AuthenticationStore.getId()));
}
