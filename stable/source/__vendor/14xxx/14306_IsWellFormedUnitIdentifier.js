// Module ID: 14306
// Function ID: 14307
// Name: IsWellFormedUnitIdentifier
// Dependencies: [14303]
// Exports: IsWellFormedUnitIdentifier

// Module 14306 (IsWellFormedUnitIdentifier)
import IsSanctionedSimpleUnitIdentifier from "IsSanctionedSimpleUnitIdentifier" /* 14303 */;

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
      if (tmp(14303).IsSanctionedSimpleUnitIdentifier(tmp3)) {
        if (tmp(14303).IsSanctionedSimpleUnitIdentifier(tmp4)) {
          return true;
        }
      }
      return false;
    }
  }
};
