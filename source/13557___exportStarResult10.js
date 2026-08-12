// Module ID: 13557
// Function ID: 13558
// Name: __exportStarResult10
// Dependencies: [13554]

// Module 13557 (__exportStarResult10)
const require = arg1;
const dependencyMap = arg6;
arg5.IsWellFormedUnitIdentifier = function IsWellFormedUnitIdentifier(GetOptionResult3) {
  let tmp3;
  let tmp4;
  const str = GetOptionResult3.replace(/([A-Z])/g, (arg0, str) => str.toLowerCase());
  if (require(13554) /* __exportStarResult7 */.IsSanctionedSimpleUnitIdentifier(str)) {
    return true;
  } else {
    const parts = str.split("-per-");
    if (2 !== parts.length) {
      return false;
    } else {
      [tmp3, tmp4] = parts;
      if (tmp(13554).IsSanctionedSimpleUnitIdentifier(tmp3)) {
        if (tmp(13554).IsSanctionedSimpleUnitIdentifier(tmp4)) {
          return true;
        }
      }
      return false;
    }
  }
};
