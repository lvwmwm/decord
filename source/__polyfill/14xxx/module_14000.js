// Module ID: 14000
// Function ID: 14001
// Dependencies: [14001]

// Module 14000
import _mod14001 from "module_14001" /* 14001 */;


export default (arg0) => {
  const tmp = _mod14001(arg0);
  let num = 0;
  if (tmp > 0) {
    num = min(tmp, 9007199254740991);
  }
  return num;
};
