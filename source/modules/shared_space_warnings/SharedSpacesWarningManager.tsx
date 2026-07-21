// Module ID: 12537
// Function ID: 96331
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12537 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleChannelSelect(channelId) {
  channelId = channelId.channelId;
  if (null != channelId) {
    const channel = channel.getChannel(channelId);
    if (null != channel) {
      if (channel.isGroupDM()) {
        const recipients = channel.recipients;
        const found = recipients.filter((arg0) => closure_9.isBlocked(arg0));
        const recipients1 = channel.recipients;
        const found1 = recipients1.filter((arg0) => closure_9.isIgnored(arg0));
        if (tmp) {
          let blockedUserWarningDismissed = channel.blockedUserWarningDismissed;
          if (!blockedUserWarningDismissed) {
            const tmp3 = callback3(channelId);
            let num2 = 0;
            if (null != tmp3) {
              num2 = tmp3;
            }
            const _Date = Date;
            blockedUserWarningDismissed = num2 > Date.now() - closure_16;
          }
          if (!blockedUserWarningDismissed) {
            let obj = arg1(dependencyMap[11]);
            obj = { channelId, blockedUserIds: found, ignoredUserIds: found1 };
            const result = obj.showGdmBlockedUserModal(obj);
          }
        }
        const tmp = found.length > 0 || found1.length > 0;
      }
    }
  }
}
function handleAppStateChanged(state) {
  if (state.state === arg1(dependencyMap[12]).AppStates.ACTIVE) {
    const channelId = channelId.getChannelId();
    if (null != channelId) {
      const blockedUsersForVoiceChannel = authStore.getBlockedUsersForVoiceChannel(channelId);
      const ignoredUsersForVoiceChannel = authStore.getIgnoredUsersForVoiceChannel(channelId);
      if (blockedUsersForVoiceChannel.size > 0) {
        if (callback6()) {
          const _Set = Set;
          const items = [];
          HermesBuiltin.arraySpread(ignoredUsersForVoiceChannel, HermesBuiltin.arraySpread(blockedUsersForVoiceChannel, 0));
          const set = new Set(items);
          if (!voiceBlockedWarningInCooldownForUsers(set)) {
            const items1 = [];
            HermesBuiltin.arraySpread(ignoredUsersForVoiceChannel, HermesBuiltin.arraySpread(blockedUsersForVoiceChannel, 0));
            const result = arg1(dependencyMap[13]).showVoiceChannelBlockedUserWarning(channelId, items1[0]);
            const obj = arg1(dependencyMap[13]);
          }
        }
      }
      callback7();
    } else {
      callback7();
    }
  }
}
function isGlobalDismissTimestampInCooldown() {
  const tmp = callback5();
  let num = 0;
  if (null != tmp) {
    num = tmp;
  }
  return num > Date.now() - HOUR;
}
function voiceBlockedWarningInCooldownForUsers(set) {
  let everyResult = isGlobalDismissTimestampInCooldown();
  if (!everyResult) {
    const _Array = Array;
    everyResult = Array.from(set).every((arg0) => callback(arg0, true));
    const arr = Array.from(set);
  }
  return everyResult;
}
function userBlockedWarningInCooldown(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (!flag) {
    flag = !isGlobalDismissTimestampInCooldown();
  }
  let tmp2 = !flag;
  if (!tmp2) {
    const tmp5 = callback4(arg0);
    let num = 0;
    if (null != tmp5) {
      num = tmp5;
    }
    const _Date = Date;
    tmp2 = num > Date.now() - closure_17;
  }
  return tmp2;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
({ getChannelDismissTimestamp: closure_10, getUserDismissTimestamp: closure_11, getGlobalDismissTimestamp: closure_12, isBlockedWarningQueued: closure_13, dequeueBlockWarning: closure_14 } = arg1(dependencyMap[8]));
let closure_15 = importDefault(dependencyMap[9]);
let closure_16 = 3 * importDefault(dependencyMap[10]).Millis.DAY;
let closure_17 = 2 * importDefault(dependencyMap[10]).Millis.DAY;
const HOUR = importDefault(dependencyMap[10]).Millis.HOUR;
let tmp3 = (arg0) => {
  class SharedSpacesWarningManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, SharedSpacesWarningManager);
      items1 = [...items];
      obj = closure_5(SharedSpacesWarningManager);
      tmp2 = closure_4;
      if (closure_19()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { CHANNEL_SELECT: closure_20, APP_STATE_UPDATE: closure_21 };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = SharedSpacesWarningManager;
  callback2(SharedSpacesWarningManager, arg0);
  const items = [
    {
      key: "handleBlockedOrIgnoredUserVoiceChannelJoin",
      value(channelId, blockedUserId) {
        channelId = channelId.getChannelId();
        if (channelId === channelId) {
          if (null != channel.getChannel(channelId)) {
            if (!callback4(blockedUserId)) {
              const result = SharedSpacesWarningManager(closure_1[13]).showVoiceChannelBlockedUserWarning(channelId, blockedUserId);
              const obj = SharedSpacesWarningManager(closure_1[13]);
            }
          }
        }
      }
    }
  ];
  return callback(SharedSpacesWarningManager, items);
}(importDefault(dependencyMap[14]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningManager.tsx");

export default tmp3;
export { voiceBlockedWarningInCooldownForUsers };
export { userBlockedWarningInCooldown };
