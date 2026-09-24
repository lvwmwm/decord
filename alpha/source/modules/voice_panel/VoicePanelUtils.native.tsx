// Module ID: 9854
// Function ID: 9855
// Name: VoicePanelUtils
// Dependencies: [2044, 4852, 5037, 563, 2]
// Exports: useIsAnyVoicePanelOpen, useIsVoicePanelFullscreen, useIsVoicePanelMounted, useIsVoicePanelOpen, useIsVoicePanelShowing

// Module 9854 (VoicePanelUtils)
import useStateFromStores from "useStateFromStores" /* 563 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4852 */;
import VoicePanelStore from "VoicePanelStore" /* 5037 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/VoicePanelUtils.native.tsx");

export const useIsVoicePanelShowing = function useIsVoicePanelShowing() {
  const items = [ChannelStore, RTCConnectionStore];
  return useStateFromStores.useStateFromStores(items, () => {
    channel = channel.getChannel(channelId.getChannelId());
    return null != channel && !channel.isGuildStageVoice();
  });
};
export const useIsVoicePanelFullscreen = function useIsVoicePanelFullscreen() {
  return VoicePanelStore((isVoicePanelFullscreen) => isVoicePanelFullscreen.isVoicePanelFullscreen());
};
export const useIsVoicePanelOpen = function useIsVoicePanelOpen(channelId) {
  closure_0 = channelId;
  return VoicePanelStore((isChannelOpen) => isChannelOpen.isChannelOpen(closure_0));
};
export const useIsAnyVoicePanelOpen = function useIsAnyVoicePanelOpen() {
  return VoicePanelStore((isAnyVoicePanelOpen) => isAnyVoicePanelOpen.isAnyVoicePanelOpen());
};
export const useIsVoicePanelMounted = function useIsVoicePanelMounted(channelId) {
  closure_0 = channelId;
  return VoicePanelStore((isMounted) => isMounted.isMounted(closure_0));
};
