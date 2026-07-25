// Module ID: 6434
// Function ID: 57803
// Name: _asyncNullishCoalesce2
// Dependencies: [5, 6435]
// Exports: _asyncNullishCoalesce

// Module 6434 (_asyncNullishCoalesce2)
import asyncGeneratorStep from "asyncGeneratorStep";

async function _asyncNullishCoalesce2(arg0, arg1, arg2) {
  if (obj) {
    return obj.resume();
  } else {
    return outer2_0(outer2_1[1])._nullishCoalesce(arg0, arg1);
  }
}

export const _asyncNullishCoalesce = function _asyncNullishCoalesce(arg0, arg1) {
  return _asyncNullishCoalesce2(...arguments);
};
