// Module ID: 6437
// Function ID: 57816
// Name: _asyncOptionalChainDelete2
// Dependencies: [5, 6436]
// Exports: _asyncOptionalChainDelete

// Module 6437 (_asyncOptionalChainDelete2)
import asyncGeneratorStep from "asyncGeneratorStep";

async function _asyncOptionalChainDelete2(arg0, arg1) {
  const tmp = yield outer2_0(outer2_1[1])._asyncOptionalChain(arg0);
  return null == tmp || tmp;
}

export const _asyncOptionalChainDelete = function _asyncOptionalChainDelete(arg0) {
  return _asyncOptionalChainDelete2(...arguments);
};
