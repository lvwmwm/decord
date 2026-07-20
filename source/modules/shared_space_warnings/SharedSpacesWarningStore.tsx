// Module ID: 12531
// Function ID: 96323
// Name: useSharedSpacesWarningStore
// Dependencies: []
// Exports: dequeueBlockWarning, getChannelDismissTimestamp, getGlobalDismissTimestamp, getUserDismissTimestamp, isBlockedWarningQueued, queueBlockWarning, setDismissalTimeForChannel, setDismissalTimeForUser, setDismissalTimeForUsers

// Module 12531 (useSharedSpacesWarningStore)
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
let obj = { name: "shared-spaces-warning-storage" };
const _module2 = require(dependencyMap[1]);
obj.storage = _module2.createJSONStorage(() => importDefault(dependencyMap[2]));
obj = _module.create(_module1.persist(() => ({ channelDismissTimestamps: {}, userDismissTimestamps: {}, globalDismissTimestamp: null, queuedWarning: false }), obj));
const _module3 = require(dependencyMap[3]);
const result = _module3.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningStore.tsx");

export const useSharedSpacesWarningStore = obj;
export const getChannelDismissTimestamp = function getChannelDismissTimestamp(arg0) {
  return obj.getState().channelDismissTimestamps[arg0];
};
export const getUserDismissTimestamp = function getUserDismissTimestamp(arg0) {
  return obj.getState().userDismissTimestamps[arg0];
};
export const getGlobalDismissTimestamp = function getGlobalDismissTimestamp() {
  return obj.getState().globalDismissTimestamp;
};
export const isBlockedWarningQueued = function isBlockedWarningQueued() {
  return obj.getState().queuedWarning;
};
export const queueBlockWarning = function queueBlockWarning() {
  obj.setState({ queuedWarning: true });
};
export const dequeueBlockWarning = function dequeueBlockWarning() {
  obj.setState({ queuedWarning: false });
};
export const setDismissalTimeForChannel = function setDismissalTimeForChannel(arg0) {
  const importDefault = arg0;
  obj.setState((channelDismissTimestamps) => {
    let obj = {};
    obj = {};
    const merged = Object.assign(channelDismissTimestamps.channelDismissTimestamps);
    obj[channelDismissTimestamps] = Date.now();
    obj.channelDismissTimestamps = obj;
    return obj;
  });
};
export const setDismissalTimeForUser = function setDismissalTimeForUser(arg0) {
  const importDefault = arg0;
  obj.setState((userDismissTimestamps) => {
    let obj = {};
    obj = {};
    const merged = Object.assign(userDismissTimestamps.userDismissTimestamps);
    obj[userDismissTimestamps] = Date.now();
    obj.userDismissTimestamps = obj;
    obj.globalDismissTimestamp = Date.now();
    return obj;
  });
};
export const setDismissalTimeForUsers = function setDismissalTimeForUsers(arg0) {
  let closure_0 = Array.from(arg0).reduce((arg0, arg1) => {
    arg0[arg1] = Date.now();
    return arg0;
  }, {});
  obj.setState((userDismissTimestamps) => {
    let obj = {};
    obj = {};
    const merged = Object.assign(userDismissTimestamps.userDismissTimestamps);
    const merged1 = Object.assign(closure_0);
    obj.userDismissTimestamps = obj;
    obj.globalDismissTimestamp = Date.now();
    return obj;
  });
};
