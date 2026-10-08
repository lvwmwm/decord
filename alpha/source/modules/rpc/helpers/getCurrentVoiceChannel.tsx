// Module ID: 7075
// Function ID: 7076
// Name: getCurrentVoiceChannel
// Dependencies: [502, 2063, 5111, 2]
// Exports: default

// Module 7075 (getCurrentVoiceChannel)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import VoiceStateStore from "VoiceStateStore" /* 5111 */;
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
