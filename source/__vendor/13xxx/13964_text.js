// Module ID: 13964
// Function ID: 13965
// Name: text
// Dependencies: [13965, 13979]

// Module 13964 (text)
import _mod13965 from "module_13965" /* 13965 */;
import _mod13979 from "module_13979" /* 13979 */;


export default (arg0) => {
  const tmp = _mod13965(arg0, "string");
  let text = tmp;
  if (!_mod13979(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
