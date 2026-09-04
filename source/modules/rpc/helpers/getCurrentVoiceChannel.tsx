// Module ID: 7311
// Function ID: 7312
// Name: getCurrentVoiceChannel
// Dependencies: [1215, 1386, 4500, 2]
// Exports: default

// Module 7311 (getCurrentVoiceChannel)
import closure_0 from "fetchFingerprint" /* 1215 */;
import closure_1 from "ensureGuildLoaded" /* 1386 */;
import closure_2 from "updateVoiceState" /* 4500 */;

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
