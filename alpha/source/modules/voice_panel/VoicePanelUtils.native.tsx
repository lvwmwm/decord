// Module ID: 11344
// Function ID: 11345
// Name: VoicePanelUtils
// Dependencies: [5019, 5920, 6955, 563, 11345, 2]
// Exports: useIsAnyVoicePanelOpen, useIsVoicePanelFullscreen, useIsVoicePanelMounted, useIsVoicePanelOpen, useIsVoicePanelShowing

// Module 11344 (VoicePanelUtils)
import useStateFromStores from "useStateFromStores" /* 563 */;
import StageChannelUnifiedCallExperiment from "StageChannelUnifiedCallExperiment" /* 11345 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5920 */;
import VoicePanelStore from "VoicePanelStore" /* 6955 */;
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
