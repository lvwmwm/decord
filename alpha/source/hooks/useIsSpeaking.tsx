// Module ID: 6852
// Function ID: 6853
// Name: useIsSpeaking
// Dependencies: [6058, 4917, 6756, 5679, 504, 2]
// Exports: default, getIsSpeaking

// Module 6852 (useIsSpeaking)
import SoundboardStore from "SoundboardStore" /* 6058 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import SpeakingStore from "SpeakingStore" /* 6756 */;
import VoiceStateStore from "VoiceStateStore" /* 5679 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("hooks/useIsSpeaking.tsx");

export default function useIsSpeaking(checkIsMuted) {
  let checkSoundSharing;
  ({ userId: require, checkSoundSharing } = checkIsMuted);
  if (checkSoundSharing === undefined) {
    checkSoundSharing = false;
  }
  let flag = checkIsMuted.checkIsMuted;
  if (flag === undefined) {
    flag = false;
  }
  const context = checkIsMuted.context;
  flag = undefined;
  let tmp = require;
  const items = [VoiceStateStore, flag];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    let voiceStateForChannel = null;
    if (null != voiceChannelId) {
      voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(voiceChannelId, require);
    }
    return voiceStateForChannel;
  });
  if (flag) {
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
    flag = mute;
  }
  const items1 = [SpeakingStore];
  const tmpResult = tmp(checkSoundSharing[4]);
  let stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    const isSpeakingResult = SpeakingStore.isSpeaking(require, context) && !flag;
    return isSpeakingResult;
  });
  const items2 = [SpeakingStore];
  const tmpResult2 = tmp(checkSoundSharing[4]);
  if (!stateFromStores1) {
    stateFromStores1 = tmpResult2.useStateFromStores(items2, () => {
      const tmp = SpeakingStore.isSoundSharing(require) && checkSoundSharing;
      return tmp;
    });
  }
  return stateFromStores1;
};
export function getIsSpeaking(checkIsMuted) {
  let checkSoundSharing;
  let obj;
  let obj2;
  let obj3;
  let userId;
  ({ userId, checkSoundSharing } = checkIsMuted);
  if (checkSoundSharing === undefined) {
    checkSoundSharing = false;
  }
  let flag = checkIsMuted.checkIsMuted;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = arg1;
  const context = checkIsMuted.context;
  if (arg1 === undefined) {
    const items = [VoiceStateStore, SelectedChannelStore, SpeakingStore, SoundboardStore];
    tmp = items;
  }
  [obj, obj2, obj3] = tmp;
  const voiceChannelId = obj2.getVoiceChannelId();
  let voiceStateForChannel = null;
  if (null != voiceChannelId) {
    voiceStateForChannel = obj.getVoiceStateForChannel(voiceChannelId, userId);
  }
  if (flag) {
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
    flag = mute;
  }
  let tmp10 = obj3.isSpeaking(userId, context) && !flag;
  const tmp11 = obj3.isSoundSharing(userId) && checkSoundSharing;
  if (!tmp10) {
    tmp10 = tmp11;
  }
  return tmp10;
}
