// Module ID: 16385
// Function ID: 16386
// Dependencies: [16386, 16400]

// Module 16385
import _mod16386 from "module_16386" /* 16386 */;
import _mod16400 from "module_16400" /* 16400 */;


export default (arg0) => {
  const tmp = _mod16386(arg0, "string");
  let text = tmp;
  if (!_mod16400(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
