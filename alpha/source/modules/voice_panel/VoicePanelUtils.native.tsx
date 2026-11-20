// Module ID: 10734
// Function ID: 10735
// Name: VoicePanelUtils
// Dependencies: [4643, 5535, 6376, 563, 10735, 2]
// Exports: useIsAnyVoicePanelOpen, useIsVoicePanelFullscreen, useIsVoicePanelMounted, useIsVoicePanelOpen, useIsVoicePanelShowing

// Module 10734 (VoicePanelUtils)
import useStateFromStores from "useStateFromStores" /* 563 */;
import StageChannelUnifiedCallExperiment from "StageChannelUnifiedCallExperiment" /* 10735 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5535 */;
import VoicePanelStore from "VoicePanelStore" /* 6376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_panel/VoicePanelUtils.native.tsx");

export function useIsVoicePanelShowing() {
  let channel;
  let channelId;
  const items = [ChannelStore, RTCConnectionStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId.getChannelId()));
  StageChannelUnifiedCallExperiment;
  let tmp3 = null != stateFromStores;
  if (tmp3) {
    const isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
    let tmp5 = !isGuildStageVoiceResult;
    if (isGuildStageVoiceResult) {
      tmp5 = tmp2;
    }
    tmp3 = tmp5;
  }
  return tmp3;
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
