// Module ID: 18183
// Function ID: 18184
// Name: useVoiceChannelAppSurface
// Dependencies: [10947, 18184, 558, 17898, 576, 18185, 504, 17682, 2]

// Module 18183 (useVoiceChannelAppSurface)
import useChannelAppFrameTeardownDefault from "useChannelAppFrameTeardown" /* 17682 */;
import useVoiceChannelApp from "useVoiceChannelApp" /* 17898 */;
import voiceChannelAppSession from "voiceChannelAppSession" /* 18185 */;
import FramesStore from "FramesStore" /* 10947 */;
import VoiceChannelAppStore from "VoiceChannelAppStore" /* 18184 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVoiceChannelAppAvailable(arg0, arg1) {
  let tmp = arg1;
  useVoiceChannelApp;
  if (arg1) {
    tmp = null != tmp3;
  }
  return tmp;
}) : (function useVoiceChannelAppAvailable(arg0, arg1) {
  let tmp = arg1;
  useVoiceChannelApp;
  if (arg1) {
    tmp = null != tmp3;
  }
  return tmp;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVoiceChannelAppOpen(id, arg1) {
  let first;
  _require = id;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(5);
  const obj2 = require("useVoiceChannelApp");
  const voiceChannelApplicationId = obj2.useVoiceChannelApplicationId(id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === voiceChannelApplicationId) {
    let tmp7;
    let tmp8;
    if (cResult[2] === id.id) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    let stateFromStores = arg1;
    const tmpResult = tmp(504);
    if (arg1) {
      stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    }
    return stateFromStores;
  }
  const fn = function p() {
    const hasVoiceChannelAppSession = voiceChannelAppSession.hasVoiceChannelAppSession;
    const getFramesForSurface = FramesStore.getFramesForSurface;
    voiceChannelAppSession;
    const obj = voiceChannelAppSession;
    return hasVoiceChannelAppSession(getFramesForSurface(obj.voiceChannelAppSurface(id.id)), voiceChannelApplicationId);
  };
  const items1 = [id.id, voiceChannelApplicationId];
  cResult[1] = voiceChannelApplicationId;
  cResult[2] = id.id;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : (function useVoiceChannelAppOpen(id, arg1) {
  _require = id;
  let stateFromStores = arg1;
  let obj = require("useVoiceChannelApp");
  const voiceChannelApplicationId = obj.useVoiceChannelApplicationId(id);
  const items = [FramesStore];
  const items1 = [id.id, voiceChannelApplicationId];
  const obj2 = require("get initialized");
  if (arg1) {
    stateFromStores = obj2.useStateFromStores(items, () => {
      const hasVoiceChannelAppSession = voiceChannelAppSession.hasVoiceChannelAppSession;
      const getFramesForSurface = FramesStore.getFramesForSurface;
      voiceChannelAppSession;
      const obj = voiceChannelAppSession;
      return hasVoiceChannelAppSession(getFramesForSurface(obj.voiceChannelAppSurface(id.id)), voiceChannelApplicationId);
    }, items1);
  }
  return stateFromStores;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVoiceChannelAppVisible(id) {
  let first;
  _require = id;
  const obj = require("react");
  const cResult = obj.c(5);
  const obj2 = require("useVoiceChannelApp");
  const voiceChannelApplicationId = obj2.useVoiceChannelApplicationId(id);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceChannelAppStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === voiceChannelApplicationId) {
    let tmp7;
    let tmp8;
    if (cResult[2] === id.id) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp7, tmp8);
  }
  const fn = function c() {
    return VoiceChannelAppStore.isAppVisible(id.id, null != voiceChannelApplicationId);
  };
  const items1 = [id.id, voiceChannelApplicationId];
  cResult[1] = voiceChannelApplicationId;
  cResult[2] = id.id;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : (function useVoiceChannelAppVisible(id) {
  _require = id;
  const obj = require("useVoiceChannelApp");
  const voiceChannelApplicationId = obj.useVoiceChannelApplicationId(id);
  const items = [VoiceChannelAppStore];
  const items1 = [id.id, voiceChannelApplicationId];
  const obj2 = require("get initialized");
  return obj2.useStateFromStores(items, () => VoiceChannelAppStore.isAppVisible(id.id, null != voiceChannelApplicationId), items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentVoiceChannelApplicationId(application_id, arg1) {
  let voiceChannelApplicationId = null;
  const obj = useVoiceChannelApp;
  if (arg1) {
    voiceChannelApplicationId = obj.useVoiceChannelApplicationId(application_id);
  }
  useChannelAppFrameTeardownDefault(application_id);
  return voiceChannelApplicationId;
}) : (function useCurrentVoiceChannelApplicationId(application_id, arg1) {
  let voiceChannelApplicationId = null;
  const obj = useVoiceChannelApp;
  if (arg1) {
    voiceChannelApplicationId = obj.useVoiceChannelApplicationId(application_id);
  }
  useChannelAppFrameTeardownDefault(application_id);
  return voiceChannelApplicationId;
});
const result = size.fileFinishedImporting("modules/voice_channel_apps/useVoiceChannelAppSurface.tsx");

export const useVoiceChannelAppAvailable = tmp2;
export const useVoiceChannelAppOpen = tmp3;
export const useVoiceChannelAppVisible = tmp4;
export const useCurrentVoiceChannelApplicationId = tmp5;
