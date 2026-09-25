// Module ID: 13845
// Function ID: 13846
// Name: text
// Dependencies: [13846, 13860]

// Module 13845 (text)
import _mod13846 from "module_13846" /* 13846 */;
import _mod13860 from "module_13860" /* 13860 */;


export default (arg0) => {
  const tmp = _mod13846(arg0, "string");
  let text = tmp;
  if (!_mod13860(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
