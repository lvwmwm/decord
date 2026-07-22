// Module ID: 747
// Function ID: 8797
// Name: getTag
// Dependencies: [788, 794, 1111, 1000, 1089, 1152, 1156]

// Module 747 (getTag)
import debugSymbolicatorIntegration from "debugSymbolicatorIntegration";
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";
import debugSymbolicatorIntegration from "debugSymbolicatorIntegration";
import init from "init";
import debugSymbolicatorIntegration from "debugSymbolicatorIntegration";
import feedbackAsyncIntegration from "feedbackAsyncIntegration";
import debugSymbolicatorIntegration from "debugSymbolicatorIntegration";
import module_1089 from "module_1089";
import debugSymbolicatorIntegration from "debugSymbolicatorIntegration";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import getTag from "getTag";
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

if (registerSpanErrorInstrumentation) {
  let _module6 = require("registerSpanErrorInstrumentation");
  const _ArrayBuffer = ArrayBuffer;
  const arrayBuffer = new ArrayBuffer(1);
  const prototype2 = _module6.prototype;
  _module6 = new _module6(arrayBuffer);
  registerSpanErrorInstrumentation = getTag(_module6) != "[object DataView]";
}
if (!registerSpanErrorInstrumentation) {
  let _module7 = require("init");
  if (_module7) {
    let _module8 = require("init");
    const prototype3 = _module8.prototype;
    _module8 = new _module8();
    _module7 = getTag(_module8) != "[object Map]";
  }
  registerSpanErrorInstrumentation = _module7;
}
if (!registerSpanErrorInstrumentation) {
  let _module9 = require("feedbackAsyncIntegration");
  if (_module9) {
    const _module10 = require("feedbackAsyncIntegration");
    _module9 = getTag(_module10.resolve()) != "[object Promise]";
  }
  registerSpanErrorInstrumentation = _module9;
}
if (!registerSpanErrorInstrumentation) {
  let _module11 = require("module_1089");
  if (_module11) {
    let _module12 = require("module_1089");
    const prototype4 = _module12.prototype;
    _module12 = new _module12();
    _module11 = getTag(_module12) != "[object Set]";
  }
  registerSpanErrorInstrumentation = _module11;
}
if (!registerSpanErrorInstrumentation) {
  let _module13 = require("_isNativeReflectConstruct");
  if (_module13) {
    let _module14 = require("_isNativeReflectConstruct");
    const prototype5 = _module14.prototype;
    _module14 = new _module14();
    _module13 = getTag(_module14) != "[object WeakMap]";
  }
  registerSpanErrorInstrumentation = _module13;
}
if (registerSpanErrorInstrumentation) {
  getTag = function getTag(_module10) {
    const tmp = require(dependencyMap[6])(_module10);
    let constructor;
    if ("[object Object]" == tmp) {
      constructor = _module10.constructor;
    }
    let str = "";
    if (constructor) {
      str = require(dependencyMap[0])(constructor);
    }
    if (str) {
      if (registerSpanErrorInstrumentation === str) {
        return "[object DataView]";
      } else if (init === str) {
        return "[object Map]";
      } else if (feedbackAsyncIntegration === str) {
        return "[object Promise]";
      } else if (module_1089 === str) {
        return "[object Set]";
      } else if (_isNativeReflectConstruct === str) {
        return "[object WeakMap]";
      }
    }
    return tmp;
  };
}

export default getTag;
