// Module ID: 5768
// Function ID: 49426
// Name: getCurrentVoiceChannel
// Dependencies: [1194, 1348, 4146, 2]
// Exports: default

// Module 5768 (getCurrentVoiceChannel)
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
