// Module ID: 7352
// Function ID: 59267
// Name: _asyncOptionalChainDelete2
// Dependencies: []
// Exports: _asyncOptionalChainDelete

// Module 7352 (_asyncOptionalChainDelete2)
async function _asyncOptionalChainDelete2(arg0, arg1) {
  const tmp = yield callback(closure_1[1])._asyncOptionalChain(arg0);
  return null == tmp || tmp;
}
let closure_2 = require(dependencyMap[0]);

export const _asyncOptionalChainDelete = function _asyncOptionalChainDelete(arg0) {
  return _asyncOptionalChainDelete2(...arguments);
};
