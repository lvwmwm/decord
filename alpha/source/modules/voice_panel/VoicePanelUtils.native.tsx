// Module ID: 11822
// Function ID: 11823
// Name: VoicePanelUtils
// Dependencies: [4858, 5759, 6869, 563, 2]
// Exports: useIsAnyVoicePanelOpen, useIsVoicePanelFullscreen, useIsVoicePanelMounted, useIsVoicePanelOpen, useIsVoicePanelShowing

// Module 11822 (VoicePanelUtils)
import useStateFromStores from "useStateFromStores" /* 563 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5759 */;
import VoicePanelStore from "VoicePanelStore" /* 6869 */;
import size from "module_2" /* 2 */;

let channel;

const result = size.fileFinishedImporting("modules/voice_panel/VoicePanelUtils.native.tsx");

export function useIsVoicePanelShowing() {
  let channelId;
  const items = [ChannelStore, RTCConnectionStore];
  const obj = useStateFromStores;
  return obj.useStateFromStores(items, () => {
    channel = channel.getChannel(channelId.getChannelId());
    const tmp = null != channel && !channel.isGuildStageVoice();
    return tmp;
  });
}
export function useIsVoicePanelFullscreen() {
  return VoicePanelStore((isVoicePanelFullscreen) => isVoicePanelFullscreen.isVoicePanelFullscreen());
}
export function useIsVoicePanelOpen(channelId) {
  let closure_0 = channelId;
  return VoicePanelStore((isChannelOpen) => isChannelOpen.isChannelOpen(closure_0));
}
export function useIsAnyVoicePanelOpen() {
  return VoicePanelStore((isAnyVoicePanelOpen) => isAnyVoicePanelOpen.isAnyVoicePanelOpen());
}
export function useIsVoicePanelMounted(channelId) {
  let closure_0 = channelId;
  return VoicePanelStore((isMounted) => isMounted.isMounted(closure_0));
}
