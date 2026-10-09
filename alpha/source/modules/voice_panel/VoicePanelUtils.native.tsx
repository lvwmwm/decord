// Module ID: 10986
// Function ID: 10987
// Name: VoicePanelUtils
// Dependencies: [2064, 5109, 6081, 558, 576, 573, 2]

// Module 10986 (VoicePanelUtils)
import react from "react" /* 576 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5109 */;
import VoicePanelStore from "VoicePanelStore" /* 6081 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel;

let tmp;
const useStateFromStores = tmp(573);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsVoicePanelShowing() {
  let channelId;
  let tmp4;
  let tmp5;
  let tmp = require;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, RTCConnectionStore];
    const fn = function s() {
      channel = channel.getChannel(channelId.getChannelId());
      const tmp = null != channel && !channel.isGuildStageVoice();
      return tmp;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = useStateFromStores;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useIsVoicePanelShowing() {
  let channelId;
  const items = [ChannelStore, RTCConnectionStore];
  const obj = useStateFromStores;
  return obj.useStateFromStores(items, () => {
    channel = channel.getChannel(channelId.getChannelId());
    const tmp = null != channel && !channel.isGuildStageVoice();
    return tmp;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsVoicePanelFullscreen() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(isVoicePanelFullscreen) {
      return isVoicePanelFullscreen.isVoicePanelFullscreen();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return VoicePanelStore(first);
}) : (function useIsVoicePanelFullscreen() {
  return VoicePanelStore((isVoicePanelFullscreen) => isVoicePanelFullscreen.isVoicePanelFullscreen());
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsVoicePanelOpen(arg0) {
  let tmp2;
  let closure_0 = arg0;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function l(isChannelOpen) {
      return isChannelOpen.isChannelOpen(closure_0);
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return VoicePanelStore(tmp2);
}) : (function useIsVoicePanelOpen(arg0) {
  let closure_0 = arg0;
  return VoicePanelStore((isChannelOpen) => isChannelOpen.isChannelOpen(closure_0));
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsAnyVoicePanelOpen() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(isAnyVoicePanelOpen) {
      return isAnyVoicePanelOpen.isAnyVoicePanelOpen();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return VoicePanelStore(first);
}) : (function useIsAnyVoicePanelOpen() {
  return VoicePanelStore((isAnyVoicePanelOpen) => isAnyVoicePanelOpen.isAnyVoicePanelOpen());
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsVoicePanelMounted(arg0) {
  let tmp2;
  let closure_0 = arg0;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function l(isMounted) {
      return isMounted.isMounted(closure_0);
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return VoicePanelStore(tmp2);
}) : (function useIsVoicePanelMounted(arg0) {
  let closure_0 = arg0;
  return VoicePanelStore((isMounted) => isMounted.isMounted(closure_0));
});
const result = size.fileFinishedImporting("modules/voice_panel/VoicePanelUtils.native.tsx");

export const useIsVoicePanelShowing = tmp2;
export const useIsVoicePanelFullscreen = tmp3;
export const useIsVoicePanelOpen = tmp4;
export const useIsAnyVoicePanelOpen = tmp5;
export const useIsVoicePanelMounted = tmp6;
