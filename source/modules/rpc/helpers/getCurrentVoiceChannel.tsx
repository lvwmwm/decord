// Module ID: 10757
// Function ID: 83478
// Name: getCurrentVoiceChannel
// Dependencies: [1194, 1348, 4181, 2]
// Exports: default

// Module 10757 (getCurrentVoiceChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";
import closure_2 from "_isNativeReflectConstruct";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rpc/helpers/getCurrentVoiceChannel.tsx");

export default function getCurrentVoiceChannel() {
  const id = store.getId();
  voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, store.getSessionId());
  let channelId;
  if (null != voiceStateForSession) {
    channelId = voiceStateForSession.channelId;
  }
  return channel.getChannel(channelId);
};
