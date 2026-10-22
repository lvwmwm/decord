// Module ID: 7862
// Function ID: 7863
// Name: StageChannelModalActionCreators
// Dependencies: [5, 6628, 4821, 4843, 4901, 4872, 4829, 7853, 7419, 6816, 7863, 6620, 6631, 7813, 7864, 2]
// Exports: connectOrLurkStage, navigateToStage, showUserProfile

// Module 7862 (StageChannelModalActionCreators)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6620 */;
import StageChannelActionCreatorExtrasAll from "StageChannelActionCreatorExtras" /* 7853 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6628 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import GuildStore from "GuildStore" /* 4843 */;
import PermissionStore from "PermissionStore" /* 4901 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4872 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c5, c6, isStreamMarkedFull;

let obj = function _connectOrLurkStage() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj6;
    let obj9;
    function waitForChannel(arg0) {
      closure_0 = arg0;
      const promise = new Promise((arg0) => {
        closure_0 = arg0;
        const result = closure_1_7.addConditionalChangeListener(() => {
          channel = channel.getChannel(closure_0);
          let flag = null == channel;
          if (!flag) {
            closure_0(channel);
            flag = false;
          }
          return flag;
        });
      });
      return promise;
    }
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let value2;
        let flag;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            value2 = tmp4;
            value = tmp;
            flag = closure_2;
            if (closure_2 === undefined) {
              flag = false;
            }
            value = undefined;
            value2 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            value = closure_132_6.getChannel(closure_1);
            if (null != value) {
              closure_132_11(value, flag);
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              const items = [closure_0];
              c5 = 2;
              c6 = 1;
              const obj7 = { value: obj9.stopLurkingAll(items), done: false };
              obj9 = closure_132_0(closure_132_3[8]);
              return obj7;
            }
          }
        } else if (2 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            c5 = 3;
            c6 = 1;
            const obj10 = { value: obj6.joinGuild(closure_0, { lurker: true }), done: false };
            obj6 = closure_132_1(closure_132_3[9]);
            return obj10;
          }
        } else if (3 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            c5 = 4;
            c6 = 1;
            const obj12 = { value: waitForChannel(closure_1), done: false };
            return obj12;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          value2 = value;
          closure_132_11(value2);
          obj = closure_132_1(closure_132_3[10]);
          obj.initialize();
          c6 = 3;
          const obj14 = { value: value2, done: true };
          return obj14;
        }
      } catch (tmp33) {
        c6 = 3;
        throw tmp33;
      }
    }
  });
  return obj(...arguments);
};
function connectToStage(channel, flag) {
  if (flag === undefined) {
    flag = false;
  }
  obj = SelectedChannelStore;
  if (!flag) {
    _require = channel;
    const canResult = PermissionStore.can(require("StageChannelPermissions").JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
    let tmp6 = !canResult;
    if (canResult) {
      const obj2 = StageChannelActionCreatorExtrasAll;
      let num = obj2.shouldShowBlockedUsers(channel.id) && tmp !== channel.id;
      const tmp7 = importAll;
      if (num) {
        const tmp7Result = tmp7(7853);
        const result = tmp7Result.openStageBlockedUsersSheet(channel, () => {
          connectAndOpen(channel, true);
        });
        num = 1;
      }
      tmp6 = num;
    }
    if (tmp6) {
      return false;
    }
  }
  const obj4 = SelectedChannelActionCreatorsDefault;
  const voiceChannel = obj4.selectVoiceChannel(channel.id);
  if (obj.getVoiceChannelId() !== channel.id) {
    return false;
  } else {
    const allApplicationStreamsForChannel = ApplicationStreamingStore.getAllApplicationStreamsForChannel(channel.id);
    const found = allApplicationStreamsForChannel.find((item) => {
      isStreamMarkedFull = isStreamMarkedFull.isStreamMarkedFull;
      obj = channel(dependencyMap[12]);
      return !isStreamMarkedFull(obj.encodeStreamKey(item));
    });
    if (null != found) {
      const obj5 = require("StreamActionCreators");
      obj5.watchStream(found, { noFocus: true });
    }
    return true;
  }
}
function connectAndOpen(channel, flag, flag2, arg3) {
  _require = channel;
  if (flag === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = arg3;
  if (arg3 === undefined) {
    flag3 = false;
  }
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  let result = !flag3 && voiceChannelId !== channel.id;
  if (result) {
    obj = require("shouldShowVoiceChannelChangeConfirmation");
    result = obj.shouldShowVoiceChannelChangeConfirmation(channel);
  }
  if (result) {
    const obj2 = flag2(7853);
    result = obj2.showChannelChangeConfirmationAlert(channel, () => {
      connectAndOpen(channel, flag, flag2, true);
    });
  }
  if (!result) {
    if (connectToStage(channel, flag)) {
      const obj3 = flag2(7853);
      obj3.navigateToStage(channel, voiceChannelId);
    }
  }
}
let result = size.fileFinishedImporting("modules/stage_channels/StageChannelModalActionCreators.tsx");

export const connectOrLurkStage = function connectOrLurkStage() {
  return obj(...arguments);
};
export { connectToStage };
export { connectAndOpen };
export const navigateToStage = function navigateToStage(arg0, arg1) {
  obj = StageChannelActionCreatorExtrasAll;
  obj.navigateToStage(arg0, arg1);
};
export const showUserProfile = function showUserProfile(arg0) {
  obj = StageChannelActionCreatorExtrasAll;
  const result = obj.showPlatformUserProfile(arg0);
};
