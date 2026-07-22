// Module ID: 7337
// Function ID: 59180
// Name: trpcMiddleware
// Dependencies: []
// Exports: trpcMiddleware

// Module 7337 (trpcMiddleware)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
const _module = require(dependencyMap[2]);
const _module1 = require(dependencyMap[3]);
const _module2 = require(dependencyMap[4]);
const _module3 = require(dependencyMap[5]);
const _module4 = require(dependencyMap[6]);
const _module5 = require(dependencyMap[7]);
let closure_4 = { mechanism: { handled: false, data: { function: "trpcMiddleware" } } };

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
        obj = path(closure_1[9]);
        const client = obj.getClient();
        let options = client;
        if (client) {
          options = client.getOptions();
        }
        obj = { procedure_path: path, procedure_type: arg0.type };
        if (undefined !== path.attachRpcInput) {
          let sendDefaultPii = path.attachRpcInput;
        } else {
          sendDefaultPii = options;
          if (options) {
            sendDefaultPii = options.sendDefaultPii;
          }
        }
        if (sendDefaultPii) {
          if (undefined !== rawInput) {
            tmp2.input = path(closure_1[10]).normalize(rawInput);
            const obj4 = path(closure_1[10]);
          }
          if (undefined !== getRawInput) {
            if ("function" === typeof getRawInput) {
              const tmp9 = yield getRawInput();
              tmp2.input = path(closure_1[10]).normalize(tmp9);
              const obj5 = path(closure_1[10]);
            }
          }
        }
        path(closure_1[9]).withScope((setContext) => {
          setContext.setContext("trpc", obj);
          let obj = path(closure_1[11]);
          obj = { name: "trpc/" + path, op: "rpc.server" };
          obj.attributes = obj(obj({}, path(closure_1[12]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "route"), path(closure_1[12]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.rpc.trpc");
          return obj.startSpanManual(obj, () => {
            let closure_0 = callback(/* F59187 */ function*() { ... });
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
