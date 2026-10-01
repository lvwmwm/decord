// Module ID: 8963
// Function ID: 8964
// Name: VoicePanelUtils
// Dependencies: [2045, 4859, 5044, 563, 2]
// Exports: useIsAnyVoicePanelOpen, useIsVoicePanelFullscreen, useIsVoicePanelMounted, useIsVoicePanelOpen, useIsVoicePanelShowing

// Module 8963 (VoicePanelUtils)
import useStateFromStores from "useStateFromStores" /* 563 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import VoicePanelStore from "VoicePanelStore" /* 5044 */;
import size from "module_2" /* 2 */;

let channel;

const result = size.fileFinishedImporting("modules/voice_panel/VoicePanelUtils.native.tsx");

export const useIsVoicePanelShowing = function useIsVoicePanelShowing() {
  let channelId;
  const items = [ChannelStore, RTCConnectionStore];
  const obj = useStateFromStores;
  return obj.useStateFromStores(items, () => {
    channel = channel.getChannel(channelId.getChannelId());
    const tmp = null != channel && !channel.isGuildStageVoice();
    return tmp;
  });
};
export const useIsVoicePanelFullscreen = function useIsVoicePanelFullscreen() {
  return VoicePanelStore((isVoicePanelFullscreen) => isVoicePanelFullscreen.isVoicePanelFullscreen());
};
export const useIsVoicePanelOpen = function useIsVoicePanelOpen(channelId) {
  let closure_0 = channelId;
  return VoicePanelStore((isChannelOpen) => isChannelOpen.isChannelOpen(closure_0));
};
export const useIsAnyVoicePanelOpen = function useIsAnyVoicePanelOpen() {
  return VoicePanelStore((isAnyVoicePanelOpen) => isAnyVoicePanelOpen.isAnyVoicePanelOpen());
};
export const useIsVoicePanelMounted = function useIsVoicePanelMounted(channelId) {
  let closure_0 = channelId;
  return VoicePanelStore((isMounted) => isMounted.isMounted(closure_0));
};
