// Module ID: 910
// Function ID: 9980
// Name: trpcMiddleware
// Dependencies: []
// Exports: trpcMiddleware

// Module 910 (trpcMiddleware)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_4 = { mechanism: {} };

export const trpcMiddleware = function trpcMiddleware() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let closure_0 = {};
    return () => {
      let closure_0 = callback(async (arg0) => {
        let getRawInput;
        let rawInput;
        let path;
        let closure_1;
        let obj;
        path = arg0.path;
        ({ next: closure_1, rawInput, getRawInput } = arg0);
        obj = path(closure_1[3]);
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
        const result = path(closure_1[4]).addNonEnumerableProperty(obj, "__sentry_override_normalization_depth__", 1 + num);
        if (undefined !== path.attachRpcInput) {
          let sendDefaultPii = path.attachRpcInput;
        } else if (null != options) {
          sendDefaultPii = options.sendDefaultPii;
        }
        if (sendDefaultPii) {
          if (undefined !== rawInput) {
            tmp2.input = path(closure_1[5]).normalize(rawInput);
            const obj5 = path(closure_1[5]);
          }
          if (undefined !== getRawInput) {
            if ("function" === typeof getRawInput) {
              const tmp11 = yield getRawInput();
              tmp2.input = path(closure_1[5]).normalize(tmp11);
              const obj6 = path(closure_1[5]);
            }
          }
        }
        const obj4 = path(closure_1[4]);
        path(closure_1[3]).withIsolationScope((setContext) => {
          setContext.setContext("trpc", obj);
          let obj = path(closure_1[6]);
          obj = { name: "trpc/" + path, op: "rpc.server" };
          obj.attributes = obj(obj({}, path(closure_1[7]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "route"), path(closure_1[7]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.rpc.trpc");
          obj.forceTransaction = path.forceTransaction;
          return obj.startSpanManual(obj, () => {
            let closure_0 = callback(/* F9987 */ function*() { ... });
            return () => { ... };
          }());
        });
      });
      return function(arg0) {
        return callback(...arguments);
      };
    }();
  }
};
