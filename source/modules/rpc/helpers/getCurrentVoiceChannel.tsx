// Module ID: 6163
// Function ID: 6164
// Name: getCurrentVoiceChannel
// Dependencies: [1218, 1391, 4463, 2]
// Exports: default

// Module 6163 (getCurrentVoiceChannel)
import closure_0 from "fetchFingerprint" /* 1218 */;
import closure_1 from "ensureGuildLoaded" /* 1391 */;
import closure_2 from "updateVoiceState" /* 4463 */;

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
