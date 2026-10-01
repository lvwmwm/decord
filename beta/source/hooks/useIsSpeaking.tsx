// Module ID: 8807
// Function ID: 8808
// Name: useIsSpeaking
// Dependencies: [5319, 2099, 5731, 4855, 504, 2]
// Exports: default, getIsSpeaking

// Module 8807 (useIsSpeaking)
import SoundboardStore from "SoundboardStore" /* 5319 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SpeakingStore from "SpeakingStore" /* 5731 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("hooks/useIsSpeaking.tsx");

export default function useIsSpeaking(checkSoundboardSounds) {
  let checkSoundSharing;
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
  let tmp = require;
  const items = [VoiceStateStore, context];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    let voiceStateForChannel = null;
    if (null != voiceChannelId) {
      voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(voiceChannelId, require);
    }
    return voiceStateForChannel;
  });
  if (flag2) {
    let mute;
    if (stateFromStores != null) {
      mute = stateFromStores.mute;
    }
    if (!mute) {
      let selfMute;
      if (stateFromStores != null) {
        selfMute = stateFromStores.selfMute;
      }
      mute = selfMute;
    }
    flag2 = mute;
  }
  const items1 = [flag2];
  const tmpResult = tmp(checkSoundSharing[4]);
  let stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    const isSpeakingResult = SpeakingStore.isSpeaking(require, context) && !flag2;
    return isSpeakingResult;
  });
  const items2 = [flag2];
  const tmpResult3 = tmp(checkSoundSharing[4]);
  const stateFromStores2 = tmpResult3.useStateFromStores(items2, () => {
    const tmp = SpeakingStore.isSoundSharing(require) && checkSoundSharing;
    return tmp;
  });
  const items3 = [flag];
  const tmpResult4 = tmp(checkSoundSharing[4]);
  if (!stateFromStores1) {
    stateFromStores1 = tmpResult4.useStateFromStores(items3, () => {
      const tmp = SoundboardStore.isUserPlayingSounds(require) && flag;
      return tmp;
    });
  }
  if (!stateFromStores1) {
    stateFromStores1 = stateFromStores2;
  }
  return stateFromStores1;
};
export const getIsSpeaking = function getIsSpeaking(checkSoundboardSounds) {
  let checkSoundSharing;
  let obj;
  let obj2;
  let obj3;
  let obj4;
  let userId;
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
  let tmp = arg1;
  const context = checkSoundboardSounds.context;
  if (arg1 === undefined) {
    const items = [VoiceStateStore, SelectedChannelStore, SpeakingStore, SoundboardStore];
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
    if (voiceStateForChannel != null) {
      mute = voiceStateForChannel.mute;
    }
    if (!mute) {
      let selfMute;
      if (voiceStateForChannel != null) {
        selfMute = voiceStateForChannel.selfMute;
      }
      mute = selfMute;
    }
    flag2 = mute;
  }
  let tmp10 = obj3.isSpeaking(userId, context) && !flag2;
  const tmp11 = obj3.isSoundSharing(userId) && checkSoundSharing;
  const tmp12 = obj4.isUserPlayingSounds(userId) && flag;
  if (!tmp10) {
    tmp10 = tmp12;
  }
  if (!tmp10) {
    tmp10 = tmp11;
  }
  return tmp10;
};
