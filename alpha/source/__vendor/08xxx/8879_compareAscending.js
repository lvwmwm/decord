// Module ID: 8879
// Function ID: 8880
// Name: compareAscending
// Dependencies: [553]

// Module 8879 (compareAscending)
import isSymbol from "isSymbol" /* 553 */;


export default function compareAscending(arg0, arg1) {
  if (arg0 !== arg1) {
    const tmp7 = isSymbol(arg0);
    const tmp11 = isSymbol(arg1);
    if (null !== arg1) {
      if (!tmp11) {
        return 1;
      }
    }
    if (undefined !== arg0) {
      if (arg0 == arg0) {
        if (null !== arg0) {
          if (!tmp7) {
            return -1;
          }
        }
      }
    }
  }
  return 0;
};
