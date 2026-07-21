// Module ID: 10523
// Function ID: 82203
// Name: _checkIsSpeaking
// Dependencies: []
// Exports: default, getIsSpeaking

// Module 10523 (_checkIsSpeaking)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("hooks/useIsSpeaking.tsx");

export default function useIsSpeaking(checkSoundboardSounds) {
  let checkSoundSharing;
  ({ userId: closure_0, checkSoundSharing } = checkSoundboardSounds);
  if (checkSoundSharing === undefined) {
    checkSoundSharing = false;
  }
  const dependencyMap = checkSoundSharing;
  let flag = checkSoundboardSounds.checkSoundboardSounds;
  if (flag === undefined) {
    flag = true;
  }
  let closure_2 = flag;
  let flag2 = checkSoundboardSounds.checkIsMuted;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const context = checkSoundboardSounds.context;
  let closure_4;
  const items = [closure_5, context];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => {
    const voiceChannelId = context.getVoiceChannelId();
    let voiceStateForChannel = null;
    if (null != voiceChannelId) {
      voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(voiceChannelId, closure_0);
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
  closure_4 = flag2;
  const obj = arg1(dependencyMap[4]);
  const items1 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => {
    let isSpeakingResult = flag2.isSpeaking(closure_0, context);
    if (isSpeakingResult) {
      isSpeakingResult = !flag2;
    }
    return isSpeakingResult;
  });
  const obj2 = arg1(dependencyMap[4]);
  const items2 = [closure_4];
  const stateFromStores2 = arg1(dependencyMap[4]).useStateFromStores(items2, () => flag2.isSoundSharing(closure_0) && checkSoundSharing);
  const obj3 = arg1(dependencyMap[4]);
  const items3 = [closure_2];
  return _checkIsSpeaking(stateFromStores1, arg1(dependencyMap[4]).useStateFromStores(items3, () => flag.isUserPlayingSounds(closure_0) && flag), stateFromStores2);
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
    const items = [closure_5, closure_3, closure_4, closure_2];
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
