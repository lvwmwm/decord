// Module ID: 12658
// Function ID: 98537
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 4202, 3767, 12659, 12657, 664, 12660, 668, 12664, 5078, 2]

// Module 12658 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import set from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import useSharedSpacesWarningStore from "useSharedSpacesWarningStore";
import closure_15 from "_isNativeReflectConstruct";
import tmp3 from "AutomaticLifecycleManager";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
const require = arg1;
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
    channel = channel.getChannel(channelId);
    if (null != channel) {
      if (channel.isGroupDM()) {
        const recipients = channel.recipients;
        const found = recipients.filter((arg0) => outer1_9.isBlocked(arg0));
        const recipients1 = channel.recipients;
        const found1 = recipients1.filter((arg0) => outer1_9.isIgnored(arg0));
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
            let obj = require(12660) /* showGdmBlockedUserModal */;
            obj = { channelId, blockedUserIds: found, ignoredUserIds: found1 };
            const result = obj.showGdmBlockedUserModal(obj);
          }
        }
        tmp = found.length > 0 || found1.length > 0;
      }
    }
  }
}
function handleAppStateChanged(state) {
  if (state.state === require(668) /* keys */.AppStates.ACTIVE) {
    channelId = channelId.getChannelId();
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
            const result = require(12664) /* showVoiceChannelBlockedUserWarning */.showVoiceChannelBlockedUserWarning(channelId, items1[0]);
            const obj = require(12664) /* showVoiceChannelBlockedUserWarning */;
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
    everyResult = Array.from(set).every((arg0) => outer1_24(arg0, true));
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
({ getChannelDismissTimestamp: closure_10, getUserDismissTimestamp: closure_11, getGlobalDismissTimestamp: closure_12, isBlockedWarningQueued: closure_13, dequeueBlockWarning: closure_14 } = useSharedSpacesWarningStore);
let closure_16 = 3 * require("set").Millis.DAY;
let closure_17 = 2 * require("set").Millis.DAY;
const HOUR = require("set").Millis.HOUR;
tmp3 = new tmp3();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningManager.tsx");

export default tmp3;
export { voiceBlockedWarningInCooldownForUsers };
export { userBlockedWarningInCooldown };
