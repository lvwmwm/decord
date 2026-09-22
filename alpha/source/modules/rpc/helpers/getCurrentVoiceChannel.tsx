// Module ID: 7618
// Function ID: 7619
// Name: getCurrentVoiceChannel
// Dependencies: [502, 2042, 4776, 2]
// Exports: default

// Module 7618 (getCurrentVoiceChannel)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import VoiceStateStore from "VoiceStateStore" /* 4776 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentVoiceChannel.tsx");

export default function getCurrentVoiceChannel() {
  const id = AuthenticationStore.getId();
  const voiceStateForSession = VoiceStateStore.getVoiceStateForSession(id, AuthenticationStore.getSessionId());
  let channelId;
  if (voiceStateForSession != null) {
    channelId = voiceStateForSession.channelId;
  }
  return ChannelStore.getChannel(channelId);
};
