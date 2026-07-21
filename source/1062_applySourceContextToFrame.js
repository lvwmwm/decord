// Module ID: 1062
// Function ID: 11355
// Name: applySourceContextToFrame
// Dependencies: []

// Module 1062 (applySourceContextToFrame)
function applySourceContextToFrame(filename) {
  if (filename.filename === arg2) {
    if (filename.lineno) {
      if (arg1.length) {
        require(dependencyMap[1]).addContextToFrame(arg1, filename, arg3);
        const obj = require(dependencyMap[1]);
      }
    }
  }
  return filename;
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[1]);

export { applySourceContextToFrame };
export const contextLinesIntegration = _module.defineIntegration(function _contextLinesIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    let num = 7;
    if (null != first.frameContextLines) {
      num = first.frameContextLines;
    }
    const require = num;
    const obj = {
      name: "ContextLines",
      processEvent(exception) {
          function addSourceContext(exception, arg1) {
            const _document = arg1(_location[1]).GLOBAL_OBJ.document;
            let _location = arg1(_location[1]).GLOBAL_OBJ.location;
            if (_location) {
              _location = arg1(_location[1]).stripUrlQueryAndFragment(arg1(_location[1]).GLOBAL_OBJ.location.href);
              const obj = arg1(_location[1]);
            }
            if (_document) {
              if (_location) {
                exception = exception.exception;
                let values;
                if (null != exception) {
                  values = exception.values;
                }
                if (null != values) {
                  if (values.length) {
                    if (_document.documentElement.innerHTML) {
                      const items = ["<string:2797840068>", "<string:3881625437>"];
                      const callback = items.concat(callback(str.split("\n")), ["skuId"]);
                      const item = values.forEach((stacktrace) => {
                        stacktrace = stacktrace.stacktrace;
                        if (tmp) {
                          const frames = stacktrace.frames;
                          stacktrace.frames = frames.map((arg0) => {
                            callback(arg0, closure_2, closure_1, closure_0);
                            return arg0;
                          });
                        }
                      });
                      return exception;
                    } else {
                      return exception;
                    }
                  }
                }
                return exception;
              }
            }
            return exception;
          }(exception, num);
          return exception;
        }
    };
    return obj;
  }
  first = {};
});
