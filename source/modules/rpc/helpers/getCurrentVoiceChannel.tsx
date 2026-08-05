// Module ID: 5882
// Function ID: 5883
// Name: getCurrentVoiceChannel
// Dependencies: [1218, 1372, 4271, 2]
// Exports: default

// Module 5882 (getCurrentVoiceChannel)
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import updateVoiceState from "updateVoiceState";

const result = require("updateVoiceState").fileFinishedImporting("modules/rpc/helpers/getCurrentVoiceChannel.tsx");

export default function getCurrentVoiceChannel() {
  const id = store.getId();
  voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, store.getSessionId());
  let channelId;
  if (voiceStateForSession != null) {
    channelId = voiceStateForSession.channelId;
  }
  return channel.getChannel(channelId);
};
