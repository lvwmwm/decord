// Module ID: 14620
// Function ID: 14621
// Name: text
// Dependencies: [14621, 14635]

// Module 14620 (text)
import _mod14621 from "module_14621" /* 14621 */;
import _mod14635 from "module_14635" /* 14635 */;


export default (arg0) => {
  const tmp = _mod14621(arg0, "string");
  let text = tmp;
  if (!_mod14635(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
