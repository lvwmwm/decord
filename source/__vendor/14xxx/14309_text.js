// Module ID: 14309
// Function ID: 14310
// Name: text
// Dependencies: [14310, 14324]

// Module 14309 (text)
import _mod14310 from "module_14310" /* 14310 */;
import _mod14324 from "module_14324" /* 14324 */;


export default (arg0) => {
  const tmp = _mod14310(arg0, "string");
  let text = tmp;
  if (!_mod14324(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
