// Module ID: 14244
// Function ID: 14245
// Dependencies: [14223]

// Module 14244
import _mod14223 from "module_14223" /* 14223 */;

const tmp = _mod14223.navigator && _mod14223.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
