// Module ID: 10662
// Function ID: 83100
// Name: isVoicePanelEnabled
// Dependencies: [1348, 4202, 4342, 4343, 624, 2]
// Exports: isVoicePanelEnabled, useIsAnyVoicePanelOpen, useIsVoicePanelFullscreen, useIsVoicePanelMounted, useIsVoicePanelOpen, useIsVoicePanelShowing

// Module 10662 (isVoicePanelEnabled)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import withEqualityFn from "withEqualityFn";

const require = arg1;
let result = require("withEqualityFn").fileFinishedImporting("modules/voice_panel/VoicePanelUtils.native.tsx");

export const isVoicePanelEnabled = function isVoicePanelEnabled(channel2) {
  let tmp = !require(4343) /* useIsStageVoicePanelEnabled */.isStageVoicePanelEnabled("voice_panel_utils");
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
  const items = [_isNativeReflectConstruct, closure_3];
  return require(624) /* defaultAreStatesEqual */.useStateFromStores(items, () => {
    let obj = outer1_2;
    let obj2 = outer1_3;
    if (outer1_2 === undefined) {
      obj = outer1_2;
    }
    if (obj2 === undefined) {
      obj2 = outer1_3;
    }
    const channel = obj.getChannel(obj2.getChannelId());
    let tmp = null != channel;
    if (tmp) {
      let result = !channel.isGuildStageVoice();
      if (!result) {
        result = outer1_0(outer1_1[3]).isStageVoicePanelEnabled("voice_panel_utils");
        const obj4 = outer1_0(outer1_1[3]);
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
