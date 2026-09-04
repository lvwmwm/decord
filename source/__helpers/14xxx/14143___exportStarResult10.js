// Module ID: 14143
// Function ID: 14144
// Name: __exportStarResult10
// Dependencies: [14140]

// Module 14143 (__exportStarResult10)
import __exportStarResult7 from "__exportStarResult7" /* 14140 */;

require = arg1;
const dependencyMap = arg6;
arg5.IsWellFormedUnitIdentifier = function IsWellFormedUnitIdentifier(GetOptionResult3) {
  const str = GetOptionResult3.replace(/([A-Z])/g, (arg0, str) => str.toLowerCase());
  if (__exportStarResult7.IsSanctionedSimpleUnitIdentifier(str)) {
    return true;
  } else {
    const parts = str.split("-per-");
    if (2 !== parts.length) {
      return false;
    } else {
      [tmp3, tmp4] = parts;
      if (tmp(14140).IsSanctionedSimpleUnitIdentifier(tmp3)) {
        if (tmp(14140).IsSanctionedSimpleUnitIdentifier(tmp4)) {
          return true;
        }
      }
      return false;
    }
  }
};
