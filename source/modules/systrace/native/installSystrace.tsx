// Module ID: 13201
// Function ID: 100037
// Name: resolveName
// Dependencies: []
// Exports: installSystrace

// Module 13201 (resolveName)
function resolveName(arg0) {
  let tmp = arg0;
  if ("string" !== typeof arg0) {
    tmp = arg0();
  }
  return tmp;
}
const Systrace = require(dependencyMap[0]).Systrace;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/systrace/native/installSystrace.tsx");

export const installSystrace = function installSystrace() {
  function getNativeModule(arg0) {
    return getNativeModule(closure_1[2]).default;
  }
  if (obj.isAndroid()) {
    Systrace.isEnabled = () => {
      let isEnabledResult;
      const obj = getNativeModule();
      if (null != obj) {
        isEnabledResult = obj.isEnabled();
      }
      return null != isEnabledResult && isEnabledResult;
    };
    Systrace.beginEvent = (arg0) => {
      const obj = getNativeModule();
      if (null != obj) {
        obj.beginEvent(callback(arg0));
      }
    };
    Systrace.endEvent = () => {
      const obj = getNativeModule();
      if (null != obj) {
        obj.endEvent();
      }
    };
    Systrace.beginAsyncEvent = (arg0) => {
      const obj = getNativeModule();
      let beginAsyncEventResult;
      if (null != obj) {
        beginAsyncEventResult = obj.beginAsyncEvent(callback(arg0));
      }
      let num = 0;
      if (null != beginAsyncEventResult) {
        num = beginAsyncEventResult;
      }
      return num;
    };
    Systrace.endAsyncEvent = (arg0, arg1) => {
      const obj = getNativeModule();
      if (null != obj) {
        obj.endAsyncEvent(callback(arg0), arg1);
      }
    };
    Systrace.counterEvent = (arg0, length) => {
      const obj = getNativeModule();
      if (null != obj) {
        obj.counterEvent(callback(arg0), length);
      }
    };
  }
};
