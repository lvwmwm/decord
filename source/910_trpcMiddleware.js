// Module ID: 910
// Function ID: 9982
// Name: trpcMiddleware
// Dependencies: [77, 5, 845, 825, 799, 841, 842, 816]
// Exports: trpcMiddleware

// Module 910 (trpcMiddleware)
import _defineProperty from "_defineProperty";
import asyncGeneratorStep from "normalize";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_4 = { mechanism: { handled: false, type: "auto.rpc.trpc.middleware" } };

export const trpcMiddleware = function trpcMiddleware() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let closure_0 = {};
    return (() => {
      let closure_0 = outer1_3(async (arg0) => {
        let c1;
        let getRawInput;
        let rawInput;
        let path;
        c1 = undefined;
        let obj;
        path = arg0.path;
        ({ next: c1, rawInput, getRawInput } = arg0);
        obj = lib(outer3_1[3]);
        const client = obj.getClient();
        let options;
        if (null != client) {
          options = client.getOptions();
        }
        obj = { procedure_path: path, procedure_type: arg0.type };
        let normalizeDepth;
        if (null != options) {
          normalizeDepth = options.normalizeDepth;
        }
        let num = 5;
        if (null != normalizeDepth) {
          num = normalizeDepth;
        }
        const result = lib(outer3_1[4]).addNonEnumerableProperty(obj, "__sentry_override_normalization_depth__", 1 + num);
        if (undefined !== lib.attachRpcInput) {
          let sendDefaultPii = lib.attachRpcInput;
        } else if (null != options) {
          sendDefaultPii = options.sendDefaultPii;
        }
        if (sendDefaultPii) {
          if (undefined !== rawInput) {
            tmp2.input = lib(outer3_1[5]).normalize(rawInput);
            const obj5 = lib(outer3_1[5]);
          }
          if (undefined !== getRawInput) {
            if ("function" === typeof getRawInput) {
              const tmp11 = yield getRawInput();
              tmp2.input = lib(outer3_1[5]).normalize(tmp11);
              const obj6 = lib(outer3_1[5]);
            }
          }
        }
        const obj4 = lib(outer3_1[4]);
        lib(outer3_1[3]).withIsolationScope((setContext) => {
          setContext.setContext("trpc", obj);
          obj = path(outer4_1[6]);
          obj = { name: "trpc/" + path, op: "rpc.server", attributes: outer4_2(outer4_2({}, path(outer4_1[7]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "route"), path(outer4_1[7]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.rpc.trpc"), forceTransaction: path.forceTransaction };
          return obj.startSpanManual(obj, (() => {
            let closure_0 = outer5_3(/* F9989 */ function*() { ... });
            return () => { ... };
          })());
        });
      });
      return function(arg0) {
        return callback(...arguments);
      };
    })();
  }
};
