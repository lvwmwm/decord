// Module ID: 13651
// Function ID: 13652
// Name: __exportStarResult10
// Dependencies: [13648]

// Module 13651 (__exportStarResult10)
import __exportStarResult7 from "__exportStarResult7" /* 13648 */;

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
      if (tmp(13648).IsSanctionedSimpleUnitIdentifier(tmp3)) {
        if (tmp(13648).IsSanctionedSimpleUnitIdentifier(tmp4)) {
          return true;
        }
      }
      return false;
    }
  }
};
