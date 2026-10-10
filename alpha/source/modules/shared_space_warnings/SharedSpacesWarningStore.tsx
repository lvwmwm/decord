// Module ID: 14003
// Function ID: 14004
// Name: SharedSpacesWarningStore
// Dependencies: [1102, 570, 4990, 7394, 2]
// Exports: dequeueBlockWarning, gdmBlockedWarningInCooldown, getChannelDismissTimestamp, getGlobalDismissTimestamp, getUserDismissTimestamp, isBlockedWarningQueued, queueBlockWarning, setDismissalTimeForChannel, setDismissalTimeForUser, setDismissalTimeForUsers, userBlockedWarningInCooldown, voiceBlockedWarningInCooldownForUsers

// Module 14003 (SharedSpacesWarningStore)
import DurationsDefault from "Durations" /* 1102 */;
import module_570 from "module_570" /* 570 */;
import combine_mod from "combine" /* 4990 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_2 = 3 * DurationsDefault.Millis.DAY;
let closure_3 = 2 * DurationsDefault.Millis.DAY;
const HOUR = DurationsDefault.Millis.HOUR;
const create = module_570.create;
let combine = combine_mod;
let obj = { name: "shared-spaces-warning-storage", storage: combine.createJSONStorage(() => require("LocalStorageWrapper")) };
const persist = combine.persist;
combine = combine_mod;
let obj2 = create(persist(() => ({ channelDismissTimestamps: {}, userDismissTimestamps: {}, globalDismissTimestamp: null, queuedWarning: false }), obj));
const result = size.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningStore.tsx");

export const useSharedSpacesWarningStore = obj2;
export const getChannelDismissTimestamp = function getChannelDismissTimestamp(arg0) {
  return obj2.getState().channelDismissTimestamps[arg0];
};
export const getUserDismissTimestamp = function getUserDismissTimestamp(arg0) {
  return obj2.getState().userDismissTimestamps[arg0];
};
export const getGlobalDismissTimestamp = function getGlobalDismissTimestamp() {
  return obj2.getState().globalDismissTimestamp;
};
export const isBlockedWarningQueued = function isBlockedWarningQueued() {
  return obj2.getState().queuedWarning;
};
export const queueBlockWarning = function queueBlockWarning() {
  obj2.setState({ queuedWarning: true });
};
export const dequeueBlockWarning = function dequeueBlockWarning() {
  obj2.setState({ queuedWarning: false });
};
export const setDismissalTimeForChannel = function setDismissalTimeForChannel(arg0) {
  let closure_0 = arg0;
  obj2.setState((channelDismissTimestamps) => {
    const obj = { channelDismissTimestamps: obj2 };
    obj2 = {};
    const merged = Object.assign(channelDismissTimestamps.channelDismissTimestamps);
    obj2[closure_0] = Date.now();
    return obj;
  });
};
export const setDismissalTimeForUser = function setDismissalTimeForUser(blockedUserId) {
  let closure_0 = blockedUserId;
  obj2.setState((userDismissTimestamps) => {
    const obj = { userDismissTimestamps: obj2, globalDismissTimestamp: Date.now() };
    obj2 = {};
    const merged = Object.assign(userDismissTimestamps.userDismissTimestamps);
    obj2[closure_0] = Date.now();
    return obj;
  });
};
export const setDismissalTimeForUsers = function setDismissalTimeForUsers(arg0) {
  const arr = Array.from(arg0);
  let closure_0 = arr.reduce((acc, item) => {
    acc[item] = Date.now();
    return acc;
  }, {});
  obj2.setState((userDismissTimestamps) => {
    const obj = { userDismissTimestamps: obj2, globalDismissTimestamp: Date.now() };
    obj2 = {};
    const merged = Object.assign(userDismissTimestamps.userDismissTimestamps);
    const merged1 = Object.assign(closure_0);
    return obj;
  });
};
export const voiceBlockedWarningInCooldownForUsers = function voiceBlockedWarningInCooldownForUsers(arg0) {
  let num = obj2.getState().globalDismissTimestamp;
  if (num == null) {
    num = 0;
  }
  let everyResult = num > Date.now() - HOUR;
  if (!everyResult) {
    const _Array = Array;
    const arr = Array.from(arg0);
    everyResult = arr.every((item) => {
      let flag = true;
      if (!flag) {
        let num = obj2.getState().globalDismissTimestamp;
        if (num == null) {
          num = 0;
        }
        const _Date = Date;
        flag = num <= Date.now() - HOUR;
      }
      let tmp5 = !flag;
      if (flag) {
        let num2 = obj2.getState().userDismissTimestamps[item];
        if (num2 == null) {
          num2 = 0;
        }
        const _Date2 = Date;
        tmp5 = num2 > Date.now() - closure_1_3;
      }
      return tmp5;
    });
  }
  return everyResult;
};
export const userBlockedWarningInCooldown = function userBlockedWarningInCooldown(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (!flag) {
    let num = obj2.getState().globalDismissTimestamp;
    if (num == null) {
      num = 0;
    }
    const _Date = Date;
    flag = num <= Date.now() - HOUR;
  }
  let tmp5 = !flag;
  if (flag) {
    let num2 = obj2.getState().userDismissTimestamps[arg0];
    if (num2 == null) {
      num2 = 0;
    }
    const _Date2 = Date;
    tmp5 = num2 > Date.now() - closure_3;
  }
  return tmp5;
};
export const gdmBlockedWarningInCooldown = function gdmBlockedWarningInCooldown(arg0) {
  let num = obj2.getState().channelDismissTimestamps[arg0];
  if (num == null) {
    num = 0;
  }
  return num > Date.now() - closure_2;
};
