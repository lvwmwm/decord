// Module ID: 14235
// Function ID: 14236
// Name: text
// Dependencies: [14236, 14250]

// Module 14235 (text)
import _mod14236 from "module_14236" /* 14236 */;
import _mod14250 from "module_14250" /* 14250 */;


export default (arg0) => {
  const tmp = _mod14236(arg0, "string");
  let text = tmp;
  if (!_mod14250(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
