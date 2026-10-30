// Module ID: 7548
// Function ID: 7549
// Name: getCurrentVoiceChannel
// Dependencies: [502, 4858, 5674, 2]
// Exports: default

// Module 7548 (getCurrentVoiceChannel)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import VoiceStateStore from "VoiceStateStore" /* 5674 */;
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
