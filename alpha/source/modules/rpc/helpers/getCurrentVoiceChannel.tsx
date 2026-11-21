// Module ID: 10989
// Function ID: 10990
// Name: getCurrentVoiceChannel
// Dependencies: [502, 4762, 5561, 2]
// Exports: default

// Module 10989 (getCurrentVoiceChannel)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import VoiceStateStore from "VoiceStateStore" /* 5561 */;
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
