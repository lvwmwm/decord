// Module ID: 5539
// Function ID: 5540
// Name: tagMessage
// Dependencies: []
// Exports: hasProperty, isRemoteDebuggingEnabled, isTestEnv, tagMessage, toArray, withPrevAndCurrent

// Module 5539 (tagMessage)
let hasOwnProperty;

let tmp2;
let items = [{ code: "(function tagMessage_Pnpm_utilsTs1(msg){return\"[react-native-gesture-handler] \"+msg;})" }];
[tmp2] = items;
function tagMessage(arg0) {
  return "[react-native-gesture-handler] " + arg0;
}
tagMessage.__workletHash = 15113571351126;
tagMessage.__initData = tmp2;
function deepEqual(obj, obj2) {
  if (obj === obj2) {
    return true;
  } else {
    if (typeof obj === "object") {
      if (typeof obj2 === "object") {
        if (null !== obj) {
          if (null !== obj2) {
            const _Object = Object;
            const keys = Object.keys(obj);
            const _Object2 = Object;
            const keys1 = Object.keys(obj2);
            if (keys.length !== keys1.length) {
              return false;
            } else {
              for (const item10007 of keys) {
                obj.return();
                let flag = false;
                return false;
              }
              return true;
            }
          }
        }
      }
    }
    return false;
  }
}

export function toArray(arg0) {
  let tmp = arg0;
  if (!Array.isArray(arg0)) {
    const items = [arg0];
    tmp = items;
  }
  return tmp;
}
export function withPrevAndCurrent(arg0, arg1) {
  let closure_0 = arg1;
  let closure_1 = [null];
  const items = [...arg0];
  const items1 = [];
  const item = items.forEach((item, index) => {
    const tmp = closure_0(closure_1[index], item);
    closure_1.push(tmp);
    items1.push(tmp);
  });
  return items1;
}
export function hasProperty(arg0, arg1) {
  hasOwnProperty = Object.prototype.hasOwnProperty;
  return hasOwnProperty.call(arg0, arg1);
}
export function isTestEnv() {
  hasOwnProperty = Object.prototype.hasOwnProperty;
  const tmp = hasOwnProperty.call(globalThis, "process") && false;
  return tmp;
}
export { tagMessage };
export function isRemoteDebuggingEnabled() {
  const _globalThis = globalThis;
  return !(globalThis.nativeCallSyncHook && !_globalThis.__REMOTEDEV__ || _globalThis.RN$Bridgeless);
}
export { deepEqual };
export const INT32_MAX = 2147483647;
