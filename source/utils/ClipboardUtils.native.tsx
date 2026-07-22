// Module ID: 5489
// Function ID: 46837
// Name: _copy
// Dependencies: []
// Exports: copy, getString

// Module 5489 (_copy)
async function _copy(arg0, arg1, arg2) {
  callback(closure_1[1]).setString(arg0);
  if (null != arg1) {
    arg1();
  }
  yield Promise.resolve();
}
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("utils/ClipboardUtils.native.tsx");

export const SUPPORTS_COPY = true;
export const copy = function copy() {
  return _copy(...arguments);
};
export const getString = function getString() {
  return importDefault(dependencyMap[1]).getString();
};
