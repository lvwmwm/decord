// Module ID: 13786
// Function ID: 13787
// Name: __exportStarResult10
// Dependencies: [13783]

// Module 13786 (__exportStarResult10)
import __exportStarResult7 from "__exportStarResult7" /* 13783 */;

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
      if (tmp(13783).IsSanctionedSimpleUnitIdentifier(tmp3)) {
        if (tmp(13783).IsSanctionedSimpleUnitIdentifier(tmp4)) {
          return true;
        }
      }
      return false;
    }
  }
};
