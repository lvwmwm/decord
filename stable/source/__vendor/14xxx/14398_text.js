// Module ID: 14398
// Function ID: 14399
// Name: text
// Dependencies: [14399, 14413]

// Module 14398 (text)
import _mod14399 from "module_14399" /* 14399 */;
import _mod14413 from "module_14413" /* 14413 */;


export default (arg0) => {
  const tmp = _mod14399(arg0, "string");
  let text = tmp;
  if (!_mod14413(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
