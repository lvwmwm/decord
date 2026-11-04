// Module ID: 14610
// Function ID: 14611
// Name: VoiceChannelAppActionCreators
// Dependencies: [6981, 572, 13407, 11125, 2]
// Exports: closeVoiceChannelApp, toggleVoiceChannelAppSurface

// Module 14610 (VoiceChannelAppActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import leaveFrame from "leaveFrame" /* 11125 */;
import voiceChannelAppSession from "voiceChannelAppSession" /* 13407 */;
import FramesStore from "FramesStore" /* 6981 */;
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
