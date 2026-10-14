// Module ID: 811
// Function ID: 812
// Name: wrapMcpServerWithSentry
// Dependencies: [5, 812, 724, 698, 813, 824]
// Exports: wrapMcpServerWithSentry

// Module 811 (wrapMcpServerWithSentry)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let _self, closure_4, closure_5;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const weakSet = new WeakSet();

export const wrapMcpServerWithSentry = function wrapMcpServerWithSentry(arg0, recordInputs) {
  let obj3;
  let recordOutputs;
  const obj = weakSet;
  if (weakSet.has(arg0)) {
    return arg0;
  } else {
    const tmp = obj3;
    const obj2 = obj3(812);
    if (obj2.validateMcpServerInstance(arg0)) {
      const tmpResult = tmp(724);
      const client = tmpResult.getClient();
      let sendDefaultPii;
      const _Boolean = Boolean;
      if (client != null) {
        sendDefaultPii = client.getOptions().sendDefaultPii;
      }
      const _BooleanResult = _Boolean(sendDefaultPii);
      recordInputs = undefined;
      if (recordInputs != null) {
        recordInputs = recordInputs.recordInputs;
      }
      if (recordInputs == null) {
        recordInputs = _BooleanResult;
      }
      obj3 = { recordInputs, recordOutputs };
      recordOutputs = undefined;
      if (recordInputs != null) {
        recordOutputs = recordInputs.recordOutputs;
      }
      if (recordOutputs == null) {
        recordOutputs = _BooleanResult;
      }
      const tmpResult3 = tmp(698);
      tmpResult3.fill(arg0, "connect", (arg0) => {
        let closure_0 = _asyncToGenerator(async function(arg0) {
          let closure_3;
          const self = this;
          let closure_1 = arg0;
          let value = [...arguments].slice();
          let c6 = 0;
          let c7 = 0;
          const iter = (async (arg0) => {
            closure_5 = self;
            closure_4 = self;
            _self = closure_1;
            closure_1 = value;
            await "Reflect";
            const call = self.call;
            const items = [closure_5, _self];
            HermesBuiltin.arraySpread(items, closure_1, 2);
            value = await HermesBuiltin.apply(call, items, self);
            const obj7 = _self(closure_3_1[4]);
            const result = obj7.wrapTransportOnMessage(_self, _self);
            const obj8 = _self(closure_3_1[4]);
            obj8.wrapTransportSend(_self, _self);
            const obj9 = _self(closure_3_1[4]);
            obj9.wrapTransportOnClose(_self);
            const obj10 = _self(closure_3_1[4]);
            obj10.wrapTransportError(_self);
            return value;
          })();
          iter.next();
          return iter;
        });
        return function(arg0) {
          return closure_0(...arguments);
        };
      });
      const tmpResult4 = tmp(824);
      tmpResult4.wrapAllMCPHandlers(arg0);
      obj.add(arg0);
      return arg0;
    } else {
      return arg0;
    }
  }
};
