// Module ID: 13904
// Function ID: 13905
// Name: IsWellFormedUnitIdentifier
// Dependencies: [13901]
// Exports: IsWellFormedUnitIdentifier

// Module 13904 (IsWellFormedUnitIdentifier)
import IsSanctionedSimpleUnitIdentifier from "IsSanctionedSimpleUnitIdentifier" /* 13901 */;

require = arg1;
const dependencyMap = arg6;

export const IsWellFormedUnitIdentifier = function IsWellFormedUnitIdentifier(GetOptionResult3) {
  const str = GetOptionResult3.replace(/([A-Z])/g, (arg0, str) => str.toLowerCase());
  if (IsSanctionedSimpleUnitIdentifier.IsSanctionedSimpleUnitIdentifier(str)) {
    return true;
  } else {
    const parts = str.split("-per-");
    if (2 !== parts.length) {
      return false;
    } else {
      [tmp3, tmp4] = parts;
      if (tmp(13901).IsSanctionedSimpleUnitIdentifier(tmp3)) {
        if (tmp(13901).IsSanctionedSimpleUnitIdentifier(tmp4)) {
          return true;
        }
      }
      return false;
    }
  }
};
