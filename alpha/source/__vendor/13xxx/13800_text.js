// Module ID: 13800
// Function ID: 13801
// Name: text
// Dependencies: [13801, 13815]

// Module 13800 (text)
import _mod13801 from "module_13801" /* 13801 */;
import _mod13815 from "module_13815" /* 13815 */;


export default (arg0) => {
  const tmp = _mod13801(arg0, "string");
  let text = tmp;
  if (!_mod13815(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
