// Module ID: 19631
// Function ID: 19632
// Name: useVoiceChannelAppSurface
// Dependencies: [6901, 16684, 19268, 504, 13412, 19038, 2]
// Exports: useCurrentVoiceChannelApplicationId, useVoiceChannelAppAvailable, useVoiceChannelAppOpen, useVoiceChannelAppVisible

// Module 19631 (useVoiceChannelAppSurface)
import voiceChannelAppSession from "voiceChannelAppSession" /* 13412 */;
import useChannelAppFrameTeardownDefault from "useChannelAppFrameTeardown" /* 19038 */;
import useVoiceChannelApp from "useVoiceChannelApp" /* 19268 */;
import FramesStore from "FramesStore" /* 6901 */;
import VoiceChannelAppStore from "VoiceChannelAppStore" /* 16684 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/voice_channel_apps/useVoiceChannelAppSurface.tsx");

export function useVoiceChannelAppAvailable(channel, inCall) {
  let tmp = inCall;
  useVoiceChannelApp;
  if (inCall) {
    tmp = null != tmp3;
  }
  return tmp;
}
export function useVoiceChannelAppOpen(channel, inCall) {
  _require = channel;
  let stateFromStores = inCall;
  let obj = require("useVoiceChannelApp");
  const voiceChannelApplicationId = obj.useVoiceChannelApplicationId(channel);
  const items = [FramesStore];
  const items1 = [channel.id, voiceChannelApplicationId];
  const obj2 = require("get initialized");
  if (inCall) {
    stateFromStores = obj2.useStateFromStores(items, () => {
      const hasVoiceChannelAppSession = voiceChannelAppSession.hasVoiceChannelAppSession;
      const getFramesForSurface = FramesStore.getFramesForSurface;
      voiceChannelAppSession;
      const obj = voiceChannelAppSession;
      return hasVoiceChannelAppSession(getFramesForSurface(obj.voiceChannelAppSurface(channel.id)), voiceChannelApplicationId);
    }, items1);
  }
  return stateFromStores;
}
export function useVoiceChannelAppVisible(channel) {
  _require = channel;
  const obj = require("useVoiceChannelApp");
  const voiceChannelApplicationId = obj.useVoiceChannelApplicationId(channel);
  const items = [VoiceChannelAppStore];
  const items1 = [channel.id, voiceChannelApplicationId];
  const obj2 = require("get initialized");
  return obj2.useStateFromStores(items, () => VoiceChannelAppStore.isAppVisible(channel.id, null != voiceChannelApplicationId), items1);
}
export function useCurrentVoiceChannelApplicationId(channel, arg1) {
  let voiceChannelApplicationId = null;
  const obj = useVoiceChannelApp;
  if (arg1) {
    voiceChannelApplicationId = obj.useVoiceChannelApplicationId(channel);
  }
  useChannelAppFrameTeardownDefault(channel);
  return voiceChannelApplicationId;
}
