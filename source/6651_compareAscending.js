// Module ID: 6651
// Function ID: 58846
// Name: compareAscending
// Dependencies: [576]

// Module 6651 (compareAscending)

export default function compareAscending(arg0, arg1) {
  if (arg0 !== arg1) {
    const tmp7 = require(576) /* isSymbol */(arg0);
    const tmp11 = require(576) /* isSymbol */(arg1);
    if (null !== arg1) {
      if (!tmp11) {
        return 1;
      }
    }
    if (undefined !== arg0) {
      if (tmp4) {
        if (!tmp3) {
          if (!tmp7) {
            return -1;
          }
        }
      }
    }
  }
  return 0;
};
