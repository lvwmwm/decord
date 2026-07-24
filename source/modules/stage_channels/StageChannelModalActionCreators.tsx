// Module ID: 7557
// Function ID: 60258
// Name: connectToStage
// Dependencies: [5, 4149, 1348, 1838, 3758, 1906, 1356, 7558, 5697, 5048, 12375, 12376, 4944, 4194, 4309, 12378, 2]
// Exports: connectOrLurkStage, showUserProfile

// Module 7557 (connectToStage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";

const require = arg1;
function connectToStage(channel, flag) {
  if (flag === undefined) {
    flag = false;
  }
  if (!flag) {
    if (!(function canJoinImmediately(id, arg1) {
      let closure_0 = id;
      let tmp = !outer1_8.can(outer1_0(outer1_3[6]).JOIN_VOCAL_CHANNEL_PERMISSIONS, id);
      if (!tmp) {
        let num2 = outer1_2(outer1_3[7]).shouldShowBlockedUsers(id.id);
        if (num2) {
          num2 = arg1 !== id.id;
        }
        if (num2) {
          const result = outer1_2(outer1_3[7]).openStageBlockedUsersSheet(id, () => {
            outer2_11(closure_0, true);
          });
          num2 = 1;
          const obj2 = outer1_2(outer1_3[7]);
        }
        tmp = num2;
        const obj = outer1_2(outer1_3[7]);
      }
      return !tmp;
    })(channel, tmp)) {
      return false;
    }
  }
  let obj = importDefault(12376);
  obj.initialize();
  const voiceChannel = importDefault(4944).selectVoiceChannel(channel.id);
  if (store.getVoiceChannelId() !== channel.id) {
    return false;
  } else {
    allApplicationStreamsForChannel = allApplicationStreamsForChannel.getAllApplicationStreamsForChannel(channel.id);
    const found = allApplicationStreamsForChannel.find((currentUserActiveStream) => !outer1_5.isStreamMarkedFull(outer1_0(outer1_3[13]).encodeStreamKey(currentUserActiveStream)));
    if (null != found) {
      obj = { noFocus: true };
      require(4309) /* isVoiceChannelFull */.watchStream(found, obj);
      const obj3 = require(4309) /* isVoiceChannelFull */;
    }
    return true;
  }
  let obj2 = importDefault(4944);
}
function connectAndOpen(channel, flag) {
  let flag2 = arg2;
  let flag3 = arg3;
  const _require = channel;
  if (flag === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (flag3 === undefined) {
    flag3 = false;
  }
  const voiceChannelId = store.getVoiceChannelId();
  let result = !flag3 && voiceChannelId !== channel.id;
  if (result) {
    result = _require(12378).shouldShowVoiceChannelChangeConfirmation(channel);
    const obj = _require(12378);
  }
  if (result) {
    result = flag2(7558).showChannelChangeConfirmationAlert(channel, () => {
      outer1_11(closure_0, flag, flag2, true);
    });
    const obj2 = flag2(7558);
  }
  if (!result) {
    if (connectToStage(channel, flag)) {
      navigateToStage(channel, voiceChannelId);
    }
  }
}
function navigateToStage(arg0, arg1) {
  importAll(7558).navigateToStage(arg0, arg1);
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/StageChannelModalActionCreators.tsx");

export const connectOrLurkStage = function connectOrLurkStage(arg0, channelId, arg2) {
  let flag = arg2;
  let closure_0 = arg0;
  let closure_1 = channelId;
  if (arg2 === undefined) {
    flag = false;
  }
  return new Promise((() => {
    let closure_0 = outer1_4(async (arg0) => {
      const callback = arg0;
      let channel = outer3_6.getChannel(outer2_1);
      if (null != channel) {
        outer3_10(channel, outer2_2);
        return arg0(channel);
      } else {
        const items = [callback];
        yield callback(outer3_3[8]).stopLurkingAll(items);
        let obj = callback2(outer3_3[9]);
        obj = { lurker: true };
        yield obj.joinGuild(closure_0, obj);
        const result = outer3_7.addConditionalChangeListener(() => {
          const channel = outer4_6.getChannel(outer3_1);
          let flag = null == channel;
          if (!flag) {
            outer4_10(channel);
            callback(outer4_3[10]).initialize();
            guildId(channel);
            flag = false;
            const obj = callback(outer4_3[10]);
          }
          return flag;
        });
      }
    });
    return function() {
      return callback(...arguments);
    };
  })());
};
export { connectToStage };
export { connectAndOpen };
export { navigateToStage };
export const showUserProfile = function showUserProfile(arg0) {
  const result = importAll(7558).showPlatformUserProfile(arg0);
};
