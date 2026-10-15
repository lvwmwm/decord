// Module ID: 7306
// Function ID: 7307
// Name: getCurrentVoiceChannel
// Dependencies: [502, 2065, 5172, 2]
// Exports: default

// Module 7306 (getCurrentVoiceChannel)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import VoiceStateStore from "VoiceStateStore" /* 5172 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentVoiceChannel.tsx");

export default function getCurrentVoiceChannel() {
  const getVoiceStateForSession = VoiceStateStore.getVoiceStateForSession;
  const id = AuthenticationStore.getId();
  const voiceStateForSession = getVoiceStateForSession(id, AuthenticationStore.getSessionId());
  let channelId;
  if (voiceStateForSession != null) {
    channelId = voiceStateForSession.channelId;
  }
  return ChannelStore.getChannel(channelId);
};
