// Module ID: 13341
// Function ID: 102452
// Name: result2
// Dependencies: [5]
// Exports: default

// Module 13341 (result2)
import asyncGeneratorStep from "asyncGeneratorStep";

let closure_1 = { ignore: [] };

export default function asyncStorage(arg0) {
  let closure_0 = arg0;
  return (asyncStorageHandler) => {
    let closure_0 = asyncStorageHandler;
    let features = closure_0;
    if (!closure_0) {
      features = {};
    }
    let ignore = Object.assign({}, outer1_1, features).ignore;
    if (!ignore) {
      ignore = outer1_1.ignore;
    }
    let c9 = false;
    function sendToReactotron(action, data) {
      asyncStorageHandler.send("asyncStorage.mutation", { action, data });
    }
    let closure_11 = (() => {
      // CreateGeneratorClosureLongIndex (0x67)
      return function setItem(arg0, arg1, arg2) {
        return callback(...arguments);
      };
    })();
    let closure_12 = (() => {
      // CreateGeneratorClosureLongIndex (0x67)
      return function removeItem(arg0, arg1) {
        return callback(...arguments);
      };
    })();
    let closure_13 = (() => {
      // CreateGeneratorClosureLongIndex (0x67)
      return function mergeItem(arg0, arg1, arg2) {
        return callback(...arguments);
      };
    })();
    let closure_14 = (() => {
      // CreateGeneratorClosureLongIndex (0x67)
      return function clear(arg0) {
        return callback(...arguments);
      };
    })();
    let closure_15 = (() => {
      // CreateGeneratorClosureLongIndex (0x67)
      return function multiSet(arg0, arg1) {
        return callback(...arguments);
      };
    })();
    let closure_16 = (() => {
      // CreateGeneratorClosureLongIndex (0x67)
      return function multiRemove(arg0, arg1) {
        return callback(...arguments);
      };
    })();
    let closure_17 = (() => {
      // CreateGeneratorClosureLongIndex (0x67)
      return function multiMerge(arg0, arg1) {
        return callback(...arguments);
      };
    })();
    function trackAsyncStorage() {
      if (!c9) {
        const setItem = asyncStorageHandler.asyncStorageHandler.setItem;
        asyncStorageHandler.asyncStorageHandler.setItem = closure_11;
        const removeItem = asyncStorageHandler.asyncStorageHandler.removeItem;
        asyncStorageHandler.asyncStorageHandler.removeItem = closure_12;
        const mergeItem = asyncStorageHandler.asyncStorageHandler.mergeItem;
        asyncStorageHandler.asyncStorageHandler.mergeItem = closure_13;
        const clear = asyncStorageHandler.asyncStorageHandler.clear;
        asyncStorageHandler.asyncStorageHandler.clear = closure_14;
        const multiSet = asyncStorageHandler.asyncStorageHandler.multiSet;
        asyncStorageHandler.asyncStorageHandler.multiSet = closure_15;
        const multiRemove = asyncStorageHandler.asyncStorageHandler.multiRemove;
        asyncStorageHandler.asyncStorageHandler.multiRemove = closure_16;
        const multiMerge = asyncStorageHandler.asyncStorageHandler.multiMerge;
        asyncStorageHandler.asyncStorageHandler.multiMerge = closure_17;
        c9 = true;
      }
    }
    if (asyncStorageHandler.asyncStorageHandler) {
      trackAsyncStorage();
    }
    features = {
      trackAsyncStorage,
      untrackAsyncStorage() {
        if (c9) {
          asyncStorageHandler.asyncStorageHandler.setItem = closure_1;
          asyncStorageHandler.asyncStorageHandler.removeItem = closure_2;
          asyncStorageHandler.asyncStorageHandler.mergeItem = closure_3;
          asyncStorageHandler.asyncStorageHandler.clear = closure_4;
          asyncStorageHandler.asyncStorageHandler.multiSet = closure_5;
          asyncStorageHandler.asyncStorageHandler.multiRemove = closure_6;
          asyncStorageHandler.asyncStorageHandler.multiMerge = closure_7;
          c9 = false;
        }
      }
    };
    return { features };
  };
};
