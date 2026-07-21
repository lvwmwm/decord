// Module ID: 7472
// Function ID: 59967
// Name: connectToStage
// Dependencies: []
// Exports: connectOrLurkStage, showUserProfile

// Module 7472 (connectToStage)
function connectToStage(channel, flag) {
  if (flag === undefined) {
    flag = false;
  }
  if (!flag) {
    if (!function canJoinImmediately(id, arg1) {
      let tmp = !closure_8.can(id(closure_3[6]).JOIN_VOCAL_CHANNEL_PERMISSIONS, id);
      if (!tmp) {
        let num2 = callback2(closure_3[7]).shouldShowBlockedUsers(id.id);
        if (num2) {
          num2 = arg1 !== id.id;
        }
        if (num2) {
          const result = callback2(closure_3[7]).openStageBlockedUsersSheet(id, () => {
            callback(arg0, true);
          });
          num2 = 1;
          const obj2 = callback2(closure_3[7]);
        }
        tmp = num2;
        const obj = callback2(closure_3[7]);
      }
      return !tmp;
    }(channel, tmp)) {
      return false;
    }
  }
  let obj = importDefault(dependencyMap[11]);
  obj.initialize();
  const voiceChannel = importDefault(dependencyMap[12]).selectVoiceChannel(channel.id);
  if (store.getVoiceChannelId() !== channel.id) {
    return false;
  } else {
    const allApplicationStreamsForChannel = allApplicationStreamsForChannel.getAllApplicationStreamsForChannel(channel.id);
    const found = allApplicationStreamsForChannel.find((currentUserActiveStream) => !streamMarkedFull.isStreamMarkedFull(callback(closure_3[13]).encodeStreamKey(currentUserActiveStream)));
    if (null != found) {
      obj = { noFocus: true };
      flag(dependencyMap[14]).watchStream(found, obj);
      const obj3 = flag(dependencyMap[14]);
    }
    return true;
  }
  const obj2 = importDefault(dependencyMap[12]);
}
function connectAndOpen(channel, flag) {
  let flag2 = arg2;
  let flag3 = arg3;
  flag = channel;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const importAll = flag2;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const voiceChannelId = store.getVoiceChannelId();
  let result = !flag3 && voiceChannelId !== channel.id;
  if (result) {
    result = flag(dependencyMap[15]).shouldShowVoiceChannelChangeConfirmation(channel);
    const obj = flag(dependencyMap[15]);
  }
  if (result) {
    result = importAll(dependencyMap[7]).showChannelChangeConfirmationAlert(channel, () => {
      callback(arg0, flag, flag2, true);
    });
    const obj2 = importAll(dependencyMap[7]);
  }
  if (!result) {
    if (connectToStage(channel, flag)) {
      navigateToStage(channel, voiceChannelId);
    }
  }
}
function navigateToStage(arg0, arg1) {
  importAll(dependencyMap[7]).navigateToStage(arg0, arg1);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/stage_channels/StageChannelModalActionCreators.tsx");

export const connectOrLurkStage = function connectOrLurkStage(arg0, channelId, arg2) {
  let flag = arg2;
  channelId = arg0;
  const importDefault = channelId;
  if (arg2 === undefined) {
    flag = false;
  }
  const importAll = flag;
  return new Promise(() => {
    let closure_0 = callback(async (arg0) => {
      const channel = channel.getChannel(callback);
      if (null != channel) {
        callback2(channel, closure_2);
        return arg0(channel);
      } else {
        const items = [arg0];
        yield arg0(closure_3[8]).stopLurkingAll(items);
        let obj = callback(closure_3[9]);
        obj = { lurker: true };
        yield obj.joinGuild(closure_0, obj);
        const result = closure_7.addConditionalChangeListener(() => {
          const channel = channel.getChannel(callback);
          let flag = null == channel;
          if (!flag) {
            callback2(channel);
            callback(closure_3[10]).initialize();
            arg0(channel);
            flag = false;
            const obj = callback(closure_3[10]);
          }
          return flag;
        });
      }
    });
    return function() {
      return callback(...arguments);
    };
  }());
};
export { connectToStage };
export { connectAndOpen };
export { navigateToStage };
export const showUserProfile = function showUserProfile(arg0) {
  const result = importAll(dependencyMap[7]).showPlatformUserProfile(arg0);
};
