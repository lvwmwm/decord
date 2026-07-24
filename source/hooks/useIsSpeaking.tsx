// Module ID: 10563
// Function ID: 82458
// Name: _checkIsSpeaking
// Dependencies: [4578, 1906, 4952, 4146, 566, 2]
// Exports: default, getIsSpeaking

// Module 10563 (_checkIsSpeaking)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
function _checkIsSpeaking(stateFromStores1, arg1, stateFromStores2) {
  let tmp = stateFromStores1;
  if (!stateFromStores1) {
    tmp = arg1;
  }
  if (!tmp) {
    tmp = stateFromStores2;
  }
  return tmp;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("hooks/useIsSpeaking.tsx");

export default function useIsSpeaking(checkSoundboardSounds) {
  let checkSoundSharing;
  let require;
  ({ userId: require, checkSoundSharing } = checkSoundboardSounds);
  if (checkSoundSharing === undefined) {
    checkSoundSharing = false;
  }
  let flag = checkSoundboardSounds.checkSoundboardSounds;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = checkSoundboardSounds.checkIsMuted;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const context = checkSoundboardSounds.context;
  flag2 = undefined;
  const items = [closure_5, context];
  const stateFromStores = require(checkSoundSharing[4]).useStateFromStores(items, () => {
    const voiceChannelId = context.getVoiceChannelId();
    let voiceStateForChannel = null;
    if (null != voiceChannelId) {
      voiceStateForChannel = outer1_5.getVoiceStateForChannel(voiceChannelId, closure_0);
    }
    return voiceStateForChannel;
  });
  if (flag2) {
    let mute;
    if (null != stateFromStores) {
      mute = stateFromStores.mute;
    }
    if (!mute) {
      let selfMute;
      if (null != stateFromStores) {
        selfMute = stateFromStores.selfMute;
      }
      mute = selfMute;
    }
    flag2 = mute;
  }
  const obj = require(checkSoundSharing[4]);
  const items1 = [flag2];
  const stateFromStores1 = require(checkSoundSharing[4]).useStateFromStores(items1, () => {
    let isSpeakingResult = flag2.isSpeaking(closure_0, context);
    if (isSpeakingResult) {
      isSpeakingResult = !flag2;
    }
    return isSpeakingResult;
  });
  const obj2 = require(checkSoundSharing[4]);
  const items2 = [flag2];
  const stateFromStores2 = require(checkSoundSharing[4]).useStateFromStores(items2, () => flag2.isSoundSharing(closure_0) && checkSoundSharing);
  const obj3 = require(checkSoundSharing[4]);
  const items3 = [flag];
  return _checkIsSpeaking(stateFromStores1, require(checkSoundSharing[4]).useStateFromStores(items3, () => flag.isUserPlayingSounds(closure_0) && flag), stateFromStores2);
};
export const getIsSpeaking = function getIsSpeaking(checkSoundboardSounds) {
  let checkSoundSharing;
  let obj;
  let obj2;
  let obj3;
  let obj4;
  let userId;
  let tmp = arg1;
  ({ userId, checkSoundSharing } = checkSoundboardSounds);
  if (checkSoundSharing === undefined) {
    checkSoundSharing = false;
  }
  let flag = checkSoundboardSounds.checkSoundboardSounds;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = checkSoundboardSounds.checkIsMuted;
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (tmp === undefined) {
    const items = [closure_5, closure_3, closure_4, _isNativeReflectConstruct];
    tmp = items;
  }
  [obj, obj2, obj3, obj4] = tmp;
  const voiceChannelId = obj2.getVoiceChannelId();
  let voiceStateForChannel = null;
  if (null != voiceChannelId) {
    voiceStateForChannel = obj.getVoiceStateForChannel(voiceChannelId, userId);
  }
  if (flag2) {
    let mute;
    if (null != voiceStateForChannel) {
      mute = voiceStateForChannel.mute;
    }
    if (!mute) {
      let selfMute;
      if (null != voiceStateForChannel) {
        selfMute = voiceStateForChannel.selfMute;
      }
      mute = selfMute;
    }
    flag2 = mute;
  }
  const tmp10 = obj3.isSpeaking(userId, checkSoundboardSounds.context) && !flag2;
  const tmp11 = obj3.isSoundSharing(userId) && checkSoundSharing;
  const tmp12 = _checkIsSpeaking;
  return tmp12(tmp10, obj4.isUserPlayingSounds(userId) && flag, tmp11);
};
