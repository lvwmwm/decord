// Module ID: 7354
// Function ID: 59288
// Name: _asyncNullishCoalesce2
// Dependencies: []
// Exports: _asyncNullishCoalesce

// Module 7354 (_asyncNullishCoalesce2)
async function _asyncNullishCoalesce2(arg0, arg1, arg2) {
  if (obj) {
    return obj.resume();
  } else {
    return callback(closure_1[1])._nullishCoalesce(arg0, arg1);
  }
}
let closure_2 = require(dependencyMap[0]);

export const _asyncNullishCoalesce = function _asyncNullishCoalesce(arg0, arg1) {
  return _asyncNullishCoalesce2(...arguments);
};
