// Module ID: 7373
// Function ID: 7374
// Name: getCurrentVoiceChannel
// Dependencies: [502, 1957, 4579, 2]
// Exports: default

// Module 7373 (getCurrentVoiceChannel)
import closure_0 from "fetchFingerprint" /* 502 */;
import closure_1 from "ensureGuildLoaded" /* 1957 */;
import closure_2 from "updateVoiceState" /* 4579 */;

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
