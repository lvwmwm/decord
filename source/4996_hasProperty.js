// Module ID: 4996
// Function ID: 42744
// Name: hasProperty
// Dependencies: []
// Exports: isFabric, isReact19, isRemoteDebuggingEnabled, isTestEnv, tagMessage, toArray, withPrevAndCurrent

// Module 4996 (hasProperty)
function hasProperty(global, process) {
  return hasOwnProperty.call(global, process);
}
let closure_1 = importDefault(dependencyMap[0]);
let closure_2 = importDefault(dependencyMap[1]);
function deepEqual(arg0, arg1) {
  if (arg0 === arg1) {
    return true;
  } else {
    if ("object" === typeof tmp) {
      if ("object" === typeof tmp2) {
        if (null !== tmp) {
          if (null !== tmp2) {
            const _Object = Object;
            const keys = Object.keys(tmp);
            const _Object2 = Object;
            const keys1 = Object.keys(tmp2);
            if (keys.length !== keys1.length) {
              return false;
            } else {
              for (const item10009 of keys) {
                let tmp4 = item10009;
                let tmp5 = keys1;
                if (obj2.includes(item10009)) {
                  let tmp6 = closure_4;
                  let tmp7 = arg0;
                  let tmp8 = item10009;
                  let tmp9 = arg1;
                }
                obj.return();
                let flag = false;
                return false;
              }
              return true;
            }
            const obj2 = keys1;
          }
        }
      }
    }
    return false;
  }
}

export const toArray = function toArray(arg0) {
  let tmp = arg0;
  if (!Array.isArray(arg0)) {
    const items = [arg0];
    tmp = items;
  }
  return tmp;
};
export const withPrevAndCurrent = function withPrevAndCurrent(arg0, arg1) {
  const global = arg1;
  const callback = [true];
  const items = [];
  let closure_2 = items;
  const item = callback(arg0).forEach((arg0, arg1) => {
    const tmp = arg1(arr[arg1], arg0);
    let arr = arr.push(tmp);
    arr = items.push(tmp);
  });
  return items;
};
export { hasProperty };
export const isTestEnv = function isTestEnv() {
  return hasProperty(global, "process") && false;
};
export const tagMessage = function tagMessage(arg0) {
  return "[react-native-gesture-handler] " + arg0;
};
export const isFabric = function isFabric() {
  return !(null == global || !global.nativeFabricUIManager);
};
export const isReact19 = function isReact19() {
  const version = version.version;
  return version.startsWith("19.");
};
export const isRemoteDebuggingEnabled = function isRemoteDebuggingEnabled() {
  return !(global.nativeCallSyncHook && !global.__REMOTEDEV__ || global.RN$Bridgeless);
};
export { deepEqual };
export const INT32_MAX = 2147483647;
