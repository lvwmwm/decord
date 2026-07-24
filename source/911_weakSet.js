// Module ID: 911
// Function ID: 9993
// Name: weakSet
// Dependencies: [5, 912, 825, 799, 913, 924]
// Exports: wrapMcpServerWithSentry

// Module 911 (weakSet)
import asyncGeneratorStep from "wrapMethodHandler";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakSet = new WeakSet();

export const wrapMcpServerWithSentry = function wrapMcpServerWithSentry(arg0, recordInputs) {
  if (weakSet.has(arg0)) {
    return arg0;
  } else {
    obj = obj(912);
    if (obj.validateMcpServerInstance(arg0)) {
      const client = obj(825).getClient();
      let sendDefaultPii;
      if (null != client) {
        sendDefaultPii = client.getOptions().sendDefaultPii;
      }
      let BooleanResult = Boolean(sendDefaultPii);
      obj = {};
      recordInputs = undefined;
      if (null != recordInputs) {
        recordInputs = recordInputs.recordInputs;
      }
      let tmp10 = BooleanResult;
      if (null != recordInputs) {
        tmp10 = recordInputs;
      }
      obj.recordInputs = tmp10;
      let recordOutputs;
      if (null != recordInputs) {
        recordOutputs = recordInputs.recordOutputs;
      }
      if (null != recordOutputs) {
        BooleanResult = recordOutputs;
      }
      obj.recordOutputs = BooleanResult;
      let obj2 = obj(825);
      obj(799).fill(arg0, "connect", (arg0) => {
        let closure_0 = arg0;
        return (() => {
          let closure_0 = outer2_2(async function(arg0) {
            const length = arguments.length;
            let num = 0;
            if (length > 1) {
              num = length - 1;
            }
            const array = new Array(num);
            for (let num2 = 1; num2 < length; num2 = num2 + 1) {
              array[num2 - 1] = arguments[num2];
            }
            const call = closure_0.call;
            const items = [this, arg0];
            obj = obj(outer4_1[4]);
            const result = obj.wrapTransportOnMessage(arg0, closure_0);
            const tmp2 = yield call.apply(closure_0, items.concat(array));
            obj(outer4_1[4]).wrapTransportSend(arg0, closure_0);
            const obj2 = obj(outer4_1[4]);
            obj(outer4_1[4]).wrapTransportOnClose(arg0);
            const obj3 = obj(outer4_1[4]);
            obj(outer4_1[4]).wrapTransportError(arg0);
            return tmp2;
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })();
      });
      const obj5 = obj(799);
      obj(924).wrapAllMCPHandlers(arg0);
      weakSet.add(arg0);
      return arg0;
    } else {
      return arg0;
    }
  }
};
