// Module ID: 14083
// Function ID: 14084
// Name: VoiceChannelAppActionCreators
// Dependencies: [6810, 584, 12770, 10803, 2]
// Exports: closeVoiceChannelApp, toggleVoiceChannelAppSurface

// Module 14083 (VoiceChannelAppActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import leaveFrame from "leaveFrame" /* 10803 */;
import voiceChannelAppSession from "voiceChannelAppSession" /* 12770 */;
import FramesStore from "FramesStore" /* 6810 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_channel_apps/VoiceChannelAppActionCreators.tsx");

export const toggleVoiceChannelAppSurface = function toggleVoiceChannelAppSurface(id) {
  const obj = DispatcherDefault;
  const obj2 = { type: "VOICE_CHANNEL_APP_SURFACE_TOGGLE", channelId: id };
  obj.dispatch(obj2);
};
export const closeVoiceChannelApp = function closeVoiceChannelApp(id) {
  const getFramesForSurface = FramesStore.getFramesForSurface;
  const obj = voiceChannelAppSession;
  const framesForSurface = getFramesForSurface(obj.voiceChannelAppSurface(id));
  for (const item10014 of framesForSurface) {
    let obj2 = leaveFrame;
    let leaveFrameResult = obj2.leaveFrame(item10014.id);
    continue;
  }
  const obj3 = DispatcherDefault;
  const obj4 = { type: "VOICE_CHANNEL_APP_CLOSE", channelId: id };
  obj3.dispatch(obj4);
};
