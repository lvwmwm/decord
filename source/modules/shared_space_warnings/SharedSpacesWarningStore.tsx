// Module ID: 12710
// Function ID: 98873
// Name: useSharedSpacesWarningStore
// Dependencies: [621, 3999, 6945, 2]
// Exports: dequeueBlockWarning, getChannelDismissTimestamp, getGlobalDismissTimestamp, getUserDismissTimestamp, isBlockedWarningQueued, queueBlockWarning, setDismissalTimeForChannel, setDismissalTimeForUser, setDismissalTimeForUsers

// Module 12710 (useSharedSpacesWarningStore)
import keys from "keys";
import createJSONStorage from "createJSONStorage";
import createJSONStorage from "createJSONStorage";

let obj = { name: "shared-spaces-warning-storage" };
obj.storage = createJSONStorage.createJSONStorage(() => importDefault(6945));
obj = keys.create(createJSONStorage.persist(() => ({ channelDismissTimestamps: {}, userDismissTimestamps: {}, globalDismissTimestamp: null, queuedWarning: false }), obj));
const result = require("frozen").fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningStore.tsx");

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
  let closure_0 = arg0;
  obj.setState((channelDismissTimestamps) => {
    let obj = {};
    obj = {};
    const merged = Object.assign(channelDismissTimestamps.channelDismissTimestamps);
    obj[closure_0] = Date.now();
    obj.channelDismissTimestamps = obj;
    return obj;
  });
};
export const setDismissalTimeForUser = function setDismissalTimeForUser(arg0) {
  let closure_0 = arg0;
  obj.setState((userDismissTimestamps) => {
    let obj = {};
    obj = {};
    const merged = Object.assign(userDismissTimestamps.userDismissTimestamps);
    obj[closure_0] = Date.now();
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
