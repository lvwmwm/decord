// Module ID: 13377
// Function ID: 102575
// Name: resolveName
// Dependencies: [27, 477, 13378, 2]
// Exports: installSystrace

// Module 13377 (resolveName)
import { Systrace } from "get ActivityIndicator";

function resolveName(arg0) {
  let tmp = arg0;
  if ("string" !== typeof arg0) {
    tmp = arg0();
  }
  return tmp;
}
const result = require("enforcing").fileFinishedImporting("modules/systrace/native/installSystrace.tsx");

export const installSystrace = function installSystrace() {
  function getNativeModule(arg0) {
    return getNativeModule(outer1_1[2]).default;
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
        obj.beginEvent(outer1_3(arg0));
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
        beginAsyncEventResult = obj.beginAsyncEvent(outer1_3(arg0));
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
        obj.endAsyncEvent(outer1_3(arg0), arg1);
      }
    };
    Systrace.counterEvent = (arg0, length) => {
      const obj = getNativeModule();
      if (null != obj) {
        obj.counterEvent(outer1_3(arg0), length);
      }
    };
  }
};
