// Module ID: 8667
// Function ID: 8668
// Name: isVoicePanelEnabled
// Dependencies: [1391, 4539, 8664, 8665, 647, 2]
// Exports: isVoicePanelEnabled, useIsAnyVoicePanelOpen, useIsVoicePanelFullscreen, useIsVoicePanelMounted, useIsVoicePanelOpen, useIsVoicePanelShowing

// Module 8667 (isVoicePanelEnabled)
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import withEqualityFn from "withEqualityFn";

const require = arg1;
let result = require("withEqualityFn").fileFinishedImporting("modules/voice_panel/VoicePanelUtils.native.tsx");

export const isVoicePanelEnabled = function isVoicePanelEnabled(channel2) {
  const result = require(8665) /* useIsStageVoicePanelEnabled */.isStageVoicePanelEnabled("voice_panel_utils");
  let tmp2 = !result;
  if (!result) {
    let isGuildStageVoiceResult;
    if (channel2 != null) {
      isGuildStageVoiceResult = channel2.isGuildStageVoice();
    }
    tmp2 = isGuildStageVoiceResult;
  }
  return !tmp2;
};
export const useIsVoicePanelShowing = function useIsVoicePanelShowing() {
  const items = [ensureGuildLoaded, createRTCConnection];
  return require(647) /* defaultAreStatesEqual */.useStateFromStores(items, () => {
    channel = channel.getChannel(channelId.getChannelId());
    let tmp = null != channel;
    if (tmp) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      let result = !isGuildStageVoiceResult;
      if (isGuildStageVoiceResult) {
        result = callback(table[3]).isStageVoicePanelEnabled("voice_panel_utils");
        const obj2 = callback(table[3]);
      }
      tmp = result;
    }
    return tmp;
  });
};
export const useIsVoicePanelFullscreen = function useIsVoicePanelFullscreen() {
  return callback((isVoicePanelFullscreen) => isVoicePanelFullscreen.isVoicePanelFullscreen());
};
export const useIsVoicePanelOpen = function useIsVoicePanelOpen(channelId) {
  let closure_0 = channelId;
  return callback((isChannelOpen) => isChannelOpen.isChannelOpen(closure_0));
};
export const useIsAnyVoicePanelOpen = function useIsAnyVoicePanelOpen() {
  return callback((isAnyVoicePanelOpen) => isAnyVoicePanelOpen.isAnyVoicePanelOpen());
};
export const useIsVoicePanelMounted = function useIsVoicePanelMounted(channelId) {
  let closure_0 = channelId;
  return callback((isMounted) => isMounted.isMounted(closure_0));
};
