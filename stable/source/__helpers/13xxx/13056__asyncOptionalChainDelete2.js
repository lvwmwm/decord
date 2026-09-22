// Module ID: 13056
// Function ID: 13057
// Name: _asyncOptionalChainDelete2
// Dependencies: [5, 13055]
// Exports: _asyncOptionalChainDelete

// Module 13056 (_asyncOptionalChainDelete2)
import _asyncOptionalChain2 from "_asyncOptionalChain2" /* 13055 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let closure_3 = async function _asyncOptionalChainDelete2() {
  closure_1 = tmp2;
  closure_129_0 = await _asyncOptionalChain2._asyncOptionalChain(closure_0);
  let tmp9 = null == closure_129_0;
  if (!tmp9) {
    tmp9 = closure_129_0;
  }
  return tmp9;
};

export const _asyncOptionalChainDelete = function _asyncOptionalChainDelete(arg0) {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
