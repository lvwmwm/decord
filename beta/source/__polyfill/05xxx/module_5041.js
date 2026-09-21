// Module ID: 5041
// Function ID: 5042
// Dependencies: [1313, 5033, 1306, 1307]

// Module 5041
import _mod1313 from "module_1313" /* 1313 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1313(num)) {
      if (tmp2(5033)(num)) {
        const tmp = tmp2(1306)(num);
        return tmp2(1307)(tmp) === tmp;
      }
    }
  }
  return false;
};
