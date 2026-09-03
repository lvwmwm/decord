// Module ID: 6227
// Function ID: 6228
// Name: getCurrentVoiceChannel
// Dependencies: [1215, 1386, 4497, 2]
// Exports: default

// Module 6227 (getCurrentVoiceChannel)
import closure_0 from "fetchFingerprint" /* 1215 */;
import closure_1 from "ensureGuildLoaded" /* 1386 */;
import closure_2 from "updateVoiceState" /* 4497 */;

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
