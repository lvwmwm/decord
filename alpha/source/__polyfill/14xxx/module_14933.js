// Module ID: 14933
// Function ID: 14934
// Dependencies: [14917, 14934]

// Module 14933
import _mod14917 from "module_14917" /* 14917 */;
import _mod14934 from "module_14934" /* 14934 */;

let closure_2 = _mod14917({}.hasOwnProperty);
const tmp = Object.hasOwn || (function hasOwn(arg0, arg1) {
  return closure_2(_mod14934(arg0), arg1);
});

export default tmp;
