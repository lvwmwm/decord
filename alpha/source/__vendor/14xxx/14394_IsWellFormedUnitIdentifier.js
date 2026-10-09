// Module ID: 14394
// Function ID: 14395
// Name: IsWellFormedUnitIdentifier
// Dependencies: [14391]
// Exports: IsWellFormedUnitIdentifier

// Module 14394 (IsWellFormedUnitIdentifier)
import SANCTIONED_UNITS from "SANCTIONED_UNITS" /* 14391 */;


export const IsWellFormedUnitIdentifier = function IsWellFormedUnitIdentifier(GetOptionResult3) {
  let tmp3;
  let tmp4;
  const str = GetOptionResult3.replace(/([A-Z])/g, (arg0, str) => str.toLowerCase());
  if (SANCTIONED_UNITS.IsSanctionedSimpleUnitIdentifier(str)) {
    return true;
  } else {
    const parts = str.split("-per-");
    if (2 !== parts.length) {
      return false;
    } else {
      [tmp3, tmp4] = parts;
      if (SANCTIONED_UNITS.IsSanctionedSimpleUnitIdentifier(tmp3)) {
        if (SANCTIONED_UNITS.IsSanctionedSimpleUnitIdentifier(tmp4)) {
          return true;
        }
      }
      return false;
    }
  }
};
