// Module ID: 10616
// Function ID: 82811
// Name: isVoicePanelEnabled
// Dependencies: [4294967295, 4294967295, 4294967295, 0, 0, 0]
// Exports: isVoicePanelEnabled, useIsAnyVoicePanelOpen, useIsVoicePanelFullscreen, useIsVoicePanelMounted, useIsVoicePanelOpen, useIsVoicePanelShowing

// Module 10616 (isVoicePanelEnabled)
import result from "result";

let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
result = result.fileFinishedImporting("modules/voice_panel/VoicePanelUtils.native.tsx");

export const isVoicePanelEnabled = function isVoicePanelEnabled(channel2) {
  let tmp = !arg1(dependencyMap[3]).isStageVoicePanelEnabled("voice_panel_utils");
  if (tmp) {
    let isGuildStageVoiceResult;
    if (null != channel2) {
      isGuildStageVoiceResult = channel2.isGuildStageVoice();
    }
    tmp = null != isGuildStageVoiceResult;
    const tmp2 = isGuildStageVoiceResult;
  }
  if (tmp) {
    tmp = tmp2;
  }
  return !tmp;
};
export const useIsVoicePanelShowing = function useIsVoicePanelShowing() {
  const items = [closure_2, closure_3];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => {
    let obj = closure_2;
    let obj2 = closure_3;
    if (closure_2 === undefined) {
      obj = closure_2;
    }
    if (obj2 === undefined) {
      obj2 = closure_3;
    }
    const channel = obj.getChannel(obj2.getChannelId());
    let tmp = null != channel;
    if (tmp) {
      let result = !channel.isGuildStageVoice();
      if (!result) {
        result = callback(closure_1[3]).isStageVoicePanelEnabled("voice_panel_utils");
        const obj4 = callback(closure_1[3]);
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
  const arg1 = channelId;
  return callback((isChannelOpen) => isChannelOpen.isChannelOpen(isChannelOpen));
};
export const useIsAnyVoicePanelOpen = function useIsAnyVoicePanelOpen() {
  return callback((isAnyVoicePanelOpen) => isAnyVoicePanelOpen.isAnyVoicePanelOpen());
};
export const useIsVoicePanelMounted = function useIsVoicePanelMounted(channelId) {
  const arg1 = channelId;
  return callback((isMounted) => isMounted.isMounted(isMounted));
};
