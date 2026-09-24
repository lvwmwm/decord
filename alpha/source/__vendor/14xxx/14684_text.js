// Module ID: 14684
// Function ID: 14685
// Name: text
// Dependencies: [14685, 14699]

// Module 14684 (text)
import _mod14685 from "module_14685" /* 14685 */;
import _mod14699 from "module_14699" /* 14699 */;


export default (arg0) => {
  const tmp = _mod14685(arg0, "string");
  let text = tmp;
  if (!_mod14699(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
