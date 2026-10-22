// Module ID: 13802
// Function ID: 13803
// Name: voiceChannelAppSession
// Dependencies: [5612, 2]
// Exports: hasVoiceChannelAppSession, voiceChannelAppSurface

// Module 13802 (voiceChannelAppSession)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5612 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_channel_apps/voiceChannelAppSession.tsx");

export const voiceChannelAppSurface = function voiceChannelAppSurface(id) {
  const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, channelId: id };
  return obj;
};
export const hasVoiceChannelAppSession = function hasVoiceChannelAppSession(framesForSurface, voiceChannelApplicationId) {
  let closure_0 = voiceChannelApplicationId;
  const someResult = null != voiceChannelApplicationId && framesForSurface.some((applicationId) => applicationId.applicationId === voiceChannelApplicationId);
  return someResult;
};
