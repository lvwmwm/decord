// Module ID: 14624
// Function ID: 14625
// Name: VoiceChannelAppActionCreators
// Dependencies: [6984, 572, 13415, 11078, 2]
// Exports: closeVoiceChannelApp, toggleVoiceChannelAppSurface

// Module 14624 (VoiceChannelAppActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import leaveFrame from "leaveFrame" /* 11078 */;
import voiceChannelAppSession from "voiceChannelAppSession" /* 13415 */;
import FramesStore from "FramesStore" /* 6984 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_channel_apps/VoiceChannelAppActionCreators.tsx");

export function toggleVoiceChannelAppSurface(id) {
  const obj = DispatcherDefault;
  const obj2 = { type: "VOICE_CHANNEL_APP_SURFACE_TOGGLE", channelId: id };
  obj.dispatch(obj2);
}
export function closeVoiceChannelApp(channelId) {
  const getFramesForSurface = FramesStore.getFramesForSurface;
  const obj = voiceChannelAppSession;
  const framesForSurface = getFramesForSurface(obj.voiceChannelAppSurface(channelId));
  for (const item10014 of framesForSurface) {
    let obj2 = leaveFrame;
    let leaveFrameResult = obj2.leaveFrame(item10014.id);
    continue;
  }
  const obj3 = DispatcherDefault;
  const obj4 = { type: "VOICE_CHANNEL_APP_CLOSE", channelId };
  obj3.dispatch(obj4);
}
