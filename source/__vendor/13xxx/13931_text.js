// Module ID: 13931
// Function ID: 13932
// Name: text
// Dependencies: [13932, 13946]

// Module 13931 (text)
import _mod13932 from "module_13932" /* 13932 */;
import _mod13946 from "module_13946" /* 13946 */;


export default (arg0) => {
  const tmp = _mod13932(arg0, "string");
  let text = tmp;
  if (!_mod13946(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
