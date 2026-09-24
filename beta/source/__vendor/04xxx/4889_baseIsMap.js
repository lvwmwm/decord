// Module ID: 4889
// Function ID: 4890
// Name: baseIsMap
// Dependencies: [535, 638]

// Module 4889 (baseIsMap)
import _mod535 from "module_535" /* 535 */;
import _mod638 from "module_638" /* 638 */;


export default function baseIsMap(arg0) {
  let tmp3 = _mod535(arg0);
  if (tmp3) {
    tmp3 = "[object Map]" == _mod638(arg0);
  }
  return tmp3;
};
