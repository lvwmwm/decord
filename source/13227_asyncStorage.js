// Module ID: 13227
// Function ID: 100296
// Name: asyncStorage
// Dependencies: []
// Exports: default

// Module 13227 (asyncStorage)
let closure_0 = require(dependencyMap[0]);
let closure_1 = { ignore: [] };

export default function asyncStorage(arg0) {
  let closure_0 = arg0;
  return (asyncStorageHandler) => {
    let features = asyncStorageHandler;
    if (!asyncStorageHandler) {
      features = {};
    }
    let ignore = Object.assign({}, ignore, features).ignore;
    if (!ignore) {
      ignore = ignore.ignore;
    }
    let closure_9 = false;
    function sendToReactotron(action, data) {
      action.send("asyncStorage.mutation", { action, data });
    }
    let closure_11 = () => {
      // CreateGeneratorClosureLongIndex (0x67)
      return function setItem(arg0, arg1, arg2) {
        return callback(...arguments);
      };
    }();
    let closure_12 = () => {
      // CreateGeneratorClosureLongIndex (0x67)
      return function removeItem(arg0, arg1) {
        return callback(...arguments);
      };
    }();
    let closure_13 = () => {
      // CreateGeneratorClosureLongIndex (0x67)
      return function mergeItem(arg0, arg1, arg2) {
        return callback(...arguments);
      };
    }();
    let closure_14 = () => {
      // CreateGeneratorClosureLongIndex (0x67)
      return function clear(arg0) {
        return callback(...arguments);
      };
    }();
    let closure_15 = () => {
      // CreateGeneratorClosureLongIndex (0x67)
      return function multiSet(arg0, arg1) {
        return callback(...arguments);
      };
    }();
    let closure_16 = () => {
      // CreateGeneratorClosureLongIndex (0x67)
      return function multiRemove(arg0, arg1) {
        return callback(...arguments);
      };
    }();
    let closure_17 = () => {
      // CreateGeneratorClosureLongIndex (0x67)
      return function multiMerge(arg0, arg1) {
        return callback(...arguments);
      };
    }();
    function trackAsyncStorage() {
      if (!closure_9) {
        const setItem = arg0.asyncStorageHandler.setItem;
        arg0.asyncStorageHandler.setItem = closure_11;
        const removeItem = arg0.asyncStorageHandler.removeItem;
        arg0.asyncStorageHandler.removeItem = closure_12;
        const mergeItem = arg0.asyncStorageHandler.mergeItem;
        arg0.asyncStorageHandler.mergeItem = closure_13;
        const clear = arg0.asyncStorageHandler.clear;
        arg0.asyncStorageHandler.clear = closure_14;
        const multiSet = arg0.asyncStorageHandler.multiSet;
        arg0.asyncStorageHandler.multiSet = closure_15;
        const multiRemove = arg0.asyncStorageHandler.multiRemove;
        arg0.asyncStorageHandler.multiRemove = closure_16;
        const multiMerge = arg0.asyncStorageHandler.multiMerge;
        arg0.asyncStorageHandler.multiMerge = closure_17;
        closure_9 = true;
      }
    }
    if (asyncStorageHandler.asyncStorageHandler) {
      trackAsyncStorage();
    }
    features = {
      trackAsyncStorage,
      untrackAsyncStorage() {
        if (closure_9) {
          arg0.asyncStorageHandler.setItem = closure_1;
          arg0.asyncStorageHandler.removeItem = closure_2;
          arg0.asyncStorageHandler.mergeItem = closure_3;
          arg0.asyncStorageHandler.clear = closure_4;
          arg0.asyncStorageHandler.multiSet = closure_5;
          arg0.asyncStorageHandler.multiRemove = closure_6;
          arg0.asyncStorageHandler.multiMerge = closure_7;
          closure_9 = false;
        }
      }
    };
    return { features };
  };
};
