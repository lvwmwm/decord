// Module ID: 4887
// Function ID: 4888
// Name: baseIsSet
// Dependencies: [535, 638]

// Module 4887 (baseIsSet)
import _mod535 from "module_535" /* 535 */;
import _mod638 from "module_638" /* 638 */;


export default function baseIsSet(arg0) {
  let tmp3 = _mod535(arg0);
  if (tmp3) {
    tmp3 = "[object Set]" == _mod638(arg0);
  }
  return tmp3;
};
