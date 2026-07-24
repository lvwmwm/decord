// Module ID: 999
// Function ID: 10725
// Name: walkErrorTree
// Dependencies: [65, 794, 1000, 977]
// Exports: nativeLinkedErrorsIntegration

// Module 999 (walkErrorTree)
import _toConsumableArray from "_toConsumableArray";

const require = arg1;
function walkErrorTree(arg0, arg1, name) {
  let appleDebugImages;
  let appleException;
  if (arguments.length > 4) {
    if (undefined !== arguments[4]) {
      let items4 = arguments[4];
    }
    if (arguments.length > 5) {
      if (undefined !== arguments[5]) {
        let items3 = arguments[5];
      }
      if (name[arg3]) {
        if (items4.length + 1 < arg1) {
          if (obj6.isString(tmp)) {
            let obj = { value: tmp };
            appleException = obj;
          } else if ("stackElements" in tmp) {
            appleException = (function exceptionFromJavaStackElements(name) {
              let closure_0 = outer1_5();
              let obj = { type: name.name, value: name.message };
              obj = {};
              const stackElements = name.stackElements;
              const mapped = stackElements.map((className) => {
                const obj = { platform: "java", module: className.className, filename: className.fileName };
                let lineNumber;
                if (className.lineNumber >= 0) {
                  lineNumber = className.lineNumber;
                }
                obj.lineno = lineNumber;
                obj.function = className.methodName;
                let tmp2 = null === closure_0;
                if (!tmp2) {
                  className = className.className;
                  tmp2 = !className.startsWith(closure_0);
                }
                obj.in_app = !tmp2;
                return obj;
              });
              obj.frames = mapped.reverse();
              obj.stacktrace = obj;
              return obj;
            })(tmp);
          } else if ("stackReturnAddresses" in tmp) {
            ({ appleException, appleDebugImages } = (function exceptionFromAppleStackReturnAddresses(stackReturnAddresses) {
              const NATIVE = outer1_0(outer1_1[3]).NATIVE;
              const nativeStackFramesBy = NATIVE.fetchNativeStackFramesBy(stackReturnAddresses.stackReturnAddresses);
              let obj = {};
              obj = { type: stackReturnAddresses.name, value: stackReturnAddresses.message };
              obj = {};
              let reversed;
              if (null != nativeStackFramesBy) {
                const frames = nativeStackFramesBy.frames;
                reversed = frames.reverse();
              }
              if (!reversed) {
                reversed = [];
              }
              obj.frames = reversed;
              obj.stacktrace = obj;
              obj.appleException = obj;
              let debugMetaImages;
              if (null != nativeStackFramesBy) {
                debugMetaImages = nativeStackFramesBy.debugMetaImages;
              }
              if (!debugMetaImages) {
                debugMetaImages = [];
              }
              obj.appleDebugImages = debugMetaImages;
              return obj;
            })(tmp));
            const tmp9 = (function exceptionFromAppleStackReturnAddresses(stackReturnAddresses) {
              const NATIVE = outer1_0(outer1_1[3]).NATIVE;
              const nativeStackFramesBy = NATIVE.fetchNativeStackFramesBy(stackReturnAddresses.stackReturnAddresses);
              let obj = {};
              obj = { type: stackReturnAddresses.name, value: stackReturnAddresses.message };
              obj = {};
              let reversed;
              if (null != nativeStackFramesBy) {
                const frames = nativeStackFramesBy.frames;
                reversed = frames.reverse();
              }
              if (!reversed) {
                reversed = [];
              }
              obj.frames = reversed;
              obj.stacktrace = obj;
              obj.appleException = obj;
              let debugMetaImages;
              if (null != nativeStackFramesBy) {
                debugMetaImages = nativeStackFramesBy.debugMetaImages;
              }
              if (!debugMetaImages) {
                debugMetaImages = [];
              }
              obj.appleDebugImages = debugMetaImages;
              return obj;
            })(tmp);
          } else {
            obj = require(794) /* registerSpanErrorInstrumentation */;
            const _Error = Error;
            if (obj.isInstanceOf(tmp, Error)) {
              let tmp5Result = tmp5(1000);
              appleException = tmp5Result.exceptionFromError(arg0, name[arg3]);
            } else {
              tmp5Result = tmp5(794);
              appleException = {};
              if (tmp5Result.isPlainObject(tmp)) {
                name = undefined;
                if ("string" === typeof tmp.name) {
                  name = tmp.name;
                }
                appleException.type = name;
                let message;
                if ("string" === typeof tmp.message) {
                  message = tmp.message;
                }
                appleException.value = message;
              } else {
                appleException.exceptions = items4;
                appleException.debugImages = items3;
                return appleException;
              }
            }
          }
          const items = [];
          const items1 = [appleException];
          const combined = items.concat(callback(items4), items1);
          const items2 = [];
          obj6 = require(794) /* registerSpanErrorInstrumentation */;
          const tmp10 = walkErrorTree;
          if (!appleDebugImages) {
            appleDebugImages = [];
          }
          return tmp10(arg0, arg1, tmp, arg3, combined, items2.concat(callback(items3), callback(appleDebugImages)));
        }
      }
      obj = { exceptions: items4, debugImages: items3 };
      return obj;
    }
    items3 = [];
  }
  items4 = [];
}
function fetchNativePackage() {
  if (null === closure_3) {
    const NATIVE = require(977) /* getRNSentryModule */.NATIVE;
    closure_3 = NATIVE.fetchNativePackageName();
  }
  return closure_3;
}
let c3 = null;

export const nativeLinkedErrorsIntegration = function nativeLinkedErrorsIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    let closure_0 = first.key || "cause";
    let closure_1 = first.limit || 5;
    let obj = {
      name: "NativeLinkedErrors",
      setupOnce() {

        },
      preprocessEvent(exception, originalException, getOptions) {
          exception = exception.exception;
          let values;
          if (null !== exception) {
            if (undefined !== exception) {
              values = exception.values;
            }
          }
          if (values) {
            if (originalException) {
              const _Error = Error;
              if (obj.isInstanceOf(originalException.originalException, Error)) {
                const tmp10 = outer1_4(getOptions.getOptions().stackParser, tmp, originalException.originalException, tmp2);
                let debugImages = tmp10.debugImages;
                const items = [];
                exception.exception.values = items.concat(outer1_2(exception.exception.values), outer1_2(tmp10.exceptions));
                exception.debug_meta = exception.debug_meta || {};
                let images = exception.debug_meta.images;
                if (!images) {
                  images = [];
                }
                exception.debug_meta.images = images;
                const images1 = exception.debug_meta.images;
                const push = images1.push;
                if (!debugImages) {
                  debugImages = [];
                }
                push.apply(images1, outer1_2(debugImages));
                const tmp12 = outer1_2(exception.exception.values);
                const tmp14 = outer1_2;
              }
              obj = callback(table[1]);
            }
          }
        }
    };
    return obj;
  }
  first = {};
};
