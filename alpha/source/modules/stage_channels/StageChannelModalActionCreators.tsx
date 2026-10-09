// Module ID: 7492
// Function ID: 7493
// Name: StageChannelModalActionCreators
// Dependencies: [5, 5894, 2064, 2086, 4709, 2115, 2072, 7483, 7032, 6104, 7493, 5886, 5897, 7443, 7494, 2]
// Exports: connectOrLurkStage, navigateToStage, showUserProfile

// Module 7492 (StageChannelModalActionCreators)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5886 */;
import StageChannelActionCreatorExtrasAll from "StageChannelActionCreatorExtras" /* 7483 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5894 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, isStreamMarkedFull;

function connectToStage(channel, flag) {
  if (flag === undefined) {
    flag = false;
  }
  let obj = SelectedChannelStore;
  if (!flag) {
    _require = channel;
    const canResult = PermissionStore.can(require("StageChannelPermissions").JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
    let tmp6 = !canResult;
    if (canResult) {
      const obj2 = StageChannelActionCreatorExtrasAll;
      let num = obj2.shouldShowBlockedUsers(channel.id) && tmp !== channel.id;
      const tmp7 = importAll;
      if (num) {
        const tmp7Result = tmp7(7483);
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
      const obj = channel(dependencyMap[12]);
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
    const obj = require("shouldShowVoiceChannelChangeConfirmation");
    result = obj.shouldShowVoiceChannelChangeConfirmation(channel);
  }
  if (result) {
    const obj2 = flag2(7483);
    result = obj2.showChannelChangeConfirmationAlert(channel, () => {
      connectAndOpen(channel, flag, flag2, true);
    });
  }
  if (!result) {
    if (connectToStage(channel, flag)) {
      const obj3 = flag2(7483);
      obj3.navigateToStage(channel, voiceChannelId);
    }
  }
}
let result = size.fileFinishedImporting("modules/stage_channels/StageChannelModalActionCreators.tsx");

export const connectOrLurkStage = function connectOrLurkStage(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  closure_0 = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    let obj5;
    closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c4 = 2;
        const tmp4 = c3;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp4;
            closure_1 = tmp;
            channel = channel.getChannel(closure_1);
            const tmp23 = closure_0;
            if (null != channel) {
              connectToStage(channel, closure_2);
              c4 = 3;
              const obj6 = { value: tmp23(channel), done: true };
              return obj6;
            } else {
              const items = [closure_0];
              c3 = 1;
              c4 = 1;
              const obj7 = { value: obj5.stopLurkingAll(items), done: false };
              obj5 = closure_0(dependencyMap[8]);
              return obj7;
            }
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            c3 = 2;
            c4 = 1;
            const obj9 = { value: obj2.joinGuild(closure_0, { lurker: true }), done: false };
            obj2 = closure_2_1(dependencyMap[9]);
            return obj9;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          const result = GuildStore.addConditionalChangeListener(() => {
            channel = channel.getChannel(closure_1);
            flag = null == channel;
            if (!flag) {
              closure_3_10(channel);
              const obj = closure_3_1(closure_3_3[10]);
              obj.initialize();
              closure_1_0(channel);
              flag = false;
            }
            return flag;
          });
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp19) {
        c4 = 3;
        throw tmp19;
      }
    }
  });
  const promise = new Promise(function() {
    return closure_0(...arguments);
  });
  return promise;
};
export { connectToStage };
export { connectAndOpen };
export const navigateToStage = function navigateToStage(arg0, arg1) {
  const obj = StageChannelActionCreatorExtrasAll;
  obj.navigateToStage(arg0, arg1);
};
export const showUserProfile = function showUserProfile(arg0) {
  const obj = StageChannelActionCreatorExtrasAll;
  const result = obj.showPlatformUserProfile(arg0);
};
