// Module ID: 13743
// Function ID: 13744
// Name: text
// Dependencies: [13744, 13758]

// Module 13743 (text)
import _mod13744 from "module_13744" /* 13744 */;
import _mod13758 from "module_13758" /* 13758 */;


export default (arg0) => {
  const tmp = _mod13744(arg0, "string");
  let text = tmp;
  if (!_mod13758(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
