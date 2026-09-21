// Module ID: 14592
// Function ID: 14593
// Name: text
// Dependencies: [14593, 14607]

// Module 14592 (text)
import _mod14593 from "module_14593" /* 14593 */;
import _mod14607 from "module_14607" /* 14607 */;


export default (arg0) => {
  const tmp = _mod14593(arg0, "string");
  let text = tmp;
  if (!_mod14607(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
