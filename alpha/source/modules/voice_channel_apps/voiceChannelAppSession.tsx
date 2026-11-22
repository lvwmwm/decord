// Module ID: 12207
// Function ID: 12208
// Name: voiceChannelAppSession
// Dependencies: [5557, 2]
// Exports: hasVoiceChannelAppSession, voiceChannelAppSurface

// Module 12207 (voiceChannelAppSession)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5557 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_channel_apps/voiceChannelAppSession.tsx");

export function voiceChannelAppSurface(id) {
  const obj = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, channelId: id };
  return obj;
}
export function hasVoiceChannelAppSession(framesForSurface, voiceChannelApplicationId) {
  let closure_0 = voiceChannelApplicationId;
  const someResult = null != voiceChannelApplicationId && framesForSurface.some((applicationId) => applicationId.applicationId === voiceChannelApplicationId);
  return someResult;
}
