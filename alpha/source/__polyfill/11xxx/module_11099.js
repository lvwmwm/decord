// Module ID: 11099
// Function ID: 11100
// Dependencies: [5, 10989, 10992, 10993, 11021, 11007, 11017, 11041, 11020, 11038, 11027, 11008]
// Exports: trpcMiddleware

// Module 11099
import _mod11017 from "module_11017" /* 11017 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import registerSpanErrorInstrumentation from "module_10989" /* 10989 */;
import "module_10992";
import CONSOLE_LEVELS from "module_10993" /* 10993 */;
import DEBUG_BUILD from "module_11021" /* 11021 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 11007 */;

let c5, c6;

_mod11017;
let obj = { mechanism: { handled: false, data: { function: "trpcMiddleware" } } };

export const trpcMiddleware = function trpcMiddleware() {
  obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let closure_0 = _asyncToGenerator(async (arg0, value) => {
    let c1;
    let fn;
    let getRawInput;
    let rawInput;
    let tmp;
    let tmp4;
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      let closure_3;
      try {
        let closure_2;
        let obj5;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = tmp;
            const tmp24 = closure_0;
            c1 = undefined;
            closure_3 = undefined;
            const path = closure_0.path;
            ({ next: c1, rawInput, getRawInput } = closure_0);
            const type = closure_0.type;
            const obj8 = closure_0(dependencyMap[8]);
            const client = obj8.getClient();
            const options = client && client.getOptions();
            obj5 = { procedure_path: path, procedure_type: type };
            value = closure_0.attachRpcInput;
            if (undefined !== value) {
              value = closure_0.attachRpcInput;
            } else {
              value = options && options.sendDefaultPii;
            }
            if (value) {
              if (undefined !== rawInput) {
                const normalizer2 = closure_0(dependencyMap[9]);
                value = normalizer2.normalize(rawInput);
                obj5.input = value;
              }
              if (undefined !== getRawInput) {
                if (typeof getRawInput === "function") {
                  c4 = 1;
                  value = getRawInput();
                  c5 = 2;
                  c6 = 1;
                  let obj6 = { value, done: false };
                  return obj6;
                }
              }
            }
          }
        } else if (1 === tmp4) {
          c4 = 0;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          let tmp6 = closure_2;
          closure_3 = value;
          value = obj5;
          const normalizer = closure_0(dependencyMap[9]);
          obj5.input = normalizer.normalize(closure_3);
          c4 = 0;
        }
        let obj3 = closure_0(dependencyMap[8]);
        value = (setContext) => {
          setContext.setContext("trpc", closure_2);
          const tmp2 = closure_1_0(fn[10]);
          obj = { name: "trpc/" + closure_0, op: "rpc.server", attributes: { [closure_1_0(closure_1_1[11]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "route", [closure_1_0(closure_1_1[11]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.rpc.trpc" } };
          const startSpanManual = tmp2.startSpanManual;
          closure_0 = closure_1_2(function*(arg0, value) {
            let tmp;
            function captureIfError(ok) {
              let tmp = typeof ok === "object";
              if (typeof ok === "object") {
                tmp = null !== ok;
              }
              if (tmp) {
                tmp = "ok" in ok;
              }
              if (tmp) {
                tmp = !ok.ok;
              }
              if (tmp) {
                tmp = "error" in ok;
              }
              if (tmp) {
                obj = closure_1_0(closure_1_1[7]);
                obj.captureException(ok.error, closure_1_3);
              }
            }
            closure_0 = arg0;
            if (c6 === 2) {
              c6 = 3;
              const str = "Generator functions may not be called on executing generators";
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                c6 = 2;
                const tmp4 = c5;
                if (0 === c5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    closure_2 = tmp;
                    value = undefined;
                    c4 = 1;
                    c5 = 2;
                    c6 = 1;
                    const obj5 = { value: value(), done: false };
                    return obj5;
                  }
                } else if (1 === tmp4) {
                  c4 = 0;
                  closure_2 = closure_3;
                  const obj3 = closure_0(fn[7]);
                  const captureExceptionResult = obj3.captureException(closure_2, closure_2_3);
                  closure_0.end();
                  throw closure_2;
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  captureIfError(value);
                  closure_0.end();
                  c4 = 0;
                  c6 = 3;
                  obj = { value, done: true };
                  return obj;
                }
              } catch (tmp24) {
                closure_3 = tmp24;
                if (0 === c4) {
                  c6 = 3;
                  throw tmp24;
                } else {
                  c5 = 1;
                }
              }
            }
          });
          return startSpanManual(obj, function(arg0) {
            return closure_0(...arguments);
          });
        };
        c6 = 3;
        const obj7 = { value: obj3.withScope(value), done: true };
        return obj7;
      } catch (tmp18) {
        closure_3 = tmp18;
        if (0 === c4) {
          c6 = 3;
          throw tmp18;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return function(arg0) {
    return closure_0(...arguments);
  };
};
