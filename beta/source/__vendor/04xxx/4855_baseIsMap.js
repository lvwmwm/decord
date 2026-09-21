// Module ID: 4855
// Function ID: 4856
// Name: baseIsMap
// Dependencies: [535, 634]

// Module 4855 (baseIsMap)
import _mod535 from "module_535" /* 535 */;
import _mod634 from "module_634" /* 634 */;


export default function baseIsMap(arg0) {
  let tmp3 = _mod535(arg0);
  if (tmp3) {
    tmp3 = "[object Map]" == _mod634(arg0);
  }
  return tmp3;
};
