// Module ID: 15041
// Function ID: 15042
// Name: VoiceChannelAppActionCreators
// Dependencies: [6956, 572, 13940, 7285, 2]
// Exports: closeVoiceChannelApp, toggleVoiceChannelAppSurface

// Module 15041 (VoiceChannelAppActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import leaveFrame from "leaveFrame" /* 7285 */;
import voiceChannelAppSession from "voiceChannelAppSession" /* 13940 */;
import FramesStore from "FramesStore" /* 6956 */;
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
