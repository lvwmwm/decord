// Module ID: 14203
// Function ID: 14204
// Name: text
// Dependencies: [14204, 14218]

// Module 14203 (text)
import _mod14204 from "module_14204" /* 14204 */;
import _mod14218 from "module_14218" /* 14218 */;


export default (arg0) => {
  const tmp = _mod14204(arg0, "string");
  let text = tmp;
  if (!_mod14218(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
