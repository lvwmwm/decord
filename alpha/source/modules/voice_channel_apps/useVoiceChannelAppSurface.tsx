// Module ID: 19318
// Function ID: 19319
// Name: useVoiceChannelAppSurface
// Dependencies: [6502, 15662, 18983, 504, 12136, 18755, 2]
// Exports: useCurrentVoiceChannelApplicationId, useVoiceChannelAppAvailable, useVoiceChannelAppOpen, useVoiceChannelAppVisible

// Module 19318 (useVoiceChannelAppSurface)
import voiceChannelAppSession from "voiceChannelAppSession" /* 12136 */;
import useChannelAppFrameTeardownDefault from "useChannelAppFrameTeardown" /* 18755 */;
import useVoiceChannelApp from "useVoiceChannelApp" /* 18983 */;
import FramesStore from "FramesStore" /* 6502 */;
import VoiceChannelAppStore from "VoiceChannelAppStore" /* 15662 */;
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
