// Module ID: 7342
// Function ID: 59243
// Name: trpcMiddleware
// Dependencies: [77, 5, 7232, 7235, 7236, 7264, 7250, 7260, 7284, 7263, 7281, 7270, 7251]
// Exports: trpcMiddleware

// Module 7342 (trpcMiddleware)
import _defineProperty from "_defineProperty";
import asyncGeneratorStep from "module_7264";
import "errorCallback";
import module_7235 from "module_7235";
import consoleSandbox from "consoleSandbox";
import module_7264 from "module_7264";
import dateTimestampInSeconds from "dateTimestampInSeconds";
import "SyncPromise";

let closure_4 = { mechanism: { handled: false, data: { function: "trpcMiddleware" } } };

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
        obj = lib(outer3_1[9]);
        const client = obj.getClient();
        let options = client;
        if (client) {
          options = client.getOptions();
        }
        obj = { procedure_path: path, procedure_type: arg0.type };
        if (undefined !== lib.attachRpcInput) {
          let sendDefaultPii = lib.attachRpcInput;
        } else {
          sendDefaultPii = options;
          if (options) {
            sendDefaultPii = options.sendDefaultPii;
          }
        }
        if (sendDefaultPii) {
          if (undefined !== rawInput) {
            tmp2.input = lib(outer3_1[10]).normalize(rawInput);
            const obj4 = lib(outer3_1[10]);
          }
          if (undefined !== getRawInput) {
            if ("function" === typeof getRawInput) {
              const tmp9 = yield getRawInput();
              tmp2.input = lib(outer3_1[10]).normalize(tmp9);
              const obj5 = lib(outer3_1[10]);
            }
          }
        }
        lib(outer3_1[9]).withScope((setContext) => {
          setContext.setContext("trpc", obj);
          obj = path(outer4_1[11]);
          obj = { name: "trpc/" + path, op: "rpc.server", attributes: outer4_2(outer4_2({}, path(outer4_1[12]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "route"), path(outer4_1[12]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.rpc.trpc") };
          return obj.startSpanManual(obj, (() => {
            let closure_0 = outer5_3(/* F59250 */ function*() { ... });
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
