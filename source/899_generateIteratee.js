// Module ID: 899
// Function ID: 9874
// Name: generateIteratee
// Dependencies: [863, 798, 900]

// Module 899 (generateIteratee)
import setupIntegration from "setupIntegration";

function generateIteratee(arg0) {
  let dependencyMap;
  let generateIteratee;
  let require;
  ({ isBrowser: require, root: dependencyMap, prefix: generateIteratee } = arg0);
  return (filename) => {
    if (filename.filename) {
      let isMatch = /^[a-zA-Z]:\\/.test(filename.filename);
      if (!isMatch) {
        filename = filename.filename;
        let hasItem = filename.includes("\\");
        if (hasItem) {
          const filename2 = filename.filename;
          hasItem = !filename2.includes("/");
        }
        isMatch = hasItem;
      }
      if (closure_0) {
        if (closure_1) {
          filename = filename.filename;
          if (0 === filename.indexOf(closure_1)) {
            filename.filename = filename.replace(closure_1, closure_2);
          }
        }
      } else if (isMatch) {
        if (isMatch) {
          let replaced = str3.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/");
          const str5 = str3.replace(/^[a-zA-Z]:/, "");
        } else {
          replaced = str3;
        }
        const obj2 = outer1_0(outer1_1[2]);
        if (closure_1) {
          let relativeResult = obj2.relative(closure_1, replaced);
        } else {
          relativeResult = obj2.basename(replaced);
        }
        const _HermesInternal = HermesInternal;
        filename.filename = "" + closure_2 + relativeResult;
      }
      return filename;
    } else {
      return filename;
    }
  };
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { generateIteratee };
export const rewriteFramesIntegration = setupIntegration.defineIntegration(() => {
  let prefix;
  let root;
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    ({ prefix, root } = first);
    if (!prefix) {
      prefix = "app:///";
    }
    let _window = "window" in iteratee(798).GLOBAL_OBJ;
    if (_window) {
      _window = iteratee(798).GLOBAL_OBJ.window;
    }
    iteratee = first.iteratee;
    if (!iteratee) {
      let obj = { isBrowser: _window, root, prefix };
      iteratee = generateIteratee(obj);
    }
    obj = {
      name: "RewriteFrames",
      processEvent(exception) {
          exception = exception.exception;
          if (exception) {
            const _Array = Array;
            exception = Array.isArray(exception.exception.values);
          }
          let tmp2 = exception;
          if (exception) {
            tmp2 = (function _processExceptionsEvent(exception) {
              let obj = {};
              obj = {
                values: values.map((stacktrace) => {
                  stacktrace = stacktrace.stacktrace;
                  if (stacktrace) {
                    let obj = {};
                    const stacktrace2 = stacktrace.stacktrace;
                    obj = {};
                    let mapped;
                    if (null != stacktrace2) {
                      const frames = stacktrace2.frames;
                      if (null != frames) {
                        mapped = frames.map((arg0) => outer3_0(arg0));
                      }
                    }
                    obj.frames = mapped;
                    obj.stacktrace = Object.assign({}, stacktrace2, obj);
                    stacktrace = obj;
                  }
                  return Object.assign({}, stacktrace, stacktrace);
                })
              };
              values = exception.exception.values;
              obj.exception = Object.assign({}, exception.exception, obj);
              return Object.assign({}, exception, obj);
            })(exception);
          }
          return tmp2;
        }
    };
    return obj;
  }
  first = {};
});
