// Module ID: 7466
// Function ID: 7467
// Name: getCurrentVoiceChannel
// Dependencies: [502, 4821, 5616, 2]
// Exports: default

// Module 7466 (getCurrentVoiceChannel)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import VoiceStateStore from "VoiceStateStore" /* 5616 */;
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
