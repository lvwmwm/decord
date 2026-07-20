// Module ID: 911
// Function ID: 9987
// Name: weakSet
// Dependencies: []
// Exports: wrapMcpServerWithSentry

// Module 911 (weakSet)
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakSet = new WeakSet();

export const wrapMcpServerWithSentry = function wrapMcpServerWithSentry(arg0, recordInputs) {
  if (weakSet.has(arg0)) {
    return arg0;
  } else {
    let obj = require(dependencyMap[1]);
    if (obj.validateMcpServerInstance(arg0)) {
      const client = require(dependencyMap[2]).getClient();
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
      const require = obj;
      const obj2 = require(dependencyMap[2]);
      require(dependencyMap[3]).fill(arg0, "connect", (arg0) => () => {
        let closure_0 = callback(async function(arg0) {
          const length = arguments.length;
          let num = 0;
          if (length > 1) {
            num = length - 1;
          }
          const array = new Array(num);
          for (let num2 = 1; num2 < length; num2 = num2 + 1) {
            array[num2 - 1] = arguments[num2];
          }
          const call = callback.call;
          const items = [this, arg0];
          const tmp2 = yield call.apply(closure_0, items.concat(array));
          const result = callback(closure_1[4]).wrapTransportOnMessage(arg0, callback);
          const obj = callback(closure_1[4]);
          callback(closure_1[4]).wrapTransportSend(arg0, callback);
          const obj2 = callback(closure_1[4]);
          callback(closure_1[4]).wrapTransportOnClose(arg0);
          const obj3 = callback(closure_1[4]);
          callback(closure_1[4]).wrapTransportError(arg0);
          return tmp2;
        });
        return function(arg0) {
          return callback(...arguments);
        };
      }());
      const obj5 = require(dependencyMap[3]);
      require(dependencyMap[5]).wrapAllMCPHandlers(arg0);
      weakSet.add(arg0);
      return arg0;
    } else {
      return arg0;
    }
  }
};
