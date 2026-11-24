// Module ID: 15601
// Function ID: 15602
// Dependencies: [15580, 15579]

// Module 15601
import _mod15579 from "module_15579" /* 15579 */;
import _mod15580 from "module_15580" /* 15580 */;

let tmp = Object.keys || (function keys(arg0) {
  const tmp = _mod15580;
  return tmp(arg0, _mod15579);
});

export default tmp;
