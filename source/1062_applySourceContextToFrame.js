// Module ID: 1062
// Function ID: 11356
// Name: applySourceContextToFrame
// Dependencies: [65, 794]

// Module 1062 (applySourceContextToFrame)
import _toConsumableArray from "_toConsumableArray";
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

function applySourceContextToFrame(filename) {
  if (filename.filename === arg2) {
    if (filename.lineno) {
      if (arg1.length) {
        require(794) /* registerSpanErrorInstrumentation */.addContextToFrame(arg1, filename, arg3);
        const obj = require(794) /* registerSpanErrorInstrumentation */;
      }
    }
  }
  return filename;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { applySourceContextToFrame };
export const contextLinesIntegration = registerSpanErrorInstrumentation.defineIntegration(function _contextLinesIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    let num = 7;
    if (null != first.frameContextLines) {
      num = first.frameContextLines;
    }
    let obj = {
      name: "ContextLines",
      processEvent(exception) {
          (function addSourceContext(exception, arg1) {
            let closure_0 = arg1;
            const _document = num(outer2_1[1]).GLOBAL_OBJ.document;
            let _location = num(outer2_1[1]).GLOBAL_OBJ.location;
            if (_location) {
              _location = num(outer2_1[1]).stripUrlQueryAndFragment(num(outer2_1[1]).GLOBAL_OBJ.location.href);
              const obj = num(outer2_1[1]);
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
                      const items = ["<!DOCTYPE html>", "<html>"];
                      let closure_2 = items.concat(outer2_2(str.split("\n")), ["</html>"]);
                      const item = values.forEach((stacktrace) => {
                        stacktrace = stacktrace.stacktrace;
                        if (tmp) {
                          const frames = stacktrace.frames;
                          stacktrace.frames = frames.map((arg0) => {
                            outer4_3(arg0, outer1_2, outer1_1, outer1_0);
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
          })(exception, num);
          return exception;
        }
    };
    return obj;
  }
  first = {};
});
