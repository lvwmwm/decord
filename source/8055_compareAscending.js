// Module ID: 8055
// Function ID: 8056
// Name: compareAscending
// Dependencies: [638]

// Module 8055 (compareAscending)

export default function compareAscending(arg0, arg1) {
  if (arg0 !== arg1) {
    const tmp7 = require(638) /* isSymbol */(arg0);
    const tmp11 = require(638) /* isSymbol */(arg1);
    if (null !== arg1) {
      if (!tmp11) {
        return 1;
      }
    }
    if (undefined !== arg0) {
      if (tmp4) {
        if (!tmp2) {
          if (!tmp7) {
            return -1;
          }
        }
      }
    }
  }
  return 0;
};
