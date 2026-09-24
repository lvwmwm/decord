// Module ID: 14639
// Function ID: 14640
// Dependencies: [14618]

// Module 14639
import _mod14618 from "module_14618" /* 14618 */;

const tmp = _mod14618.navigator && _mod14618.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
