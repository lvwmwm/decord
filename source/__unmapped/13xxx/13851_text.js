// Module ID: 13851
// Function ID: 13852
// Name: text
// Dependencies: [13852, 13866]

// Module 13851 (text)
import _mod13852 from "module_13852" /* 13852 */;
import _mod13866 from "module_13866" /* 13866 */;


export default (arg0) => {
  const tmp = _mod13852(arg0, "string");
  let text = tmp;
  if (!_mod13866(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
