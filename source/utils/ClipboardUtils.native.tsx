// Module ID: 5490
// Function ID: 46857
// Name: _copy
// Dependencies: [5, 5491, 2]
// Exports: copy, getString

// Module 5490 (_copy)
import asyncGeneratorStep from "asyncGeneratorStep";

async function _copy(arg0, arg1, arg2) {
  outer2_0(outer2_1[1]).setString(arg0);
  if (null != arg1) {
    arg1();
  }
  yield Promise.resolve();
}
const result = require("set").fileFinishedImporting("utils/ClipboardUtils.native.tsx");

export const SUPPORTS_COPY = true;
export const copy = function copy() {
  return _copy(...arguments);
};
export const getString = function getString() {
  return importDefault(5491).getString();
};
