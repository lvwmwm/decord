// Module ID: 4558
// Function ID: 4559
// Name: getDefaultOptions
// Dependencies: [4539, 4294]
// Exports: default

// Module 4558 (getDefaultOptions)
import _mod4294 from "module_4294" /* 4294 */;
import assign_mod from "assign" /* 4539 */;

let tmp3;
let assign = assign_mod;
if (!assign) {
  tmp3 = { default: assign };
  const obj = { default: assign };
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod4294.getDefaultOptions());
};
