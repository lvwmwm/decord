// Module ID: 14630
// Function ID: 14631
// Name: text
// Dependencies: [14631, 14645]

// Module 14630 (text)
import _mod14631 from "module_14631" /* 14631 */;
import _mod14645 from "module_14645" /* 14645 */;


export default (arg0) => {
  const tmp = _mod14631(arg0, "string");
  let text = tmp;
  if (!_mod14645(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
