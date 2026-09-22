// Module ID: 4922
// Function ID: 4923
// Dependencies: [1312, 4914, 1305, 1306]

// Module 4922
import _mod1312 from "module_1312" /* 1312 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1312(num)) {
      if (tmp2(4914)(num)) {
        const tmp = tmp2(1305)(num);
        return tmp2(1306)(tmp) === tmp;
      }
    }
  }
  return false;
};
