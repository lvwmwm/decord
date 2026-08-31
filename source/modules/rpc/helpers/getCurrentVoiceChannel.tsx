// Module ID: 6185
// Function ID: 6186
// Name: getCurrentVoiceChannel
// Dependencies: [1218, 1387, 4467, 2]
// Exports: default

// Module 6185 (getCurrentVoiceChannel)
import closure_0 from "fetchFingerprint" /* 1218 */;
import closure_1 from "ensureGuildLoaded" /* 1387 */;
import closure_2 from "updateVoiceState" /* 4467 */;

const result = require("set").fileFinishedImporting("modules/rpc/helpers/getCurrentVoiceChannel.tsx");

export default function getCurrentVoiceChannel() {
  const id = store.getId();
  voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, store.getSessionId());
  let channelId;
  if (voiceStateForSession != null) {
    channelId = voiceStateForSession.channelId;
  }
  return channel.getChannel(channelId);
};
