// Module ID: 7317
// Function ID: 59008
// Name: generateIteratee
// Dependencies: []

// Module 7317 (generateIteratee)
function generateIteratee(arg0) {
  ({ isBrowser: closure_0, root: closure_1, prefix: closure_2 } = arg0);
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
      if (callback) {
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
        const obj2 = callback(closure_1[2]);
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
const _module = require(dependencyMap[0]);

export { generateIteratee };
export const rewriteFramesIntegration = _module.defineIntegration(() => {
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
    let tmp3 = "window" in require(dependencyMap[1]).GLOBAL_OBJ;
    if (tmp3) {
      tmp3 = undefined !== require(dependencyMap[1]).GLOBAL_OBJ.window;
    }
    let iteratee = first.iteratee;
    if (!iteratee) {
      let obj = { isBrowser: tmp3, root, prefix };
      iteratee = generateIteratee(obj);
    }
    const require = iteratee;
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
            tmp2 = function _processExceptionsEvent(exception) {
              let obj = {};
              obj = {
                values: values.map((stacktrace) => {
                  stacktrace = stacktrace.stacktrace;
                  if (stacktrace) {
                    let obj = {};
                    const stacktrace2 = stacktrace.stacktrace;
                    obj = {};
                    let frames = stacktrace2;
                    if (stacktrace2) {
                      frames = stacktrace2.frames;
                    }
                    if (frames) {
                      frames = stacktrace2.frames;
                      frames = frames.map((arg0) => callback(arg0));
                    }
                    obj.frames = frames;
                    obj.stacktrace = Object.assign({}, stacktrace2, obj);
                    stacktrace = obj;
                  }
                  return Object.assign({}, stacktrace, stacktrace);
                })
              };
              const values = exception.exception.values;
              obj.exception = Object.assign({}, exception.exception, obj);
              return Object.assign({}, exception, obj);
            }(exception);
          }
          return tmp2;
        }
    };
    return obj;
  }
  first = {};
});
